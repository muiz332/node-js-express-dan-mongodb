// query

/*

nah kali ini kita akan melakukan query pada mongoose
untuk query sebenarnya ada banyak ya yang disupport oleh 
si mongoose

kalian bisa baca didocumentasinya
https://mongoosejs.com/docs/queries.html

semua yang dikembalikan adalah promise
jadi kalian bisa menangkap errornya menggunakan try dan catch jika menggunakan 
async dan await atau kalian bisa menggunakan then dan catch

atau kalian bisa menambahkan diparameter selanjutnya 
yaitu callbacknya dengan parameter itu errornya 

nah sekarang kita coba yang async dan await

*/


async function main(){
    const mongoose = require('mongoose')
    const {Schema} = mongoose

    mongoose.connect('mongodb://127.0.0.1:27017/wpu')

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

    const contact = mongoose.model('contact',schemaContact)

    const dataContact = await contact.find({}).exec()
    mongoose.disconnect()
    console.log(dataContact)

    // jangan lupa tambahkan method exec untuk untuk mengubahnya menjadi promise
    // jadi kita tidak perlu mengubahnya secara manual

}

main()

