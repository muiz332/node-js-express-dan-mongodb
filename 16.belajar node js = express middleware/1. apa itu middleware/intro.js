// apa itu middleware

/*



dimateri kali ini kita akan membahas apa yang disebut
dengan middleware

kita lihat dulu definisi dari middleware

apa itu middleware?
middleware adalah sebuah software yang menghubungkan software atau 
aplikasi lain

pada awalnya middleware ini adalah sebuah istilah untuk menghubungkan 
antara sebuah aplikasi dikomputer kita dengan sistem operasi

jadi bagaimana aplikasi yang diinstal dikomputer kita itu bisa
ngobrol dengan sistem operasi, nah butuh perantara yang namanya middleware


nah makin kesini istilah middleware itu ada macam macam

- didalam database ada istilah middleware
- didalam web server
-  bahkan game engine itu bisa dianggap sebagai middleware
- didalam web app 


jadi istilah middleware itu sekarang sudah semakin luas 
nah tapi dimateri kali ini kita akan fokus membahas mengenai
middleware yang ada didalam web app


nah kalian bisa lihat ilustrasinya seperti ini


web application

kalo kita menjalankan sebuah web app itu kalo kita ingin menjalankan applicationnya
itu kita pasti melakukan request 

lalu request itu akan dioleh oleh aplikasi kita lalu aplikasi tersebut akan menghasikan response 
ya alurnya pasti seperti ini

kita request kita ketikkan sesuatu diurl kita melakukan aksi lewat form
kita meminta data lewat API pokoknya itu adalah request

dan nanti aplikasi nya akan mengelola atau mengolah request kita
sehingga menghasilkan sebuah response 

apakah tampil dilayar 
apakah datanya sudah dikirim menjadi json 
atau datanya diinsert kedalam database

itu adalah response 

kita bisa menambahkan sebuah middleware sebelum aplikasinya memproses
request kita   

jadi pada saat kita melakukan request sebelum masuk kelogic 
atau pemrosesan yang kita buat  didalam aplikasi 

kita bisa simpan sebuah middleware 
contohnya misalkan untuk authentication 

kita bikin authentication atau kita module authentication 
yang akan berjalan bahkan sebelum masuk kedalam proses aplikasinya

authentication ini bisa kita anggap sebagai middleware
dan middlewarenya itu bisa kita bikin lebih dari satu

sehingga misalnya sebelum masuk keauthentication kita masuk kedalam
middleware yang namanya rauting 

untuk menentukan request yang kita kirimkan itu akan
mengarah kemana 

dan kita bisa tambahkan middleware lagi 
sehingga ilustrasinya seperti ini

intinya middleware didalam sebuah web app
itu adalah sebuah aplikasi atau softwere yang akan dijalankan 
setelah kita mengirimkan request

dan sebelum kita mengirimkan response
bahkan nanti kalo kita lihat didalam express secara spesifik 
aplikasinya sendiri yang kita buat itu bisa kita anggap sebagai middleware

karena kalo kita lihat definisi dari express middleware
sebenarnya express itu berisi serangkaian pemanggilan fungsi 
middleware

express menganggap apapun yang diproses setelah user melakukan request
dan sebelum user menerima response itu adalah middleware

didalam express itu menyebutnya fungsi middleware
apa itu function middleware?
sebuah fungsi yang memiliki akses ke object request, object response,
dan fungsi middleware berikutnya (next)


didalam express middleware itu ada 3

1.user defined middleware
    yaitu middleware yang kita bikin sendiri
    dan itu terbagi menjadi 3

    - application level middleware
    - router level middleware
    - error handling middleware

2.build in middleware
    nah kalo ini middlewarenya sudah tertanam didalam express
    yang berfungsi untuk melakukan sesuatu secara spesifik 

3.thrid party middleware
    jadi middleware yang sudah dibuatkan oleh orang lain
    yang kita bisa instal juga lewat npm

    bukan sebagai module tapi sebagai middleware


dan ini nanti kita akan coba secara sederhana 
dimateri kali ini 

jadi setelah ini kita akan langsung mencoba
middleware didalam express


























*/