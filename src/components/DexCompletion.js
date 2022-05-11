import React from 'react'

const DexCompletion = ({ dex, caught }) => {

    const { region, number, dexRange } = dex
    const total = caught.filter(num => num >= dexRange.first && num <= dexRange.last)
    console.log(caught)
    return (
    <div>
        {region}
        <br/>
        {total.length}/{number}
    </div>
    )
}

export default DexCompletion