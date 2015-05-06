module.exports = function(grunt){
	
	grunt.initConfig({
		min:{
			dist: { 
				src: 'bower_components/bootstrap/dist/css/bootstrap.css',
				dest: 'css/bootstrap.min.css'
			}
		}
	});
	grunt.registerTask('defualt', ['min']);
}