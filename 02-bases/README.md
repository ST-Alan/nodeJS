# DATOS

En clean code no se recomienda tener abreviaturas

# 02 Bases de node


Correr en Dev
```
npm run dev
```

Process
```
El process muestra todos los procesos que se estan ejecutando dentro de node.

Uno de los mas usados es el process.env que devuelve las variables de entorno
```

<h2>Nodemon</h2>
Herramienta sumamente indispensable que le dice a node que apenas detecte un cambio recargue la app para reflejar las ultimas actualizaciones de nuestro codigo


<h2>Patron adaptador</h2>
Al momento de trabajar con dependencia de terceros, nosotros creamos una capa o proteccion. En este caso es el patron adaptador.

Esta capa o proteccion es el patron adaptador que se refiere a crear nuestro propio codigo que adapta una dependencia de terceros para que nuestro codigo no dependa del codigo de terceros.

Es un Principio de arquitectura

<h2>Archivo de Barril</h2>
En 02-bases/plugins/index.js se puede ver el archivo de barril.
Lo que se hace es que se crea un index.js, donde se importan todos los archivos y se exportan con

module.exports = {

}

Luego, donde lo quiera importar, debo colocar la linea: const {} = require('../../plugins')

Dentro de las llaves van las funciones que necesite. Ejemplo:

const {getAge, uuidv} = require('../../plugins')



<h2>Callback</h2>
El callback es una funcion que pasa como argumento de una funcion.
El callback es invocado desde una funcion externa para completar algun tipo de rutina o accion

<h2>Promesas </h2>
Desde la version 16 viene fetch
Una promesa se realiza con una peticion
Una peticion puede ser con fetch, axios o algun oro API de peticion


<h2>Promesas - Fetch</h2>

Luego de la peticion con fetch, se pueden habilitar con el punto 3 metodos:

fetch(url)
.then: es cuando todo sale bien, resuelte de forma exitosa
.catch: Cuando algo sale mal, 404 o el endpoint no fue encontrado
.finally: Va a suceder despues del .catch o del .then

<h2> Promesas - Then </h2>

Al retortnar una promesa dentro del then, me permite poner otro then en cadena

.then((response)=>{
        return response.json();
    })
    .then((pokemon)=>{
        callback(pokemon)
    })

<h1>Async - await</h1>
Para convertir una funcion en asincrona se coloca el async

El Await es un codigo bloqueante que no permite que se siga trabajando hasta que no se resuelva lo que esta alli adentro. Si hay un fetch entonces hasta que no se resuelva el fetch no se continua

Se puede envolver dentro de un try catch tambien


<h3>
El throw hace que no se ejecute el return</h3>

<h3>El return hace que no se ejecute el throw</h3>

El ejercicio de 06-promises-async-await-patron-adaptador.js se puede crear un factory function que haga lo mismo

<h2>package-lock</h2>
Se genera solo con npm o lo genera yarn????

<h2>Ver cuando se importa asi: const {httpAxios} = require('../plugins/get-axios.plugin') o asi:
const buildLogger = require('../plugins/logger.plugin')</h2>


<h1>Factory function </h1>
Es una funcion que crea una funcion

