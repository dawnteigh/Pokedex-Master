const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    number: {
        required: true,
        type: Number
    },
    name: {
        required: true,
        type: String
    },
    sprite: {
        type: String
    },
    types: {
        required: true,
        type: Array
    }
})

module.exports = mongoose.model('Pokemon', pokemonSchema)