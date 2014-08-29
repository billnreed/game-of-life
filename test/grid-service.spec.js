describe('The GridService', function() {
    var gridService;

    beforeEach(module('gameOfLife'));

    beforeEach(inject(function(GridService) {
        gridService = GridService;

        gridService.grid = [
            [
                {isAlive: false},
                {isAlive: false},
                {isAlive: false}
            ],
            [
                {isAlive: false},
                {isAlive: false},
                {isAlive: false}
            ],
            [
                {isAlive: false},
                {isAlive: false},
                {isAlive: false}
            ]
        ];
    }));

    it('exposes a grid property', function() {
        expect(gridService.grid).toBeDefined();
    });

    describe('finding the number of alive neighbors', function() {
        describe('of a center cell', function() {
            var row = 1;
            var col = 1;

            it('finds 0 for no alive neighbors', function() {
                expect(gridService.getAliveNeighborCount(row, col)).toEqual(0);
            });

            describe('for 1 live neighbor', function() {
                it('finds 1 for a live neighbor on an edges center', function() {
                    gridService.grid[row - 1][col].isAlive = true;

                    expect(gridService.getAliveNeighborCount(row, col)).toEqual(1);
                });

                it('finds 1 for a live neighbor on a diagonal', function() {
                    gridService.grid[row - 1][col - 1].isAlive = true;

                    expect(gridService.getAliveNeighborCount(row, col)).toEqual(1);
                });
            });

            describe('for 2 live neighbors', function() {
                it('finds 2 for two neighbors on opposite edges', function() {
                    gridService.grid[row][col - 1].isAlive = true;
                    gridService.grid[row + 1][col + 1].isAlive = true;

                    expect(gridService.getAliveNeighborCount(row, col)).toEqual(2);
                });
                it('finds 2 for two adjacent live neighbors', function() {
                    gridService.grid[row + 1][col].isAlive = true;
                    gridService.grid[row + 1][col + 1].isAlive = true;

                    expect(gridService.getAliveNeighborCount(row, col)).toEqual(2);
                });
                it('finds 2 for two neighbors on adjacent edges', function() {
                    gridService.grid[row - 1][col].isAlive = true;
                    gridService.grid[row][col - 1].isAlive = true;

                    expect(gridService.getAliveNeighborCount(row, col)).toEqual(2);
                });
            });

            describe('for 3 live neighbors', function() {
                it('finds 3 for three live neighbors on one edge', function() {
                    gridService.grid[row - 1][col - 1].isAlive = true;
                    gridService.grid[row - 1][col].isAlive = true;
                    gridService.grid[row - 1][col + 1].isAlive = true;

                    expect(gridService.getAliveNeighborCount(row, col)).toEqual(3);
                });

                it('finds 3 for one live neighbor on three edges', function() {
                    gridService.grid[row - 1][col].isAlive = true;
                    gridService.grid[row + 1][col].isAlive = true;
                    gridService.grid[row][col - 1].isAlive = true;

                    expect(gridService.getAliveNeighborCount(row, col)).toEqual(3);
                });

                it('finds 3 for one live two live neighbors on edge and one live neighbor on another', function() {
                    gridService.grid[row - 1][col - 1].isAlive = true;
                    gridService.grid[row - 1][col].isAlive = true;
                    gridService.grid[row + 1][col].isAlive = true;

                    expect(gridService.getAliveNeighborCount(row, col)).toEqual(3);
                });
            });

            describe('for 4 live neighbors', function() {
                it('finds 4 for four live neighbors', function() {
                    gridService.grid[row - 1][col - 1].isAlive = true;
                    gridService.grid[row - 1][col + 1].isAlive = true;
                    gridService.grid[row][col + 1].isAlive = true;
                    gridService.grid[row - 1][col].isAlive = true;

                    expect(gridService.getAliveNeighborCount(row, col)).toEqual(4);
                });
            });

            describe('for 5 live neighbors', function() {
                it('finds 5 for five live neighbors', function() {
                    gridService.grid[row - 1][col - 1].isAlive = true;
                    gridService.grid[row - 1][col].isAlive = true;
                    gridService.grid[row - 1][col + 1].isAlive = true;
                    gridService.grid[row + 1][col - 1].isAlive = true;
                    gridService.grid[row + 1][col].isAlive = true;

                    expect(gridService.getAliveNeighborCount(row, col)).toEqual(5);
                });
            });

            describe('for 6 live neighbors', function() {
                it('finds 6 for six live neighbors', function() {
                    gridService.grid[row - 1][col - 1].isAlive = true;
                    gridService.grid[row - 1][col].isAlive = true;
                    gridService.grid[row - 1][col + 1].isAlive = true;
                    gridService.grid[row + 1][col - 1].isAlive = true;
                    gridService.grid[row + 1][col].isAlive = true;
                    gridService.grid[row + 1][col + 1].isAlive = true;

                    expect(gridService.getAliveNeighborCount(row, col)).toEqual(6);
                });
            });

            describe('for 7 live neighbors', function() {
                it('finds 7 for seven live neighbors', function() {
                    gridService.grid[row - 1][col - 1].isAlive = true;
                    gridService.grid[row - 1][col].isAlive = true;
                    gridService.grid[row - 1][col + 1].isAlive = true;
                    gridService.grid[row + 1][col - 1].isAlive = true;
                    gridService.grid[row + 1][col].isAlive = true;
                    gridService.grid[row + 1][col + 1].isAlive = true;
                    gridService.grid[row][col - 1].isAlive = true;

                    expect(gridService.getAliveNeighborCount(row, col)).toEqual(7);
                });
            });

            describe('for 8 live neighbors', function() {
                it('finds 8 for eight live neighbors', function() {
                    gridService.grid[row - 1][col - 1].isAlive = true;
                    gridService.grid[row - 1][col].isAlive = true;
                    gridService.grid[row - 1][col + 1].isAlive = true;
                    gridService.grid[row + 1][col - 1].isAlive = true;
                    gridService.grid[row + 1][col].isAlive = true;
                    gridService.grid[row + 1][col + 1].isAlive = true;
                    gridService.grid[row][col - 1].isAlive = true;
                    gridService.grid[row][col + 1].isAlive = true;

                    expect(gridService.getAliveNeighborCount(row, col)).toEqual(8);
                });
            });
        });

        describe('of an edge cell', function() {

            describe('on the top', function() {
                var row = 0;
                var col = 1;

                it('finds 0 for no alive neighbors', function() {
                    expect(gridService.getAliveNeighborCount(row, col)).toEqual(0);
                });
            });
        });
    });
});