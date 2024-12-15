'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var ui_Label = require('../chunks/bundle-D8-2bEdY.js');
var utils = require('../chunks/bundle-BYHj6UqH.js');
require('../chunks/bundle-Q9YDOzjz.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var http = /https?:\/\//;
function LinkLabel(_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, src = _a.src, type = _a.type, color = _a.color, children = _a.children;
    var url = http.test(src) ? src : "http://".concat(src);
    return (React__default.default.createElement("a", { className: _tslib.__spreadArray(_tslib.__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            'sendbird-link-label',
            ui_Label.changeColorToClassName(color),
        ], false).join(' '), href: url, target: "_blank", rel: "noopener noreferrer", 
        // for mobile
        onTouchEnd: function (e) {
            e.preventDefault();
            e.nativeEvent.stopImmediatePropagation();
            utils.openURL(url);
        } },
        React__default.default.createElement(ui_Label.Label, { className: "sendbird-link-label__label", testID: "sendbird-link-label__label", type: type, color: color }, children)));
}
var LinkLabelTypography = ui_Label.LabelTypography;
var LinkLabelColors = ui_Label.LabelColors;

exports.LinkLabelColors = LinkLabelColors;
exports.LinkLabelTypography = LinkLabelTypography;
exports.default = LinkLabel;
//# sourceMappingURL=LinkLabel.js.map
