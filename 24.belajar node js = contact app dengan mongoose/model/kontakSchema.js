const mongoose = require('mongoose')
const {Schema} = mongoose
mongoose.connect('mongodb://127.0.0.1:27017/wpu')


const contactSchema = new Schema({
    nama : {
        type : String,
        required : true
    },
    noHP : {
        type : String,
        required : true
    },
    email : String
})

const contact = mongoose.model('contact',contactSchema)
module.exports = contact