// menuliskan file secara asyncronous

/*

nah sekarang kita coba menuliskan file secara asyncronous

nah jadi kita panggil methodnya namanya writeFIle

lalu ada tiga parameter
parameter pertama itu pathnya 
parameter kedua itu datanya 

dan parameter ketiga itu adalah callback untuk menangani ketika eror
jadi kalo pakai asyncronous dia pakai gaya penulisan callback

misalnya kita buat folder yang namanya data

*/

const fs = require('fs')
fs.writeFile('./data/tes.txt','hello world secara asyncronus!',(er) => {

    // callbacknya menerima satu parameter yaitu erornya 
    console.log(er)
})


/*

sekarang coba kita jalankan 
maka akan muncul kembalian null karena tidak ada yang eror ya 

kalo kita lihat didalam filder data maka 
akan ada file namanya tes.txt yang isinya
hello world secara asyncronous


kalok datanya sedikit ini tidak kelihatan ya 
kalok ascyncronous ini non blocking ya 

jadi kalo misalnya tulisannya panjang banget kita bisa
lanjut kefungsi berikutnya sambil menunggu datanya berhasil dituliskan 


oke jadi itu cara menggunakan module yang ada didalam node js
simple ya temen temen 

semua ada didalam documentasinya    
jadi semangat ya belajarnya 


*/