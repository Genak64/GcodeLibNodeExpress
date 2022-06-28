const assert = require('assert');
const parser = require ('../js/ParserGcodeCadr.js');

describe('Test parseX(cadr)', ()=>{
	
	cadr='X10.15Y15.35';
	
	it('(Cadr='+cadr+') get '+parser.parseX(cadr), () => {
	  assert.equal(parser.parseX(cadr), 10.15);
	});	

	cadr='X10,15Y15.35';
	
	it('(Cadr='+cadr+') get '+parser.parseX(cadr), () => {
	  assert.equal(parser.parseX(cadr), 10.15);
	});
	
	cadr='Y15.35X10,15';
	
	it('(Cadr='+cadr+') get '+parser.parseX(cadr), () => {
	  assert.equal(parser.parseX(cadr), 10.15);
	});
	
	cadr='X 10.15 Y 15.35';
	
	it('(Cadr='+cadr+') get '+parser.parseX(cadr), () => {
	  assert.equal(parser.parseX(cadr), 10.15);
	});
	
	cadr='G1X10.15Y15.35F1000';
	
	it('(Cadr='+cadr+') get '+parser.parseX(cadr), () => {
	  assert.equal(parser.parseX(cadr), 10.15);
	});
	
});

describe('Test parseY(cadr)', ()=>{
	
	cadr='X10.15Y15.35';
	
	it('(Cadr='+cadr+') get '+parser.parseY(cadr), () => {
	  assert.equal(parser.parseY(cadr), 15.35);
	});	

	cadr='X10,15Y15,35';
	
	it('(Cadr='+cadr+') get '+parser.parseY(cadr), () => {
	  assert.equal(parser.parseY(cadr), 15.35);
	});
	
	cadr='Y15,35X10,15';
	
	it('(Cadr='+cadr+') get '+parser.parseY(cadr), () => {
	  assert.equal(parser.parseY(cadr), 15.35);
	});
	
	cadr='X 10.15 Y 15.35';
	
	it('(Cadr='+cadr+') get '+parser.parseY(cadr), () => {
	  assert.equal(parser.parseY(cadr), 15.35);
	});
	
	cadr='G1X10.15Y15.35F1000';
	
	it('(Cadr='+cadr+') get '+parser.parseY(cadr), () => {
	  assert.equal(parser.parseY(cadr), 15.35);
	});
	
});




