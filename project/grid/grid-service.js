angular.module('gameOfLife')
    .service('GridService', function(GridRuleService, $interval) {
        var intervalHandle = null;

        this.grid = [
            [
                {isAlive: true},
                {isAlive: true},
                {isAlive: false},
                {isAlive: false}
            ],
            [
                {isAlive: true},
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

        this.toggleCell = function(row, col) {
            this.grid[row][col].isAlive = !this.grid[row][col].isAlive;
        };

        this.tick = function() {
            var gridCopy = angular.copy(this.grid);

            for (var row = 0; row < this.grid.length; row++) {
                for (var col = 0; col < this.grid[row].length; col++) {
                    var aliveNeighborCount = this.getAliveNeighborCount(row, col);
                    gridCopy[row][col].isAlive = GridRuleService.staysAlive(this.grid[row][col].isAlive, aliveNeighborCount);
                }
            }

            for (var row = 0; row < this.grid.length; row++) {
                for (var col = 0; col < this.grid[row].length; col++) {
                    this.grid[row][col] = gridCopy[row][col];
                }
            }
        };

        this.run = function(interval) {
            intervalHandle = $interval(angular.bind(this, function() {
                this.tick();
            }), interval);
        };

        this.stop = function() {
            $interval.cancel(intervalHandle);
        };

        this.getAliveNeighborCount = function(row, col) {
            var count = 0;

            var isTopRow = (row === 0);
            var isBottomRow = (row === this.grid.length - 1);
            var isLeftCol = (col === 0);
            var isRightCol = (col === this.grid[row].length - 1);

            if (!isTopRow) {
                //top middle
                count += this.grid[row - 1][col].isAlive ? 1 : 0;
                if (!isLeftCol) {
                    //top left
                    count += this.grid[row - 1][col - 1].isAlive ? 1 : 0;
                }
                if (!isRightCol) {
                    //top right
                    count += this.grid[row - 1][col + 1].isAlive ? 1 : 0;
                }
            }

            if (!isLeftCol) {
                //middle left
                count += this.grid[row][col - 1].isAlive ? 1 : 0;
            }

            if (!isRightCol) {
                //middle right
                count += this.grid[row][col + 1].isAlive ? 1 : 0;
            }

            if (!isBottomRow) {
                //bottom middle
                count += this.grid[row + 1][col].isAlive ? 1 : 0;
                if (!isLeftCol) {
                    //bottom left
                    count += this.grid[row + 1][col - 1].isAlive ? 1 : 0;
                }
                if (!isRightCol) {
                    //bottom right
                    count += this.grid[row + 1][col + 1].isAlive ? 1 : 0;
                }
            }

            return count;
        };
    });
