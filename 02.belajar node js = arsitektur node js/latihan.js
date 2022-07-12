//arsitektur node js


/*

nah dimateri kali ini kita akan pahami dulu menganai arsitektur node js
ya bagaimana sih cara kerja dari node js

sehingga pada saat mulai ngoding itu bisa paham alasan kenapa kita
ngodingnya seperti itu


nah kita mulai mengulas kembali dari yang sudah kita bahas dimateri sebelumnya
apa itu node js

jadi sederhananya node js itu adalah runtime environment untuk mengeksekusi
code javascript

ya kita tahu bahwa node js ini berjalan didalam sebuah engine yang namanya v8 engine
punyanya google crome 

nah jadi runtime environmentnya adalah v8 engine punyanya google crome
nah sekarang kita kembali keilustrasi v8 engine yang ada didalam browser


dimana kita tahu bahwa javascript itu bisa berjalan didalam web browser karena
ada javascript engine yang namanya v8 engine

dan kita tahu javascript itu berada didalam kontex web browser
jadi dia tidak bisa mengakses apapun yang ada didalam web browser 

nah tapi kalian harus tahu dulu tiap tiap web browser itu punya  
javascript engine masing masing 

kalo didalam crome kita tahu namanya v8 engine
kalo didalam mozila itu ada yang namanya spider monkey
kalo didaam microsoft itu ada yang namaya cakra

nah kenapa node js memilih v8 sebagai enginenya
itu karena perilakunya memang sesuai yang diharapkan oleh pembuatnya
dan v8 enginya juga adalah yang paling cepat 
makanya dia dipilih 


nah sekarang kita kembali ke ilustrasinya
kita tahu bahwa javascript berjalan didalam browser dan kontextnya adalah DOM

jadi apa yang bisa kita akses didalam DOM ini 
kita tahu ada yang namanya DOM tree ya 


jadi javascriptnya bisa mengakses semua element dihtmlnya
javascripnya bisa akses ke history 
javascriptnya bisa akses kewindow

bisa munculin alert bisa menampilkan prompt 
pokoknya apapun yang ada didalam browser ya 


jadi kita tahu didalam javascript itu kita bisa menulis sintax in

document.getElementById()
document.getElementsByClassName()
document.querySelector()


nah sekarang begitu si v8 engine kita keluarkan oleh node ini
jadi konteksnya bukan didalam browser 

node nya atau enginya  tidak lagi memiliki akses kescript ini atau ke API ini
document.getElementById()
document.getElementsByClassName()
document.querySelector()


tapi sekarang kalo kita pakai node bisa beda nulisnya

fs.writeFile()
os.platform()
http.createServer()
path.dirname()

jadi kalo kalian mau mengakses file system dinodenya kalian bisa tulis
fs apa gitu 

nanti kalian bisa nulisin file kedalam sebuah folder difile system kalian
kalian bisa tahu kalian pakai os apa

kalian bisa bikin sebuah web server
kalian bisa tahu alamat dimana kalian menyimpan sebuah file

jadi lebih flexible, lebih banyak yang bisa dilakukan oleh node
sekali lagi kontexnya udah didalam system operasi bukan lagi didalam browser




# cara kerja

nah sekarang kita lihat cara kerjanya bagaimana?
kita tahu bahwa node js ini asyncronous non blocking dan single thread

sama seperti perilaku dari javascript
nah sebetulnya konsep ini sudah bisa dipelajari di materi javascript lanjutan ascyncronous


atau kali saya ilustrasikan lagi seperti ini

bayangkan kalian melihat sebuah restoran yang simple saja restorannya

 ________
|        |                     {pelayan / thread}
| meja1  |                    
|________|                         _________
                                  |         |
                                  |         |
                                  |  dapur  |
 ________                         |         |  
|        |                        |_________|
| meja2  |  
|________|


dia punya dua meja ada weaternya / pelayan 
dan ada dapur 
ceritanya ini satu pelayan

nah didunia yang sebenarnya itu akan lebih masuk akan kalo misalkan
sekenarionya seperti ini

ada customer datang ke meja 1 terus dia mau pesan
nah didunia yang ideal yang terjadi adalah

pelayan akan mengambil pesanannya atau menerima pesanan dari customer
pak buk mau pesan apa

pelanyannya akan mencatat pesanan itu dan membawanya kedapur
dia bilang sama kokinya meja satu pesan nasi goreng

yang dilakukan oleh kokinya adalah membuat nasi gorengnya 
tapi si pelayannya nungguin didapur

begitu nasi gorengnya selesai maka dikasikan ke pelayan 
dikembalikan lagi kemeja 1


sudah beres customernya makan lalu si pelayannya kembali ketempat semula
itu kalo didunia yang ideal

kalo  misalkan ada customer baru dia akan mendatangi ke meja 2
lalu pelayannya akan melakukan hal yang sama

nah tapi kenyataannya tidak seperti itu
mungkin bisa saja dua customer datang disaat yang bersamaan

mungkin saja dua customer tersebut memesan diwaktu yang sama
jadinya tidak akan seideal itu

tapi yang terjadi anggap saja si pelayannya ini adalah threadnya
jadi single thread karena cuma sendiri 

akan sangat ideal ketika satu pelayan itu melayani satu meja 
kalo misalkan meja 2 itu ada customer tapi meja 2 itu belum selesai

nah apa yang dilakukan?
jadinya mulai tidak ideal ya karena satu pelayan harus melayani satu meja sampai selesai

nah solusinya bagaimana?
solusinya tambah pelayan lagi

jadi sekarang threadnya nambah 
nah pelayan kedua hanya melayani meja 2 sampai beres pesanannya sampai beres apa yang dia mau

tapi bagaimana kalo restorannya mejanya banyak 
berarti harus menambah pelayan lagi

bahkan kalo kokinya kerepotan dapurnya bisa nambah 
bayangkan betapa banyaknya resource yang diterima oleh restoran ini

problemnya adalah gimana kalo tidak ada pelanggan
dapur banyak tidak ngapa ngapain 

pelayannya banyak tidak ngapa ngapain
padahal tetap saja harus dibayar

nah ini ilustrasinya ketika multi thread dan syncronous
jadi kita harus menunggu samapi satu proses selesai (blocking)

dan ini bukan yang dilakukan oleh node js




nah sekarang kita akan kebali lagi kekeadaan awal
gimana kalo ini asyncronous tapi single thread


 ________
|        |                     {pelayan / thread}
| meja1  |                    
|________|                         _________
                                  |         |
                                  |         |
                                  |  dapur  |
 ________                         |         |  
|        |                        |_________|
| meja2  |  
|________|



jadi dia melayaninya satu tapi dia asyncronous 
artinya dia tidak saling menunggu 

yang dilakukan gini misalkan 
meja 1 memesan 

yang dilakukan oleh pelayannya dia mendatangi meja 1 
dia tanya mau pesan apa?

misalnya saya pesan nasi goreng 
nah pelayannya akan mencatat pesanannya lalu dia dibawa kedapur

meja 1 pesan nasi goreng
akan diproses tuh pesanannya

tapi dia tidak perlu menunggu dia bisa kembali keposisi awalnya
siapa tahu ada yang pesan lagi

nah misalnya meja dua sekarang pesan
jadi dia bisa saja kemeja 2 tidak perlu menunggu kokinya masakin untuk meja 1

diambil pesanannya kasih tahu lagi kedapur
meja dua sekarang pesan esteh manis misalnya

dibuat oleh dapur lalu pelayanya kembali lagi
nah ketika ada yang sudah beres dari dapur

misalnya nih karena meja 2 hanya pesan esteh manis mungkin saja selesainya duluan
jadi pelayannya dipanggil 

diambil es teh manisnya lalu diberikan ke meja 2
jadi meskipun meja2 pesannya belakangan karena dia selesai duluan

dia bisa dapat pesanannya duluan

gitu ya ilustrasinya ketika systemnya asyncronous dan single thread
nah ketika asyncronous dia non blocking jadi tidak saling menunggu

mudah mudahan kebayang nih
tadi kita bahasnya multi thread dan syncronous sehingga blocking

yang ini single thread dan syncronous sehingga non blocking

kalo sudah paham kita lihat implementasinya kedalam codingannya
kita masuk kehalaman script.js






*/