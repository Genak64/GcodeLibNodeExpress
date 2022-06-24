const parser = require('../js/ParserGcodeCadr.js');
const border = require('../js/updateBorderShape.js');

	var minX=0;
	var minY=0;
	var maxX=0;
	var maxY=0;

	
function getPointToCadrX(cadr,currentPoint){
	point = {};
	point.x=parseFloat(parser.parseX(cadr));
	point.y=parseFloat(currentPoint.y);
	return point;
}	

function getPointToCadrY(cadr,currentPoint){
	point = {};
	point.y=parseFloat(parser.parseY(cadr));
	point.x=parseFloat(currentPoint.x);
	return point;
}	
	
function getPointToCadrXorY(cadr,currentPoint){
	if (cadr.indexOf("X")!=-1) {
		return getPointToCadrX(cadr,currentPoint);
	} 
	if (cadr.indexOf("Y")!=-1) {
		return getPointToCadrY(cadr,currentPoint);
	}
	return currentPoint;			
}

function getPointToCadrXandY(cadr,currentPoint){
	point = {};
	point=parser.parseXY(cadr);
	return point;			
}
	


//Converting g-code and getting shape 
//	items - string array	

module.exports.getShape = function (items){

	var shape=[];
	var path={
		points:[]
	};
	var point={};
	var currentPoint={};
	var pathCreated=false;
	var RedyToAddPoint=false;
	
	currentPoint.x=0;
	currentPoint.y=0;
	
	
	for(i=0; i<items.length;i++){
		
		if (items[i].indexOf("M5")!=-1&&pathCreated){
			
			if (pathCreated){
				shape.push(path);
				pathCreated=false;
			}
			continue;
		}

		if (items[i].indexOf("G0")!=-1&&!pathCreated){
			pathCreated=true;
			path={
				points:[]
			};
			
			path.points.push(getPointToCadrXandY(items[i],currentPoint));
			currentPoint=getPointToCadrXandY(items[i],currentPoint);
			
			continue;
		}
		if ((items[i].indexOf("M4")!=-1||items[i].indexOf("M3")!=-1)&&pathCreated){
			RedyToAddPoint=true;
			path.power=parser.parseS(items[i]);
			continue;
		}
		if (items[i].indexOf("G1")!=-1&&pathCreated){
			path.speed=parser.parseF(items[i]);
			
			if (items[i].indexOf("X")!=-1&&items[i].indexOf("Y")!=-1&&RedyToAddPoint){

				path.points.push(getPointToCadrXandY(items[i],currentPoint));
				currentPoint=getPointToCadrXandY(items[i],currentPoint);
				
			} else {
				
			path.points.push(getPointToCadrXorY(items[i],currentPoint));
			currentPoint=getPointToCadrXorY(items[i],currentPoint);
			}
			continue;
		}
		if (items[i].indexOf("X")!=-1&&items[i].indexOf("Y")!=-1&&RedyToAddPoint){
			
			path.points.push(getPointToCadrXandY(items[i],currentPoint));
			currentPoint=getPointToCadrXandY(items[i],currentPoint);
			
		} else {
			
			path.points.push(getPointToCadrXorY(items[i],currentPoint));
			currentPoint=getPointToCadrXorY(items[i],currentPoint);
		}
	
	}
	
	return border.updateBorderShape(shape);
}
