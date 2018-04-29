const express = require('express');
const router = express.Router();
const request = require('request');
const anime = require('./anime_id.json')

router.get("/simAnime/:anime", function(req, res) {
	console.log(req.params.anime);
	var id = anime[req.params.anime];
	var id = id-1;
	request('https://anime-recommender-system.herokuapp.com/queryanime?id='+id+'&number=5', function (error, response, body) {
	    var similarAnimesId = JSON.parse(response.body);
	    similarAnimesId=similarAnimesId["top_animes"];
	    similarAnimesName = [];
	    for(var i=0;i<similarAnimesId.length;i++){
	    	for(var key in anime){
	    		if(anime[key]-1==similarAnimesId[i]){
	    			similarAnimesName.push(key);
	    		}
	    	}
	    }
	    console.log(similarAnimesName);
	    res.status(response.statusCode).send({"results":similarAnimesName});
	});
});

router.get("/allanime", function(req, res) {
	res.status(200).send(anime);
});

module.exports = router;