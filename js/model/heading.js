/**
 * Heading Object to work with headings a little easier.
 *
 * @param {int} course the course of the heading
 */
var Heading = function(course) {
    this._course = (typeof course === 'undefined') ? 0 : course
}

/**
 * Set the course of this heading.
 * @param {int} degrees the degrees to the set the heading too.
 *
 */
Heading.prototype.setCourse = function(degrees) {
    this._course = degrees;
}

/**
 * Return the course of this heading
 * @return {int} the course
 */
Heading.prototype.getCourse = function(degrees) {
    return this._course;
}

/**
 * Bounds check an incoming heading
 *
 * @param {int} heading the heading to bounds check
 * @return {bool} whether or not the heading within the bounds
 *
 */
Heeading.prototype.validHeading = function(heading) {
    return (heading <= 360  && heading >=0) ? true : false;
}

/**
 * description
 *
 */
Heading.prototype.add = function(degrees){
    temp = degrees + this.course;

    if (temp > 360) {
        return temp - 360;
    } else {
        return temp
    }
}

Heading.prototype.subtract = function(degrees){
    temp = degrees - this.course;

    if (temp < 0) {
        return temp + 360;
    } else {
        return temp
    }
}

Heading.prototype.inverse = function() {
    var inverse = this.course - 180;

    if (inverse < 0) {
       return inverse + 360;
    } else {
        return inverse;
    }
}

Heading.prototype.toRad = function() {
    return deg * Math.PI / 180;
}


module.exports =  {
    Heading: Heading
}
