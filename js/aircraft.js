define([
    'konva',
    'scope',
    'underscore',
    'heading',
], function(konva, scope, _, heading){

    var _blipSize = 6,
        _wingsOffset = 6 * 2;

    var _aircraftTypes = [
        {
            name: 'MD80',
            maxSpeed: 300,
        }
    ];

    var getAircraftTypes = function() {
        return _aircraftTypes;
    }

    var _createArrival = function() {

        var scopeCtx = scope.getScope();
        var arrivalFix = _.sample(scopeCtx.map.arrivalFixes);
        var x = arrivalFix.x,
            y = arrivalFix.y,
            heading = arrivalFix.initialHeading,
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
    };

    var _createSprite = function(plane) {
        dot = new Konva.Rect({
            x: plane.x,
            y: plane.y,
            width: _blipSize,
            height: _blipSize,
            stroke: 'white',
            strokeWidth: 1
        });

        wings = new Konva.Line({
            points: [
                plane.x - _wingsOffset, plane.y + _blipSize / 2,
                plane.x + _wingsOffset + _blipSize, plane.y + _blipSize / 2,
            ],
            stroke: 'white',
            strokeWidth: 1
        });

        var sprite = new Konva.Group();

        sprite.add(dot);
        sprite.add(wings);

        return sprite
    }


    var create = function() {
        var movementType = ['arrival']; // Eventually add departures

        var movement = _.sample(movementType);

        if (movement == 'arrival') {
            plane = _createArrival();
        }

        sprite = _createSprite(plane);
        plane.sprite = sprite;

        return plane
    };

    var fly = function(plane, frame) {

        var velocity = plane.speed / 100;

        velX = Math.sin(plane.heading * Math.PI / 180) * velocity;
        velY = Math.cos(plane.heading * Math.PI / 180) * velocity * -1;

        plane.sprite.move({x: velX, y: velY});
        return plane;
    }

    return {
        create: create,
        getAircraftTypes: getAircraftTypes,
        fly: fly
    };
});
