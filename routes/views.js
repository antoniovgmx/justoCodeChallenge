const express = require('express');
const router = express.Router();

// Login
// GET /

router.get('/', (req,res)=>{
	res.render('login', {
		layout: 'auth'
	});
});

// Register
// GET /register

router.get('/register/', (req,res)=>{
	res.render('register', {
		layout: 'auth'
	});
});

// hits
// GET /hits

router.get('/hits/', (req,res)=>{
	res.send('Hits');
});



module.exports = router