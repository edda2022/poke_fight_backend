const axios = require('axios');

getPokemons = async (req, res, next) => {
    try {
        const pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20")
        res.json(pokemons.data)
    }
    catch (err) {
        res.status(500).send('something went wrong')
        console.log(err)
    }
}

getPokemon = async (req, res, next) => {
    const {pokemonQuery} = req.params;
    console.log(pokemonQuery)
    try {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonQuery}`)
        res.json(pokemon.data.types)
    }
    catch (err) {
        res.status(500).send('something went wrong')
    }
}

getPokemonTypes = async (req, res, next) => {
    const {pokemonQuery, types} = req.params;
    console.log(req.params)
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