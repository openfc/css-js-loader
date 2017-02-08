# css-js-loader for webpack

A webpack loader to convert the output of the [css-loader](https://github.com/webpack/css-loader) to plain javascript object.

This is quite useful for situations where you have all of your css rules and variables in one stylesheet and 
want to receive the styles in literal object format for further use in your code base.

## Install

```
npm install css-js-loader --save-dev
```


## Usage

[General webpack loader usage](http://webpack.github.io/docs/using-loaders.html)

### Require Statement

``` javascript
var styles = require('css-js-loader!css-loader!./file.css');
```

### Webpack Config
``` javascript
{
  ...
  module: {
    loaders: [
      { test: /\.js\.css$/, loader: 'css-js-loader!css-loader' }
    ]
  }
}
```


## React Component Styling

This loader was originally created to be used with React component styling via 'style' property.


## License

[MIT (http://www.opensource.org/licenses/mit-license.php)](http://www.opensource.org/licenses/mit-license.php)