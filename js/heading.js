


/**
 * Get the quickest turn direction to turn from two bearings

 * @param {int} actual the current heading
 * @param {int} assigned the destination heading
 * @return {string} 'left' || or 'right'
 */
function calcTurnDirection(actual, assigned) {
   return (actual - assigned + 360) % 360 > 180 ? 'right': 'left';
}

/**
 * Calculate turn rate an aircraft will never turn more than the standard three degrees / second
 * though this function does not take into account when the last time it was called. This function
 * does not consider direction either.
 *
 * @param {int} actual the current heading
 * @param {int} assigned the assigned heading
 * @return {int} the number of degrees to turn the aircraft
 */
function calcTurnRate(actual, assigned) {
    if (Math.abs(actual - assigned) < 3) {
        return Math.abs(actual - assigned);
    } else {
        return 3
    }
}

function calcNewHeading(actual, assigned, direction) {

    if (actual == assigned) {
        return actual;
    }

    if (typeof direction === 'undefined') {
        direction = calcTurnDirection(actual, assigned);
    }

    turnAmount = calcTurnRate(actual, assigned);

    if (direction == 'right') {
        right = (turnAmount + actual)
        if (right > 360) {
            return right - 360;
        } else {
            return right;
        }
    } else {
        left = (actual - turnAmount);
        if (left < 0) {
            return left + 360;
        } else {
            return left;
        }
    }

}

module.exports =  {
    calcTurnDirection: calcTurnDirection,
    calcTurnRate: calcTurnRate,
    calcNewHeading: calcNewHeading
}
