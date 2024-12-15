import React__default from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { u as useLocalization } from '../../chunks/bundle-DhMUg-L7.js';
import { u as useChannelListContext } from '../../chunks/bundle-BcguwFFa.js';
import { g as getChannelTitle } from '../../chunks/bundle-Biuu5CVW.js';
import { G as GroupChannelListItemView } from '../../chunks/bundle-Djmtl7w8.js';
import '../../withSendbird.js';
import '../../chunks/bundle-HcNswZ5p.js';
import '../../chunks/bundle-dybWaw0v.js';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-BwmZGijR.js';
import '../../chunks/bundle-C5iY_IvV.js';
import '../../chunks/bundle-0WaCg6X7.js';
import '../../chunks/bundle-DQk0aENq.js';
import '../../chunks/bundle-B91Bhfde.js';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-ja8H3E0K.js';
import '../../chunks/bundle-Bd-i99nk.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DjLJFwD7.js';
import '../../chunks/bundle-DB7YSrIT.js';
import 'react-dom';
import '../../chunks/bundle-DnSobLtx.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-Qkp2VIaZ.js';
import '../../ui/Icon.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../chunks/bundle-BKzcG-aC.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-JQDTfT_2.js';
import '../../chunks/bundle-D4JzAgen.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-BDE05Tho.js';
import '../../chunks/bundle-DfmFm_nl.js';
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
