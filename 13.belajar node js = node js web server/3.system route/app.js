// system routing 

/*

seperti didalam python kita gunakan flask 
jadi kita harus buat routenya sendiri

jadi system routing ini 
kita melihat request atau url yang dimasukkan oleh user 
dan kita memberikan responsenya 

kita mau ngasih keusernya apa 
nah ini dasarnya 

karena kalo diwebkan user memasukkan url 
dan kita berikan responsenya apa 

misalnya 
jika urlnya about 
tampilkan halaman about
jika urlnya profil 
tampilkan halaman profil


jadi langsung kita coba


*/

// const http = require('http')
// const port = 3000
// const localHost = '127.0.0.1'

// http.createServer(function(req,res){
//     // kita ambil apapun yang diberikan oleh requestnya
//     // nah untuk mengambil route yang kita buat kita 
//     // menggunakan method url pada request

//     const url = req.url

//     res.writeHead(200,{
//         'Content-Type' : 'text/html'
//     })
//     res.write(`<h1> ${url} </h1>`)
//     res.end()


// }).listen(port,localHost,()=>{
//     console.log(`Server is listening on port ${port}`)
// })


/*

kalo misalkan saya tulis begini pada urlnya

http://localhost:3000/about

artinya saya akan buat halaman atau route lain pada halaman utama
yaitu about

jadi ketika user memasukkan /about kita bisa tangkap
menggunakan res.url

yang akan mengambalikan 
/about

dari sini bisa dicheck nih 
kalo routenya apa 
content yang dikembalikannya apa 

nah jadi kita bisa pakai if atau pakai switch


*/


const http = require('http')
const port = 3000
const localHost = '127.0.0.1'

http.createServer(function(req,res){

    const url = req.url

    res.writeHead(200,{
        'Content-Type' : 'text/html'
    })
    
    if(url === '/about'){
        res.write(`<h1> ini adalah halaman about </h1>`)
    }else if(url === '/contact'){
        res.write(`<h1> ini adalah halaman contact </h1>`)
    }else{
        res.write(`<h1> ini adalah halaman utama </h1>`)
    }


    res.end()


}).listen(port,localHost,()=>{
    console.log(`Server is listening on port ${port}`)
})


/*

jadi kita bisa bikin routenya secara manual seperti ini
kalo saya tulis url seperti ini

http://localhost:3000/contact

maka akan tampil 
ini adalah halaman contact

nah kalo kia masukkan apapun 
maka akan menuju kehalaman utama

nah sekarang pertanyaannya 
gimana kalo misalkan kita kiriminnya 
html 

jadi yang dikirimkan harus mulai dari tag html ada head ada body 
kalo kalian menuliskan h1 seperti itu saja

maka sisanya akan dibuatkan secara otomatis oleh browsernya 

nah tapikan yang kita inginkan adalah halaman html yang kita buat sendiri 
kita lanjut dimateri selanjutnya 


*/