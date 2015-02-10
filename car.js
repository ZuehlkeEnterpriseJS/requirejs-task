define('car', ['view', 'motor', 'lights'], function(view, motor, lights) {

    function start() {
        view.logToView('starting...');
        motor.start();
        lights.switchOn();
    }

    function isCarReady() {
        return motor.isRunning && lights.areLightsOn();
    }

    return {
        start: start,
        isCarReady: isCarReady
    };

});