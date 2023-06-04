const fs = require('fs')


const registrar = (nombre, apellido, edad, diagnostico, fonasa) => {
    const data = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
    data.push({nombre, apellido, edad, diagnostico, fonasa})
    fs.writeFileSync('citas.json', JSON.stringify(data))        
    console.log('registro kinesico completado')
}

const leer = () => {
    const data = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
    console.log(data)
}

module.exports= {
    registrar,
    leer
};
