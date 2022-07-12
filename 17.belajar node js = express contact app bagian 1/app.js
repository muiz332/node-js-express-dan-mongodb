const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')
const {loadContact,findContact} = require('./util/funcContact')


app.set('view engine','ejs')
app.use(expressLayout)

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
        mahasiswa
    })
})

app.get('/about',(req,res) => {
    res.render('about',{
        layout : "layout/main-layout"
    })
})

app.get('/contact',(req,res) => {
    const mahasiswa = loadContact()
    res.render('contact',{
        layout : "layout/main-layout",
        mahasiswa
    })
})

app.get('/detil/:nama',(req,res) => {
    const nama = req.params.nama
    const mahasiswa = findContact(nama)

    res.render('detil', {
        layout : "layout/main-layout",
        mahasiswa,
        nama
        
    })
})






app.listen(3000,'127.0.0.1',() => {
    console.log(`Server is listening on http://127.0.0.1:3000`)
})