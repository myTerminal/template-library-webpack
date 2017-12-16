# template-library-webpack

[![Code Climate](https://codeclimate.com/github/myTerminal/template-library-webpack.png)](https://codeclimate.com/github/myTerminal/template-library-webpack)
[![bitHound Overall Score](https://www.bithound.io/github/myTerminal/template-library-webpack/badges/score.svg)](https://www.bithound.io/github/myTerminal/template-library-webpack)
[![bitHound Code](https://www.bithound.io/github/myTerminal/template-library-webpack/badges/code.svg)](https://www.bithound.io/github/myTerminal/template-library-webpack)  
[![Dependency Status](https://david-dm.org/myTerminal/template-library-webpack.svg)](https://david-dm.org/myTerminal/template-library-webpack)
[![devDependency Status](https://david-dm.org/myTerminal/template-library-webpack/dev-status.svg)](https://david-dm.org/myTerminal/template-library-webpack#info=devDependencies)
[![peer Dependency Status](https://david-dm.org/myTerminal/template-library-webpack/peer-status.svg)](https://david-dm.org/myTerminal/template-library-webpack#info=peerDependencies)  
[![License](https://img.shields.io/badge/LICENSE-GPL%20v3.0-blue.svg)](https://www.gnu.org/licenses/gpl.html)
[![Gratipay](http://img.shields.io/gratipay/myTerminal.svg)](https://gratipay.com/myTerminal)  

A template to create front-end libraries with [Webpack](https://webpack.js.org/) as the module-bundler

## Technologies

### Web

 - [jQuery](https://jquery.com/) (sample dependency)
 - [ES2015](http://es6-features.org/)
 - [Less CSS](http://lesscss.org/)

### Module bundler: Webpack

#### Plugins

 - [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin) to clean the output directory before every build
 - [extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin) to extract CSS stylesheets as a separate bundle to the output directory
 - [uglifyjs-webpack-plugin](https://www.npmjs.com/package/uglifyjs-webpack-plugin) to minify JavaScript before bundling them to the output directory

#### Loaders

- [style-loader](https://www.npmjs.com/package/style-loader) to bundle CSS stylesheets
- [css-loader](https://www.npmjs.com/package/css-loader) to work with style-loader for bundling of CSS stylesheets
- [less-loader](https://www.npmjs.com/package/less-loader) to transpile Less CSS into regular CSS
- [file-loader](https://www.npmjs.com/package/file-loader) to work with other file types
- [jsxhint-loader](https://www.npmjs.com/package/jsxhint-loader) to run JSHint on JavaScript files
- [jscs-loader](https://www.npmjs.com/package/jscs-loader) to run JSCS on JavaScript files
- [babel-loader](https://www.npmjs.com/package/babel-loader) to perform babel transpilations with the help of supporting dependencies

#### Supporting dependencies

 - [babel-core](https://www.npmjs.com/package/babel-core), [babel-preset-env](https://www.npmjs.com/package/babel-preset-env) to support babel-loader
 - [bable-preset-react](https://www.npmjs.com/package/babel-preset-react) to transpile JSX files to regular JavaScript files that web-browsers can interpret
 - [jshint](https://www.npmjs.com/package/jshint) to support jsxhint-loader in running JSHint to lint JavaScript files
 - [jscs](https://www.npmjs.com/package/jscs) to support jscs-loader in checking code styles in JavaScript files
 - [less](https://www.npmjs.com/package/less) to help less-loader with transpilation of Less CSS into regular CSS
 - [webpack-merge](https://www.npmjs.com/package/webpack-merge) to be able to use a common configuration across *dev* and *prod*

#### Commands

 - `npm run debug` to run Webpack with development configuration.  
 In this mode, Webpack generates source-maps for bundled JavaScript resources to simplify debugging of JavaScript in the web-browser.
 - `npm run develop` to run Webpack with development configuration and keep watching for file changes within source.  
 In this mode, Webpack generates source-maps for bundled JavaScript resources to simplify debugging of JavaScript in the web-browser.
 - `npm run build` to run Webpack with production configuration.  
 In this mode, Webpack minifies the JavaScript bundles and there are no source-maps created.
