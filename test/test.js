/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	data = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'datasets-nightingales-rose', function tests() {

	it( 'should export an array', function test() {
		expect( data ).to.be.an( 'array' );
	});

	it( 'should be an object array', function test() {
		for ( var i = 0; i < data.length; i++ ) {
			assert.isObject( data[ i ] );
		}
	});

});
