const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')


if(!fs.existsSync('./data')){
    fs.mkdirSync('./data')
}

if(!fs.existsSync('./data/contacts.json')){
    fs.writeFileSync('./data/contacts.json','[]',"utf-8")
}  

function loadContact(){

    const isi = fs.readFileSync('./data/contacts.json',"utf-8")
    const arr = JSON.parse(isi)
    return arr
}


function simpanContact(nama,nomor, email){
    const contact = {nama, email,nomor}
    const arr = loadContact()
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

function list(){
    const data = loadContact()
    if(data.length === 0){
        console.log(chalk.green.inverse.bold('data contact kosong '))
        return
    }
    console.log(chalk.blue.inverse.bold("Dafter Contact : "))
    data.forEach((value,i) => {
        console.log(`${i+1}. ${value.nama} ${value.nomor}`)
    })
}

function detil(nama){
    const data = loadContact()
    const check = data.find((contact) => contact.nama.toLowerCase() === nama)

    if(!check){
        console.log(chalk.bgBlue.white.bold('Nama tidak ada'))
        return
    }

    console.log(chalk.bgCyan.black(check.nama))
    console.log(check.nomor)
    if(check.email){
        console.log(check.email)
    }
}

function deleteContact(nama){
    const data = loadContact()
    
    for(let i = 0; i < data.length; i++){
        const dataNama = data[i].nama.toLowerCase()
        if(dataNama === nama){
            data.splice(i,1)
            fs.writeFileSync('./data/contacts.json',JSON.stringify(data))
            console.log(chalk.green.inverse(` terima kasih contact dengan nama ${data[i].nama} telah dihapus `))
            return
        }
    }

    console.log(chalk.red.inverse(' maaf nama tidak ada '))
}


module.exports = {simpanContact,list,detil,deleteContact}

