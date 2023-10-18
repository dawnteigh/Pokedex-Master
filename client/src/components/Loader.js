import React from 'react'
import masterBall from '../assets/masterball.png'

const Loader = () => {
  return (
    <div id="loader">
      <img src={masterBall} alt="Master Ball loader" className="loading" />
    </div>
  )
}

export default Loader