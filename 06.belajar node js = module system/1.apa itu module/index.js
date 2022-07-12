
const fs = require('fs') // core module
const cetakNama = require('./coba') // local module
const moment = require('moment') // thrid party modules / npm


console.log(cetakNama('muiz'))


/*

nah yang saya lakukan ini adalah mengimport local module
jadi require ini akan mengembalikan apa yang diexport ya

kenapa node jsnya tau bahwa ini adalah local module 
karena ada ./ nya  ini adalah relatif url

nah kalo misalkan suatu saat kalian mau mengimport 
module yang lain misalnya core module 

nah kalo yang core module biasanya diimportnya sebelum local module ya 
jadi bisa disesuai urutannya ya 

nah misalnya kalian nanti mau mengeimport module punyanya npm yang namanya
file system 


nah biasanya nulisnya gini
const fs = require('fs')

ya ini kalo bingung tidak apa apa, ini akan jelas ketika kita bahas mengenai core module
kita tulis require dan kita masukkan nama dari core modulenya

namanya fs 
jadi kalo kalian tulis gini tidak ada ./ nya maka yang pertama 
yang akan dilakukan oleh node jsnya adalah dia akan mencari dulu 

ada gak didalam core module oh tidak ada 
kalo tidak ada dia akan mencari ada gak dithird party module

kalo misalkan ternyata kalian yang ada didalam core module ini 
tidak cukup 

dan biasanya kita butuh ya thrid party module 
nah ini kita include lagi 

misalkan kalian mau mengelola waktu tanggal detik menit jam
nah itu ada yang namanya moment

nah ini tidak ada dicore module 
maka dia akan mencari dithrid party modules

atau disebut juga dengan npm module
nah ini nantinya akan ada didalam folder yang namanya node modules

ya nanti kita instal menggunakan perintah install 
lalu module ini akan tersimpan kedalam sebuah folder yang namanya node modules

nah ini akan lebih jelas ketika kita bahas mengenai npm 
tapi ini adalah cara kita memanggil atau merequired module lain

oke ya mudah mudahan kalian paham nih








*/