function GridService() {
    this.grid = [[{isAlive: false}, {isAlive: false}, {isAlive: false}, {isAlive: false}],
                [{isAlive: false}, {isAlive: false}, {isAlive: false}, {isAlive: false}],
                [{isAlive: false}, {isAlive: false}, {isAlive: false}, {isAlive: false}],
                [{isAlive: false}, {isAlive: false}, {isAlive: false}, {isAlive: false}]];
}

angular.module('gameOfLife')
    .service('GridService', GridService);