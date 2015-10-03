require.config({
    paths: {
        konva: '../node_modules/konva/konva.min',
        underscore: '../node_modules/underscore/underscore-min',
        moment: '../node_modules/moment/moment',
    }
});

require(
    ['app',],
    function(App) {
        App.initialize();
});
