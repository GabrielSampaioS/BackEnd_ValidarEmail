# 📧 Validador de E-mails com PIN – Projeto Node.js

Sistema back-end simples para **registro, envio e validação de e-mails** com PIN único, utilizando:
- `Node.js + Express`
- `MongoDB` (armazenamento dos e-mails)
- `Redis` (armazenamento temporário do PIN)
- `Nodemailer` (envio de e-mail com PIN)

---

## ✅ Funcionalidades

- 📥 Registrar e-mail no banco de dados
- 📤 Gerar e enviar um PIN para o e-mail informado
- 🔒 Validar PIN recebido e marcar e-mail como validado
- 📄 Listar todos os e-mails registrados

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- MongoDB (Mongoose)
- Redis
- Nodemailer
- Dotenv

---

## 📦 Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/validador-email.git
cd validador-email

# 2. Instale as dependências
npm install

# 3. Configure o .env
cp .env.example .env
```

---

## 🧪 Arquivo .env (Exemplo)

Crie um arquivo `.env` com as variáveis abaixo:

```env
PORT=433
MONGO_URI=mongodb://localhost:27017/ValidarEmail

REDIS_HOST=127.0.0.1
REDIS_PORT=6379

MAIL_USERNAME=seu.email@gmail.com
MAIL_PASSWORD=sua_senha_de_aplicativo
```

> ⚠️ **Importante:** use uma [senha de aplicativo do Gmail](https://support.google.com/mail/answer/185833?hl=pt-BR) — não sua senha pessoal.

---

## 🚀 Executando o projeto

```bash
npm start
```

---

## 📬 Rotas da API

### 1. Registrar e-mail

```http
POST /email/register
Content-Type: application/json

{
  "email": "usuario@gmail.com"
}
```

---

### 2. Enviar PIN por e-mail

```http
POST /email/send
Content-Type: application/json

{
  "email": "usuario@gmail.com"
}
```

---

### 3. Validar PIN

```http
POST /email/validate
Content-Type: application/json

{
  "email": "usuario@gmail.com",
  "pin": "123456"
}
```

---

### 4. Listar todos os e-mails

```http
GET /email/all
```

---

## 🧠 Estrutura de diretórios

```
├── controllers/
│   └── EmailController.js
├── models/
│   └── Email.js
├── services/
│   ├── pinService.js
│   └── emailService.js
├── .env
├── server.js / index.js
```

---

## 💡 Melhorias futuras

- ⏱ Expiração automática do PIN após validação
- 🔐 Limite de tentativas de PIN (limit-rate)
- 🔍 Validação avançada de formato de e-mail
- 📊 Logs e notificações mais robustas

---

## 👨‍💻 Autor

**Gabriel Sampaio**  
Desenvolvedor back-end em formação  
[LinkedIn](https://www.linkedin.com/in/gabrielsampaio) • [GitHub](https://github.com/GabrielSampaioS)