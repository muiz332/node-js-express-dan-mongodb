const fs = require('fs')
const readline = require('readline')


const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})


rl.question('masukkan namamu: ',nama =>{
    rl.question('nomor HP: ', nomor => {
        const masuk = {nama,nomor}
        fs.readFile('./contacts.json',"utf8",(er, data) =>{
            if(er) throw er
            // jadi kita ubah dulu data yang diambil mejadi data json
            const kirim = JSON.parse(data)
            kirim.push(masuk)

            // untuk mengirimnya kalian harus ubah data json ini menjadi
            // string, jadi kita balikin menggunakan JSON.stringify

            fs.writeFileSync('./contacts.json',JSON.stringify(kirim))
            console.log('terimakasih data telah dikirim')
        })


        rl.close()
    })
})

/*

json itu perilakunya mirip dengan array
jadi saya bisa push

saat kita kirimkan datanya kita harus ubah dulu 
data JSONnya mejadi string

caranya kita tulis JSON.stringify() 
untuk mengubah data json menjadi string 

nah coba kalian jalanin
sudah benar ya seiring kalian menambahkan 
datanya maka data json yang ada didalam contacts akan bertambah

[{"nama":"muiz","nomor":"9765"},{"nama":"husain","nomor":"75423"}]

kalo kalian lihat formatnya udah json ya 

sip ya jadi kita sudah bisa bikin aplikasi contact
sederhana dengan menggunakan dua core module 

mudah mudahan kalian paham cara menggunakan core module ini
silahkan kalian pelajari sendiri cara menggunakan core module yang lainnya


oke jadi mungkin itu tadi penggunaan core module
mudah mudahan memberikan kalian gambaran 
gimana cara pakai module module utama yang ada didalam node js 

jadi silahkan kalo kalian mau coba module module yang lain 
buka documentasinya 

karena kurang lebih penggunaanya sama ya 

dan dimateri berikutnya kita akan pelajari NPM 
atau thrid party module


kenapa ada thrid party module?
karena kadang kadang module yang diberikan oleh node js ini 
belum cukup untuk memenuhi kebutuhan kita 

dari pada kita bikin sendiri modulenya 
lebih baik kita cari modulenya didalam NPM 


dan kita akan pelajari apa itu NPM 
dan bagaimana cara pakainya dimateri berikutnya

jadi sampai disini dulu materi kita kali ini 
kita akan ketemu lagi dimateri berikutnya
dan satu lagi 

jangan lupa titik koma ; 


*/