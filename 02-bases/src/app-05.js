const {getUserById}= require('./js-foundation/05-factory')

const id = 1

getUserById(id, (error, user) => {
    if (error){
        throw new Error(error)
    }

    getUserById(2, (error, user2) => {
        if (error) throw new Error(error)
        console.log({user, user2})
    })
})
