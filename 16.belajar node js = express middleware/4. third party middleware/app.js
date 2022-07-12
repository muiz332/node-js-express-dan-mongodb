

const express = require('express')
const morgan = require('morgan')
const expressLayouts = require('express-ejs-layouts');
const app = express()
const port = 3000

/*

nah kali ini kita akan coba third party middleware
jadi ini middleware yang dibuat oleh orang lain
yang kita bisa gunakan 

kalian bisa lihat documentasinya 
untuk third party middleware apa saja yang sering 
digunakan

kita akan coba yang paling simple
namanya morgan ini digunakan untuk menuliskan log 
kedalam console

kita install dulu 
npm install morgan

cara pakainya tinggal use saja
kerena dia third party maka kita require dulu 

nah kalo kalian tahu dimateri sebelumnya kita sudah pernah coba
middleware third party ini namanya express ejs layout

dan dia dijalankan sebelum halamannya tampil 

nah untuk morgan itu memiliki 1 parameter
parameternya itu berfungsi mau seberapa lengkap informasi
yang ingin ditampilkan

kalian bisa lihat dinpm juga


*/


app.set('view engine','ejs')
app.use(expressLayouts)

app.use(morgan('dev'))

/*

kita coba jalankan

maka diconsole akan tampil

GET /about 304 7.208 ms - -
GET /style.css 304 0.930 ms - -
GET /img/download.jpg 304 1.587 ms - -
time Tue Apr 05 2022 06:17:18 GMT+0700 (Western Indonesia Time)
GET /about 304 6.243 ms - -
GET /style.css 304 1.856 ms - -
GET /img/download.jpg 304 0.856 ms - -

itu adalah informasi mengenai app kita 

oke jadi seperti itu penggunaan dari middleware ya
mungkin itu saja materi kali ini 

mudah mudahan kalian paham
kita akan ketemu lagi dimateri berikutnya

dan satu lagi jangan lupa titik koma ;


*/



app.use(express.static('public'))


app.use((req,res,next) => {
    console.log(`time ${new Date()}`)
    next()
})

app.get('/',(req,res) =>{
    const mahasiswa = [
        {
            nama : 'muiz',
            email : 'muiz@gmail.com'
        },
        {
            nama : 'husain',
            email : 'husain@gmail.com'
        },
        {
            nama : 'hasan',
            email : 'hasan@gmail.com'
        }
    ]

    res.render('index',{title : 'Home',mahasiswa,layout : 'layouts/main-layout'})
})


app.get('/about',(req,res,next) =>{

    
    res.render('about',{
        title : 'about',
        layout : 'layouts/main-layout'
    })


})


app.use((req,res,next)=> {
    console.log('coba')
    next()
} )


app.get('/contact',(req,res) =>{
    res.render('contact',{
        title : 'contact',
        layout : 'layouts/main-layout'
    })
})


app.get('/product/:id',(req,res) => {
    res.json({
        nama : "muiz",
        jurusan : "teknik informatika",
        univ : "stikom banyuwangi"
    })
})



app.use((req,res) => {
    res.status(404)
    res.send('page is not found')
})


app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`)
})





