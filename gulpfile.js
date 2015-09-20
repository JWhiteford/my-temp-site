var gulp          = require('gulp');
var sourcemaps    = require('gulp-sourcemaps');
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var uncss         = require('gulp-uncss');
var browserSync   = require('browser-sync');
var cp            = require('child_process');
var imagemin      = require('gulp-imagemin');
var pngquant      = require('imagemin-pngquant');
var concat        = require('gulp-concat');
var uglify        = require('gulp-uglify');

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

// Build the Jekyll Site
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
    .on('close', done);
});

// Rebuild Jekyll & do page reload
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});
gulp.task('build', function (done) {
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
    .on('close', done);
});

// Compress images
gulp.task('imagemin', function () {
  return gulp.src('img/*')
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest('img'));
});

// Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
// includes sourcemaps and autoprefixer
gulp.task('sass', function () {
  return gulp.src('_scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(sourcemaps.write({includeContent: false}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(autoprefixer(['last 3 versions', '> 1%', 'ie 9'], { cascade: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('css'));
});

// Concatenate js files
gulp.task('scripts', function() {
  return gulp.src(['js/tabs.js','js/animated-page.js'])
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat({ path: 'app.min.js', stat: { mode: 0666 }}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('_site/js'));
});

// !!! NOT CONNECTED YET !!!
// Remove unused css from each page
gulp.task('uncss', function () {
  return gulp.src('css/style.css')
    .pipe(uncss({
      html: ['_site/index.html']
    }))
    .pipe(gulp.dest('_site/css/uncss'));
});


// Watch files and reload BrowserSync on save
gulp.task('watch', function () {
  gulp.watch('_scss/**/*.scss', ['sass']);
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch(['*.html', '*.md', '_layouts/*.html', '_pages/*.html', '_includes/*.html', '_posts/*', ' img/*.*'], ['jekyll-rebuild']);
});

// Wait for jekyll-build, then launch the Server
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});


// Default task, running just `gulp` will compile the sass, compile the jekyll site, launch BrowserSync & watch files.
gulp.task('default', ['browser-sync', 'scripts', 'watch', 'imagemin']);