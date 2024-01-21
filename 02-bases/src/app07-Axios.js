

const getPokemonById = require('./js-foundation/07-axios')


getPokemonById(4)


.then((pokemon) => console.log(pokemon))
.catch((err)=> console.log({err}))
.finally(()=> console.log('Finalmente'))

// Peticiones - Token de acceso

// Peticiones - Publicas