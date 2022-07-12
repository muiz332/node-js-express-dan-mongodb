// install package

/*

nah sekarang kita akan coba install package yang ada didalam npmnya
nah misalnya ada package yang sering banget dipakai itu namanya
validator

setiap kalian ingin mengintall package
kalian harus inisiialisasikan foldernya sebagai
folder npm

kalian search saja diwebsitenya 
nah jadi ini akan kita coba install


jadi ini adalah sebuah package yang mempermudah kalian 
untuk melakukan validasi terhadap string

jadi kalian tidak perlu lagi bikin sebuah function untuk tahu misalnya
apakah string itu adalah email 

apakah string itu adalah nomor telefon 
dan lain sebagainya

nah ini kita tidak akan mencoba untuk menggunakannya 
nanti kita akan pakainya dimater berikutnya


nah sekarang kita akan mencoba install saja dulu ya 
kalian lihat saja dibagian searchnya

ada penjelasan cara pakainya dan cara installnya

cara installnya kalian tulis
npm i validator

i itu kepanjangan untuk install

nah dimana kita mengetikannya 
ya diterminalnya lagi 

kita coba install ya 

npm i validator

added 1 package, and audited 2 packages in 2s

found 0 vulnerabilities

maka akan muncul added 1 package


maka dia akan mendownload package dengan versi yang paling baru
nah sekarang yang berubah ada dua

yang pertama didalam package.jsonnya ada dependencies
nah ini artinya aplikasi kalian itu bergantu pada  package ini 

  "dependencies": {
    "validator": "^13.7.0"
  }

yaitu validator

nah terus yang berubah berikutnya 
kalo kita check didalam folder ini maka akan ada sebuah
folder namanya node_modules

nah folder ini menyimpan package yang kalian install
semua yang ada didalam dependencies masuk kedalam folder node_modele ini

karena kita baru menginstal satu maka hanya akan ada satu folder namanya
validator

oke jadi setiap kalian menginstal sesuatu maka akan dimasukkan
kedalam folder node modules

nah terus kalian juga punya package-lock.json
ini adalah file untuk mengelola lebih detil lagi dari dependencies kalian

dan file ini sepertinya tidak akan pernah kalian ubah jadi ini biarkan saja
kalo pun ada yang mau diubah palingan nanti dipackage.json


oke jadi itu ya cara install pakcage kedalam 
aplikasi node kalian  



*/