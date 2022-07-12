// menggunakan package validator


/*

nah kali ini kita akan melanjutkan materi sebelumnya
kita sudah belajar mengenai apa itu npm dan
bagaimana cara instal thrid party modulenya atau packagenya

dimateri kali ini kita akan cara tahu bagaimana caranya 
menggunakan package tersebut

nah sebetulnya cara pakainya itu sama dengan kita menggunakan core module
punyanya node js

nah bedanya kali ini documentasi yang akan kita  gunakan 
adalah documentasi dari packagenya langsung 

jadi untuk lebih jelasnya kita langsung saja cobain 
menggunakan package yang sudah kita install dari npm 
kedalam aplikasi kita 


kalian inget dimateri sebelumnya kita sudah coba install
package yang namanya validator 

nah tapi kita belum gunakan package tersebut
gimana kalo misalkan sekarang kita lanjutkan lagi 
menggunakan code yang sama dari materi sebelumnya 

kita akan gunakan package validator tersebut
nah sebelum kita pakai coba kita search dulu dinpm
package yang namanya validator 

nah disitu ada documentasi cara pakainya 

var validator = require('validator');

jadi kita bikin dulu nama variable 
lalu kita require package yang namanya validator

nah sekarang kita coba

*/

// const validator = require('validator')


/*

nah begitu kita ketikkan ini nodenya akan menjadi dulu
ada gak core module yang namanya validator 

karena dia tidak pakai relatif url maka dia hanya akan menjadi
di core module dan npm

nah kalo sudah sekarang gimana cara pakainya?
jadi sekali lagi validator ini untuk memvalidasi dan mengsianisasi string yang kita kirimkan 



nah validasinya banyak banget ya 
jadi yang sederhana ada yang namanya isEmail()

jadi kalo kita punya string foo@bar.com
kalo kita masukkan kedalam method isEmail() 
dari validatornya itu akan menghasilkan nilai true


jadi validator sudah tahu bahwa format string itu adalah email 

nah sekarang kita coba


*/

const validator = require('validator')

const email = validator.isEmail('muizzuddin332@gmail.com')
console.log(email)


/*

jadi kita panggil methodnya yang ada didalam variable validator
lalu kita isi argumentnya dengan string yang formatnya seperti itu

method tersebut akan mengembalikan true kali dia email
dan false kalo dia bukan email

nah coba kita tampilkan kelayar hasilnya

kalo kita jalankan 
maka akan bernilai true 

npm start   

> 1.-menggunakan-package-validator@1.0.0 start
> node app

true


hasilnya true jadi validatornya sudah tahu bawa string itu 
adalah email 

kalo misalkan stringnya saya tulis begini
muizzuddin332gmail.com

maka dia bukan email 
kalo com saya hapus m nya
itu masih dianggap sebagai email 

tapi kalo misalkan saya hapus lagi o nya 
maka dia akan false 

jadi tidak akan ada nama domain yang hanya memiliki satu karakter saja 



nah itu salah satu method yang sering kita gunakan 
untuk mengecheck string itu email atau bukan 
      

*/



// method isMobilePhone(str,option)

/*

nah jadi validatornya bisa tahu apakah sebuah string
itu merupakan nomor telepon atau bukan 

bahkan diargument kedua kita bisa kasih negaranya apa
jadi misalnya optionnya saya kasih negara indo

maka dia akan mengecheck string itu nomor telepon di
negara indo bukan

sekarang kita langsung saja coba ya 

*/

const nomor = validator.isMobilePhone('081234567','id-ID')
console.log(nomor)


/*

untuk nomor teleponnya dalam bentuk string ya
bukan integer

lalu kita kasih option diarguments kedua
formatnya seperti itu untuk indo

kalo kita jalankan dia akan true ya

kalo misalkan saya masukkan 123456789
maka akan false ya karena itu bukan nomor telepon indo

kalo misalkan kita tulis depannya 080
maka akan false juga karena tidak ada nomor
telepon yang depannya 080



*/



// isNumeric(str,option)

/*

tapi kalo misalkan kita mau mengecheck string itu adalah
serangkaian angka atau bukan itu kita bisa menggunakan
method yang namanya isNumeric()

kalian bisa kasih arguments kedua yaitu nama negaranya
yang ada didalam documentasinya 

tapi kalo indo tidak ada, kita kosongin saja 

*/

const str = validator.isNumeric('123467865')
console.log(str)


/*

maka dia bisa tahu bahwa string itu adalah angka semua
tapi kalo saya kasih huruf satu saja atau simbol 

maka dia akan false



nah jadi itu cara pakai salah satu package dari npm 
yang namanya validator 

*/