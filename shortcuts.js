(function() {

    var shortcuts = {};

    shortcuts.toArray = function(object) {
        return Array.prototype.slice.call(object);
    }
    
    shortcuts.ready = function(callback) {
        if (document.readyState === 'loading') {
            var event = 'readystatechange',
                listener = function() {
                    document.removeEventListener(event, listener);
                    callback();
                };
            document.addEventListener(event, listener);
        } else {
            callback();
        }
    }

    window.shortcuts = shortcuts;
    
 })();
