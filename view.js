define('view', function() {

    function logToView(message) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(message));
        document.querySelector('#output').appendChild(li);
    }

    return {
        logToView: logToView
    };

});