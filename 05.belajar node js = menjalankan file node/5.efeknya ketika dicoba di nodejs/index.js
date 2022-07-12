// console.log('hai muiz')


/*

nah caranya itu kita punya keyword yang namanya require
jadi istilahnya memanggil file lagin



*/

// require('')

/*

didalam argument dari function itu
kita telusuri pathnya atau letak file yang akan kita akses kehalaman ini

kalo misalkan latihan.js ini berada pada satu folder yang sama 
kalian bisa tulis

./latihan.js

kalo filenya ada diatasnya tambahin ../

../latihan.js

jadi ini ada diluar foldernya
ada lagi diatasnya tambahin


../../latihan.js

kalo kita ingin akses filenya didalam sebuah folder
kita tulis

./folder/file.js


kita coba

*/

// require('./latihan')

// console.log('hai muiz')

/*

jadi sekarang sebelum menjalankan console.log
dia akan menjalankan apa yang ada didalam file latihan.js dulu

kita coba jalankan
maka akan tampil

hello world
hai muiz   

tuh aman  ya jadi kita bisa menjalankan hello world dari file latihan
setelah itu menjalankan hai muiz difile index


kelihatannya sama saja kayak tadi ya 
sama saja kayak punyaya javascaript yang ada didalam browser


tapi kalo misalkan kita lakukan hal yang sama seperti yang
kita lakukan dibrowser itu tidak akan jalankan

kita pindah kehalaman latihan.js




*/

// require('./latihan')

// sayHalo('muiz')



/*
ini kalo pakai javascript yang ada didalam browser jalan

tapi kalo kita pakai node js kita jalankan akan eror
sayHalo('muiz')
^

ReferenceError: sayHalo is not defined 


katanya node js itu tidak tau apa itu sayHalo
pada hal kita sudah kasih require

nah kenapa seperti ini?
ini karena node js itu menganut sesuai yang dinamakan dengan system modul

jadi dia menganggap satu file itu sebagai satu modul sendiri
apa yang ada didalam modul yang satu itu tidak bisa begitu saja
diakses oleh modul yang lain


nah ini topik lebih jelasnya akan kita bahas dimateri berikutnya 
tapi dimateri kali ini saya cuma ingin memberi tahu bahwa

node js pakai module system jadi tidak bisa begitu saja interaksi 
antar satu file dengan file lain meskipun kita require

tapi dia bisa mengeksekusi banyak file didalam satu file 


kalo yang diatas itu kita pakai ya bukan eksekusi jadi tidak ada eksekusinya
kecuali cetak namanya saya jalankan tuliskan difile latihan



kalo misalkan kita require file latihan

*/

require('./latihan')

/*

kalo ini kita save dan kita jalankan maka tidak akan eror
akan muncul 

halo nama saya muiz

jadi kita tidak memakai apapun yang ada didalam file latihan.js
kita cuma mengeksekusi file latihan.js kedalam file index.js


nah tapi saya ingin memakai function sayhalo ini kedalam file index.js
jadi saya ingin jalanin tau memakai function yang sayhalo yang ada didalam latihan.js
difile index.js ini





*/