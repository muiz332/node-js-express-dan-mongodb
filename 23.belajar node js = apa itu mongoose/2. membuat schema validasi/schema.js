// schema 


/*

nah sebelum melakukan proses insert update delete dan find
maka kita harus membuat sturktur schema untuk data modelnya 

nah disini kalian harus mendifinisikan field field apa saja 
yang kalian butuhkan beserta type datanya 

jadi nanti ketika yang kita insert itu type datanya salah
maka akan tampil error 

jadi datanya tidak masuk 

nah sekarang kita coba


*/


// membuat connetion ke database setelah portnya

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wpu');



// kita buat schema untuk collectionnya

const contact = mongoose.model("contact", {
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

/*

nah ceritanya gini aja dulu
jadi parameter pertama itu adalah nama collectionnya

kalo tidak ada otomatis akan dibuatkan 
dan parameter kedua itu adalah schemanya 

nama itu typenya apa dan harus ada atau tidak 


untuk mencobanya kita akan melakukan insert
nah isi dari contact ini adalah contructor function

dimana didalam  parameter itu adalah document yang mau kita
masukkan kedalam mongodb

kita coba


*/

// const contact1 = new contact({
//     nama : "husain",
//     noHP : "08123456789",
//     email : "husain@gmail.com"
// })

// // lalu kita simpan ke collection

// contact1.save()
//     .then((result) => {
//         console.log(result)
//     }).catch((err) => {
//         console.log(err)
//     });



/*

nah sebetulnya kalo kalian save saja itu bisa
tapi karena mehtod save itu mengembalikan promise

jadi saya bisa check berhasil atau tidak insert datanya
kalo dia mengembalikan documentnya berarti berhasil

kalo kita check dimongodbnya sudah ada collection contacts
dan sudah diinsertkan datanya

kalo kita jalankan maka documentnya akan tersimpan di
collection contactsnya

jadi kita sudah berhasil connect kedalam mongodbnya 
menggunakan mongoose


untuk schema itu kalo kita ingin 
membuat misalnya collection user

maka kita harus definisikan model usernya seperti apa
ada field apa saja type datanya apa dan lain lain

itu akan kita atur dischemanya 


*/

/*

nah sekarang kita akan mencoba untuk menambahkan document dalam jumlah yang
banyak dengan menggunakan insertMany

*/


contact.insertMany([
    {
        nama : "hasan",
        noHP : "08123466889",
        email : "hasan@gmail.com"
    },
    {
        nama : "tito",
        noHP : "08123466249",
        email : "tito@gmail.com"
    },
    {
        nama : "ilhan",
        noHP : "08123466821",
        email : "ilhan@gmail.com"
    }
],function(err){
    if(err) return err
    console.log('berhasil menambahkan document')
    mongoose.disconnect()
    return
})

/*

jadi kita menggunakan method insertMany dari collectionnya ya 
parameter pertam itu adalah document of array

dan parameter kedua itu adalah callback errornya 
atau kalian juga bisa pakai then dan catch ya

dan kita disconnect mongoosenya 
supaya kita tidak perlu melakukan pemberhentian secara 
manual diterminalnya


*/