module.exports = function () {
    $.gulp.task('pug',function(){
        return $.gulp.src('src/pug/pages/*.pug')
            .pipe($.gp.plumber({errorHandler: $.gp.notify.onError("Error: <%= error.message %>")}))
            .pipe($.gp.pug({
                locals : {
                    nav: JSON.parse($.fs.readFileSync('./data/navigation.json', 'utf8')),
                    content: JSON.parse($.fs.readFileSync('./data/content.json', 'utf8')),
                },
                pretty:true
            }))
            .pipe($.gulp.dest('build'))
            .on('end',$.bs.reload);
    });
}