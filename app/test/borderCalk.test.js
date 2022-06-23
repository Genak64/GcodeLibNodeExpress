const assert = require('assert');
const borderCalk = require ('../js/borderCalk.js');

describe('Test getMinX(minX,x)', ()=>{
	
	x=[0,0.1,3,-0.1,-5];
	minX=0;
	
	for(item in x){
		it('(minX='+minX+',x='+x[item]+') get '+borderCalk.getMinX(minX,x), () => {
			
		  assert.equal(borderCalk.getMinX(minX,x), 0);
		});		
	}

	it('(minX='+1+',x='+0+') get '+borderCalk.getMinX(1,0), () => {
			
	  assert.equal(borderCalk.getMinX(1,0), 0);
	});		
	
	it('(minX='+1+',x='+2+') get '+borderCalk.getMinX(1,2), () => {
			
	  assert.equal(borderCalk.getMinX(1,2), 1);
	});
	
	it('(minX='+1+',x='+0.5+') get '+borderCalk.getMinX(1,0.5), () => {
			
	  assert.equal(borderCalk.getMinX(1,0.5), 0.5);
	});
	
	it('(minX='+1+',x='+-1+') get '+borderCalk.getMinX(1,-1), () => {
			
	  assert.equal(borderCalk.getMinX(1,-1), -1);
	});

	it('(minX='+0+',x='+-1+') get '+borderCalk.getMinX(0,-1), () => {
			
	  assert.equal(borderCalk.getMinX(0,-1), -1);
	});

	
});


describe('Test getMinY(minY,y)', ()=>{
	
	y=[0,0.1,3,-0.1,-5];
	minY=0;
	
	for(item in y){
		it('(minY='+minY+',y='+x[item]+') get '+borderCalk.getMinY(minY,y), () => {
			
		  assert.equal(borderCalk.getMinY(minY,y), 0);
		});		
	}

	it('(minY='+1+',y='+0+') get '+borderCalk.getMinY(1,0), () => {
			
	  assert.equal(borderCalk.getMinY(1,0), 0);
	});		
	
	it('(minY='+1+',y='+2+') get '+borderCalk.getMinY(1,2), () => {
			
	  assert.equal(borderCalk.getMinY(1,2), 1);
	});
	
	it('(minY='+1+',y='+0.5+') get '+borderCalk.getMinY(1,0.5), () => {
			
	  assert.equal(borderCalk.getMinY(1,0.5), 0.5);
	});
	
	it('(minY='+1+',y='+-1+') get '+borderCalk.getMinY(1,-1), () => {
			
	  assert.equal(borderCalk.getMinY(1,-1), -1);
	});

	it('(minY='+0+',y='+-1+') get '+borderCalk.getMinY(0,-1), () => {
			
	  assert.equal(borderCalk.getMinY(0,-1), -1);
	});

	
});
