var loaderUtils = require('loader-utils');

module.exports = function() {};

module.exports.pitch = function(remainingRequest) {
  if (process.env.NODE_ENV === 'production')
    this.cacheable && this.cacheable()
  
  var nativeCssPath = require.resolve('./src/native-css.js');
  this.addDependency(nativeCssPath);

  return [
    "// css-js-loader: transforms styles from css-loader to a literal object",
    "",
    "var nativeCSS = require('" + loaderUtils.stringifyRequest(this, "!!" + nativeCssPath) + "');",
    "var styles = {};",
    "// Get the styles",
    "var content = require(" + loaderUtils.stringifyRequest(this, "!!" + remainingRequest) + ");",
    "",
    "if (typeof content === 'string') {",
    "  throw new Error('xxx');",
    "  styles = nativeCSS.convert(content);",
    "} else {",
    "    if(content.locals) Object.assign(styles,content.locals)",
    "    var css = nativeCSS.convert(content.toString());",
    "    Object.keys(styles).forEach(",
    "      function(key){",
    "         var nkey = nativeCSS.nameGenerator(this[key]);",
    "         if (css.hasOwnProperty(nkey)) this[key] = css[nkey];",
    "      },",
    "      styles",
    "    )",
    "}",
    "module.exports = styles;",
  ].join('\n');
}