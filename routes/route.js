const express = require('express');
const router = express.Router();

//Post add alert
router.post('/addAlert', (req, res, next) => {
	res.status(200).send('addAlert');
});

//Get all resturants
router.get('/resturants', (req, res, next) => {
	res.status(200).send('resturants');
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
