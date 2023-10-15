import React, { useState, useContext } from 'react'
import { PokeContext } from '../context/PokeContext'

const Signup = () => {

  const { setErrors, setUser } = useContext(PokeContext)
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirm_password: ""
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
    const r = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
        confirm_password: form.confirm_password
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
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit} >
        <label>
          Username:
          <input
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
        <label>
          Confirm Password:
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
            value={form.confirm_password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type='submit' className="button-2">Submit</button>
      </form>
    </div>
  )
}

export default Signup