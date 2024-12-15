'use strict';

var _tslib = require('../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var useLongPress = require('../chunks/bundle-D_k3_Y_y.js');
var utils = require('../chunks/bundle-Ck6ikNW6.js');
require('../chunks/bundle-DrIKAEHN.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var ReactionButton = React__default.default.forwardRef(function (props, ref) {
    var className = props.className, width = props.width, height = props.height, selected = props.selected, _a = props.dataSbId, dataSbId = _a === void 0 ? '' : _a, testID = props.testID, onClick = props.onClick, children = props.children;
    var onClickHandler = useLongPress.useLongPress({
        onLongPress: utils.noop,
        onClick: onClick,
    }, {
        shouldPreventDefault: true,
        shouldStopPropagation: true,
    });
    return (React__default.default.createElement("div", _tslib.__assign({ className: _tslib.__spreadArray(_tslib.__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            "sendbird-reaction-button".concat(selected ? '--selected' : ''),
        ], false).join(' '), ref: ref, role: "button", style: { width: width, height: height } }, onClickHandler, { tabIndex: 0, "data-sb-id": testID !== null && testID !== void 0 ? testID : dataSbId, "data-testid": testID !== null && testID !== void 0 ? testID : dataSbId }),
        React__default.default.createElement("div", { className: "sendbird-reaction-button__inner" }, children)));
});

module.exports = ReactionButton;
//# sourceMappingURL=ReactionButton.js.map
