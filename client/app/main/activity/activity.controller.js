/**
 *  open.home Module
 *
 * 主页 Description
 */

;(function() {
	'use strict';
	angular.module('open.activity').controller('ActivityController', fHomeController);

	function fHomeController($scope, $http) {
		console.log("test activity wayky!");
		$http.get('/api/activity/getActivityList', {}).success(function(data) {
			$scope.activitys = data;
		});
		$scope.selectLi = function(_this) {
			if(this.bg_color === "checked") {
				this.bg_color = "";
			}else {
				unnextchecked(this);
				unprechecked(this);
				this.bg_color = "checked";
			}
		}
		function unnextchecked(_scope) {
			if(_scope.$$nextSibling) {
				_scope.$$nextSibling.bg_color = "";
				unnextchecked(_scope.$$nextSibling);
			}
		}
		function unprechecked(_scope) {
			if(_scope.$$prevSibling) {
				_scope.$$prevSibling.bg_color = "";
				unprechecked(_scope.$$prevSibling);
			}
		}
	}

	fHomeController.$inject = ['$scope','$http'];
})();