'use strict';

var React = require('react');
var ui_Avatar = require('../chunks/bundle-C8wv9DWs.js');
var ui_Icon = require('./Icon.js');
var utils = require('../chunks/bundle-B2Yph-6C.js');
require('../chunks/bundle-Bdr7xlea.js');
require('./ImageRenderer.js');
require('../chunks/bundle-Ck6ikNW6.js');
require('../chunks/bundle-B4PTJ_bJ.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function ChannelAvatar(_a) {
    var channel = _a.channel, userId = _a.userId, theme = _a.theme, _b = _a.width, width = _b === void 0 ? 56 : _b, _c = _a.height, height = _c === void 0 ? 56 : _c;
    var isBroadcast = channel === null || channel === void 0 ? void 0 : channel.isBroadcast;
    var memoizedAvatar = React.useMemo(function () { return (isBroadcast
        ? (utils.generateDefaultAvatar(channel)
            ? (React__default.default.createElement("div", { className: "sendbird-chat-header--default-avatar", style: {
                    width: width,
                    height: height,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                } },
                React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.BROADCAST, fillColor: ui_Icon.IconColors.CONTENT, width: width * 0.575, height: height * 0.575 })))
            : (React__default.default.createElement(ui_Avatar.Avatar, { className: "sendbird-chat-header--avatar--broadcast-channel", src: utils.getChannelAvatarSource(channel, userId), width: width, height: height, alt: channel === null || channel === void 0 ? void 0 : channel.name })))
        : (React__default.default.createElement(ui_Avatar.Avatar, { className: "sendbird-chat-header--avatar--group-channel", src: utils.getChannelAvatarSource(channel, userId), width: "".concat(width, "px"), height: "".concat(height, "px"), alt: channel === null || channel === void 0 ? void 0 : channel.name }))); }, [utils.getChannelAvatarSource(channel, userId), theme]);
    return (React__default.default.createElement(React__default.default.Fragment, null, memoizedAvatar));
}

module.exports = ChannelAvatar;
//# sourceMappingURL=ChannelAvatar.js.map
