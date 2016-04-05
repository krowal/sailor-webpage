var gulp        = require('gulp');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var gutil       = require('gulp-util');
var babelify    = require('babelify');
var streamify   = require('gulp-streamify');
var uglify      = require('gulp-uglify');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var clean_css   = require('gulp-clean-css');
var server      = require('gulp-server-livereload');

var dependencies = [
    'react',
    'react-dom'
];
var scriptsCount = 0;

// Gulp tasks
// ----------------------------------------------------------------------------
gulp.task('scripts', function () {
    return bundleApp(false);
});

gulp.task('copy-static-files', ['copy-html', 'copy-assets']);

gulp.task('copy-assets', function(){
    return gulp.src('./src/assets/**')
        .pipe(gulp.dest('./dist/assets/'));
});

gulp.task('copy-html', function(){
    return gulp.src('./src/**.html')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('deploy', function (){
    return bundleApp(true);
});

gulp.task('server', function(){
    return gulp.src('dist')
        .pipe(server({
            port:30003
        }));
});

gulp.task('styles', function(){
    return gulp.src('./src/css/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(clean_css())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch', function () {
    gulp.watch(['./src/js/**'], ['scripts']);
    gulp.watch(['./index.html'], ['copy-html']);
    gulp.watch(['./src/css/**'], ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'copy-static-files', 'watch', 'server']);


function bundleApp(isProduction) {
    scriptsCount++;

    var appBundler = browserify({
        entries: './src/js/index.js',
        debug: true
    });

    if (!isProduction && scriptsCount == 1){
        browserify({
            require: dependencies,
            debug: true
        })
            .bundle()
            .on('error', gutil.log)
            .pipe(source('vendors.js'))
            .pipe(gulp.dest('./dist/js/'));
    }
    if (!isProduction){
        dependencies.forEach(function(dep){
            appBundler.external(dep);
        })
    }

    return appBundler
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .on('error',gutil.log)
        .pipe(source('bundle.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps:true}))
        .pipe(streamify(uglify()))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js/'));
}