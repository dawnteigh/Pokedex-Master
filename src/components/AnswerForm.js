import React, { useState } from 'react'

const AnswerForm = ({ pokemon, newPokemon }) => {
    const { id, name, sprite } = pokemon
    const [answer, setAnswer] = useState("")
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: id,
            name: name,
            sprite: sprite
        }),
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (answer.toLowerCase() === name.toLowerCase()) {
            fetch("http://localhost:6001/pokemon", configObj)
            .then(r => r.json())
            .then(data => console.log(`Successfully added ${data.name} to your Pokedex!`))
        } else {
            console.log("Oh no, the Pokemon got away!")
        }
        e.target.reset()
        newPokemon()
    }

  return (
    <form onSubmit={handleSubmit} >
        <input type="text" placeholder="Enter Pokemon name here!" onChange={(e) => setAnswer(e.target.value)}/>
        <input type="submit" value="Go!" />
    </form>
  )
}

export default AnswerForm