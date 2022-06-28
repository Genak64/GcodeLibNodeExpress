const parser = require('../js/ParserGcodeCadr.js');
const border = require('../js/updateBorderShape.js');

	var minX=1;
	var minY=1;
	var maxX=1;
	var maxY=1;

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
	var ReadyToAddPoint=false;
	
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
			path.points.push(parser.getPointToCadrXandY(items[i],currentPoint));
			currentPoint=parser.getPointToCadrXandY(items[i],currentPoint);
			continue;
		}
		if ((items[i].indexOf("M4")!=-1||items[i].indexOf("M3")!=-1)&&pathCreated){
			ReadyToAddPoint=true;
			path.power=parser.parseS(items[i]);
			continue;
		}
		if (items[i].indexOf("G1")!=-1&&pathCreated){
			path.speed=parser.parseF(items[i]);
			path=parser.getPathPointXY(path,items[i],currentPoint,ReadyToAddPoint);
			currentPoint=parser.getCurrentPointXY(path,items[i],currentPoint,ReadyToAddPoint);
			continue;
		}
		path=parser.getPathPointXY(path,items[i],currentPoint,ReadyToAddPoint);
		currentPoint=parser.getCurrentPointXY(path,items[i],currentPoint,ReadyToAddPoint);
	}
	
	return border.updateBorderShape(shape);
}
