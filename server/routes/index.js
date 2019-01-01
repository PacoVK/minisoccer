const express = require('express');
const router = express.Router();

const db = require('../tools/postgres');

router.post('/team', db.createTeam);

router.get('/teams', db.getAllTeams);

router.post('/drink', db.createDrink);

router.get('/drinks', db.getAllDrinks);

router.post('/order', db.createOrder);

router.get('/orders', db.calculateConsumForTeams);

router.delete('/orders', db.resetConsum);

module.exports = router;
