const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User"); // User model

router.post('/register', async (req, res) => {
  const { username, password } = req.body

  if (!username || !password)
    return res.status(400).json({ msg: 'Password and username are required' })

  if (password.length < 8) {
    return res
      .status(400)
      .json({ msg: 'Password should be at least 8 characters long' })
  }

  const user = await User.findOne({ username })
  if (user) return res.status(400).json({ msg: 'User already exists' })

  const newUser = new User({ username, password })
  bcrypt.hash(password, 7, async (err, hash) => {
    if (err)
      return res.status(400).json({ msg: 'error while saving the password' })

    newUser.password = hash
    const savedUserRes = await newUser.save()

    if (savedUserRes) {
      const userSession = { username: newUser.username, pokedex: newUser.pokedex }
      req.session.user = userSession
      return res.status(200).json({ userSession })
    }
  })
})

router.post(`/login`, async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    res.status(400).json({ msg: 'Something missing' })
  }

  const user = await User.findOne({ username: username }) // finding user in db
  if (!user) {
    return res.status(400).json({ msg: 'User not found' })
  }

  const matchPassword = await bcrypt.compare(password, user.password)
  if (matchPassword) {
    const userSession = { username: user.username, pokedex: user.pokedex }
    req.session.user = userSession

    return res
      .status(200)
      .json({ msg: userSession })
  } else {
    return res.status(400).json({ msg: 'Invalid credential' })
  }
})

router.delete(`/logout`, async (req, res) => {
  req.session.destroy((error) => {
    if (error) throw error

    res.clearCookie('session-id') // cleaning the cookies from the user session
    res.status(200).send('Logout Success')
  })
})

router.get('/me', async (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user)
  } else {
    return res.status(401).json('unauthorize')
  }
})

module.exports = router