import { c as __spreadArray } from '../chunks/bundle-HcNswZ5p.js';
import React__default from 'react';
import { L as Label, d as changeColorToClassName, a as LabelTypography, b as LabelColors } from '../chunks/bundle-Qkp2VIaZ.js';
import { o as openURL } from '../chunks/bundle-0WaCg6X7.js';
import '../chunks/bundle-dybWaw0v.js';

var http = /https?:\/\//;
function LinkLabel(_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, src = _a.src, type = _a.type, color = _a.color, children = _a.children;
    var url = http.test(src) ? src : "http://".concat(src);
    return (React__default.createElement("a", { className: __spreadArray(__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            'sendbird-link-label',
            changeColorToClassName(color),
        ], false).join(' '), href: url, target: "_blank", rel: "noopener noreferrer", 
        // for mobile
        onTouchEnd: function (e) {
            e.preventDefault();
            e.nativeEvent.stopImmediatePropagation();
            openURL(url);
        } },
        React__default.createElement(Label, { className: "sendbird-link-label__label", testID: "sendbird-link-label__label", type: type, color: color }, children)));
}
var LinkLabelTypography = LabelTypography;
var LinkLabelColors = LabelColors;

export { LinkLabelColors, LinkLabelTypography, LinkLabel as default };
//# sourceMappingURL=LinkLabel.js.map
