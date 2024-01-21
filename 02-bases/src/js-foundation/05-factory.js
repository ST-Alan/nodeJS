//Factory es una funcion que crea una funcion
// const { v4: uuidv4 } = require('uuid');
// const {uuidv} = require('../../plugins/get-id.plugin')
// const {getAge} = require('../../plugins/get-age.plugin')
const {getAge, uuidv} = require('../../plugins')

const buildPerson = ({name, birthdate}) => {
    
    return{
        id: uuidv,
        name,
        birthdate,
        age: getAge(birthdate),
    }
}

const obj = {name:'John', birthdate:'1985-10-21'}

const john = buildPerson(obj)

console.log(john)


module.exports = {
    buildPerson
}