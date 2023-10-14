import React, { useContext } from 'react'
import { ToastContainer } from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast'
import { PokeContext } from '../context/PokeContext'

const Errors = () => {

  const { errors, setErrors } = useContext(PokeContext)

  return (
    <ToastContainer position="middle-center" >
      <Toast onClose={() => setErrors(false)} show={true}>
        <Toast.Header>
          <strong className="me-auto">Pokédex Master</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>
          <img src="https://upload.wikimedia.org/wikipedia/en/b/b7/Missingno.png" alt="missingno" />
          <p>{errors}</p>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

export default Errors