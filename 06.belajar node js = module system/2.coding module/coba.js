// function cetakNama(nama){
//     return `hai nama saya ${nama}`
// }


// const umur = 18

// module.exports = cetakNama

// // nah kalian tidak bisa menuliskan ini 

// module.exports = umur

// // karena module export itu sudah diisi dengan cetak nama
// // pergi kehalaman index



// function cetakNama(nama){
//     return `hai nama saya ${nama}`
// }

// const umur = 18

// module.exports.cetakNama = cetakNama
// module.exports.umur = umur


/*

nah jadi kita bisa menuliskannya seperti ini 
nah ini untuk cara mengeksportnya 

kita bisa export beberapa hal juga

kita kembali kahalaman index

*/


function cetakNama(nama){
    return `hai nama saya ${nama}`
}

const umur = 18

const mahasiwa = {
    nama : 'husain',
    umur : 20,
    // notasi es 6 

    cetakMhs(){
        return `hai nama saya ${this.nama} umur saya ${this.umur}  tahun`
    }
}

class Orang{
    constructor(){
        console.log('object / class orang telah dibuat')
    }
}


module.exports.cetakNama = cetakNama
module.exports.umur = umur
module.exports.mahasiwa = mahasiwa
module.exports.Orang = Orang
