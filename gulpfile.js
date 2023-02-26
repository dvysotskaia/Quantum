'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    del: require('del'),
    fs: require('fs'),
    bs: require('browser-sync').create(),
    mozjpeg: require('imagemin-mozjpeg'),

    path: {
       tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default',$.gulp.series(
    $.gulp.parallel('pug','stylus','scripts:lib','scripts','img:dev','svg','fonts'),
    $.gulp.parallel('watch','serve')
    ));

$.gulp.task('build',$.gulp.series(
    'clean',
    $.gulp.parallel('pug','stylus','scripts:lib','scripts','img:build','svg','fonts'),
    $.gulp.parallel('watch','serve')
));