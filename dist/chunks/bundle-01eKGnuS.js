import { _ as __assign } from './bundle-Ck-Lg2K3.js';
import React__default, { useState } from 'react';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import { u as useLongPress } from './bundle-B6cyKQvH.js';
import { u as useLocalization } from './bundle-CbLNLMef.js';
import { u as useMediaQueryContext } from './bundle-Bk1oUUzJ.js';
import { n as noop } from './bundle-pQHYhigr.js';
import { i as isVoiceMessage } from './bundle-BL0uQSu6.js';
import { a as getLastMessageText, b as getTotalMembers, M as MessageStatus, c as getLastMessageCreatedAt, d as getChannelUnreadMessageCount } from './bundle-IQ2MguAG.js';
import { TypingIndicatorText } from '../GroupChannel/components/TypingIndicator.js';
import Badge from '../ui/Badge.js';
import ChannelAvatar from '../ui/ChannelAvatar.js';
import Icon, { IconTypes, IconColors } from '../ui/Icon.js';
import { L as Label, a as LabelTypography, b as LabelColors } from './bundle-Di0Zwz2X.js';
import MentionUserLabel from '../ui/MentionUserLabel.js';
import { M as Modal } from './bundle-ptS-tNRF.js';
import TextButton from '../ui/TextButton.js';
import { g as getChannelPreviewMessage } from './bundle-BS8ALexW.js';

var GroupChannelListItemView = function (_a) {
    var channel = _a.channel, tabIndex = _a.tabIndex, isTyping = _a.isTyping, isSelected = _a.isSelected, channelName = _a.channelName, _b = _a.isMessageStatusEnabled, isMessageStatusEnabled = _b === void 0 ? true : _b, _c = _a.onClick, onClick = _c === void 0 ? noop : _c, _d = _a.onLeaveChannel, onLeaveChannel = _d === void 0 ? function () { return Promise.resolve(); } : _d, renderChannelAction = _a.renderChannelAction;
    var config = useSendbirdStateContext().config;
    var theme = config.theme, userId = config.userId;
    var _e = useLocalization(), dateLocale = _e.dateLocale, stringSet = _e.stringSet;
    var isMobile = useMediaQueryContext().isMobile;
    var isMentionEnabled = config.groupChannel.enableMention;
    var lastMessage = getLastMessageText(channel, stringSet);
    var previewLastMessage = config.groupChannel.enableMarkdownForUserMessage
        ? getChannelPreviewMessage(lastMessage)
        : lastMessage;
    var _f = useState(false), showMobileLeave = _f[0], setShowMobileLeave = _f[1];
    var onLongPress = useLongPress({
        onLongPress: function () {
            if (isMobile) {
                setShowMobileLeave(true);
            }
        },
        onClick: onClick,
    }, {
        delay: 1000,
    });
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", __assign({ className: [
                'sendbird-channel-preview',
                isSelected ? 'sendbird-channel-preview--active' : '',
            ].join(' '), role: "link", tabIndex: tabIndex }, (isMobile ? __assign({}, onLongPress) : { onClick: onClick })),
            React__default.createElement("div", { className: "sendbird-channel-preview__avatar" },
                React__default.createElement(ChannelAvatar, { channel: channel, userId: userId, theme: theme })),
            React__default.createElement("div", { className: "sendbird-channel-preview__content" },
                React__default.createElement("div", { className: "sendbird-channel-preview__content__upper" },
                    React__default.createElement("div", { className: "sendbird-channel-preview__content__upper__header" },
                        (channel.isBroadcast || false) && (React__default.createElement("div", { className: "sendbird-channel-preview__content__upper__header__broadcast-icon" },
                            React__default.createElement(Icon, { type: IconTypes.BROADCAST, fillColor: IconColors.SECONDARY, height: "16px", width: "16px" }))),
                        React__default.createElement(Label, { className: "sendbird-channel-preview__content__upper__header__channel-name", testID: "sendbird-channel-preview__content__upper__header__channel-name", type: LabelTypography.SUBTITLE_2, color: LabelColors.ONBACKGROUND_1 }, channelName),
                        React__default.createElement(Label, { className: "sendbird-channel-preview__content__upper__header__total-members", type: LabelTypography.CAPTION_2, color: LabelColors.ONBACKGROUND_2 }, getTotalMembers(channel)),
                        (channel.isFrozen) && (React__default.createElement("div", { title: "Frozen", className: "sendbird-channel-preview__content__upper__header__frozen-icon" },
                            React__default.createElement(Icon, { type: IconTypes.FREEZE, fillColor: IconColors.PRIMARY, height: 12, width: 12 })))),
                    !channel.isEphemeral && isMessageStatusEnabled && (React__default.createElement(MessageStatus, { className: "sendbird-channel-preview__content__upper__last-message-at", channel: channel, message: channel.lastMessage, isDateSeparatorConsidered: false })),
                    !channel.isEphemeral && !isMessageStatusEnabled && (React__default.createElement(Label, { className: "sendbird-channel-preview__content__upper__last-message-at", type: LabelTypography.CAPTION_3, color: LabelColors.ONBACKGROUND_2 }, getLastMessageCreatedAt({
                        channel: channel,
                        locale: dateLocale,
                        stringSet: stringSet,
                    })))),
                React__default.createElement("div", { className: "sendbird-channel-preview__content__lower" },
                    React__default.createElement(Label, { className: "sendbird-channel-preview__content__lower__last-message", type: LabelTypography.BODY_2, color: LabelColors.ONBACKGROUND_3 },
                        isTyping && (React__default.createElement(TypingIndicatorText, { members: channel.getTypingUsers() })),
                        !isTyping
                            && !isVoiceMessage(channel.lastMessage)
                            && previewLastMessage,
                        !isTyping
                            && isVoiceMessage(channel.lastMessage)
                            && stringSet.VOICE_MESSAGE),
                    /**
                     * Do not show unread count for focused channel. This is because of the limitation where
                     * isScrollBottom and hasNext states needs to be added globally but they are from channel context
                     * so channel list cannot see them with the current architecture.
                     */
                    !isSelected && !channel.isEphemeral && (React__default.createElement("div", { className: "sendbird-channel-preview__content__lower__unread-message-count" },
                        isMentionEnabled && channel.unreadMentionCount > 0 ? (React__default.createElement(MentionUserLabel, { className: "sendbird-channel-preview__content__lower__unread-message-count__mention", color: "purple" }, '@')) : null,
                        getChannelUnreadMessageCount(channel) ? ( // return number
                        React__default.createElement(Badge, { count: getChannelUnreadMessageCount(channel) })) : null)))),
            !isMobile && (React__default.createElement("div", { className: "sendbird-channel-preview__action" }, renderChannelAction({ channel: channel })))),
        showMobileLeave && isMobile && (React__default.createElement(Modal, { className: "sendbird-channel-preview__leave--mobile", titleText: channelName, hideFooter: true, isCloseOnClickOutside: true, onCancel: function () { return setShowMobileLeave(false); } },
            React__default.createElement(TextButton, { onClick: function () {
                    onLeaveChannel();
                    setShowMobileLeave(false);
                }, className: "sendbird-channel-preview__leave-label--mobile" },
                React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_PREVIEW_MOBILE_LEAVE))))));
};

export { GroupChannelListItemView as G };
//# sourceMappingURL=bundle-01eKGnuS.js.map
