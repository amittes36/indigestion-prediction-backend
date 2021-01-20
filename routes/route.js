const express = require('express');
const Alert = require('../models/Alert');
const router = express.Router();

//Post add alert
router.post('/addAlert', async (req, res, next) => {
	const alertInfo = req.body;
	const alert = new Alert({
		fullName: alertInfo.fullName,
		address: alertInfo.address,
		resturantName: alertInfo.resturantName,
		resturantAddress: alertInfo.resturantAddress,
		itemPurchased: alertInfo.itemPurchased,
		dateOfPurchase: alertInfo.dateOfPurchase,
		symptoms: alertInfo.symptoms,
	});
	const validateError = alert.validateSync();
	if (validateError) {
		const unValidField = Object.keys(error.errors)[0];
		const errorPath = error.errors[`${unValidField}`].properties.path;
		const errMessage = error.errors[`${errorPath}`].properties.message;
		return res.status(400).json(errMessage);
	}

	try {
		await alert.save();
	} catch (error) {
		res.status(400).send(error);
	}
	res.status(200).send('alert was added');
});

//Get all resturants
router.get('/resturants', (req, res, next) => {
	res.status(200).send('resturants');
});

router.get('/test', (req, res, next) => {
	res.status(200).send('test');
});

//Get resturant prediction
router.get('/prediction', (req, res, next) => {
	res.status(200).send('prediction');
});

//Get resturant by id
router.get('/resturant/:id', (req, res, next) => {
	const id = req.params.id;
	res.status(200).send(id);
});

//Get user by id (admin)
router.get('/user/:id', (req, res, next) => {
	const id = req.params.id;
	res.status(200).send(id);
});

module.exports = router;
