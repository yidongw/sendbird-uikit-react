import { a as __awaiter, b as __generator } from '../../chunks/bundle-HcNswZ5p.js';
import React__default, { useMemo, useState } from 'react';
import { u as useLocalization } from '../../chunks/bundle-DhMUg-L7.js';
import { m as isUserMessage, e as isEditedMessage, n as getUIKitMessageType, o as getUIKitMessageTypes, p as getUIKitFileType, t as truncateString, d as isMultipleFilesMessage, i as isVoiceMessage, q as isThumbnailMessage, r as isSentMessage, s as isVideoMessage, u as isGifMessage, c as isFileMessage } from '../../chunks/bundle-Bd-i99nk.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-Qkp2VIaZ.js';
import ImageRenderer from '../../ui/ImageRenderer.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import TextButton from '../../ui/TextButton.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import EmojiReactions from '../../ui/EmojiReactions.js';
import { useThreadContext } from '../context.js';
import { VoiceMessageItemBody } from '../../ui/VoiceMessageItemBody.js';
import { T as TextFragment } from '../../chunks/bundle-CYbqxz_s.js';
import { t as tokenizeMessage } from '../../chunks/bundle-BvQmfZZv.js';
import { u as useThreadMessageKindKeySelector, a as useFileInfoListWithUploaded, M as MultipleFilesMessageItemBody, T as ThreadMessageKind } from '../../chunks/bundle-CW5sRqha.js';
import { u as useMediaQueryContext } from '../../chunks/bundle-DnSobLtx.js';
import { C as Colors } from '../../chunks/bundle-DGMsaaNU.js';
import { o as openURL } from '../../chunks/bundle-0WaCg6X7.js';
import '../../chunks/bundle-dybWaw0v.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DjLJFwD7.js';
import '../../chunks/bundle-DB7YSrIT.js';
import '../../chunks/bundle-DQk0aENq.js';
import '../../withSendbird.js';
import '../../ui/ReactionBadge.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-B6yWIKOT.js';
import '../../chunks/bundle-BKzcG-aC.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-C5iY_IvV.js';
import '../../ui/IconButton.js';
import '../../ui/BottomSheet.js';
import '../../chunks/bundle-ja8H3E0K.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-B91Bhfde.js';
import '../../chunks/bundle-2pbuHA3C.js';
import '../../chunks/bundle-DkDQ1PWY.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-BwmZGijR.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../Message/context.js';
import '../../chunks/bundle-CuavrWk1.js';
import '../../chunks/bundle-B43UOaqG.js';
import '../../chunks/bundle-D-F3KakE.js';
import '@sendbird/chat/message';
import '../context/types.js';
import '../../chunks/bundle-DDTq-6FS.js';
import '../../chunks/bundle-zVlBKrSk.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../ui/PlaybackTime.js';
import '../../ui/Loader.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../ui/FileViewer.js';
import '../../chunks/bundle-A7zrKt0i.js';

function ParentMessageInfoItem(_a) {
    var _this = this;
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var className = _a.className, message = _a.message, showFileViewer = _a.showFileViewer, _k = _a.onBeforeDownloadFileMessage, onBeforeDownloadFileMessage = _k === void 0 ? null : _k;
    var _l = useSendbirdStateContext(), stores = _l.stores, config = _l.config, eventHandlers = _l.eventHandlers;
    var logger = config.logger;
    var onPressUserProfileHandler = (_b = eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.reaction) === null || _b === void 0 ? void 0 : _b.onPressUserProfile;
    var currentUserId = (_d = (_c = stores === null || stores === void 0 ? void 0 : stores.userStore) === null || _c === void 0 ? void 0 : _c.user) === null || _d === void 0 ? void 0 : _d.userId;
    var stringSet = useLocalization().stringSet;
    var _m = useThreadContext(), currentChannel = _m.currentChannel, emojiContainer = _m.emojiContainer, nicknamesMap = _m.nicknamesMap, toggleReaction = _m.toggleReaction, filterEmojiCategoryIds = _m.filterEmojiCategoryIds;
    var isMobile = useMediaQueryContext().isMobile;
    var isReactionEnabled = config.groupChannel.enableReactions;
    var isMentionEnabled = config.groupChannel.enableMention;
    var threadMessageKindKey = useThreadMessageKindKeySelector({
        threadMessageKind: ThreadMessageKind.PARENT,
        isMobile: isMobile,
    });
    // For MultipleFilesMessage only.
    var statefulFileInfoList = useFileInfoListWithUploaded(message);
    var isMentionedMessage = isMentionEnabled
        && ((_e = message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate) === null || _e === void 0 ? void 0 : _e.length) > 0
        && (message === null || message === void 0 ? void 0 : message.mentionedUsers)
        && message.mentionedUsers.length > 0;
    // Emoji reactions
    var isReactionActivated = isReactionEnabled
        && config.groupChannel.replyType === 'thread'
        && ((_f = message === null || message === void 0 ? void 0 : message.reactions) === null || _f === void 0 ? void 0 : _f.length) > 0;
    var tokens = useMemo(function () {
        var _a;
        if (isMentionedMessage) {
            return tokenizeMessage({
                mentionedUsers: (_a = message === null || message === void 0 ? void 0 : message.mentionedUsers) !== null && _a !== void 0 ? _a : undefined,
                messageText: message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate,
                includeMarkdown: config.groupChannel.enableMarkdownForUserMessage,
            });
        }
        return tokenizeMessage({
            messageText: message === null || message === void 0 ? void 0 : message.message,
            includeMarkdown: config.groupChannel.enableMarkdownForUserMessage,
        });
    }, [message === null || message === void 0 ? void 0 : message.updatedAt, message === null || message === void 0 ? void 0 : message.message]);
    // Only for the FileMessageItemBody
    var downloadFileWithUrl = function () {
        if (isFileMessage(message))
            openURL(message.url);
    };
    var handleOnClickTextButton = onBeforeDownloadFileMessage
        ? function () { return __awaiter(_this, void 0, void 0, function () {
            var allowDownload, err_1;
            var _a, _b;
            return __generator(this, function (_c) {
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
    var _o = useState(false), isImageRendered = _o[0], setImageRendered = _o[1];
    var thumbnailUrl = ((_g = message === null || message === void 0 ? void 0 : message.thumbnails) === null || _g === void 0 ? void 0 : _g.length) > 0
        ? (_h = message === null || message === void 0 ? void 0 : message.thumbnails[0]) === null || _h === void 0 ? void 0 : _h.url : '';
    return (React__default.createElement("div", { className: "sendbird-parent-message-info-item ".concat(className) },
        isUserMessage(message) && (React__default.createElement(Label, { className: "sendbird-parent-message-info-item__text-message", type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_1 },
            React__default.createElement(TextFragment, { tokens: tokens }),
            isEditedMessage(message) && (React__default.createElement(Label, { className: "sendbird-parent-message-info-item__text-message edited", type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_2 }, " ".concat(stringSet.MESSAGE_EDITED, " "))))),
        // Instead of the FileMessageItemBody component
        (getUIKitMessageType(message) === getUIKitMessageTypes().FILE) && (React__default.createElement("div", { className: "sendbird-parent-message-info-item__file-message" },
            React__default.createElement("div", { className: "sendbird-parent-message-info-item__file-message__file-icon" },
                React__default.createElement(Icon, { className: "sendbird-parent-message-info-item__file-message__file-icon__icon", type: {
                        IMAGE: IconTypes.PHOTO,
                        VIDEO: IconTypes.PLAY,
                        AUDIO: IconTypes.FILE_AUDIO,
                        GIF: IconTypes.GIF,
                        OTHERS: IconTypes.FILE_DOCUMENT,
                    }[getUIKitFileType(message === null || message === void 0 ? void 0 : message.type)], fillColor: IconColors.PRIMARY, width: "24px", height: "24px" })),
            React__default.createElement(TextButton, { className: "sendbird-parent-message-info-item__file-message__file-name", onClick: handleOnClickTextButton, color: Colors.ONBACKGROUND_1 },
                React__default.createElement(Label, { className: "sendbird-parent-message-info-item__file-message__file-name__text", type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_1 }, truncateString((message === null || message === void 0 ? void 0 : message.name) || (message === null || message === void 0 ? void 0 : message.url), 30))))),
        isMultipleFilesMessage(message) && (React__default.createElement(MultipleFilesMessageItemBody, { className: "sendbird-parent-message-info-item__multiple-files-message-wrapper", message: message, isByMe: false, isReactionEnabled: isReactionEnabled, threadMessageKindKey: threadMessageKindKey, statefulFileInfoList: statefulFileInfoList, onBeforeDownloadFileMessage: onBeforeDownloadFileMessage })),
        isVoiceMessage(message) && (React__default.createElement("div", { className: "sendbird-parent-message-info-item__voice-message" },
            React__default.createElement(VoiceMessageItemBody, { className: "sendbird-parent-message-info-item__voice-message__item", message: message, channelUrl: currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url, isByMe: false, isReactionEnabled: isReactionEnabled }))),
        isThumbnailMessage(message) && (React__default.createElement("div", { className: "sendbird-parent-message-info-item__thumbnail-message", onClick: function () {
                if (isSentMessage(message)) {
                    showFileViewer === null || showFileViewer === void 0 ? void 0 : showFileViewer(true);
                }
            } },
            React__default.createElement(ImageRenderer, { className: "sendbird-parent-message-info-item__thumbnail-message__thumbnail", url: thumbnailUrl || (message === null || message === void 0 ? void 0 : message.url) || (message === null || message === void 0 ? void 0 : message.plainUrl), alt: message === null || message === void 0 ? void 0 : message.type, width: "200px", height: "148px", onLoad: function () { setImageRendered(true); }, placeHolder: function (_a) {
                    var style = _a.style;
                    return (React__default.createElement("div", { className: "sendbird-parent-message-info-item__thumbnail-message__placeholder", style: style },
                        React__default.createElement("div", { className: "sendbird-parent-message-info-item__thumbnail-message__placeholder__icon" },
                            React__default.createElement(Icon, { type: isVideoMessage(message) ? IconTypes.PLAY : IconTypes.PHOTO, fillColor: IconColors.ON_BACKGROUND_2, width: "34px", height: "34px" }))));
                } }),
            (isVideoMessage(message) && !thumbnailUrl) && !isImageRendered && (React__default.createElement("video", { className: "sendbird-parent-message-info-item__thumbnail-message__video" },
                React__default.createElement("source", { src: (message === null || message === void 0 ? void 0 : message.url) || (message === null || message === void 0 ? void 0 : message.plainUrl), type: message === null || message === void 0 ? void 0 : message.type }))),
            React__default.createElement("div", { className: "sendbird-parent-message-info-item__thumbnail-message__image-cover" }),
            (isVideoMessage(message) || isGifMessage(message)) && (React__default.createElement("div", { className: "sendbird-parent-message-info-item__thumbnail-message__icon-wrapper" },
                React__default.createElement("div", { className: "sendbird-parent-message-info-item__thumbnail-message__icon-wrapper__icon" },
                    React__default.createElement(Icon, { type: isVideoMessage(message) ? IconTypes.PLAY : IconTypes.GIF, fillColor: IconColors.ON_BACKGROUND_2, width: "34px", height: "34px" })))))),
        getUIKitMessageType(message) === ((_j = getUIKitMessageTypes === null || getUIKitMessageTypes === void 0 ? void 0 : getUIKitMessageTypes()) === null || _j === void 0 ? void 0 : _j.UNKNOWN) && (React__default.createElement("div", { className: "sendbird-parent-message-info-item__unknown-message" },
            React__default.createElement(Label, { className: "sendbird-parent-message-info-item__unknown-message__header", type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.UNKNOWN__UNKNOWN_MESSAGE_TYPE),
            React__default.createElement(Label, { className: "sendbird-parent-message-info-item__unknown-message__description", type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_2 }, stringSet.UNKNOWN__CANNOT_READ_MESSAGE))),
        isReactionActivated && (React__default.createElement("div", { className: "sendbird-parent-message-info__reactions" },
            React__default.createElement(EmojiReactions, { userId: currentUserId, message: message, channel: currentChannel, isByMe: false, emojiContainer: emojiContainer, memberNicknamesMap: nicknamesMap, toggleReaction: toggleReaction, onPressUserProfile: onPressUserProfileHandler, filterEmojiCategoryIds: filterEmojiCategoryIds })))));
}

export { ParentMessageInfoItem as default };
//# sourceMappingURL=ParentMessageInfoItem.js.map
