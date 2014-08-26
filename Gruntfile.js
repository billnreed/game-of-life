module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jshint-stylish');

    grunt.initConfig({
        project: {
            base: 'project',
            bower: 'project/bower_components'
        },

        connect: {
            dev: {
                options: {
                    hostname: 'localhost',
                    port: 3000,
                    base: '<%= project.base %>',
                    livereload: true,
                    open: {
                        target: 'http://localhost:3000',
                        appName: 'Google Chrome'
                    }
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            dev: {
                files: ['<%= project.base %>/index.html'],
                tasks: ['jshint:all']
            }
        },

        injector: {
            options: {},
            local_dependencies: {
                files: {
                    '<%= project.base %>/index.html': ['bower.json', '<%= project.base %>/app.js']
                }
            }
        },

        jshint: {
            options: {
                jshintrc: true,
                reporter: require('jshint-stylish')
            },
            all: ['<%= project.base %>/**/*.js']
        }
    });

    grunt.registerTask('default', ['injector', 'connect:dev', 'watch:dev']);
};