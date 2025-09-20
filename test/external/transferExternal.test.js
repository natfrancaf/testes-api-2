//Teste feito com o servidor rodando, api rodando localmente

//bibliotecas
const request = require('supertest'); //fazer requisições
const  {expect} =  require('chai'); //para fazer asserções



// Testes
describe('Transfer', () => {
    describe('POST /transfers', () => {
        it.only('Quando informo remetente e destinátario inexistentes recebo 400', async () => {
           //1 Capturar o Token
            const respostaLogin = await request('http://localhost:3000')
                .post('/login')
                .send({
                    username: 'natalia',
                    password: '123456'
                });

            const token = respostaLogin.body.token;


           //2) 
            const resposta = await request('http://localhost:3000')
                .post('/transfer')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    "from": "natalia",
                    "to": "fabio",
                    "amount": 100
                }) //usando o supertest pra fazer requisições

            expect(resposta.status).to.equal(400);  
            expect(resposta.body).to.have.property('error', 'Sender or recipient not found.');  
        });

            });
});