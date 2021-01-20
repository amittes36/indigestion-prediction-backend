const mongoose = require('mongoose');

const inspectionsScheme = new mongoose.Schema({});

module.exports = mongoose.model('Inspections', inspectionsScheme);
