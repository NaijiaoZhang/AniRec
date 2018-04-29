const express = require('express');
const router = express.Router();
const request = require('request');

router.get("/test", function(req, res) {
	request('https://anime-recommender-system.herokuapp.com/queryanime?id=5&number=100', function (error, response, body) {
	    console.log('error:', error); // Print the error if one occurred
	    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	    console.log('body:', body); // Print the HTML for the Google homepage.
	    res.status(response.statusCode).send(response);
	});
});

module.exports = router;