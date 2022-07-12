const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')
const {loadContact,findContact,addContact} = require('./util/funcContact')



app.set('view engine','ejs')
app.use(expressLayout)
app.use(express.urlencoded({extended : true}))

app.get('/',(req,res) => {
    const mahasiswa = [
        {
            nama : "M.Mu'izzuddin",
            nim : "1121101980",
            jurusan : "teknik informatika"
        },
        {
            nama : "ilhan",
            nim : "1121101985",
            jurusan : "teknik informatika"
        },
        {
            nama :"tito",
            nim : "1121101981",
            jurusan : "teknik informatika"
        }
    ]
    res.render('home.ejs',{
        layout : 'layout/main-layout',
        mahasiswa,
        title : "halaman home"
    })
})

app.get('/about',(req,res) => {
    res.render('about',{
        layout : "layout/main-layout",
        title : "halaman about"
    })
})

app.get('/contact',(req,res) => {
    const mahasiswa = loadContact()
    res.render('contact',{
        layout : "layout/main-layout",
        mahasiswa,
        title : "halaman contact"
    })
})

app.get('/contact/tambah',(req,res) => {
    res.render('tambah', {
        layout : "layout/main-layout",
        title : "tambah mahasiswa"
    })
})

/*

jadi kalo misalkan kalian punya parameter 
seperti route dibawah ini 
/contact/:nama

dan kalian ingin menambahkan routenya
seperti ini 

/contact/tambah

maka kalian harus tuliskan route tersebut
sebelum route yang ada parameternya ketika nama parent
nya sama yaitu contact

kalo tidak maka dia akan mengakses halaman yang ada parameter
karena dia akan menangkap apapun setelah tanda /contact/

*/

// proses data contact

app.post('/contact',(req,res) => {
    console.log(req.body)
    // kalo kita lihat datanya itu undefined
    /*
    
    nah kenapa seperti  itu?
    karena kita harus parsing dulu menggunakan middleware

    namanya urlencoded
    dan dia adalah build ini middleware jadi
    kalian tidak perlu instal ya 

    nah cara pakainya tinggal kalian tulis
    app.use(express.urlencoded({extended : true}))

    nah sekarang tinggal kita masukkan deh 
    datanya kedalam file contact.json
    
    */

    addContact(req.body)
    // setelah itu kita pindahkan kehalaman contact
    res.redirect('/contact')

    /*
    
    kalo kita tulis urlnya seperti ini 
    maka dia akan melakukan request methodnya get

    dan dia akan balik kehalaman contact
    
    */
})




app.get('/contact/:nama',(req,res) => {
    const nama = req.params.nama
    const mahasiswa = findContact(nama)

    res.render('detil', {
        layout : "layout/main-layout",
        mahasiswa,
        nama,
        title : "halaman detil"
        
    })
})


app.use((req,res) => {
    res.status(404)
    res.set({
        "Content-Type" : "text/html"
    })
    res.send('<h1> 404 </h1>')
})






app.listen(3000,'127.0.0.1',() => {
    console.log(`Server is listening on http://127.0.0.1:3000`)
})



/*

oke jadi seperti itu ya cara kita menambah datanya
tapi sebenarnya itu memiliki banyak kekurangan

gimana kalo ada email yang sama

atau gimana kalo itu bukan email
lalu gimana kalo itu bukan nomor hp

kita akan bahas itu difolder selanjutnya


*/