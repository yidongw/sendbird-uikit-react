'use strict';

var _tslib = require('../../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var index$1 = require('../../chunks/bundle-DspSuA8e.js');
var LocalizationContext = require('../../chunks/bundle-Cy1ruNzs.js');
var ui_DateSeparator = require('../../ui/DateSeparator.js');
var ui_Label = require('../../chunks/bundle-CAR4EIKs.js');
var RemoveMessageModal = require('../../chunks/bundle-CJnPpHlO.js');
var ui_FileViewer = require('../../ui/FileViewer.js');
var Thread_context = require('../context.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var SuggestedMentionList = require('../../chunks/bundle-DPjtF20V.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var Thread_context_types = require('../context/types.js');
var _const = require('../../chunks/bundle-CfV7jROn.js');
var ui_ContextMenu = require('../../chunks/bundle-BKyZTqvq.js');
var ui_MessageItemReactionMenu = require('../../ui/MessageItemReactionMenu.js');
var index = require('../../chunks/bundle-BLoixwYr.js');
var ui_MessageStatus = require('../../chunks/bundle-BQHwJ1ZS.js');
var ui_EmojiReactions = require('../../ui/EmojiReactions.js');
var MediaQueryContext = require('../../chunks/bundle-DrIKAEHN.js');
var useLongPress = require('../../chunks/bundle-D_k3_Y_y.js');
var ui_MobileMenu = require('../../ui/MobileMenu.js');
var useFileInfoListWithUploaded = require('../../chunks/bundle-B3JoFOJ4.js');
var utils = require('../../chunks/bundle-Ck6ikNW6.js');
var MessageMenu = require('../../chunks/bundle-BUXIG4fk.js');
var useElementObserver = require('../../chunks/bundle-BwahJ_Tg.js');
var index$2 = require('../../chunks/bundle-8wGi0pKu.js');
var types = require('../../chunks/bundle-BA-5SFdp.js');
var Message_hooks_useDirtyGetMentions = require('../../Message/hooks/useDirtyGetMentions.js');
var getIsReactionEnabled = require('../../chunks/bundle-CVdJh4P7.js');
var resolvedReplyType = require('../../chunks/bundle-DvvdekCh.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../chunks/bundle-CLzI6bbe.js');
require('../../chunks/bundle-DZhkNDpN.js');
require('react-dom');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../ui/Icon.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-CzLnk6wC.js');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../chunks/bundle-DpdA7O8z.js');
require('../../chunks/bundle-Bs36T7L5.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../chunks/bundle-BNuA_uqY.js');
require('@sendbird/chat/message');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-DgjptBQW.js');
require('../../chunks/bundle-wYxshM30.js');
require('../../chunks/bundle-Dh0NAI0D.js');
require('../../chunks/bundle-kFYCld9C.js');
require('../../chunks/bundle-CtHeiC70.js');
require('../../chunks/bundle-CCtdwkHe.js');
require('dompurify');
require('../../chunks/bundle-By5v4zYf.js');
require('../../chunks/bundle-DobO_BAb.js');
require('../../chunks/bundle-BaSZqehS.js');
require('../../chunks/bundle-BIkitklZ.js');
require('../../ui/SortByRow.js');
require('../../ui/ReactionButton.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-f7s_1xF4.js');
require('../../chunks/bundle-Cc6_UMK4.js');
require('../../ui/ReactionBadge.js');
require('../../ui/BottomSheet.js');
require('../../ui/UserListItem.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../Message/context.js');
require('../../ui/OGMessageItemBody.js');
require('../../chunks/bundle-92xEkubH.js');
require('../../ui/MentionLabel.js');
require('../../ui/LinkLabel.js');
require('../../ui/TextMessageItemBody.js');
require('../../ui/FileMessageItemBody.js');
require('../../ui/TextButton.js');
require('../../ui/VoiceMessageItemBody.js');
require('../../ui/ProgressBar.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../ui/PlaybackTime.js');
require('../../ui/ThumbnailMessageItemBody.js');
require('../../chunks/bundle-DEjC6RIv.js');
require('../../ui/UnknownMessageItemBody.js');
require('../../ui/TemplateMessageItemBody.js');
require('../../chunks/bundle-Dd_liLM9.js');
require('../../ui/FallbackTemplateMessageItemBody.tsx.js');
require('../../ui/LoadingTemplateMessageItemBody.tsx.js');
require('../../ui/MessageFeedbackFailedModal.js');
require('../../chunks/bundle-w0Wt2aBx.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function ThreadListItemContent(props) {
    var _this = this;
    var _a, _b, _c;
    // Internal props
    var className = props.className, userId = props.userId, channel = props.channel, message = props.message, _d = props.chainTop, chainTop = _d === void 0 ? false : _d, _e = props.chainBottom, chainBottom = _e === void 0 ? false : _e, _f = props.isReactionEnabled, isReactionEnabled = _f === void 0 ? false : _f, _g = props.disableQuoteMessage, disableQuoteMessage = _g === void 0 ? false : _g, replyType = props.replyType, nicknamesMap = props.nicknamesMap, emojiContainer = props.emojiContainer, showEdit = props.showEdit, showRemove = props.showRemove, showFileViewer = props.showFileViewer, resendMessage = props.resendMessage, toggleReaction = props.toggleReaction, onReplyInThread = props.onReplyInThread;
    // Public props for customization
    var _h = utils.deleteNullish(props), _j = _h.renderSenderProfile, renderSenderProfile = _j === void 0 ? function (props) { return React__default.default.createElement(index$2.MessageProfile, _tslib.__assign({}, props)); } : _j, _k = _h.renderMessageBody, renderMessageBody = _k === void 0 ? function (props) { return React__default.default.createElement(index$2.MessageBody, _tslib.__assign({}, props)); } : _k, _l = _h.renderMessageHeader, renderMessageHeader = _l === void 0 ? function (props) { return React__default.default.createElement(index$2.MessageHeader, _tslib.__assign({}, props)); } : _l, _m = _h.renderMessageMenu, renderMessageMenu = _m === void 0 ? function (props) { return React__default.default.createElement(MessageMenu.MessageMenu, _tslib.__assign({}, props)); } : _m, _o = _h.renderEmojiMenu, renderEmojiMenu = _o === void 0 ? function () { return React__default.default.createElement(ui_MessageItemReactionMenu.MessageEmojiMenu, _tslib.__assign({}, props)); } : _o, _p = _h.renderEmojiReactions, renderEmojiReactions = _p === void 0 ? function (props) { return React__default.default.createElement(ui_EmojiReactions, _tslib.__assign({}, props)); } : _p, _q = _h.renderMobileMenuOnLongPress, renderMobileMenuOnLongPress = _q === void 0 ? function (props) { return React__default.default.createElement(ui_MobileMenu.MobileMenu, _tslib.__assign({}, props)); } : _q;
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    var _r = LocalizationContext.useLocalization(), dateLocale = _r.dateLocale, stringSet = _r.stringSet;
    var _s = (useSendbirdStateContext.useSendbirdStateContext === null || useSendbirdStateContext.useSendbirdStateContext === void 0 ? void 0 : useSendbirdStateContext.useSendbirdStateContext()) || {}, config = _s.config, eventHandlers = _s.eventHandlers;
    var logger = config.logger;
    var onPressUserProfileHandler = (_a = eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.reaction) === null || _a === void 0 ? void 0 : _a.onPressUserProfile;
    var isMenuMounted = useElementObserver.useElementObserver("#".concat(ui_ContextMenu.getObservingId(message.messageId), ".").concat(ui_ContextMenu.MENU_OBSERVING_CLASS_NAME), [
        document.getElementById(ui_ContextMenu.MENU_ROOT_ID),
        document.getElementById(ui_ContextMenu.EMOJI_MENU_ROOT_ID),
    ]);
    var _t = Thread_context.useThreadContext(), deleteMessage = _t.deleteMessage, onBeforeDownloadFileMessage = _t.onBeforeDownloadFileMessage, filterEmojiCategoryIds = _t.filterEmojiCategoryIds;
    var isByMe = (userId === ((_b = message === null || message === void 0 ? void 0 : message.sender) === null || _b === void 0 ? void 0 : _b.userId))
        || ((message === null || message === void 0 ? void 0 : message.sendingStatus) === 'pending')
        || ((message === null || message === void 0 ? void 0 : message.sendingStatus) === 'failed');
    var useReplying = !!((replyType === 'QUOTE_REPLY' || replyType === 'THREAD')
        && (message === null || message === void 0 ? void 0 : message.parentMessageId) && (message === null || message === void 0 ? void 0 : message.parentMessage)
        && !disableQuoteMessage);
    var supposedHoverClassName = isMenuMounted ? 'sendbird-mouse-hover' : '';
    var isReactionEnabledInChannel = isReactionEnabled && !(channel === null || channel === void 0 ? void 0 : channel.isEphemeral);
    var isOgMessageEnabledInGroupChannel = channel.isGroupChannel() && config.groupChannel.enableOgtag;
    // Mobile
    var mobileMenuRef = React.useRef(null);
    var _u = React.useState(false), showMobileMenu = _u[0], setShowMobileMenu = _u[1];
    var longPress = useLongPress.useLongPress({
        onLongPress: function () {
            if (isMobile) {
                setShowMobileMenu(true);
            }
        },
    }, {
        shouldPreventDefault: false,
    });
    var threadMessageKindKey = useFileInfoListWithUploaded.useThreadMessageKindKeySelector({
        threadMessageKind: useFileInfoListWithUploaded.ThreadMessageKind.CHILD,
        isMobile: isMobile,
    });
    // For MultipleFilesMessage only.
    var statefulFileInfoList = useFileInfoListWithUploaded.useFileInfoListWithUploaded(message);
    return (React__default.default.createElement("div", { className: utils.classnames('sendbird-thread-list-item-content', className, isByMe ? 'outgoing' : 'incoming'), ref: mobileMenuRef },
        React__default.default.createElement("div", { className: utils.classnames('sendbird-thread-list-item-content__left', isReactionEnabledInChannel && 'use-reaction', isByMe ? 'outgoing' : 'incoming') },
            (!isByMe && !chainBottom) && (renderSenderProfile(_tslib.__assign(_tslib.__assign({}, props), { className: 'sendbird-thread-list-item-content__left__avatar', isByMe: isByMe, displayThreadReplies: false }))),
            (isByMe && !isMobile) && (React__default.default.createElement("div", { className: utils.classnames('sendbird-thread-list-item-content-menu', isReactionEnabledInChannel && 'use-reaction', isByMe ? 'outgoing' : 'incoming', supposedHoverClassName) },
                renderMessageMenu({
                    className: 'sendbird-thread-list-item-content-menu__normal-menu',
                    channel: channel,
                    message: message,
                    isByMe: isByMe,
                    replyType: replyType,
                    showEdit: showEdit,
                    showRemove: showRemove,
                    resendMessage: resendMessage,
                    onReplyInThread: onReplyInThread,
                    deleteMessage: deleteMessage,
                }),
                isReactionEnabledInChannel && (React__default.default.createElement(React__default.default.Fragment, null, renderEmojiMenu({
                    className: 'sendbird-thread-list-item-content-menu__reaction-menu',
                    message: message,
                    userId: userId,
                    emojiContainer: emojiContainer,
                    toggleReaction: toggleReaction,
                    filterEmojiCategoryIds: filterEmojiCategoryIds,
                })))))),
        React__default.default.createElement("div", _tslib.__assign({ className: "sendbird-thread-list-item-content__middle" }, (isMobile) ? _tslib.__assign({}, longPress) : {}),
            (!isByMe && !chainTop && !useReplying) && renderMessageHeader(props),
            React__default.default.createElement("div", { className: index.getClassName(['sendbird-thread-list-item-content__middle__body-container']) },
                (isByMe && !chainBottom) && (React__default.default.createElement("div", { className: index.getClassName(['sendbird-thread-list-item-content__middle__body-container__created-at', 'left', supposedHoverClassName]) },
                    React__default.default.createElement("div", { className: "sendbird-thread-list-item-content__middle__body-container__created-at__component-container" },
                        React__default.default.createElement(ui_MessageStatus.MessageStatus, { message: message, channel: channel })))),
                renderMessageBody({
                    className: 'sendbird-thread-list-item-content__middle__message-item-body',
                    message: message,
                    channel: channel,
                    showFileViewer: showFileViewer,
                    mouseHover: false,
                    isMobile: isMobile,
                    config: config,
                    isReactionEnabledInChannel: isReactionEnabledInChannel,
                    isByMe: isByMe,
                    onBeforeDownloadFileMessage: onBeforeDownloadFileMessage,
                    /** This is for internal customization to keep the legacy */
                    customSubcomponentsProps: {
                        ThumbnailMessageItemBody: {
                            style: {
                                width: isMobile ? '100%' : '200px',
                                height: '148px',
                            },
                        },
                        MultipleFilesMessageItemBody: {
                            threadMessageKindKey: threadMessageKindKey,
                            statefulFileInfoList: statefulFileInfoList,
                        },
                    },
                    // TODO: Support these props in Thread
                    // onMessageHeightChange,
                    // onTemplateMessageRenderedCallback,
                }),
                (isReactionEnabledInChannel && ((_c = message === null || message === void 0 ? void 0 : message.reactions) === null || _c === void 0 ? void 0 : _c.length) > 0) && (React__default.default.createElement("div", { className: index.getClassName([
                        'sendbird-thread-list-item-content-reactions',
                        (!isByMe
                            || index.isThumbnailMessage(message)
                            || (isOgMessageEnabledInGroupChannel && index.isOGMessage(message))
                            || index.isMultipleFilesMessage(message)) ? '' : 'primary',
                    ]) }, renderEmojiReactions({
                    userId: userId,
                    message: message,
                    channel: channel,
                    isByMe: isByMe,
                    emojiContainer: emojiContainer,
                    memberNicknamesMap: nicknamesMap,
                    toggleReaction: toggleReaction,
                    onPressUserProfile: onPressUserProfileHandler,
                    filterEmojiCategoryIds: filterEmojiCategoryIds,
                }))),
                (!isByMe && !chainBottom) && (React__default.default.createElement(ui_Label.Label, { className: index.getClassName(['sendbird-thread-list-item-content__middle__body-container__created-at', 'right', supposedHoverClassName]), type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_2 }, index$1.format((message === null || message === void 0 ? void 0 : message.createdAt) || 0, stringSet.DATE_FORMAT__MESSAGE_CREATED_AT, {
                    locale: dateLocale,
                }))))),
        React__default.default.createElement("div", { className: utils.classnames('sendbird-thread-list-item-content__right', chainTop && 'chain-top', isByMe ? 'outgoing' : 'incoming') }, (!isByMe && !isMobile) && (React__default.default.createElement("div", { className: "sendbird-thread-list-item-content-menu ".concat(supposedHoverClassName) },
            isReactionEnabledInChannel && (renderEmojiMenu({
                className: 'sendbird-thread-list-item-content-menu__reaction-menu',
                message: message,
                userId: userId,
                emojiContainer: emojiContainer,
                toggleReaction: toggleReaction,
                filterEmojiCategoryIds: filterEmojiCategoryIds,
            })),
            renderMessageMenu({
                className: 'sendbird-thread-list-item-content-menu__normal-menu',
                channel: channel,
                message: message,
                isByMe: isByMe,
                replyType: replyType,
                showRemove: showRemove,
                resendMessage: resendMessage,
                onReplyInThread: onReplyInThread,
                deleteMessage: deleteMessage,
            })))),
        showMobileMenu && (renderMobileMenuOnLongPress({
            parentRef: mobileMenuRef,
            channel: channel,
            message: message,
            userId: userId,
            replyType: replyType,
            hideMenu: function () {
                setShowMobileMenu(false);
            },
            isReactionEnabled: isReactionEnabled,
            isByMe: isByMe,
            emojiContainer: emojiContainer,
            showEdit: showEdit,
            showRemove: showRemove,
            toggleReaction: toggleReaction,
            isOpenedFromThread: true,
            deleteMessage: deleteMessage,
            onDownloadClick: function (e) { return _tslib.__awaiter(_this, void 0, void 0, function () {
                var allowDownload, err_1;
                var _a, _b;
                return _tslib.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!onBeforeDownloadFileMessage)
                                return [2 /*return*/];
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, onBeforeDownloadFileMessage({ message: message })];
                        case 2:
                            allowDownload = _c.sent();
                            if (!allowDownload) {
                                e.preventDefault();
                                (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'ThreadListItemContent: Not allowed to download.');
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _c.sent();
                            (_b = logger === null || logger === void 0 ? void 0 : logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, 'ThreadListItemContent: Error occurred while determining download continuation:', err_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); },
        }))));
}

function ThreadListItem(props) {
    var _this = this;
    var _a, _b, _c, _d;
    var className = props.className, message = props.message, chainTop = props.chainTop, chainBottom = props.chainBottom, hasSeparator = props.hasSeparator, renderCustomSeparator = props.renderCustomSeparator, handleScroll = props.handleScroll;
    var _e = useSendbirdStateContext.useSendbirdStateContext(), stores = _e.stores, config = _e.config;
    var isOnline = config.isOnline, userMention = config.userMention, logger = config.logger, groupChannel = config.groupChannel;
    var userId = (_b = (_a = stores === null || stores === void 0 ? void 0 : stores.userStore) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.userId;
    var _f = LocalizationContext.useLocalization(), dateLocale = _f.dateLocale, stringSet = _f.stringSet;
    var threadContext = Thread_context.useThreadContext === null || Thread_context.useThreadContext === void 0 ? void 0 : Thread_context.useThreadContext();
    var currentChannel = threadContext.currentChannel, nicknamesMap = threadContext.nicknamesMap, emojiContainer = threadContext.emojiContainer, toggleReaction = threadContext.toggleReaction, threadListState = threadContext.threadListState, updateMessage = threadContext.updateMessage, resendMessage = threadContext.resendMessage, deleteMessage = threadContext.deleteMessage, isMuted = threadContext.isMuted, isChannelFrozen = threadContext.isChannelFrozen, onBeforeDownloadFileMessage = threadContext.onBeforeDownloadFileMessage;
    var openingMessage = threadContext === null || threadContext === void 0 ? void 0 : threadContext.message;
    var _g = React.useState(false), showEdit = _g[0], setShowEdit = _g[1];
    var _h = React.useState(false), showRemove = _h[0], setShowRemove = _h[1];
    var _j = React.useState(false), showFileViewer = _j[0], setShowFileViewer = _j[1];
    var isReactionEnabled = getIsReactionEnabled.getIsReactionEnabled({
        channel: currentChannel,
        config: config,
    });
    var isMentionEnabled = groupChannel.enableMention;
    var replyType = resolvedReplyType.getCaseResolvedReplyType(groupChannel.replyType).upperCase;
    // Move to message
    var messageScrollRef = React.useRef(null);
    React.useLayoutEffect(function () {
        var _a;
        if ((openingMessage === null || openingMessage === void 0 ? void 0 : openingMessage.messageId) === (message === null || message === void 0 ? void 0 : message.messageId) && (messageScrollRef === null || messageScrollRef === void 0 ? void 0 : messageScrollRef.current)) {
            (_a = messageScrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ block: 'center', inline: 'center' });
        }
    }, [openingMessage, messageScrollRef === null || messageScrollRef === void 0 ? void 0 : messageScrollRef.current]);
    // reactions
    React.useLayoutEffect(function () {
        handleScroll === null || handleScroll === void 0 ? void 0 : handleScroll();
    }, [showEdit, (_c = message === null || message === void 0 ? void 0 : message.reactions) === null || _c === void 0 ? void 0 : _c.length]);
    // mention
    var editMessageInputRef = React.useRef(null);
    var _k = React.useState(''), mentionNickname = _k[0], setMentionNickname = _k[1];
    var _l = React.useState([]), mentionedUsers = _l[0], setMentionedUsers = _l[1];
    var _m = React.useState([]), mentionedUserIds = _m[0], setMentionedUserIds = _m[1];
    var _o = React.useState(null), messageInputEvent = _o[0], setMessageInputEvent = _o[1];
    var _p = React.useState(null), selectedUser = _p[0], setSelectedUser = _p[1];
    var _q = React.useState([]), mentionSuggestedUsers = _q[0], setMentionSuggestedUsers = _q[1];
    var displaySuggestedMentionList = isOnline
        && isMentionEnabled
        && mentionNickname.length > 0
        && !isMuted
        && !(isChannelFrozen && !(currentChannel.myRole === types.Role.OPERATOR));
    var mentionNodes = Message_hooks_useDirtyGetMentions.useDirtyGetMentions({ ref: editMessageInputRef }, { logger: logger });
    var ableMention = (mentionNodes === null || mentionNodes === void 0 ? void 0 : mentionNodes.length) < (userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount);
    React.useEffect(function () {
        setMentionedUsers(mentionedUsers.filter(function (_a) {
            var userId = _a.userId;
            var i = mentionedUserIds.indexOf(userId);
            if (i < 0) {
                return false;
            }
            else {
                mentionedUserIds.splice(i, 1);
                return true;
            }
        }));
    }, [mentionedUserIds]);
    // edit input
    var disabled = !(threadListState === Thread_context_types.ThreadListStateTypes.INITIALIZED)
        || !isOnline
        || isMuted
        || isChannelFrozen;
    // memorize
    var MemorizedSeparator = React.useMemo(function () {
        if (typeof renderCustomSeparator === 'function') {
            return renderCustomSeparator === null || renderCustomSeparator === void 0 ? void 0 : renderCustomSeparator({ message: message });
        }
    }, [message, renderCustomSeparator]);
    // Edit message
    if (showEdit && message.isUserMessage()) {
        return (React__default.default.createElement(React__default.default.Fragment, null,
            displaySuggestedMentionList && (React__default.default.createElement(SuggestedMentionList.SuggestedMentionList, { targetNickname: mentionNickname, inputEvent: messageInputEvent !== null && messageInputEvent !== void 0 ? messageInputEvent : undefined, 
                // renderUserMentionItem={renderUserMentionItem}
                onUserItemClick: function (user) {
                    if (user) {
                        setMentionedUsers(_tslib.__spreadArray(_tslib.__spreadArray([], mentionedUsers, true), [user], false));
                    }
                    setMentionNickname('');
                    setSelectedUser(user);
                    setMessageInputEvent(null);
                }, onFocusItemChange: function () {
                    setMessageInputEvent(null);
                }, onFetchUsers: function (users) {
                    setMentionSuggestedUsers(users);
                }, ableAddMention: ableMention, maxMentionCount: userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount, maxSuggestionCount: userMention === null || userMention === void 0 ? void 0 : userMention.maxSuggestionCount })),
            React__default.default.createElement(ui_MessageInput, { isEdit: true, channel: currentChannel, disabled: disabled, ref: editMessageInputRef, mentionSelectedUser: selectedUser, isMentionEnabled: isMentionEnabled, message: message, onStartTyping: function () {
                    var _a;
                    (_a = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.startTyping) === null || _a === void 0 ? void 0 : _a.call(currentChannel);
                }, onUpdateMessage: function (_a) {
                    var _b;
                    var messageId = _a.messageId, message = _a.message, mentionTemplate = _a.mentionTemplate;
                    updateMessage({
                        messageId: messageId,
                        message: message,
                        mentionedUsers: mentionedUsers,
                        mentionTemplate: mentionTemplate,
                    });
                    setShowEdit(false);
                    (_b = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.endTyping) === null || _b === void 0 ? void 0 : _b.call(currentChannel);
                }, onCancelEdit: function () {
                    var _a;
                    setMentionNickname('');
                    setMentionedUsers([]);
                    setMentionedUserIds([]);
                    setMentionSuggestedUsers([]);
                    setShowEdit(false);
                    (_a = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.endTyping) === null || _a === void 0 ? void 0 : _a.call(currentChannel);
                }, onUserMentioned: function (user) {
                    if ((selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.userId) === (user === null || user === void 0 ? void 0 : user.userId)) {
                        setSelectedUser(null);
                        setMentionNickname('');
                    }
                }, onMentionStringChange: function (mentionText) {
                    setMentionNickname(mentionText);
                }, onMentionedUserIdsUpdated: function (userIds) {
                    setMentionedUserIds(userIds);
                }, onKeyDown: function (e) {
                    if (displaySuggestedMentionList && (mentionSuggestedUsers === null || mentionSuggestedUsers === void 0 ? void 0 : mentionSuggestedUsers.length) > 0
                        && ((e.key === _const.MessageInputKeys.Enter && ableMention) || e.key === _const.MessageInputKeys.ArrowUp || e.key === _const.MessageInputKeys.ArrowDown)) {
                        setMessageInputEvent(e);
                        return true;
                    }
                    return false;
                } })));
    }
    return (React__default.default.createElement("div", { ref: messageScrollRef, className: utils.classnames('sendbird-thread-list-item', className), "data-testid": "sendbird-thread-list-item" },
        hasSeparator && (message === null || message === void 0 ? void 0 : message.createdAt) && (MemorizedSeparator || (React__default.default.createElement(ui_DateSeparator, null,
            React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.CAPTION_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, index$1.format(message === null || message === void 0 ? void 0 : message.createdAt, stringSet.DATE_FORMAT__THREAD_LIST__DATE_SEPARATOR, { locale: dateLocale }))))),
        React__default.default.createElement(ThreadListItemContent, _tslib.__assign({}, props, { userId: userId, channel: currentChannel, message: message, chainTop: chainTop, chainBottom: chainBottom, isReactionEnabled: isReactionEnabled, disableQuoteMessage: true, replyType: replyType, nicknamesMap: nicknamesMap, emojiContainer: emojiContainer, resendMessage: resendMessage, showRemove: setShowRemove, showFileViewer: setShowFileViewer, toggleReaction: toggleReaction, showEdit: setShowEdit })),
        showRemove && (React__default.default.createElement(RemoveMessageModal.RemoveMessage, { message: message, onCancel: function () { return setShowRemove(false); } })),
        showFileViewer && (React__default.default.createElement(ui_FileViewer.default, { message: message, isByMe: ((_d = message === null || message === void 0 ? void 0 : message.sender) === null || _d === void 0 ? void 0 : _d.userId) === userId, onClose: function () { return setShowFileViewer(false); }, onDelete: function () {
                deleteMessage(message);
                setShowFileViewer(false);
            }, onDownloadClick: function (e) { return _tslib.__awaiter(_this, void 0, void 0, function () {
                var allowDownload, err_1;
                var _a, _b;
                return _tslib.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!onBeforeDownloadFileMessage)
                                return [2 /*return*/];
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, onBeforeDownloadFileMessage({ message: message })];
                        case 2:
                            allowDownload = _c.sent();
                            if (!allowDownload) {
                                e.preventDefault();
                                (_a = logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'ThreadListItem: Not allowed to download.');
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _c.sent();
                            (_b = logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, 'ThreadListItem: Error occurred while determining download continuation:', err_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); } }))));
}

module.exports = ThreadListItem;
//# sourceMappingURL=ThreadListItem.js.map
