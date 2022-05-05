import React, { useState } from 'react'

const AnswerForm = ({ pokemon }) => {

    const [answer, setAnswer] = useState("")

  return (
    <form>
        <input type="text" placeholder="Enter Pokemon name here!" />
        <input type="submit" value="Go!" />
    </form>
  )
}

export default AnswerForm