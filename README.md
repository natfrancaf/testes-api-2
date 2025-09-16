# API de Transferências

Esta API permite realizar operações de registro, login, consulta de usuários e transferências de valores entre usuários. O banco de dados é em memória, ideal para aprendizado de testes e automação de APIs.

## Instalação

1. Clone o repositório ou copie os arquivos para seu ambiente.
2. Instale as dependências:
   ```powershell
   npm install express swagger-ui-express
   ```

## Execução

Para iniciar o servidor:
```powershell
node server.js
```
A API estará disponível em `http://localhost:3000`.

## Endpoints

- `POST /register` — Registra um novo usuário. Campos obrigatórios: `username`, `password`. Opcional: `favorecido` (boolean).
- `POST /login` — Realiza login. Campos obrigatórios: `username`, `password`.
- `GET /users` — Lista todos os usuários cadastrados.
- `POST /transfer` — Realiza transferência entre usuários. Campos: `from`, `to`, `amount`.
- `GET /transfers` — Lista todas as transferências realizadas.
- `GET /api-docs` — Documentação Swagger interativa.

## Regras de Negócio

- Não é permitido registrar usuários duplicados.
- Login exige usuário e senha válidos.
- Transferências para destinatários não favorecidos só podem ser realizadas se o valor for menor que R$ 5.000,00.
- Transferências para favorecidos não têm limite de valor.

## Testes

Para testar a API com Supertest, importe o `app.js` em seus testes sem iniciar o servidor.

## Documentação

Acesse `/api-docs` para visualizar e testar os endpoints via Swagger.

---

API criada para fins de aprendizado de testes e automação.
