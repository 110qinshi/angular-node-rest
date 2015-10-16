/**
 *  open.home Module
 *
 * 主页 Description
 */

;(function () {
  
'use strict';

angular.module('open.home')
  .config(fHomeConfig);

  function fHomeConfig($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          'view': {
              templateUrl: 'app/home/home.html',
              controller: 'HomeController'
          }
        },  
        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load('app/home/home.controller.js');
          }]
        }      
      });
  }
})();