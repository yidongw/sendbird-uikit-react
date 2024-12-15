import React__default, { useState, useEffect } from 'react';

var DEFAULT_MOBILE = false;
// const DEFAULT_MOBILE = '768px';
var MOBILE_CLASSNAME = 'sendbird--mobile-mode';
var MediaQueryContext = React__default.createContext({
    breakpoint: DEFAULT_MOBILE,
    isMobile: false,
});
var addClassNameToBody = function () {
    try {
        var body = document.querySelector('body');
        body === null || body === void 0 ? void 0 : body.classList.add(MOBILE_CLASSNAME);
    }
    catch (_a) {
        // noop
    }
};
var removeClassNameFromBody = function () {
    try {
        var body = document.querySelector('body');
        body === null || body === void 0 ? void 0 : body.classList.remove(MOBILE_CLASSNAME);
    }
    catch (_a) {
        // noop
    }
};
var MediaQueryProvider = function (props) {
    var children = props.children, logger = props.logger;
    var breakpoint = (props === null || props === void 0 ? void 0 : props.breakpoint) || false;
    var _a = useState(false), isMobile = _a[0], setIsMobile = _a[1];
    useEffect(function () {
        var _a;
        var updateSize = function () {
            var _a;
            if (typeof breakpoint === 'boolean') {
                setIsMobile(breakpoint);
                if (breakpoint) {
                    addClassNameToBody();
                }
                else {
                    removeClassNameFromBody();
                }
            }
            else {
                var mq = window.matchMedia("(max-width: ".concat(breakpoint, ")"));
                (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, "MediaQueryProvider: Screensize updated to ".concat(breakpoint));
                if (mq.matches) {
                    setIsMobile(true);
                    addClassNameToBody();
                }
                else {
                    setIsMobile(false);
                    removeClassNameFromBody();
                }
            }
        };
        updateSize();
        window.addEventListener('resize', updateSize);
        (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'MediaQueryProvider: addEventListener', { updateSize: updateSize });
        return function () {
            var _a;
            window.removeEventListener('resize', updateSize);
            (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'MediaQueryProvider: removeEventListener', { updateSize: updateSize });
        };
    }, [breakpoint]);
    return (React__default.createElement(MediaQueryContext.Provider, { value: { breakpoint: breakpoint, isMobile: isMobile } }, children));
};
var useMediaQueryContext = function () { return React__default.useContext(MediaQueryContext); };

export { MediaQueryProvider as M, useMediaQueryContext as u };
//# sourceMappingURL=bundle-Bk1oUUzJ.js.map
