const axios = require('axios')
const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`

// Función para obtener listado de perros de la api externa
const dogsApi = async () => {
    try {
        const service = await axios(URL );
        const result = service.data.map((d) => ({
            id: d.id,
            image: `https://cdn2.thedogapi.com/images/${d.reference_image_id}.jpg`,
            name: d.name,
            height: d.height.metric,
            weight: d.weight.metric,
            life_span: d.life_span,
            created: false,
            temperament: d.temperament
        }));
        return result
    } catch (error) {
        return { error }
    }
}

module.exports = dogsApi