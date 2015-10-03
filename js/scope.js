define([
    'konva',
], function(konva){
    var _scope = {}

    var intialize = function (){
        display = new Konva.Stage({
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

    var getScope = function() {
        return _scope;
    }

    return {
        initialize: intialize,
        getScope: getScope
    };
});
