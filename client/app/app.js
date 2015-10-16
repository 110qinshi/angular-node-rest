(function() {
  'use strict';

  angular.module('openApp', [
      'ngCookies',
      'ngSanitize',
      'ui.router',
      'oc.lazyLoad',
      'open.core'
    ])
   
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$locationProvider', fOpenAppConfig]);

  function fOpenAppConfig($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/login');
    $locationProvider.html5Mode(true); //去掉菜单栏url中的#   .hashPrefix('!');

    

  }
})();



