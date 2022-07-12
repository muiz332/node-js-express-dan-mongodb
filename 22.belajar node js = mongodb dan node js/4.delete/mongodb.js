// mongodb dan node js


// CRUD


const { ObjectID } = require('bson')
const {MongoClient} = require('mongodb')
const uri = 'mongodb://127.0.0.1:27017'

MongoClient.connect(uri,(err,client) => {
    if(err) throw 'koneksi gagal'
    const db = client.db('wpu')


    /*
    
    4.delete

    nah sekarang kita akan mencoba delete ya
    misalkan kita hapus mahasiswa dengan id berapa gitu

    */

    db.collection('mahasiswa').deleteOne({_id : ObjectID("625ec75f524a845c8b473421")}, (err,result) => {
        if(err) throw err
        console.log(result)
        client.close()
    })

    /*
    
    untuk id kita require bson dulu ya core module dari nodejs
    agar kita dapat menggunakan objectIDnya

    kalo kita jalankan maka data yang memiliki object id tersebut akan
    dihapus

    untuk hapus deleteMany itu sama saja penggunaannya dengan deleteOne
    jadi itu cara kita menghapus data 


    
    */




   


})


/*

begitu ya cara kita untuk terkoneksi dengan mongodb menggunakan
node js

ini sederhana sekali bahkan nanti bukan ini yang akan kita pakai
kita akan cari cara agar kita bisa terapkan diaplikasi contact sederhana kita 


tapi setidaknya saat ini kalian bisa tahu bagaimana
caranya memanipulasi data mongodb menggunakan node jsnya 

mudah mudahan kalian paham


jadi itu saja untuk materi kali ini 
kita ketemu lagi dimateri berikutnya 

dan seperti bisa 
jangan lupa titik koma ;

*/