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



// app.get('/auth/login/', async (req, res) => {
//   let email = req.body.email;
//   let password = req.body.password;
//   console.log(email, password)

//   if (email && password) {
//       try {
//           const userCollection = db.collection('user');
//           const user = await userCollection.findOne({ "email": email, "password": password });

//           if (user) {
//               res.json(user);
//           } else {
//               res.status(404).json({ error: 'User not found' });
//           }
//       } catch (error) {
//           res.status(500).json({ error: 'Internal server error' });
//       }
//   } else {
//       res.status(400).send("Error: Please fill in email and password");
//   }
// });