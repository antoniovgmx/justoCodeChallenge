const { client } = require('./');

async function login(data){
	
	return({
		status: 200,
		token: 'test',
		success: true
	});

}

async function logout(data){

}

async function register(data){

}

async function getHits(data){

}

async function getHitmen(data){

}

async function getHit(data){

}

async function getHitman(data){

}

async function updateHit(data){

}

async function updateHitman(data){

}

module.exports = {
	login
}