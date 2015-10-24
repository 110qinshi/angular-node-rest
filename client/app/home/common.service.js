/**
 * Created by xianliu on 2015/10/24.
 */
;(function(){
    'use strict'
    angular.module('openApp')
        .factory('comModal', fComModalService);

    function fComModalService($animate, $compile, $rootScope, $controller, $q, $http, $templateCache, $document, modalConfig) {

        return function modalFactory(config) {
            if(!(!config.template ^ !config.templateUrl)) {
                throw new Error('请输入要引用的模板!');
            }
            var controller      = config.controller || null,
                controllerAs    = config.controllerAs,
                container       = angular.element(config.container || $document[0].querySelector(modalConfig.containerSelector)),
                root            = angular.element($document[0].querySelector('html')),
                element         = null,
                html,
                scope;
            //加载模板
            if(config.template) {
                html = $q.when(config.template);
            }else {
                html = $http.get(config.templateUrl, {cache:$templateCache})
                    .then(function(response) {
                        return response.data;
                    });
            }
            //显示
            function activate(locals) {
                return html.then(function(html) {
                    if(!element) {
                        attach(html,locals);
                    }
                });
            }

            function attach(html, locals) {
                element = angular.element(html);//解析成dom
                if(element.length === 0) {
                    throw new Error("模板内容不能为空");
                }
                scope = $rootScope.$new();
                if(controller) {
                    if(!locals) {
                        locals = {};
                    }
                    for(var prop in locals) {
                        scope[prop] = locals[prop];
                    }
                    var ctrl = $controller(controller, {$scope:scope});
                    if(controllerAs) {
                        scope[controllerAs] = ctrl;
                    }
                }else if(locals) {
                    for(var prop in locals) {
                        scope[prop] = locals[prop];
                    }
                }
                $compile(element)(scope);
                //container.attr();
                setTimeout(function() {
                    deactivate();
                },3000);
                return $animate.enter(element, container);
            }

            function deactivate() {
                if(!element) {
                    return $q.when();
                }
                return $animate.leave(element).then(function() {
                    scope.$destroy();
                    scope = null;
                    element.remove();
                    element = null;
                });
            }

            return {
                activate:activate,
                deactivate:deactivate
            };
        };
    }
    fComModalService.$inject = ['$animate', '$compile', '$rootScope', '$controller', '$q', '$http', '$templateCache', '$document', 'modalConfig'];
})();