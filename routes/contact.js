// routes/contact.js
const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

// POST route to create a new contact inquiry
router.post('/', async(req, res) => {
    try {
        const { name, phone, email, message } = req.body;

        // Validate the input fields
        if (!name || !phone || !email || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newContact = new Contact({
            name,
            phone,
            email,
            message,
        });

        await newContact.save();
        res.status(201).json({ message: 'Inquiry submitted successfully', contact: newContact });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// GET route to fetch all contact inquiries
router.get('/', async(req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;