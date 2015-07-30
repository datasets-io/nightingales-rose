Nightingale's Rose
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Dataset for [Florence Nightingale](https://en.wikipedia.org/wiki/Florence_Nightingale)'s famous [polar area diagram](https://en.wikipedia.org/wiki/Polar_area_diagram).

<div class="image" align="center">
	<a href="http://bl.ocks.org/kgryte/raw/5926740/"><img src="https://cdn.rawgit.com/datasets-io/nightingales-rose/2b1a7e24a315a725663f98a60fcf18bf1834e0cd/docs/img/charts.png" alt="Nightingale's famous polar area diagram."></a>
	<br>
</div>

## Installation

``` bash
$ npm install datasets-nightingales-rose
```


## Usage

``` javascript
var data = require( 'datasets-nightingales-rose' );
```

#### data

Dataset for [Florence Nightingale](https://en.wikipedia.org/wiki/Florence_Nightingale)'s famous [polar area diagram](https://en.wikipedia.org/wiki/Polar_area_diagram).

``` javascript
console.log( data );
/*
	[
		{
			"date": "1854-04-01T07:00:00.000Z",
			"army_size": 8571,
			"disease": 1,
			"wounds": 0,
			"other": 5
		},
		...
	]
*/
```


## Examples

``` javascript
var data = require( 'datasets-nightingales-rose' );

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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## References

*	Nightingale, Florence. [*A contribution to the sanitary history of the British army during the late war with Russia*](http://ocp.hul.harvard.edu/dl/contagion/010164675). London: John W. Parker and Son, West Strand, 1859. Print. 


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/datasets-nightingales-rose.svg
[npm-url]: https://npmjs.org/package/datasets-nightingales-rose

[travis-image]: http://img.shields.io/travis/datasets-io/nightingales-rose/master.svg
[travis-url]: https://travis-ci.org/datasets-io/nightingales-rose

[codecov-image]: https://img.shields.io/codecov/c/github/datasets-io/nightingales-rose/master.svg
[codecov-url]: https://codecov.io/github/datasets-io/nightingales-rose?branch=master

[dependencies-image]: http://img.shields.io/david/datasets-io/nightingales-rose.svg
[dependencies-url]: https://david-dm.org/datasets-io/nightingales-rose

[dev-dependencies-image]: http://img.shields.io/david/dev/datasets-io/nightingales-rose.svg
[dev-dependencies-url]: https://david-dm.org/dev/datasets-io/nightingales-rose

[github-issues-image]: http://img.shields.io/github/issues/datasets-io/nightingales-rose.svg
[github-issues-url]: https://github.com/datasets-io/nightingales-rose/issues
