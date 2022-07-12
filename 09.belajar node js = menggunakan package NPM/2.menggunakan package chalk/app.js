// package chalk


/*

nah sekarang kita coba package selanjutnya yang namanya
chalk

jadi chalk ini untuk mewarnai terminal string kita 

kita install dulu npmnya caranya
npm i chalk@4.1.0

beserta versinya ya supaya sama 
kalo sudah diinstall kita coba

*/

const chalk = require('chalk')


// lalu cara pakainya kita panggil objectnya 
// lalu apa yang mau kita hias misalnya saya ingin mewarnai stringnya menjadi biru

let str = chalk.blue('hello world')
console.log(str)

/*

kalo kita jalankan maka tulisannya akan berwarna biru
nah untuk detilnya kalian bisa baca documentasinya

jadi terminal kalian bisa warna warni 

nah lalu kita juga bisa kasih background color 
misalkan saya ingin backgroundnya biru dan tulisannya putih

jadi kalian bisa tulis seperti ini

*/

str = chalk.black.bgBlue('hello world')
console.log(str)

/*

kalo saya jalankan tuilisanya hitam tapi backgroundnya 
biru 

nah selanjutnya kita juga bisa menggunakan modifiernya
tapi tidak semua modifiernya support diterminalnya

misalnya kita mau tulisan ini menjadi cetak miring

*/


str = chalk.black.bgBlue.italic('hello world')
console.log(str)


/*

kalo saya jalankan dia akan cetak miring ya 
jadi ini cara kita kalo mau memberikan warna pada string ya

dan kerennya lagi kita juga bisa membuat satu kalimat 
mempunya perilaku yang berbeda

contohnya gini 
misalkan saya punya string seperti ini 


*/

const pesan = 'hello world'
console.log(chalk.bgRed.black(pesan))


/*

kalo kita jalanin background colornya red dan warnanya black
nah gimana kalo kata pertama dan kata kedua itu perilakunya berbeda

misalkan warnya beda 
nah menggunakan chalk ini kita juga masukkan template literal 

kalo didocumentasi veri 4.1.0 ada yang namanya tagged template literal

ini harusnya kalian sudah belajar waktu kita belajar
mengenai javscript lanjutan kita bisa pakai
yang namanya tagged tempalte literal 

jadi kita tagged dulu didepan template literal yang 
namanya chalk baru didalamnya kita bisa pakai modifier 
modifier chalknya 

kita coba saja

*/  

// const tagged = chalk`selamat datang muiz`


/*

misalnya saya mau bikin tulisan selamat datang ini berwarna merah 
backroundnya biru dan tulisannya cetak tebal

dan tulisan muiz itu hitam backgroundnya hijau

caranya kita tinggal tambahkan depan template literal dengan 
chalk 

lalu gimana agar perilakunya beda?
kita tinggal kasih saja kurung kurawal pada bagian
kata yang mau diubah perilakunya 

lalu didepan kata tersebut kita kasih modifiernya 

*/

const tagged = chalk`{red.bgBlue.bold selamat} datang {black.bgGreen muiz}`
console.log(tagged)

/*

kalo kita jalanin maka sudah berubah ya 
jadi ini cara kita untuk menggunakan module npm 
yang namanya chalk  


validator dan chalk itu sederhana sekali ya untuk cara
pakainya 

ya walaupun didalam npm banyak sekali module module 
atau package package yang lebih besar lagi cara penggunakaannya

kita bisa pake framework yang namanya express 
kita bisa pakai package untuk terkoneksi kedalam database mongo DB misalnya dan lain sebagainya 


*/