const { src, dest } = require("gulp");
const sass = require("gulp-dart-sass");//(require("sass"));
const bulk = require("gulp-sass-bulk-importer");
const prefixer = require("autoprefixer");
//const clean = require("gulp-clean-css");
const concat = require("gulp-concat");
const map = require("gulp-sourcemaps");
const bs = require("browser-sync");
const postcss = require("gulp-postcss");

module.exports = function style() {
  return src("src/scss/main/**/*.scss")
    .pipe(map.init())
    .pipe(bulk())
    .pipe(
      sass({
        //outputStyle: "compressed",
        outputStyle: "expanded", 
        silenceDeprecations: ['legacy-js-api'],
      }).on("error", sass.logError)
    )
    .pipe(
      postcss([
        prefixer({
          overrideBrowserslist: ["last 8 versions"],
          browsers: [
            "Android >= 4",
            "Chrome >= 20",
            "Firefox >= 24",
            "Explorer >= 11",
            "iOS >= 6",
            "Opera >= 12",
            "Safari >= 6",
          ],
        }),
      ])
    )
    // .pipe(
    //   clean({
    //     level: 2,
    //   })
    // )
    .pipe(concat("style.css"))
    //.pipe(map.write("/css/sourcemaps/"))
    .pipe(dest("../altai_kit_tour/"))
    .pipe(bs.stream());
};
