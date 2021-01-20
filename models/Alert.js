const mongoose = require('mongoose');

const alertScheme = new mongoose.Schema({
	fullName: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	resturantName: {
		type: String,
		required: true,
	},
	resturantAddress: {
		type: String,
		required: true,
	},
	itemPurchased: {
		type: String,
		required: true,
	},
	dateOfPurchase: {
		type: Date,
		required: true,
	},
	symptoms: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Alert', alertScheme);
