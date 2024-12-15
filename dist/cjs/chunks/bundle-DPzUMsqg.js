'use strict';

var _tslib = require('./bundle-Bdr7xlea.js');
var React = require('react');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var useLongPress = require('./bundle-D_k3_Y_y.js');
var LocalizationContext = require('./bundle-Cy1ruNzs.js');
var MediaQueryContext = require('./bundle-DrIKAEHN.js');
var utils = require('./bundle-Ck6ikNW6.js');
var index = require('./bundle-BLoixwYr.js');
var ui_MessageStatus = require('./bundle-BQHwJ1ZS.js');
var GroupChannel_components_TypingIndicator = require('../GroupChannel/components/TypingIndicator.js');
var ui_Badge = require('../ui/Badge.js');
var ui_ChannelAvatar = require('../ui/ChannelAvatar.js');
var ui_Icon = require('../ui/Icon.js');
var ui_Label = require('./bundle-CAR4EIKs.js');
var ui_MentionUserLabel = require('../ui/MentionUserLabel.js');
var ui_Modal = require('./bundle-DZhkNDpN.js');
var ui_TextButton = require('../ui/TextButton.js');
var tokenize = require('./bundle-BIkitklZ.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var GroupChannelListItemView = function (_a) {
    var channel = _a.channel, tabIndex = _a.tabIndex, isTyping = _a.isTyping, isSelected = _a.isSelected, channelName = _a.channelName, _b = _a.isMessageStatusEnabled, isMessageStatusEnabled = _b === void 0 ? true : _b, _c = _a.onClick, onClick = _c === void 0 ? utils.noop : _c, _d = _a.onLeaveChannel, onLeaveChannel = _d === void 0 ? function () { return Promise.resolve(); } : _d, renderChannelAction = _a.renderChannelAction;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var theme = config.theme, userId = config.userId;
    var _e = LocalizationContext.useLocalization(), dateLocale = _e.dateLocale, stringSet = _e.stringSet;
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    var isMentionEnabled = config.groupChannel.enableMention;
    var lastMessage = ui_MessageStatus.getLastMessageText(channel, stringSet);
    var previewLastMessage = config.groupChannel.enableMarkdownForUserMessage
        ? tokenize.getChannelPreviewMessage(lastMessage)
        : lastMessage;
    var _f = React.useState(false), showMobileLeave = _f[0], setShowMobileLeave = _f[1];
    var onLongPress = useLongPress.useLongPress({
        onLongPress: function () {
            if (isMobile) {
                setShowMobileLeave(true);
            }
        },
        onClick: onClick,
    }, {
        delay: 1000,
    });
    return (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement("div", _tslib.__assign({ className: [
                'sendbird-channel-preview',
                isSelected ? 'sendbird-channel-preview--active' : '',
            ].join(' '), role: "link", tabIndex: tabIndex }, (isMobile ? _tslib.__assign({}, onLongPress) : { onClick: onClick })),
            React__default.default.createElement("div", { className: "sendbird-channel-preview__avatar" },
                React__default.default.createElement(ui_ChannelAvatar, { channel: channel, userId: userId, theme: theme })),
            React__default.default.createElement("div", { className: "sendbird-channel-preview__content" },
                React__default.default.createElement("div", { className: "sendbird-channel-preview__content__upper" },
                    React__default.default.createElement("div", { className: "sendbird-channel-preview__content__upper__header" },
                        (channel.isBroadcast || false) && (React__default.default.createElement("div", { className: "sendbird-channel-preview__content__upper__header__broadcast-icon" },
                            React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.BROADCAST, fillColor: ui_Icon.IconColors.SECONDARY, height: "16px", width: "16px" }))),
                        React__default.default.createElement(ui_Label.Label, { className: "sendbird-channel-preview__content__upper__header__channel-name", testID: "sendbird-channel-preview__content__upper__header__channel-name", type: ui_Label.LabelTypography.SUBTITLE_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, channelName),
                        React__default.default.createElement(ui_Label.Label, { className: "sendbird-channel-preview__content__upper__header__total-members", type: ui_Label.LabelTypography.CAPTION_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, ui_MessageStatus.getTotalMembers(channel)),
                        (channel.isFrozen) && (React__default.default.createElement("div", { title: "Frozen", className: "sendbird-channel-preview__content__upper__header__frozen-icon" },
                            React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.FREEZE, fillColor: ui_Icon.IconColors.PRIMARY, height: 12, width: 12 })))),
                    !channel.isEphemeral && isMessageStatusEnabled && (React__default.default.createElement(ui_MessageStatus.MessageStatus, { className: "sendbird-channel-preview__content__upper__last-message-at", channel: channel, message: channel.lastMessage, isDateSeparatorConsidered: false })),
                    !channel.isEphemeral && !isMessageStatusEnabled && (React__default.default.createElement(ui_Label.Label, { className: "sendbird-channel-preview__content__upper__last-message-at", type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_2 }, ui_MessageStatus.getLastMessageCreatedAt({
                        channel: channel,
                        locale: dateLocale,
                        stringSet: stringSet,
                    })))),
                React__default.default.createElement("div", { className: "sendbird-channel-preview__content__lower" },
                    React__default.default.createElement(ui_Label.Label, { className: "sendbird-channel-preview__content__lower__last-message", type: ui_Label.LabelTypography.BODY_2, color: ui_Label.LabelColors.ONBACKGROUND_3 },
                        isTyping && (React__default.default.createElement(GroupChannel_components_TypingIndicator.TypingIndicatorText, { members: channel.getTypingUsers() })),
                        !isTyping
                            && !index.isVoiceMessage(channel.lastMessage)
                            && previewLastMessage,
                        !isTyping
                            && index.isVoiceMessage(channel.lastMessage)
                            && stringSet.VOICE_MESSAGE),
                    /**
                     * Do not show unread count for focused channel. This is because of the limitation where
                     * isScrollBottom and hasNext states needs to be added globally but they are from channel context
                     * so channel list cannot see them with the current architecture.
                     */
                    !isSelected && !channel.isEphemeral && (React__default.default.createElement("div", { className: "sendbird-channel-preview__content__lower__unread-message-count" },
                        isMentionEnabled && channel.unreadMentionCount > 0 ? (React__default.default.createElement(ui_MentionUserLabel, { className: "sendbird-channel-preview__content__lower__unread-message-count__mention", color: "purple" }, '@')) : null,
                        ui_MessageStatus.getChannelUnreadMessageCount(channel) ? ( // return number
                        React__default.default.createElement(ui_Badge, { count: ui_MessageStatus.getChannelUnreadMessageCount(channel) })) : null)))),
            !isMobile && (React__default.default.createElement("div", { className: "sendbird-channel-preview__action" }, renderChannelAction({ channel: channel })))),
        showMobileLeave && isMobile && (React__default.default.createElement(ui_Modal.Modal, { className: "sendbird-channel-preview__leave--mobile", titleText: channelName, hideFooter: true, isCloseOnClickOutside: true, onCancel: function () { return setShowMobileLeave(false); } },
            React__default.default.createElement(ui_TextButton, { onClick: function () {
                    onLeaveChannel();
                    setShowMobileLeave(false);
                }, className: "sendbird-channel-preview__leave-label--mobile" },
                React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_PREVIEW_MOBILE_LEAVE))))));
};

exports.GroupChannelListItemView = GroupChannelListItemView;
//# sourceMappingURL=bundle-DPzUMsqg.js.map
