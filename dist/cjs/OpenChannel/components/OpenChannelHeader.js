'use strict';

var React = require('react');
var ui_Avatar = require('../../chunks/bundle-Dmsb_oex.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_IconButton = require('../../ui/IconButton.js');
var ui_Label = require('../../chunks/bundle-D8-2bEdY.js');
var LocalizationContext = require('../../chunks/bundle-CmBrGegh.js');
var OpenChannel_context = require('../../chunks/bundle-D8WonUC2.js');
var MediaQueryContext = require('../../chunks/bundle-CzcmYPsN.js');
require('../../chunks/bundle-DRvomNLJ.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-BYHj6UqH.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../chunks/bundle-Bn25Hepq.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('../../chunks/bundle-DfISCDoH.js');
require('../../chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('react-dom');
require('../../ui/Button.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-DrXG_ZI5.js');
require('../../chunks/bundle-Dcn1Gf-8.js');
require('../../chunks/bundle-Ivv-MORg.js');

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
