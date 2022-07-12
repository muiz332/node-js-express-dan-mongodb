/*

misalnya kita buat halaman index.html
yang isinya hanya h1

nah halaman ini yang saya ingin tampilkan ketika saya masuk ke
halaman rootnya 

*/

// const http = require('http')
// const fs = require('fs')
// const port = 3000
// const localHost = '127.0.0.1'



// http
//  .createServer((req,res) => {
//     res.writeHead(200,{
//          'Content-Type' : 'text/html'
//     })
//     const url = req.url
//     if(url === '/about'){
//         res.write('<h1>ini adalah halaman abot</h1>')
//         res.end()
//     }else{
//                     /*
    
//     jadi kita bisa melakukan read file pada file index.html
//     yang nanti akan kita kirimkan kemethod write
//     */
//         fs.readFile('index.html',"utf-8",(err,data) =>{
//             if(err){
//                 res.writeHead(404)
//                 res.write('page is not found')
//             }else{
//                 res.write(data)
//             }

//             res.end()
//         })
//     }



//  }).listen(port,localHost,() => {
//      console.log(`Server is listening on port ${port}`)
//  })


/*

nah sekarang kita coba jalankan
sekarang sudah bener ya 

yang dikembalikan itu adalah halaman index yang sudah kita buat

nah sekarang sudah tampil nih 
ini adalah hasil dari apa yang ada didalam index.html


nah untuk halaman yang lain kita bisa
masukkan readfilenya kedalam function

*/



const http = require('http')
const fs = require('fs')
const port = 3000
const localHost = '127.0.0.1'

const renderHTML = function(path,res){
    fs.readFile(path,"utf-8",(err,data) =>{
        if(err){
            res.writeHead(404)
            res.write('page is not found')
        }else{
            res.write(data)
        }

        res.end()
    })
}



http
 .createServer((req,res) => {
    res.writeHead(200,{
         'Content-Type' : 'text/html'
    })
    const url = req.url
    if(url === '/about'){
        renderHTML('about.html',res)
    }else if(url === '/contact'){
        renderHTML('contact.html',res)
    }else if(url === '/'){
        renderHTML('./index.html',res)
    }else{
        res.writeHead(404)
        res.write('page is not found')
        res.end()
    }



 }).listen(port,localHost,() => {
     console.log(`Server is listening on port ${port}`)
 })


/*
 
  nah jadi nanti kalo ada error pada bagian read filenya
  maka akan tampil page is not found

  jadi kita bisa bkin untuk tiap tiap halaman 
  membaca filenya dengan url sendiri sendiri

  jadi ini adalah web server yang sangat sederhana 
  kalo kalian mau menambahkan halaman silahkan

  tapi seperti yang kalian lihat ini bukan yang kita inginkan 
  kalo kalian ingin menampilkan web server simple
  hanya beberapa halaman static

  bisa menggunakan cara ini 
  tapi kedepannya kita nanti butuh data 
  yang dikirimkan untuk tiap halaman 

  mungkin saja kita nanti terkoneksi kedalam data base 
  mungkin kita nanti mengelola halamannya menggunakan 
  request method yang berbeda 

  ini kita semua masih menggunakan GET ya   
  gimana kalo nanti kita punya form 

  itu semua sebetulnya bisa dilakukan menggunakan server 
  yang sangat sederhana ini 
  
  cuma nanti jadinya banyak hal yang harus kita lakukan
  secara manual

  nah makanya kita butuh bantuan
  bantuan dari sebuah module

  yang nanti kita bisa install lewat npm 
  yang namanya express 

  ya jadi semua yang kita lakukan tadi 
  akan bisa dilakukan dengan sangat mudah 

  menggunakan express 

  dan ini akan kita pelajari dimateri berikutnya 

  oke ya itu pembuatan web server yang sangat sederhana
  mudah mudahan kalian paham

  sekali lagi web server yang kita buat tadi masih menggunakan
  core modulenya node js 

  masih sangat sederhana
  masih jauh dari kata sempurna 

  sehingga nanti dimateri berikutnya kita nanti
  akan coba perbaiki lagi agar web servernya 

  nanti kita ganti bukan lagi menggunakan core modulenya
  node js tapi kita pakai express

  ya dan dimateri berikutnya kita akan mulai 
  akan membahas dari yang sangat sederhananya dulu 
  mengenai express ini

  jadi sampai disini materi kali ini 
  kita akan ketemu lagi dimateri berikutnya 
  dan seperti biasa jangan lupa titik koma ; 


 
*/