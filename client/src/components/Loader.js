import React from 'react'
import { createPortal } from 'react-dom'
import masterBall from '../assets/masterball.png'

const Loader = () => {
  return (
    <>
      {createPortal(
        <div id="loader">
          <img src={masterBall} alt="Master Ball loader" className="loading" />
        </div>, document.body)}
    </>

  )
}

export default Loader