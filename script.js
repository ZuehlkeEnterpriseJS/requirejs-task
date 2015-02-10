var statusLightsOn = false;
var statusMotorRunning = false;
var statusCarReady = statusLightsOn && statusMotorRunning;

function start() {
    logToView('starting...');

    runMotor();
    switchOnLights();
}

function runMotor() {
    statusMotorRunning = true;
    logToView('motor is running... "puff puff"');
}

function switchOnLights() {
    statusLightsOn = true;
    logToView('Headlights now on...');
}

function logToView(message) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(message));
    document.querySelector('#output').appendChild(li);
}

document.addEventListener("DOMContentLoaded", function() {
    start();
    console.log("Status:", statusCarReady ? "car running" : "car not running");
});