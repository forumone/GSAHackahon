module.exports = function(grunt) {

  grunt.config.set('ngtemplates', {
    gsa18f : {
      cwd : 'assets/js/interface',
      src : '**/**.html',
      dest : 'assets/js/templates.js',
      options : {
        htmlmin : '<%= htmlmin.gsa18f %>'
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-angular-templates');
}