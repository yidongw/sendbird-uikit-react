import { S as SCROLL_BUFFER } from './bundle-DgxVBBM3.js';
import { a as isAboutSame } from './bundle-DnsBu59R.js';
import { usePreservedCallback } from '@sendbird/uikit-tools';
import { u as useThrottleCallback } from './bundle-CKpGqedk.js';

var BUFFER_DELAY = 100;
function useOnScrollPositionChangeDetector(params) {
    var onReachedTop = params.onReachedTop, onReachedBottom = params.onReachedBottom, onInBetween = params.onInBetween;
    var cb = usePreservedCallback(function (event) {
        if (event === null || event === void 0 ? void 0 : event.target) {
            var _a = event.target, scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
            var positionEvent = {
                distanceFromBottom: scrollHeight - scrollTop - clientHeight,
            };
            if (onReachedTop && isAboutSame(scrollTop, 0, SCROLL_BUFFER)) {
                onReachedTop(positionEvent);
            }
            else if (onReachedBottom && isAboutSame(scrollHeight, clientHeight + scrollTop, SCROLL_BUFFER)) {
                onReachedBottom(positionEvent);
            }
            else if (onInBetween) {
                onInBetween(positionEvent);
            }
        }
    });
    return useThrottleCallback(cb, BUFFER_DELAY, { trailing: true });
}

export { useOnScrollPositionChangeDetector as u };
//# sourceMappingURL=bundle-Yva9Tory.js.map
