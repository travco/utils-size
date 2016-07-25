var preprocessor = require('suitcss-preprocessor');
var fs = require('fs');

var css = fs.readFileSync('index.css', 'utf8');

preprocessor(css, {
  root: '.',
  minify: false,
  variables: {
  	mediaBreakpoints: '-xsm-, -sm-, -md-, -lg-, -xlg-',
	  maxDivisions: '12'
	},
	use : [
		'postcss-easy-import',
    'postcss-custom-properties',
    'postcss-each',
    'postcss-for',
    'postcss-calc',
    'postcss-custom-media',
    'autoprefixer',
    'postcss-reporter'
  ]
}).then(function(result) {
  fs.writeFileSync('build/build.css', result.css);
});