/*

nah sekarang bagaimana caranya kita mengirimkan
data kedalam sebuah halaman 

nah cara mengirimkan datanya itu
kita harus menambahkan argument baru kehalam method rendernya
yang berupa object

nah isi dari objectnya akan terkirim kedalam view index ini 

*/

const express = require('express')
const app = express()
const port = 3000


app.set('view engine','ejs')

const nama = 'muiz'
app.get('/',(req,res) => {
    res.render('index',{nama, title : 'Home'})
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
begitu pula misalnya kalo kita mau mengirimkan title

*/