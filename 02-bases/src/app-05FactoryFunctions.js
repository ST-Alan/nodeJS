const {uuidv, getAge} = require('../plugins')
const {buildMakePerson} = require('./js-foundation/05-factory-functions')

const makePerson = buildMakePerson({uuidv, getAge})

const obj = {name:'John', birthdate:'1985-10-21'}

const john = makePerson({name:'A Fermin', birthdate:'1989-03-13'})
const johnDoe = makePerson(obj)

console.log('john',{john})
console.log('johnDoe',{johnDoe})