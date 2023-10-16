const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Pokedex = require("../models/Pokedex");

router.post('/register', async (req, res) => {
  const { username, password, confirm_password } = req.body

  if (!username || !password || !confirm_password)
    return res.status(400).json({ error: 'Please fill out all fields.' })

  if (password.length < 8) {
    return res
      .status(400)
      .json({ error: 'Password should be at least 8 characters long' })
  }
  if (password !== confirm_password)
    return res.status(400).json({ error: "The passwords you entered do not match." })

  const user = await User.findOne({ username })
  if (user) return res.status(400).json({ error: 'User already exists' })


  const newUser = new User({ username, password })
  bcrypt.hash(password, 7, async (err, hash) => {
    if (err)
      return res.status(400).json({ error: 'error while saving the password' })

    newUser.password = hash

    const savedUserRes = await newUser.save()

    if (savedUserRes) {
      const p1 = new Pokedex({ user_id: newUser._id }),
        p2 = new Pokedex({ user_id: newUser._id }),
        p3 = new Pokedex({ user_id: newUser._id })
      await p1.save()
      await p2.save()
      await p3.save()
      const userSession = { username: newUser.username, saves: [p1, p2, p3] }
      req.session.user = userSession
      return res.status(200).json(req.session.user)
    }
  })
})

router.post(`/login`, async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({ error: 'Fields should not be left empty.' })
  }

  const user = await User.findOne({ username: username }) // finding user in db
  if (!user) {
    return res.status(400).json({ error: 'Could not find any user by that name. Try signing up instead.' })
  }

  const matchPassword = await bcrypt.compare(password, user.password)
  if (matchPassword) {
    const saves = await Pokedex.find({ "user_id": user._id }).exec();
    const userSession = { username: user.username, saves: saves }
    req.session.user = userSession

    return res
      .status(200)
      .json(req.session.user)
  } else {
    return res.status(400).json({ error: 'Invalid password.' })
  }
})

router.delete(`/logout`, async (req, res) => {
  req.session.destroy((error) => {
    if (error) throw error

    res.clearCookie('session-id') // cleaning the cookies from the user session
    res.status(200).send('Logout Success')
  })
})

router.patch(`/me`, async (req, res) => {
  if (req.session.user) {
    req.session.user.save_file = req.body.id
    return res.json(req.session.user.save_file)
  } else {
    return res.status(401).json({ error: "Please log in or sign up to continue" })
  }
})

router.get('/me', async (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user)
  } else {
    return res.status(401).json({ error: "Please log in or sign up to continue" })
  }
})

module.exports = router