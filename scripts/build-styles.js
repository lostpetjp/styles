const buildCss = require('./utils').buildCss;
const packageJson = require('../package.json');
const name = packageJson.name.split("/").pop();

Promise.all([
  /*buildCss({
    src: 'src' + process.argv[2],
    minify: false,
    name,
  }),*/
  buildCss({
    src: 'src' + process.argv[2],
    minify: true,
    name,
  }),
]).catch(console.error);