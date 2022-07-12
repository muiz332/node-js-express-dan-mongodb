// node js

/*

nah kali ini kita akan sama sama memulai seri baru 
yaitu mengenai belajar node js

dan dimateri kali ini kita akan membahas dulu apasih itu node js

apa itu definisinya kenapa kok bisa ada node js
node js itu buat apa sih

nah itu kita akan pelajari dulu dimateri kali ini 
sebelum kita akan pelajari lebih lanjut lagi


Rencana seri belajar node js


- apa itu node js
-arsitektur node js
-instalasi dan konfigurasi node js
-node js module system 
-npm / node packate manager
-membuat aplikasi node js sederhana



nah kita sudah tahu nih rencara belajarnya 
selanjutnya kita langsung masuk saja ke seri apa itu node js


ya kita mulai dari definisi yang diberikan oleh website node js resminya 
jadi kalo kata website nodejs.org

itu definisinya begini
node js adalah javascript runtime yang dibangun didalam javascript engine
yang namanya v8 punya nya google crome

nah kalo lebih detilnya begini 
jadi node js adalah sebuah runtime untuk membuat aplikasi yang asyncronous 

jadi sebetulnya node js ini adalah sebuah runtime dimana kita bisa menjalankan 
script javascript didalamnya 

jadi sebenarnya bahasa yang kita pakai adalah javascript 
node js adalah sebuah runtime

nah sekarang pertanyaanya apa itu runtime?
nah runtime ini adalah sebuah tempat dimana kita menjalankan atau mengeksekusi code kita

maksutnya gimana  jadi seperti ini 


nah kan kita tahu node js adalah sebuah runtime untuk menjalankan
program menggunakan bahasa javascript


nah sedangkan javascript kita sama sama tahu bahwa javascript ini berjalan didalam
browser 
kalo kita mau bikin web itu kita bisa menggunakan javascript
sedangkan web itu berjalannya didalam browser


jadi javascript itu biasanya kita jalaninnya didalam browser
nah kenapa bisa jalan didalam browser

karena didalma browser kita punya yang namanya engine yang namanya v8 engine
khusus untuk google crome

untuk web browser lain javascriptnya beda lagi
intinya javascript itu berjalan didalam browser karena didalam browsernya 
itu punya javascript v8 engine

nah jadi dengan menggunakan javascript itu kita bisa bikin website kita 
jadi bisa melakukan banyak hal

kan sebelumnya kita tahu ada html ada css
html untuk bikin struktur halaman css untuk menghias halamannya

nah javascript itu bisa bikin website kita bermacam macam
jadi kita bisa melakukan manipulasi DOM

kita juga bisa menambahkan eventListener
kalo tombol diklik ngapain


kita juga bisa menambahkan interaktivitas 
bisa menambahkan slide show transisi
bikin game bahkan



kita juga bisa melakukan http request
kita juga bisa mengambil data lewat API keaplikasi lain

dan masih banyak lagi yang bisa dilakukan oleh javascript ini 
pokoknya javscript bikin website kita makin keren

tapi problemnya adalah terbatas 
javascript hanya bisa melakukan apapun selama itu didalam browser

bahkan kalo browsernya kita close javascriptnya tidak akan jalan
segala sesuatunya adalah web browser  karena enginenya tadi tertanam didalam web browser




suatu ketika ada seseorang yang namanya ryan dahl nah ini yang membuat node js
jadi diryan dahl ini pada tahun 2009 dia membuat node js


saat itu dia seorang softwere developer diperusahaan yang namanya joyent

nah tapi gini awalnya dia membuat karena ingin mengerjakan sesuatu 
yang butuh sebuah web server dan dia pengen membuat web server itu yang menggunakan single tharded
dan menggunakan sesuatu yang disebut dengan event loop

nah tapi dia bingung karena saat itu tidak ada yang bisa melakukan ini 
makanya dia harus bikin sendiri

waktu itu dia pernah bikin menggunakan bermacam macam bahasa pemrograman
C lua haskel

dan pada saat bikinnya itu ada yang bahasanya gak bisa 
ada yang memang dianya sendiri kebingungan menggunakan bahasa itu

jadi problem dia tidak terselesaikan 
nah saat itu kebetulan ada v8 engine ini 

dimana dia tau perilaku dari javascript dan v8 engine ini 
memungkinkan untuk menyelesaikan masalah yang dia punya

karena perilaku dari javascript kan sama saja ya
single thraded non blocking asyncronous 

nah dia mikir kayaknya bisa nih bikin web server menggunakan v8 engine ini
nah makanya yang tadinya javascript itu harus berjalan didalam browser
karena v8 enginenya ada didalam browser

nah di ryan dahl ini membuat supaya si v8 engine ini itu bisa keluar dari browser
jadi dia bikin aplikasi pakai c untuk membungkus v8 engine ini supaya
v8 engine ini bisa diinstal disystem operasinya 

sehingga itu membuat si javascriptnya bisa berjalan
diaplikasi itu

nah sekarang kalo udah kayak gini javascriptnya sudah tidak lagi berada didalam
kontex browser dia sudah ada ditempat yang lebih luar
di system operasi

jadi sekarang yang bisa dilakukan oleh javascript
karena v8 engine udah ada diluar nah itu jadi macam macam

aplikasi ini dinamakan node js

bisa ngapain saja nih node js karena sudah diinstal didalam system operasi
jadi dia bisa mengakses memory

dia bisa mengakses I/O bisa melakukan request secara network 
mendapatkan response

dia juga bisa mengakses file system kita 
jadi bisa nulis kedalam file bisa baca dari dalam file gitu


dia juga bisa melakukan aktifitas network
makanya bisa membuat web server

dan masih banyak lagi yang bisa dilakukan oleh javascript 
gara gara v8 enginenya diinstal didalam system operasi bukan lagi didalam browser




jadi kalo kita sudah tahu nih node jsnya sekarang adalah sebuah aplikasi 
yang bisa kita instal didalam system operasi kita 

nah sekarang kita lihat karakteristik dari node js itu sendiri


karakteristik node js

1. asyncronous dan event drivent
     jadi dia membawa perilaku dari javascriptnya

2. non blocking
    karena dia ascyncronous dia bisa membuat program yang non blocking
    apa itu non blocking 
    nanti kita lihat ya

3.single thraded tapi higly scalable
    artinya dia hanya bisa mengerjakan satu hal satu proses dalam
    satu waktu tertentu

4. croos platfrom
     nah selanjutnya dia croos platfrom jadi node jsnya bisa diinstal 
     diberbegai system operasi
     jadi kalian tidak perlu kawatir karena kalian bisa membuat satu program
     dan kita bisa menjalankannya di berbagai system operasi


5. MIT licence
    terus dia juga open source dengan licensinya MIT

6. NPM
    terus dia juga punya packecd manager yang namanya NPM atau node packacd manager
    ini adalah sebuah tempat yang digunakan untuk menyimpan banyak library
    yang bisa kita tambahkan kedalam aplikasi node kita



ya jadi ini karakteristik dari node js

dan kalo misalnya kita ngomonging fitur utama dari node js



fitur utama node js

1. file system
2.buffer
    nah kalo buffer ini ketika mengelola binary dari filenya
    jadi cocok banget ketika kalian mau bikin sebuah aplikasi yang bisa
    transfer file, streaming video 

    nah itu bisa mengatur buffer atau binarynya

3. http dan https
    terus node js juga bisa melakukan fitur network
    jadi bisa mengirimkan request dan menerima response

    nah ini yang nantinya yang akan kita jadikan sebagai web server 
    fitur http dan https

4. Repl
    nah node js juga punya Repl 
    jadi ini buat mengeksekusi program node kita lewat command line atau terminal 

    repl ini singkatan dari read evailuait print and loop
    nah nanti ini juga akan kita cobain lah

5.console
    terus dia juga punya console 
    nah jadi sekarang consolenya juga bisa kita akses jadi sama saja
    nanti kita lihat kalo diketik console.log

    itu jalan juga dinode js

6.crypto
    terus juga bisa melakukan cryptografi

7.zlib
    ada compresi juga menggunakan zlib


dan masih banyak lagi 
kalo kalian pengen lihat lebih detil ada didocumentasinya ya
nanti kita baca documentasinya saat mencoba fitur fiturnya


nah mungkin dari kalian ingin tahu perbedaan node js dan php 

jadi mungkin pertanyaanya begini 
apa bedanya dengan node js yang berjalan runtime dengan php yang berjalan diweb server

nah kan dua duanya sama sama untuk membuat aplikasi backend



nah kita lihat perbedaanya 


php 
- tahun dibuat 1994
- zend engine
- multi thraded syncronous
- aphace / IIS


node js
-tahun dibuat 2009
- v8 engine
- single thraded ascyncronous
- runtime sendiri


nah web server untuk proses penyimpanan  ke web server untuk node js
itu sedikit berbeda ya karena kalo php 

dimana mana web hosting itu menggunakan php ya jadi 
kita dengan mudah menyewa web hosting yang sudah ada aphacenya
kita tinggal menyimpan filenya ke web hostingnya


nah sedangkan node js tidak bisa seperti itu 
jadi kita harus setup sendiri 

nah ini lah yang membuat deploymen dinode js itu tidak semudah php


php
-composser


node js
-npm


jadi ini beberapa fakta mengenai node js


nah selanjutnya kita lihat ya
kalian nanti bikin node js itu cocok untuk aplikasi seperti apa

node js cocok untuk

-  dynamic single page aplication (SPA)
    aplikasi yang hanya satu halaman tapi isinya secara dynamic berubah ubah
    jadi tidak pindah pindah halaman 

- realtime app (chat multiplayer)
    misalnya kalian bikin aplikasi yang butuh pertukaran data secara realtime
    node js cocok banget

-API
-Streaming APP
-Microservice
     jadi bikin satu aplikasi besar didalamnya banyak aplikasi

- command line tool


atau kalian mau bikin aplikasi yang teknologinya

-MERN,MEAN,MEVN


MERN (mongoDB Express Reach Node) A angular V viu





sebelum belajar node js

javascript dasar
javascript lanjutan

kalian boleh skip DOM 
karena kontextnya bukan diweb browser lagi



jadi sampai disini dulu materi kali ini 
mudah mudahan semangat kalian mengikuti seri ini


dimateri selanjutnya kita masih membahas mengenai arsitektur dari node js
supaya kalian nanti bisa lebih paham lagi ketika kalian ngodingnya


jadi mungkin itu saja untuk materi kali ini
kita ketemu dimateri berikutnya 
dan satu lagi jangan lupa titik koma ;



*/