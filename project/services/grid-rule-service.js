angular.module('gameOfLife')
    .service('GridRuleService', function() {
        this.staysAlive = function(isAlive, numAliveNeighbors) {
            if (isAlive) {
                if (numAliveNeighbors < 2) {
                    return false;
                } else if (numAliveNeighbors === 2 || numAliveNeighbors === 3) {
                    return true;
                } else if (numAliveNeighbors > 3) {
                    return false;
                }
            } else {
                if (numAliveNeighbors === 3) {
                    return true;
                } else {
                    return false;
                }
            }
        };
    });
