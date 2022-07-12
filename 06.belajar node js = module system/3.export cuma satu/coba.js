module.exports = {
    cetakNama(nama){
        return `hai nama saya ${nama}`
    },
    umur : 18,
    mahasiswa : {
        nama : 'husain',
        umur : 20,
        cetakMhs : function(){
            return `hai nama saya ${this.nama} umur saya ${this.umur}`
        }
    },
    Orang : class Orang{
        constructor(){
            console.log('object orang telah dibuat')
        }
    }
}

/*

nah jadi kalian bisa kirimklan semuanya kedalma object


*/