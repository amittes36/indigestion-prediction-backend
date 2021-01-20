const mongoose = require('mongoose');

const restaurantsScheme = new mongoose.Schema({});

module.exports = mongoose.model('Restaurants', restaurantsScheme);
