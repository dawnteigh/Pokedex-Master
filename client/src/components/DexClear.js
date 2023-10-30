import React, { useState } from 'react'

const DexClear = ({ clearDex }) => {
  const [show, setShow] = useState(false)

  const handleClear = () => {
    clearDex()
    setShow(false)
  }

  return (
    <div className={`delete-wrapper ${!show && "delete-shrink-wrap"}`}>
      <div className={`delete-show ${!show && "delete-hidden"}`}>
        <span>Do you want to clear your Pokédex and start over? This cannot be undone!</span>
        <button className="delete-btn" onClick={handleClear}>Yes!</button>
      </div>
      <button className='delete-btn' onClick={() => setShow(!show)}>{!show ? "Reset" : "Wait, no!"}</button>
    </div>
  )
}

export default DexClear