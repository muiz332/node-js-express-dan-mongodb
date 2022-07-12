/*

nah didalam node js itu ada caranya kalo kita mau memanggil
file lagi 

kita coba ya 

kita punya dua file ya index dan latihan

nah kedepannya ketika kalian buat file node js ini semakin besar pasti file 
javascript kalian itu juga ada banyak 

nah tapi kedepannya yang akan kalian jalankan itu ada satu file
yang namanya index.js

nah tapi file utama ini bisa memanggil file file lain
supaya lebih modular, supaya lebih gampang dibaca ditelusuri dan lain sebaginya


kita coba contoh kasus yang kita buat
ada index.js dan ada latihan.js


disini kita tulis console
didalam index.js kita tulis console juga

*/

// console.log('hello world')


/*

nah gimana caranya supaya saya bisa menjalankan file index
tapi juga menjalankan file latihan.js



kita pergi kehalaman index.js

*/






/*

nah contohnya disini saya bikin function 

*/

function sayHalo(nama){
    return `halo nama saya ${nama}`
}


/*

nah kita bikinnya difile latihan 
kita panggilnya difile index

kita pergi kehalaman index


*/



/*

ditulis difile latihan

*/

console.log(sayHalo('muiz'))