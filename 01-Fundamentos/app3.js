
const fs = require('fs')

const content = fs.readFileSync('README.md', 'utf-8')

// const wordCount = content.split(' ')
// console.log(wordCount)
const words = content.split(' ')

const reactWordCount = words.filter(word=> word.toLowerCase()=== 'react').length

//El gi abajo lo hace case sensitive
const reactWordCountTotal = content.match(/react/gi ?? []).length


// console.log('Palabras:',wordCount.length)
console.log('Palabras words.length:',words.length)
console.log('Palabras reactWordCount:',reactWordCount)
console.log('Palabras React:',reactWordCountTotal)