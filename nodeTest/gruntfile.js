module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        // the files to concatenate
        src: ['js/dist/*.js'],
        // the location of the resulting JS file
        dest: 'js/script.main.js'
      },

      distCSS: {
        src: ['css/dist/*.js'],
        // the location of the resulting JS file
        dest: 'js/script.main.js'
      }
    },
    uglify: {
      dist: {
        // the files to uglify
        src: ['js/script.main.js'],
        // the location of the resulting JS file
        dest: 'js/script.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['concat', 'uglify']);

};
