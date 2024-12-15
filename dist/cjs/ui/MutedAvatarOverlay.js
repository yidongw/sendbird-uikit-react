'use strict';

var React = require('react');
var ui_Icon = require('./Icon.js');
require('../chunks/bundle-DRvomNLJ.js');
require('../chunks/bundle-BYHj6UqH.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function MutedAvatarOverlay(props) {
    var _a = props.height, height = _a === void 0 ? 24 : _a, _b = props.width, width = _b === void 0 ? 24 : _b;
    return (React__default.default.createElement("div", { className: "sendbird-muted-avatar", style: {
            height: "".concat(height, "px"),
            width: "".concat(width, "px"),
        } },
        React__default.default.createElement("div", { className: "sendbird-muted-avatar__icon" },
            React__default.default.createElement("div", { className: "sendbird-muted-avatar__bg", style: {
                    height: "".concat(height, "px"),
                    width: "".concat(width, "px"),
                } }),
            React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.MUTE, fillColor: ui_Icon.IconColors.WHITE, width: "".concat(height - 8, "px"), height: "".concat(width - 8, "px") }))));
}

module.exports = MutedAvatarOverlay;
//# sourceMappingURL=MutedAvatarOverlay.js.map
