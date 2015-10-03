define([
    'scope',
    'aircraft',
    'konva',
    'moment'
], function(scope, aircraft, konva, moment){

    var flights = [];
    var opts = {
        maxAircraft: 20,
        newAircraftRate: moment.duration(2, 'minutes')
    };
    var sim = {};

    var addNewAircraft = function() {
        console.log('Add new');
        var newPlane = aircraft.create();
        var scopeCtx = scope.getScope();

        scopeCtx.layers.aircraft.add(newPlane.sprite);
        scopeCtx.layers.aircraft.draw();

        flights.push(newPlane);
        sim.lastAddedAircraft = moment();
    }

    var syncSim = function() {
        sim.currentAircraft = flights.length;
    };

    var adjustSim = function() {
        if (sim.currentAircraft < opts.maxAircraft) {
            if ((moment() - sim.lastAddedAircraft) > opts.newAircraftRate) {
                addNewAircraft();
            }
        }
    };

    var process = function() {
        syncSim();
        adjustSim();
    }

    var run = function (){
        console.log("Running");

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

            flights.forEach(aircraft.fly, frame);
        }, scopeCtx.layers.aircraft);

        anim.start();

        setInterval(process, 100);
    }

    return {
        run: run
    };
});
