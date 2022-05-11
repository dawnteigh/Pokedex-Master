import React from 'react'

const DexCompletion = ({ dex, caught }) => {

    const { region, number, dexRange } = dex
    const total = caught.filter(num => num >= dexRange.first && num <= dexRange.last)
    const percentage = Math.floor((100 * total.length) / number)

    return (
    <div className="dexCard">
        <h4 className="region">{region}</h4>
        {total.length}/{number}
        <br/>
        {percentage}%
    </div>
    )
}

export default DexCompletion