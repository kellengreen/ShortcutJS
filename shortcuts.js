(function() {

    var shortcuts = {};

    shortcuts.toArray = function(object) {
        return Array.prototype.slice.call(object);
    }

    shortcuts.ready = function(callback) {
        var doc = document;
        if (doc.readyState === 'loading') {
            var event = 'readystatechange',
                listener = function() {
                    doc.removeEventListener(event, listener);
                    callback();
                };
            doc.addEventListener(event, listener);
        } else {
            callback();
        }
    }

    window.shortcuts = shortcuts;

 })();
