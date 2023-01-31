const express = require('express')
const pokemonRouter = express.Router()
const {getPokemons, getPokemon, getPokemonTypes} = require('../controller/pokemon')

pokemonRouter.get('/', getPokemons)
pokemonRouter.get('/:pokemonQuery', getPokemon)
pokemonRouter.get('/:pokemonQuery/types', getPokemonTypes)


module.exports = {
    pokemonRouter
}