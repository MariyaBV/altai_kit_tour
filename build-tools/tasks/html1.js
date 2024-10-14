const { src, dest } = require("gulp");
const include = require("gulp-file-include");
const nunjucksRender = require("gulp-nunjucks-render");
const bs = require("browser-sync").create();

module.exports = function html() {
  return src(["src/**/*.html", "!src/components/**/*.html"])
    .pipe(include())
    .pipe(nunjucksRender({
      path: ['src/templates/', 'src/components/']
    }))
    .pipe(dest("../altai_kit_tour/"))
    .pipe(bs.stream());
};
