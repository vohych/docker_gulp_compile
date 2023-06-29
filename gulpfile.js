const themeBlog = '/'
const sourceFolder = themeBlog;
const projectFolder = themeBlog;

let path = {
    build: {
        css:  projectFolder + "/",
    },
    src: {
        css: sourceFolder +  "**/**/*.scss",
    },
    watch: {
        css:  sourceFolder + "**/**/*.scss",
    },
    clean: './'
}

let {src, dest} = require('gulp'),
    gulp = require('gulp'),
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

function css() {
    return src(path.src.css)
        .pipe(scss({
                outputStyle: 'compressed', // всё в одну строку
            })
        )
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 4 versions'],
        }))
        .pipe(dest(path.build.css))
}

function watchFiles() {
    gulp.watch([path.watch.css], css);
}

let build = gulp.series(css);
let watch = gulp.parallel(build, watchFiles);

exports.css = css;
exports.build = build;
exports.watch = watch;
exports.default = watch;