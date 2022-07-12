
/*

nanti kita buat satu route saja ya 
dimateri sebelumnya problemnya itu adalah kita tidak bisa
dengan mudah mengelola tampilan kita atau istilahnya adalah view 

dan saat ini kita akan coba mempermudah itu dengan menggunakan 
sesuai yang dinamakan dengan templating engine 

apa itu templating engine
sebetulnya itu adalah cara mudah untuk mengelola tampilan
dari web kita 

kalian bisa buka documentasinya dinpm atau
diwebsite resminya 

jadi kita install dulu EJSnya kedalam aplikasi kita
terus nanti dinpmnya kita bisa lihat cara pakainya bagaimana 


setelah kita install 
kita beritahu dulu express kita agar 
menggunakan view enginenya adalah ejs

*/

const express = require('express')
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs')

// keynya adalah view engine dan valuenya adalah ejs


/*

nah terus cara pakainya gimana?
kalo kita sudah mengset view engine ejs atau view engine yang
lain 

itu expressnya sudah mendeteksi ada gak halaman
viewnya difolder views

jadi kita harus simpan didalam folder views
ini adalah aturannya ya 
jadi namanya tidak boleh diganti 


nah sekarang gimana cara memanggil viewsnya 
ini gampang banget 

kita tidak perlu menggunakan method sendFile lagi
nah kita bisa gunakan method yang namanya res.render()

*/


app.get('/',(req,res) => {
    res.render('index')
    /*
    ini bacanya 
    kasih kita render atau berikan view atau tampilan
    yang nama filenya itu index 

    dengan melakukan ini kita bisa langsung memanggil 
    halaman difolder views 

    caranya cukup tulis nama filenya saja
    jadi dia akan mencari 

    ada gak didalam folder views itu file yang 
    namanya index 

    jadi kita tidak perlu menentukan lagi folder 
    rootnya ada dimana 
    
    */
})

app.use('/',(req,res) =>{
    res.status(404)
    res.send('page is not found')
})

app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`)
})


/*

nah sekarang kita coba jalanin ya 
kalo kita jalankan akan error

Error: Failed to lookup view "index"

katanya tidak ada file namanya index 
nah syaratnya supaya file yang ada didalam folder views
ini terbaca oleh view enginenya

kita harus ganti exstention filenya sesuai dengan 
view engine yang kita gunakan 

kalo pakai vew engine yang lain itu sama ya 


sekarang kita jalankan 
maka akan tampil ya halaman indexnya 

kita sudah tahu bagaimana cara memanggil ejs 
kita sudah tahu bagaimana cara sederhananya 



*/  