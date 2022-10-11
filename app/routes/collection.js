var fs = require('fs');
var express = require('express');
var router = express.Router();

const library = require('js-svg-path');

var sp = require('../js/svgToShape.js');

/* GET collection page. */
router.get('/', function(req, res, next) {
	
	//sp.svgpr();
	
	
	fs.readdir('./collection/',(err,files)=>{
		if (err) throw err;
		console.log(files);
	
		var listFiles = [];
		var listNames = new Array (files.length);
		
		//var fileInfo;
		
		for (var i=0; i<files.length; i+=2){
			var fileInfo;
			fs.readFile('./collection/'+files[i+1], 'utf8', (err, data) => {
				if (err) throw err;
				fileInfo = JSON.parse(data);
				listNames[i]='hghg';//fileInfo.originalname;
				
				
			});
			
			console.log(fileInfo);
		//	listNames.push(fileInfo.originalname);
		//	console.log(listNames);
		//	res.render('collection', { title: 'G-code viewer',itemsVisible: true, items: listNames });
		}
		console.log('hjhjhj'+listNames);
		res.render('collection', { title: 'G-code viewer',itemsVisible: true, items: listNames });
	});
	
  //res.render('collection', { title: 'G-code viewer' });
});

/* Add item to collection */
router.get('/add', function(req,res,next){
	var fname = req.query.fname;
	
	console.log("rout add: "+fname);


	fs.rename('./uploads/'+fname, './collection/'+fname, (err)=>{
		if (err) throw err;
		console.log('source.txt was copied to destination.txt');
	}); 
	
	fs.rename('./uploads/'+fname+'.JSON', './collection/'+fname+'.JSON', (err)=>{
		if (err) throw err;
		console.log('source.txt was copied to destination.txt');
	});
	/*
	fs.rm('./uploads/', (err)=>{
		if (err) throw err;
		console.log('delete all');
	});
	*/
	
	res.sendStatus(200);
});

module.exports = router;
