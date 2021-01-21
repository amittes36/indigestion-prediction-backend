const mongoose = require('mongoose');

const restaurantsScheme = new mongoose.Schema({
    DBA_Name: {
        type: String,
        required: true,
    },
    License: {
        type: String,
        required: true,
    },
    NumberOfAlerts: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Restaurants', restaurantsScheme);
