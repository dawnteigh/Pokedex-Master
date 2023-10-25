import React from 'react'

const Type = ({ type, variant }) => {
  const textColor = ["bug", "electric", "ice", "normal", "steel"].includes(type) ? "black" : "white"

  return (
    <div className={`type-tag ${variant}`} style={{ backgroundColor: `rgba(var(--${type}), .75)`, color: `${textColor}` }}>{type.toUpperCase()}</div>
  )
}

export default Type