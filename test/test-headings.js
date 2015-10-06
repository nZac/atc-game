var chai = require('chai'),
    heading = require('../js/heading'),
    assert = chai.assert;


describe('Heading Object', function(){

    it('has a course', function(){
        obj = new heading.Heading();
        assert.
    });


});



describe('calcTurnDirection', function(){
    it('returns right for +20', function() {
        assert.equal(heading.calcTurnDirection(0, 20), 'right');
    });
    it('returns left for -20', function() {
        assert.equal(heading.calcTurnDirection(20, 0), 'left');
    });
    it('returns left for 180', function() {
        assert.equal(heading.calcTurnDirection(0, 180), 'left');
    });
    it('returns left for 0', function() {
        assert.equal(heading.calcTurnDirection(0, 0), 'left');
    });
    it('returns left for 360', function() {
        assert.equal(heading.calcTurnDirection(360, 360), 'left');
    });
});


describe('calcTurnAmount', function(){
    it('returns remainder for less than three', function() {
        assert.equal(heading.calcTurnRate(0, 2), 2);
    });
    it('returns 3 everything else', function() {
        assert.equal(heading.calcTurnRate(0, 4), 3);
        assert.equal(heading.calcTurnRate(0, 10), 3);
        assert.equal(heading.calcTurnRate(20, 0), 3);
        assert.equal(heading.calcTurnRate(20, 10), 3);
    });
});


describe('calculateHeading', function(){
    it('returns actual when no change', function() {
        assert.equal(heading.calcNewHeading(30, 30) , 30);
    });
    it('returns three more than current', function() {
        assert.equal(heading.calcNewHeading(0, 3), 3);
    });
    it('can force a right direction', function() {
        assert.equal(heading.calcNewHeading(0, 3, 'right'), 3);
        assert.equal(heading.calcNewHeading(0, 10, 'right'), 3);
        assert.equal(heading.calcNewHeading(180, 0, 'right'), 183);
        assert.equal(heading.calcNewHeading(180, 270, 'right'), 183);
    });
    it('can force a left direction', function() {
        assert.equal(heading.calcNewHeading(0, 10, 'left'), 357);
        assert.equal(heading.calcNewHeading(180, 90, 'left'), 177);
    });
});

