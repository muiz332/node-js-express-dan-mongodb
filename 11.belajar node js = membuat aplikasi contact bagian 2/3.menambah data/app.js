// const yargs = require('yargs')

// yargs.command({
//   command : 'add',
//   describe : 'menambahkan contact',
//   builder : {
//     nama : {
//       demandOption : true,
//       default : 'kosong',
//       describe : 'namamu',
//       type : 'string'
//     },
//     email : {
//       demandOption : false,
//       default : 'tidak ada email',
//       describe : 'emailmu',
//       type : 'string'
//     },
//     noHP : {
//       demandOption : true,
//       describe : 'nomor hp',
//       type : 'string'

//     }
//   },
//   handler : function(argv){
//     const contact = {
//       nama : argv.nama,
//       email : argv.email,
//       noHP : argv.noHP
//     }
//     console.log(contact)
//   }

// })


// yargs.parse()

/*

versi package

"chalk": "^4.1.0",
"validator": "^13.7.0",
"yargs": "^16.2.0"

nah misalkan kalian tidak tahu nih butuh argument apa saja
kalian bisa tulis helpnya setelah commmandnya

node app add --help

node app add --help
app add

menambahkan contact

Options:
  --help     Show help                         [boolean]
  --version  Show version number               [boolean]
  --nama     namamu
                 [string] [required] [default: "kosong"]
  --email    emailmu
                   [string] [default: "tidak ada email"]
  --noHP     nomor hp                [string] [required]

  

nah kalian bisa mengisikan --nama untuk nama
--email untuk emailmu
dan --noHP untuk nomor hpnya


nah karena kita sudah menangkap semua argument yang 
diperlukan kita tinggal menggabungkan semua fitur yang 
sudah kita buat difile contact.js

jadi setelah kita sudah mendapatkan datanya 
kita jalanin function simpanCOntact()nya



*/

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

})


yargs.parse()


/*

kalo kita jalankan 
kita masukkan argument seperti ini 

node app add --nama="muiz" --email="muiz@gmail.com" --noHP="098765"

maka kita sudah bisa membuat datanya seperti sebelumnya
didalam contacts.json

nah jadi sekarang kita sudah coba nih cara yang lain
menggunakan teknik seperti ini 

karena teknik ini akan lebih fleksible ketika kita mengubah
commandnya 

nanti tinggal kalian tambahkan saja command remove list dan sebagainya 

nah sekarang saya akan validasi dulu 
jadi saya tidak mau menerima nama yang duplikat

ya walaupun ini hanya contoh saya karena mungkin saja 2 orang
memiliki nama yang sama 


jadi didalam function simpanContact pada saat mengambil data
kalian bisa check datanya ada yang sama atau tidak

kita bisa gunakan method yang namanya find
untuk mencari datanya 

nah kita bisa pakai module chalk
supaya jika namanya sudah ada consolenya background warna merah
dan tulisannya hitam


lalu saya juga ingin mengecheck emailnya itu bener
pakai module validator

dan apakah dia itu nomor hp atau bukan

jadi mudah mudahan sampai disini kalian paham
jadi itu sama untuk materi kali ini 

kita ketemu lagi dimateri berikutnya 
dan seperti biasa jangan lupa titik koma ;



*/