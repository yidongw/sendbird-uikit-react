'use strict';

var React = require('react');
var ui_Avatar = require('../../chunks/bundle-C8wv9DWs.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_IconButton = require('../../ui/IconButton.js');
var ui_Label = require('../../chunks/bundle-CAR4EIKs.js');
var LocalizationContext = require('../../chunks/bundle-Cy1ruNzs.js');
var OpenChannel_context = require('../../chunks/bundle-CjHcvEl6.js');
var MediaQueryContext = require('../../chunks/bundle-DrIKAEHN.js');
require('../../chunks/bundle-Bdr7xlea.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-Ck6ikNW6.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../chunks/bundle-DgjptBQW.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('../../chunks/bundle-DZhkNDpN.js');
require('../../chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('react-dom');
require('../../ui/Button.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-Dh0NAI0D.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../chunks/bundle-BdRSDnh9.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function OpenchannelConversationHeader() {
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var _a = OpenChannel_context.useOpenChannelContext(), currentOpenChannel = _a.currentOpenChannel, onChatHeaderActionClick = _a.onChatHeaderActionClick, amIOperator = _a.amIOperator, onBackClick = _a.onBackClick;
    var title = currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.name;
    var subTitle = "".concat(OpenChannel_context.kFormatter(currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.participantCount), " ").concat(stringSet.OPEN_CHANNEL_CONVERSATION__TITLE_PARTICIPANTS);
    var coverImage = currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.coverUrl;
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    return (React__default.default.createElement("div", { className: "sendbird-openchannel-conversation-header" },
        React__default.default.createElement("div", { className: "sendbird-openchannel-conversation-header__left" },
            isMobile && (React__default.default.createElement(ui_Icon.default, { className: "sendbird-oepnchannel-header__icon_back", onClick: onBackClick, fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px", type: ui_Icon.IconTypes.ARROW_LEFT })),
            coverImage ? (React__default.default.createElement(ui_Avatar.Avatar, { className: "sendbird-openchannel-conversation-header__left__cover-image", src: coverImage, alt: "channel cover image", width: "32px", height: "32px" })) : (React__default.default.createElement("div", { className: "sendbird-openchannel-conversation-header__left__cover-image--icon", style: { width: 32, height: 32 } },
                React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.CHANNELS, fillColor: ui_Icon.IconColors.CONTENT, width: "18px", height: "18px" }))),
            React__default.default.createElement(ui_Label.Label, { className: "sendbird-openchannel-conversation-header__left__title", type: ui_Label.LabelTypography.H_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, title || stringSet.NO_TITLE),
            React__default.default.createElement(ui_Label.Label, { className: "sendbird-openchannel-conversation-header__left__sub-title", type: ui_Label.LabelTypography.BODY_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, subTitle || stringSet.NO_TITLE)),
        React__default.default.createElement("div", { className: "sendbird-openchannel-conversation-header__right" },
            React__default.default.createElement(ui_IconButton, { className: "sendbird-openchannel-conversation-header__right__trigger", width: "32px", height: "32px", onClick: onChatHeaderActionClick },
                React__default.default.createElement(ui_Icon.default, { type: (amIOperator
                        ? ui_Icon.IconTypes.INFO
                        : ui_Icon.IconTypes.MEMBERS), fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" })))));
}

module.exports = OpenchannelConversationHeader;
//# sourceMappingURL=OpenChannelHeader.js.map
