import React__default, { useState, useEffect } from 'react';
import { useChannelContext } from '../context.js';
import PlaceHolder, { PlaceHolderTypes } from '../../ui/PlaceHolder.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import Message from './Message.js';
import { T as TypingIndicatorType } from '../../chunks/bundle-DLefrRUn.js';
import { a as isAboutSame } from '../../chunks/bundle-D-F3KakE.js';
import { UnreadCount } from '../../GroupChannel/components/UnreadCount.js';
import { FrozenNotification } from '../../GroupChannel/components/FrozenNotification.js';
import { S as SCROLL_BUFFER } from '../../chunks/bundle-DQk0aENq.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { MessageProvider } from '../../Message/context.js';
import { u as useHandleOnScrollCallback } from '../../chunks/bundle-DzijJyIT.js';
import { u as useThrottleCallback } from '../../chunks/bundle-tnPVKzs2.js';
import TypingIndicatorBubble from '../../ui/TypingIndicatorBubble.js';
import { u as useOnScrollPositionChangeDetector } from '../../chunks/bundle-Y942n2iZ.js';
import { getMessagePartsInfo } from '../utils/getMessagePartsInfo.js';
import { d as deleteNullish } from '../../chunks/bundle-0WaCg6X7.js';
import { N as getHTMLTextDirection } from '../../chunks/bundle-Bd-i99nk.js';
import '../../chunks/bundle-HcNswZ5p.js';
import '../../chunks/bundle-B91Bhfde.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import '../../chunks/bundle-ja8H3E0K.js';
import 'react-dom';
import '../../chunks/bundle-DhMUg-L7.js';
import '../../chunks/bundle-dybWaw0v.js';
import '../../chunks/bundle-DnSobLtx.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-Qkp2VIaZ.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../chunks/bundle-DjLJFwD7.js';
import '../../chunks/bundle-BKzcG-aC.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-CijxkMjj.js';
import '../../chunks/bundle-CuavrWk1.js';
import '../../chunks/bundle-D4JzAgen.js';
import '../../chunks/bundle-DB7YSrIT.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-DDTq-6FS.js';
import '../../chunks/bundle-zVlBKrSk.js';
import '../../chunks/bundle-DMEhFKKv.js';
import '../../chunks/bundle-JQDTfT_2.js';
import '../../chunks/bundle-BwmZGijR.js';
import '../../chunks/bundle-CZtAsa-i.js';
import '../../chunks/bundle-CUhgRMBc.js';
import '../../chunks/bundle-B43UOaqG.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-8I0oGHOc.js';
import '../../chunks/bundle-BB4cJn39.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-DGMsaaNU.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-lUbYBD0x.js';
import '../../chunks/bundle-Bf0OMYby.js';
import 'dompurify';
import '../../chunks/bundle-DCxt9PzH.js';
import '../../chunks/bundle-BddSUitu.js';
import '../../chunks/bundle-DLG7S88z.js';
import '../../chunks/bundle-BvQmfZZv.js';
import '../../ui/MessageContent.js';
import '../../chunks/bundle-Biuu5CVW.js';
import '../../chunks/bundle-BDE05Tho.js';
import '../../chunks/bundle-DfmFm_nl.js';
import '../../chunks/bundle-X8EPLaoY.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/ImageRenderer.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-B6yWIKOT.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/BottomSheet.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-2pbuHA3C.js';
import '../../chunks/bundle-DkDQ1PWY.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../ui/AdminMessage.js';
import '../../ui/QuoteMessage.js';
import '../../chunks/bundle-B_TSibjC.js';
import '../../ui/MobileMenu.js';
import '../../ui/ThreadReplies.js';
import '../../chunks/bundle-C5pqGUL_.js';
import '../../ui/OGMessageItemBody.js';
import '../../chunks/bundle-CYbqxz_s.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../ui/TextMessageItemBody.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-CW5sRqha.js';
import '../../ui/FileViewer.js';
import '../../chunks/bundle-A7zrKt0i.js';
import '../../ui/VoiceMessageItemBody.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/TemplateMessageItemBody.js';
import '../../chunks/bundle-CvDJ0OhP.js';
import '../../ui/FallbackTemplateMessageItemBody.tsx.js';
import '../../ui/LoadingTemplateMessageItemBody.tsx.js';
import '../../ui/MessageFeedbackFailedModal.js';
import '../../ui/FeedbackIconButton.js';
import '../../ui/MobileFeedbackMenu.js';
import '../../ui/MessageFeedbackModal.js';
import '../../ui/Input.js';
import '../../chunks/bundle-Cnmz5VIU.js';
import '../../GroupChannel/components/SuggestedReplies.js';
import '../../chunks/bundle-BYBFk8ow.js';
import './FileViewer.js';
import '../../chunks/bundle-mGA-NFf6.js';
import './RemoveMessageModal.js';
import '../../chunks/bundle-CCwC3Lit.js';
import '../../chunks/bundle-BzEzK7wl.js';
import '../utils/compareMessagesForGrouping.js';

var DELAY = 100;
function useSetScrollToBottom(_a) {
    var loading = _a.loading;
    var _b = useState(0), scrollBottom = _b[0], setScrollBottom = _b[1];
    useEffect(function () {
        if (loading) {
            setScrollBottom(0);
        }
    }, [loading]);
    var scrollCb = function (e) {
        var element = e.target;
        try {
            setScrollBottom(element.scrollHeight - element.scrollTop - element.offsetHeight);
        }
        catch (_a) {
            //
        }
    };
    return {
        scrollBottom: scrollBottom,
        scrollToBottomHandler: useThrottleCallback(scrollCb, DELAY, { trailing: true }),
    };
}

function useScrollBehavior() {
    var _a = useChannelContext(), scrollRef = _a.scrollRef, _b = _a.scrollBehavior, scrollBehavior = _b === void 0 ? 'auto' : _b;
    useEffect(function () {
        if (scrollRef.current) {
            scrollRef.current.style.scrollBehavior = scrollBehavior;
        }
    }, [scrollRef.current]);
    return null;
}

/* We operate the CSS files for Channel&GroupChannel modules in the GroupChannel */
var SCROLL_BOTTOM_PADDING = 50;
var MessageList = function (props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var _h = props.className, className = _h === void 0 ? '' : _h;
    var _j = deleteNullish(props), renderMessage = _j.renderMessage, renderMessageContent = _j.renderMessageContent, renderSuggestedReplies = _j.renderSuggestedReplies, renderCustomSeparator = _j.renderCustomSeparator, _k = _j.renderPlaceholderLoader, renderPlaceholderLoader = _k === void 0 ? function () { return React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.LOADING }); } : _k, _l = _j.renderPlaceholderEmpty, renderPlaceholderEmpty = _l === void 0 ? function () { return React__default.createElement(PlaceHolder, { className: "sendbird-conversation__no-messages", type: PlaceHolderTypes.NO_MESSAGES }); } : _l, _m = _j.renderFrozenNotification, renderFrozenNotification = _m === void 0 ? function () { return React__default.createElement(FrozenNotification, { className: "sendbird-conversation__messages__notification" }); } : _m;
    var _o = useChannelContext(), allMessages = _o.allMessages, localMessages = _o.localMessages, hasMorePrev = _o.hasMorePrev, hasMoreNext = _o.hasMoreNext, setInitialTimeStamp = _o.setInitialTimeStamp, setAnimatedMessageId = _o.setAnimatedMessageId, setHighLightedMessageId = _o.setHighLightedMessageId, isMessageGroupingEnabled = _o.isMessageGroupingEnabled, scrollRef = _o.scrollRef, onScrollCallback = _o.onScrollCallback, onScrollDownCallback = _o.onScrollDownCallback, messagesDispatcher = _o.messagesDispatcher, messageActionTypes = _o.messageActionTypes, currentGroupChannel = _o.currentGroupChannel, disableMarkAsRead = _o.disableMarkAsRead, filterMessageList = _o.filterMessageList, replyType = _o.replyType, loading = _o.loading, isScrolled = _o.isScrolled, unreadSince = _o.unreadSince, unreadSinceDate = _o.unreadSinceDate, typingMembers = _o.typingMembers;
    var store = useSendbirdStateContext();
    var allMessagesFiltered = typeof filterMessageList === 'function' ? allMessages.filter(filterMessageList) : allMessages;
    var markAsReadScheduler = store.config.markAsReadScheduler;
    var _p = useState(false), isScrollBottom = _p[0], setIsScrollBottom = _p[1];
    useScrollBehavior();
    /**
     * @param {function} callback callback from useHandleOnScrollCallback, it adjusts scroll position
     * */
    var onScroll = function (callback) {
        var element = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;
        if (element == null) {
            return;
        }
        var scrollTop = element.scrollTop, clientHeight = element.clientHeight, scrollHeight = element.scrollHeight;
        if (hasMorePrev && isAboutSame(scrollTop, 0, SCROLL_BUFFER)) {
            onScrollCallback(callback);
        }
        if (hasMoreNext && isAboutSame(clientHeight + scrollTop, scrollHeight, SCROLL_BUFFER)) {
            onScrollDownCallback(callback);
        }
        if (!disableMarkAsRead && isAboutSame(clientHeight + scrollTop, scrollHeight, SCROLL_BUFFER) && !!currentGroupChannel) {
            messagesDispatcher({
                type: messageActionTypes.MARK_AS_READ,
                payload: { channel: currentGroupChannel },
            });
            markAsReadScheduler.push(currentGroupChannel);
        }
    };
    var onClickScrollBot = function () {
        var _a, _b;
        setInitialTimeStamp === null || setInitialTimeStamp === void 0 ? void 0 : setInitialTimeStamp(null);
        setAnimatedMessageId === null || setAnimatedMessageId === void 0 ? void 0 : setAnimatedMessageId(null);
        setHighLightedMessageId === null || setHighLightedMessageId === void 0 ? void 0 : setHighLightedMessageId(null);
        if (scrollRef.current && scrollRef.current.scrollTop > -1) {
            scrollRef.current.scrollTop = ((_a = scrollRef.current.scrollHeight) !== null && _a !== void 0 ? _a : 0) - ((_b = scrollRef.current.offsetHeight) !== null && _b !== void 0 ? _b : 0);
        }
    };
    /**
     * 1. Move the messsage list scroll
     *    when each message's height is changed by `reactions` OR `showEdit`
     * 2. Keep the scrollBottom value after fetching new message list
     */
    var moveScroll = function (isBottomMessageAffected) {
        if (isBottomMessageAffected === void 0) { isBottomMessageAffected = false; }
        var current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;
        if (current) {
            var bottom = current.scrollHeight - current.scrollTop - current.offsetHeight;
            if (scrollBottom < bottom && (!isBottomMessageAffected || scrollBottom < SCROLL_BUFFER)) {
                // Move the scroll as much as the height of the message has changed
                current.scrollTop += bottom - scrollBottom;
            }
        }
    };
    var handleOnScroll = useHandleOnScrollCallback({
        hasMore: hasMorePrev,
        hasNext: hasMoreNext,
        onScroll: onScroll,
        scrollRef: scrollRef,
    });
    var onScrollReachedEndDetector = useOnScrollPositionChangeDetector({
        onReachedBottom: function () {
            /**
             * Note that this event is already being called in onScroll() above. However, it is only being called when
             * hasMoreNext is true but it needs to be called when hasNext is false when reached bottom as well.
             */
            if (!hasMoreNext && !disableMarkAsRead && !!currentGroupChannel) {
                messagesDispatcher({
                    type: messageActionTypes.MARK_AS_READ,
                    payload: { channel: currentGroupChannel },
                });
                markAsReadScheduler.push(currentGroupChannel);
            }
            setIsScrollBottom(true);
        },
        onReachedTop: function () {
            setIsScrollBottom(false);
        },
        onInBetween: function () {
            setIsScrollBottom(false);
        },
    });
    var _q = useSetScrollToBottom({ loading: loading }), scrollToBottomHandler = _q.scrollToBottomHandler, scrollBottom = _q.scrollBottom;
    if (loading) {
        return renderPlaceholderLoader();
    }
    if (allMessagesFiltered.length < 1) {
        return renderPlaceholderEmpty();
    }
    return (React__default.createElement(React__default.Fragment, null,
        !isScrolled && React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.LOADING }),
        React__default.createElement("div", { className: "sendbird-conversation__messages ".concat(className), dir: getHTMLTextDirection((_a = store === null || store === void 0 ? void 0 : store.config) === null || _a === void 0 ? void 0 : _a.htmlTextDirection, (_b = store === null || store === void 0 ? void 0 : store.config) === null || _b === void 0 ? void 0 : _b.forceLeftToRightMessageLayout) },
            React__default.createElement("div", { className: "sendbird-conversation__scroll-container" },
                React__default.createElement("div", { className: "sendbird-conversation__padding" }),
                React__default.createElement("div", { className: "sendbird-conversation__messages-padding", "data-testid": "sendbird-message-list-container", ref: scrollRef, onScroll: function (e) {
                        handleOnScroll();
                        scrollToBottomHandler(e);
                        onScrollReachedEndDetector(e);
                    } },
                    allMessagesFiltered.map(function (m, idx) {
                        var _a, _b;
                        var _c = getMessagePartsInfo({
                            allMessages: allMessagesFiltered,
                            replyType: replyType,
                            isMessageGroupingEnabled: isMessageGroupingEnabled,
                            currentIndex: idx,
                            currentMessage: m,
                            currentChannel: currentGroupChannel,
                        }), chainTop = _c.chainTop, chainBottom = _c.chainBottom, hasSeparator = _c.hasSeparator;
                        var isByMe = ((_a = m === null || m === void 0 ? void 0 : m.sender) === null || _a === void 0 ? void 0 : _a.userId) === ((_b = store === null || store === void 0 ? void 0 : store.config) === null || _b === void 0 ? void 0 : _b.userId);
                        return (React__default.createElement(MessageProvider, { message: m, key: m === null || m === void 0 ? void 0 : m.messageId, isByMe: isByMe },
                            React__default.createElement(Message, { handleScroll: moveScroll, message: m, hasSeparator: hasSeparator, chainTop: chainTop, chainBottom: chainBottom, renderMessageContent: renderMessageContent, renderSuggestedReplies: renderSuggestedReplies, renderCustomSeparator: renderCustomSeparator, 
                                // backward compatibility
                                renderMessage: renderMessage })));
                    }),
                    localMessages.map(function (m, idx) {
                        var _a, _b;
                        var _c = getMessagePartsInfo({
                            allMessages: allMessagesFiltered,
                            replyType: replyType,
                            isMessageGroupingEnabled: isMessageGroupingEnabled,
                            currentIndex: idx,
                            currentMessage: m,
                            currentChannel: currentGroupChannel,
                        }), chainTop = _c.chainTop, chainBottom = _c.chainBottom;
                        var isByMe = ((_a = m === null || m === void 0 ? void 0 : m.sender) === null || _a === void 0 ? void 0 : _a.userId) === ((_b = store === null || store === void 0 ? void 0 : store.config) === null || _b === void 0 ? void 0 : _b.userId);
                        return (React__default.createElement(MessageProvider, { message: m, key: m === null || m === void 0 ? void 0 : m.messageId, isByMe: isByMe },
                            React__default.createElement(Message, { handleScroll: moveScroll, message: m, chainTop: chainTop, chainBottom: chainBottom, renderMessageContent: renderMessageContent, renderSuggestedReplies: renderSuggestedReplies, renderCustomSeparator: renderCustomSeparator, 
                                // backward compatibility
                                renderMessage: renderMessage })));
                    }),
                    !hasMoreNext
                        && ((_d = (_c = store === null || store === void 0 ? void 0 : store.config) === null || _c === void 0 ? void 0 : _c.groupChannel) === null || _d === void 0 ? void 0 : _d.enableTypingIndicator)
                        && ((_g = (_f = (_e = store === null || store === void 0 ? void 0 : store.config) === null || _e === void 0 ? void 0 : _e.groupChannel) === null || _f === void 0 ? void 0 : _f.typingIndicatorTypes) === null || _g === void 0 ? void 0 : _g.has(TypingIndicatorType.Bubble)) && (React__default.createElement(TypingIndicatorBubble, { typingMembers: typingMembers, handleScroll: moveScroll })))),
            (currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.isFrozen) && renderFrozenNotification(),
            /**
             * Show unread count IFF scroll is not bottom or is bottom but hasNext is true.
             */
            (!isScrollBottom || hasMoreNext) && (unreadSince || unreadSinceDate) && (React__default.createElement(UnreadCount, { className: "sendbird-conversation__messages__notification", count: currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.unreadMessageCount, time: unreadSince, lastReadAt: unreadSinceDate, onClick: function () {
                    if (scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current)
                        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
                    if (!disableMarkAsRead && !!currentGroupChannel) {
                        markAsReadScheduler.push(currentGroupChannel);
                        messagesDispatcher({
                            type: messageActionTypes.MARK_AS_READ,
                            payload: { channel: currentGroupChannel },
                        });
                    }
                    setInitialTimeStamp(null);
                    setAnimatedMessageId(null);
                    setHighLightedMessageId(null);
                } })),
            // This flag is an unmatched variable
            scrollBottom > SCROLL_BOTTOM_PADDING && (React__default.createElement("div", { className: "sendbird-conversation__scroll-bottom-button", onClick: onClickScrollBot, onKeyDown: onClickScrollBot, tabIndex: 0, role: "button" },
                React__default.createElement(Icon, { width: "24px", height: "24px", type: IconTypes.CHEVRON_DOWN, fillColor: IconColors.PRIMARY }))))));
};

export { MessageList, MessageList as default };
//# sourceMappingURL=MessageList.js.map
