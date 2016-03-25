var webpack = require('webpack');
var path = require('path');

var config = {
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel?optional[]=runtime&stage=0'],
      exclude: /node_modules/
    }, {
      test: /\.css?$/,
      loaders: ['style', 'raw']
    }, {
      test: /\.scss?$/,
      loader: 'style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
    }, {
      loader: 'url-loader?limit=100000',
      test: /\.(gif|jpg|png|woff.*|woff2|eot.*|otf.*|ttf.*|svg)$/
    }]
  }
};

webpack(config, function(err,stats){
  if(err){
    console.log(err);
  } else {
    console.log(stats);
    console.log('---BUNDLE CREATED FOR GH-PAGES BRANCH---');
  }
});
