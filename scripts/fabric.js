        var SCALE = 100;


        var planes = [];

        var scope = new fabric.Canvas('scope');

        scope.setHeight(window.innerHeight);
        scope.setWidth(window.innerWidth);
        scope.renderAll()

    function createAircraft(startLoc, heading) {
        heading = typeof heading !== 'undefined' ? heading : 45;

        var BLIP_SIZE = 6,
            BLIP_OFFSET = BLIP_SIZE * 2,
            BLIP_CENTER = BLIP_SIZE / 2

        var x = startLoc[0],
            y = startLoc[1]

        var blip = new fabric.Rect({
            top: y,
            left: x,
            width: BLIP_SIZE,
            height: BLIP_SIZE,
            strokeWidth: 1,
            stroke: 'white'
        });

        var tail = new fabric.Line(
        [
            x - BLIP_OFFSET,  // start x
            y + BLIP_CENTER,  // start y
            x + BLIP_OFFSET + BLIP_SIZE,  // end x
            y + BLIP_CENTER], // end y
        {
            strokeWidth: 1,
            stroke: 'white'
        });


        aircraft = new fabric.Group([blip, tail]);
        // rotateObject(aircraft, heading);
        aircraft.heading = heading;
        aircraft.speed = 200;
        planes.push(aircraft);
        return aircraft;
    }

    function move_airplane(airplane, index, planes) {
        distance = airplane.speed / SCALE

        // if (airplane.heading < 90) {
        //     leftover = 90 - airplane.heading;
        //     heading = 360 - leftover;
        // } else {
        //     heading = airplane.heading - 90;
        // }
        heading = airplane.heading - 180;

        angle = (heading * Math.PI) / 180;

        velX = (distance) * Math.sin(angle).toFixed(5);
        velY = (distance) * Math.cos(angle).toFixed(5);



        // if (x_trans < 0) {
        //     x_sign = '-=';
        //     x_trans = x_trans * -1
        // } else {
        //     x_sign = '+=';
        // }

        // if (y_trans < 0) {
        //     y_sign = '-=';
        //     y_trans = y_trans * -1
        // } else {
        //     y_sign = '+=';
        // }

        // if (airplane.heading >= 0 && airplane.heading <= 90) {
        //     temp = x_trans;
        //     x_trans = y_trans;
        //     y_trans = temp;
        //     y_sign = '-=';
        // } else if (airplane.heading > 90 && airplane.heading <= 180) {
        //     temp = x_trans;
        //     x_trans = y_trans;
        //     y_trans = temp;
        // } else if (airplane.heading > 180 && airplane.heading <= 270) {
        //     temp = x_trans;
        //     x_trans = y_trans;
        //     y_trans = temp;
        //     x_sign = '-=';
        // } else if (airplane.heading > 180 && airplane.heading <= 360) {
        //     temp = x_trans;
        //     x_trans = y_trans;
        //     y_trans = temp;
        //     y_sign = '-=';
        // }

        x = airplane.left + velX;
        y = airplane.top + velY;

        console.log('(' + velX + ', ' + velY + ')');
        console.log('(' + x + ', ' + y + ')');

        airplane.animate('top', y);
        airplane.animate('left', x);
    }

    //airplane1 = createAircraft([100, 100], 90);
    //scope.add(airplane1);

    //airplane2 = createAircraft([200, 200], 180);
    //scope.add(airplane2);

    //airplane3 = createAircraft([300, 300], 270);
    //scope.add(airplane3);

    //airplane5 = createAircraft([500, 500], 45);
    //scope.add(airplane5);

    airplane4 = createAircraft([100, 100], 10);
    scope.add(airplane4);

    function move() {
        planes.forEach(move_airplane)
        scope.renderAll();
    }
    draw_grid(scope);

    // setInterval(move, 1000);

     var ctx = document.getElementById("scope").getContext("2d"),
        x = 150,
        y = 180,
        angle = 360 - 90,
        velX = 0,
        velY = 0,
        thrust = 3;


    function draw(){
        velX = Math.cos(angle * Math.PI / 180) * thrust;
        velY = Math.sin(angle * Math.PI / 180) * thrust;

        x += velX;
        y += velY;


        ctx.fillStyle = "#fff";
        ctx.clearRect(0,0,400,400);
        ctx.beginPath();
        ctx.rect(x, y, 10, 10);
        ctx.closePath();
        ctx.fill();

        setTimeout(function(){draw()}, 30);
    }

     draw();
