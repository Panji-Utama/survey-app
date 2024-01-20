require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => 
    console.log(`Server started at port ${PORT}`)
)

app.get("/", async (req, res) => {
    return res.json({ message: "Hello, World ✌️" });
  });

