// request

/*

nah sekarang apa saja yang ada didalam request
kita bisa dapetin urlnya 

kita bisa dapetin ipnya untuk orang yang melakukan request
kita bisa mendapatkan parameter kalo ada diurlnya 

atau kita bisa mendapatkan query string 
query string itu kita tulis setelah tanda ? 
terus keynya apa dan valuenya apa

kita cobain ya



route dinamis

nah misalnya kita berada dihalaman facebook

https://facebook.com

nah kalian ingin melihat profile saya 
berarti kalian bisa akses seperti ini

https://facebook.com/muiz

atau bisa juga /idnya yaitu angka
nah ini istilahnya url yang dinamis atau berubah ubah terus

misalkan kita punya halaman product dengan id 1

http://localhost:3000/product/1

jadi cara menulisnya seperti ini 


*/

// const express = require('express')
// const app = express()
// const port = 3000


// app.get('/',(req,res)=> {
//     res.send(req.ip)
// })


// app.get('/product/:id',(req,res)=>{
//     /*
    
//     nah pathnya kehalaman product 
//     lalu kita tulis /:key

//     ini adalah nama keynya 
//     lalu kita bisa tangkap menggunakan params

//     kalo kita tulis req.params berarti semua parameter 
//     yang ada didalam url

//     nah dia akan mengembalikan object dengan propertinya adalah 
//     nama key setelah /: 

    
//     */

//     res.send(`Product ID: ${req.params.id}`)
// })

// app.listen(port,()=>{
//     console.log(`Server is listening on port ${port} http://127.0.0.1:${port}`)
// })

/*

kalo kita jalakan maka akan tampil ya idnya apa 
nah kalo misalkan ada dua parameternya

misalkan seperti ini 

http://localhost:3000/product/1category/10

jadi kita punya halaman product yang idnya 1
lalu didalamnya ada halaman lagi yaitu category 
yang isnya 10



*/

const express = require('express')
const app = express()
const port = 3000


app.get('/',(req,res)=> {
    res.send(req.ip)
})

app.get('/product/:id',(req,res)=>{
    res.json({
        productID : req.params.id,
        category : req.params.idCat
    })
})


app.get('/product/:id/category/:idCat',(req,res)=>{
    res.json({
        productID : req.params.id,
        category : req.params.idCat
    })
})

app.listen(port,()=>{
    console.log(`Server is listening on port ${port} http://127.0.0.1:${port}`)
})


/*

kalo kita jalankan
berhasil menangkap id category ya

jadi sekali lagi request itu apa yang kita kirimkan
pada keexpress dan response adalah apa yang dikembalikan 
oleh express

*/