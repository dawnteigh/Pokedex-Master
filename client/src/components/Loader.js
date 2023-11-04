import React from 'react'
import { createPortal } from 'react-dom'
import masterBall from '../assets/masterball.png'

const Loader = () => {
  return (
    <>
      {createPortal(
        <div id="loader">
          <img src={masterBall} alt="Master Ball loader" className="loading" />
          <h2 className='screen-header'>Loading</h2>
        </div>, document.body)}
    </>

  )
}

export default Loader