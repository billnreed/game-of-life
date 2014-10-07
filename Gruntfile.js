module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jshint-stylish');
    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
        project: {
            base: 'project',
            bower: 'bower_components',
            test: 'test'
        },

        connect: {
            dev: {
                options: {
                    hostname: 'localhost',
                    port: 3000,
                    livereload: true,
                    open: {
                        target: 'http://localhost:3000',
                        appName: 'Google Chrome'
                    },
                    middleware: function(connect) {
                        return [
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static('./project')
                        ];
                    }
                }
            }
        },

        watch: {
            dev: {
                options: {
                    livereload: true
                },
                files: ['<%= project.base %>/**/*.html', '<%= project.base %>/**/*.js', '<%= project.base %>/**/*.css'],
                tasks: ['injector:dev', 'jshint:dev']
            },
            tdd: {
                files: ['<%= project.base %>/**/*.js', '<%= project.test %>/**/*.spec.js'],
                tasks: ['karma:unit']
            }
        },

        injector: {
            dev: {
                options: {
                    ignorePath: '<%= project.base %>'
                },
                files: {
                    '<%= project.base %>/index.html': ['bower.json',
                                                       '<%= project.base %>/app.js',
                                                       '<%= project.base %>/**/*.js',
                                                       '<%= project.base %>/**/*.css']
                }
            }
        },

        jshint: {
            options: {
                jshintrc: true,
                reporter: require('jshint-stylish')
            },
            dev: ['<%= project.base %>/**/*.js']
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.registerTask('default', ['injector', 'connect:dev', 'watch:dev']);
    grunt.registerTask('tdd', ['watch:tdd']);
};
