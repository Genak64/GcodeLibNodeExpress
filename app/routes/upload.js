var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer  = require("multer");

const upload = multer({dest:"uploads"});

var sp = require('../js/gcodeToShape.js');
 

router.post("/upload", upload.single("filedata"), function (req, res, next) {
   
    let filedata = req.file;
 
    console.log(filedata);
	console.log(filedata.filename);
	
	
	
	
    if(!filedata){
//	res.sendStatus(500);
	res.send("Ошибка при загрузке файла");
	}
    else {
//		res.send("Файл загружен");

	
	var data;
	fs.readFile('uploads/'+filedata.filename, 'utf8', (err, data) => {
	  if (err) throw err;
		var gcode=data.split('\r\n');
	  res.send(JSON.stringify(sp.getShape(gcode)));
	});
	
	}
	

});



module.exports = router;
