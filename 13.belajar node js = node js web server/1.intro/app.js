// node js web server

/*

kali ini kita akan masuk kedalam materi node js web server
jadi apa itu node js web server 


node js bisa kita gunakan untuk membuat aplikasi web 
nah tapi untuk membuat aplikasi web kita butuh web server

jadi dimateri kali ini kita akan mencoba menggunakan 
module module yang ada didalam core node js untuk membuat
sebuah web server yang sangat sederhana

dimana nanti web servernya bisa kita jalankan 
untuk menampilkan halaman website yang kita buat 

jadi tanpa berlama lama lagi kita langsung saja
cobain gimana caranya membuat web server menggunakan node js 



jadi sekarang yang akan kita lakukan adalah menggunakan core modulenya
node js untuk membuat sebuah web server 

kita pakai module yang namanya htpp
kalian bisa baca documentasinya atau w3school


const http = require('http')


nah kita akan membuat server dengan memanggil method yang namanya
createServer()

yang dia menerima sebuah parameter yaitu callback
callbacknya menerima dua parameter yaitu request dan response


http.createServer(function(req,res){
    // jadi request apa yang dikirimkan keserver
    // dan response apa yang diresponse oleh servernya


})


untuk menjalankan servernya kita panggil dulu sebuah 
method yang namanya listen 

didalam method tersebut kita sudah melakukan bind atau menyatukan port 
dengan ipnya yaitu 127.0.0.1 untuk port kita bisa pakai 8080 atau 3000
karena itu port yang sedang kosong 

dan kita akan melakukan listen dengan looping forever
sampai servernya kita matikan

nah ada beberapa cara untuk melakukan ini 
kita bisa simpan kedalam variable seperti ini 

const server = http.createServer(function(req,res){
    // jadi request apa yang dikirimkan keserver
    // dan response apa yang diresponse oleh servernya


})

server.listen()

atau bisa langsung kalian cainning


http.createServer(function(req,res){
    // jadi request apa yang dikirimkan keserver
    // dan response apa yang diresponse oleh servernya


}).listen()


nah untuk parameter didalam listen ini ada
port,hostname yaitu ip localhost lalu ada callback untuk
menampilkan pesan ketika web servernya sedang berjalan

jika dikosongkan ada ada nilai default 
port 3000
hostname = localhost ip


*/

const http = require('http')

http
 .createServer((req,res)=> {
    // nah sekarang ketika servernya sudah dibuat
    // apa yang mau kita tampilkan pada web servernya
    // kita bisa panggil parameter responnya 
    // kita panggil menggunakan method write

    res.write('hello world')
    res.end()

    // dan jangan lupa kita panggil method end()
    // untuk memberitahu server bahwa perintah didalam
    // servernya sudah selesai 

    // didalam method endnya kita bisa kasih pesan untuk selesainya
    // tapi kita tidak akan lakukan itu ya 


 })
 .listen(3000,'127.0.1',function(){
    console.log('Server is listening on port 3000')
 })


/*

nah sekarang sudah selesai nih 
ini adalah sebuah web server yang sangat sederhana 

nah untuk cara menjalankannya kita harus jalankan dulu nodenya

node app
Server is listening on port 3000

kalo saya jalankan maka akan tampil seperti ini 
nah terus command promptnya nyangkut 

nah ini karena servernya lagi jalan
nah kalo sudah jalan seperti ini tinggal kita masuk 
ke browser kita 

dan tinggal tulis
localhost:3000

sesuai dengan portnya apa atau kalian bisa masukkan portnya
dan ip localhostnya kedalam sebuah variabel

untuk memberhantikan servernya kalian tekan ctrl+C

nah maka akan tampil hello wordlnya 
jadi ini adalah tampilan website yang sangat sederhana 
kalo kita pakai core modulenya node 

tapi ini sangat sederhana 
nah ini ada beberapa hal yang akan 

nah yang pertama adalah port
kenapa portnya 3000

kenapa tidak pakai yang lain 
sebetulnya bisa saja 
kalian bisa isi portnya 1 - 60000
cuma kita tidak tahu port mana yang kosong 
dan port mana yang sedang dipakai


https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers

kalian bisa baca diwikipedia
kalo ada tulisan yes atau assign itu berarti sudah dipakai

nah kenapa pakai 3000?
karena tidak ada yang pakai dan udah menjadi standart untuk dipakai buat web server 
kalo misalkan pakai node ruby dll

dan jangan lupa setiap perubahan pada nodenya
kita harus restart servernya 

nah sebenarnya caranya kalian bisa pakai nodemon ya 
tapi dimateri kali ini kita manual saja 

nah sekarang kita dapat menjalankan servernya
tapi yang ditampilkan itu adalah plaint text 

jadi ini sebetulnya text kosong
yang kalo kita klik kanan open source maka hanya 
akan ada tulisannya saja 

kalo misalkan kalian ingin menambalikannya sebagai html 
itu ada caranya 

kita harus kasih tahu bahwa type dari contant yang
dikembalikan adalah html 

*/