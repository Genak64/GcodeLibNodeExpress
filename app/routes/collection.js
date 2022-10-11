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
		
		res.render('collection', { title: 'G-code viewer',itemsVisible: true, items: files });
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
