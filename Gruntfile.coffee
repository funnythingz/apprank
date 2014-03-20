module.exports = (grunt)->
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    uglify:
      dist:
        src: 'src/js/apprank.js',
        dest: 'public/js/apprank.js'

    compass:
      dist:
        options:
          config: 'config.rb'

    watch:
      css:
        files: ['src/sass/*.scss']
        tasks: ['compass']
        options:
          atBegin: true
      js:
        files: ['src/js/*.js']
        tasks: ['uglify']
        options:
          atBegin: true

  })

  grunt.loadNpmTasks('grunt-contrib-compass')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.registerTask('default', [ 'uglify', 'compass'])