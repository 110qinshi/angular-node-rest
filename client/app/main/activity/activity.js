/**
 *  open.activity Module
 *
 *  活动 Description
 */

;(function () {

    'use strict';

    angular.module('open.activity')
        .config(fActivity);

    function fActivity($stateProvider) {
        $stateProvider
            .state('home.activity', {
                url: '/activity',
                views: {
                    'view': {
                        templateUrl: 'app/main/activity/activity.html',
                        controller: 'ActivityController'
                    }
                },
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load('app/main/activity/activity.controller.js');
                    }]
                }
            }).state('add',{
                url: '/add',
                views:{
                    'view':{
                        templateUrl:'app/main/activity/add/addActivity.html',
                        controller :'addActivityController'
                    }
                },
                resolve:{
                    loadMyCtrl:['$ocLazyLoad', function($ocLazyLoad){
                        return $ocLazyLoad.load('app/main/activity/add/add.activity.controller.js');
                    }]
                }
            });
    }
    fActivity.$inject = ['$stateProvider'];
})();