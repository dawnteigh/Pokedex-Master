import React from 'react'

const Version = () => {
  return (
    <div id="version">
      <h3 className='screen-header'>Version 2.0.2</h3>
      <h6>Features</h6>
      <ul>
        <li>Account creation</li>
        <li>Save files</li>
        <li>Improved UI</li>
        <li>All Pokémon as of the Indigo Disk DLC</li>
        <li>Assistive answer dropdown</li>
      </ul>
      <br />
      <h6>Bug Fixes</h6>
      <ul>
        <li>Fixed issue where changing range did not immediately fetch a new Pokémon in that range</li>
      </ul>
      <br />
      <h6>Coming Soon</h6>
      <ul>
        <li>Accessibility Updates</li>
        <li>Loading spinner</li>
        <li>Improved Pokédex filters</li>
        <li>Milestones and Medals</li>
      </ul>
    </div>
  )
}

export default Version