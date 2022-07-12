const fs = require('fs')

if(!fs.existsSync('./data')){
    fs.mkdirSync('./data')
}

if(!fs.existsSync('./data/contact.json')){
    fs.writeFileSync('./data/contact.json','[]')
}


function loadContact(){
    return JSON.parse(fs.readFileSync('./data/contact.json','utf-8'))
}

function findContact(nama){
    return JSON.parse((fs.readFileSync('./data/contact.json','utf-8'))).find(value => value.nama === nama)
}

function saveContact(contact){
    fs.writeFileSync('./data/contact.json', JSON.stringify(contact))
}

function addContact(baru){
    const lama = loadContact()
    const hasil = [...lama,baru] 

    saveContact(hasil)
    
}

function deleteContact(nama){
    const load = loadContact()
    const hapus = load.filter(value => value.nama != nama)
    saveContact(hapus)
}

function updateContact(contact){
    const load = loadContact()
    // dan kita akan ubah semuanya disini
    const update = load.filter(value =>{
        if(value.nama === contact.namaLama){
            value.nama = contact.nama
            value.email = contact.email
            value.noHP = contact.noHP
        }

        return value
    })

    saveContact(update)
}


module.exports = {
    loadContact,
    findContact,
    addContact,
    deleteContact,
    updateContact
}