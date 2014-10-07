angular.module('gameOfLife')
    .directive('grid', function() {
        return {
            restrict    : 'E',
            templateUrl : 'grid/grid-template.html',
            controller  : 'GridCtrl',
            controllerAs: 'gridCtrl'
        };
    });
