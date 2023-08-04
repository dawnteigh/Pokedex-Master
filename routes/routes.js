const express = require('express');
const Pokemon = require('../models/pokemon')

const router = express.Router()
// get a user's pokedex
router.get('/getAll', async (req, res) => {
    try {
        const pokedex = await Pokemon.find()
        res.json(pokedex)
    }
    catch(ex) {
        res.status(500).json({message: ex.message})
    }
})
// add a pokemon to the dex
router.post('/post', async (req, res) => {
    const pokemon = new Pokemon({
        number: req.body.number,
        name: req.body.name,
        sprite: req.body.sprite,
        types: req.body.types
    })

    try {
        const newPokemon = await pokemon.save();
        res.status(200).json(newPokemon)
    }
    catch(ex) {
        res.status(400).json({message: ex.message})
    }
})
// clear the pokedex
router.delete('/delete', (req, res) => {
    res.send('Delete API')
})

// ~*~ IF NEEDED ~*~
//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        res.json(pokemon)
    }
    catch(ex) {
        res.status(500).json({message: ex.message})
    }
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = router;