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

function getUserById(id,callback){
    const user = users.find(function(user){
        return user.id === id;
    })

    if(!user){
        return callback(`'Usuario no encontrado', ${id})`)
    }

    // Si tengo un usuario, mando a llamar al callback (nulo, usuario)
    return callback(null,user)
    
}

module.exports = {
    getUserById
}