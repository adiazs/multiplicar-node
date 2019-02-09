let base = 'ghhh'

const { crearArchivo } = require('./multiplicar/multiplicar.js');

// let resultado = '';

// const fs = require('fs');

// for (let index = 1; index <= 10; index++) {
//     resultado += `${base} * ${index} = ${base * index}\n`;
// }


// fs.writeFile(`tablas/tabla-${base}.txt`, resultado, (error) => {
//     if (error) throw error

//     console.log(`El archivo tabla-${base}.txt fue creado`);
// });

//console.log(multiplicar);

let argv = process.argv;
let parametro = argv[2];
base = parametro.split('=')[1];

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));