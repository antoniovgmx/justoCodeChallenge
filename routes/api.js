const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

// Login
// GET /
router.get('/login/', (req,res)=>{
	let response = controller.login(req.body);
	if(response.success){
		res.redirect('/hits/');
	} else {
		res.send(response);
	}
});

// Register
// POST /register
router.post('/register/', (req,res)=>{
	
});

// Logout
// GET /logout
router.get('/logout/', (req,res)=>{

});

// GET /hits
router.get('/hits/', (req,res)=>{

});

// GET /hit
router.get('/hit/', (req,res)=>{

});

// GET /hitmen
router.get('/hitmen/', (req,res)=>{

});

// GET /hitman
router.get('/hitman/', (req,res)=>{

});

// PUT /hit
router.get('/hit/update/', (req,res)=>{

});

// PUT /hitman
router.get('/hitman/update/', (req,res)=>{

});










module.exports = router