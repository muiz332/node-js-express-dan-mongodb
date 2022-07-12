/*

kita inget bahwa kalo kita bekerja pada javascript dibrowser itu kita punya
sebuah object global yang namanya window

kalo didalam javascript itu kita bisa tulis

*/
console.log(window)

/*

karena kita sudah keluar dari konteks browser ini kalo kita jalankan tidak bisa

console.log(window)
            ^

ReferenceError: window is not defined
    at Object.<anonymous> (d:\teknologi\web programming unpas\node js dan mongoDB\5.belajar node js = menjalankan file node\3.object global atau window\1.latihan.js:9:13)


nah katanya object window is not defined
tapi kalo didalam browser itu ada object window

kalo kita jalankan didalam browser itu ada maka akan tampil
Window {window: Window, self: Window, document: document, name: '', location: Location, …}

sedangkan didalam node js itu tidak bisa karena bukan lagi didalam web browser

object window yang ada didalam browser itu ada banyak 
ada alert ada prompt ada confirm dan lain lain


kalo didalam node js peritah itu tidak akan bisa dijalankan

















*/