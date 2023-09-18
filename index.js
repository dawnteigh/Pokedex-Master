require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes')
const cors = require('cors');

const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString)
const database = mongoose.connection
database.on('error', (error) => {
    console.log(error)
});

database.once('connected', () => {
    console.log('Database Connected');
});

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', routes);

app.listen(4000, () => console.log(`Server started at ${4000}`));
