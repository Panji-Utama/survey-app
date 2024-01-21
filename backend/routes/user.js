require('dotenv').config()

const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
const userCollection = db.collection('user');

// Login
router.get('/auth/login', async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  console.log(email, password)

  if (email && password) {
      try {
          const user = await userCollection.findOne({ "email": email, "password": password });

          if (user) {
              res.json(user);
          } else {
              res.status(404).json({ error: 'User not found' });
          }
      } catch (error) {
          res.status(500).json({ error: 'Internal server error' });
      }
  } else {
      res.status(400).send("Error: Please fill in email and password");
  }
});

// Get All
router.get('/', async (req, res) => {
    try {
        // res.send("Hello World")
        const user = await userCollection.findOne({"user1.username":"User 1"})
        res.json(user)
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// Get One
router.get('/:id', (req,res) => {
    res.send(req.params.id)
})

// Create One
router.post('/', (req,res) => {

})

// Update One
router.patch('/:id', (req,res) => {

})

// Delete One
router.delete('/:id', (req,res) => {

})
module.exports = router