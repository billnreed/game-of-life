module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        project: {
            base: 'project'
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
                files: ['<%= project.base %>/index.html']
            }
        },

        injector: {
            options: {},
            local_dependencies: {
                files: {
                    '<%= project.base %>/index.html': ['bower.json', '<%= project.base %>/**/*.js', '<%= project.base %>/**/*.css']
                }
            }
        }
    });

    grunt.registerTask('default', ['injector', 'connect:dev', 'watch:dev']);
};