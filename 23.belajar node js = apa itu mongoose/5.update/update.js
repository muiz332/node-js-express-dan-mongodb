// update


/*

nah sekarang kita akan mencoba untuk melakukan update 
menggunakan mongoose 

method yang kita gunakan disini ada updateOne dan updateMany
kita coba

*/

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

// contact.updateOne({nama : "tito"}, {email : "tito123@gmail.com"},(err,result) => {
//     if(err) return err
//     console.log(result)
//     mongoose.disconnect()
// })
contact.updateOne({nama : "ilhan"}, {email : "ilhan123@gmail.com"}).then((result) => {
    console.log(result)
    mongoose.disconnect()
}).catch((err) => {
    console.log(err)
    mongoose.disconnect()
});
/*

jadi begitu ya caranya untuk mengupdate document
parameter pertama itu querynya dan parameter kedua itu adalah updatenya
lalu parameter ketiga itu kalian bisa gunakan callback

karena dia mengembalikan promise

kalo misalkan kalian menggunakan async dan await 
kailan bisa gunakan exec() untuk mengubahnya menjadi promise

*/