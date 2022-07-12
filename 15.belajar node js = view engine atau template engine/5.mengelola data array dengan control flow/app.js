/*

nah sekarang gimana kalo mengelola data array
misalkan kita punya  variable namanya mahasiswa 

*/

const express = require('express')
const app = express()
const port = 3000


app.set('view engine','ejs')

app.get('/',(req,res) => {
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
    // misalkan data yang kita dapatkan seperti ini 
    // mungkin nanti data ini kita dapatkan dari
    // data base atau dari API

    // nah sekarang kita kirimkan kehalaman index

    res.render('index', {
        nama : 'muiz',
        mahasiswa,
        title : 'Home'
    })
})

app.use('/',(req,res) =>{
    res.status(404)
    res.send('page is not found')
})

app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`)
})

/*

pergi kehalaman index.ejs

*/