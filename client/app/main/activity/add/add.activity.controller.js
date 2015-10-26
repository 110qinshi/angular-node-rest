/**
 * Created by xianliu on 2015/10/18.
 */
;(function(){
    angular.module('open.activity')
        .controller('addActivityController',addActivityController)
        .controller('activityDialogController',fActivityDialogController)
        .factory('activityDialog',fActivityDialogService);

    function fActivityDialogService(comModal) {
        return comModal({
            controller:'activityDialogController',
            templateUrl:'activityDialog.html'
        });
    }
    fActivityDialogService.inject = ['comModal'];

    function addActivityController($scope,activityDialog) {
        console.log('add activity!');
        debugger;
        $scope.openDialog = function() {
            activityDialog.activate();
        }
    }
    addActivityController.$inject = ['$scope','activityDialog'];

    function fActivityDialogController($scope,activityDialog) {
        $scope.close = activityDialog.deactivate;
    }
})();