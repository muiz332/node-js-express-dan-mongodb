// delete


/*

nah sekarang kita akan melakukan delete document
menggunakan mongoose ini

yaitu dengan menggunakan method deleteOne
dan deleteMany

kita coba


*/

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/wpu')
const {Schema} = mongoose


const schemaContact = new Schema({
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

const colContact = new mongoose.model('contact',schemaContact)
colContact.deleteOne({nama : "hasan"},(err) => {
    if(err) return err
    console.log('document berhasil dihapus')
    mongoose.disconnect()
    return
})

/*

untuk deleteMany itu sama saja ya tinggal querynya saja yang kalian 
sesuaikan document mana saja yang mau kalian hapus

*/