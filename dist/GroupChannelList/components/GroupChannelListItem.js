import React__default from 'react';
import { g as getChannelTitle } from '../../chunks/bundle-Biuu5CVW.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { u as useLocalization } from '../../chunks/bundle-DhMUg-L7.js';
import { useGroupChannelListContext } from '../context.js';
import { G as GroupChannelListItemView } from '../../chunks/bundle-Djmtl7w8.js';
import '../../chunks/bundle-HcNswZ5p.js';
import '../../chunks/bundle-D4JzAgen.js';
import '../../chunks/bundle-DB7YSrIT.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-0WaCg6X7.js';
import '../../chunks/bundle-Qkp2VIaZ.js';
import '../../chunks/bundle-dybWaw0v.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-Bd-i99nk.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DjLJFwD7.js';
import '../../chunks/bundle-DQk0aENq.js';
import '../../chunks/bundle-BDE05Tho.js';
import '../../chunks/bundle-DfmFm_nl.js';
import '../../withSendbird.js';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-B91Bhfde.js';
import '../../chunks/bundle-ja8H3E0K.js';
import 'react-dom';
import '../../chunks/bundle-DnSobLtx.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../chunks/bundle-BKzcG-aC.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-qYO3S317.js';
import '../../chunks/bundle-B6yWIKOT.js';
import '../../GroupChannel/components/TypingIndicator.js';
import '../../ui/Badge.js';
import '../../ui/ChannelAvatar.js';
import '../../chunks/bundle-2pbuHA3C.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-DkDQ1PWY.js';
import '../../chunks/bundle-AE2zORxE.js';
import '../../ui/MentionUserLabel.js';
import '../../chunks/bundle-DCxt9PzH.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-DGMsaaNU.js';
import '../../chunks/bundle-BvQmfZZv.js';

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
