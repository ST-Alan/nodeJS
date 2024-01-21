//leer nuestro readme

//Node ya viene con paquetes internos como el de File System que se conoce como fs


const fs = require('fs')

const data = fs.readFileSync('README.md', 'utf-8')

const newData = data.replace(/React/ig, 'Angular')

// console.log(data)

fs.writeFileSync('README-Angular.md', newData)

console.log(newData)