// =======================
// Importação de módulos
// =======================
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

// =======================
// Inicialização do app
// =======================
const app = express();

// =======================
// Middlewares para receber dados do body
// =======================
//app.use(express.urlencoded({ extended: true }));

// =======================
// Conexão com o banco de dados
// =======================
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/EncurtandoURL';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB com sucesso!');
    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
        console.log(`Conectado ao MongoDB: ${uri}`);
    });
}).catch(err => {
    console.error('Erro ao conectar no MongoDB:', err);
});

// =======================
// Importação dos Controllers e Rotas 
// =======================
// app.use('/suaRota', require('./routes/suaRota'));
