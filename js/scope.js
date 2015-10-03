var konva = require('konva');

var _scope = {};

function initialize() {
    display = new konva.Stage({
        width: window.innerWidth,
        height: window.innerHeight,
        container: 'scope'
    });

    aircraft = new konva.Layer();

    map = {
        arrivalFixes: [
            {
                x: 750,
                y: 500,
                initialHeading: 135
            }
        ]
    }

    display.add(aircraft);

    _scope = {
        display: display,
        map: map,
        layers: {
            aircraft: aircraft
        }
    }
    return _scope;
}

function getScope() {
    return _scope;
};

module.exports = {
    initialize: initialize,
    getScope: getScope
}
