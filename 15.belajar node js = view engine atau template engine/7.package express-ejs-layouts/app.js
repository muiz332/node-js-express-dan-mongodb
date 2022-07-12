/*

nah kita akan gunakan package yang namanya
express-ejs-layouts

kita install dulu ya

sebetulnya kalo kalian langsung mengisntal package ini 
tidak apa apa karena ejsnya sudah langsung terbawa 

setelah itu kira butuh require dulu
kalo ejs tadi tidak perlu melakukan reqire
karena pada method set itu sudah memanggilnya 

*/

const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const app = express()
const port = 3000

/*

sekarang pun sama template engine tetap sama 
kita gunakan ejs 

express layout hanya mempermudah penggunaan ejsnya
nah untuk memakainya kita panggil 

app.use(expresslayouts)

*/

app.set('view engine','ejs')
app.use(expressLayouts)


/*

nah sekarang cara pakainya gimana?
kita bikin dulu sebuah layout utama 
yang isinya 

sehingga nanti kita tidak butuh lagi header dan footernya
kita coba buat dulu

kita pergi kefile main-layout.ejs


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


app.get('/about',(req,res) =>{
    /*
    
    nah kita kasih tahu diroutenya kita akan 
    kirimkan data baru dengan properti layout 
    
    yang berisi halaman layout mana yang mau kita
    pakai dan pathnya relatif terhadap folder views
    
    */
    res.render('about',{
        title : 'about',
        layout : 'layouts/main-layout'
    })

    /*
    
    nah jadi ini caranya kita memberitahu bahwa halaman
    about pakai layout pada file main-layout.ejs

    nah begitu pula dengan contact
    
    */
})

app.get('/contact',(req,res) =>{
    res.render('contact',{
        title : 'contact',
        layout : 'layouts/main-layout'
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

nah sekarang kita coba jalankan
kalo saya jalankan maka akan tampil ya 

nah tapi ketika kalian ingin membuat bagian 
bagian lagi seperi menu

itu kita buat pada bagian folder layouts ya

dan catatan
ketika kita ingin bekerja dengan module express-ejs-layouts
maka semua halaman yang ada difolder views itu 
harus menggunakan semua yang ada didalam main-layout

jadi kalian bisa gunakan main-layout 
pada file index.ejs

ketika kita menuliskan <%- body %>

maka semua halaman harus menggunakan itu 

jadi nanti sebaiknya
untuk halaman itu kalian bikin difolder views
dan potongan potongan yang nanti kita bisa include

itu kita bisa buat pada folder layouts agar rapi

jadi itu ya mudah mudahan kalian paham 
dari view engine ejs untuk aplikasi express kita 

baik mungkin itu ya materi kita kali ini 
membahas mengenai tempating engine menggunakan ejs 

pada aplikasi express kita 
mudah mudahan kalian paham gimana cara pakainya 

sehingga kalian bisa terapkan sendiri pada study
kasus kalian sendiri 

dan dimateri berikutnya kita akan membahas sesuatu 
yang disebut dengan middleware 

nah ini penting untuk kita ketehui 
karena didalam express 

ini nanti kita akan banyak bekerja dengan 
yang namanya middleware 

apa itu middleware
gimana cara pakainya dan gimana cara menerapkan pada aplikasi express kita itu akan kita bahas dimateri berikutnya 

kita ketemu lagi dimateri berikutnya 
dan seperti biasa jangan lupa titik koma ;


*/