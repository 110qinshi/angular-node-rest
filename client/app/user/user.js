/**
 *  open.user Module
 *
 * 用户 Description
 */

;(function () {
  'use strict';

angular.module('open.user')
  .config(fUserConfig);

  function fUserConfig ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        views: {
          'view': {
              templateUrl: 'app/user/login/login.html',
              controller: 'LoginController'
          }
        },  
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('app/user/login/login.controller.js');
          }]
        }      
      });
  }
  
})();