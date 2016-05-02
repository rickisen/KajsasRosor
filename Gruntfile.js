module.exports = function(grunt) {
    // npm install --save-dev load-grunt-tasks 
    require('load-grunt-tasks')(grunt); 

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'build/Stylesheets/main.css': 'src/Stylesheets/style.scss'
                }
            }
        },

        postcss: {
            options: {
                map:false,
                processors: [
                    require('autoprefixer')({browsers:'last 2 versions'}),
                    require('cssnano')()
                ]
            },
            dist: {
                src:'build/Stylesheets/*.css'
            }
        },

        copy : {
            main : {
                files : [{
                    expand : true,
                    cwd    : 'src',
                    src    : ['index.php', 'Classes/*.php', 'Templates/*.php', 'Images/*.*'],
                    dest   : 'build/',
                } ]
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                beatutify:false,
                preserveComments:false,
                quoteStyle:1
            },
            build: {
                expand:true,
                flatten:true,
                src: 'build/Scripts/concat.js',
                dest: 'build/Scripts/',
                rename: function(destPath, destBase){ 
                    // return destPath + destBase.replace('.js', '.min.js'); 
                    return destPath + 'main.min.js'; 
                }
            }
        },

        concat : {
            options: {
                separator: '\n'
            },
            dist:{
                src:['src/Scripts/*.js'],
                dest:'build/Scripts/concat.js'
            }
        },

        jscs : {
            src: 'src/Scripts/*.js',
            options: {
                'preset':'google'
            }
        },

        watch: {
            css: {
                files: ['src/Stylesheets/*.scss'],
                tasks: ['sass', 'postcss'],
                options: { spawn: false }
            },

            php: {
                files: ['src/*.php', 'src/Templates/*.php', 'src/Classes/*.php'],
                tasks: ['copy'],
                options: { spawn: false }
            },

            js: {
                files: ['src/Scripts/*.js'],
                tasks: ['concat'],
                options: { spawn: false }
            } 
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build',   ['sass', 'copy', 'postcss', 'concat' ]);
    grunt.registerTask('deploy',  ['sass', 'copy', 'postcss', 'concat', 'jscs', 'uglify']);
};
