
import React from 'react'

const ProgressBar = ({ outerColor, innerColor, progress, height }) => {

  const outer = {
    height: height,
    width: '80%',
    backgroundColor: outerColor,
    borderRadius: "0 50px 50px 0",
    margin: "0 auto"
  }

  const inner = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: innerColor,
    borderRadius: "0 50px 50px 0",
    textAlign: 'right'
  }

  const label = {
    padding: 10,
    color: 'black',
    fontWeight: 900
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