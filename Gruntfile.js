module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: 'app',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: appConfig,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            ngdocs: {
                files: ['packages/**/src/app/scripts/{,*/}*.js'],
                tasks: ['ngdocs']
            }
        },


        // The actual grunt server settings
        connect: {
            options: {
                livereload: 898900
            },

            docs: {
                options: {
                    port: 5019,
                    hostname: 'localhost',
                    base: 'dist'
                }
            }
        },

        ngdocs: {
          options: {
            dest: 'dist',
            html5Mode: false,
            startPage: '/api',
            title: "Documentation",
            titleLink: "/",
            bestMatch: true,
            styles: [
                'styles/docs.css'
            ]
          },
          all: ['packages/**/src/app/scripts/{,*/}*.js']
        }          
    });

    grunt.registerTask('default', '', function(target) {

        return grunt.task.run([ 
            'connect:docs',
            'ngdocs',
            'watch'
        ]);
    });

};