describe('The MainCtrl', function() {
    var mainCtrl;

    beforeEach(module('gameOfLife'));

    beforeEach(inject(function($controller) {
        mainCtrl = $controller('MainCtrl');
    }));

    it('exposes a grid property', function() {
        expect(mainCtrl.grid).toBeDefined();
    });
});