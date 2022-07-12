const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')
const {loadContact,findContact,addContact} = require('./util/funcContact')
const {body,validationResult,check} = require('express-validator')

/*

nah dimateri kali ini kita akan melekukan validasi terhadap data form
yang diinputkan

untuk kasus kita sekarang itu nama tidak boleh duplikat
dan check apa kah itu adalah sebuah email dan noHP

kita gunakan module express validator
untuk methodnya itu sama ya seperti validator

kalian bisa lihat penggunaannya didocumentasinya
namanya express validator

yang kita require hanyalah body validationResult dan check

untuk cara penggunaanya kita tambahkan array setelah routenya
disini routenya adalah /contact dengan request methodnya post

kita coba

*/



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


// proses data contact

app.post('/contact',[
    body('nama').custom((value) => {

        // custome validator
        const contact = findContact(value)
        if(contact){
            throw new Error('nama contact sudah ada!')

            // kita throw dan akan ditangkap oleh validatorResultnya
        }

        return true

    }),
    body('email').isEmail(),
    body('noHP').isMobilePhone('id-ID')
],(req,res) => {

    /*
    
    nah kalian bisa tulis seperti itu ya
    didalam body ada argument yang namanya sesuai
    dengan value dari name yang ada didalam formnya

    dan untuk menangkap hasilnya kita bisa tuliskan seperti ini 

    
    */

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        throw res.status(400).json({ errors: errors.array() });
    }

    /*
    
    nah kalo errors nya itu tidak kosong maka tampilhan isi errornya
    kalo kita tambahkan email dan noHPnya salah

    maka akan ada 2 erorr
    nah sekarang kita akan check apakah ada nama yang sama 
    dengan menggunakan custome validator

    
    */

    // addContact(req.body)
    // res.redirect('/contact')


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



