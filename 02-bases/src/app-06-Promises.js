

const getPokemonById = require('./js-foundation/06-promises-async-await-patron-adaptador')


getPokemonById(4)


.then((pokemon) => console.log(pokemon))
.catch((err)=> console.log({err}))
.finally(()=> console.log('Finalmente'))

