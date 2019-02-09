const argv = require('./config/yargs').argv
const colors = require('colors/safe');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resul => console.log(`${resul}`))
            .catch(e => console.log(e))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                return console.log(`Archivo creado:`, colors.green(archivo));
            })
            .catch(e => console.log(e));
        break

    default:
        console.log('Comando no identificado');
        break;
}

//console.log(argv);


//let argv2 = process.argv;
//let comando = argv._[0];

//console.log(argv.limite);
//console.log(argv2);