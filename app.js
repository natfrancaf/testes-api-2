
const express = require('express');
const userController = require('./controller/userController');
const transferController = require('./controller/transferController');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const { verifyToken } = require('./service/authService');

const app = express();
app.use(express.json());

// Middleware de autenticação JWT
function authMiddleware(req, res, next) {
	const authHeader = req.headers['authorization'];
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		return res.status(401).json({ error: 'Token não informado.' });
	}
	const token = authHeader.split(' ')[1];
	const payload = verifyToken(token);
	if (!payload) {
		return res.status(401).json({ error: 'Token inválido ou expirado.' });
	}
	req.user = payload;
	next();
}

// User routes
app.post('/register', userController.register);
app.post('/login', userController.login);
app.get('/users', userController.getUsers);

// Transfer routes protegidas
app.post('/transfer', authMiddleware, transferController.transfer);
app.get('/transfers', authMiddleware, transferController.getTransfers);

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
