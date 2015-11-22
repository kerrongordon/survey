//require('es6-promise')
var Promise = require('es6-promise').polyfill();
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var gulpBowerFiles = require('gulp-bower-files');
var mainBowerFiles = require('main-bower-files');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/assets/sass/*.sass")
        .pipe(sass({indentedSyntax: true}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("app/assets/css"))
        .pipe(browserSync.stream());
});

// process JS files and return the stream.
gulp.task('appjs', function () {
    return gulp.src('app/app.js')
        .pipe(concat('app/assets/js/app.js'))
        .pipe(gulp.dest(''));
});

gulp.task('controllers', function () {
    return gulp.src('app/controllers/**/*.js')
    	.pipe(concat('app/assets/js/controllers.js'))
        .pipe(gulp.dest(''));
});

gulp.task('components', function () {
    return gulp.src('app/components/**/*.js')
    	.pipe(concat('app/assets/js/components.js'))
        .pipe(gulp.dest(''));
});

gulp.task('services', function () {
    return gulp.src('app/services/**/*.js')
    	.pipe(concat('app/assets/js/services.js'))
        .pipe(gulp.dest(''));
});

// reloading browsers
gulp.task('js-watch', ['controllers', 'components', 'services', 'appjs'], function() {
	browserSync.reload();
});


gulp.task("bower-files", function(){
    return gulp.src(mainBowerFiles(/* options */), { base: 'bower_components' })
    .pipe(gulp.dest("./lib"));
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'controllers', 'components', 'services', 'appjs'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/assets/sass/**/*.sass", ['sass']);
    gulp.watch("app/controllers/**/*.js", ['js-watch']);
    gulp.watch("app/components/**/*.js", ['js-watch']);
    gulp.watch("app/services/**/*.js", ['js-watch']);
    gulp.watch("app/app.js", ['js-watch']);
    gulp.watch("app/**/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);