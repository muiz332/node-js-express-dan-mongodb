const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')


if(!fs.existsSync('./data')){
    fs.mkdirSync('./data')
}

if(!fs.existsSync('./data/contacts.json')){
    fs.writeFileSync('./data/contacts.json','[]',"utf-8")
}  


module.exports = {
    simpanContact(nama,nomor, email){
        const contact = {nama, email,nomor}

        const isi = fs.readFileSync('./data/contacts.json',"utf-8")
        const arr = JSON.parse(isi)

        const check = arr.find(value => value.nama === nama)
        if(check){
            console.log(chalk.red.inverse.bold('maaf nama sudah ada'))
            return
        }

        if(!validator.isEmail(email)){
            console.log(chalk.red.inverse.bold('maaf email tidak valid'))
            return 
        }

        if(!validator.isMobilePhone(nomor,'id-ID')){
            console.log(chalk.red.inverse.bold('maaf noHP sudah tidak valid'))
            return
        }

        arr.push(contact)
        
        fs.writeFileSync('./data/contacts.json',JSON.stringify(arr))
        console.log(chalk.green.inverse.bold('terima kasih '))
    
    }
}


/*

nah keren ya jadi ini aplikasi buat menambah contact sederhana kita
tapi belum selesai 

jadi kita akan menambahkan 2 fitur lagi  yaitu remove
lalu saya ingin menampilkan semua data contact saya 
tapi lewat terminal

dan itu semua akan kita lakukan dimateri berikutnya 

*/