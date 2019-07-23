# template-library-webpack

[![Code Climate](https://codeclimate.com/github/myTerminal/template-library-webpack.png)](https://codeclimate.com/github/myTerminal/template-library-webpack)  
[![Dependency Status](https://david-dm.org/myTerminal/template-library-webpack.svg)](https://david-dm.org/myTerminal/template-library-webpack)
[![devDependency Status](https://david-dm.org/myTerminal/template-library-webpack/dev-status.svg)](https://david-dm.org/myTerminal/template-library-webpack#info=devDependencies)
[![peer Dependency Status](https://david-dm.org/myTerminal/template-library-webpack/peer-status.svg)](https://david-dm.org/myTerminal/template-library-webpack#info=peerDependencies)  
[![License: CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-sa/4.0)

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
 - [optimize-css-assets-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin) to optimize the extracted CSS
 - [uglifyjs-webpack-plugin](https://www.npmjs.com/package/uglifyjs-webpack-plugin) to minify JavaScript before bundling them to the output directory

#### Loaders

- [style-loader](https://www.npmjs.com/package/style-loader) to bundle CSS stylesheets
- [css-loader](https://www.npmjs.com/package/css-loader) to work with style-loader for bundling of CSS stylesheets
- [less-loader](https://www.npmjs.com/package/less-loader) to transpile Less CSS into regular CSS
- [file-loader](https://www.npmjs.com/package/file-loader) to work with other file types
- [eslint-loader](https://www.npmjs.com/package/eslint-loader) to run ESLint on JavaScript files
- [babel-loader](https://www.npmjs.com/package/babel-loader) to perform babel transpilations with the help of supporting dependencies

#### Supporting dependencies

 - [babel-core](https://www.npmjs.com/package/babel-core), [babel-preset-env](https://www.npmjs.com/package/babel-preset-env) to support babel-loader
 - [bable-preset-react](https://www.npmjs.com/package/babel-preset-react) to transpile JSX files to regular JavaScript files that web-browsers can interpret
 - [eslint](https://www.npmjs.com/package/eslint), [babel-eslint](https://www.npmjs.com/package/babel-eslint), [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb), [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import), [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) and [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) to support eslint-loader in running ESLint to lint JavaScript files
 - [less](https://www.npmjs.com/package/less) to help less-loader with transpilation of Less CSS into regular CSS
 - [effortless-css](https://www.npmjs.com/package/effortless-css) to provide Less CSS mixins
 - [webpack-merge](https://www.npmjs.com/package/webpack-merge) to be able to use a common configuration across *dev* and *prod*

#### Commands

 - `npm run debug` to run Webpack with development configuration.  
 In this mode, Webpack generates source-maps for bundled JavaScript resources to simplify debugging of JavaScript in the web-browser.
 - `npm run develop` to run Webpack with development configuration and keep watching for file changes within the source.  
 In this mode, Webpack generates source-maps for bundled JavaScript resources to simplify debugging of JavaScript in the web-browser.
 - `npm run build` to run Webpack with production configuration.  
 In this mode, Webpack minifies the JavaScript bundles and there are no source-maps created.

## To-Do

 - Find a way to write and run tests
