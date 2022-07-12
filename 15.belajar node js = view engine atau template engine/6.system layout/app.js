/*

nah sekarang kita akan mencoba melakukan 
system layout

contohnya gini 
kita akan bekerja dengan halaman about contact
yang index kita akan biarkan sejenak

jadi ada about dan contact dan kedua file ini 
kita buat pakai boostrap

nah dua file ini isinya itu indentik / sama
kecuali isi dari bodynya

bagian atasnya sama 
bagian bawahnya sama 

nah kalo misalkan kalian nanti punya halaman view
yang isinya nanti hanya berbeda dibagian tertentu saja

itu sebaiknya kalian menggunakan system layout 
contohnya 

kalian bisa lihat halaman aslinya sebelum diubah
yaitu aboutOriinal dan contactOriginal

nah contohnya dihalaman about 
ceritanya halamannya akan saya bagi menjadi 3 bagian

bagian pertama adalah bagian headnya
bagian kedua adalah bagian contentnya 
dan bagian ketiga adalah bagian footernya

nah kita akan pecah filenya menjadi seperti itu
supaya nanti setiap halaman bisa menggunakan 
file layout yang sama 

ya jadi caranya adalah kita bikin dulu 
sebuah folder didalam viewsnya yang namanya layout

untuk namanya ini bebas saja ya 
nah ceritanya didalam file tersebut saya akan bikin 
2 file 

ada header.ejs
dan ada footer.ejs

dimana nanti isi dari header ini adalah potongan code yang 
tadi 

dari mulai doctype sampai body tag atasnya

nah kalo sudah kita pecah pecah 
kita akan rangkai pada file about.ejsnya

menggunakan sintax yang namanya include()


*/


const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')

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

    res.render('index',{mahasiswa,title : 'Home'})
})


app.get('/about',(req,res) =>{
    res.render('about',{
        title : 'about'
    })
})

app.get('/contact',(req,res) =>{
    res.render('contact',{
        title : 'contact'
    })
})



app.use('/',(req,res) => {
    res.status(404)
    res.send('page is not found')
})


app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`)
})



/*

pergi kehalaman about.ejs

*/