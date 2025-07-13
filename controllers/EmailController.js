import EmailSchema from '../Model/Email.js'
import { generateAndStorePin, validatePin } from '../services/pinService.js'
//import { sendPinEmail } from'../services/emailService.js'

class EmailController{

    //OK realizar validação melhor
    static async registerEmail(req, res){
        const {email} = req.body;

        if(!email) return res.status(400).json({messagem: 'Email é obrigadorio'})

        try{
            const existe = await EmailSchema.findOne({ email: email });


            if(existe){
                return  res.status(400).json({messagem: 'Email já cadastrado'})
            }

            const novoEmail = new EmailSchema({
                email
            })

            await novoEmail.save()
            return res.status(201).json({messagem: 'Email cadastrado'})
        }catch(err){
            console.error(err)
        }
    }

    //OK ?Gerar pin e encaminar via e-mail
    static async sendPin(req, res){
        
        const {email} = req.body;
        
        try{
            
            const pin = await generateAndStorePin(email)
            //await sendPinEmail(email, pin)
            
            return res.status(200).json({messagem:'PIN enviado com sucesso'})
            
        }catch(err){
            console.error(err)
            return res.status(500).json({message:'Erro interno ao gerar PIN'})
        }
   
    };

    //NÂO Verificar se PIN informado é o qual foi encaminhando e esta no redis
    //static async validatePin();
    
    //OK Trazer todos os e-mails 
    static async getAllEmails(req, res){
        console.log('teste')
        
        try{
            const retorno = await EmailSchema.find()
             res.json(retorno)
        }catch(err){
            console.error(err)
            res.status(500).json({message: "Erro interno no servido"})
        }
        

    };

}

export default EmailController;
