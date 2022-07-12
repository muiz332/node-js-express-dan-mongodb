// membuat dua inputan 

/*

jadi kali ingin bikin dua pertanyaan  
ini bisa saja kita bikin question didalam question 

langsung saja kita coba

*/

const readline = require('readline')

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})


rl.question('Maukkan namamu: ', nama => {
    rl.question('Masukkan nomor hpmu: ', nomor => {
        console.log(`halo nama saya ${nama}\ndan nomor telepon saya ${nomor}`)
        rl.close()
    })
})

/*

nah jadi kalian bisa melakukan seperti itu
untuk method closenya kalian bisa kasih dibagian akhir dari sebuah
pertanyaan

oke temen temen ini cara menggunakan readline sebagai
core module kita


sekarang saya mau kasih challenge terakhir 
gimana kalo kita gabungin kedua core module ini 
yaitu fs dan readline


nah challenge buat kalian itu gimana 
setelah diminta nama dan nomor hp 

tidak cuma ditampilkan tapi dia akan 
menuliskan kedalam file 

jadi nanti kita punya data nomor hp temen temen kita
misalnya 

tapi ada tambahannya 
saya tidak mau menyimpannya kefile text 
tapi saya pengen menyimpannya kedalam file json 

jadi pada saat kalian write file 
silahkan pakai syncronous atau yang asyncronous     

saran saya pakai syncronous dulu buar gampang 


jadi kalian harus buat nama filenya 
contacts.json

yang nanti setiap kita jalanin itu datanya nambah

jadi misalnya

[
    {
        "nama" : "muiz",
        "nomor" ; "098765"
    },
    {
        "nama" : "husain",
        "nomor" ; "567789"
    },
]

jadi setiap kalian jalanin datanya itu menambah 
dan nanti formatnya itu json ya 

jadi didalam file contac.jsonnya 
kalian bikin array kosong dulu

yang nanti kita bisa tambah seiring dengan 
datanya kita masukkan 

langsung saja kalian cobain 
nanti kalo sudah baru check difile berikutnya 


*/