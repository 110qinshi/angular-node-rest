/**
 *  open.home Module
 *
 * 主页 Description
 */

/*;(function() {
	'use strict';
	angular.module('open.home').controller('HomeController', fHomeController);

	function fHomeController() {
		

	}


})();*/

'use strict';
	angular.module('openApp').controller('HomeController', fHomeController)
		.controller('dialogController', fDialogController)
		.factory('homeComm', fHomeCommService);

	function fHomeCommService(comModal) {
		var config = {
			controller:'dialogController',
			templateUrl:'commonDialog.html'
		};
		return comModal(config);
	}

	function fDialogController($scope,homeComm) {
		$scope.close = function() {
			homeComm.deactivate();
		}
		$scope.sure = function() {
			if($scope.callback && typeof $scope.callback === 'function') {
				$scope.callback.apply(this,[]);
			}
		}
	}
	function fHomeController($scope,homeComm) {

		console.log("xxxxx dialog");
		$scope.openDialog = function() {
			homeComm.activate({title:'你好',callback:function(){
				alert('dialog1');
			}});
		}
		$scope.openDialog2 = function($scope) {
			homeComm.activate({title:'你好2'});
		}
	}
fHomeController.inject = ['$scope','comModal'];