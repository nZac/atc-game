var scope = require('./scope.js'),
    aircraft = require('./aircraft.js'),
    konva = require('konva'),
    moment = require('moment');

var opts = {
    maxAircraft: 20,
    newAircraftRate: moment.duration(30, 'seconds')
}

var sim = {
    flights: []
};

function addNewAircraft() {
    console.log('Add new');
    var newPlane = aircraft.create();
    var scopeCtx = scope.getScope();

    scopeCtx.layers.aircraft.add(newPlane.sprite);
    scopeCtx.layers.aircraft.draw();

    sim.flights.push(newPlane);
    sim.lastAddedAircraft = moment();
}

function syncSim() {
    sim.currentAircraft = sim.flights.length;
}

function adjustSim() {
    if (sim.currentAircraft < opts.maxAircraft) {
        if ((moment() - sim.lastAddedAircraft) > opts.newAircraftRate) {
            addNewAircraft();
        }
    }
}

function process() {
    syncSim();
    adjustSim();
}

function run(){
    var scopeCtx = scope.getScope();
    addNewAircraft();

    var animationCounter = 0;
    var anim = new konva.Animation(function(frame) {
        if (animationCounter < 1000) {
            animationCounter = animationCounter + frame.timeDiff;
            return false;
        } else {
            animationCounter = 0;
        }

        sim.flights.forEach(aircraft.fly, frame);
    }, scopeCtx.layers.aircraft);

    anim.start();

    setInterval(process, 100);
}

module.exports = {
    run: run
};
