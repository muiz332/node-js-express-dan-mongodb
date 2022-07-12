// membaca file isi file

/*

nah sekarang gimana kalo kita mau membaca isi file
kita coba dulu yang syncronous ya 


nah kita akan pakai method apa
kita lihat dulu documentasinya 

kita cari yang namanya read
ada ya namanya readFileSync untuk yang syncronous

nah ternyata dia hanya memiliki saya parameter yaitu 
pathnya 

kita coba ya 


*/

// const fs = require('fs')
// fs.readFileSync('./data/tes.txt')

/*

nah kalo kita jalanin tidak tampil apa apa ya 
karena dia mengambalikan hasilnya 



*/

// const fs = require('fs')
// const isi = fs.readFileSync('./data/tes.txt')
// console.log(isi)

/*

kalo kita jalanin maka akan tampil
<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 73 65 63 61 72 61 20 73 79 6e 63 72 6f 6e 6f 75 73>

nah ternyata yang tampil adalah buffternya 
kalo ingin kita ubah menjadi string 

kalian bisa ubah jadi string pakai method pada javascript 
yang namanya to string


*/

// const fs = require('fs')
// const isi = fs.readFileSync('./data/tes.txt')
// console.log(isi.toString())

/*

maka kalo saya jalankan akan tampil
hello world secara syncronous

atau kalian bisa menambahkan diparameter kedua namanya encoding
kalian bisa piih saja utf-8

kalo mau langsung diubah menjadi string

*/
const fs = require('fs')
const isi = fs.readFileSync('./data/tes.txt',"utf-8")
console.log(isi)


/*

kalo saya jalanin maka akan tampil
hello world secara syncronous


utf-8 itu diubah menjadi huruf latin ya 
sehingga kita tidak perlu method toString lagi


nah itu untuk yang syncronous 
sekarang tugas kalian cobain yang asyncronous

*/


const isiasync = fs.readFile('./daa/tes.txt','utf-8',(er,data) =>{
    // if(er) throw er
    // // nah jika er itu null maka tampilkan datanya
    // // jika er itu bukan null artinya dia string yang ada isinya
    // // kalo string ada isinya itu true ya pada nilai truthy 
    // // maka kita lempar erornya kelayar atau throw itu mirip seperti return
    // // tapi bedanya throw ini untuk eror yang erornya dilemparkan ke layar
    // console.log(data) jadi kalo ketemu throw maka langsung keluar dari callbacknya 

    // atau kalian bisa tulis gini tanpa throw

    console.log(er ? er : data)

    /*
    
    kalo ini kita menangkap erornya lalu ditampilkan kelayar
    maka yang muncul hanya erornya saja
    
    */
    

})


/*

jadi pada callbacknya itu memiliki dua parameter 
ada erornya dan datanya


nah sip itu caranya membaca file dari sebuah file
mudah mudahan kalian paham nih 


*/