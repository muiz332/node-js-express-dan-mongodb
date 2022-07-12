// File system


/*

nah yang pertama yang akan kita coba adalah file system

file system ini akan kita gunakan ketika kita memcoba untuk
menuliskan sesuatu kedalam file system kita

atau membaca isi dari file yang ada didirektori kita
jadi singkatnya seperti itu

lalu file system ini memiliki dua gaya codingan
ada asyncronous dan syncronous



nah yang pertama kita panggil dulu ya core modulenya 
kalian bisa tulis begini

const fs = require('fs')

nah kita panggil modulenya 
lalu dia mengembalikan object yang berisi banyak properti

atau kalian bisa destructuring objectnya 
kedalam variable terpisah

const {writeFileSync} = require('fs')

ini kalo kalian mau menggunakan fungsi write file system secara syncronous

jadi kalian tidak perlu menuliskan alamat pathnya 
cukup menuliskan nama modulenya saja

*/

// const fs = require('fs')

// console.log(fs)

/*

kalo kita coba tampilkan isi dari fs
maka akan tampil method dan propertinya 


methodnya kita bisa gunakan untuk berinteraksi dengan
file system kita

nah kita akan pakai beberapa method yang simple
kita akan pakai 

writeFileSync = ini untuk menuliskan kedalam sebuah file
secara syncronous

dan ada satu lagi yaitu writeFile 
ini untuk menuliskan secara asyncronous


nanti kita bakalan coba dua duanya 



nah sekarang kita akan coba pakai yang pertama dulu ya
kita pakai yang writeFileSync



1.WriteFileSync(param1,param2)  

menuliskan file secara syncronous

nah caranya gimana 
caranya gampang banget kalian cukup panggil modulenya 
lalu titik nama methodnya yaitu writeFileSync

*/

const fs = require('fs')

// fs.writeFileSync('path','data')

/*

nah method ini memiliki dua parameter ada 
pathnya atau tempat filenya 

dan kedua datanya 
data yang akan kita masukkan kedalam filenya 

kita coba ya

*/

fs.writeFileSync('./tes.txt','hello world secara syncronous!')

/*

maka nanti node jsnya akan mencari file tes.text 
di didalam folder yang sama

kalo tidak ada gimana?
maka akan dibuatkan file baru yang isinya 
string yang kita kirim kedalam parameter kedua

kalo kita jalanin maka akan muncul file baru ya 

kalo kita lihat disamping akan ada file baru yang
isinya hello world secara syncronous

nah kalo filenya sudah ada bagaimana
maka isinya akan ditimpa 
isinya akan digantikan dengan yang kita tuliskan didalam parameter kedua


nah kalo dipathnya kita kasih nama folder
misalnya saya tulis begini

*/


// fs.writeFileSync('./data/tes.txt','hello world secara syncronous!')

/*

maka dia akan mencari, ada gak folder data yang ada difolder ini 
kalo ada maka dicari ada gak file namanya tes.txt 

kalo tidak ada maka dia akan membuat file baru
namanya tes.txt baru didalamnya isinya parameter kedua yaitu datanya


nah sekarang gimana kalo foldernya tidak ada ?
nah kalo foldernya tidak ada maka 
dia tidak akan jalan ya 

karena untuk membuat sebuah folder itu beda lagi methodnya 
jadi kalo saya jalanin maka akan eror

no such file or directory, open './data/tes.txt'
nah katanya tidak ada file atau direktory seperti itu

karena kalo bikin direktori itu beda lagi methodnya 
kalian bisa baca documentasinya ya           


nah ada mkdir dan ada mkdirSync


nah kalo tadi kan eror ya 
itu bagaimana caranya kita bisa menangkap erornya 

itu bisa kalian masukkan kedalam block try dan catch

*/

// try{
//     fs.writeFileSync('./data/tes.txt','hello world secara syncronous!')
// }catch(er){
//     console.log(er)
// }

/*

kalo kita jalankan maka akan tampil eror yang kita tangkap
kan kalo tidak kita tangkap akan muncul tuh sesuatu diatasnya 


kalo kita tangkap maka langsung tampil erornya apa

kalo pakai asyncronous kita tidak perlu karena nanti
kita tangani lewat callback

*/



/*

nah tapi gimana kalo misalkan datanya ada
kita bikin dulu foldernya namanya data

*/

fs.writeFileSync('./data/tes.txt','hello world secara syncronous!')

/*

kalo kita jalanin nah gak eror
kalo kita check didalam folder data maka 
akan ada file namanya tes.txt yang isinya 

hello world secara syncronous


nah sip ya kita bisa menuliskan kedalam sebuah file

*/