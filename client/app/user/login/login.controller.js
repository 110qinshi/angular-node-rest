/**
 *  open.user Module
 *
 * 用户登录 Description
 */

;(function() {
	'use strict';
	angular.module('open.user')
		.controller('LoginController', fLoginController);

	function fLoginController($scope, $http, $state, $rootScope) {
		$scope.login = {}; //登录对象
		$scope.valid='';  //验证提示信息
		$scope.loginUser = function() {
			$http.post('/api/user/login', $scope.login).success(function(data) {
				if(data.code === 0){
					$rootScope.user = $scope.login;  //将登录用户信息保存到全局
					$state.go('home');  //进入主页
				}
				else{
					$scope.valid = data.msg;
				}
			});
		};

		$scope.blur = function () {
			$scope.valid='';
		};

	}

	fLoginController.$inject = ['$scope', '$http', '$state', '$rootScope'];
})();