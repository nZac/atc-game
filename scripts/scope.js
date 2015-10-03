display = createStage('scope');
aircraft = new Konva.Layer();
planes = new Array();

planes.push(createAirplane(aircraft, [400,400],  010, 1));

for(i=0; i < planes.length; i++) {
    aircraft.add(planes[i]);
}


display.add(aircraft);

var anim = new Konva.Animation(function(frame) {
    planes.forEach(move);
}, aircraft);

anim.start()
