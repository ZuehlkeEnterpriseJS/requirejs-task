define('app', ['car'], function(car) {
    car.start();
});


requirejs.config({
    baseUrl: './'
});


requirejs(['app']);