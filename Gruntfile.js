module.exports = function(grunt) {

  grunt.initConfig({
    globalConfig: {
      files: ['./src/*.js'],
      src: './src/apps',
      client: './client'
    }, 
    babel: {
      'client-modules': {
        options: {
          modules: 'amd'
        },
        files: {
          './client/babel/js/modules/human.js': ['./src/apps/babel-client/modules/human.js']
        }
      },
      'client-app': {
        files: {
          './client/babel/js/app.js': ['./src/apps/babel-client/app.js']
        }
      },
      'server': {
        files: {
          './server/babel/app.js': './src/apps/babel-server/app.js',
          './server/babel/modules/human.js': './src/apps/babel-server/modules/human.js',
          './server/babel/modules/me.js': './src/apps/babel-server/modules/me.js'
        }
      }
    },
    traceur: {
      options: {
          includeRuntime: true,
          traceurOptions: "--experimental",
          traceurRuntime: "./node_modules/traceur/bin/traceur-runtime.js",
          traceurCommand: "./node_modules/traceur/src/node/command.js"
      },
      server: {
        files: {
          './server/traceur-simple/app.js': ['./src/apps/traceur-simple-server/app.js']
        }
      },
      client: {
        files: {
          './client/traceur-simple/js/app.js': ['./src/apps/traceur-simple-client/app.js']
        }
      }
    },
    watch: {
      'babel-client': {
        files:[
          './src/apps/babel-client/**/*.*'
        ],
        tasks:['client-babel'],
        options: {
          nospawn: true
        }
      },
      'babel-server': {
        files:[
          './src/apps/babel-server/**/*.*'
        ],
        tasks:['server-babel'],
        options: {
          nospawn: true
        }
      },
      'traceur-simple-server': {
        files:[
          './src/apps/traceur-simple-server/**/*.*'
        ],
        tasks:['server-traceur-simple'],
        options: {
          nospawn: true
        }
      },
      'traceur-simple-client': {
        files:[
          './src/apps/traceur-simple-client/**/*.*'
        ],
        tasks:['client-traceur-simple'],
        options: {
          nospawn: true
        }
      }
    },
    copy: {
      'babel-client': {
        files: [
          {src: './src/libs/requirejs.js', dest: './client/babel/js/libs/requirejs.js'},
          {src: './src/libs/corejs.js', dest: './client/babel/js/libs/corejs.js'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-traceur-simple');
  //Traceur-build NON (https://www.npmjs.com/package/grunt-traceur-build)
  //grunt-traceur NON (https://github.com/aaronfrost/grunt-traceur)
  
  // --> traceur Babel client-side
  grunt.registerTask('client-babel', ['babel:client-app', 'babel:client-modules', 'copy:babel-client', 'watch:babel-client']);
  // --> traceur Babel server-side
  grunt.registerTask('server-babel', ['babel:server', 'watch:babel-server']);
  // --> traceur Traceur server-side
  grunt.registerTask('server-traceur-simple', ['traceur:server', 'watch:traceur-simple-server']);
  // --> traceur Traceur client-side
  grunt.registerTask('client-traceur-simple', ['traceur:client', 'watch:traceur-simple-client']);
};