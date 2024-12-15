import { useRef, useEffect } from 'react';
import { usePreservedCallback } from '@sendbird/uikit-tools';

/**
 * Note: `leading` has higher priority rather than `trailing`
 * */
function useThrottleCallback(callback, delay, options) {
    if (options === void 0) { options = {
        leading: true,
        trailing: false,
    }; }
    var timer = useRef(null);
    var trailingArgs = useRef(null);
    useEffect(function () {
        return function () {
            if (timer.current)
                clearTimeout(timer.current);
        };
    }, []);
    return usePreservedCallback(function () {
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

export { useThrottleCallback as u };
//# sourceMappingURL=bundle-tnPVKzs2.js.map
