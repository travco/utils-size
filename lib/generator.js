var preprocessor = require('suitcss-preprocessor');
var fs = require('fs');

var css = fs.readFileSync('index.css', 'utf8');

// Dynamic Generation parameters now located in index.css

preprocessor(css, {
  root: '.',
  minify: false,
  // Use param not explictly required, but a good fallback to have.
	use : [
		'postcss-easy-import',
    'postcss-at-rules-variables',
    'postcss-custom-properties',
    'postcss-each',
    'postcss-for',
    'postcss-calc',
    'postcss-custom-media',
    'autoprefixer',
    'postcss-reporter'
  ]
}).then(function(result) {
    console.log('CANARY WRITE');
    fs.writeFileSync('build/build.css', result.css);
  },
  function(error) {
    console.log('CANARY ERROR');
    console.log(JSON.stringify(error) );
  }
);