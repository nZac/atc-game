function createStage(container) {
    return new Konva.Stage({
        width: window.innerWidth,
        height: window.innerHeight,
        container: container
    });
}

function createAirplane(layer, startLoc, heading, speed) {
    var x = startLoc[0],
        y = startLoc[1],
        size = 6,
        offset = size * 2;

    dot = new Konva.Rect({
        x: startLoc[0],
        y: startLoc[1],
        width: size,
        height: size,
        stroke: 'white',
        strokeWidth: 1
    });

    wings = new Konva.Line({
        points: [
            x-offset, y + size / 2,
            x+offset+size, y + size / 2,
        ],
        stroke: 'white',
        strokeWidth: 1
    });

    var plane = new Konva.Group();

    plane.add(dot);
    plane.add(wings);
    plane.speed = speed;
    plane.heading = heading;
    plane.assigned_heading = heading;
    return plane
}


function move(plane) {
    velX = Math.sin(plane.heading * Math.PI / 180) * plane.speed;
    velY = Math.cos(plane.heading * Math.PI / 180) * plane.speed * -1;

    plane.move({x:velX, y:velY});
}

