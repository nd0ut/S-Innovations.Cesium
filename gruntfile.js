var fs = require('fs');

module.exports = function (grunt) {
  grunt.loadNpmTasks('dts-generator');
  grunt.loadNpmTasks('grunt-prepend');

  grunt.registerTask('default', ['dtsGenerator', 'gruntPrepend']);

  var version = '//' + fs.readFileSync('./artifacts/version.txt');
  var header = fs.readFileSync('./header.d.ts');

  grunt.initConfig({
    dtsGenerator: {
      options: {
        name: 'cesium',
        baseDir: './artifacts/',
        out: './dist/cesium.d.ts',
        main: 'cesium/Source/Cesium'
      },
      default: {
        src: ['./artifacts/**/*.d.ts']
      }
    },
    gruntPrepend: {
      prepend: {
        options: {
          content: version + header
        },
        files: [{
          src: './dist/cesium.d.ts'
        }]
      }
    }
  });
};