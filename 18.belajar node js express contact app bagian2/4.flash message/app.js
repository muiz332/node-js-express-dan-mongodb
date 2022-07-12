const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')
const {loadContact,findContact,addContact} = require('./util/funcContact')
const {body,validationResult,check} = require('express-validator')
const expressSession = require('express-session')
const cookie = require('cookie-parser')
const flash = require('connect-flash')


/*

nah untuk menambahkan flash message kehalaman contact
ketika datanya sudah ditambahkan

kita akan install beberapa module yang kita butuhkan 
karena ini ada hubungannya dengan session 

flash message itu biasanya tersimpan kedalam sesi
yang hanya ada saat itu aja

jadi yang pertama yang akan kita install adalah
express-session

yang kedua kita juga butuh cookie parser

yang ketiga kita butuh module untuk melakukan 
flashnya 

namanya connect-flash


setelah kalian install jangan lupa direquire
lalu kita akan melakukan configuration


*/


app.set('view engine','ejs')
app.use(expressLayout)
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))


// konfiguration

// middleware cookie parser

app.use(cookie('secret'))
app.use(expressSession({
    cookie : {maxAge : 6000},
    secret : "secret",
    resave : true,
    saveUninitialized : true    
}))

app.use(flash())

/*

kita sudah melakukan configurationnya
untuk detilnya kalian bisa lihat dinpm

setelah itu kita akan gunakan middleware flashnya
kita pergi ke route post /contact

*/



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

    // kita tangkap msgnya dan kita kirimkan

    res.render('contact',{
        layout : "layout/main-layout",
        mahasiswa,
        title : "halaman contact",
        msg : req.flash('msg')
    })

    /*
    
    nanti kalian bisa check dihalaman contactnya
    kalo panjangnya tidak sama dengan 0 maka tampilkan
    data telah ditambahkan
    
    */
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

        }

        return true

    }),
    check('email','email tidak valid!').isEmail(),
    check('noHP','nomor hp tidak valid!').isMobilePhone('id-ID')
],(req,res) => {


    const errors = validationResult(req)
    if(!errors.isEmpty()){

        res.render('tambah',{
            layout : "layout/main-layout",
            title : "tambah mahasiswa",
            errors : errors.array()
        })
    }else{
        addContact(req.body)
        /*
        nah sebelum kita redirect
        kita akan kirimkan flash messagenya  

        caranya kita tulis
        
        */

        req.flash('msg','data contact telah ditambahkan!')
        /*
        
        parameter pertama adalah nama variablenya
        dan parameter kedua adalah valuenya

        jadi nanti disession akan ada satu buah
        variable namanya msg

        nah kalo sudah kita set messagenya 
        kita akan tangkap dihalaman contact 

        kita pergi ke route get contact

        dan ketika ada variable didalam session
        itu kita bisa tangkap diroute manapun ya


        
        */


        res.redirect('/contact')
    }


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

oke jadi itu fitur yang kita tambahkan kali ini 
yaitu tambah data contact

jadi mungkin itu saja untuk materi kali ini
kita ketemu lagi dimateri berikutnya 

dan seperti biasa jangan lupa titik koma ; 

*/