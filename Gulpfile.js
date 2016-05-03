
var gulp            = require('gulp');
var gutil           = require('gulp-util');

var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var browserSync     = require('browser-sync');
var notify          = require('gulp-notify');

var paths           = {
    'sass'            : './public/styles/sass/**/*.scss',
    'css'             : './public/styles/css/'
}

browserSync.init({
    server: {
        baseDir: './public/'
    }
});

gulp.task('sass', function() {
    return gulp.src(paths.sass)
        .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer('last 10 version'))
        .pipe(gulp.dest(paths.css))
        .pipe(browserSync.stream())
        .pipe(notify("css build finished: <%= file.relative %>"));
});

gulp.task('serve', function(){
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(['./public/*.html']).on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'serve']);