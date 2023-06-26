import React, { useState, useContext } from 'react'
import { PokeContext } from '../context/PokeContext'
import { ToastContainer } from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast'

const AnswerForm = ({ handleCaught }) => {

  const { pokemon, mode, newPokemon } = useContext(PokeContext)
  const { id, name, sprite, types } = pokemon

  const [answer, setAnswer] = useState("")
  const [show, setShow] = useState(false)
  const [newPkmn, setNewPkmn] = useState({
    message: "",
    img: ""
  })
  
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: id,
      name: name,
      sprite: sprite,
      types: types
    }),
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (answer.toLowerCase() === name.toLowerCase()) {
      fetch("http://localhost:6001/pokemon", configObj)
      .then(r => r.json())
      .then(data => {
        console.log(`Successfully added ${data.name} to your Pokédex!`)
        setNewPkmn({
          message: `Successfully added ${data.name.charAt(0).toUpperCase() + data.name.slice(1)} to your Pokédex!`,
          img: data.sprite
        })
        setShow(true)
        handleCaught(data.id)
      })
      .catch(() => alert("Something went wrong. Is your JSON Server running?"))
    } else {
        console.log('Oh no, the Pokémon got away!')
        setNewPkmn({
          message: 'Oh no, the Pokémon got away!',
          img: mode === "easy" ? sprite : ""
        })
        setShow(true)
        newPokemon()
      }
    e.target.reset()
  }

  return (
    <div className="answer">
      <ToastContainer position="middle-center" >
        <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Pokédex Master</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>
            <img src={newPkmn.img} alt="" />
            <br/>
            {newPkmn.message}
          </Toast.Body>
        </Toast>
      </ToastContainer>
      <form onSubmit={handleSubmit} >
        <input type="text" size="25" placeholder="Enter Pokémon name here!" onChange={(e) => setAnswer(e.target.value)}/>
        <input type="submit" value="Go!" />
      </form>
    </div>
  )
}

export default AnswerForm