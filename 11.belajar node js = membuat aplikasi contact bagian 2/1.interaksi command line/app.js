
// const contact = require('./contacts')

// async function main(){

//     const nama = await contact.tanya('Masukkan namamu: ')
//     const nomor = await contact.tanya('Masukkan nomormu: ')
//     const email = await contact.tanya('Masukkan emailmu: ')


//     contact.simpanContact(nama,nomor,email)
// }

// main()


/*

dimateri kali ini kita akan lanjutkan lagi pembuatan
aplikasi contact kita 

tapi dimateri kali ini kita akan buat contact appnya berbeda dari
materi sebelumnya 

nah dimateri sebelumnya untuk menjalankan aplikasinya
itu kita harus mengisi dulu diterminalnya ada nama email dan
nomor hp

lalu datanya disimpan kecile contacts.json

nah sekarang kita akan lakukan pendekatan yang berbeda 
sekarang kita ingin bahwa setiap data itu kita permudah

kita tidak perlu menjawab pertanyaan seperti itu
kita akan langsung masukkan lewat terminalnya 

jadi kita akan tulis seperti ini

node app add --nama="muiz" --email="muiz@gmail.com" --noHP="08234556"

nah setelah nama filenya itu adalah perintah 
misalnya add untuk menambah datanya 

lalu setelah itu datanya 

nah sekarang kita akan cari tahu bagaimana cara mendapatkan argument
argument yang kita tulis setelah memanggil nama file nodenya

*/



// mengambil argument dari command line

/*

nah misalnya kita mau mengambil argument lalu kita cetak kelayar
kita bisa tulis seperti ini 

kita bisa pakai object yang namanya process
punyanya node js

*/
// console.log(process)

/*

kita panggil object process
kalo kita console maka isinya adalah properti 
dan method methodnya


nah kita butuh properti yang namanya argv
untuk menangkap argument setelah nama filenya dijalankan

*/

console.log(process.argv)


/*

kita akan jalankan dengan mengirimkan 
arguments seperti ini 

node app hai muiz

kalo saya jalankan maka akan tampil seperti ini 

[
  '/usr/bin/node',
  '/media/mz_oioi/CA98E53998E52523/teknologi/web programming unpas/node js dan mongoDB/11.belajar node js = membuat aplikasi contact bagian 2/app',
  'hai',
  'muiz'
]

nah sekarang dia akan mengembalikan array 
yang isinya seperti itu

index ke 0 itu adalah tempat penyimpanan nodenya
index ke 1 adalah letak program ini atau penyimpanan file entri pointnya

index ke 2 dan seterusnya itu adalah arguments yang
kita masukkan dicommand linenya


kalo misalkan kita nanti pakai process ini 
kalo saya ingin menjalankan sesuatu setelah

saya mengetikkan add
seperti ini 

node app add

maka saya bisa tulis saja seperti ini 

const command = process.argv[2]
if(command === 'add'){
    aksi
}


jadi kita add mau mengapain
lalu ada lagi misalnya remove 
ada misanya tampil 
untuk menampilkan contactnya

lalu ada update dan lain lain 
sesuai yang kalian inginkan 


bisa seperti ini 
atau kalian bisa pakai module 
yang ada dinpm 

yang memang fungsinya adalah untuk mengelola argument 
pada command line

nah nanti kalian bisa cari sebuah package yang
namanya yargs

nah package ini bisa membantu kita untuk membuat command line 
yang interaktif dengan melakukan parsing atau diuraikan 

secara elegan 

jadi ini akan lebih gampang








*/