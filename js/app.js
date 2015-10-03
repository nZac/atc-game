define([
    'scope',
    'simulate'
], function(scope, simulate){
    var initialize = function() {
        display = scope.initialize();
        simulate.run();
    }

    return {
        initialize: initialize
    };
});
