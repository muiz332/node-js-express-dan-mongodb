// express

/*

nah kita buka documentasinya express
caranya kalian bisa ke NPMnya atau diwebsite resminya

kita langsung saja install expressnya ya
npm i express


nah sekarang kita akan membuat hal yang sama dengan apa yang 
sudah kita lakukan menggunakan core module 

jadi nanti kita bisa lihat dan membandingkan
lebih mudah mana penggunaannya 


nah cara pakainya kalian bisa lihat didocumentasinya
pada getting started 

*/

// kita panggil dulu modulenya

// const express = require('express')

// // variable express akan mengembalikan sebuah function
// // dan function tersebut akan mengembalikan object

// const app = express()
// const port = 3000

// // kita bikin routingnya 

// app.get('/',(req,res) => {
//     res.send('hello world')
// })


// // nah lalu kita bikin listeningnya
// // untuk melisten request yang dikirimkan ke server
// app.listen(port,() => {
//     console.log(`Server is listening on port ${port}`)
// })

/*

nah kalo kita jalankan
maka akan tampil tuh hello worldnya 

tapi masih dalam bentuk plaint text

nah jadi bacanya seperti ini
dimulai dari app ya

setelah kita menjalankan appnya lalu ketika ada
request methodnya get kehalaman root atau halaman utama

maka jalankan callback berikut ini 
nah fungsinya adalah kirimkan responsenya berupa
tulisan hello world 

selain dari itu tidak akan ditangani 



jadi ini gampang banget ya dibandingkan kita 
menggunakan core module http 

nah sekarang gimana kalo mau menambahkan 
route baru

jadi kita panggil lagi methodnya get 
dan buat routenya apa

misalnya halaman about 
dan halaman contact


*/
// const express = require('express')
// const app = express()
// const port = 3000


// app.get('/',(req,res) => {
//     res.send('hello world')
// })

// app.get('/about',(req,res) => {
//     res.send('ini adalah halaman about')
// })

// app.get('/contact',(req,res) => {
//     res.send('ini adalah halaman contact')
// })



// app.listen(port,() => {
//     console.log(`Server is listening on port ${port}`)
// })

/*

kita coba jalankan 
dan kita coba menuju kehalaman about

nah akan tampil ya ini adalah halaman about 

lalu kita juga bisa pakai nodemon ya
agar tidak perlu melakukan restart secara berulang ulang

ini yang paling sederhana kita membuat route ketika ada
request lewat browser dengan method get 


kalo kita menulis alamat dibrowser begitu kita enter
itu kita mengisimkan request dengan methode get 

kealamat yang kita tuliskan

nah selain get juga ada banyak
bisa post,put,delete dll 

nah itu akan kita bahas ditopik yang berbeda 


nah selanjutnya kita juga bisa gunakan method yang namanya use()

jadi user ini untuk menjalankan middleware
kalo kita masuk kedalam documentasinya di APInya 
yang versi 4 

kita cari method user didalam appnya 

jadi dengan menggunakan user ini kita bisa 
memanggil sebuah middleware atau function 

karena nanti node js ini semuanya bisa kita anggap 
sebagai middleware 

nah argumentnya ada dua ada path dan callback


*/


// const express = require('express')
// const app = express()
// const port = 3000


// app.get('/',(req,res) => {
//     res.send('hello world')
// })

// app.get('/about',(req,res) => {
//     res.send('ini adalah halaman about')
// })

// app.get('/contact',(req,res) => {
//     res.send('ini adalah halaman contact')
// })

// app.use('/',(req,res) => {
//     res.send('tes')
// })


// app.listen(port,() => {
//     console.log(`Server is listening on port ${port}`)
// })


/*

nah kita coba 
kapan tes ini akan dikirimkan kebrowser 

kalo kita kehalaman root yang muncul adalah
hello wordl bukan tes 

nah tapi kalo kita menuliskan sesuatu yang tidak ada 
maka akan tampil tes 

jadi maksutnya method use ini akan selalu dijalankan 
untuk request apapun 

tapi kenapa ketika saya kehalaman root
yang tampil itu hello wordl bukan tes


itu karena kita sudah menuliskan request kehalam
utama sebelum method use ini 


jadi kalo misalkan kalian tulis use ini 
dipaling atas maka semua request akan menjalankan use
ini 

jadi ini bisa kita gunakan untuk menangani ketika halamannya 
tidak ada 

nah nanti sebaiknya kalian buat halaman 
untuk masing masing response ya 

*/


const express = require('express')
const app = express()
const port = 3000


app.get('/',(req,res) => {
    res.send('hello world')
})

app.get('/about',(req,res) => {
    res.send('ini adalah halaman about')
})

app.get('/contact',(req,res) => {
    res.send('ini adalah halaman contact')
})

app.use('/',(req,res) => {

    /*
    
    dan kalo halamannya tidak ada 
    kita kirimkan status codenya 404 

    kalo tidak kalian kirimkan maka status 
    codenya 304 atau tidak dimodifikasi

    untuk mengatasi itu cara seperti ini 
    
    */
   res.status(404)
    res.send('tes')
})


app.listen(port,() => {
    console.log(`Server is listening on port ${port}`)
})


/*

kalo kita lihat dinetwordnya
maka status codenya sudah 404 


oke jadi itu kalo misalnya kita mau buat routing yang
sangat sederhana 

nah mungkin kalian ada yang tanya
setiap kita punya callback itu ada req dan res 

dan ini isinya apa 

nah request secara sederhana adalah apa yang dikirimkan 
ke express 

dan response itu apa yang dikembalikan oleh expressnya 
nah nanti kita coba lihat satu satu 


*/