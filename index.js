// =======================
// Importação de módulos
// =======================
import express from 'express'
//import path from 'path'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

// =======================
// Inicialização do app
// =======================
const app = express();

// =======================
// Middlewares para receber dados do body
// =======================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// =======================
// Conexão com o banco de dados
// =======================
const uri = process.env.MONGO_URI

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB com sucesso!');
    
    const PORT = process.env.PORT
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
import router from './Routes/emailRoutes.js'

app.use('/api', router);

