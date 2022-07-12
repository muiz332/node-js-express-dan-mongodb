// mongodb dan node js


// CRUD


const {MongoClient} = require('mongodb')
const uri = 'mongodb://127.0.0.1:27017'

MongoClient.connect(uri,(err,client) => {
    if(err) throw 'koneksi gagal'
    const db = client.db('wpu')

    /*
    
    3.update

    nah sekarang kita akan mencoba untuk update
    kita akan menggunakan method updateOne()

    nah method updateOne ini memiliki tiga parameter
    parameter pertama itu adalah filternya atau document yang
    nama yang mau diupdate

    parameter kedua adalah document baru 
    dan parameter ketiga adalah callback error dan hasilnya
    kita coba
    
    */

    db.collection('mahasiswa').updateOne(
        {nama : "muiz"}, 
        {$set : {nama : "Muhammad Mu'izzuddin"}},
        (err,result) => {
            if(err) throw err
            console.log(result)
            client.close()

    })

    /*
    
    jadi kita piliah document dengan nama muiz
    lalu ubah nama tersebut dengan nama baru

    kalo kita jalankan
    nah sudah ya kalian bisa check diterminalnya 
    bahwa datanya telah diubah

    nah sekarang kalo ingin mengubah datanya banyak bagaimana?
    kita tinggal menggunakan method namanya updateMany ya

    untuk penggunaannya sama seperti updateOne
    
    */


   


})
