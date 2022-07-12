/*

kali ini kita akan mulai untuk membuat sebuah aplikasi sederhana
menggunakan apa yang sudah kita pelajari 

ini dari materi materi sebelumnya
jadi ceritanya kita akan membuat sebuah aplikasi untuk mengelola
data contact kita 

dan ini terinspirasi dari materi core module
jadi silahkan kalian buka kembali aplikasi yang sudah 
dibuat dimateri ke core module


*/

// const fs = require('fs')
// const readline = require('readline')

// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// })

// rl.question('Masukkan namamu: ',(nama) => {
//     rl.question('Masukkan Nomormu: ', (nomor) => {
//         contact = {nama, nomor}
//         const isi = fs.readFileSync('./data/contacts.json',"utf-8")
//         const arr = JSON.parse(isi)
//         arr.push(contact)
        
//         fs.writeFileSync('./data/contacts.json',JSON.stringify(ubah))


//         rl.close()
//     })
// })



/*

nah sebetulnya aplikasi contact ini akan kita bikin 
lebih komplex lagi menggunakan cara yang beda

nah tapi disini kita akan sama sama belajar untuk memperbaiki dulu 

atau melakukan refaktoring dari aplikasi 
yang sangat sederhana yang sudah kita buat

jadi harusnya kalian sudah bisa gunakan aplikasi ini

tapi kalo kalian lihat dari program yang sudah kita buat ini
banyak kekurangannya 

nah dimateri kali ini kita akan coba refaktoring dulu
kita rapikan dulu sedikit ya 

sebelum nanti dimateri materi berikutnya kita baru membuat aplikasi contact yang sedikit
lebih komplex




1. tidak punya file
nah problem dari aplikasi kita gimana 
kalo misalnya diawal itu kita tidak punya folder data
dan file contact.json ini 

kalo misalkan folder data dan file contact kalo kita hapus maka akan eror

nah ini bisa kita tangani dengan mengecheck dulu 
apakah foldernya ada dan apakah filenya ada 

kalo belum ada kita akan buatkan
nah ini caranya kalian buka saja nodejs.org

nah kita bisa gunakan method yang namanya
existsSync(path)


jadi ini buat mengecheck apakah sebuah file atau direktori itu ada gak didalam file system kita

caranya gini kalian bisa buat kondisi 
dan method existsSync() akan mengembalikan true atau false

*/

// const fs = require('fs')
// const readline = require('readline')

// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// })

// if(!fs.existsSync('./data')){
//     fs.mkdirSync('./data')
// }

// if(!fs.existsSync('./data/contacts.json')){
//     fs.writeFileSync('./data/contacts.json','[]',"utf-8")
// }

// rl.question('Masukkan namamu: ',(nama) => {
//     rl.question('Masukkan Nomormu: ', (nomor) => {
//         contact = {nama, nomor}
        
        
//         const isi = fs.readFileSync('./data/contacts.json',"utf-8")

//         const arr = JSON.parse(isi)
//         arr.push(contact)
        
//         fs.writeFileSync('./data/contacts.json',JSON.stringify(arr))


//         rl.close()
//     })
// })


/*

2. callback hell

ini yang cukup penting ya
kita tahu bahwa kita punya dua pertanyaan 

ada nama dan nomor hp 
ini kita pakai readline dan methodnya question
dan problem dari menggunakan question ini adalah

kita menggunakan callback
ya jadi kalo misalkan kalian punya dua pertanyaan 

pertanyaan kedua itu kita masukkan kedalam callback pertanyaan pertama 
nah ini akan jadi problem ketika kita mau menambahkan pertanyaan berikutnya 

kalo kita mau menambahkan pertanyaan berikutnya 
sekarang kita butuh question lagi 

dan questionnya ada didalam callback question kedua 
nah nanti kalo pertanyaannya semakin banyak

ini akan masuk kedalam sesuatu yang namanya callback hell
jadi akan semakin menjorok kedalam

dan codingannya akan tidak bagus 
nah gimana cara memperbaikinya 

nah disini kita bisa gunakan konsep yang namanya asyn dan await
async await itu untuk mengatasi callback hell 

kalo kita mau melakukan itu ada satu problem lagi
async await hanya bisa dilakukan ketika kita berhadapan dengan promise

masalahnya callback yang kita punya ini belum berbentuk promise 
makanya kita harus ubah dulu setiap questinnya itu kedalam
promise baru kita bisa gunakan async dan await 

oke gimana caranya kita langsung saja coba






*/


const fs = require('fs')


// buat folder atau file jika belum ada 

if(!fs.existsSync('./data')){
    fs.mkdirSync('./data')
}

if(!fs.existsSync('./data/contacts.json')){
    fs.writeFileSync('./data/contacts.json','[]',"utf-8")
}



/*

nah jadi sekarang kita akan bungkus setiap pertanyaannya kedalam 
promise
nah satu pertanyaan itu sebenarnya cuma begini
rl.question('masukkan namamu: ', (nama) {})

nah ini kita akan bungkus kedalam promise 
caranya gini

saya buat function ya agar nanti kita bia pakai
disetiap pertanyaan 


*/

function pertanyaan(tanya){
    const readline = require('readline')
    const rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    })
    // nah function pertanyaan ini akan mengembalikan sebuah promise
    return new Promise((resolve, reject) => {
        // nah promise ini memiliki callback yang prameternya ada dua 
        // resolve dan reject

        // resolve itu terjadi ketika promisenya fulfild atau selesai
        // reject itu ketika gagal 

        // nah sekarang didalam callback ini baru kita masukkan 
        // pertanyaannya 

        // jadi ini kita bikinnya menggunakan gaya promise
        rl.question(tanya,(result)=>{
            /*
            
            nah sekarang kita panggil resolvenya
            jadi kalo berhasil kita panggil resolvernya 

            yang isi parameternya result
            
            */
           resolve(result)
           rl.close()
        })


    })
}



async function main(){

    // nah setelah itu tinggal kita pakai konsep
    // async dan await
    const nama = await pertanyaan('Masukkan namamu: ')
    const nomor = await pertanyaan('Masukkan nomormu: ')
    const email = await pertanyaan('Masukkan emailmu: ')
    
    const contact = {nama, email,nomor}
        
        
    const isi = fs.readFileSync('./data/contacts.json',"utf-8")

    const arr = JSON.parse(isi)
    arr.push(contact)
    
    fs.writeFileSync('./data/contacts.json',JSON.stringify(arr))



}

main()


/*

begitu ya jadi codinganya tidak menggunakan callback lagi   
nah sekarang kita coba jalanin
sudah bener ya

jadi ini sudah lebih rapi lagi ya 

nah sekarang codingan ini bisa kita buat menjadi
module 

kita lihat difolder selanjutnya 



*/





/*

catatan:
kalo mau pakai async dan await itu harus berhadapan dengan promise
kalo selain promise tidak bisa

jadi kita bisa ubah menjadi promise agar bisa berinteraksi dengan
async dan await seperti codingan diatas ya 

*/