//Factory es una funcion que crea una funcion
const { v4: uuidv4 } = require('uuid');
const getAge = require('get-age')


const buildPerson = ({name, birthdate}) => {
    
    return{
        id: uuidv4(),
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