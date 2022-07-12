// REPL


/*

nah dimateri kali ini kita akan membahas fitur dari node js yang namanya REPL


apa itu REPL? 
ini adalah kepanjangan dari Read Eval Print Loop

ya ini adalah sebuah fitur untuk membaca mengevaluasi mencetak dan mengulang kembali
script dari node js 

ya buat apa kita lakukan ini

1. melakukan debugging dari script kita
2. untuk menjalankan code kita lewat command prompt


nah jadi kita langsung cobain saja bagimana cara kerja dari 
si REPL ini

nah kalian bisa pakai terminalnya node js atau pakai terminalnya git
sama saja

nanti kita pastikan dulu difolder kita itu ada file javacvriptnya 

kalo kalian ingin tahu berada dimana  kalian bisa tulis
pwd untuk commandnya sama seperti dilinux ya

atau kalo kalian ingin mengechek didalam sebuah direktori ada file apa aja
kalian bisa tulis ls

atau kalo lebih detil lagi kalian tulis ll

kalo didalam folder kalian belum ada file javascriptnya 
nanti kalian buat 

karena untuk menjalankan file node js kita 
kita tulisnya begini

node nama file.js
ini cara jalanin file javascript lewat node

tapi kalo misalkan kita ketikkan node saja 
tidak ada file javascriptnya 

kalo saya enter maka kita akan masuk ke command prompt punyanya node js
nah ini yang disebut dengan REPL

disini kita bisa membaca mengevaluasi mencetak dan mengulang kembali

kenapa mengulang kembali
karena setelah kita enter scriptnya maka dia akan mengulang kembali 
ke prompt ini

nah yang bisa saya tulis didalam REPLnya itu semua script 
javascript apapun 

mau sesederhana apapun expresinya 
contohnya kita melakukan operasi matematik


$ node
Welcome to Node.js v16.13.1.
Type ".help" for more information.
> 1 + 1  ==================================> nah ini yang disebut eval
2        ==================================> nah ini disebut dengan mencetak atau print
>        ==================================> setelah kita enter dia kembali lagi ke command promptnya 
                                             dia meminta kita untuk menuliskan sesuatu, ini adalah loopnya

nah REPL ini juga bisa tahu kalo kita menuliskan variable

kalo misalkan saya punya variable namanya nama 
yang saya isi dengan muiz

const nama = 'muiz'

$ node
Welcome to Node.js v16.13.1.
Type ".help" for more information.
> 1 + 1
2
> const nama = 'muiz'
undefined

kalo saya enter maka akan muncul undefined karena dia tidak memunculkan
apa apa dia cuma menyimpan variable ini kedalam memory

kalo kita panggil namanya

> nama
'muiz'
>

maka akan muncul muiz
nah ini persis banget kalo kalian gunakan console dibrowser kalian

nah variable ini akan tetap berlaku ketika REPLnya belum kita close

kalo misalkan saya buat lagi umur saya isi 18




// multi line

tapi sebenarnya kita juga bisa menuliskan multi line code

nah misalnya saya bikin sebuah funtion namanya say halo
kita bikin pakai arrow function

nah selama saya berada didalam REPL ini saya bisa tahu variable nama 
dan variable umur isinya apa

kita buat function yang namanya sayHalo yang menerima dua parameter

> const sayHalo = (nama,umur) => {
...

nah setelah kurung kurawalnya kalo saya pencet enter
REPLnya tahu 

jadi sekarang ada titik 3
dia tahu oh ini kayaknya belum selesai menulisnya

misalnya didalamnya saya tulis console.log ada
hai nama saya nama, umur saya umur tahun

> const sayHallo = (nama,umur) => {
... console.log(`Hai nama saya ${nama} umur saya ${umur} tahun`);
... }
undefined

nah ini sudah tersimpan 
kalo misalkan saya tulis

> sayHallo(nama,umur)
Hai nama saya muiz umur saya 18 tahun
undefined
>

maka kalo saya enter akan tampi seperti itu ya 
gitu ya jadi kalian bisa menuliskan multi line code

kalian bisa pencet atas untuk mengambil history yang pernah kalian ketikan diPERL




// akses ke variable global 

nah selain script javascript yang biasa kita pakai kita juga punya akases kesebuah variable
global yang namanya global

kalian bisa ketikkan global untuk melihat bahwa kita bisa memakai variable global
atau kalo kita ketikkan global. lalu tab dua kali

maka kalian bisa lihat
kalian bisa pakai semua modul didalam node ini
sebetulnya ini akan kita gunakan ketika kita bikinnya pakai file biasa

ya tapi kita bisa lihat ini adalah modul modul yang ada didalam node jsnya 



// help

nah atau kita bisa ketikkan .help 
untuk mengetahui special keywordnya

> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file


nah ada tujuh perintah special yang bisa kalian gunakan

lalu ada perintah yang namanya load 
load ini untuk mengambil isi dari sebuah file javascript


kita coba bikin dulu filenya  yang namanya script.js

untuk membuat filenya kita keluar dulu dari node jsnya
kalo didalam git untuk membuat file baru itu menggunakan sintax touch spasi nama filenya 

nah sekarang misalkan saya ingin mengisi file script.jsnya 
dan saya tidak mau membuka editornya saya langsung menggunakan code editor yang namanya vi

jadi kalian bisa ketikan vi speasi nama filenya 
vi script.js

nah ini tidak bisa langsung kalian ketikan ya
caranya kita harus masuk ke insert mod dulu ya 

caranya kita tekan tombol i
nanti ada tulisan insert baru kalian bisa mengisi filenya 

misalkan saya tulis gini saja
const nama = 'muiz'
const umur = 18

save terus keluar
kalian klik esc :wq

w itu untuk write 
q untuk quit


kalo kalian check file script.js maka akan ada isinya
kalo kalian ingin melihat isi dari filenya ketikan
cat atau ini singkatan dari concate

cat spasi nama filenya 
$ cat script.js
const nama = 'muiz';
const umur = 18

nah kita sudah punya filenya nih
sekarang kita masuk ke node nya atau ke REPLnya

nah kita sudah punya filenya
tapi belum kita load 

jadi kalo saya tulis nama atau umur maka REPLnya tidak tahu
tapi kalo kita load maka akan tahu

caranya kita tuliskan .load spasi nama filenya
.load script.js

itu kalo kalian mau menggunakan load

nah kalo mau menghapus filenya didalam git 
kalian tuliskan rm spasi nama filenya


kita sudah coba exit dan load
nah sekarang kita mau mencoba kebalikannya 

misalnya sekarang kita masuk kenodenya lagi
misalkan kalian ingin mencoba sesuatu pengen cepat lewat REPL
tapi nanti akhirnya kalian jadikan sebagai file

nah misalkan saya tulis seperti ini

const nama = 'muiz'
const umur = 18

dan saya buat arrow function yang ceritanya salah gitu

const sayHalo = (nama,umur) {

kalo saya enter maka akan eror ya

> const sayHalo = (nama,umur) {
const sayHalo = (nama,umur) {
                            ^

Uncaught SyntaxError: Unexpected token '{'
>


maka dia akan loop lagi untuk meminta memasukkan lagi
tapi eror ini sudah tersimpan kedalam sesinya

jadi kalo suatu saat kalian save ini nanti kebawa

nah sekarang kita tulis yang bener 

> const sayHalo = (nama,umur) => {
... console.log(`hai nama saya ${nama} umur saya ${umur}`);
... }
undefined
>

nah ceritanya saya sudah memasukkan scriptnya dan saya ingin save 
caranya kalian tulis

.save nama filenya.js

> .save fiturSave.js
Session saved to: fiturSave.js
>

nah kalo kalian pengen lihat isinya 
kalian bisa masuk kedalam gitnya  kemudian menuliskan sintax cat spasi nama filenya 

$ cat fiturSave.js
const nama = 'muiz'
const umur = 18
const sayHalo = (nama,umur) {
const sayHalo = (nama,umur) => {
console.log(`hai nama saya ${nama} umur saya ${umur}`);
}


kalo cat ll ls vi itu perintah unix
kalo kita ada didalam REPL itu perintah node

nah coba lihat tuh yang kita bikin salah akan tetap tersimpan
jadi ini kita harus benerin

kita gunain code editor vi
hapus yang salah

escape:wq

kita lihat lagi

$ cat fiturSave.js
const nama = 'muiz'
const umur = 18
const sayHalo = (nama,umur) => {
console.log(`hai nama saya ${nama} umur saya ${umur}`);
}


nah selanjutnya perintahnya adalah break dan clear ya

break ini digunakan ketika kalian ingin keluar ditengah tengah multi linenya

nah misalnya kalian tulis begini
> const sayhalo = (nama,umur) => {
...

begitu ditengah tengah tidak jadi saya lanjutin 
maka untuk keluar kalian bisa tuliskan .break
atau .clear sama saja



nah yang terakhir kalian bisa menuliskan banyak code sekaligus tapi 
kalian tidak menggunakan multi line code tadi


kalian gunakan .editor 
nah kalo ini seperti vi tadi tapi didalam REPLnya

jadi sama saja kalian bisa tulis banyak baris sekaligus

// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
const nama = 'muiz'
const umur = 18

nah ini ada perintahnya 
kalo kalian tulis control D itu artinya kalian mau pakai
tapi kalo kalian pencet control c itu adan didiscart

kalo kalian tekan control D maka akan kembali ke REPLnya tapi kalo kalian mau 
pakai sintaxnya REPLnya sudah tahu

begitu ya temen temen

jadi ini cocok banget ketika kalian pakai untuk mendebug atau menjalankan script 
yang simple lewat node js


oke jadi itu materinya dimana kita sudah mencoba fitur yang ada didalam
node jsnya yaitu REPL kepanjangan dari Read Eval Print dan Loop

mudah mudahan kalian paham ya 

nah dimateri selanjutnya kita akan coba menjalankan file yang sudah
kita buat lewat node

sehingga kita bisa lebih dalam lagi mengetahui fitur fitur dari node js

oke temen temen jadi mungkin itu saja untuk materi kali ini 
kita ketemu lagi dimateri berikutnya

dan seperti biasa jangan lupa titik koma ;

*/
