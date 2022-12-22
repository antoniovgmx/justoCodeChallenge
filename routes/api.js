const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

// Login
// GET /

router.get('/login/', (req,res)=>{
	
	res.send(controller.login());
});

// Register
// GET /register

router.get('/register/', (req,res)=>{
	res.redirect('/hits');
});

// hits
// GET /hits

router.get('/hits/', (req,res)=>{
	res.send('Hits');
});



module.exports = router