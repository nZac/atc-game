
var Heading = {
    course: 0,
    _add: function(degrees){
        temp = degrees + course;

        if (temp > 360) {
            return temp - 360;
        } else {
            return temp
        }
    },
    _subtract: function(degrees){
        temp = degrees - course;

        if (temp < 0) {
            return temp + 360;
        } else {
            return temp
        }
    },
    turn: function (degrees) {
        if (degrees == 0) {
            return course;
        } else if (degrees > 0) {
            return course = add(degrees);
        } else if (degrees < 0) {
            return course = subtract(degrees);
        }
    },
    inverse: function() {
        var inverse = course - 180;

        if (inverse < 0) {
           return inverse + 360;
        } else {
            return inverse;
        }
    }
}



function toRad(deg) {
    return deg * Math.PI / 180

}

function toDeg(raf) {

}


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
        return 3  // Standard turn rate
    }
}

/**
 * Based on a current heading an assigned heading, and a direction with a standard
 * rate of turn, calculate a new heading. It is assumed that the caller is properly separating calls to this function by 1 second
 *
 * @param {int} actual currently assigned heading
 * @param {int} assigned destination heading
 * @param {string} direction which direction the turn should be
 * @return {int} the new heading
 *
 */
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

/**
 * Given a heading, return he opposite
 *
 * @param {int} heading the heading to inverse
 * @return {int} reversed heading
 */
function inverseHeading(heading) {

    var inverse = heading - 180;

    if (inverse < 0) {
       return inverse + 360;
    } else {
        return inverse;
    }
}


module.exports =  {
    calcTurnDirection: calcTurnDirection,
    calcTurnRate: calcTurnRate,
    calcNewHeading: calcNewHeading,
    inverseHeading: inverseHeading,
    toRad: toRad
}
