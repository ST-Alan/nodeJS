// El process es un proceso de node que esta corriendo el cual tiene mucha informacion
// console.log(process);
console.log('-----------------------------------------------------------------------------------------------------------------------------------------------------------------------');
console.log(process.env);
console.log(process.env.PORT ?? 3000);

// Asi desestructuro SHELL, PATH, HOMEBREW_PREFIX de las variables de entorno(todas las que se encuentran en env | env significa entorno varaible o en espaniol varibles de entorno). La mayor parte de las variables de entorno estan en mayusculas
const {SHELL, PATH, HOMEBREW_PREFIX} = process.env

// console.log(SHELL)
// console.log(PATH)
// console.log(HOMEBREW_PREFIX)
// console.log({SHELL,PATH,HOMEBREW_PREFIX})
// console.table({SHELL,PATH,HOMEBREW_PREFIX})
// console.table({SHELL,HOMEBREW_PREFIX})

// const characters = ['Flash', 'Superman', 'Batman']
const characters = ['Flash', 'Superman', 'Green Lantern', 'Batman']

// const batman = characters[2]

const [f,s,,batman] = characters

// console.table([f,s,batman])

// console.log(f)

//para ejecutar este archivo, escribir en la consola "node 02-bases/src/app-old.js"
//En el package.json se esjecuta desde el src, peor aqui no