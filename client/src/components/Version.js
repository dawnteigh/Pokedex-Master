import React from 'react'

const Version = () => {
  return (
    <div id="version">
      <h3 className='screen-header'>Version 2.0</h3>
      <h6>Features</h6>
      <ul>
        <li>Account creation</li>
        <li>Save files</li>
        <li>Improved UI</li>
        <li>All Pokémon as of the Teal Mask DLC</li>
      </ul>
      <h6>Bug Fixes</h6>
      <ul>
        <li>Fixed issue where changing range did not immediately fetch a new Pokémon in that range</li>
      </ul>
    </div>
  )
}

export default Version