import { _ as __assign } from './bundle-Ck-Lg2K3.js';
import React__default from 'react';
import { IconTypes, IconColors } from '../ui/Icon.js';
import ChannelAvatar from '../ui/ChannelAvatar.js';
import { g as getChannelTitle } from './bundle-BIxprrGs.js';
import { u as useMediaQueryContext } from './bundle-Bk1oUUzJ.js';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import { u as useLocalization } from './bundle-CbLNLMef.js';
import Header from '../ui/Header.js';
import { c as classnames } from './bundle-pQHYhigr.js';

var GroupChannelHeaderView = function (_a) {
    var className = _a.className, currentChannel = _a.currentChannel, showSearchIcon = _a.showSearchIcon, onBackClick = _a.onBackClick, onSearchClick = _a.onSearchClick, onChatHeaderActionClick = _a.onChatHeaderActionClick, 
    // Header custom props
    renderLeft = _a.renderLeft, renderMiddle = _a.renderMiddle, renderRight = _a.renderRight;
    var config = useSendbirdStateContext().config;
    var userId = config.userId, theme = config.theme;
    var isMobile = useMediaQueryContext().isMobile;
    var stringSet = useLocalization().stringSet;
    var isMuted = (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.myMutedState) === 'muted';
    var channelTitle = getChannelTitle(currentChannel, userId, stringSet);
    return (React__default.createElement(Header, { className: classnames('sendbird-chat-header', className), renderLeft: renderLeft !== null && renderLeft !== void 0 ? renderLeft : (function () { return (React__default.createElement(React__default.Fragment, null,
            isMobile && (React__default.createElement(Header.Icon, { className: "sendbird-chat-header__icon_back", onClick: onBackClick, type: IconTypes.ARROW_LEFT, color: IconColors.PRIMARY, width: "24px", height: "24px" })),
            React__default.createElement(ChannelAvatar, { theme: theme, channel: currentChannel, userId: userId, height: 32, width: 32 }))); }), renderMiddle: renderMiddle !== null && renderMiddle !== void 0 ? renderMiddle : (function () { return (React__default.createElement(Header.Title, { title: channelTitle })); }), renderRight: renderRight !== null && renderRight !== void 0 ? renderRight : (function () { return (React__default.createElement(React__default.Fragment, null,
            isMuted && (React__default.createElement(Header.Icon, { className: "sendbird-chat-header__right__mute", type: IconTypes.NOTIFICATIONS_OFF_FILLED, color: IconColors.ON_BACKGROUND_2, width: "24px", height: "24px" })),
            (showSearchIcon && !(currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.isEphemeral)) && (React__default.createElement(Header.IconButton, { className: "sendbird-chat-header__right__search", onClick: onSearchClick, type: IconTypes.SEARCH, color: IconColors.PRIMARY, renderIcon: function (props) { return React__default.createElement(Header.Icon, __assign({}, props, { width: "24px", height: "24px" })); } })),
            React__default.createElement(Header.IconButton, { className: "sendbird-chat-header__right__info", onClick: onChatHeaderActionClick, type: IconTypes.INFO, color: IconColors.PRIMARY, renderIcon: function (props) { return React__default.createElement(Header.Icon, __assign({}, props, { width: "24px", height: "24px" })); } }))); }) }));
};

export { GroupChannelHeaderView as G };
//# sourceMappingURL=bundle-BqrxBkb5.js.map
