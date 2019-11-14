const { getLugar } = require('./lugar/lugar')
const { getClima } = require('./clima/clima')
const colors = require('colors/safe')
const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Dirección del lugar a buscar'
    }

}).argv;



const getInfo = async(direccion) => {

    try {

        let coords = await getLugar(direccion);
        let temperatura = await getClima(coords.lat, coords.lon);

        return colors.yellow(`La temperatura en ${coords.name} es ${temperatura}`);


    } catch (err) {
        return colors.red(`El valor : ${direccion} es una valor inválido`);
    }

}


getInfo(argv.direccion).then(console.log).catch(console.log);