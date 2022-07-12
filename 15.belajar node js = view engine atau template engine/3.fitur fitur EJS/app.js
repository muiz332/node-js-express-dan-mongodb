/*

nah sekarang kita lihat fitur fitur apa saja
yang disediakan oleh ejs ini 


- Control flow with <% %>

- Escaped output with <%= %> (escape function configurable)
- Unescaped raw output with <%- %>
- Newline-trim mode ('newline slurping') with -%> ending tag
- Whitespace-trim mode (slurp all whitespace) for control flow with <%_ _%>
- Custom delimiters (e.g. [? ?] instead of <% %>)
- Includes
- Client-side support
- Static caching of intermediate JavaScript
- Static caching of templates
- Complies with the Express view system



nah katanya kita bisa membuat control flow 
control flow itu kita bisa bikin pengulangan
pengkondisian 

kita bisa mencetak output dengan otomatis langsung
melakukan escape pada karakternya 

kalian bisa lihat cara penulisannya disebelahnya 

kita bisa mencetak isi dari variable
dan yang penting kita bisa melakukan insludes 


nah ini lah yang kita cari dari fitur express dimateri sebelumnya 
express tidak bisa melakukan itu 


nah nanti kita dengan mudah mengelola tampilan template pada halam
kita menggunakan includes

sehingga kita bisa bikin yang namanya parsials 

*/

/*

kita akan coba beberapa hal
sisanya kalian bisa baca baca sendiri

misalnya yang paling simple saya mau menampilkan  isi dari sebuah 
variable 

misalnya didalam halaman index 

*/

const express = require('express')
const app = express()
const port = 3000


app.set('view engine','ejs')

app.get('/',(req,res) => {
    res.render('index')
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