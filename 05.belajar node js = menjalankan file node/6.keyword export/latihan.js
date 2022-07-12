function sayHalo(nama){
    return `halo nama saya ${nama}`
}


/*

kita harus menuliskan keyword yang namanya export 
supaya function ini bisa kita pakai didalam file index

jadi kita tidak bisa bikin supaya sayhalo ini dipakai dimana saja sebelum
kita export 


export itu kita memberi tahu kenode js nya 
nih saya punya variable saya punya function saya punya object yang dipakai
diluar modul ini

jadi kalian tulisnya seperti ini 

*/

module.exports = sayHalo


/*

kita tulis keywordnya module.exports yang diisi dengan 
apa yang mau diexport


nah maka function cetak nama ini akan bisa digunakan 
oleh file mana pun yang menuliskan require kefile ini

kita pindah kehalaman index.js



*/