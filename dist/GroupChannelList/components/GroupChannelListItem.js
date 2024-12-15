import React__default from 'react';
import { g as getChannelTitle } from '../../chunks/bundle-IQ2MguAG.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { u as useLocalization } from '../../chunks/bundle-CbLNLMef.js';
import { useGroupChannelListContext } from '../context.js';
import { G as GroupChannelListItemView } from '../../chunks/bundle-01eKGnuS.js';
import '../../chunks/bundle-Ck-Lg2K3.js';
import '../../chunks/bundle-D4fsEPre.js';
import '../../chunks/bundle-CnkNoe49.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-pQHYhigr.js';
import '../../chunks/bundle-Di0Zwz2X.js';
import '../../chunks/bundle-B80WXNZi.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-BL0uQSu6.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-fwRBR_Yw.js';
import '../../chunks/bundle-DgxVBBM3.js';
import '../../chunks/bundle-BxmZCK6X.js';
import '../../chunks/bundle-B5oDG6vR.js';
import '../../withSendbird.js';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-C3toIOqd.js';
import '../../chunks/bundle-ptS-tNRF.js';
import 'react-dom';
import '../../chunks/bundle-Bk1oUUzJ.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-gMJSD9hQ.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CHD1aKHO.js';
import '../../chunks/bundle-A5WEPjt6.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-qZpJFKwp.js';
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

var GroupChannelListItem = function (_a) {
    var _b, _c, _d;
    var channel = _a.channel, isSelected = _a.isSelected, isTyping = _a.isTyping, renderChannelAction = _a.renderChannelAction, onLeaveChannel = _a.onLeaveChannel, onClick = _a.onClick, tabIndex = _a.tabIndex;
    var config = useSendbirdStateContext().config;
    var stringSet = useLocalization().stringSet;
    var _e = useGroupChannelListContext(), _f = _e.isTypingIndicatorEnabled, isTypingIndicatorEnabled = _f === void 0 ? false : _f, _g = _e.isMessageReceiptStatusEnabled, isMessageReceiptStatusEnabled = _g === void 0 ? false : _g;
    var userId = config.userId;
    var isMessageStatusEnabled = isMessageReceiptStatusEnabled
        && (!((_b = channel.lastMessage) === null || _b === void 0 ? void 0 : _b.isAdminMessage()))
        && ((_d = (_c = channel.lastMessage) === null || _c === void 0 ? void 0 : _c.sender) === null || _d === void 0 ? void 0 : _d.userId) === userId;
    return (React__default.createElement(GroupChannelListItemView, { channel: channel, tabIndex: tabIndex, channelName: getChannelTitle(channel, userId, stringSet), isTyping: isTypingIndicatorEnabled && isTyping, isSelected: isSelected, isMessageStatusEnabled: isMessageStatusEnabled, onClick: onClick, onLeaveChannel: onLeaveChannel, renderChannelAction: renderChannelAction }));
};

export { GroupChannelListItem };
//# sourceMappingURL=GroupChannelListItem.js.map
