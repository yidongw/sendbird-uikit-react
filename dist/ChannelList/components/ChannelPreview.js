import React__default from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { u as useLocalization } from '../../chunks/bundle-CbLNLMef.js';
import { u as useChannelListContext } from '../../chunks/bundle-D9sjualy.js';
import { g as getChannelTitle } from '../../chunks/bundle-IQ2MguAG.js';
import { G as GroupChannelListItemView } from '../../chunks/bundle-01eKGnuS.js';
import '../../withSendbird.js';
import '../../chunks/bundle-Ck-Lg2K3.js';
import '../../chunks/bundle-B80WXNZi.js';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-YOpvheAB.js';
import '../../chunks/bundle-gMJSD9hQ.js';
import '../../chunks/bundle-pQHYhigr.js';
import '../../chunks/bundle-DgxVBBM3.js';
import '../../chunks/bundle-C3toIOqd.js';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-ptS-tNRF.js';
import '../../chunks/bundle-BL0uQSu6.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-fwRBR_Yw.js';
import '../../chunks/bundle-CnkNoe49.js';
import 'react-dom';
import '../../chunks/bundle-Bk1oUUzJ.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-Di0Zwz2X.js';
import '../../ui/Icon.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CHD1aKHO.js';
import '../../chunks/bundle-A5WEPjt6.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-C4W1gyaJ.js';
import '../../chunks/bundle-D4fsEPre.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-BxmZCK6X.js';
import '../../chunks/bundle-B5oDG6vR.js';
import '../../chunks/bundle-B6cyKQvH.js';
import '../../GroupChannel/components/TypingIndicator.js';
import '../../ui/Badge.js';
import '../../ui/ChannelAvatar.js';
import '../../chunks/bundle-BbICJE5Z.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-CjhP75at.js';
import '../../chunks/bundle-Bi8yp0Ws.js';
import '../../ui/MentionUserLabel.js';
import '../../chunks/bundle-D6pm-XK9.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-DUTd4XYU.js';
import '../../chunks/bundle-BS8ALexW.js';

var ChannelPreview = function (_a) {
    var _b, _c, _d, _e;
    var channel = _a.channel, _f = _a.isActive, isActive = _f === void 0 ? false : _f, _g = _a.isSelected, isSelected = _g === void 0 ? false : _g, _h = _a.isTyping, isTyping = _h === void 0 ? false : _h, renderChannelAction = _a.renderChannelAction, onLeaveChannel = _a.onLeaveChannel, onClick = _a.onClick, tabIndex = _a.tabIndex;
    var config = useSendbirdStateContext().config;
    var stringSet = useLocalization().stringSet;
    var _j = useChannelListContext(), _k = _j.isTypingIndicatorEnabled, isTypingIndicatorEnabled = _k === void 0 ? false : _k, _l = _j.isMessageReceiptStatusEnabled, isMessageReceiptStatusEnabled = _l === void 0 ? false : _l;
    var userId = config.userId;
    var isMessageStatusEnabled = isMessageReceiptStatusEnabled
        && (((_b = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _b === void 0 ? void 0 : _b.messageType) === 'user' || ((_c = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _c === void 0 ? void 0 : _c.messageType) === 'file')
        && ((_e = (_d = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _d === void 0 ? void 0 : _d.sender) === null || _e === void 0 ? void 0 : _e.userId) === userId;
    return (React__default.createElement(GroupChannelListItemView, { channel: channel, tabIndex: tabIndex, isTyping: isTypingIndicatorEnabled && isTyping, isSelected: isSelected !== null && isSelected !== void 0 ? isSelected : isActive, channelName: getChannelTitle(channel, userId, stringSet), isMessageStatusEnabled: isMessageStatusEnabled, onClick: onClick, onLeaveChannel: onLeaveChannel, renderChannelAction: renderChannelAction }));
};

export { ChannelPreview as default };
//# sourceMappingURL=ChannelPreview.js.map
