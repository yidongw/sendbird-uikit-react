'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var utils = require('../chunks/bundle-Ck6ikNW6.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var numberToPx = (function (value) {
    if (value === null)
        return undefined;
    return typeof value === 'number' ? "".concat(value, "px") : value;
});

function getDynamicMinLengthInPx(sideLength, maxSideLength, defaultMinLength) {
    var _a;
    return "min(".concat(maxSideLength !== null && maxSideLength !== void 0 ? maxSideLength : defaultMinLength, ", ").concat((_a = numberToPx(sideLength)) !== null && _a !== void 0 ? _a : defaultMinLength, ")");
}

function useDynamicSideLength(_a) {
    var width = _a.width, height = _a.height, maxSideLength = _a.maxSideLength, defaultMinLength = _a.defaultMinLength;
    var dynamicMinWidth = React.useMemo(function () {
        return getDynamicMinLengthInPx(width, maxSideLength, defaultMinLength);
    }, [width]);
    var dynamicMinHeight = React.useMemo(function () {
        return getDynamicMinLengthInPx(height, maxSideLength, defaultMinLength);
    }, [height]);
    return [dynamicMinWidth, dynamicMinHeight];
}

var useIsElementInViewport = function () {
    var _a = React.useState(false), isVisible = _a[0], setIsVisible = _a[1];
    var _b = React.useState(null), element = _b[0], setElement = _b[1];
    var ref = React.useCallback(function (node) {
        if (node !== null)
            setElement(node);
    }, []);
    React.useEffect(function () {
        if (!element)
            return;
        var observer = new IntersectionObserver(function (entries) {
            var entry = entries[0];
            setIsVisible(entry.isIntersecting);
        });
        observer.observe(element);
        return function () {
            observer.disconnect();
        };
    }, [element]);
    return [ref, isVisible];
};

var useLazyImageLoader = function () {
    var isLoaded = React.useRef(false);
    var _a = useIsElementInViewport(), ref = _a[0], isVisible = _a[1];
    if (isVisible)
        isLoaded.current = true;
    return [ref, isLoaded.current];
};

function getBorderRadiusForImageRenderer(circle, borderRadius) {
    if (circle === void 0) { circle = false; }
    if (borderRadius === void 0) { borderRadius = null; }
    return circle ? '50%' : numberToPx(borderRadius);
}
function getBorderRadiusForMultipleImageRenderer(borderRadius, index, totalCount) {
    var value = typeof borderRadius === 'string' ? parseInt(borderRadius, 10) : borderRadius;
    var lastIndex = totalCount - 1;
    var topLeft = index === 0 ? value * 2 : value;
    var topRight = index === 1 ? value * 2 : value;
    var bottomRight = index === lastIndex ? value * 2 : value;
    var bottomLeft = index === lastIndex - 1 ? value * 2 : value;
    return "".concat(topLeft, "px ").concat(topRight, "px ").concat(bottomRight, "px ").concat(bottomLeft, "px");
}
/*
  ImageRenderer displays image with url or source
  it checks if the source exist with img tag first
  if it exists onLoad is called, if not onError is called
  and those properties switch img tag to real purposing element
*/
var ImageRenderer = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, url = _a.url, _c = _a.alt, alt = _c === void 0 ? '' : _c, _d = _a.width, width = _d === void 0 ? null : _d, _e = _a.maxSideLength, maxSideLength = _e === void 0 ? null : _e, _f = _a.height, height = _f === void 0 ? null : _f, _g = _a.circle, circle = _g === void 0 ? false : _g, _h = _a.fixedSize, fixedSize = _h === void 0 ? false : _h, _j = _a.placeHolder, placeHolder = _j === void 0 ? null : _j, _k = _a.defaultComponent, defaultComponent = _k === void 0 ? null : _k, _l = _a.borderRadius, borderRadius = _l === void 0 ? null : _l, _m = _a.onLoad, onLoad = _m === void 0 ? utils.noop : _m, _o = _a.onError, onError = _o === void 0 ? utils.noop : _o, shadeOnHover = _a.shadeOnHover, _p = _a.isUploaded, isUploaded = _p === void 0 ? true : _p;
    var _q = useLazyImageLoader(), ref = _q[0], isVisible = _q[1];
    var internalUrl = isVisible ? url : null;
    var _r = React.useState(false), defaultComponentVisible = _r[0], setDefaultComponentVisible = _r[1];
    var _s = React.useState(true), placeholderVisible = _s[0], setPlaceholderVisible = _s[1];
    var _t = useDynamicSideLength({
        width: width,
        height: height,
        maxSideLength: maxSideLength,
        defaultMinLength: '400px',
    }), dynamicMinWidth = _t[0], dynamicMinHeight = _t[1];
    var renderPlaceholder = function () {
        if (typeof placeHolder === 'function') {
            return placeHolder({
                style: {
                    width: '100%',
                    minWidth: dynamicMinWidth,
                    maxWidth: fixedSize ? dynamicMinWidth : '400px',
                    height: dynamicMinHeight,
                    position: 'absolute',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
            });
        }
        return placeHolder;
    };
    var renderDefault = function () {
        if (typeof defaultComponent === 'function')
            return defaultComponent();
        return defaultComponent;
    };
    var renderImage = function () {
        var backgroundStyle = internalUrl ? {
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: "url(".concat(internalUrl, ")"),
        } : {};
        return (React__default.default.createElement("div", { className: "sendbird-image-renderer__image", style: _tslib.__assign({ width: '100%', minWidth: dynamicMinWidth, maxWidth: fixedSize ? dynamicMinWidth : '400px', height: dynamicMinHeight, position: 'absolute', borderRadius: getBorderRadiusForImageRenderer(circle, borderRadius) }, backgroundStyle) }));
    };
    return (dynamicMinWidth
        && dynamicMinHeight && (React__default.default.createElement("div", { ref: ref, className: _tslib.__spreadArray(_tslib.__spreadArray([], (Array.isArray(className) ? className : [className]), true), ['sendbird-image-renderer'], false).join(' '), style: {
            width: '100%',
            minWidth: dynamicMinWidth,
            maxWidth: fixedSize ? dynamicMinWidth : '400px',
            height: dynamicMinHeight,
        } },
        placeholderVisible && renderPlaceholder(),
        (!internalUrl || defaultComponentVisible) ? renderDefault() : renderImage(),
        shadeOnHover && (React__default.default.createElement("div", { className: "sendbird-multiple-files-image-renderer__image-cover", style: _tslib.__assign({ borderRadius: getBorderRadiusForImageRenderer(circle, borderRadius) }, (isUploaded ? {} : { display: 'inline-flex' })) })),
        internalUrl && React__default.default.createElement(HiddenImageLoader, { src: internalUrl, alt: alt, onLoadStart: function () {
                setPlaceholderVisible(true);
                setDefaultComponentVisible(false);
            }, onLoad: function () {
                setPlaceholderVisible(false);
                setDefaultComponentVisible(false);
                onLoad();
            }, onError: function () {
                setPlaceholderVisible(false);
                setDefaultComponentVisible(true);
                onError();
            } }))));
};
// Image is loaded as a background-image, but this component serves as a hidden component to receive events indicating whether the image has actually been loaded.
var HiddenImageLoader = function (props) {
    var src = props.src, alt = props.alt, _a = props.onLoadStart, onLoadStart = _a === void 0 ? utils.noop : _a, _b = props.onLoad, onLoad = _b === void 0 ? utils.noop : _b, _c = props.onError, onError = _c === void 0 ? utils.noop : _c;
    var reloadCtx = React.useRef({
        currSrc: src,
        prevSrc: src,
        loadFailure: false,
    });
    if (reloadCtx.current.currSrc !== src) {
        reloadCtx.current.prevSrc = reloadCtx.current.currSrc;
        reloadCtx.current.currSrc = src;
    }
    // SideEffect: If the image URL has changed or loading has failed, please try again
    React.useLayoutEffect(function () {
        if (src) {
            var sourceChanged = reloadCtx.current.prevSrc !== reloadCtx.current.currSrc;
            var loadFailure = reloadCtx.current.loadFailure;
            if (sourceChanged || loadFailure) {
                onLoadStart();
            }
        }
    }, [src, navigator.onLine]);
    return (React__default.default.createElement("img", { className: "sendbird-image-renderer__hidden-image-loader", src: src, alt: alt, onLoad: function () {
            reloadCtx.current.loadFailure = false;
            onLoad();
        }, onError: function () {
            reloadCtx.current.loadFailure = true;
            onError();
        } }));
};

exports.default = ImageRenderer;
exports.getBorderRadiusForImageRenderer = getBorderRadiusForImageRenderer;
exports.getBorderRadiusForMultipleImageRenderer = getBorderRadiusForMultipleImageRenderer;
//# sourceMappingURL=ImageRenderer.js.map
