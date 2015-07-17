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
          modules: 'amd',
          experimental: true,
          stage: 0
        },
        files: {
          './client/babel/js/modules/human.js': ['./src/apps/babel-client/modules/human.js'],
          './client/babel/js/modules/primate.js': ['./src/apps/babel-client/modules/primate.js']
        }
      },
      'client-app': {
        options: {
          experimental: true,
          stage: 0
        },
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
      },
      'calculator-modules': {
        options: {
          modules: 'amd',
          experimental: true,
          stage: 0
        },
        files: {
          './client/calculator/js/modules/provinces.js': './src/apps/calculator/modules/provinces.js',
          './client/calculator/js/modules/ui.js': './src/apps/calculator/modules/ui.js',
        }
      },
      'calculator-components': {
        files: {
          './client/calculator/js/components/calculator.js': './src/apps/calculator/components/calculator.js',
        }
      },
      'calculator': {
        files: {
          './client/calculator/js/bootstrap.js': './src/apps/calculator/bootstrap.js',
        }
      }
    },
    traceur: {
      options: {
          includeRuntime: true,
          traceurOptions: "--experimental",
          traceurRuntime: "./node_modules/traceur/bin/traceur-runtime.js",
          traceurCommand: "./node_modules/traceur/src/node/command.js",
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
      'calculator': {
        files:[
          './src/apps/calculator/**/*.*'
        ],
        tasks:['client-calculator'],
        options: {
          nospawn: true
        }
      },
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
      'babel': {
        files: [
          {src: './src/libs/requirejs.js', dest: './client/babel/js/libs/requirejs.js'},
          {src: './src/libs/corejs.js', dest: './client/babel/js/libs/corejs.js'},
          {src: './src/apps/babel-client/html/index.html', dest: './client/babel/index.html'}
        ]
      },
      'calculator': {
        files: [
          {src: './src/libs/requirejs.js', dest: './client/calculator/js/libs/requirejs.js'},
          {src: './src/libs/corejs.js', dest: './client/calculator/js/libs/corejs.js'},
          {src: './src/apps/calculator/libs/jquery.js', dest: './client/calculator/js/libs/jquery.js'},
          {src: './src/apps/calculator/html/index.html', dest: './client/calculator/index.html'}
        ]
      },
      'traceur': {
        files: [
          {src: './src/apps/traceur-simple-client/html/index.html', dest: './client/traceur-simple/index.html'},
          {src: './node_modules/harmony-reflect/reflect.js', dest: './client/traceur-simple/js/libs/reflect.js'},
          {src: './src/apps/traceur-simple-client/modules/lib.js', dest: './client/traceur-simple/js/modules/lib.js'},
          {src: './src/apps/traceur-simple-client/modules/math.js', dest: './client/traceur-simple/js/modules/math.js'},
          {src: './src/apps/traceur-simple-client/modules/primate.js', dest: './client/traceur-simple/js/modules/primate.js'},
          {src: './src/apps/traceur-simple-client/modules/human.js', dest: './client/traceur-simple/js/modules/human.js'},
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
  grunt.registerTask('client-babel', ['babel:client-app', 'babel:client-modules', 'copy:babel', 'watch:babel-client']);
  // --> traceur Babel server-side
  grunt.registerTask('server-babel', ['babel:server', 'watch:babel-server']);
  // --> traceur Traceur server-side
  grunt.registerTask('server-traceur-simple', ['traceur:server', 'watch:traceur-simple-server']);
  // --> traceur Traceur client-side
  grunt.registerTask('client-traceur-simple', ['copy:traceur', 'traceur:client', 'watch:traceur-simple-client']);
  // --> Module transpiler
  grunt.registerTask('client-module-transpiler', ['copy:transpiler', 'transpile']);
  // --> App. calculator
  grunt.registerTask('client-calculator', ['copy:calculator', 'babel:calculator-modules', 'babel:calculator-components', 'babel:calculator', 'watch:calculator']);
};