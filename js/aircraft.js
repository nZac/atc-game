var konva = require('konva'),
    _ = require('underscore'),
    scope = require('./scope'),
    heading = require('./heading'),
    map = require('./map');

var _blipSize = 6,
    _wingsOffset = 6 * 2;

var _aircraftTypes = [
    {
        name: 'MD80',
        maxSpeed: 300,
    }
];

function getAircraftTypes() {
    return _aircraftTypes;
}

function _createArrival() {

    var scopeCtx = scope.getScope();
    var arrivalFix = _.sample(scopeCtx.map.arrivalFixes);
    var cords = map.getArrivalCords(
            scopeCtx.display.height(),
            scopeCtx.display.width(),
            arrivalFix.course
    );
    var x = cords.x,
        y = cords.y
        heading = arrivalFix.heading,
        type = _.sample(_aircraftTypes);

    if (type.maxSpeed < 240) {
        var speed = type.maxSpeed;
    } else {
        var speed = 240;
    }

    return {
        x: x,
        y: y,
        heading: heading,
        assignedHeading: heading,
        type: type,
        speed: speed,
        movementType: 'arrival'
    }
}

function _createSprite(plane) {
    dot = new konva.Rect({
        x: plane.x,
        y: plane.y,
        width: _blipSize,
        height: _blipSize,
        stroke: 'white',
        strokeWidth: 1
    });

    wings = new konva.Line({
        points: [
            plane.x - _wingsOffset, plane.y + _blipSize / 2,
            plane.x + _wingsOffset + _blipSize, plane.y + _blipSize / 2,
        ],
        stroke: 'white',
        strokeWidth: 1
    });

    var sprite = new konva.Group();

    sprite.add(dot);
    sprite.add(wings);

    return sprite
}


function create() {
    var movementType = ['arrival']; // Eventually add departures

    var movement = _.sample(movementType);

    if (movement == 'arrival') {
        plane = _createArrival();
    }

    sprite = _createSprite(plane);
    plane.sprite = sprite;

    return plane
};

function fly(plane, frame) {

    var velocity = plane.speed / 100;

    velX = Math.sin(plane.heading * Math.PI / 180) * velocity;
    velY = Math.cos(plane.heading * Math.PI / 180) * velocity * -1;

    plane.sprite.move({x: velX, y: velY});
    return plane;
}

module.exports = {
    create: create,
    getAircraftTypes: getAircraftTypes,
    fly: fly
};
