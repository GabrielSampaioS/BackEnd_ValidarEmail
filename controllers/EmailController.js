import EmailSchema from '../Model/Email.js'
import { generateAndStorePin, validatePin } from '../services/pinService.js'
import EmailService from '../services/emailService.js';

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

    //OK Gerar pin e encaminar via e-mail
    static async sendPin(req, res){
        
        const {email} = req.body;
        
        try{
            
            const pin = await generateAndStorePin(email)
            EmailService.sendPinEmail(email, pin) //email, pin
            
            return res.status(200).json({messagem:'PIN enviado com sucesso'})
            
        }catch(err){
            console.error(err)
            return res.status(500).json({message:'Erro interno ao gerar PIN'})
        }
   
    };

    //Verificar se PIN informado é o qual foi encaminhando e esta no redis
    static async validatePin(req, res){
        const {email, pin} = req.body

        const isValid = await validatePin(email, pin)

        if(isValid){
            await EmailSchema.findOneAndUpdate(
                {email},
                {validado: true}
            )
            return res.status(200).json({ message: "Email validado com sucesso." });
        }else{
            res.status(401).json({message:"Email NÂO validado"})
        }


    };
    
    //OK Trazer todos os e-mails 
    static async getAllEmails(req, res){
        
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
