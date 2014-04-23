(function() {

    var w = window,
        d = document;

    w.ready = function(callback) {
        if (d.readyState === 'loading') {
            var event = 'readystatechange';
            d.addEventListener(event, function listener() {
                    d.removeEventListener(event, listener);
                    callback();
            });
        } else {
            callback();
        }
    }

 })();
