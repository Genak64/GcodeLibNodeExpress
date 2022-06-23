/*
Parsing parts cadr g-code programm
*/
	
	function parseXY (item){
	var point={};
	item=item.toUpperCase();
	point.x=parseFloat(parseX(item));
	point.y=parseFloat(parseY(item));
	return point;
	}

	function parseS (item){
	item=item.toUpperCase();
	return parseFloat(item.slice(item.indexOf("S")+1).replace(/[,]+/g, '.')).toFixed(2);
	}

	function parseF (item){
	item=item.toUpperCase();
	return parseFloat(item.slice(item.indexOf("F")+1).replace(/[,]+/g, '.')).toFixed(2);
	}

	function parseX (item){
	item=item.toUpperCase();
	return parseFloat(item.slice(item.indexOf("X")+1).replace(/[,]+/g, '.')).toFixed(2);
	}

	function parseY (item){
	item=item.toUpperCase();
	return parseFloat(item.slice(item.indexOf("Y")+1).replace(/[,]+/g, '.')).toFixed(2);
	}

module.exports={parseXY,parseS,parseF,parseX,parseY};