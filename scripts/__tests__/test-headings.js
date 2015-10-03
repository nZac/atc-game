jest.dontMock('../headings');

describe('calcTurnDirection', function(){
    it('returns right for +20', function() {
        var headings = require('../headings');
        expect(headings.calcTurnDirection(0, 20)).toBe(true);
    });
    it('returns left for -20', function() {
        var headings = require('../headings');
        expect(headings.calcTurnDirection(20, 0)).toBe(false);
    });
    it('returns left for 180', function() {
        var headings = require('../headings');
        expect(headings.calcTurnDirection(20, 0)).toBe(false);
    });
    it('returns left for 0', function() {
        var headings = require('../headings');
        expect(headings.calcTurnDirection(0, 0)).toBe(false);
    });
    it('returns left for 360', function() {
        var headings = require('../headings');
        expect(headings.calcTurnDirection(360, 360)).toBe(false);
    });
});


describe('calcTurnAmount', function(){
    it('returns remainder for less than three', function() {
        var headings = require('../headings');
        expect(headings.calcTurnAmount(0, 2)).toBe(2);
    });
    it('returns 3 everything else', function() {
        var headings = require('../headings');
        expect(headings.calcTurnAmount(0, 4)).toBe(3);
        expect(headings.calcTurnAmount(0, 10)).toBe(3);
        expect(headings.calcTurnAmount(20, 0)).toBe(3);
        expect(headings.calcTurnAmount(20, 10)).toBe(3);
    });
});


describe('calculateHeading', function(){
    it('returns actual when no change', function() {
        var headings = require('../headings');
        expect(headings.calcHeading(0, 0)).toBe(0);
    });
    it('returns three more than current', function() {
        var headings = require('../headings');
        expect(headings.calcHeading(0, 3)).toBe(3);
    });
});

