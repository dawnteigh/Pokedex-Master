require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user')
const pokemonRouter = require('./routes/pokemon')
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const cors = require('cors');

const mongoString = process.env.DATABASE_URL
const sessionSecret = process.env.SESSION_SECRET
mongoose.connect(mongoString)
const database = mongoose.connection
database.on('error', (error) => {
    console.log(error)
});

database.once('connected', () => {
    console.log('Database Connected');
});

const mongoDBstore = new MongoDBStore({
    uri: mongoString,
    collection: "mySessions"
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // may not need
app.use(cors());
app.use(
    session({
        secret: sessionSecret,
        resave: true,
        saveUninitialized: false,
        store: mongoDBstore
    })
);
app.use('/api', userRouter);
app.use('/api', pokemonRouter);

app.listen(4000, () => console.log(`Server started at ${4000}`));
