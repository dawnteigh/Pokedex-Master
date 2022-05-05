import React, { useState, useEffect } from 'react'

const Play = ({ range }) => {
    const { min, max } = range
    const [pokemon, setPokemon] = useState({
        id: "",
        name: "",
        sprite: "",
        entry: ""
    })
    const dexNo = Math.floor(Math.random() * (max - min) + min);
    console.log(dexNo)
    useEffect(() => {

    }, [])

  return (
    <div>Play</div>
  )
}

export default Play