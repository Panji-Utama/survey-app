require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const usersRouter = require('./backend/routes/user')
app.use('/user', usersRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => 
    console.log(`Server started at port ${PORT}`)
)

app.get('/', (req,res) => {
  res.send("Hello")
})

