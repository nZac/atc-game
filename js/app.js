var scope = require('./scope.js'),
    simulate = require('./simulate.js');


module.exports = function() {
    display = scope.initialize('msp');
    simulate.run();
}
