var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/api', function(req, res){

var urls='https://money.rediff.com/companies/Dcb-Bank-Ltd';
var urlse='https://money.rediff.com/companies/Delta-Corp-Ltd';

var share='https://www.google.co.in/search?q=federal+bank+share+price';
var searchvar='southindiabank';
var shaVa='shareprice'
var share='https://www.google.co.in/search?q='+searchvar+shaVa;

var sym='DCBBANK';
var nseurl='https://www.nseindia.com/live_market/dynaContent/live_watch/get_quote/GetQuote.jsp?symbol='+sym;
var useU='https://www.nseindia.com/live_market/dynaContent/live_watch/get_quote/GetQuote.jsp?symbol=DCBBANK';
var url = 'http://money.rediff.com/gainers/nse/daily/nifty';
    request(share, function(error, response, html){
        if(!error){
		  var $ = cheerio.load(html);
            var company = [], pClose = [], currentPrice = [], change = [];
            var json = [];
			var classN='._FOc';
            var span = $('div');
            var total = span.find('tr').length;
            console.log('loop started');
			
			var className='._Rnb.fmob_pr.fac-l';
			var element = $("span[class='_Rnb fmob_pr fac-l']");
				var elementg = $("div[class='_FOc']");
			

		//	console.log(elementg);
			// console.log(element+"dd"+ $('span').filter('._Rnb').attr('class') );
			var el=$(className);

console.log("el"+el);			
// _FOc
				 elementg.each(function(i, elem) {

				 console.log("__"+ $(this));
				 	
             });
			 
	 span.each(function(i, elem) {
		 
                // company[i] = $(this).find('td a').eq(0).text().trim();
                // pClose[i] = $(this).find('td').eq(1).text().trim();
                // currentPrice[i] = $(this).find('td').eq(2).text().trim();
                // change[i] = $(this).find('td font').eq(0).text().trim();

                // json.push({
                    // company : company[i], 
                    // pClose : pClose[i], 
                    // currentPrice: currentPrice[i], 
                    // change : change[i]
                // });
				// console.log(error);
				 // console.log("i"+$(this).text());
				 company[i] = $(this).find('span b').eq(0).text().trim();
				  if(company[i]!=""){
				  json.push({
           company : company[i]
                });
				  return false;
				 console.log("__"+ $(this));
				 	 console.log("__"+ company[i]+"--");
				  }
             });
		// console.log(span.text());
		

	
//_Rnb fmob_pr fac-l
		   // tbody.find('tr').each(function(i, elem) {
                // company[i] = $(this).find('td a').eq(0).text().trim();
                // pClose[i] = $(this).find('td').eq(1).text().trim();
                // currentPrice[i] = $(this).find('td').eq(2).text().trim();
                // change[i] = $(this).find('td font').eq(0).text().trim();

                // json.push({
                    // company : company[i], 
                    // pClose : pClose[i], 
                    // currentPrice: currentPrice[i], 
                    // change : change[i]
                // });
				// console.log(error);
            // });
			
			
            console.log('loop completed');

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(json));
            console.log('done');
            
            
        }
})


})

app.listen('3000');
console.log('Server Started... localhost:3000');
