'use strict';

var _tslib = require('../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var color = require('../chunks/bundle-LSLwWEwG.js');
var ui_Label = require('../chunks/bundle-D8-2bEdY.js');
require('../chunks/bundle-Q9YDOzjz.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var DateSeparator = function (_a) {
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.separatorColor, separatorColor = _d === void 0 ? color.Colors.ONBACKGROUND_4 : _d;
    return (React__default.default.createElement("div", { className: _tslib.__spreadArray(_tslib.__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            'sendbird-separator',
        ], false).join(' ') },
        React__default.default.createElement("div", { className: ['sendbird-separator__left', "".concat(color.changeColorToClassName(separatorColor), "--background-color")].join(' ') }),
        React__default.default.createElement("div", { className: "sendbird-separator__text" }, children
            || (React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.CAPTION_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, "Date Separator"))),
        React__default.default.createElement("div", { className: ['sendbird-separator__right', "".concat(color.changeColorToClassName(separatorColor), "--background-color")].join(' ') })));
};

module.exports = DateSeparator;
//# sourceMappingURL=DateSeparator.js.map
