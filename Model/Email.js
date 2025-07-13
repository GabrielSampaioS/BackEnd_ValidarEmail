import mongoose from 'mongoose'

const EmailSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true
    },
    
    validado: {type: Boolean, default: 0}
})

export default mongoose.model('Email', EmailSchema)
