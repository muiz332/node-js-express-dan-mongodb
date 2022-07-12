/*

nah disini kita akan bikin kode yang syncronous dulu ya 


misalnya saya punya function yang namanya getUserSync
yang ceritanya untuk merequest data ke file lain

yang menerima satu parameter yaitu id

*/

// const getUserSync = id => {
//     // dan data dikembalikan dalam bentuk object
//     // karena ini hanya contoh saja saya kasih kondisi
//     // kalo idnya satu itu namanya muiz 
//     // kalo idnya dua itu namanya zuddin

//     const nama = (id === 1) ? 'muiz' : 'zuddin'

//     // return {
//     //     id : id,
//     //     nama : nama
//     // }

//     // dan dijavascript yang kalo nama propertinya sama dengan valuenya maka cukup menuliskan satu saja 
//     return {id,nama}


// }

// const userSatu = getUserSync(1)
// // lalu kita ambil data user dengan id 1 misalnya 
// console.log(userSatu)


// // lalu saya ingin mengambil user yang idnya 2 
// const userDua = getUserSync(2)
// console.log(userDua)


// // lalu ceritanya kalo direstoran tadi ada yang tanya password wifi

// const halo = 'hello world'
// console.log(halo)


/*

ini kalo saya jalankan menggunakan node js akan tampi seperti ini

{ id: 1, nama: 'muiz' }
  ​​​​​at ​​​​​​​​userSatu​​​ ​script.js:34:0​

{ id: 2, nama: 'zuddin' }
  ​​​​​at ​​​​​​​​userDua​​​ ​script.js:39:0​

hello world ​​​​​at ​​​​​​​​halo​​​ ​script.js:45:0​

jadi yang tampil dulu yang idnya 1 
lalu idnya 2 dan terakhir cuma tanya password wifinya saja


jadi data yang akan tampil itu sesuai karena dia syncronous


kalo misalkan usersatu itu lama misalnya 3 detik
maka beris selanjutnya akan dijalankan setelah baris sebelumnya 
selesai


sekarang gimana kalo kita bikin menjadi asyncronous





*/

// asyncronous


const getUser = (id, call) => {
    // nah kita buat waktu tunggunya 
    // misalnya kalo idnya 1 waktu tunggunya 3 detik selain itu 2 detik

    const waktu = id === 1 ? 3000 : 2000
    setTimeout(() => {
        // kita check lagi seperti tadi

        const nama = id === 1 ? 'muiz' : 'zuddin'
        call({id,nama})
    },waktu)

}



const userSatu = getUser(1, (d) => {
    console.log(d)
})

const userDua = getUser(2, (d) => {
    console.log(d)
})

const halo = 'hello world'
console.log(halo)



/*

kalo kita jalankan
user satu itu 3 detik
user 2 itu 2 detk
dan cuma tanya password wifi saja

kalo kita jalankan akan tampil seperti ini

hello world ​​​​​at ​​​​​​​​halo​​​ ​script.js:108:0​

{ id: 2, nama: 'zuddin' }
  ​​​​​at ​​​​​​​​d​​​ ​script.js:104:4​

{ id: 1, nama: 'muiz' }
  ​​​​​at ​​​​​​​​d​​​ ​script.js:100:4​


karena halo bukan asyncronous dia akan tampil pertama kali
lalu user dua karena cuma 2 detik
dan user 1 karena 3 detik


nah jadi itu ya implementasinya 
mudah mudahan kalian paham dengan ilustrasi dari asyncronous non blocking dan single thread


oke jadi itu materi kali ini memahami arsitektur dan cara 
kerja dari node js 

oke jadi itu untuk materi kali ini 
mudah mudahan kalian paham 

kita akan ketemu lagi dimateri selanjutnya 
dan seperti biasa jangan lupa titik koma ;



*/