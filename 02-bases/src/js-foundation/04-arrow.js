const users = [
    {
        id: 1,
        name:'John Doe',
    },
    {
        id:2,
        name: 'Jane Doe',
    }
];


// function getUserById(id){
//     users.find(user=>user.id === id)
// }

const getUserById = (id,callback) => {
    const user = users.find(user=>user.id === id)

    (user)
        ? callback(null,user)
        : callback(`'Usuario no encontrado', ${id})`)

    return callback(null,user)
    
}

module.exports = {
    getUserById
}