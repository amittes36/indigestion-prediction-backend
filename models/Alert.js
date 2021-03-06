const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	restaurantName: {
		type: String,
		required: true,
	},
	restaurantAddress: {
		type: String,
		required: true,
	},
	License: {
		type: Number,
		required: true
	},
	itemPurchased: {
		type: String,
		required: true,
	},
	dateOfPurchase: {
		type: String, //change to date!
		required: true,
	},
	timeOfPurchase: {
		type: String, //change to date!
		required: true
	},
	symptoms: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Alert', alertSchema);
