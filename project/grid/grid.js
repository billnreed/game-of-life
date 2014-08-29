function GridDirective() {
    return {
        restrict    : 'E',
        templateUrl : 'grid/grid-template.html',
        controller  : 'GridCtrl',
        controllerAs: 'grid'
    };
}

function GridCtrl(GridService) {
    this.grid = GridService.grid;

}

function GridService() {
    this.grid = [
        [
            {isAlive: false},
            {isAlive: false},
            {isAlive: false},
            {isAlive: false}
        ],
        [
            {isAlive: false},
            {isAlive: false},
            {isAlive: false},
            {isAlive: false}
        ],
        [
            {isAlive: false},
            {isAlive: false},
            {isAlive: false},
            {isAlive: false}
        ],
        [
            {isAlive: false},
            {isAlive: false},
            {isAlive: false},
            {isAlive: false}
        ]
    ];

    this.tick = function() {
        var gridCopy = angular.copy(this.grid);

        for (var i = 0; i < this.grid.length; i++) {
            for (var j = 0; j < this.grid[i].length; j++) {
                var aliveNeighborCount = this.getAliveNeighborCount(i, j);

            }
        }

        this.grid = gridCopy;
    };

    this.getAliveNeighborCount = function(row, col) {
        return (+this.grid[row - 1][col].isAlive)
            + (+this.grid[row + 1][col].isAlive)
            + (+this.grid[row][col - 1].isAlive)
            + (+this.grid[row][col + 1].isAlive)
            + (+this.grid[row - 1][col - 1].isAlive)
            + (+this.grid[row - 1][col + 1].isAlive)
            + (+this.grid[row + 1][col - 1].isAlive)
            + (+this.grid[row + 1][col + 1].isAlive);
    };
}

angular.module('gameOfLife')
    .directive('grid', GridDirective)
    .controller('GridCtrl', GridCtrl)
    .service('GridService', GridService);