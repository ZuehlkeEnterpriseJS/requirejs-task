define('motor', ['view'], function(view) {

    var motorIsRunning = false;

    function start() {
        motorIsRunning = true;
        view.logToView('motor is running... "puff puff"');
    }

    function isRunning() {
        return motorIsRunning;
    }

    return {
        start: start,
        isRunning:isRunning
    };

});