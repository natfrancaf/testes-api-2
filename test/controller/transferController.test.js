//bibliotecas
const request = require('supertest'); //fazer requisições
const sinon = require('sinon'); //simular funções
const  {expect} =  require('chai'); //para fazer asserções


// Aplicação
const app = require('../../app');
const transferService = require('../../service/transferService');

// teste sem uso de simulador
describe('Transfer Controller', () => {
    describe('POST /transfers', () => {
       beforeEach(async () => {
          const respostaLogin = await request(app)
                .post('/login')
                .send({
                   username: 'natalia',
                   password: '123456'
                
                });
            
            token = respostaLogin.body.token;
       })
       
        it('Quando informo remetente e destinátario inexistentes recebo 400', async () => {
                   
            //Realizar a transferencia
            const resposta = await request(app)
                .post('/transfer')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    "from": "Natalia",
                    "to": "Fabio",
                    "amount": 100
                }) //usando o supertest pra fazer requisições

            expect(resposta.status).to.equal(400);  
            expect(resposta.body).to.have.property('error', 'Sender or recipient not found.');  
        });


        it('Usando Mocks: Quando informo remetente e destinátario inexistentes recebo 400', async () => {
<<<<<<< Updated upstream
=======
                    
>>>>>>> Stashed changes
            //Mocar a função transfer do service
            const transferServiceMock = sinon.stub(transferService, 'transfer');
            transferServiceMock.returns({ error: 'Sender or recipient not found.' });

            const resposta = await request(app)
                .post('/transfer')
<<<<<<< Updated upstream
                .send({
                    from: "Natalia",
=======
                .set('Authorization', `Bearer ${token}`)
                .send({
                    from: "natalia",
>>>>>>> Stashed changes
                    to: "Fabio",
                    amount: 100
                }) //usando o supertest pra fazer requisições

            expect(resposta.status).to.equal(400);  
            expect(resposta.body).to.have.property('error', 'Sender or recipient not found.');
            
            //Reseto o Mock
            sinon.restore();
        });
           
    });
});