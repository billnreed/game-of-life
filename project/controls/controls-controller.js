angular.module('gameOfLife')
    .controller('ControlsCtrl', function(GridService) {
        this.interval = 500;

        this.tick = function() {
            GridService.tick();
        };

        this.run = function() {
            GridService.run(this.interval);
        };

        this.stop = function() {
            GridService.stop();
        };
    });
