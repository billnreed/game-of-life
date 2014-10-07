angular.module('gameOfLife')
    .directive('controls', function() {
        return {
            restrict: 'E',
            templateUrl: 'controls/controls-template.html',
            controller: 'ControlsCtrl',
            controllerAs: 'controlsCtrl'
        };
    });
