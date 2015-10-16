module.exports = function(grunt) {

  grunt.config.set('ngtemplates', {
    gsaHackathon : {
      cwd : 'assets/js/interface',
      src : '**/**.html',
      dest : 'assets/js/templates.js',
      options : {
        htmlmin : '<%= htmlmin.gsaHackathon %>'
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-angular-templates');
}