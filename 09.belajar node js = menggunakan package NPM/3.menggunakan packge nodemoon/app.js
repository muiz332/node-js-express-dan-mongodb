// nodemon

/*

nah kali ini kita akan menggunakan package lagi 
kalo misalkan tadi kalian lihat setiap kita mau melihat hasil dari codingan kita 

yang kita lakukan adalah save dulu 
lalu jalain diterminal 

kita lakukan berulang ulang setelah kita melakukan 
perubahan pada codingan kita 

nah kalo misalkan kalian tidak mau melakukan itu 
kalian ingin nodenya itu terus jalan dan 
memeriksa perubahan apa yang terjadi 

itu kita bisa gunakan sebuah package yang namanya
nodemon atau node monitor 

nah cara pakainya kita bisa install secara global
jadi kita instalnya sekali supaya bisa dipakai dimanapun 

tapi kalo misalkan kalian ingin installnya perproject 
juga bisa ya 


kita coba satu satu
kita coba dulu install secara global 

kalian tinggal tuliskan 
npm install -g nodemon 
untuk versi kalian pakai 2.0.7

atau kalo tidak bisa kalian tulis saja
npm i nodemon

nah sekarang cara pakainya kalian bisa tuliskan 
nodemon nama filenya

nodemon app

kalo kalian ada eror yang tulisannya 
cannot  
be loaded because running scripts is disabled on this         
system

kalian tinggal ketikkan sintax ini diterminalnya 

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser


setelah itu coba kalian jalanin


*/

console.log('hello world')


/*

sekarang kalian lihat terminalnya tidak kembali ke promptnya
tapi dia diam dan menunggu kalo misalkan ada perubahan didalam 
codingan kita 

nah kalo misalnya saya tampilkan 
selamat datang 

kalo kita save maka dia akan langsung menjalankan codingan kita

*/

console.log('selamat datang')


/*

jadi ini memudahkan kita kalo misalkan pengen lihat
atau memonitor perubahan yang terjadi pada codingan kita 

dan ini nantinya bisa kita modifikasi agar yang dia lihat perubahannya 
tidak cuma satu file saja 
 
bahkan kita bisa lihat beberapa extentions file sekaligus
tapi itu tidak akan kita coba sekarang 

pokonya sekarang nodemonnya akan melihat perubahan apa yang terjadi 
pada file.js saja 


jadi ini memudahkan kalian ya
kalian tidak perlu bolak balik keterminalnya pada saat menjalankan
codingannya 

dan ini kita instaal secara global 

kalo misalkan kalian mau installnya secara local
ya suatu saat kalian pasti ingin mendeploy aplikasi kalian  
dan kalian masih ingin tetap menggunakan nodemon

nah kalo gitu berarti nodemonnya harus diinstall ke project kalian
tidak bisa diinstal secara global 

karena kalo diinstal secara global begitu dideploy tidak kebawa nodmeonnya 


jadi kita uninstal dulu yang global
lalu install yang local 


untuk memberhentikan monitornya 
kalian bisa tekan ctrl + C

kalian tulis
npm uninstall -g nodemon


lalu kita install carnaya
npm install --save-dev nodemon@2.0.7

nah kalo kalian jalankan
nodemon app.js

maka tidak akan jalan 
jadi kalian harus simpan script nodemon app.js
didalam scripts pada npmnya 

kalian tulikan pada script yang propertinya start
isinya nodemon app

kalo kalian jalankan maka akan tampil tuh hasilnya
setiap ada perubahan dan kalian save maka akan langsung dijalanin oleh nodemonnya


karena nanti begitu kita deploy aplikasi kita keserver 
nanti kita akan minta servernya untuk menjalankan script startnya 

jadi server kalian akan running terus
ini akan kepakai banget ketika kalian mau bikin sebuah
web server 



oke ya jadi itu cara kita menggunakan beberapa package yang 
ada didalam npm 

mudah mudahan kalian paham 

baik jadi itu tadi bagaimana cara kita menginstal dan menggunakan
beberapa package dari npm 

jadi package yang ada didalam npm itu banyak sekali 
jadi kalian harus pandai pandai mencari package yang tepat  untuk aplikasi 
kalian 


nah dan dimateri berikutnya ini seru ya 
kita akan mencoba untuk menggabungkan semua pembelajaran yang sudah
kita dapatkan dari awal seri ini 

mulai dari bagaimana kita membuat module sendiri
bagaimana kita menggunakan core module dan menggunakan module dari npm


kita akan gabungkan untuk membuat sebuah studi kasus atau program yang 
sederhana 

oke ya mungkin itu saja untuk materi kali ini 
kita ketemu lagi dimateri berikutnya 

dan seperti biasa jangan lupa titik koma ;



*/