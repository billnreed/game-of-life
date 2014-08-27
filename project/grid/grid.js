function Grid() {
    return {
        restrict: 'E',
        templateUrl: 'grid/grid-template.html',
        controller: 'GridCtrl',
        controllerAs: 'grid'
    };
}

function GridCtrl(GridService) {
    this.grid = GridService.grid;
}

function GridService() {
    this.grid = [[{isAlive: false}, {isAlive: false}, {isAlive: false}, {isAlive: false}],
        [{isAlive: false}, {isAlive: false}, {isAlive: false}, {isAlive: false}],
        [{isAlive: false}, {isAlive: false}, {isAlive: false}, {isAlive: false}],
        [{isAlive: false}, {isAlive: false}, {isAlive: false}, {isAlive: false}]];
}

angular.module('gameOfLife')
    .directive('grid', Grid)
    .controller('GridCtrl', GridCtrl)
    .service('GridService', GridService);