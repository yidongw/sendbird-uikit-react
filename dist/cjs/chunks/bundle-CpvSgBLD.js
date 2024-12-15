'use strict';

var React = require('react');
var uikitTools = require('@sendbird/uikit-tools');

/**
 * Note: `leading` has higher priority rather than `trailing`
 * */
function useThrottleCallback(callback, delay, options) {
    if (options === void 0) { options = {
        leading: true,
        trailing: false,
    }; }
    var timer = React.useRef(null);
    var trailingArgs = React.useRef(null);
    React.useEffect(function () {
        return function () {
            if (timer.current)
                clearTimeout(timer.current);
        };
    }, []);
    return uikitTools.usePreservedCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timer.current) {
            trailingArgs.current = args;
            return;
        }
        if (options.leading) {
            callback.apply(void 0, args);
        }
        else {
            trailingArgs.current = args;
        }
        var invoke = function () {
            if (options.trailing && trailingArgs.current) {
                callback.apply(void 0, trailingArgs.current);
                trailingArgs.current = null;
                timer.current = setTimeout(invoke, delay);
            }
            else {
                timer.current = null;
            }
        };
        timer.current = setTimeout(invoke, delay);
    });
}

exports.useThrottleCallback = useThrottleCallback;
//# sourceMappingURL=bundle-CpvSgBLD.js.map
