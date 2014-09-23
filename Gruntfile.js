module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: ['app/app.js', 'app/services/*.js', 'app/directives/*.js', 'app/controllers/*.js'],
        dest: 'app/imse.min.js'
      }
    },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/imse.min.css": "css/app.less"
        }
      }
    },
    watch: {
      files: ['app/app.js', 'app/services/*.js', 'app/directives/*.js', 'app/controllers/*.js', 'app/views/*', 'css/app.less'],
      tasks: ['uglify', 'less']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify','less', 'watch']);

};