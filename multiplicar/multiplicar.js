let resultado = '';
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido no es válido`);
        } else {
            for (let index = 1; index <= limite; index++) {
                resultado += `${base} * ${index} = ${base * index}\n`;
            }

            resolve(`${resultado}`);
        }
    });
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número.`)
        }

        for (let index = 1; index <= limite; index++) {
            resultado += `${base} * ${index} = ${base * index}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, resultado, (error) => {
            if (error) reject(error)
            else
                resolve(`tabla-${base}.txt`)
        });


    });
}

module.exports = {
    crearArchivo,
    listarTabla
}