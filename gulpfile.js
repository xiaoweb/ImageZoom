/** * Created with WebStorm. * User: RD-小小WEB * Date: 2015/11/20 * Time: 11:27 */
var gulp = require("gulp"),
uglify = require('gulp-uglify');

gulp.task("js",function(){
    gulp.src("imageZoom.js")
        .pipe(uglify())
        .pipe(gulp.dest("./dist/"));
});

