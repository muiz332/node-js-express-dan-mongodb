
const yargs = require('yargs')
const contacts = require('./contacts')

yargs.command({
  command : 'add',
  describe : 'menambahkan contact',
  builder : {
    nama : {
      demandOption : true,
      default : 'kosong',
      describe : 'namamu',
      type : 'string'
    },
    email : {
      demandOption : false,
      default : 'tidak ada email',
      describe : 'emailmu',
      type : 'string'
    },
    noHP : {
      demandOption : true,
      describe : 'nomor hp',
      type : 'string'

    }
  },
  handler : function(argv){
    contacts.simpanContact(argv.nama, argv.noHP, argv.email)
  }

}).demandCommand()


yargs.command({
  command : 'list',
  describe : 'menampilkan contact',
  // kita tidak perlu mengambil data dari argument jadi
  // kita tidak perlu membuat buildernya
  handler : function(){
    contacts.list()
  }

})


yargs.command({
  command : 'detail',
  describe : 'menampilkan contact secara detil dari sebuah nama',
  builder : {
    nama : {
      describe : 'nama contact',
      demandOption : true,
      type : "string"
    }
    
  },
  handler : function(argv){
    contacts.detil(argv.nama.toLowerCase())
  }
})



yargs.command({
  command : 'detail',
  describe : 'menghapus contact dari sebuah nama',
  builder : {
    nama : {
      describe : 'hapus contact',
      demandOption : true,
      type : "string"
    }
    
  },
  handler : function(argv){
    contacts.deleteContact(argv.nama.toLowerCase())
  }
})


yargs.parse()



/*

versi 

"chalk": "^4.1.0", wajib
"validator": "^13.7.0",
"yargs": "^16.2.0"

nah jadi disini kita menambahkan fitur list
untuk menampilkan datanya dan fitu email untuk menampilkan
salah satu email dari nama yang dimasukkan

jadi nanti saya tulis begini
node app detil --nama="muiz"

dan namanya harus sesuai dengan nama contactnya 
dan nama yang dimasukkan usernya tidak sensitif dengan
huruf besar atau kecil

dan pada saat kita menjalankan node app
kan kalo kita enter tidak ada pemberitahuan apapun

nah kita buat gunkan method yang namanya demandOption()
pada object commandnya

dan method tersebut minimal kita pakai pada salah satu 
commandnya saja

jadi kalian tidak perlu menambahkan demandOption untuk 
command command yang lainnya 


jadi sampai disitu saja untuk materi kali ini 
kita ketemu lagi dimateri berikutnya 
dan seperti biasa jangan lupa titik koma


*/
