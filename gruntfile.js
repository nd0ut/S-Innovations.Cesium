var fs = require('fs');

module.exports = function (grunt) {
  grunt.loadNpmTasks('dts-generator');
  grunt.loadNpmTasks('grunt-prepend');

  grunt.registerTask('default', ['dtsGenerator', 'gruntPrepend']);

  grunt.initConfig({
    dtsGenerator: {
      options: {
        name: 'cesium',
        baseDir: './artifacts/',
        out: './dist/cesium.d.ts',
        main: 'cesium/Cesium'
      },
      default: {
        src: ['./artifacts/**/*.d.ts']
      }
    },
    gruntPrepend: {
      prepend: {
        options: {
          content: fs.readFileSync('./TypeOverrides.d.ts')
        },
        files: [{
          src: './dist/cesium.d.ts'
        }]
      }
    }
  });
};