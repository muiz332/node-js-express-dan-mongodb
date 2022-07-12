// mongodb dan node js

/*

dimateri kali ini kita akan menggunakan node js agar terhubung kedalam
database mongodb kita yang sudah kita install 

nah kita bisa lihat didocumentasi mongodbnya
bagaimana caranya agar node js bisa terhubung kemongodb

https://www.mongodb.com/docs/drivers/node/current/


yang pertama kita install dulu driver mongodbnya
menggunakan npm i mongodb

nanti kalo sudah kita bisa terkonekse secara cloud yaitu 
menggunakan mongodb atlas atau kita bisa terkoneksi secara
lokal dikomputer kita

tapi kalian buat database dulu namanya wpu
dan kalian buat collection namanya mahasiswa

lalu insertkan datanya

db.mahasiswa.insertMany([
    {
        nama : "muiz",
        email : "muiz@gmail.com"
    },
    {
        nama : "tito",
        email : "tito@gmail.com"
    },
    {
        nama : "hasan",
        email : "hasan@gmail.com"
    },
])



nah sekarang kita require dulu ya 


*/

// const {MongoClient} = require('mongodb')

// // kita buat urinya dulu 

// const uri = 'mongodb://127.0.0.1:27017'


// // lalu kita konfigurasi

// const client = new MongoClient(uri,{
//     useNewUrlParser : true,
//     useUnifiedTopology : true
// })


// // setelah konfigurasi kita bisa langsung connect
// // kita akan menggunakan callback ya

// client.connect((err,client) => {
//     if(err) return console.log('koneksi gagal')

//     console.log('koneksi berhasil')
// })

// nah kita akan lihat yang tampil nanti apa 

/*

kalo kita jalankan yang tampil adalah koneksi berhasil
tapi disini kalian juga bisa melakukan connect tanpa konfigurasi 

karena diversi 4 keatas itu kalo kita lihat didocumentasinya 
itu tidak perlu menggunakan konfigurasi 

nah disini kita akan ikuti berdasarkan documentasinya
kita akan buat tanpa menggunakan konfigurasi


*/

// versi 4 keatas

// const {MongoClient} = require('mongodb')
// const uri = 'mongodb://127.0.0.1:27017'


// MongoClient.connect(uri,(err,client) => {
//     if(err) throw 'koneksi gagal'

//     console.log('koneksi berhasil')
// })

/*

kalo kita jalankan maka akan tampil
koneksi berhasil

sekali lagi kita akan menggunakan yang ini ya
untuk study kasus kita nanti

kita bisa pakai throw untuk mengirimkan text saja
kalo console kita bisa return

nah sekarang kita sudah berhasil connect keserver mongodb kita 
dan sekarang kita akan mencoba untuk melakukan crud ya

kita akan coba menambah data, melihat data, menghapus data,
dan mengupdate data

secara sederhana lewat module ini


*/





// CRUD


const {MongoClient} = require('mongodb')
const uri = 'mongodb://127.0.0.1:27017'

MongoClient.connect(uri,(err,client) => {
    if(err) throw 'koneksi gagal'

    /*
    
    sebelum melakukan crud kita harus pilih dulu 
    databasenya

    caranya kalian tulis
    
    */

    const db = client.db('wpu')
    // jadi dia akan mengambil data base wpu


    /*
    
    1.insert

    nah yang pertama kita akan coba insert dulu ya
    untuk menambahkan data kita butuh sebuah method yang namanya
    insertOne atau inserMany

    untuk cara insertnya sama saja 
    seperti ini 

    db.nama collection.insertOne(document)
    
    untuk versi nodenya kalian pilih dulu nama collectionnya
    */
//    const document = {
//        nama : "husain",
//        email : "husain@gmail.com" 
//    }

//     db.collection('mahasiswa').insertOne(document,(err,result) => {
//         /*
//         nah parameter pertama itu adalah errornya dan parameter 
//         kedua itu adalah responsenya ketika berhasil

//         untuk response ketika berhasil itu sama dengan response
//         yang ada didalam mongodb ya ketika berhasil
//         menginsertkan documentnya
        
//         */

//         if(err) throw 'gagal menambahkan data'
//         console.log(result)

//         client.close()
//         // kita bisa hentikan connectionnya ya setelah kita insert
//     })

    /*
    
    kalo kita jalankan
    maka akan tampil response berhasilnya ya

    kalo kalian check didalam cmdnya itu datanya telah berhasil ditambahkan
    nah itu caranya kalo kita mau menambahkan satu data

    nah sekarang gimana kalo kita ingin menambahkan lebih dari satu document?
    kita bisa menggunakan insertMany dan documentnya itu dibungkus kedalam sebuah
    array
    
    */

    const documents = [
        {
            nama : "ilhan",
            email : 'ilhan@gmail.com'
        },
        {
            nama : "tiyasku",
            email : 'tiyasku@gmail.com'
        },
        {
            nama : "romi",
            email : 'romi@gmail.com'
        }
    ]
 
     db.collection('mahasiswa').insertMany(documents,(err,result) => {
 
         if(err) throw 'gagal menambahkan data'
         console.log(result)
 
         client.close()
     })
 

     /*
     
     kalo kita jalankan
     maka dacuments telah berhasil ditambahkan

     oke jadi itu caranya untuk menambahkan dacumentnya
     
     */















})