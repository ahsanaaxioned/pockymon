const axios = require("axios");

module.exports = async()=>{
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=120`);
        console.log(response.data);
        return response.data.results;
        
    } catch (error) {
        console.error(error)
        
    }
}