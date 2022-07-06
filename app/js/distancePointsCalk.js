/*
Get distance points with coordinats x1,y1 and x2,y2
*/
function getDistance(x1,y1,x2,y2){
	return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
}

module.exports={getDistance};