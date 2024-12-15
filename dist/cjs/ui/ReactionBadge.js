'use strict';

var _tslib = require('../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var ui_Label = require('../chunks/bundle-CAR4EIKs.js');
require('../chunks/bundle-Dio8pG-T.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var ReactionBadge = React__default.default.forwardRef(function (props, ref) {
    var _a = props.className, className = _a === void 0 ? '' : _a, testID = props.testID, children = props.children, _b = props.count, count = _b === void 0 ? '' : _b, _c = props.isAdd, isAdd = _c === void 0 ? false : _c, _d = props.selected, selected = _d === void 0 ? false : _d, _e = props.onClick, onClick = _e === void 0 ? function () { } : _e;
    var getClassNameTail = function () {
        if (selected && !isAdd) {
            return '--selected';
        }
        if (isAdd) {
            return '--is-add';
        }
        return '';
    };
    return (React__default.default.createElement("div", { className: _tslib.__spreadArray(_tslib.__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            "sendbird-reaction-badge".concat(getClassNameTail()),
        ], false).join(' '), "data-testid": testID, role: "button", ref: ref, onClick: onClick, onKeyDown: onClick, onTouchEnd: onClick, tabIndex: 0 },
        React__default.default.createElement("div", { className: "sendbird-reaction-badge__inner" },
            React__default.default.createElement("div", { className: "sendbird-reaction-badge__inner__icon" }, children),
            React__default.default.createElement(ui_Label.Label, { className: (children && count) ? 'sendbird-reaction-badge__inner__count' : '', type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_1 }, count))));
});

module.exports = ReactionBadge;
//# sourceMappingURL=ReactionBadge.js.map
