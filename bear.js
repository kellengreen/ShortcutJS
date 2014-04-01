(function() {

    var shortcuts = {};

    shortcuts.asArray = function(object) {
        for (var array = [], key = 0, value; value = object[key]; ++key) {
            array.push(value);
        }
        return array;
    };

    shortcuts.ready = function(callback) {
        var event = 'readystatechange',
            listener = function() {
                document.removeEventListener(event, listener);
                callback();
            };
        if (document.readyState === 'loading') {
            document.addEventListener(event, listener);
        } else {
            callback();
        }
    }

    window.shortcuts = shortcuts;
 })();
