var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var bodyParser=require("body-parser");

var app     = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/api', function(req, res){

var searchvar='DCBBANK';
var shaVa='shareprice'
var share='https://www.google.co.in/search?q='+searchvar+shaVa;


    request(share, function(error, response, html){
        if(!error){
		  var $ = cheerio.load(html);
            var company = [], pClose = [], currentPrice = [], change = [];
            var json = [];
			var classN='._FOc';
            var span = $('div');
      
			 
	 span.each(function(i, elem) {
				 company[i] = $(this).find('span b').eq(0).text().trim();
				  if(company[i]!=""){
				  json.push({
           company : company[i]
                });
				  return false;
				  }
             });
            console.log('loop completed');
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(json));
            console.log('done');

        }
})

})
app.post('/getPrice', function(req, res){

var searchSym=req.body.name;
console.log(searchSym);

var searchvar='DCBBANK';
var shaVa='shareprice'
var share='https://www.google.co.in/search?q='+searchSym+shaVa;
   

    request(share, function(error, response, html){
        if(!error){
		  var $ = cheerio.load(html);
            var company = [], pClose = [], currentPrice = [], change = [];
            var json = [];
			  var span = $('div');
       
	 span.each(function(i, elem) {
								 company[i] = $(this).find('span b').eq(0).text().trim();
								 
									if(company[i]!=""){
														json.push({
																company : company[i]
																});
													return false;
													}
								});

            console.log('loop completed');

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(json));
            console.log('done');
            
            
        }
})


})

app.get('/getContPrice', function(req, res){

function intervalFunc() {
  console.log('Cant stop me now!');
  
var searchvar='DCBBANK';
var shaVa='shareprice'
var share='https://www.google.co.in/search?q='+searchvar+shaVa;
   

    request(share, function(error, response, html){
        if(!error){
		  var $ = cheerio.load(html);
            var company = [], pClose = [], currentPrice = [], change = [];
            var json = [];
			  var span = $('div');
       
	 span.each(function(i, elem) {
								 company[i] = $(this).find('span b').eq(0).text().trim();
								 
									if(company[i]!=""){
														json.push({
																company : company[i]
																});
													return false;
													}
								});

            console.log('loop completed');

            // res.setHeader('Content-Type', 'application/json');
            // res.send(JSON.stringify(json));
            console.log(json[0].company+'done');
            
            
        }
})
}

setInterval(intervalFunc, 1500);

})





app.listen('3000');
console.log('Server Started... localhost:3000');
