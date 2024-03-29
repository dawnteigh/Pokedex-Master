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
        type: [String]
    }
})

const pokedexSchema = new mongoose.Schema({
    pokemon: [pokemonSchema],
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}/*,
    {
        toJSON: { virtuals: true }
    }*/
)

// pokedexSchema.virtual('completion').get(function () {
//     return (100 * this.pokemon.length) / 1017;
// })

// ** NOTE: The virtual is fun, but doesn't persist to the DB and therefore is not returned when the session is queried **

module.exports = mongoose.model('Pokedex', pokedexSchema)