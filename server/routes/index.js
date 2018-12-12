const express = require('express');
const router = express.Router();

const db = require('../tools/postgres');

router.get('/hello', (req, res) => {
        res.status(200).json({message: 'Hello from Backend!'});
    }
);

router.post('/team', db.createTeam);

router.get('/teams', db.getAllTeams);

router.post('/drink', (req,res) => {

});

router.get('/drinks', (req,res) => {

});

router.post('/order', (req,res) => {

});

router.get('/orders', db.calculateConsumForTeams);

module.exports = router;
