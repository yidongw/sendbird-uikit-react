'use strict';

var _tslib = require('./bundle-DRvomNLJ.js');
var React = require('react');
var index = require('./bundle-C3e9xkw6.js');
var LocalizationContext = require('./bundle-CmBrGegh.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var _const = require('./bundle-CxDaflMi.js');
var utils$1 = require('./bundle-CRtS_Hdn.js');
var Message_hooks_useDirtyGetMentions = require('../Message/hooks/useDirtyGetMentions.js');
var index$1 = require('./bundle-e2d_I3io.js');
var ui_DateSeparator = require('../ui/DateSeparator.js');
var ui_Label = require('./bundle-D8-2bEdY.js');
var ui_MessageInput = require('../ui/MessageInput.js');
var _const$1 = require('./bundle-CsHnjhet.js');
var ui_MessageContent = require('../ui/MessageContent.js');
var GroupChannel_components_SuggestedReplies = require('../GroupChannel/components/SuggestedReplies.js');
var SuggestedMentionListView = require('./bundle-3ucLy5RS.js');
var utils = require('./bundle-BYHj6UqH.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var useDidMountEffect = function (func, deps) {
    var _a = React.useState(false), didMount = _a[0], setDidmount = _a[1];
    React.useEffect(function () {
        if (didMount) {
            func();
        }
        else {
            setDidmount(true);
        }
    }, deps);
};

// TODO: Refactor this component, is too complex now
var MessageView = function (props) {
    var _a, _b;
    var 
    // MessageProps
    message = props.message, children = props.children, hasSeparator = props.hasSeparator, chainTop = props.chainTop, chainBottom = props.chainBottom, handleScroll = props.handleScroll, 
    // MessageViewProps
    channel = props.channel, emojiContainer = props.emojiContainer, editInputDisabled = props.editInputDisabled, shouldRenderSuggestedReplies = props.shouldRenderSuggestedReplies, isReactionEnabled = props.isReactionEnabled, replyType = props.replyType, threadReplySelectType = props.threadReplySelectType, nicknamesMap = props.nicknamesMap, scrollToMessage = props.scrollToMessage, toggleReaction = props.toggleReaction, setQuoteMessage = props.setQuoteMessage, onQuoteMessageClick = props.onQuoteMessageClick, onReplyInThreadClick = props.onReplyInThreadClick, onBeforeDownloadFileMessage = props.onBeforeDownloadFileMessage, sendUserMessage = props.sendUserMessage, updateUserMessage = props.updateUserMessage, resendMessage = props.resendMessage, deleteMessage = props.deleteMessage, setAnimatedMessageId = props.setAnimatedMessageId, animatedMessageId = props.animatedMessageId, onMessageAnimated = props.onMessageAnimated, _c = props.usedInLegacy, usedInLegacy = _c === void 0 ? true : _c;
    var _d = utils.deleteNullish(props), renderUserMentionItem = _d.renderUserMentionItem, renderMessage = _d.renderMessage, _e = _d.renderMessageContent, renderMessageContent = _e === void 0 ? function (props) { return React__default.default.createElement(ui_MessageContent.MessageContent, _tslib.__assign({}, props)); } : _e, _f = _d.renderSuggestedReplies, renderSuggestedReplies = _f === void 0 ? function (props) { return React__default.default.createElement(GroupChannel_components_SuggestedReplies.default, _tslib.__assign({}, props)); } : _f, renderCustomSeparator = _d.renderCustomSeparator, renderEditInput = _d.renderEditInput, renderFileViewer = _d.renderFileViewer, renderRemoveMessageModal = _d.renderRemoveMessageModal, filterEmojiCategoryIds = _d.filterEmojiCategoryIds;
    var _g = LocalizationContext.useLocalization(), dateLocale = _g.dateLocale, stringSet = _g.stringSet;
    var globalStore = useSendbirdStateContext.useSendbirdStateContext();
    var _h = globalStore.config, userId = _h.userId, isOnline = _h.isOnline, userMention = _h.userMention, logger = _h.logger, groupChannel = _h.groupChannel;
    var maxUserMentionCount = (userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount) || _const.MAX_USER_MENTION_COUNT;
    var maxUserSuggestionCount = (userMention === null || userMention === void 0 ? void 0 : userMention.maxSuggestionCount) || _const.MAX_USER_SUGGESTION_COUNT;
    var _j = React.useState(false), showEdit = _j[0], setShowEdit = _j[1];
    var _k = React.useState(false), showRemove = _k[0], setShowRemove = _k[1];
    var _l = React.useState(false), showFileViewer = _l[0], setShowFileViewer = _l[1];
    var _m = React.useState(false), isAnimated = _m[0], setIsAnimated = _m[1];
    var _o = React.useState(''), mentionNickname = _o[0], setMentionNickname = _o[1];
    var _p = React.useState([]), mentionedUsers = _p[0], setMentionedUsers = _p[1];
    var _q = React.useState([]), mentionedUserIds = _q[0], setMentionedUserIds = _q[1];
    var _r = React.useState(null), messageInputEvent = _r[0], setMessageInputEvent = _r[1];
    var _s = React.useState(null), selectedUser = _s[0], setSelectedUser = _s[1];
    var _t = React.useState([]), mentionSuggestedUsers = _t[0], setMentionSuggestedUsers = _t[1];
    var editMessageInputRef = React.useRef(null);
    var messageScrollRef = React.useRef(null);
    var displaySuggestedMentionList = isOnline
        && groupChannel.enableMention && mentionNickname.length > 0
        && !utils$1.isDisabledBecauseFrozen(channel)
        && !utils$1.isDisabledBecauseMuted(channel);
    var mentionNodes = Message_hooks_useDirtyGetMentions.useDirtyGetMentions({ ref: editMessageInputRef }, { logger: logger });
    var ableMention = (mentionNodes === null || mentionNodes === void 0 ? void 0 : mentionNodes.length) < maxUserMentionCount;
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
    // Side effect: scroll position update when showEdit is toggled or reactions updated
    useDidMountEffect(function () {
        handleScroll === null || handleScroll === void 0 ? void 0 : handleScroll();
    }, [showEdit, (_a = message === null || message === void 0 ? void 0 : message.reactions) === null || _a === void 0 ? void 0 : _a.length]);
    // Side effect: scroll position update when message updated
    useDidMountEffect(function () {
        handleScroll === null || handleScroll === void 0 ? void 0 : handleScroll(true);
    }, [message === null || message === void 0 ? void 0 : message.updatedAt, message === null || message === void 0 ? void 0 : message.message]);
    // Side effect: scroll position update when suggested replies are rendered or hidden
    var prevShouldRenderSuggestedReplies = React.useRef(shouldRenderSuggestedReplies);
    React.useEffect(function () {
        if (prevShouldRenderSuggestedReplies.current !== shouldRenderSuggestedReplies) {
            handleScroll === null || handleScroll === void 0 ? void 0 : handleScroll();
        }
        else {
            prevShouldRenderSuggestedReplies.current = shouldRenderSuggestedReplies;
        }
    }, [shouldRenderSuggestedReplies]);
    React.useLayoutEffect(function () {
        // Keep the scrollBottom value after fetching new message list (but GroupChannel module is not needed.)
        if (usedInLegacy)
            handleScroll === null || handleScroll === void 0 ? void 0 : handleScroll(true);
    }, []);
    React.useLayoutEffect(function () {
        var timeouts = [];
        if (animatedMessageId === message.messageId && (messageScrollRef === null || messageScrollRef === void 0 ? void 0 : messageScrollRef.current)) {
            timeouts.push(setTimeout(function () {
                setIsAnimated(true);
            }, 500));
            timeouts.push(setTimeout(function () {
                setAnimatedMessageId(null);
                onMessageAnimated === null || onMessageAnimated === void 0 ? void 0 : onMessageAnimated();
            }, 1600));
        }
        else {
            setIsAnimated(false);
        }
        return function () {
            timeouts.forEach(function (it) { return clearTimeout(it); });
        };
    }, [animatedMessageId, messageScrollRef.current, message.messageId]);
    var renderedCustomSeparator = React.useMemo(function () { var _a; return (_a = renderCustomSeparator === null || renderCustomSeparator === void 0 ? void 0 : renderCustomSeparator({ message: message })) !== null && _a !== void 0 ? _a : null; }, [message, renderCustomSeparator]);
    var renderChildren = function () {
        if (children) {
            return children;
        }
        if (renderMessage) {
            var messageProps = _tslib.__assign(_tslib.__assign({}, props), { renderMessage: undefined });
            return renderMessage(messageProps);
        }
        return (React__default.default.createElement(React__default.default.Fragment, null,
            renderMessageContent({
                className: 'sendbird-message-hoc__message-content',
                userId: userId,
                scrollToMessage: scrollToMessage,
                channel: channel,
                message: message,
                disabled: !isOnline,
                chainTop: chainTop,
                chainBottom: chainBottom,
                isReactionEnabled: isReactionEnabled,
                replyType: replyType,
                threadReplySelectType: threadReplySelectType,
                nicknamesMap: nicknamesMap,
                emojiContainer: emojiContainer,
                showEdit: setShowEdit,
                showRemove: setShowRemove,
                showFileViewer: setShowFileViewer,
                resendMessage: resendMessage,
                deleteMessage: deleteMessage,
                toggleReaction: toggleReaction,
                setQuoteMessage: setQuoteMessage,
                onReplyInThread: onReplyInThreadClick,
                onQuoteMessageClick: onQuoteMessageClick,
                onMessageHeightChange: handleScroll,
                onBeforeDownloadFileMessage: onBeforeDownloadFileMessage,
                filterEmojiCategoryIds: filterEmojiCategoryIds,
            }),
            shouldRenderSuggestedReplies && renderSuggestedReplies({
                replyOptions: index$1.getSuggestedReplies(message),
                onSendMessage: sendUserMessage,
                type: groupChannel === null || groupChannel === void 0 ? void 0 : groupChannel.suggestedRepliesDirection,
            }),
            showRemove && (renderRemoveMessageModal === null || renderRemoveMessageModal === void 0 ? void 0 : renderRemoveMessageModal({ message: message, onCancel: function () { return setShowRemove(false); } })),
            showFileViewer && renderFileViewer({ message: message, onCancel: function () { return setShowFileViewer(false); } })));
    };
    if (showEdit && ((_b = message === null || message === void 0 ? void 0 : message.isUserMessage) === null || _b === void 0 ? void 0 : _b.call(message))) {
        return ((renderEditInput === null || renderEditInput === void 0 ? void 0 : renderEditInput()) || (React__default.default.createElement(React__default.default.Fragment, null,
            displaySuggestedMentionList && (React__default.default.createElement(SuggestedMentionListView.SuggestedMentionListView, { currentChannel: channel, targetNickname: mentionNickname, inputEvent: messageInputEvent !== null && messageInputEvent !== void 0 ? messageInputEvent : undefined, renderUserMentionItem: renderUserMentionItem, onUserItemClick: function (user) {
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
                }, ableAddMention: ableMention, maxMentionCount: maxUserMentionCount, maxSuggestionCount: maxUserSuggestionCount })),
            React__default.default.createElement(ui_MessageInput, { isEdit: true, channel: channel, disabled: editInputDisabled, ref: editMessageInputRef, mentionSelectedUser: selectedUser, isMentionEnabled: groupChannel.enableMention, message: message, onStartTyping: function () {
                    var _a;
                    (_a = channel === null || channel === void 0 ? void 0 : channel.startTyping) === null || _a === void 0 ? void 0 : _a.call(channel);
                }, onUpdateMessage: function (_a) {
                    var _b;
                    var messageId = _a.messageId, message = _a.message, mentionTemplate = _a.mentionTemplate;
                    updateUserMessage(messageId, {
                        message: message,
                        mentionedUsers: mentionedUsers,
                        mentionedMessageTemplate: mentionTemplate,
                    });
                    setShowEdit(false);
                    (_b = channel === null || channel === void 0 ? void 0 : channel.endTyping) === null || _b === void 0 ? void 0 : _b.call(channel);
                }, onCancelEdit: function () {
                    var _a;
                    setMentionNickname('');
                    setMentionedUsers([]);
                    setMentionedUserIds([]);
                    setMentionSuggestedUsers([]);
                    setShowEdit(false);
                    (_a = channel === null || channel === void 0 ? void 0 : channel.endTyping) === null || _a === void 0 ? void 0 : _a.call(channel);
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
                    if (displaySuggestedMentionList
                        && (mentionSuggestedUsers === null || mentionSuggestedUsers === void 0 ? void 0 : mentionSuggestedUsers.length) > 0
                        && ((e.key === _const$1.MessageInputKeys.Enter && ableMention)
                            || e.key === _const$1.MessageInputKeys.ArrowUp
                            || e.key === _const$1.MessageInputKeys.ArrowDown)) {
                        setMessageInputEvent(e);
                        return true;
                    }
                    return false;
                } }))));
    }
    return (React__default.default.createElement("div", { className: utils.classnames('sendbird-msg-hoc sendbird-msg--scroll-ref', isAnimated && 'sendbird-msg-hoc__animated'), "data-testid": "sendbird-message-view", style: children || renderMessage ? undefined : { marginBottom: '2px' }, "data-sb-message-id": message.messageId, "data-sb-created-at": message.createdAt, ref: messageScrollRef },
        hasSeparator
            && (renderedCustomSeparator || (React__default.default.createElement(ui_DateSeparator, null,
                React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.CAPTION_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, index.format(message.createdAt, stringSet.DATE_FORMAT__MESSAGE_LIST__DATE_SEPARATOR, {
                    locale: dateLocale,
                }))))),
        renderChildren()));
};

exports.MessageView = MessageView;
//# sourceMappingURL=bundle-ttq3NeTS.js.map
