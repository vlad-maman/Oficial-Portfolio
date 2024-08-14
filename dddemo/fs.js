
let fs = require('fs')
let path = require('path')

// fs.mkFile(path.join(__dirname, 'text', 'text.text'), (err) => {
//     if(err){
//         throw err
//     }

//     console.log('Учтнтвим неперживай')
// })


let Filename = path.join(__dirname, 'text', 'text.text')

// fs.appendFile(Filename, '\nlorem200cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', (err) =>{
// if(err){
//     throw err
// }

// console.log('іді памрьmmmmm')
// })


fs.readFile(Filename, 'utf-8', (err, content)=>{
    if(err){
        throw err
    }

    console.log(content)

    // let contentt = Buffer.from(content)
    // console.log(contentt.toString())
})