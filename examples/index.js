'use strict';

var data = require( './../lib' );

var len = data.length,
	scalar,
	d, i;

// Calculate the average annual mortality per 1000 for each cause, as done by Nightingale. See http://understandinguncertainty.org/node/214.
for ( i = 0; i < len; i++ ) {
	d = data[ i ];
	scalar = 1000*12 / d.army_size;
	d.disease = d.disease * scalar;
	d.wounds = d.wounds * scalar;
	d.other = d.other * scalar;
}
console.dir( data );
