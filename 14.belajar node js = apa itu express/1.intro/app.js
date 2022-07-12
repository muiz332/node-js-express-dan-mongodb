// express js

/*

nah kali ini kita akan membahas sesuatu yang seru
yaitu mengenai sebuah framework yang dinamakan dengan express js

jadi kalian bisa kunjungi documentasinya di https://expressjs.com/

dan kalo kita lihat ditag line websitenya itu adalah 
Fast, unopinionated, minimalist web framework for Node.js

jadi framework untuk node js yang cepat 
terus unopinionated itu nanti akan kita bahas
dan juga minimalis


express

- web app framework yang dibuat diatas node js
- menyediakan antarmuka yang minimal untuk kakas yang diperlukan
  dalam membuat sebuah aplikasi web

  jadi katanya dengan hanya menuliskan beberapa baris 
  code saja kita sudah bisa membuat aplikasi yang sederhana 

- membantu pengelolaan aliran data dari server keaplikasi
  jadi kalo dimateri sebelumnya kita sudah coba tuh mengirimkan dari browser
  kedalam aplikasi menggunakan core module node js

  nah kalo menggunakan express ini membantu agar hal tersebut kita bisa lakukan
  dengan lebih mudah lagi 

- MERN, MEAN, MEVN Stack (MongoDB Express Reac | Angular | Vue Node js)

  jadi mempelajari express ini sangat cocok banget ketik kita mau membuat
  aplikasi dengan stack teknologi seperti ini 

- diciptakan oleh TJ Holowaychuck, pada tanggal 22 mei 2010




fitur fitur express

- menangani request dengan berbagai metode http dengan mudah (routes)
  jadi kalo misalkan ada request dalam metode get,post dll

  itu ditangani dengan mudah menggunakan express ini 
  sehingga kedepannya kalo misalkan kalian mau bikin aplikasi
  rest API express juga bisa menangani itu dengan baik

- MVC (Model View Controller)
- terintegrasi dengan view rendering engin, untuk mengelola 
  tamplate

- middleware
  apa itu middleware? mungkin nanti itu akan kita bahas didalam 
  materi yang  spesifik


dan masih ada fitur fitur lain yang nanti akan kita coba
gunakan didalam seri ini 




nah terus kita akan bahas sedikit mengenai
unopinionated

nah ini didalam dunia framework dibagi menjadi dua 
ada framework yang opinionted dan ada yang unopinionted 

opinionaited itu artinya aturan aturan dalam 
membuat sesuatu dari framework tersebut diberitahu 
oleh frameworknya 

jadi tata caranya sudah jelas, aturan aturannya sudah jelas
jadi hanya ada satu cara yang tepat untuk membuat sesuatu 

disatu sisi sangat memudahkan kita sebagai programmer
sudah ada panduannya 

disisi yang lain itu jadinya kita stict atau terbatas



unopinionated

- tidak ada aturan yang baku untuk membuat sesuatu 
- flexible 
- menentukan sendiri struktur aplikasi 
- bongkar pasang middleware 


jadi disatu sisi itu memberikan keleluasaan untuk membuat sesuatu 
tapi disisi lain juga ada kekurangannya yaitu

mungkin untuk yang baru belajar akan kebingungan 
karena ada banyak caranya 


nah selanjutnya adalah mengenai templating engine
didalam express ini memiliki banyak sekali templating engine 
yang sudah terintegrasi 

atau istilahnya sudah disupport oleh expressnya 
dan ini ada banyak banget ya 

kalian bisa baca didocumentasinya 
pada bagian resource, template engine


lalu ada yang namanya database 
nah didalam expres kita dapat terhubung dengan database database
yang telah tertulis diwebsitenya 

oke ya jadi itu penjelasan dasarnya

nah minimal kita nanti akan mencoba untuk mengganti 
apa yang sudah kita buat dari aplikasi sebelumnya

sehingga kita bisa lihat ternyata pakai express itu 
apa lebih mudah atau lebih sulit 

kalo kita lihat secara singkat penggunaannya itu seperti ini 


*/

const express = require('express')
const app = express()
const port = 3000

app.get('/ ',(req,res) => {
  res.send('hello world')
})


app.listen(port,()=>{
  console.log(`Server is listening on port ${port}`)
})


/*

tantu saja kita harus install dulu expressnya itu didalam
aplikasi kita 


kalo kalian bandingkan apa yang sudah kita buat
dimateri sebelumnya, mirip tapi ini lebih ringkas

ya jadi gimana kalo kita langsung implementasikan 
framework express ini kedalam web server sederhana kita





*/
