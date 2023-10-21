
import React from 'react'

const ProgressBar = ({ outerColor, innerColor, progress, height }) => {

  const outer = {
    height: height,
    width: '100%',
    backgroundColor: outerColor,
    boxShadow: "2px 2px 3px 0 inset #000",
    borderRadius: "0 50px 50px 0",
    margin: "0 auto",
  }

  const inner = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: innerColor,
    borderRadius: "0 50px 50px 0",
    textAlign: 'center'
  }

  const label = {
    padding: "5px",
    color: 'black',
    fontSize: ".8em",
    fontWeight: "bold",
    fontFamily: "'Orbitron', sans-serif"
  }

  return (
    <div style={outer}>
      <div style={inner}>
        <span style={label}>{`${progress}%`}</span>
      </div>
    </div>
  )
}

export default ProgressBar; 