var gulp          = require('gulp');
var sourcemaps    = require('gulp-sourcemaps');
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var browserSync   = require('browser-sync');
var cp            = require('child_process');
var imagemin      = require('gulp-imagemin');
var pngquant      = require('imagemin-pngquant');


var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
    .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('imagemin', function () {
  return gulp.src('img/*')
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest('img'));
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

gulp.task('build', function (done) {
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
    .on('close', done);
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
  return gulp.src('_scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(sourcemaps.write({includeContent: false}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 9'], { cascade: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('css'));
});




/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch('_scss/**/*.scss', ['sass']);
  gulp.watch(['*.html', '*.md', '_layouts/*.html', '_pages/*.html', '_includes/*.html', '_posts/*'], ['jekyll-rebuild']);
});


/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});


/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch', 'imagemin']);