const {registrar, leer} = require('./operaciones')


const [orden, nombre, apellido, edad, diagnostico, fonasa] = process.argv.slice(2)

if (orden === 'registrar'){
    registrar(nombre, apellido, edad, diagnostico, fonasa)
}if (orden === 'leer'){
    leer()
};