/**
 * Created by Administrator on 2015/9/28.
 */
var MUST_INTEGER = /^\-?\d+$/;
angular.module('openApp').controller('regCtrl_2',function($scope){

    var _scope_type = ['企业版','户外版','媒体版'];
    $scope.scope_type = _scope_type;
    $scope.sel_type  = _scope_type[0];

    var _color = ['#c03000','#f96498','#5775b4','#60a393','#7c5d79','#81c33c',
    '#bf5b4d','#dac063','#814d8e','#373a5a','#485b77'];

    $scope._colors = _color;

    $scope.main_color = _color[0];

    $scope.setColor = function(col) {
        //debugger;
        $scope.main_color = col;
    };

    $scope.save = function(appInfo){
        console.log(appInfo.name+","+appInfo.desc+","+appInfo.ico);
        return false;
    };
}).directive('nospecal',function(){
    return {
        require: 'ngModel',
        link   : function(scope, elm, attrs, ctrl){
            ctrl.$parsers.unshift(function(viewValue){
                console.log("viewVale:"+viewValue);
                if(MUST_INTEGER.test(viewValue)) {
                    ctrl.$setValidity('nospecal',true);
                    console.log('validate:true');
                    return viewValue;
                }else {
                    ctrl.$setValidity('nospecal',false);
                    console.log('validate:false');
                    return undefined;
                }
            });
        }
    };
});