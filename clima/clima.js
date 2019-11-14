const axios = require('axios');




const getClima = async(lat, lon) => {

    try {
        const temperatura = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4507b7d3b9ede91cc743716196662e03&units=metric`);
        return temperatura.data.main.temp;
    } catch (err) {
        console.log('Elerror es :', err)
    }

}

module.exports = {
    getClima
}