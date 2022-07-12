
/*

nah misalnya categorynya kita kirimkan lewat string query 
jadi seperti ini 

http://localhost:3000:1?category=shoes

*/
const express = require('express')
const app = express()
const port = 3000


app.get('/',(req,res)=> {
    res.send(req.ip)
})

app.get('/product/:id',(req,res)=>{

    // kita bisa tangkap string querynya menggunakan object
    // req.query.key
    res.json({
        productID : req.params.id,
        category : req.query.category
    })
})



app.listen(port,()=>{
    console.log(`Server is listening on port ${port} http://127.0.0.1:${port}`)
})


/*

kita coba jalankan 
dan kirimkan string querynya 

sip ya categorynya sudah kita tangkap 

ya jadi gampang banget kalo kita mau mengelola 
apa yang ada didalam url 

mudah mudahan kalian paham ya 
kalian bisa tambahkan halaman lain sesuai dengan
kebutuhan kalian 

*/