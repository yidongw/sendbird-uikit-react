'use strict';

var _tslib = require('./bundle-Bdr7xlea.js');
var React = require('react');
var ui_Icon = require('../ui/Icon.js');
var ui_ChannelAvatar = require('../ui/ChannelAvatar.js');
var utils = require('./bundle-CoUbsBcp.js');
var MediaQueryContext = require('./bundle-DrIKAEHN.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var LocalizationContext = require('./bundle-Cy1ruNzs.js');
var ui_Header = require('../ui/Header.js');
var utils$1 = require('./bundle-Ck6ikNW6.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var GroupChannelHeaderView = function (_a) {
    var className = _a.className, currentChannel = _a.currentChannel, showSearchIcon = _a.showSearchIcon, onBackClick = _a.onBackClick, onSearchClick = _a.onSearchClick, onChatHeaderActionClick = _a.onChatHeaderActionClick, 
    // Header custom props
    renderLeft = _a.renderLeft, renderMiddle = _a.renderMiddle, renderRight = _a.renderRight;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var userId = config.userId, theme = config.theme;
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var isMuted = (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.myMutedState) === 'muted';
    var channelTitle = utils.getChannelTitle(currentChannel, userId, stringSet);
    return (React__default.default.createElement(ui_Header.default, { className: utils$1.classnames('sendbird-chat-header', className), renderLeft: renderLeft !== null && renderLeft !== void 0 ? renderLeft : (function () { return (React__default.default.createElement(React__default.default.Fragment, null,
            isMobile && (React__default.default.createElement(ui_Header.default.Icon, { className: "sendbird-chat-header__icon_back", onClick: onBackClick, type: ui_Icon.IconTypes.ARROW_LEFT, color: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" })),
            React__default.default.createElement(ui_ChannelAvatar, { theme: theme, channel: currentChannel, userId: userId, height: 32, width: 32 }))); }), renderMiddle: renderMiddle !== null && renderMiddle !== void 0 ? renderMiddle : (function () { return (React__default.default.createElement(ui_Header.default.Title, { title: channelTitle })); }), renderRight: renderRight !== null && renderRight !== void 0 ? renderRight : (function () { return (React__default.default.createElement(React__default.default.Fragment, null,
            isMuted && (React__default.default.createElement(ui_Header.default.Icon, { className: "sendbird-chat-header__right__mute", type: ui_Icon.IconTypes.NOTIFICATIONS_OFF_FILLED, color: ui_Icon.IconColors.ON_BACKGROUND_2, width: "24px", height: "24px" })),
            (showSearchIcon && !(currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.isEphemeral)) && (React__default.default.createElement(ui_Header.default.IconButton, { className: "sendbird-chat-header__right__search", onClick: onSearchClick, type: ui_Icon.IconTypes.SEARCH, color: ui_Icon.IconColors.PRIMARY, renderIcon: function (props) { return React__default.default.createElement(ui_Header.default.Icon, _tslib.__assign({}, props, { width: "24px", height: "24px" })); } })),
            React__default.default.createElement(ui_Header.default.IconButton, { className: "sendbird-chat-header__right__info", onClick: onChatHeaderActionClick, type: ui_Icon.IconTypes.INFO, color: ui_Icon.IconColors.PRIMARY, renderIcon: function (props) { return React__default.default.createElement(ui_Header.default.Icon, _tslib.__assign({}, props, { width: "24px", height: "24px" })); } }))); }) }));
};

exports.GroupChannelHeaderView = GroupChannelHeaderView;
//# sourceMappingURL=bundle-Dbk15PIx.js.map
