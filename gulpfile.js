const gulp   		= require('gulp');
const browserSync   = require('browser-sync');
const sass   		= require('gulp-sass');
const concat 		= require('gulp-concat');
const sourcemaps    = require('gulp-sourcemaps');
const csso   		= require('gulp-csso');
const include     	= require('gulp-include');
const del     		= require('del');
const fs 			= require('fs-extra');
const wait 			= require('gulp-wait');
const pug			= require('gulp-pug');
const imagemin 		= require('gulp-imagemin');
const babel 		= require('gulp-babel');
const uglify 		= require('gulp-uglify');
const minify 		= require('gulp-minify');

let path = {
	src: {
		html: [
			"./src/index.html",
			"./src/pages/*.html"
		],
		style: ['./src/style/*.scss', './src/style/*.css'],
		scripts: './src/js/*.js',
		img: './src/img/**/*.+(jpg|jpeg|png|svg|ico|gif)',
		fonts: './src/fonts/**/*',
	},
	dist: {
		html: "./dist/",
		style: './dist/css',
		scripts: './dist/js/',
		img: './dist/img',
		fonts: './dist/fonts',
	},
	watch: {
		html: "./src/**/*.html",
		style: './src/**/*.+(sass|scss)',
		scripts: './src/**/*.js',
		img: './src/img/*.+(jpg|jpeg|png|svg|ico|gif)',
		fonts: './src/fonts/**/*'
	}
};

gulp.task('browser-sync', async function(){
	browserSync({
		server: {
			baseDir: 'dist'
		},
		notify: false,
		tunnel: false,
		port: 8000,
  		host: "localhost"
	});
});

gulp.task('html', async function()  {
	return gulp.src(path.src.html)
		.pipe(include())
		.pipe(gulp.dest(path.dist.html))
		.pipe(browserSync.stream());
});

gulp.task('style', async function(done){
	gulp.src(path.src.style)
		.pipe(sourcemaps.init())
  		.pipe(wait(100))
    	.pipe(sass().on('error', function(error) {
        	done(error);
      	}))
    	// .pipe(concat('main.css'))
    	.pipe(sourcemaps.write())
    	.pipe(gulp.dest(path.dist.style))
    	.on('end', function() {
        	done();
      	})
    	.pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', async function() {
	return gulp.src(path.src.scripts)
		.pipe(sourcemaps.init())
		.pipe(include())
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(sourcemaps.write())
		// .pipe(concat('main.js'))
		.pipe(gulp.dest(path.dist.scripts))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('img', async function() {
	return gulp.src(path.src.img)
	  	.pipe(gulp.dest(path.dist.img))
	  	.pipe(browserSync.reload({stream: true}));
});

gulp.task('fonts', async function() {
	return gulp.src(path.src.fonts)
	  	.pipe(gulp.dest(path.dist.fonts))
	  	.pipe(browserSync.reload({stream: true}));
});

gulp.task('build:style', async function(){
	return gulp.src(path.src.style)
		.pipe(sass())
		// .pipe(concat('main.css'))
		.pipe(csso({
    		// forceMediaMerge: true
    	}))
		.pipe(gulp.dest(path.dist.style))
});

gulp.task('build:scripts', async function() {
	return gulp.src(path.src.scripts)
		.pipe(include())
		.pipe(babel({
			presets: ['@babel/env']
		}))
		// .pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest(path.dist.scripts))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('build:img', async function() {
	return gulp.src(path.src.img)
		.pipe(imagemin())
		.pipe(gulp.dest(path.dist.img))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('clean', async function() {
	return del.sync('dist/*')
});

const name = process.argv[process.argv.length - 1].split('--')[1];
const level = process.argv[process.argv.length - 1].split('--')[2];

gulp.task('folder', async function () {
    return gulp.src('*.*', {read: false})
        .pipe(gulp.dest('src/components/'+ name))
});

gulp.task('make', async function() {
	if (!level) {
		fs.createFileSync('src/components/' + name + '/' + name + '.html');
		fs.createFileSync('src/components/' + name + '/' + name + '.scss')
	} else if (level == 1) {
		fs.createFileSync('src/components/' + name + '/' + name + '.html','');
		fs.createFileSync('src/components/' + name + '/' + name + '.sass','');
	} else if (level == 2) {
		fs.createFileSync('src/components/' + name + '/' + name + '.html','');
		fs.createFileSync('src/components/' + name + '/' + name + '.scss','');
		fs.createFileSync('src/components/' + name + '/' + name + '.js','');
	} else if (level == 3) {
		fs.createFileSync('src/components/' + name + '/' + name + '.html','');
		fs.createFileSync('src/components/' + name + '/' + name + '.sass','');
		fs.createFileSync('src/components/' + name + '/' + name + '.js','');
	}
});

gulp.task('watch', gulp.series('clean','browser-sync', 'html', 'style', 'scripts', 'img', 'fonts', function() {
	gulp.watch([path.watch.html], gulp.series('html'));
	gulp.watch([path.watch.style], gulp.series('style'));
	gulp.watch([path.watch.img], gulp.series('img'));
	gulp.watch([path.watch.scripts], gulp.series('scripts'));
	gulp.watch([path.watch.fonts], gulp.series('fonts'));
}));

gulp.task('build', gulp.series('clean', 'html', 'build:style', 'build:scripts', 'build:img', 'fonts'));

gulp.task('default', gulp.series('watch'));
