import React, { useState, useContext } from 'react'
import { PokeContext } from '../context/PokeContext'
import { ToastContainer } from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast'
import missingno from '../assets/missingno.png'

const AnswerForm = ({ handleCaught, pokeFormat }) => {

  const { pokemon, mode, newPokemon, saveFile, setErrors } = useContext(PokeContext)
  const { number, name, sprite, types } = pokemon

  const [answer, setAnswer] = useState("")
  const [show, setShow] = useState(false)
  const [newPkmn, setNewPkmn] = useState({
    message: "",
    img: ""
  })

  const configObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      number: number,
      name: name,
      sprite: sprite,
      types: types
    }),
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (pokeFormat(answer).toLowerCase() === name.toLowerCase()) {
      const r = await fetch(`/api/pokedex/${saveFile}/pokemon`, configObj)
      const data = await r.json()
      if (data.error) {
        setErrors(data.error)
      }
      else {
        setNewPkmn({
          message: `Successfully added ${data.name.charAt(0).toUpperCase() + data.name.slice(1)} to your Pokédex!`,
          img: data.sprite || missingno
        })
        setShow(true)
        handleCaught(data.number)
      }
    }
    else {
      setNewPkmn({
        message: 'Oh no, the Pokémon got away!',
        img: mode === "easy" ? sprite : missingno
      })
      setShow(true)
      newPokemon()
    }
    e.target.reset()
  }

  return (
    <div className="answer">
      <ToastContainer style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)" }}>
        <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
          <Toast.Header>
            <strong className="me-auto">Pokédex Master</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>
            <img src={newPkmn.img} alt="" />
            <br />
            {newPkmn.message}
          </Toast.Body>
        </Toast>
      </ToastContainer>
      <form onSubmit={handleSubmit} className='answer-form'>
        <input type="text" placeholder="Enter Pokémon name here!" className="answer-input" onChange={(e) => setAnswer(e.target.value)} />
        <input type="submit" value="Go!" className='answer-btn' />
      </form>
    </div>
  )
}

export default AnswerForm