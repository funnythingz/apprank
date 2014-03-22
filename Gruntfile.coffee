module.exports = (grunt)->
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    uglify:
      typesc:
        files: 'public/js/apprank.js': ['public/js/apprank.js']

    concat:
      typesc:
        src: ['src/typesc/*.js']
        dest: 'public/js/apprank.js'

      options:
        separator: ';'


    typescript:
      base:
        src: ['src/**/*.ts']
        options:
          sourceMap: false

    compass:
      dist:
        options:
          config: 'config.rb'

    watch:
      typescript:
          files: ['src/**/*.ts']
          tasks: ['typescript', 'uglify', 'clean']
          options:
            atBegin: true

        css:
          files: ['src/**/*.scss']
          tasks: ['compass']
          options:
            atBegin: true

    clean: ['public/js/*.js']

  })

  grunt.loadNpmTasks('grunt-contrib-compass')
  grunt.loadNpmTasks('grunt-typescript')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.registerTask('default', [ 'typescript', 'concat', 'uglify', 'clean', 'compass'])