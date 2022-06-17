
//console.log(gcodeToShape.getShape(gcodeFile));



var sh=gcodeToShape.getShape(gcodeFile);


//console.log(translateX(sh,10));

//drawing.paint(sh,'canv');
//drawing.setView(500,500);
//drawing.setColor("red");
//drawing.paint(sh,'canv');
//drawing.paint(transformShape.translateXY(sh,10,10),'canv');


//var sp=JSON.parse(JSON.stringify(orig));

//tr=transformShape.translateX(orig,110);

//sp=transformShape.split(sp,tr);

//tr=transformShape.translateX(orig,220);

//sp=transformShape.split(sp,tr);

var orig=gcodeToShape.getShape(gcodeFile);

//sp=copyShapeFromX(orig,5,2);
//oksp=copyShapeFromY(sp,5,2)

oksp=transformShape.dublicate(orig,8,7,10);
drawing.setView(1000,800);
drawing.paint(oksp,'canv');

var p=new gParser();
console.log(p);
console.log(p.cadresToShape(gcodeFile));
console.log(gParser.createGcode(orig));
/*
var data=(function (){
	var shape={
		pathes:[]
	};
	
	function createPath(){
			var path=[];
			path.push({x:0,y:0});
			shape.pathes.push(path);
			return shape;
		}
	
	
	return {
		addPath: function (){
			createPath();
			
		},
		getShape: function (){
			return shape;
		}
	}
}());

data.addPath();
data.addPath();
data.addPath();

console.log(data.getShape());
*/