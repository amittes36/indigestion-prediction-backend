const express = require('express');
const Restaurants = require('../models/restaurants');
const Inspections = require('../models/inspections');
const Alert = require('../models/Alert');
const router = express.Router();

//Post add alert
router.post('/addAlert', async (req, res, next) => {
	console.log(req.body);
	const alertInfo = req.body;
	const alert = new Alert({
		fullName: alertInfo.fullName,
		address: alertInfo.address,
		restaurantName: alertInfo.restaurantName,
		restaurantAddress: alertInfo.restaurantAddress,
		License: alertInfo.License,
		itemPurchased: alertInfo.itemPurchased,
		dateOfPurchase: alertInfo.dateOfPurchase,
		timeOfPurchase: alertInfo.timeOfPurchase,
		symptoms: alertInfo.symptoms,
	});
	// const validateError = alert.validateSync();
	// if (validateError) {
	// 	const unValidField = Object.keys(error.errors)[0];
	// 	const errorPath = error.errors[`${unValidField}`].properties.path;
	// 	const errMessage = error.errors[`${errorPath}`].properties.message;
	// 	return res.status(400).json(errMessage);
	// }

	try {
		await alert.save();
	} catch (error) {
		res.status(400).send(error);
	}
	res.status(200).send('alert was added');
});

//Get all restaurants
router.get('/restaurants', async (req, res, next) => {
	try {
		const restaurants = await Restaurants.find();
		res.status(200).send(restaurants);
	} catch {
		console.error(err.massage);
		res.status(500).send('Server error');
	}
});

//Get inspection of restaurant
router.get('/inspections/:license', async (req, res, next) => {
	try {
		const license = Number(req.params.license);
		const inspections = await Inspections.find({ License: license });
		if (inspections) res.status(200).send(inspections);
		else {
			return res.status(400).send('Didnt find the restaurant');
		}
	} catch {
		console.error(err.massage);
		res.status(500).send('Server error');
	}
});
//Get resturant prediction
router.get('/prediction', (req, res, next) => {
	res.status(200).send('prediction');
});

//Get resturant by id
router.get('/restaurants/:license', async (req, res, next) => {
	try {
		const license = Number(req.params.license);
		const restaurants = await Restaurants.find({ License: license });
		if (restaurants) res.status(200).send(restaurants);
		else {
			return res.status(400).send('Didnt find the restaurant');
		}
	} catch {
		console.error(err.massage);
		res.status(500).send('Server error');
	}
});

//Get user by id (admin)
router.get('/user/:id', (req, res, next) => {
	const id = req.params.id;
	res.status(200).send(id);
});

//Get alerts by restaurant's license
router.get('/alerts/:license', async (req, res, next) => {
	try {
		const license = Number(req.params.license);
		const alerts = await Alert.find({ License: license });
		if (alerts) res.status(200).send(alerts);
		else {
			return res.status(400).send("Didn't find the alerts for that restaurant");
		}
	} catch {
		console.error(err.massage);
		res.status(500).send('Server error');
	}
});

router.get('/restaurantsAlerts', async (req, res, next) => {
	try {
		const restaurants = await Restaurants.find();
			for (let i = 0; i < restaurants.length; i++){
				const alerts = await Alert.find({ License: restaurants[i].License });
				if (alerts) {
					const recentAlerts = alerts.filter(alert => {
						return (alert.dateOfPurchase === "2021-01-18" || "2021-01-17" || "2021-01-16" || "2021-01-15")
					})
					console.log(recentAlerts.length)
					let rest = restaurants[i]
					rest["NumberOfAlerts"] = recentAlerts.length
				}
				else {
					return res.status(400).send("Didn't find the alerts for that restaurant");
				}
			}
			res.status(200).send(restaurants);
		}
	catch {
		console.error(err.massage);
		res.status(500).send('Server error');
	}
});


module.exports = router;
