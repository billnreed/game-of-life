describe('The GridService', function() {
    var gridService;

    beforeEach(module('gameOfLife'));

    beforeEach(inject(function(GridService) {
        gridService = GridService;
    }));

    it('exposes a grid property', function() {
        expect(gridService.grid).toBeDefined();
    });
});