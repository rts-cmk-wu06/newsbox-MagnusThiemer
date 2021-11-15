//alle requirements refererer til en dev dependency
const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
/* const purgecss = require('gulp-purgecss') */
const gulp = require("gulp");
const babel = require("gulp-babel");

// build CSS
function buildStyles() {
  return src('sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
/*     .pipe(purgecss({ content: ['*.html'] })) */
    .pipe(dest('dist'))
}
//build JS
function buildJavaScript() {
    return src('js/**/*.js')
    .pipe(babel({
        presets: ["@babel/preset-env"]
      }))
    .pipe(dest("dist"));
}

//hvis watch skal sætte mere end een funktion i gang skal man bruge series metoden og sætte dem ind der
function watchTask() {
  watch(['sass/**/*.scss', '*.html', 'js/**/*.js'], series(buildStyles, buildJavaScript))
}

// koden der kører når man kører gulp kommandoen. Sætter watchTask i gang, der kører de samme build funktioner
exports.default = series(buildStyles, buildJavaScript, watchTask)
