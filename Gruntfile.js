module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-pug');

    grunt.initConfig({
        stylus: {
            compile: {
                options: {
                    'include css': true
                },
                files: {
                    'psychic.css': 'src/psychic.styl',
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'psychic-min.css': ['psychic.css']
                }
            }
        },
        pug: {
            release: {
                options: {
                    pretty: true,
                    data: {
                        debug: true
                    }
                },
                files: {
                    'examples/index.html': 'examples/index.pug'
                }
            }
        }
    });

    grunt.registerTask('default', ['stylus', 'cssmin', 'pug']);

};