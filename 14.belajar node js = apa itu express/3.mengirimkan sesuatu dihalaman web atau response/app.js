// mengirimkan tag html

// const express = require('express')
// const app = express()
// const port = 3000


// app.get('/',(req,res) => {
//     res.send('<h1>selamat datang dihalaman utama')
// })
// app.get('/about',(req,res) => {
//     res.send('<h1>selamat datang dihalaman about')
// })
// app.get('/contact',(req,res) => {
//     res.send('<h1>selamat datang dihalaman contact')
// })

// app.use('/',(req,res) => {
//     res.status(404)
//     res.send('404')
// })

// app.listen(port,()=>{
//     console.log(`Server is listenning on port ${port}`)
// })

/*

kalian bisa paksa apa yang dikirimkan itu menjadi text html
jadi secara default yang dikembalikan memang text

yang sudah diterjemahkan oleh browser menjadi 
document html 

nah tapi kita juga bisa mengirimkannya bukan html
misalnya kita mau mengirimkan json 

kita punya method yang namanya res.json()
nah parameternya itu object ya

nanti kalo notasi object jadi jsonnya 
sudah langsung diterjemahkan 

*/

// const express = require('express')
// const app = express()
// const port = 3000


// app.get('/',(req,res) => {
//     res.json({
//         nama : 'muiz',
//         umur : 18,
//         universitas : 'Stikom Pgri Banyuwangi'
//     })
// })
// app.get('/about',(req,res) => {
//     res.send('<h1>selamat datang dihalaman about')
// })
// app.get('/contact',(req,res) => {
//     res.send('<h1>selamat datang dihalaman contact')
// })

// app.use('/',(req,res) => {
//     res.status(404)
//     res.send('404')
// })

// app.listen(port,()=>{
//     console.log(`Server is listenning on port ${port} http://localhost:${port}`)
// })


/*

jadi kalo saya tulis seperti itu diresponse para route utamanya
yang dikirimkan ke halamannya adalah json

kalian bisa install extenstion dibrowser kalian 
namanya json view agar tampilannya rapi 

nah lalu kita juga bisa sendFile()
kalo mau mengembalikan isi dari sebuah file

nah misalkan kita punya file html
nah kita bisa kirimkan file tersebut kebrowser

nah argument pertama itu adalah pathnya
dan argument kedua itu adalah letak rootnya

dengan cara kita mengirimkan object
{
    root : __dirname
}

nah dirname ini adalah direktori tempat dimana
file  app.json ini berada 

jadi kita beritahu rootnya itu adalah 
folder ini 

sehingga begitu kita tuliskan relatif urlnya 
itu akan relatif terhadap rootnya 

*/

const express = require('express')
const app = express()
const port = 3000


app.get('/',(req,res) => {
    res.sendFile('./index.html',{root:__dirname})
})
app.get('/about',(req,res) => {
    res.sendFile('./about.html',{root:__dirname})
})
app.get('/contact',(req,res) => {
    res.sendFile('./contact.html',{root:__dirname})
})

app.use('/',(req,res) => {
    res.status(404)
    res.send('404')
})

app.listen(port,()=>{
    console.log(`Server is listenning on port ${port} http://localhost:${port}`)
})


/*

kita gunakan pada route halaman utama ya
dan kita coba jalankan 

nah maka dia akan menampilkan apa yang ada 
didalam file index.html 

kalo kalian ingin tahu method apa saja
kalian bisa baca documentasi expressnya 

jadi ini gampang banget ya 
dari pada kita pakai switch case atau if dimateri sebelumnya 

oke itu kalo misalkan mau menampilkan halaman halaman 
webnya menggunakan method get yang mengembalikan isi dari file

atau kalo kalian punya file pdf itu bisa ditampilkan 
menggunakan method sendFile()
gambar juga bisa 

nah karena sebetulnya untuk menampilkan halaman html 
ini kita tidak melakukan ini 

akan lebih bagus kalo nanti kita menggunakan view
tapi itu akan kita bahas dimateri berikutnya

ya jadi itu mengenai response 

*/