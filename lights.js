define('lights', ['view'], function(view) {

    var lightsAreOn = false;

    function switchOn() {
        lightsAreOn = true;
        view.logToView('Headlights now on...');
    }

    function areLightsOn(){
        return lightsAreOn;
    }

    return {
        switchOn:switchOn,
        areLightsOn: areLightsOn
    };

});