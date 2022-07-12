const fs = require('fs')
if(!fs.existsSync('./data')){
    fs.mkdirSync('./data')
}

if(!fs.existsSync('./data/contacts.json')){
    fs.writeFileSync('./data/contacts.json','[]',"utf-8")
}  



module.exports = {
    simpanContact(nama,nomor, email){
        const fs = require('fs')
        const contact = {nama, email,nomor}

        const isi = fs.readFileSync('./data/contacts.json',"utf-8")
        const arr = JSON.parse(isi)
        arr.push(contact)
        
        fs.writeFileSync('./data/contacts.json',JSON.stringify(arr))
        console.log('terima kasih')
    
    },

    tanya : function(kata){
        const readline = require('readline')
        const rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        })
        return new Promise((resolve) => {
            rl.question(kata,(result)=>{
               resolve(result)
               rl.close()
            })
    
    
        })
    }
    
}