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

module.exports = {
    loadContact,
    findContact
}