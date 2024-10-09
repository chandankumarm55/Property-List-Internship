const express = require('express');
const multer = require('multer');
const Property = require('../models/Property');
const router = express.Router();

// Set up multer for image upload
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

// POST route to add a new property
router.post('/', upload.single('image'), async(req, res) => {
    try {
        const { title, description, price } = req.body;
        const image = req.file ? req.file.path : null;

        if (!title || !description || !price) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newProperty = new Property({
            image,
            title,
            description,
            price,
        });

        await newProperty.save();
        res.status(201).json({ message: 'Property created successfully', property: newProperty });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// GET route to fetch all properties
router.get('/', async(req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// GET route to fetch a single property by ID
router.get('/:id', async(req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json(property);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// PUT route to update a property
router.put('/:id', upload.single('image'), async(req, res) => {
    try {
        const { title, description, price } = req.body;
        const image = req.file ? req.file.path : null;

        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        // Update fields
        property.title = title || property.title;
        property.description = description || property.description;
        property.price = price || property.price;
        property.image = image || property.image;

        await property.save();
        res.status(200).json({ message: 'Property updated successfully', property });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// DELETE route to remove a property
router.delete('/:id', async(req, res) => {
    try {
        const property = await Property.findByIdAndDelete(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json({ message: 'Property deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;