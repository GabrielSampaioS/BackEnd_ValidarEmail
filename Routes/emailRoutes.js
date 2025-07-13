import express from 'express'
const router = express.Router();


import EmailController from '../controllers/EmailController.js';


//Cadastrar e-mail no sistema (status: não validado)
router.post('/register', EmailController.registerEmail);

//Enviar PIN para o e-mail já cadastrado
router.post('/send-pin', EmailController.sendPin);

// Validar PIN recebido por e-mail
router.post('/validate-pin', EmailController.validatePin);

//Listar todos os e-mails (ex: para interface administrativa)
router.get('/emails', EmailController.getAllEmails);

export default router;
