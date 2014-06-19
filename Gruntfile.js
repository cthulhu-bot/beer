module.exports = function (grunt) {
    var gruntConfig = {};

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    gruntConfig.jasmine = {
        src: {
            src: [
                'src/**/*.js'
            ],
            options: {
                specs: 'test/**/*.test.js',
                keepRunner: true
            }
        }
    };
    grunt.registerTask('test', ['jasmine:src']);

    grunt.initConfig(gruntConfig);
}
