

const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const app = express()
const port = 3000


app.set('view engine','ejs')
app.use(expressLayouts)


/*

nah disini kita beritahu express 
bahwa kita punya folder public yang
isinya adalah file statis

cara kita panggil app.use(express.static(param 1, param 2))
param 1 itu adalah nama foldernya 

dan param 2 itu optionsnya 


*/

app.use(express.static('public'))

/*

baru kita buat folder publicnya
jadi apapun yang nanti kita simpan didalam folder public
ini itu kita bisa akses

kita masukkan imgnya didalam folder public

kita pergi kehalaman about

*/

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





