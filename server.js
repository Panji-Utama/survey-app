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

// Set the views directory to the 'views' folder
app.set('views', path.join(__dirname, 'views'));

// Use the 'ejs' template engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req,res) => {
  res.render('login')
})

const usersRouter = require('./backend/routes/users')
app.use('/users', usersRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => 
    console.log(`Server started at port ${PORT}`)
)


