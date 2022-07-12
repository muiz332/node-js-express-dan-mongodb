// const cetakNama = require('./coba')
// const umur = require('./coba')
// console.log(cetakNama, umur)


/*

jadi kita sudah tahu dimateri sebelumnya bahwa kita bisa mengirim atau mengeksport function menggunakan cara seperti ini 


nah gimana kalo misalnya kita punya function yang lain
atau variable misalnya

kita bikin variable didalam coba.js

kalo kita jalankan maka akan tampil 
18 18

kalo kita jalankan 
nah cetak namanya isinya itu 18 kenapa seperti itu
karena exportnya kita isi ulang dengan umur yang isinya 18

nah tapi gimana kalo saya ingin dua duanya 

nah caranya kita kirimnya sebagai properti atau method kedalam 
exportnya 

kita kembali kehalam coba.js





*/



/*

tinggal kita require
nah requirenya cukup satu kali saja karena yang dikirimkan dalam bentuk 
properti dan method

*/

const coba = require('./coba')

console.log(coba)


/*

jadi seperti ini 
jadi untuk nama variable kalian buat sesuai dengan nama file yang direquire
ya supaya tidak bingung

kita anggap file coba ini sebagai module 
kita bikin variabel sesuai dengan nama modulenya ya 

kalo seperti ini 

coba ini bentuknya adalah object
kalo kita jalankan akan muncul 

{ cetakNama: [Function: cetakNama], umur: 18 }

tinggal kita panggil saja method dan propertinya 

*/

console.log(coba.cetakNama('muiz'),coba.umur)


/*

begitu temen temen kita bisa export sepreti ini
nah kita juga bis exportnya object

kita buat difile coba.js namanya mahasiswa

*/

console.log(coba.mahasiwa.nama,coba.mahasiwa.umur)
console.log(coba.mahasiwa.cetakMhs())


/*

kalo kita jalankan tuh muncul ya 
hai nama saya muiz 18
husain 20
hai nama saya husain umur saya 20

ya jadi kita bisa mengirimkan object ya

atau kita juga bisa mengirimkan class ya 



*/

new coba.Orang

/*

jangan lupa kalo class atau object yang dibuat dengan construktor
itu kita panggilnya menggunakan keyword new

kalo kita jalankan maka akan tampil

hai nama saya muiz 18
husain 20
hai nama saya husain umur saya 20  tahun
object / class orang telah dibuat  




sip ya jadi itu cara kita mengeksport
jadi bisa macam macam 


nah tapi masalahnya exportnya itu ada banyak
kalo kita misalkan kita punya function 10

maka exportnya 10 juga
nah gimana cara nya agar exportnya itu tidak banyak
cuma satu saja ?

*/