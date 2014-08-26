function MainCtrl(GridService) {
    this.grid = GridService.grid;
}

angular.module('gameOfLife')
    .controller('MainCtrl', MainCtrl);