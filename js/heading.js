define([
], function() {

    calcTurnDirection = function (actual, assigned) {
       return (actual - assigned + 360) % 360 > 180
    },

   calcTurnAmount = function (actual, assigned) {
        if (Math.abs(actual - assigned) < 3) {
            return Math.abs(actual - assigned);
        } else {
            return 3
        }
    },

    calcHeading = function (actual, assigned, direction) {

        if (actual == assigned) {
            return actual;
        }

        if (typeof direction === 'undefined') {
            direction = calcTurnDirection(actual, assigned);
        }

        turnAmount = calcTurnAmount(actual, assigned);

        if (direction) {
            if ((turnAmount + actual) <= 360 ) {
                return turnAmount + actual;
            } else {
                return (turnAmount + actual) - 360;
            }
        } else {
            if ((turnAmount - actual) <= 0) {
                return turnAmount - actual;
            } else {
                return (turnAmount - actual) + 360;
            }
        }
    }
    return {
        calcTurnDirection: calcTurnDirection,
        calcTurnAmount: calcTurnAmount,
        calcHeading: calcHeading
    }
});
