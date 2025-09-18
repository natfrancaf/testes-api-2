//Teste feito com o servidor rodando, api rodando localmente

//bibliotecas
const request = require('supertest'); //fazer requisições
const  {expect} =  require('chai'); //para fazer asserções



// Testes
describe('Transfer', () => {
    describe('POST /transfers', () => {
        it('Quando informo remetente e destinátario inexistentes recebo 400', async () => {
            const resposta = await request('http://localhost:3000')
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