

const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const app = express()
const port = 3000


app.set('view engine','ejs')
app.use(expressLayouts)

/*


nah sebetulnya kita tuh sudah punya middleware
untuk menangani ketika

halaman yang kita tulis diurlnya itu tidak ada
nah semua halaman itu ditangani oleh masing masing routing 

tapi routing ini juga bisa kita anggap sebagai middleware
karena fungsi route ini adalah sebuah program yang
berjalan setelah kita melakukan request

dan sebelum halamannya tampil kelayar

kalo kalian lihat dibawah itu ada fungsi namanya use
ini artinya fungsi ini akan selalu dijalankan 
ketikan menerima routenya '/'

dan kalo kita hapus ini akan lebih jelas bahwa fungsi ini
atau sekarang kita sebutnya middleware

middleware ini akan selalu dijalankan setiap request
nah tapi karena dia kita simpan dibawah

maka ketika requestnya itu sesuai dengan apa yang
ada diroutenya maka middleware ini tidak akan dijalankan

nah sekarang kita akan bikin middleware baru 
tapi kita simpan sebelum routenya

jadi cara bikinnya itu kita tulis
app.use

lalu didalamnya fungsi apa yang mau dijalankan
diparameter pertama kita bisa menambahkan pathnya atau routenya

jadi middleware ini akan dijalankan ketika
didalam path apa gitu misalkan

app.use('/about',(req,res,next) => {
    console.log(`time ${new Date()}`)
    next()
})

maka dia akan dijalankan setiap kita mengunjungi halaman about
tapi kita tidak menggunakan url 
artinya dia akan dijalankan ketika ada request apapun

dan parameter kedua akan callbacknya 
nah didalam callbacknya itu ada 3 parameter 
ada req,res dan next


misalkan middleware ini hanya melakukan console.log
new date




*/
app.use((req,res,next) => {
    console.log(`time ${new Date()}`)
    next()
})

/*

nah diakhir kita tulis next agar
setelah middleware ini dijalankan expressnya langsung bergerak atau
berpindah ke middleware berikutnya

middleware berikutnya yang mana?
tergantung url yang kita masukkan 

dan jangan lupa kalian harus menuliskan nextnya 
karena kalo tidak maka tadi aplikasinya akan hang
atau stuck

dan expressnya bingung habis ini kemana
makanya dia loading terus

jadi jangan lupa dikasih next

nah sekarang kalo kalian lihat dirouting yang kita punya kala
kita pakai get itu dibawahnya tidak perlu pakai next ya 


karena menggunakan routing ini meskipun dia disebut middleware 
itu nextnya tidak perlu ditulis 

karena routing ini setelah dijalankan dia akan berhenti
dan mengirimkan response

kalo kita mau menambahkan next
itu bisa juga tapi kita lihat perilakunya ya 

*/


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
    // console.log('tes')

    // next()

    /*
    
    nah misakan saya kasih next
    kalo sebelumnya berhenti setelah ketemu halaman about
    tapi kalo kalian tambahkan next 

    maka dia akan mencari middleware selanjutnya
    kalo kita jalankan maka dia akan error

    maka dia akan pergi ke app.use
    begitu kesitu didalamnya akan menampilkan
    halaman web yang berisi page not found

    halaman ini juga mengirimkan headers
    dan satu halaman itu tidak bisa mengakses dua buah headers

    jadi diaboutnya sudah dikirim header
    karena di merender
    jadi makanya dia error

    tapi kalo kalian coba dihalaman about ini 
    tidak dirender atau diconsole.log saja

    maka dia tidak eror
    middleware pertama tetap dijalankan
    lalu about dijalankan isinya console.log

    dan middleware terakhir yang page not found akan
    dijalankan juga

    
    */


})

/*

gituya mudah mudahan kalian paham
kalo kita membuat middleware sendiri

dan untuk request method get atau yang lain
itu defautlnya tidak kita hasih next karena itu adalah app kita

dan middleware itu bisa kita buat lebih dari satu ya

dan hati hati middleware itu dibacanya dari atas kebawah

kalo misalkan saya bikin middleware disini

*/

app.use((req,res,next)=> {
    console.log('coba')
    next()
} )

/*

kalo kita akses halaman conctact maka coba ini akan dijalankan
dan ketika kita mengakses route yang diatasnya home dan about

maka middleware ini tidak akan dijalankan
karena setelah home dan about

dia akan mengirimkan response
dan middleware setelahnya tidak akan pernah dijalankan




*/

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


/*

oke jadi itu adalah aplication level middleware

*/