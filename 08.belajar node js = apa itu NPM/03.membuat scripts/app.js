// menambahkan scripts

/*

{
  "name": "03.membuat-scripts",
  "version": "1.0.0",
  "description": "beajar node js",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "muiz",
  "license": "ISC"
}


nah sebelumnya kan seperti itu 
pada scripts ini bisa kita modifikasi


nah misalnya saya menambahkan dibagian script yaitu start 

  "scripts": {
      "start" :
    "test": "echo \"Error: no test specified\" && exit 1"
  },

nah maksutnya apa 
kalo ini kita jalanin npm spasi start maka saya ingin npmnya menjalankan 
perintah ini 

  "scripts": {
    "start" : "node app.js"
    "test": "echo \"Error: no test specified\" && exit 1"
  },

nah jadi saya punya perintah lain selain yaitu start yang isinya apa
isinya menjalankan node app.js

jadi kalo misalnya saya tuliskan begini

npm start
maka si npmnya akan menjalankan sintax node app.js



*/

console.log('hello world')


/*

kita coba 
kalo kita tulis npm start maka akan tampil 

> 03.membuat-scripts@1.0.0 start
> node app.js

hello world


tuh sama saja ya 
jadi kita bisa jalanin script kita disini 

karena nanti ini kepakai 
misalnya nanti aplikasi kalian butuh parameter yang panjang 

ya mungkin nanti kita akan pelajar dimateri materi berikutnya
jadi kalian tidak pernulisin seperti ini 

node app.js -parameter -parameter -parameter

jadi kita tidak perlu melakukan seperti itu cukup kita tulisin 
didalam startnya

jadi kalian tinggal panggil npm start 


nah ini juga nanti kepakai ketika aplikasi kalian 
dideploy 

kalian bisa pilih scritp mana yang dijalankan ketika aplikasi kalian 
dideploy 


bahkan kalian bisa tambahkan perintah kalian sendiri
apapun perintahnya ya 

misalnya kita tulis selain start dan test 
kalian bisa tambahin punya kalian sendiri

misalnya kalian tulis dev 
yang isinya tampilkan isi folder yaitu ls ya 

nah kalo perintahnya itu bukan start atau test  
itu kalian tidak bisa menuliskan 

npm dev

karena dia bukan perintah standaert ya 
jadi kalian harus menulikan seperti ini

npm run dev

kalo kita jalankan maka akan tampil

> 03.membuat-scripts@1.0.0 dev
> ls

app.js  package.json 

nah isi dari dev itu perintah ls
jadi isinya langsung muncul isi dari direktorinya apa


jadi kita bisa pakai bantuan npm buat menjalankan 
aplikasi node kita 

itu ya beberapa hal yang harus kalian perhatikan 
setelah kalian inisialisasi project kalian menggunakan npm






*/