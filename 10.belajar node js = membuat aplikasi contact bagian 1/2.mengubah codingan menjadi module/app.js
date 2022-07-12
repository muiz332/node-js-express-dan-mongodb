
const contact = require('./contacts')

async function main(){

    const nama = await contact.tanya('Masukkan namamu: ')
    const nomor = await contact.tanya('Masukkan nomormu: ')
    const email = await contact.tanya('Masukkan emailmu: ')


    contact.simpanContact(nama,nomor,email)
}

main()

/*

catatan:
require itu jika ada program pada file yang
diperlukan atau require

maka program yang ada difile itu dapat dijalankan


require itu sama saja memanggil dan menjalankan program
yang ada pada file contacts.js 

jadi ketika didalam file contacts.json ada looping
dan dia tidak ikut diexsport

maka loopingnya akan tetap jalan




nah kalian bisa pakai destructuring object pada file yang kita
require

jadi kita pecah object yang kita require
kita ambil propertinya saja

contoh

const {tanya} = require('./contacts')

jadi kita hanya memanggil properti tanya saja



oke ya jadi sekarang file appnya rapi
komplexsitasnya kita sembunyikan ke file contacts.js 



jadi seperti itu ya aplikasi yang sangat sederhana kita
disini kita sudah belajar bagaiaman cara mengelola file file 
pada node js kita


kita juga sudah sembunyikan komplexitasnya 
kita juga punya entri pointnya yaitu app.js


dan gaya codingan ini akan sering kita lakukan 
gitu ya temen temen mudah mudahan paham nih



dan dimateri sebelumnya kita akan perbaiki aplikasi contact kita
karena sebetulnya masih banyak hal yang akan kita masukkan
kedalam aplikasi contact kita

kita belum melakukan validasi 
kita belum menghias tampilan terminalnya 

kita tahu kita punya module untuk menghias terminalnya
kita akan gunakan itu 

dan yang paling penting adalah 
kita akan lakukan cara yang lain tidak akan menggunakan readline lagi

ya kita akan menggunakan sebuah module untuk mengelola arguments yang
sudah kita ketikkan diterminal 

jadi nanti aplikasi kita tidak lagi minta 
data seperti yang sudah kita lakukan ini 

jadi idenya adalah nanti ketika kita jalankan 
aplikasinya kita akan kasih tahu

kita mau menambahkan contact 
kita mau menghapus contact 
kita mau menampilkan semua contact yang ada 

dan lain sebagainya 


kalo  misalkan kita mau menambahkan 
kita bisa tulis begini

node app add --nama="muiz" --email="muiz@gmail.com" --nomor="09876554"


nah jadi kita akan perbaiki supaya aplikasi kita lebih lengkap
dimateri materi berikutnya


oke ya mungkin itu saja untuk materi kali ini 
kita ketemu lagi dimateri berikutnya

dan seperti biasa jangan lupa titik koma ;


*/