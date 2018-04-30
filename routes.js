const express = require('express');
const router = express.Router();
const request = require('request');
const anime = require('./anime_id.json');
const animeinfo = require('./tv_images.json');

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
	    			var result={};
	    			if(animeinfo[key]!=null){
	    				result = {
	    					"name":key,
	    					"url":animeinfo[key]['image_url'],
	    					"genre":animeinfo[key]['genre']
	    				}
	    			}
	    			else{
	    				result ={
	    					"name":key,
	    					"url":"https://myanimelist.cdn-dena.com/images/anime/7/46983.jpg",
	    					"genre":"N/A"
	    				}
	    			}
	    			similarAnimesName.push(result);
	    		}
	    	}
	    }
	    res.status(response.statusCode).send({"results":similarAnimesName});
	});
});

router.post("/predictRating", function(req,res){
	console.log(req.body);
	var options = {
	  method: 'POST',
	  url: 'http://localhost:5000/queryuser',
	  body: req.body,
	  json: true 
	    // JSON stringifies the body automatically
	}
// ​
	request(options, function(error,response,body){
		res.status(200).send(body);
	});
});

router.get("/allanime", function(req, res) {
	res.status(200).send(anime);
});

module.exports = router;