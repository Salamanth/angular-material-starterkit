require.config({
  baseUrl: 'js',
  paths: {
    'angular': 'lib/angular-material/angular.min',
    'ngAnimate': 'lib/angular-material/angular-animate.min',
    'ngAria': 'lib/angular-material/angular-aria.min',
    'ngMaterial': 'lib/angular-material/angular-material.min',
    'ngMdIcons': 'lib/angular-material/angular-material-icons.min',
    'ngMessages': 'lib/angular-material/angular-messages.min',
  },

  shim: {
    angular: {
      exports: 'angular'
    },

    ngAnimate: {
      deps: ['angular'],
      exports: 'ngAnimate'
    },

    ngAria: {
      deps: ['angular'],
      exports: 'ngAria'
    },

    ngMaterial: {
      deps: ['angular', 'ngAnimate', 'ngAria', 'ngMdIcons', 'ngMessages'],
      exports: 'ngMaterial'
    },

    ngMdIcons: {
      deps: ['angular'],
      exports: 'ngMdIcons'
    },

    ngMessages: {
      deps: ['angular'],
      exports: 'ngMessages'
    },

    'app' : [
      'angular',
      'ngMaterial'
    ]
  },
  deps: ['app']
});
