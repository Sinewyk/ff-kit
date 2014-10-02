var gulp = require('gulp'),
    Promise = require('bluebird'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    _ = require('lodash'),
    source = require('vinyl-source-stream'),
    envify = require('envify/custom');

var envString = process.env.NODE_ENV;

var paths = {
    root: __dirname,
    styles: __dirname + '/styles',
    src: __dirname + '/src',
};

var w;

function rebundle() {
    return new Promise(function(resolve, reject) {
        w.transform(envify({
            NODE_ENV: envString
        }))
        .bundle()
        .on('error', function(event) {
            gutil.log('Browserify bundle error !');
            reject(event);
        })
        .pipe(source('main.js'))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest(paths.root))
        .on('finish', function() {
            resolve();
        });
    });
}

gulp.task('browserify', function() {
    var opts = _.defaults(watchify.args, {
        // --bare --no-detect-globals equivalent
        detectGlobals: false,
        insertGlobals: false,
        commondir: false,
        builtins: false,
        debug: true
    });
    w = watchify(browserify(paths.src + '/main.js', opts));
    return rebundle();
});

gulp.task('sass', function() {
    return gulp.src(paths.styles + '/main.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(rename('bundle.css'))
        .pipe(gulp.dest(paths.root));
});

gulp.task('build', ['sass', 'browserify']);

gulp.task('watch', ['build'], function() {
    w.on('update', function() {
        console.log('Browserifying !');
        return rebundle();
    });

    gulp.watch(paths.styles + '/**/*.{scss,sass}', ['sass']).on('change', function(file) {
        console.log(file.path + ' changed !');
    });
});
