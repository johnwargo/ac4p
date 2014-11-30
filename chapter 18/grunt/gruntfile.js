module.exports = function (grunt) {
  grunt.initConfig({
    //Process JavaScript files
    uglify: {
      jsFiles: {
        files: [{
          expand: true,
          cwd: 'code',
          src: '**/*.js',
          dest: 'www'
          }]
      }
    },

    //Process HTML files
    htmlmin: {
      htmlFiles: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: 'code',
          src: '**/*.html',
          dest: 'www'
      }]
      }
    },

    //Proecss Image files
    imagemin: {
      imgFiles: {
        files: [{
          expand: true,
          cwd: 'code/img',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'www/img'
      }]
      }
    }

  });

  //Load the needed grunt modules 
  //Minifies JavaScript files
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //Minifies HTML files
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  //optimizes image files
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'htmlmin', 'imagemin']);
  grunt.registerTask('js', ['uglify']);
  grunt.registerTask('html', ['htmlmin']);
};