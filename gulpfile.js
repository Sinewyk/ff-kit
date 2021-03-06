var gulp = require('gulp'),
    Promise = require('bluebird'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    _ = require('underscore'),
    source = require('vinyl-source-stream'),
    envify = require('envify/custom'),
    reactify = require('reactify');

var envString = process.env.NODE_ENV || 'development';

var debug = false;

var paths = {
    root: __dirname,
    styles: __dirname + '/styles',
    src: __dirname + '/src',
};

var w;

//check dependencies if included multiple times ...
//first time i'm fooling around with node_modules/_*
//browserify src/main.js --bare --no-detect-globals --global-transform=reactify --list
//
//then just escape \\
//wrap in '"'
//put some : true, except last line
//then Object.keys(it).length
//should be equal to the number of line outputed by the --list

function rebundle() {
    return new Promise(function(resolve, reject) {
        w.transform(envify({NODE_ENV: envString}))
        .bundle()
        .on('error', function(event) {
            gutil.log('Browserify bundle error !');
            reject(event);
        })
        .on('file', function(file, id, parent) {
            if (!debug) return;
            console.log(file);
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
        debug: true,
        //global transform to transform the _components module
        //because otherwise with a package.json I have to put it in the top level one
        //or a npm prune would delete it ...
        transform: [
            [
                "reactify", {
                    "es6": true,
                    "global": true
                }
            ]
        ]
    });
    w = watchify(browserify(paths.src + '/main.js', opts));
    return rebundle();
});

gulp.task('sass', function() {
    return gulp.src(paths.styles + '/index.scss')
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
