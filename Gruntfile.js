module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['lib/**/*.js', 'public/js/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: false
      },
      build: {
        files: {
          'public/js/dist/login.min.js': 'public/js/login.js',
          'public/js/dist/app.min.js': 'public/js/app.js',
          'public/js/dist/dodgercms.min.js': 'lib/**/*.js'
        }
      },
    },
    cssmin: {
      combine: {
        files: {
          'public/css/dist/login.min.css': 'public/css/login.css',
          'public/css/dist/app.min.css': 'public/css/app.css',
          'public/css/vendor/jstree.proton.min.css': 'public/css/vendor/jstree.proton.css'
        }
      }
    },
    handlebars: {
      compile: {
        options: {
          namespace: "dodgercms.templates",
          processName: function(filePath) {
            var pieces = filePath.split("/");
            return pieces[pieces.length - 1];
          },
          processContent: function(content, filepath) {
            content = content.replace(/^[\r\n]+/, '').replace(/[\r\n]*$/, '\n');
            return content;
          }
        },
        files: {
          "public/js/dist/entry.min.js": "templates/entry.html"
        }
      }
    },
    mocha: {
      all: {
        src: ['test/runner.html'],
      },
      options: {
        run: true
      }
    },
    watch: {
      scripts: {
        files: ['lib/**/*.js', 'public/js/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        }
      }
    },
    aws: grunt.file.readJSON('./grunt-aws.json'),
    s3: {
      options: {
        key: '<%= aws.key %>',
        secret: '<%= aws.secret %>',
        bucket: '<%= aws.bucket %>',
        region: '<%= aws.region %>',
        access: 'private'
      },
      dev: {
        sync: [
          {
            options: { verify: true },
            src: 'index.html',
            dest: 'index.html'
          },
          {
            options: { verify: true },
            src: 'login.html',
            dest: 'login.html'
          },
          {
            options: { verify: true },
            src: 'public/**',
            dest: 'public/**'
          },
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-s3');

  grunt.registerTask('default', ['handlebars', 'mocha', 'jshint', 'cssmin', 'uglify']);
  grunt.registerTask('deploy', ['default', 's3']);
};
