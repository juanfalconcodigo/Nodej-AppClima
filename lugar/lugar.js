const axios = require('axios');



const getLugar = async(direccion) => {

    let direc = encodeURI(direccion);
    /* console.log(direccion, direc) */

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direc}`,
        headers: {
            'X-RapidAPI-Key': 'e9b6aa57a5msh4dd78a64ff9cf94p1efe55jsnb0b47c57bdf8'
        }
    })

    let resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No existe respuesta posible para lo ingresado : ${direccion}`)
    }

    let data = resp.data.Results[0]
    let name = data.name;
    let lat = data.lat;
    let lon = data.lon;

    return {
        name,
        lat,
        lon
    }
}





module.exports = {
    getLugar
}