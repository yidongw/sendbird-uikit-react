'use strict';

var _tslib = require('../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var color = require('../chunks/bundle-CLzI6bbe.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var TextButton = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.color, color$1 = _c === void 0 ? color.Colors.ONBACKGROUND_1 : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.disableUnderline, disableUnderline = _e === void 0 ? false : _e, _f = _a.onClick, onClick = _f === void 0 ? function () { } : _f, children = _a.children;
    return (React__default.default.createElement("div", { className: _tslib.__spreadArray(_tslib.__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            color.changeColorToClassName(color$1),
            disableUnderline ? 'sendbird-textbutton--not-underline' : 'sendbird-textbutton',
            disabled ? 'sendbird-textbutton--disabled' : '',
        ], false).join(' '), role: "button", tabIndex: 0, onClick: function (e) { return onClick(e); }, onKeyPress: function (e) { return onClick(e); } }, children));
};

module.exports = TextButton;
//# sourceMappingURL=TextButton.js.map
