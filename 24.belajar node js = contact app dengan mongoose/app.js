const express = require('express')
const expressLayout = require('express-ejs-layouts')
const {body, check,validationResult} = require('express-validator')

const contact = require('./model/kontakSchema')
const app  = express()

const session = require('express-session')
const cookie = require('cookie-parser')
const flash = require('connect-flash')

app.set('view engine','ejs')
app.use(expressLayout)
app.use(express.urlencoded({extended : true}))

app.use(cookie('secret'))
app.use(session({
    cookie : {maxAge : 6000},
    secret : "secret",
    resave : true,
    saveUninitialized : true    
}))

app.use(flash())



// home

app.get('/',(req,res)=> {
    res.render('./home',{
        layout : "./layouts/main-layout",
        title : "Beranda"
    })
})


// about

app.get('/about',(req,res) => {
    res.render('./about',{
        layout : "./layouts/main-layout",
        title : "Tentang"
    })
})


// contact

app.get('/contact', async (req,res) => {
    const documents = await contact.find({})
    res.render('./contact',{
        layout : "layouts/main-layout",
        title : "Kontak",
        documents,
        msg : req.flash('msg')
    })
})

app.get('/contact/add',(req,res) => {
    res.render('add',{
        layout : "layouts/main-layout",
        title : "Tambah Kontak"
    })
})

app.get('/contact/update/:nama', async (req,res) => {
    const document = await contact.findOne({nama : req.params.nama})

    res.render('update',{
        layout : "layouts/main-layout",
        title : "Ubah Kotak",
        document
    })
})


// contact post

app.post('/contact',[
    body('nama').custom(async value => {
        const document = await contact.find({nama : value})
        if(document.length != 0){
            throw new Error('Nama kontak sudah ada!')
        }
        return true
    }),
    check('email').isEmail().withMessage('Email tidak valid!'),
    check('noHP').isMobilePhone('id-ID').withMessage('No Hp tidak valid!')
],async (req,res) => {
    const error = validationResult(req)

    if(!error.isEmpty()){
        res.render('add',{
            layout : "layouts/main-layout",
            title : "Tambah Kontak",
            errors : error.array()
        })
    }else{
        const {nama,noHP,email} = req.body
        const add = new contact({nama,noHP,email})
        await add.save()
        req.flash('msg',"Kontak berhasil ditambahkan!")
        res.redirect('/contact')
    }

})

app.post('/contact/update',[
    body('nama').custom(async (value ,{req}) => {
        const document = await contact.find({nama : value})

        if(value != req.body.nama){
            if(document.length != 0){
                throw new Error('Nama kontak sudah ada!')
            }
        }
        return true
    }),
    check('email').isEmail().withMessage('Email tidak valid!'),
    check('noHP').isMobilePhone('id-ID').withMessage('No Hp tidak valid!')
],async (req,res) => {
    const error = validationResult(req)

    if(!error.isEmpty()){
        res.render('update',{
            layout : "layouts/main-layout",
            title : "Ubah Kontak",
            errors : error.array(),
            document : req.body

        })
    }else{
        const {nama,noHP,email, namaLama} = req.body
        await contact.updateOne({nama : namaLama},{nama,noHP,email})
        req.flash('msg',"Kontak berhasil diubah!")
        res.redirect('/contact')
    }
})




// detil


app.get('/detil/delete/:nama',async (req,res) => {
    await contact.deleteOne({nama : req.params.nama})
    req.flash('msg','Kontak berhasil dihapus')
    res.redirect('/contact')
})

app.get('/detil/:nama', async (req,res) => {
    const document = await contact.findOne({nama : req.params.nama})
    res.render('detil',{
        layout : "layouts/main-layout",
        title : "Detil",
        document
    })
})










app.listen('3000','127.0.0.1',() => {
    console.log('Server is listening on http://127.0.0.1:3000')
})
