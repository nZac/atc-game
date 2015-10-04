var konva = require('konva'),
    heading = require('./heading.js');

var _scaleHeight = 1000,
    _scaleWidth = 1000;


function renderGrid(height, width, layer) {

    var gridsize = 5,
        options = {
            stroke: "#000000",
            strokeWidth: 1,
            selectable:false,
            strokeDashArray: [5, 5]
        };


    for(var x=1; x < (width / gridsize); x++)
    {
        var color = '#cccccc',
            stroke = '1';

        layer.add(
            new konva.Line( {
                points: [100*x, 0, 100*x, height],
                stroke: color,
                strokeWidth: stroke,
            })
        );
        layer.add(
            new konva.Line( {
                points: [0, 100*x, width, 100*x,],
                stroke: color,
                strokeWidth: stroke,
            })
        );
    }
}

function getArrivalCords(height, width, course) {
    var cords = {
        x: 0,
        y: 0
    };

    // Normalize
    if (course == 0) {
        course = 360;
    }

    if (course <= 360 && course >= 315) {
        rad = heading.toRad(360 - course);
        cords.x = Math.tan(rad) * (height / 2)
    }

    return cords
}


function renderRings(count, radius, width, layer) {

    scale = (radius / count);
    pixels = (width / count / 2);

    for (var i = 1; i <= count; i++) {
        layer.add(
            new konva.Circle({
                x: width / 2,
                y: width / 2,
                stroke: '#cccccc',
                strokeWidth: .5,
                radius: pixels * i
            })
        );

        marker = scale * i;
        layer.add(
            new konva.Text({
                text: marker,
                x: width / 2,
                y: (Math.abs(i - count)) * pixels,
                fill: '#eeeeee'
            })
        );
    }
}


function _drawRunways(runways, layer) {
}


function renderMap(height, width, data, layer) {
    //renderGrid(height, width, layer)
    renderRings(data.scale.rings, data.scale.radius, height, layer);
    _drawRunways(data.runways, layer);

}

module.exports = {
    getArrivalCords: getArrivalCords,
    renderMap: renderMap,
    renderGrid: renderGrid
}
