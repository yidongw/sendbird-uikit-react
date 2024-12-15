import { useState, useEffect } from 'react';

function useReconnectOnIdle(isOnline, currentGroupChannel, reconnectOnIdle) {
    if (reconnectOnIdle === void 0) { reconnectOnIdle = true; }
    var _a = useState(false), isTabHidden = _a[0], setIsTabHidden = _a[1];
    var wasOffline = !isOnline;
    useEffect(function () {
        var handleVisibilityChange = function () {
            if (reconnectOnIdle) {
                setIsTabHidden(document.hidden);
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return function () {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [reconnectOnIdle, document.hidden]);
    var shouldReconnect = wasOffline && !!currentGroupChannel && !isTabHidden;
    return { shouldReconnect: shouldReconnect };
}

export { useReconnectOnIdle as u };
//# sourceMappingURL=bundle-C4W1gyaJ.js.map
