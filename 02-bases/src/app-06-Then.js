const getPokemonById = require('./js-foundation/06-promises-then')

// console.log(getPokemonById(1))
// getPokemonById(4, (pokemon)=>{
//     console.log(pokemon)
// })

// const info = getPokemonById(4)

// console.log(info)

// setTimeout(()=>{
//     console.log('alan',info)
// },1000)

// Aca me resuelve la promesa no me resuelve el pokemon
getPokemonById(4)

// Cuando trabajo con la promesa ya puedo trabajar con un .then

.then((pokemon) => console.log({pokemon}))

//Para manejar el error utilizo el .catch que me recibe el error de la promesa y me permite trabajarlo mas especifico 

.catch((err)=> console.log({err}))
.finally(()=> console.log('Finalmente'))

