const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')
const {loadContact,findContact,addContact,deleteContact} = require('./util/funcContact')
const {body,validationResult,check} = require('express-validator')
const expressSession = require('express-session')
const cookie = require('cookie-parser')
const flash = require('connect-flash')


app.set('view engine','ejs')
app.use(expressLayout)
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))



/*

nah kali ini kita akan menambahkan fitur delete
pada aplikasi kita

*/





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
        req.flash('msg','data contact telah ditambahkan!')
        res.redirect('/contact')
    }


})

/*

nah sekarang kita bikin route untuk menghapus
sebenarnya kalo kalian bikin rest full api 

kalian menggunakan request methodnya delete
tapi karena kali ini ita menggunakan get dan post

maka kita gunakan get saja
dan hati hati kita tulisnya sebelum route detil ya
karena tanda / setelah contact itu artinya dia akan mengambil semua route setelah contact



*/

app.get('/contact/delete/:nama',(req,res) => {
    const contact = findContact(req.params.nama)

    if(!contact){
        res.status(404)
        res.send("<h1> data tidak ada </h1>")
    }else{
        // nah kita bikin method untuk menghapus datanya
        deleteContact(contact.nama)
        // kita juga akan kirimkan pesan kilas menggunakan flash bahwa 
        // data telah berhasil dihapus
        req.flash('msg',`contact dengan nama ${contact.nama} telah berhasil dihapus`)
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

