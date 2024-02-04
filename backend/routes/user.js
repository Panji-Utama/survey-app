require("dotenv").config();

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);

const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = mongoose.connection;
const userCollection = db.collection("user");

//* ============= Maker Register ================ *//
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Registration failed" });
  }
});
// ============= Maker Register ================ //

//* ============= Maker Login ================ *//
router.post("/maker/auth", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email + password);
    if (!email) {
      return res.status(400).json({ error: "Please fill in the email!" });
    } else if (!password) {
      return res.status(400).json({ error: "Please fill in your password!" });
    } else {
      const user = await userCollection.findOne({
        email: email,
        // password: password,
      });

      if (!user) {
        return res.status(404).json({ error: "User not found!" });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: "Invalid password" });
      }

      const token = jwt.sign({ userId: user._id }, "secret-key", {
        expiresIn: "1h",
      });

      return res.status(200).json({ token });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});
// ============= Maker Login ================ //

//* ============= Filler Login ================ *//
router.post("/filler/auth", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Please fill in the email!" });
    } else if (!password) {
      return res.status(400).json({ error: "Please fill in your password!" });
    } else {
      const user = await userCollection.findOne({
        email: email,
        password: password,
      });

      if (!user) {
        res.status(404).json({ error: "User not found!" });
      } else {
        const { _id, username, email } = user;
        res.status(200).json({ _id, username, email });
      }
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
// ============= Filler Login ================ //

// Get All
router.get("/", async (req, res) => {
  try {
    // res.send("Hello World")
    const user = await userCollection.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get One
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

// Create One
router.post("/", (req, res) => {});

// Update One
router.patch("/:id", (req, res) => {});

// Delete One
router.delete("/:id", (req, res) => {});
module.exports = router;
