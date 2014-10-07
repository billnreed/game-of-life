angular.module('gameOfLife')
    .controller('GridCtrl', function(GridService) {
       this.grid = GridService.grid;
       this.toggleCell = GridService.toggleCell;
    });


