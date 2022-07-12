/*

dimateri kali ini kita akan belajar mengenai 
sesuatu yang disebut dengan node js module system

ini adalah topik yang sangat penting untuk kalian pelajari
ya karena ini merupakan konsep dasar yang dimiliki oleh node js

dimana kita lihat nanti node js itu menganggap setiap file yang kita buat
itu sebagai sebuah modul sendiri


tapi sebelum kita ngoding mengenai module system ini 
ada baiknya kita pelajari dulu konsep dari beberapa hal didalamnya

nah yang pertama kita cari tahu dulu apa itu modules
ya didunia programming ini sering banget kita mendengar kata modules

ya mungkin diberbagai bahasa pemorgaman atau diteknologi teknologi lain
itu mengenal kata modul dan mungkin saja definisinya berbeda untuk tiap teknologi

tapi kita lihat dulu secara umum definisi dari module itu apa

secara umum module itu artinya gini
module adalah sekumpulan code yang dapat digunakan kembali 
dengan antar muka yang terdefinisi

jadi ada baris baris code yang kita pakai menggunakan cara tertentu 
maksutnya antarmuka itu adalah cara menggunakannya code tersebut

nah kalo kalian masih bingung coba
kita lihat secara spesifik mengenai node modules

nah ini spesifik terhadap node js
jadi apa itu node modules

node modules adalah fungsionalitas yang simple atau komplex 
yang tersimpan didalam sebuah file javascript, yang dapat kita gunakan kembali 
pada aplikasi node js


seperti yang sudah kita coba dimateri berikutnya 
kita punya funsionalitas difile yang satu 

kita export lalu kita gunakan fungsionalitas itu
difile yang lain dengan menggunakan require

 
nah itu konsep dari node modules


nah spesifik node module didalam node js
perilakukanya adalah setiap module didalam node js memiliki konteksnya masing masing
tidak saling tercampur pada modul yang lain pada lingkup global 


jadi tidak bisa sembarangan pakai 
kecuali kita lakukan module.exports dan require()

itu ya perbedaannya ketika kita gunakan javascript didalam browser


nah sekarang kita lihat ilustrasinya 
misalnya kalian punya dua file javascript



________
|     |
|     |
|_____|

satu.js

________
|     |
|     |
|_____|

dua.js




misalnya ada satu.js dan dua.js
nah sekarang kita tidak bisa langsung begitu saja 
memanggil file satu.js kedalam file dua.js


dengan hanya require terus tiba tiba difile satu.js bisa dipakai
yang harus kita lakukan adalah begini

difile satu.js itu kita bisa mengambil semua scriptnya lalu
kita export kedalam satu variable sendiri

lalu variable ini bisa kita gunakan didalam file dua.js
dengan keywordnya require

jadi difile satu.js ada keywordnya export
dan difile dua.js ada keywordnya required


nah tapi kita bisa juga memecah code kita difile satu.js
agar diexport menjadi beberapa variable

jadi seperti ini 

difile satu.js kita pecah misalnya
satu kita bagi codenya menjadi dua fungsi sendiri

kita export yang fungsi satunya
yang fungsi duanya jadi satu fungsi atau jadi satu variable atau jadi satu object sendiri
kita export juga


nah kalo sudah begini caranya sama 
kedua variable atau fungsi ini bisa kita require masing masing

jadi dialam file dua.js ini kita bisa pakai keduanya



nah sekarang kita akan lihat bahwa didalam node js

itu ada tiga type module

- core modules
    yaitu module yang sudah dimiliki oleh node jsnya didalam librarynya
    jadi nanti kita bisa pakai 
    
    misalnya kita mau akses file system, kita tinggal panggil modulenya
    kita mau akses network kita tinggal panggil modulenya

- local modules
    ini adalah module yang kita bikin sendiri
    nah contoh paling sederhananya sudah kita coba dimateri sebelumnya

    kalo kita bikin sendiri berarti kita melakukan dua hal
    kita export dan kita require 

    nah kalo menggunakan core module proses exportnya itu sudah dilakukan oleh node js
    kita tinggal require saja nanti


- thrid party module
    ini adalah modules  yang dibikin oleh orang lain yang bisa kita pakai
    nah ini biasa juga disebut dengan npm modules

    karena module yang dibikin oleh pihak ketiga itu sudah dikumpulin sama node js
    kesebuah paket manager yang namanya npm

    untuk thrid party module itu kita tidak perlu export 
    kita cuma perlu require saja


untuk lebih detilnya kalian bisa baca documentasinya dinode js ya



nah selanjutnya sedikit mengenai require ya 
yang kita wajib tulis untuk menggunakan module yang tiga tadi

nah begitu kita menggunakan fungsi require
kita akan menuliskan sesuatu didalam parameternya 

nah yang kita tulis adalah alamat tempat pemyimpanan modulenya
nanti requreinya akan mencari module tersebut 

dengan urutan sebagai berikut
nah dia akan mencari dulu ada gak core module yang dipanggil

kalo tidak ada dia akan mencari local module 
selama kita memberikan relatif url

baru yang ketiga require akan mengechek didalam folder node modules 
untuk thrid party modules

nah makanya nanti urutannya kalo misalkan kalian menggunakan ketiga tiganya
biasanya urutannya itu core module dulu lalu loca module dan yang terakhir npm modules


oke ya mungkin untuk lebih jelas lagi kita coba coding saja mengenai 
node modules ini 


untuk studi kasus kita kali ini
kita akan masih menggunakan apa yang sudah kita buat dari materi sebelumnya

dimana disini kita punya dua buah file ada coba.js dan index.js

kita tahu bahwa file index ini memanggil atau merequire file coba 
dan file coba mengeksport function cetakNama

kita pergi kehalam index.js



*/