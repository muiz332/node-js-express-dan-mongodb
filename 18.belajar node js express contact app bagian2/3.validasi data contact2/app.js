const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')
const {loadContact,findContact,addContact} = require('./util/funcContact')
const {body,validationResult,check} = require('express-validator')

/*

nah sekarang kalo kalian lihat pesan errornya 
selain  yang custom validation

itu adalah invalid value
nah kita bisa melakkan custome error dengan mengganti method body
dengan check

dan parameter keduanya itu adalah pesan errornya

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

        }

        return true

    }),
    check('email','email tidak valid!').isEmail(),
    check('noHP','nomor hp tidak valid!').isMobilePhone('id-ID')
],(req,res) => {

    /*
    
    kalo kita jalankan maka akan tampil
    email tidak valid atau nomor hp tidak valid
    
    tapi sekarang pesan errornya itu akan saya tampilkan
    dihalaman tambah

    dan akan mengirimkan pesan errornya

    
    */

    


    const errors = validationResult(req)
    if(!errors.isEmpty()){
        // throw res.status(400).json({ errors: errors.array() });

        /*
        
        kita tinggal kirimkan pesan erronya disini

        
        */

        res.render('tambah',{
            layout : "layout/main-layout",
            title : "tambah mahasiswa",
            errors : errors.array()
        })
    }else{
        addContact(req.body)
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

nah jadi gitu cara kita untuk melakukan validasi pada data form

nah selanjutnya saya akan tambahkan sedikit
saya mau kasih flash message 

yang hanya tampil ketika datanya sudah ditambahkan 
jadi kalo ada data baru sudah tambahkan saya ingin 
didalam contact itu ada alert data berhasil ditambahkan 

nah ini ada beberapa module yang harus kita install
kita lanjut setelah ini 

*/