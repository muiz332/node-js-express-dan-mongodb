/*

nah sekarang gimana cara pakainya 
kalo kita ingin mencari package tinggal kita search saja diwebsitenya

tapi sebelum itu kita harus inisialisasikan dulu project
node kita supaya dikenali oleh npm

oke caranya gimana 
kita langsung coba saja  


nah ceritanya nanti saya akan bikin aplikasi difolder ini 
dan saya tahu saya bakalan butuh package pihak ketiga dari npm 

nah untuk bisa menggunakan package dari npm ini 
kita tidak bisa buka npm cari packagenya terus download 

kita tidak lakukan itu 
tapi kita lakukannya lewat aplikasi kita 
jadi kita harus kasih tahu dulu bahwa aplikasi ini 

akan kita inisialisasikan supaya bisa terkoneksi ke npm 

caranya kalian tinggal buka saja terminalnya 
lewat vs code juga bisa 









nah cara inisialisasinya kalian cukup ketikkan
npm init

nah sebelum itu kita pastikan dulu npmnya sudah terinstal 
didalam komputer kita caranya ketikkan
npm -v 

nah sekarang kita ketikkan npm init
untuk menginisialisasi project ini sebagai npm

kalo kalian enter maka akan tampil

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (02.instal-package)

nah jadi itu adalah informasi tambahan yang bisa kalian baca
tapi kita harus kasih tahu dulu nama package kalian itu apa

defaultnya adalah nama dari foldernya 
kalo kalian mau ganti silahkan diketik

kalo tidak silahkan enter saja
setelah dienter akan muncul

version: (1.0.0) 

https://azishapidin.com/blog/mengenal-semantic-versioning/

nah terus ada version  ini sudah menganut semantic version
ada 3 digit 

nah ini apa maksutnya 3 digit ini 

kalo kalian menemukan softwere atau aplikasi yang memiliki 3 digit ini 

berarti sudah menganut semantic version 
digit ketiga ini disebutnya path 

kalo ada yang berubah itu berarti ada perbaikan pada bugnya saja 
kalo kalian beda versi itu tidak apa apa

selanjutnya digit kedua ini artinya perubahan minor
jadi perubahannya lebih banyak dari pada path

tapi kemungkinan masih bisa dipakai 
kalo kalian menggunakan versi yang berbeda

nah terakhit digit pertama adalah majornya 
jadi kemungkinan besar kalo kalian menggunakan versi yang berbeda 
depannya maka tidak akan sama 





nah kalian bisa enter ya 
description: 

kalo dienter ada deskripsinya 
kalian bisa isi ya 

kalian enter 
nah terus disini ada entry pointnya 
entry point: (app.js) 

entry point itu adalah file yang pertama diakses oleh aplikasi itu apa 

kalo udah bener enter saja
kalo mau diubah tinggal ubah saja ya 


test command: 

lalu ada test command untuk sementara kita kosongkan dulu 

git repository: 

nah ini alamat tempat penyimpanan package kalian nanti kalo disimpan di github

kita kosongkan dulu saja karena kita belum menyimpannya digit

keywords:

ini kita kosongkan dulu ya 


author: muiz

nah ini boleh kalian isi nama kalian ya 

license: (ISC) 

kita enter saja 

Is this OK? (yes)

nah ada pertanyaan 
defaultnya yes

kalo udah oke pencet enter saja


nah kalo sudah berarti folder kalian ini sudah
terinisialisasi untuk terkoneksi dengan npmnya 

tandanya adalah akan akan file baru namanya package.json

nah disini kalian bisa lihat deskripsi dari package kalian 


{
  "name": "02.instal-package",
  "version": "1.0.0",
  "description": "belajar node js",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


nah ini yang kalian tadi tuliskan diterminalnya 
nah file package.json ini biasanya tidak kita ubah ubah

kecuali nanti ada mungkin beberapa saja
contohnya dibagian scripts ini

dibagian scripts ini untuk menjalankan aplikasi node kalian tapi
lewat npm 

contohnya ada test
test itu apa

jadi secara default 
kita bisa panggil scripts ini menggunakan keyword tes 

kita coba ya



*/

console.log('hello world')


/*

ini kalo kalian jalanin kan bisa ditulis 
node app.js


nah tapi karena kita sudah punya file namanya package.json
dan didalam scriptsnya ada test 

nah ini bisa jalanin testnya seperti ini 
npm test

maka akan tampil apa yang ada didalam script testnya  

> 02.instal-package@1.0.0 test
> echo "Error: no test specified" && exit 1

Error: no test specified


nah tapi karena tidak ada testnya maka tampil seperti ini 

nah suatu saat kalian melakukan testing pada aplikasi kalian 
ini akan diubah 


nah kita bisa modifikasi ini 







*/