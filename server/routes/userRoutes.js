const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// Get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Create a new user
router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
});


module.exports = router;
