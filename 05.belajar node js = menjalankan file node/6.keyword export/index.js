/*

nah untuk memakai sesuatu yang ada didalam file latihan.js
itu kita bisa gunakan keyword yang namanya export

kita pindah kehalaman latihan.js

*/



/*

kita tuliskan require

*/


// require('./latihan')

// console.log(sayHalo('muiz'))

/*

kalo saya jalankan harusnya sekarang sudah bisa
kita lihat 


kalo kita jalankan tetap eror
kenaa? padahal kita sudah menuliskan export

console.log(sayHalo('muiz'))
        ^

ReferenceError: sayHalo is not defined


nah kenapa masih eror karena begitu kita export 
dan ditangkap oleh require disini 

ini harus kita assignment dulu kedalam sebuah variable 
jadi biasanya kita simpan kedalam sebuah variable yang namanya 
sama seperti nama apa yang dikirim supaya tidak bingung




*/


const sayHalo = require('./latihan')

console.log(sayHalo('muiz'))


/*

jadi require ini mengembalikan function yang kita export 
dan kita masukkan kedalam sebuah  variable yang namanya sayhalo

lalu kita console say halo dan kita kasih argument muiz
didalamnya

kalo kita jalankan maka akan tampil 
hai nama saya muiz



nah jadi itu ya temen temen mudah mudahan kalian paham
jadi dimateri kali ini intinya adalah gimana cara kita menjalankan satu file

dan gimana cara kita ketika kita mau menjalankan lebih dari satu file
yang ini disebut dengan system modul atau modul system


dan itu akan kita pelajari lebih detil dimateri berikutnya 
baik jadi mungkin itu saja materi kita untuk kali ini

mudah mudahan kaliah sudah kebayang bagaimana cara mengeksesui
file javascript lewat runtimenya node

dan juga diakhir kita sudah lihat gimana caranya 
mengeksekusi lebih dari satu file menggunakan export dan require



ya walaupun yang kita lakukan itu masih belum 
menggunakan cara yang bener ya

kenapa? karena dimateri berikutnya kita akan fokus membahas 
mengenai system modul yang ada didalam node js ini

nah disinilah kita akan mencoba untuk menjalankan lebih dari satu file node
dengan cara yang benar 

dan nantinya ini akan mengawali pelajaran kita mengenai 
system modul yang ada didalam node js

ya jadi pasti seru banget
jadi mungkin itu saja untuk materi kali ini 

kita ketemu lagi dimateri berikutnya
dan seperti biasa jangan lupa titik koma ;

*/