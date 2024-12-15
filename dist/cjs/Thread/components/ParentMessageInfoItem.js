'use strict';

var _tslib = require('../../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var LocalizationContext = require('../../chunks/bundle-Cy1ruNzs.js');
var index = require('../../chunks/bundle-BLoixwYr.js');
var ui_Label = require('../../chunks/bundle-CAR4EIKs.js');
var ui_ImageRenderer = require('../../ui/ImageRenderer.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_TextButton = require('../../ui/TextButton.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ui_EmojiReactions = require('../../ui/EmojiReactions.js');
var Thread_context = require('../context.js');
var ui_VoiceMessageItemBody = require('../../ui/VoiceMessageItemBody.js');
var index$1 = require('../../chunks/bundle-92xEkubH.js');
var tokenize = require('../../chunks/bundle-BIkitklZ.js');
var useFileInfoListWithUploaded = require('../../chunks/bundle-B3JoFOJ4.js');
var MediaQueryContext = require('../../chunks/bundle-DrIKAEHN.js');
var color = require('../../chunks/bundle-CLzI6bbe.js');
var utils = require('../../chunks/bundle-Ck6ikNW6.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('../../withSendbird.js');
require('../../ui/ReactionBadge.js');
require('../../ui/ReactionButton.js');
require('../../chunks/bundle-D_k3_Y_y.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-C1poxl5k.js');
require('../../ui/IconButton.js');
require('../../ui/BottomSheet.js');
require('../../chunks/bundle-DZhkNDpN.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-DgjptBQW.js');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../Message/context.js');
require('../../chunks/bundle-CVdJh4P7.js');
require('../../chunks/bundle-Bs36T7L5.js');
require('../../chunks/bundle-BNuA_uqY.js');
require('@sendbird/chat/message');
require('../context/types.js');
require('../../chunks/bundle-wYxshM30.js');
require('../../chunks/bundle-Dh0NAI0D.js');
require('../../ui/ProgressBar.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../ui/PlaybackTime.js');
require('../../ui/Loader.js');
require('../../ui/MentionLabel.js');
require('../../ui/LinkLabel.js');
require('../../ui/FileViewer.js');
require('../../chunks/bundle-DpdA7O8z.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function ParentMessageInfoItem(_a) {
    var _this = this;
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var className = _a.className, message = _a.message, showFileViewer = _a.showFileViewer, _k = _a.onBeforeDownloadFileMessage, onBeforeDownloadFileMessage = _k === void 0 ? null : _k;
    var _l = useSendbirdStateContext.useSendbirdStateContext(), stores = _l.stores, config = _l.config, eventHandlers = _l.eventHandlers;
    var logger = config.logger;
    var onPressUserProfileHandler = (_b = eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.reaction) === null || _b === void 0 ? void 0 : _b.onPressUserProfile;
    var currentUserId = (_d = (_c = stores === null || stores === void 0 ? void 0 : stores.userStore) === null || _c === void 0 ? void 0 : _c.user) === null || _d === void 0 ? void 0 : _d.userId;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _m = Thread_context.useThreadContext(), currentChannel = _m.currentChannel, emojiContainer = _m.emojiContainer, nicknamesMap = _m.nicknamesMap, toggleReaction = _m.toggleReaction, filterEmojiCategoryIds = _m.filterEmojiCategoryIds;
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    var isReactionEnabled = config.groupChannel.enableReactions;
    var isMentionEnabled = config.groupChannel.enableMention;
    var threadMessageKindKey = useFileInfoListWithUploaded.useThreadMessageKindKeySelector({
        threadMessageKind: useFileInfoListWithUploaded.ThreadMessageKind.PARENT,
        isMobile: isMobile,
    });
    // For MultipleFilesMessage only.
    var statefulFileInfoList = useFileInfoListWithUploaded.useFileInfoListWithUploaded(message);
    var isMentionedMessage = isMentionEnabled
        && ((_e = message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate) === null || _e === void 0 ? void 0 : _e.length) > 0
        && (message === null || message === void 0 ? void 0 : message.mentionedUsers)
        && message.mentionedUsers.length > 0;
    // Emoji reactions
    var isReactionActivated = isReactionEnabled
        && config.groupChannel.replyType === 'thread'
        && ((_f = message === null || message === void 0 ? void 0 : message.reactions) === null || _f === void 0 ? void 0 : _f.length) > 0;
    var tokens = React.useMemo(function () {
        var _a;
        if (isMentionedMessage) {
            return tokenize.tokenizeMessage({
                mentionedUsers: (_a = message === null || message === void 0 ? void 0 : message.mentionedUsers) !== null && _a !== void 0 ? _a : undefined,
                messageText: message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate,
                includeMarkdown: config.groupChannel.enableMarkdownForUserMessage,
            });
        }
        return tokenize.tokenizeMessage({
            messageText: message === null || message === void 0 ? void 0 : message.message,
            includeMarkdown: config.groupChannel.enableMarkdownForUserMessage,
        });
    }, [message === null || message === void 0 ? void 0 : message.updatedAt, message === null || message === void 0 ? void 0 : message.message]);
    // Only for the FileMessageItemBody
    var downloadFileWithUrl = function () {
        if (index.isFileMessage(message))
            utils.openURL(message.url);
    };
    var handleOnClickTextButton = onBeforeDownloadFileMessage
        ? function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
            var allowDownload, err_1;
            var _a, _b;
            return _tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(message.messageType === 'file')) return [3 /*break*/, 4];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, onBeforeDownloadFileMessage({ message: message })];
                    case 2:
                        allowDownload = _c.sent();
                        if (allowDownload) {
                            downloadFileWithUrl();
                        }
                        else {
                            (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'ParentMessageInfoItem: Not allowed to download.');
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _c.sent();
                        (_b = logger === null || logger === void 0 ? void 0 : logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, 'ParentMessageInfoItem: Error occurred while determining download continuation:', err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); }
        : downloadFileWithUrl;
    // Thumbnail mesage
    var _o = React.useState(false), isImageRendered = _o[0], setImageRendered = _o[1];
    var thumbnailUrl = ((_g = message === null || message === void 0 ? void 0 : message.thumbnails) === null || _g === void 0 ? void 0 : _g.length) > 0
        ? (_h = message === null || message === void 0 ? void 0 : message.thumbnails[0]) === null || _h === void 0 ? void 0 : _h.url : '';
    return (React__default.default.createElement("div", { className: "sendbird-parent-message-info-item ".concat(className) },
        index.isUserMessage(message) && (React__default.default.createElement(ui_Label.Label, { className: "sendbird-parent-message-info-item__text-message", type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_1 },
            React__default.default.createElement(index$1.TextFragment, { tokens: tokens }),
            index.isEditedMessage(message) && (React__default.default.createElement(ui_Label.Label, { className: "sendbird-parent-message-info-item__text-message edited", type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_2 }, " ".concat(stringSet.MESSAGE_EDITED, " "))))),
        // Instead of the FileMessageItemBody component
        (index.getUIKitMessageType(message) === index.getUIKitMessageTypes().FILE) && (React__default.default.createElement("div", { className: "sendbird-parent-message-info-item__file-message" },
            React__default.default.createElement("div", { className: "sendbird-parent-message-info-item__file-message__file-icon" },
                React__default.default.createElement(ui_Icon.default, { className: "sendbird-parent-message-info-item__file-message__file-icon__icon", type: {
                        IMAGE: ui_Icon.IconTypes.PHOTO,
                        VIDEO: ui_Icon.IconTypes.PLAY,
                        AUDIO: ui_Icon.IconTypes.FILE_AUDIO,
                        GIF: ui_Icon.IconTypes.GIF,
                        OTHERS: ui_Icon.IconTypes.FILE_DOCUMENT,
                    }[index.getUIKitFileType(message === null || message === void 0 ? void 0 : message.type)], fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" })),
            React__default.default.createElement(ui_TextButton, { className: "sendbird-parent-message-info-item__file-message__file-name", onClick: handleOnClickTextButton, color: color.Colors.ONBACKGROUND_1 },
                React__default.default.createElement(ui_Label.Label, { className: "sendbird-parent-message-info-item__file-message__file-name__text", type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, index.truncateString((message === null || message === void 0 ? void 0 : message.name) || (message === null || message === void 0 ? void 0 : message.url), 30))))),
        index.isMultipleFilesMessage(message) && (React__default.default.createElement(useFileInfoListWithUploaded.MultipleFilesMessageItemBody, { className: "sendbird-parent-message-info-item__multiple-files-message-wrapper", message: message, isByMe: false, isReactionEnabled: isReactionEnabled, threadMessageKindKey: threadMessageKindKey, statefulFileInfoList: statefulFileInfoList, onBeforeDownloadFileMessage: onBeforeDownloadFileMessage })),
        index.isVoiceMessage(message) && (React__default.default.createElement("div", { className: "sendbird-parent-message-info-item__voice-message" },
            React__default.default.createElement(ui_VoiceMessageItemBody.VoiceMessageItemBody, { className: "sendbird-parent-message-info-item__voice-message__item", message: message, channelUrl: currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url, isByMe: false, isReactionEnabled: isReactionEnabled }))),
        index.isThumbnailMessage(message) && (React__default.default.createElement("div", { className: "sendbird-parent-message-info-item__thumbnail-message", onClick: function () {
                if (index.isSentMessage(message)) {
                    showFileViewer === null || showFileViewer === void 0 ? void 0 : showFileViewer(true);
                }
            } },
            React__default.default.createElement(ui_ImageRenderer.default, { className: "sendbird-parent-message-info-item__thumbnail-message__thumbnail", url: thumbnailUrl || (message === null || message === void 0 ? void 0 : message.url) || (message === null || message === void 0 ? void 0 : message.plainUrl), alt: message === null || message === void 0 ? void 0 : message.type, width: "200px", height: "148px", onLoad: function () { setImageRendered(true); }, placeHolder: function (_a) {
                    var style = _a.style;
                    return (React__default.default.createElement("div", { className: "sendbird-parent-message-info-item__thumbnail-message__placeholder", style: style },
                        React__default.default.createElement("div", { className: "sendbird-parent-message-info-item__thumbnail-message__placeholder__icon" },
                            React__default.default.createElement(ui_Icon.default, { type: index.isVideoMessage(message) ? ui_Icon.IconTypes.PLAY : ui_Icon.IconTypes.PHOTO, fillColor: ui_Icon.IconColors.ON_BACKGROUND_2, width: "34px", height: "34px" }))));
                } }),
            (index.isVideoMessage(message) && !thumbnailUrl) && !isImageRendered && (React__default.default.createElement("video", { className: "sendbird-parent-message-info-item__thumbnail-message__video" },
                React__default.default.createElement("source", { src: (message === null || message === void 0 ? void 0 : message.url) || (message === null || message === void 0 ? void 0 : message.plainUrl), type: message === null || message === void 0 ? void 0 : message.type }))),
            React__default.default.createElement("div", { className: "sendbird-parent-message-info-item__thumbnail-message__image-cover" }),
            (index.isVideoMessage(message) || index.isGifMessage(message)) && (React__default.default.createElement("div", { className: "sendbird-parent-message-info-item__thumbnail-message__icon-wrapper" },
                React__default.default.createElement("div", { className: "sendbird-parent-message-info-item__thumbnail-message__icon-wrapper__icon" },
                    React__default.default.createElement(ui_Icon.default, { type: index.isVideoMessage(message) ? ui_Icon.IconTypes.PLAY : ui_Icon.IconTypes.GIF, fillColor: ui_Icon.IconColors.ON_BACKGROUND_2, width: "34px", height: "34px" })))))),
        index.getUIKitMessageType(message) === ((_j = index.getUIKitMessageTypes === null || index.getUIKitMessageTypes === void 0 ? void 0 : index.getUIKitMessageTypes()) === null || _j === void 0 ? void 0 : _j.UNKNOWN) && (React__default.default.createElement("div", { className: "sendbird-parent-message-info-item__unknown-message" },
            React__default.default.createElement(ui_Label.Label, { className: "sendbird-parent-message-info-item__unknown-message__header", type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.UNKNOWN__UNKNOWN_MESSAGE_TYPE),
            React__default.default.createElement(ui_Label.Label, { className: "sendbird-parent-message-info-item__unknown-message__description", type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_2 }, stringSet.UNKNOWN__CANNOT_READ_MESSAGE))),
        isReactionActivated && (React__default.default.createElement("div", { className: "sendbird-parent-message-info__reactions" },
            React__default.default.createElement(ui_EmojiReactions, { userId: currentUserId, message: message, channel: currentChannel, isByMe: false, emojiContainer: emojiContainer, memberNicknamesMap: nicknamesMap, toggleReaction: toggleReaction, onPressUserProfile: onPressUserProfileHandler, filterEmojiCategoryIds: filterEmojiCategoryIds })))));
}

module.exports = ParentMessageInfoItem;
//# sourceMappingURL=ParentMessageInfoItem.js.map
