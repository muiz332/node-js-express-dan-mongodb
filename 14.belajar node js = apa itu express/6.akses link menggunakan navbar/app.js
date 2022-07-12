// akses link menggunakan navbar


const express = require('express')
const app = express()
const port = 3000


app.get('/',(req,res)=>{
    res.sendFile('./index.html',{root: __dirname})
})

app.get('/about',(req,res) => {
    res.sendFile('./about.html',{root: __dirname})
})

app.get('/product/:id',(req,res) =>{
    res.json({
        productID : req.params.id,
        category : req.query.category
    })
})


app.use('/',(req,res)=>{
    res.status(404)
    res.send('404')
})

app.listen(port,()=>{
    console.log(`Server is listening on port ${port} http://localhost:${port}`)
})

/*

kalo kita lihat dihalaman htmlnya
ada dua halaman yang memiliki navbar yang sama 

alangkah lebih baik kalo misalkan navbar ini 
bisa kita keluarkan menjadi satu bagian sendiri

atau istilahnya menjadi component 
supaya apa kalo kita punya halaman baru 
kita tidak perlu mengcopy kesemua halaman navbarnya

kan lebih enak kalo kita punya semacam template
dan itu akan kita bahas dimateri berikutnya 

untuk memanggil halaman kita tidak pakai sendFile 
tapi menggunakan konsep yang namanya view engine 
atau templating engine 



oke ya jadi itu mungkin penjelasan dan implementasi
sederhana dari express js

mudah mudahan kalian sudah dapat gambaran
bagaimana cara pakainya 

tapi mungkin dari aplikasi yang sudah kita coba tadi 
kita sudah bisa melihat sedikit kekurangan 

gimana kalo misalkan kita punya navigasi yang tiap
tiap halamannya itu sama 

alangkah lebih baik kita buat sendiri templatenya untuk
navbarnya 

nah gimana cara mengirimkan data kesebuah halaman? 
nah itu belum kita coba ya 

dimateri berikutnya kita akan coba terapkan 
sebuah view engine agar kita dapat dengan mudah mengelola 
halaman halaman web kita 

jadi mungkin itu saja untuk materi kali ini 
sampai ketemu dimateri berikutnya 
dan seperti biasa jangan lupa titik koma;


*/