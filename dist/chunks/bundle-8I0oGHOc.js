import { c as __spreadArray, _ as __assign } from './bundle-HcNswZ5p.js';
import React__default, { useState, useEffect, useRef, useLayoutEffect, useMemo } from 'react';
import { f as format } from './bundle-D4JzAgen.js';
import { u as useLocalization } from './bundle-DhMUg-L7.js';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import { M as MAX_USER_MENTION_COUNT, b as MAX_USER_SUGGESTION_COUNT } from './bundle-CijxkMjj.js';
import { i as isDisabledBecauseFrozen, a as isDisabledBecauseMuted } from './bundle-BB4cJn39.js';
import { useDirtyGetMentions } from '../Message/hooks/useDirtyGetMentions.js';
import { g as getSuggestedReplies } from './bundle-Bd-i99nk.js';
import DateSeparator from '../ui/DateSeparator.js';
import { L as Label, a as LabelTypography, b as LabelColors } from './bundle-Qkp2VIaZ.js';
import MessageInput from '../ui/MessageInput.js';
import { M as MessageInputKeys } from './bundle-lUbYBD0x.js';
import { MessageContent } from '../ui/MessageContent.js';
import SuggestedReplies from '../GroupChannel/components/SuggestedReplies.js';
import { S as SuggestedMentionListView } from './bundle-BYBFk8ow.js';
import { d as deleteNullish, c as classnames } from './bundle-0WaCg6X7.js';

var useDidMountEffect = function (func, deps) {
    var _a = useState(false), didMount = _a[0], setDidmount = _a[1];
    useEffect(function () {
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
    var _d = deleteNullish(props), renderUserMentionItem = _d.renderUserMentionItem, renderMessage = _d.renderMessage, _e = _d.renderMessageContent, renderMessageContent = _e === void 0 ? function (props) { return React__default.createElement(MessageContent, __assign({}, props)); } : _e, _f = _d.renderSuggestedReplies, renderSuggestedReplies = _f === void 0 ? function (props) { return React__default.createElement(SuggestedReplies, __assign({}, props)); } : _f, renderCustomSeparator = _d.renderCustomSeparator, renderEditInput = _d.renderEditInput, renderFileViewer = _d.renderFileViewer, renderRemoveMessageModal = _d.renderRemoveMessageModal, filterEmojiCategoryIds = _d.filterEmojiCategoryIds;
    var _g = useLocalization(), dateLocale = _g.dateLocale, stringSet = _g.stringSet;
    var globalStore = useSendbirdStateContext();
    var _h = globalStore.config, userId = _h.userId, isOnline = _h.isOnline, userMention = _h.userMention, logger = _h.logger, groupChannel = _h.groupChannel;
    var maxUserMentionCount = (userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount) || MAX_USER_MENTION_COUNT;
    var maxUserSuggestionCount = (userMention === null || userMention === void 0 ? void 0 : userMention.maxSuggestionCount) || MAX_USER_SUGGESTION_COUNT;
    var _j = useState(false), showEdit = _j[0], setShowEdit = _j[1];
    var _k = useState(false), showRemove = _k[0], setShowRemove = _k[1];
    var _l = useState(false), showFileViewer = _l[0], setShowFileViewer = _l[1];
    var _m = useState(false), isAnimated = _m[0], setIsAnimated = _m[1];
    var _o = useState(''), mentionNickname = _o[0], setMentionNickname = _o[1];
    var _p = useState([]), mentionedUsers = _p[0], setMentionedUsers = _p[1];
    var _q = useState([]), mentionedUserIds = _q[0], setMentionedUserIds = _q[1];
    var _r = useState(null), messageInputEvent = _r[0], setMessageInputEvent = _r[1];
    var _s = useState(null), selectedUser = _s[0], setSelectedUser = _s[1];
    var _t = useState([]), mentionSuggestedUsers = _t[0], setMentionSuggestedUsers = _t[1];
    var editMessageInputRef = useRef(null);
    var messageScrollRef = useRef(null);
    var displaySuggestedMentionList = isOnline
        && groupChannel.enableMention && mentionNickname.length > 0
        && !isDisabledBecauseFrozen(channel)
        && !isDisabledBecauseMuted(channel);
    var mentionNodes = useDirtyGetMentions({ ref: editMessageInputRef }, { logger: logger });
    var ableMention = (mentionNodes === null || mentionNodes === void 0 ? void 0 : mentionNodes.length) < maxUserMentionCount;
    useEffect(function () {
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
    var prevShouldRenderSuggestedReplies = useRef(shouldRenderSuggestedReplies);
    useEffect(function () {
        if (prevShouldRenderSuggestedReplies.current !== shouldRenderSuggestedReplies) {
            handleScroll === null || handleScroll === void 0 ? void 0 : handleScroll();
        }
        else {
            prevShouldRenderSuggestedReplies.current = shouldRenderSuggestedReplies;
        }
    }, [shouldRenderSuggestedReplies]);
    useLayoutEffect(function () {
        // Keep the scrollBottom value after fetching new message list (but GroupChannel module is not needed.)
        if (usedInLegacy)
            handleScroll === null || handleScroll === void 0 ? void 0 : handleScroll(true);
    }, []);
    useLayoutEffect(function () {
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
    var renderedCustomSeparator = useMemo(function () { var _a; return (_a = renderCustomSeparator === null || renderCustomSeparator === void 0 ? void 0 : renderCustomSeparator({ message: message })) !== null && _a !== void 0 ? _a : null; }, [message, renderCustomSeparator]);
    var renderChildren = function () {
        if (children) {
            return children;
        }
        if (renderMessage) {
            var messageProps = __assign(__assign({}, props), { renderMessage: undefined });
            return renderMessage(messageProps);
        }
        return (React__default.createElement(React__default.Fragment, null,
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
                replyOptions: getSuggestedReplies(message),
                onSendMessage: sendUserMessage,
                type: groupChannel === null || groupChannel === void 0 ? void 0 : groupChannel.suggestedRepliesDirection,
            }),
            showRemove && (renderRemoveMessageModal === null || renderRemoveMessageModal === void 0 ? void 0 : renderRemoveMessageModal({ message: message, onCancel: function () { return setShowRemove(false); } })),
            showFileViewer && renderFileViewer({ message: message, onCancel: function () { return setShowFileViewer(false); } })));
    };
    if (showEdit && ((_b = message === null || message === void 0 ? void 0 : message.isUserMessage) === null || _b === void 0 ? void 0 : _b.call(message))) {
        return ((renderEditInput === null || renderEditInput === void 0 ? void 0 : renderEditInput()) || (React__default.createElement(React__default.Fragment, null,
            displaySuggestedMentionList && (React__default.createElement(SuggestedMentionListView, { currentChannel: channel, targetNickname: mentionNickname, inputEvent: messageInputEvent !== null && messageInputEvent !== void 0 ? messageInputEvent : undefined, renderUserMentionItem: renderUserMentionItem, onUserItemClick: function (user) {
                    if (user) {
                        setMentionedUsers(__spreadArray(__spreadArray([], mentionedUsers, true), [user], false));
                    }
                    setMentionNickname('');
                    setSelectedUser(user);
                    setMessageInputEvent(null);
                }, onFocusItemChange: function () {
                    setMessageInputEvent(null);
                }, onFetchUsers: function (users) {
                    setMentionSuggestedUsers(users);
                }, ableAddMention: ableMention, maxMentionCount: maxUserMentionCount, maxSuggestionCount: maxUserSuggestionCount })),
            React__default.createElement(MessageInput, { isEdit: true, channel: channel, disabled: editInputDisabled, ref: editMessageInputRef, mentionSelectedUser: selectedUser, isMentionEnabled: groupChannel.enableMention, message: message, onStartTyping: function () {
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
                        && ((e.key === MessageInputKeys.Enter && ableMention)
                            || e.key === MessageInputKeys.ArrowUp
                            || e.key === MessageInputKeys.ArrowDown)) {
                        setMessageInputEvent(e);
                        return true;
                    }
                    return false;
                } }))));
    }
    return (React__default.createElement("div", { className: classnames('sendbird-msg-hoc sendbird-msg--scroll-ref', isAnimated && 'sendbird-msg-hoc__animated'), "data-testid": "sendbird-message-view", style: children || renderMessage ? undefined : { marginBottom: '2px' }, "data-sb-message-id": message.messageId, "data-sb-created-at": message.createdAt, ref: messageScrollRef },
        hasSeparator
            && (renderedCustomSeparator || (React__default.createElement(DateSeparator, null,
                React__default.createElement(Label, { type: LabelTypography.CAPTION_2, color: LabelColors.ONBACKGROUND_2 }, format(message.createdAt, stringSet.DATE_FORMAT__MESSAGE_LIST__DATE_SEPARATOR, {
                    locale: dateLocale,
                }))))),
        renderChildren()));
};

export { MessageView as M };
//# sourceMappingURL=bundle-8I0oGHOc.js.map
