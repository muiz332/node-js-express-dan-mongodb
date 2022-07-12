// mongodb dan node js


// CRUD


const {MongoClient} = require('mongodb')
const uri = 'mongodb://127.0.0.1:27017'

MongoClient.connect(uri,(err,client) => {
    if(err) throw 'koneksi gagal'
    const db = client.db('wpu')
    // jadi dia akan mengambil data base wpu


    /*
    
    2.find

    nah sekarang kita akan mencoba bagaimana caranya untuk
    menampilkan datanya

    nah sekarang kita menggunakan method yang berbeda
    kita akan menggunakan method find

    kita bisa menampilkan semua data atau kita bisa menampilkan
    data sesuai dengan kriteria yang kita inginkan

    kita coba
    
    
    */

    // const hasil = db.collection('mahasiswa').find()
    // console.log(hasil)

    /*
    
    kalo kita jalankan maka hasilnya adalah object
    bukan data documentnya

    nah datanya ada didalam sini tapi kita harus extrax dulu
    kalo kita mau menampilkan documentnya dalam bentuk array
    bukan dalam object yang besar 

    kita tinggal tambahkan method lagi namanya to array
    
    */

    // db.collection('mahasiswa').find().toArray((err,result) => {
    //     if(err) throw err
    //     console.log(result)
    //     client.close()
    // })

    /*
    kalo kita jalankan maka dia akan mengembalikan documents yang kita inginkan

    nah selanjutnya jika kita ingin menampilkan datanya berdasarkan 
    kriterianya kita tinggal masukkan kriterianya kedalam find
    
    
    */

    
    db.collection('mahasiswa').find({nama : "hasan"}).toArray((err,result) => {
        if(err) throw err
        console.log(result)
        client.close()
    })

    /*
    
    nah misalkan saya ingin menampilkan document yang memiliki
    nama hasan

    tinggal kita kasih object seperti itu didalam findnya
    kalo kita jalankan maka data hasan telah diambil

    jadi itu caranya ntuk menampilkan data
    
    */

})