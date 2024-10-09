const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    image: {
        type: String,

    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
}, { timestamps: true });

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;