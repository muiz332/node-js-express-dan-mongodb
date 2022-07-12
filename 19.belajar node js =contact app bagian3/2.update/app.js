const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')
const {loadContact,findContact,addContact,deleteContact,updateContact} = require('./util/funcContact')
const {body,validationResult,check} = require('express-validator')
const expressSession = require('express-session')
const cookie = require('cookie-parser')
const flash = require('connect-flash')


app.set('view engine','ejs')
app.use(expressLayout)
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))



/*

nah kali ini kita akan menambahkan fitur update
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


app.post('/contact/update',[
    body('nama').custom((value,{req}) => {

        // custome validator

        /*
        
        nahd sini kita check dulu apakah nama lama itu sama dengan
        nama baru kalo iya tidak apa apa 

        mungkin saja email dan no hpnyaitu berubah

        kalo misalnya nama lama tidak sama dengan nama baru
        kita checklagi apakah ada duplikat gak kalo ada tampilkan error

        nah nama lama itu berasal dari req.body.namaLama
        tapi masalahnya kalo kita tulis didalam validation body ini
        tidak memiliki akses ke object request

        sedangkan object requst itu baru bisa diakses dibawah setelah vali
        stionnya selesai

        nah gimana supaya kita tetap dapat akses ke object request?
        itu kita harus kirim juga sebagai parameter kevalidasinya 

        nah express validator memungkinkan itu asalkan kita kirim 
        sebuah object {req} 

        setelah parameter valuenya 

        
        */  



        const contact = findContact(value)
        if(req.body.namaLama != value){
            if(contact){
                throw new Error('nama contact sudah ada!')
            }
        }

        return true

    }),
    check('email','email tidak valid!').isEmail(),
    check('noHP','nomor hp tidak valid!').isMobilePhone('id-ID')
],(req,res) => {


    const errors = validationResult(req)
    if(!errors.isEmpty()){

        res.render('update',{
            layout : "layout/main-layout",
            title : "update mahasiswa",
            errors : errors.array(),
            contact : req.body
        
        })
    }else{
        console.log(req.body)
        updateContact(req.body)
        
        req.flash('msg','data contact telah diubah!')
        res.redirect('/contact')
    }

    // tapi kalo kita jalankan ketika namanya  salah maka
    /*
    
    kalo kita tekan ubah lagi maka dia akan berhasil
    nah itu yang tidak kita inginkan
    
    */

})






/*

nah sekarang kita akan bikin fitur untuk 
mengupdate datanya



*/

app.get('/contact/update/:nama',(req,res) => {
    const contact = findContact(req.params.nama)

    res.render('update',{
        layout : "layout/main-layout",
        title : "halaman update",
        contact

        
    })
})



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

