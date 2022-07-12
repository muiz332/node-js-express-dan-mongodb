/*

nah sekarang saya ingin mengakses function sayHalo yang ada dihalaman latihan.js
kita panggil function sayhalo lalu kita munculkan kedalam console

*/

// console.log(window.sayHalo('muiz'))

/*

kalo kita jalankan ternyata tetap jalan ya 
karena apa yang kita buat didalam satu file ketika kita panggil sekaligus 
dalam satu file html 

itu bisa kita pakai meskipun berbeda file
ya karena apapun yang ada didalam javscriptnya itu akan masuk kehalam object window

karena dia global kita bisa akses difile terpisah

atau kalo saya hilangkan windownya

*/


console.log(sayHalo('muiz'))

/*

sama saja ya 


nah ini lah kenapa kalo pakai javascript didalam browser kadang kadang kita 
harus jeli membuat nama variable nama function itu tidak boleh sama 

karena nanti bentrok apa lagi kalo kita sudah coba untuk menggunakan library external
kita pakai jquery kita pakai library lain

itu harus hati hati kalo misalkan ada nama variable atau function yang sama
makanya nanti itu akan diakalin dengan menggunakan yang namanya 

imediatelli invoked function expression

tapi itu tidak akan kita bahas pokoknya 
apa yang kita buat didalam satu selama dipanggil difile index yang sama itu
bisa diakses oleh file yang lain











*/