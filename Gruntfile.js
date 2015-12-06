module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server:{
        options: {
          livereload: true,
          open: {

          }
        }
      }
    },
    less: {
      options: {
        paths: 'assets/',
        yuicompress: false,
        ieCompat: true,
        require: [
            'css/main.less'
        ]
      },
      src: {
          expand: true,
          cwd: 'assets/',
          src: [
              'css/*.less'
          ],
          ext: '.css',
          dest: 'assets/'
      }
    },
    copy: {
      main: {
        files: [
            // includes files within path
            {
              expand: true, 
              cwd: 'bower_components/font-awesome/css/', 
              src: 'font-awesome.min.css',
              dest: 'assets/css/', 
              ilter: 'isFile'
            },
            {
              expand: true, 
              cwd: 'bower_components/font-awesome/fonts/', 
              src: '**/*',
              dest: 'assets/fonts/'
            },
            {
              expand: true, 
              cwd: 'bower_components/normalize.css/', 
              src: 'normalize.css',
              dest: 'assets/css/', 
              filter: 'isFile'
            },
            {
              expand: true,
              cwd: 'bower_components/jquery/dist/',
              src: 'jquery.min.js',
              dest: 'assets/js/vendor/'
            },
            {
              expand: true,
              cwd: 'bower_components/requirejs/',
              src: 'require.js',
              dest: 'assets/js/vendor/'
            },
            {
              expand: true,
              cwd: 'bower_components/bluebird/js/browser/',
              src: 'bluebird.min.js',
              dest: 'assets/js/vendor/'
            },
            {
              expand: true,
              cwd: 'bower_components/babel-polyfill/',
              src: 'browser-polyfill.js',
              dest: 'assets/js/vendor/'
            },
            {
              expand: true,
              cwd: 'bower_components/fs/dist',
              src: 'fs.min.js',
              dest: 'assets/js/vendor/'
            }
          ]
        }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: [{
            expand: true,
            cwd: 'assets/js/',
            src: ['*.js'],
            dest: 'assets/js/build/',
            ext: '.js'
        }]
      }
    },
    watch: {
        options: {
             livereload: true
        },
        babel: {
          files: 'assets/js/*.js',
          tasks: 'babel'
        },
        css: {
                files: ['assets/css/*.less', 'assets/css/**/*.less'],
                tasks: 'less'
            },
        js: {
              files: ['assets/js/build/*.js']
            },
        index: {
            files: ['index.html']
        }
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect','copy','less','babel','watch']);

};