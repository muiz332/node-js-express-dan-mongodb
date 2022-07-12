/*

nah perbedaanya ada didalam object window yang global ini


kita ingat ingat lagi perilaku javascript yang ada didalam browser
ketika kita bikin function bikin variable

itu yang terjadi adalah 
javascriptnya akan mendeklarasikan function atau variable yang telah
kita buat kedalam object window

jadi misalkan kalian bikin funtion seperti ini


*/

function sayHalo (nama){
    return `hai ${nama}`
}

/*

yang namanya dimasukkan kedalam object itu berarti kita bisa panggil 
objectnya titik propertinya

jadi kalo function itu saya jalankan 
saya bisa tulis seperti ini

*/


// console.log(window.sayHalo('muiz'))

// materi  ini ada di variable scope



/*

nah functionnya masuk kedalam object windows efeknya adalah
ketika kita punya file javascript lain yang terpisah difile ini

tapi kita panggil sama sama didalam file index.html
funtion sayHalo ini bisa dipakai

nah maksutnya gimana?

kita bikin file javascript yang lain lalu kita hubungkan ke halaman index.html
kita pindah kehalaman coba.js

*/