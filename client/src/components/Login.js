import React, { useState, useContext } from 'react'
import { PokeContext } from '../context/PokeContext'

const Login = () => {

  const { setErrors, setUser } = useContext(PokeContext)
  const [form, setForm] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const value = e.target.value
    setForm({
      ...form,
      [e.target.name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const r = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: form.username,
        password: form.password
      })
    })
    const user = await r.json()
    if (user.error) {
      setErrors(user.error)
    } else {
      setUser(user)
    }
  }

  return (
    <div className="form">
      <h3 className='screen-header'>Log In</h3>
      <form onSubmit={handleSubmit} >
        <label>
          Username:
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type='submit' className="button-2">Submit</button>
      </form>
    </div>
  )
}

export default Login