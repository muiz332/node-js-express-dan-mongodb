// render / memberikan text html 

/*

nah kalo ingin yang dikembalikan dari server adalah
text html kalian bisa pakai method yang namanya 
writeHead() untuk untuk mengatur type content yang dikembalikan 

kalian cari saja didocumentasinya pada bagaian response

res.writeHead(200,{
    'Content-Type' : 'text/html'
})

jadi ini kalo status code yang dikembalikannya adalah 200 
kembalikan content typenya adalah text html

jadi argument kedua adalah object

kita coba 


*/

const http = require('http')
const port = 3000
const localhost = '127.0.0.1'

http.createServer(function(req,res){
    res.writeHead(200,{
        // properti lengkapnya ada didocumentasinya 
        'Content-Type' : 'text/html'
    })
    res.write('<h1>Hello World</h1>')
    res.end()
}).listen(port,localhost,()=>{
    console.log(`Server is listening on port ${port}`)
})


/*

nah untuk mengechecknya kalian bisa
klik kanan
inspect, network, kalian refresh,pilih localhost, pilih header
lalu lihat content typenya 

oke jadi ini manual banget bikinnya karena sangat sederhana 
kita tidak bisa mengelola kalo kita mau kehalam lain 

misalnya kita mau kehalaman about
localhost:3000/about

tidak bisa semuanya akan mengarah kehalaman rootnya 
nah ini harus kita bikin secara manual 

jadi kita bikin dulu routenya atau halaman yang akan diakses
jadi kita harus check dulu urlnya apa 

terus nanti kita harus tulis manual 
istilahnya kita harus membuat system routing sendiri 



*/