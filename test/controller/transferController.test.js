//bibliotecas
const request = require('supertest'); //fazer requisições
const sinon = require('sinon'); //simular funções
const  {expect} =  require('chai'); //para fazer asserções

// Aplicação
const app = require('../../app');

// teste sem uso de simulador
describe('Transfer Controller', () => {
    describe('POST /transfers', () => {
        it('Quando informo remetente e destinátario inexistentes recebo 400', async () => {
            const resposta = await request(app)
                .post('/transfer')
                .send({
                    "from": "Natalia",
                    "to": "Fabio",
                    "amount": 100
                }) //usando o supertest pra fazer requisições

            expect(resposta.status).to.equal(400);  
            expect(resposta.body).to.have.property('error', 'Sender or recipient not found.');  
        });
           
    });
});