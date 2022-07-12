// package yargs

/*

nah package ini bisa membantu kita untuk membuat command line 
yang interaktif dengan melakukan parsing atau diuraikan 
secara elegan 

jadi ini akan lebih gampang
untuk lebih jelasnya kita langsung coba saja ya 

kita inisialisasikan folder kita sebagai folder npm
nah untuk mempercepat kita bisa tulis

npm init -y

nah nanti dia akan mengisi nilai default
untuk project sederhana bisa pakai command ini 

kalo sudah 
instal packagenya 


nah sekarang kita akan cobain cara mengambilnya 
argumentsnya sekarang pakai yargs

*/

const yargs = require('yargs')

// lau panggil properti namanya argv

// console.log(yargs.argv)


/*

nah sekarang kita jalankan dengan menambahkan arguments 
seperti ini

node app add --nama="muiz"

kalo saya jalankan maka akan tampil
seperti ini 

{ _: [ 'add' ], nama: 'muiz', '$0': 'app' }

jadi sekarang langsung ada datanya ya
nah untuk lebih detilnya kalian bisa baca di
documentasinya yargsnya pada website yargs.js.org


yang akan kita pakai pada documentasinya adalah
yang command

.command(cmd, desc, [builder], [handler])

yang didalamnya kita bisa tahu commandnya mau apa
apakah add remove dll

terus kita kasih descripsi 
terus kita kasih object sebagai pembantuk perintahnya 

jadi ada nama email dan noHP
dibentuk pada bagian builder

nah yang terakhir ada handler
nah ini adalah fungsi yang akan memberitahu
apa yang kita lakukan ketika si commandnya ini dieksekusi


nah sekarang kita coba buat yang simple dulu ya 

*/

// yargs.command('add','menambah contact baru',() => {},(argv) => {
//   // ambil nama
//   console.log(argv.nama)
// })

// yargs.parse()
/*

untuk builder itu kita bisa isikan dengan 
object atau functions 

karena belum mau melakukan apapun kita kasih function kosong saja
dan handlernya kita bisa kasih function kosong juga dan functions ini
juga menerima satu parameter yaitu argvnya


jadi kita bisa tahu apa yang didapatkan diyargs ini pada argumentsnya

dan untuk menjalankannya kita panggil yargs.parse()

node app add --nama="muiz"

kalo saya jalankan akan tampil muiz ya 

nah  --nama akan dijadikan sebagai properti dari object 
pada parameter handlernya 

kalo kalian tulis node app --help

maka akan tampil seperti ini 

node app --help           
app [command]

Commands:
  app add  menambah file

Options:
  --help     Show help                         [boolean]
  --version  Show version number               [boolean]

nah jadi akan tampil commandnya apa saja
karena kita cuma punya add 

maka hanya add dan descripsinya saja 



*/


// bikin lebih komplex


/*

nah sekarang kita akan bikin lebih komplex lagi 
kita buat agar si command ini tidak lagi menerima 
parameternya satu satu dipisahkan sama koma gitu

tapi kita akan bikin parameternya object
nah ini akan mudah ketika ingin menambahkan perintahnya




*/

yargs.command({
  // untuk menambahkan perintah pakai properti command
  command : 'add',
  // deskripsi
  describe : 'menambahkan contact',
  // builder
  builder : {
    // untuk menuliskan tiap tiap nama data yang kita butuhkan
    nama : {
      // karakteristik atau options 
      // untuk langkapnya didocumentasinya

      // harus diisi atau tidak
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
    const contact = {
      nama : argv.nama,
      email : argv.email,
      noHP : argv.noHP
    }
    console.log(contact)
  }

})


yargs.parse()

/*

nah kalian bisa buat arguments pada method
commandnya adalah object seperti itu

nah untuk menambahkan sintaxt lainnya 
kalian bisa tambahkan propertinya pada builder

yang isinya object seperti properti nama pada builder
yang isinya optionnya kalian sesuaikan sendiri

jangan lupa kita panggil fungsi main seperti dimateri sebelumnya
atau pada kasus ini kita panggil method yang namanya parse()


setelah kita bangun nama datanya dibuilder
kita bisa tangkap isi dari data pada argumentsnya 

dengan menambahkan method yang namanya handler 
dan memiliki satu parameter yaitu argvnya


nah sekarang kita coba jalankan 

node app add --nama="muiz" --email="muiz@gmail.com" --noHP="098765"
{ nama: 'muiz', email: 'muiz@gmail.com', noHP: '098765' }

nah sip ya kita sudah mendapatkan datanya
jadi seperti itu ya 

tinggal kita nanti check apa itu sebuah no hp 
apa itu sebuah email

kalo ya tambahkan datanya 
panggil function yang ada didalam file
contacts.js


*/