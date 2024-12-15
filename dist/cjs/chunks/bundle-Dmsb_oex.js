'use strict';

var _tslib = require('./bundle-DRvomNLJ.js');
var React = require('react');
var ui_ImageRenderer = require('../ui/ImageRenderer.js');
var pxToNumber = require('./bundle-BvFqbvri.js');
var ui_Icon = require('../ui/Icon.js');
var utils = require('./bundle-BYHj6UqH.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var AvatarDefault = function (props) {
    var width = props.width, height = props.height, text = props.text;
    var iconWidth = pxToNumber.pxToNumber(width);
    var iconHeight = pxToNumber.pxToNumber(height);
    if (typeof iconWidth === 'number' && !Number.isNaN(iconWidth)) {
        iconWidth *= 0.575;
    }
    if (typeof iconHeight === 'number' && !Number.isNaN(iconHeight)) {
        iconHeight *= 0.575;
    }
    return (React__default.default.createElement("div", { className: utils.classnames('sendbird-avatar-img--default', text && 'text'), style: { width: width, height: height } }, text
        ? React__default.default.createElement("div", { className: 'sendbird-avatar-text' }, text)
        : React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.USER, fillColor: ui_Icon.IconColors.CONTENT, width: iconWidth, height: iconHeight })));
};

var imageRendererClassName = 'sendbird-avatar-img';
var AvatarInner = function (_a) {
    var _b = _a.src, src = _b === void 0 ? '' : _b, _c = _a.alt, alt = _c === void 0 ? '' : _c, height = _a.height, width = _a.width, customDefaultComponent = _a.customDefaultComponent;
    var defaultComponent = function () { return customDefaultComponent
        ? customDefaultComponent({ width: width, height: height })
        : React__default.default.createElement(AvatarDefault, { width: width, height: height }); };
    if (typeof src === 'string') {
        return (React__default.default.createElement(ui_ImageRenderer.default, { className: imageRendererClassName, url: src, height: height, width: width, alt: alt, defaultComponent: defaultComponent }));
    }
    if (src && src.length) {
        if (src.length === 1) {
            return (React__default.default.createElement(ui_ImageRenderer.default, { className: imageRendererClassName, url: src[0], height: height, width: width, alt: alt, defaultComponent: defaultComponent }));
        }
        if (src.length === 2) {
            return (React__default.default.createElement("div", { className: "sendbird-avatar--inner__two-child" },
                React__default.default.createElement(ui_ImageRenderer.default, { className: imageRendererClassName, url: src[0], height: height, width: width, alt: alt, defaultComponent: defaultComponent }),
                React__default.default.createElement(ui_ImageRenderer.default, { className: imageRendererClassName, url: src[1], height: height, width: width, alt: alt, defaultComponent: defaultComponent })));
        }
        if (src.length === 3) {
            return (React__default.default.createElement(React__default.default.Fragment, null,
                React__default.default.createElement("div", { className: "sendbird-avatar--inner__three-child--upper" },
                    React__default.default.createElement(ui_ImageRenderer.default, { className: imageRendererClassName, url: src[0], height: height, width: width, alt: alt, defaultComponent: defaultComponent })),
                React__default.default.createElement("div", { className: "sendbird-avatar--inner__three-child--lower" },
                    React__default.default.createElement(ui_ImageRenderer.default, { className: imageRendererClassName, url: src[1], height: height, width: width, alt: alt, defaultComponent: defaultComponent }),
                    React__default.default.createElement(ui_ImageRenderer.default, { className: imageRendererClassName, url: src[2], height: height, width: width, alt: alt, defaultComponent: defaultComponent }))));
        }
        return (React__default.default.createElement("div", { className: "sendbird-avatar--inner__four-child" }, src.slice(0, 4)
            .map(function (url, index) { return (React__default.default.createElement(ui_ImageRenderer.default, { className: imageRendererClassName, url: url, height: height, width: width, alt: alt, key: "".concat(url, "-").concat(index), defaultComponent: defaultComponent })); })));
    }
    // default img
    return (React__default.default.createElement(ui_ImageRenderer.default, { className: imageRendererClassName, url: "", height: height, width: width, alt: alt, defaultComponent: defaultComponent }));
};
function Avatar(_a, ref) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.src, src = _c === void 0 ? '' : _c, _d = _a.alt, alt = _d === void 0 ? '' : _d, _e = _a.width, width = _e === void 0 ? '56px' : _e, _f = _a.height, height = _f === void 0 ? '56px' : _f, _g = _a.zIndex, zIndex = _g === void 0 ? 0 : _g, _h = _a.left, left = _h === void 0 ? '' : _h, _j = _a.bottom, bottom = _j === void 0 ? '' : _j, onClick = _a.onClick, customDefaultComponent = _a.customDefaultComponent;
    return (React__default.default.createElement("div", { className: _tslib.__spreadArray(_tslib.__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            'sendbird-avatar',
        ], false).join(' '), role: "button", ref: ref, style: {
            height: height,
            width: width,
            zIndex: zIndex,
            left: left,
            bottom: bottom,
        }, onClick: onClick, onKeyDown: onClick, tabIndex: 0 },
        React__default.default.createElement(AvatarInner, { src: src, width: width, height: height, alt: alt, customDefaultComponent: customDefaultComponent })));
}
var Avatar$1 = React__default.default.forwardRef(Avatar);

exports.Avatar = Avatar$1;
exports.AvatarDefault = AvatarDefault;
exports.AvatarInner = AvatarInner;
//# sourceMappingURL=bundle-Dmsb_oex.js.map
