const fs = require("fs");

const postcss = require("postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const postcssImport = require("postcss-import");

exports.buildCss = async (options) => {
  /*
    /style/index.css
    /component/1/index.css
  */
  const tokens = options.src.split("/");
  tokens.pop();

  let dist = '/' + tokens.pop();
  if ('component' === tokens.pop()) dist = "/component" + dist;

  postcss([...(options.minify ? [cssnano({ reduceIdents: false })] : []), ...[
    autoprefixer(),
  ]])
    .use(postcssImport())
    .process(fs.readFileSync(options.src, 'utf8'), {
      from: options.src,
    })
    .then((result) => {
      fs.writeFileSync(`./dist${dist}` /*+ (options.minify ? ".min" : "")*/ + `.css`, result.css)
    });
};