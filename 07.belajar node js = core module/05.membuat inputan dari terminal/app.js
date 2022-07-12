// membuat inputan dari terminal

/*

nah sekarang yang akan kita coba adalah module yang namanya 
readline

nah ini adalah sebuah modul untuk membaca apa yang 
kita tuliskan nanti diterminal

kalian bisa buka documentasinya 

nah readline ini gaya penulisannya langsung callback ya 
nah kita langsung coba saja ya 

*/

// kita panggil dulu modulnya 

const readline = require('readline')


// setelah itu kita bikin interfacenya atau penghubung antara terminal dengan code

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout

})

/*

nah ini adalah interfacenya 

nah process ini adalah apa yang dilakukan diterminalnya
ya jadi kalo stdin ya itu untuk inputannya 

yang stdout untuk tampilnya 

nah sekarang kita bisa bikin pertanyaan 
yang nantinya itu akan tampil didalam terminalnya

caranya begini 
kita panggil object rlnya lalu 
panggil methodnya namanya question

*/


// rl.question('masukkan namamu: ', nama => {
//     console.log(`halo ${nama}`)

//     rl.close()
// })

/*

nah method question ini menerima 
dua buah parameter 

yang pertama itu parameter pertanyaannya 
yang nanti muncul diterminalnya 

yang kedua ada callbacknya
callbacknya memiliki satu parameter yaitu data yang kita kirimkan
kedalam terminal pada saat

petanyaan itu muncul

misalnya didalam callbacknya saya hanya menampilkan datanya saja

lalu kita rl.close()
supaya terhenti dan tidak ngestuck terminalnya 

kalo kalian jalankan 
misalnya saya masukkan muiz

maka akan tampil
masukkan namamu: muiz
halo muiz

nah jadi pada saat kalian mengisikan nama kalian
itu akan ditampung kesebuah callbacknya 



nah sebenarnya selain pertanyaan 
kalian bisa tambahkan yang lain untuk lebih lengkapnya kalian
baca saja documentasinya tentang readline ini ya 


nah sekarang saya kasih kalian challenge nih
kira kira gimana kalo saya ingin pertanyaannya itu lebih dari satu 


misalnya ketika ditanya, pertanyaannya itu dua kali
yang pertama masukkan namamu
yang kedua misalnya masukkan nomor hp anda  


silahkan dicoba setelah itu check
difolder selanjutnya 



*/

