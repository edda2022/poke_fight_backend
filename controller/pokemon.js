const axios = require('axios');


getPokemons = async (req, res, next) => {
    // console.log(req.query)
    const {offset} = req.query;
    const {limit} = req.query
    
    try {
        const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
        res.json(pokemons.data)
    }
    catch (err) {
        res.status(500).send('something went wrong')
    }
}

getPokemon = async (req, res, next) => {
    const {pokemonQuery} = req.params;
    try {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonQuery}`)
        res.json(pokemon.data)
    }
    catch (err) {
        res.status(500).send('something went wrong')
    }
}

getPokemonTypes = async (req, res, next) => {
    const {pokemonQuery, types} = req.params;
     try {
         const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonQuery}`)
         res.json(pokemon.data.types)
     }
     catch (err) {
         res.status(500).send('something went wrong')
     }
}



module.exports = {
    getPokemons,
    getPokemon,
    getPokemonTypes
}