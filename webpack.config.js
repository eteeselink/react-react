var path = require('path');
var webpack = require('webpack');
var strict_loader = __dirname + "/strict-loader.js";

// make React available in each module
var globalRequires = {
  React: "react"
};

module.exports = {
  cache: true,
  entry: './src/www/app/app.jsx',

  output: {
    filename: "www/app/app-bundle.js",
    path: __dirname + "/src"
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: strict_loader + "!jshint-loader!jsx-loader?harmony&insertPragma=React.DOM"},
      { test: /\.css$/, loader:  "style-loader!css-loader"},
      { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader?import=" + __dirname + "/src/www/app/lib.styl"}
    ],
  },

  plugins: [
    new webpack.ProvidePlugin(globalRequires),

    // hack to avoid displaying the React Devtools warning
    new webpack.DefinePlugin({
      'console.debug': function(text){
        if (text.indexOf('Download the React DevTools') !== 0)
          console.debug(text);
      }
    })
  ],

  resolveLoader: { 
    // add node_modules to module PATH so that e.g. require("jsx-loader") loads from node_modules/react
    root: path.join(__dirname, "node_modules") 
  },

  resolve: {
    // allow require('file') instead of require('file.jsx')
    extensions: ['', '.js', '.jsx', '.json'] ,
    root: [
      __dirname + "/src/www/app",
      __dirname + "/src/www/app/view"    // add view to root for shorter require()s across JSX components
    ]
  },

  // load stylus libraries
  stylus: {
    use: [
      require('jeet')(),
      require('nib')(),
//      ,require('rupture')()
    ]
  },

  jshint: {
    camelcase: false,   // force camelCase variable naming
    eqeqeq: true,      // disallow == and !=; only === and !===
    indent: 4,         // 4 spaces per indent, always
    latedef: "nofunc", // don't refer to late defined variables (except functions)
    noarg: true,       // no arguments.caller/callee
    undef: true,       // check undefined variable references
    unused: true,      // check unused variables
    
    // predefine browser globals (document, window, etc)
    browser: true,                         

    // predefine stuff that webpack.ProvidePluging require()s for every file
    predef: Object.keys(globalRequires),   

    // jshint errors are displayed by default as warnings
    // set emitErrors to true to display them as errors
    emitErrors: true,

    // jshint to not interrupt the compilation
    // if you want any file with jshint errors to fail
    // set failOnHint to true
    failOnHint: false,
  },
};
