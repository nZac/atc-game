var konva = require('konva'),
    _ = require('underscore'),
    map = require('./map.js');


var scope = {};

function initialize(mapName) {
    var aircraft = new konva.Layer(),
        mapLayer = new konva.Layer(),
        display = new konva.Stage({
            width: 1000,
            height: 1000,
            container: 'scope'
        });

    mapData = require('./maps/msp.js')();

    map.renderMap(display.height(), display.width(), mapData, mapLayer);

    scope = {
        display: display,
        map: mapData,
        layers: {
            aircraft: aircraft,
            map: mapLayer
        }
    }

    _.map(scope.layers, function(v, k){ scope.display.add(v); });

    return scope;
}

function getScope() {
    return scope;
};

module.exports = {
    initialize: initialize,
    getScope: getScope
}
