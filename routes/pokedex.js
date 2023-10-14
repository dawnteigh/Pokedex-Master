const express = require('express');
const Pokedex = require('../models/Pokedex')

const router = express.Router()
// get a pokedex object using its id
router.get('/pokedex/:id', async (req, res) => {
    try {
        const pokedex = await Pokedex.findById(req.params.id)
        res.json(pokedex)
    }
    catch (ex) {
        res.status(500).json({ error: ex.message })
    }
})
// add a pokemon to a pokedex's pokemon collection
router.patch('/pokedex/:id/pokemon', async (req, res) => {
    const pokedex = await Pokedex.findById(req.params.id)
    const pokemon = pokedex.pokemon
    const newPokemon = {
        number: req.body.number,
        name: req.body.name,
        sprite: req.body.sprite,
        types: req.body.types
    }
    pokemon.push(newPokemon)
    if (pokedex.save()) {
        return res.status(200).json(newPokemon)
    } else {
        return res.status(400).json({ error: "Error when saving new Pokémon" })
    }

})
// clear the pokedex's pokemon collection
router.delete('/pokedex/:id/pokemon', async (req, res) => {
    const pokedex = await Pokedex.findById(req.params.id)
    const numOfPokemon = pokedex.pokemon.length
    if (numOfPokemon !== 0) {
        try {
            await pokedex.updateOne({ pokemon: [] });
            res.status(200).json({ message: `You released ${numOfPokemon} Pokémon.` })
        }
        catch (ex) {
            res.status(500).json({ error: ex.message })
        }
    } else res.status(400).json({ error: "Your Pokédex is already empty!" })
})

module.exports = router;