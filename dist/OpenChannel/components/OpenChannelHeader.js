import React__default, { useContext } from 'react';
import { A as Avatar } from '../../chunks/bundle-BbICJE5Z.js';
import Icon, { IconColors, IconTypes } from '../../ui/Icon.js';
import IconButton from '../../ui/IconButton.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-Di0Zwz2X.js';
import { L as LocalizationContext } from '../../chunks/bundle-CbLNLMef.js';
import { u as useOpenChannelContext, k as kFormatter } from '../../chunks/bundle-CordabVC.js';
import { u as useMediaQueryContext } from '../../chunks/bundle-Bk1oUUzJ.js';
import '../../chunks/bundle-Ck-Lg2K3.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-pQHYhigr.js';
import '../../chunks/bundle-CjhP75at.js';
import '../../chunks/bundle-B80WXNZi.js';
import '../../chunks/bundle-C3toIOqd.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import '../../chunks/bundle-ptS-tNRF.js';
import '../../chunks/bundle-BL0uQSu6.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-fwRBR_Yw.js';
import '../../chunks/bundle-CnkNoe49.js';
import '../../chunks/bundle-DgxVBBM3.js';
import 'react-dom';
import '../../ui/Button.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-gMJSD9hQ.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CHD1aKHO.js';
import '../../useSendbirdStateContext.js';
import '../../chunks/bundle-A5WEPjt6.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-BD8hNBsp.js';
import '../../chunks/bundle-YOpvheAB.js';
import '../../chunks/bundle-BUI77uOB.js';

function OpenchannelConversationHeader() {
    var stringSet = useContext(LocalizationContext).stringSet;
    var _a = useOpenChannelContext(), currentOpenChannel = _a.currentOpenChannel, onChatHeaderActionClick = _a.onChatHeaderActionClick, amIOperator = _a.amIOperator, onBackClick = _a.onBackClick;
    var title = currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.name;
    var subTitle = "".concat(kFormatter(currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.participantCount), " ").concat(stringSet.OPEN_CHANNEL_CONVERSATION__TITLE_PARTICIPANTS);
    var coverImage = currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.coverUrl;
    var isMobile = useMediaQueryContext().isMobile;
    return (React__default.createElement("div", { className: "sendbird-openchannel-conversation-header" },
        React__default.createElement("div", { className: "sendbird-openchannel-conversation-header__left" },
            isMobile && (React__default.createElement(Icon, { className: "sendbird-oepnchannel-header__icon_back", onClick: onBackClick, fillColor: IconColors.PRIMARY, width: "24px", height: "24px", type: IconTypes.ARROW_LEFT })),
            coverImage ? (React__default.createElement(Avatar, { className: "sendbird-openchannel-conversation-header__left__cover-image", src: coverImage, alt: "channel cover image", width: "32px", height: "32px" })) : (React__default.createElement("div", { className: "sendbird-openchannel-conversation-header__left__cover-image--icon", style: { width: 32, height: 32 } },
                React__default.createElement(Icon, { type: IconTypes.CHANNELS, fillColor: IconColors.CONTENT, width: "18px", height: "18px" }))),
            React__default.createElement(Label, { className: "sendbird-openchannel-conversation-header__left__title", type: LabelTypography.H_2, color: LabelColors.ONBACKGROUND_1 }, title || stringSet.NO_TITLE),
            React__default.createElement(Label, { className: "sendbird-openchannel-conversation-header__left__sub-title", type: LabelTypography.BODY_2, color: LabelColors.ONBACKGROUND_2 }, subTitle || stringSet.NO_TITLE)),
        React__default.createElement("div", { className: "sendbird-openchannel-conversation-header__right" },
            React__default.createElement(IconButton, { className: "sendbird-openchannel-conversation-header__right__trigger", width: "32px", height: "32px", onClick: onChatHeaderActionClick },
                React__default.createElement(Icon, { type: (amIOperator
                        ? IconTypes.INFO
                        : IconTypes.MEMBERS), fillColor: IconColors.PRIMARY, width: "24px", height: "24px" })))));
}

export { OpenchannelConversationHeader as default };
//# sourceMappingURL=OpenChannelHeader.js.map
