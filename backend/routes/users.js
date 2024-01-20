const express = require('express')
const router = express.Router()

// Get All
router.get('/', async (req, res) => {
    try {
    //   const user = db.collection('users')
    //   const users = await user.findOne();
    //   res.json(users);
        res.send("Hello World")
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