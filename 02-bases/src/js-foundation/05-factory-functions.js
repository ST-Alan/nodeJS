//Factory es una funcion que crea una funcion
// const { v4: uuidv4 } = require('uuid');
// const {uuidv} = require('../../plugins/get-id.plugin')
// const {getAge} = require('../../plugins/get-age.plugin')
// const {getAge, uuidv} = require('../../plugins')

const buildMakePerson = ({uuidv, getAge})=>{

    return ({name, birthdate}) => {
        
        return{
            id: uuidv,
            name,
            birthdate,
            age: getAge(birthdate),
        }
    }

}



module.exports = {
    buildMakePerson
}