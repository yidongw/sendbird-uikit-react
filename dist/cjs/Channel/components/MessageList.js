'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Channel_context = require('../context.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var ui_Icon = require('../../ui/Icon.js');
var Channel_components_Message = require('./Message.js');
var types = require('../../chunks/bundle-Bfs6deby.js');
var utils$1 = require('../../chunks/bundle-CIP3LaaL.js');
var GroupChannel_components_UnreadCount = require('../../GroupChannel/components/UnreadCount.js');
var GroupChannel_components_FrozenNotification = require('../../GroupChannel/components/FrozenNotification.js');
var consts = require('../../chunks/bundle-C0tdWwa4.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var Message_context = require('../../Message/context.js');
var index = require('../../chunks/bundle-CaVRt4Gx.js');
var useThrottleCallback = require('../../chunks/bundle-mTQamCVh.js');
var ui_TypingIndicatorBubble = require('../../ui/TypingIndicatorBubble.js');
var index$1 = require('../../chunks/bundle-HoCgvUVa.js');
var Channel_utils_getMessagePartsInfo = require('../utils/getMessagePartsInfo.js');
var utils = require('../../chunks/bundle-BYHj6UqH.js');
var index$2 = require('../../chunks/bundle-e2d_I3io.js');
require('../../chunks/bundle-DRvomNLJ.js');
require('../../chunks/bundle-Bn25Hepq.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('../../chunks/bundle-DfISCDoH.js');
require('react-dom');
require('../../chunks/bundle-CmBrGegh.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../chunks/bundle-CzcmYPsN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-D8-2bEdY.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-CxDaflMi.js');
require('../../chunks/bundle-Dim56WjD.js');
require('../../chunks/bundle-C3e9xkw6.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-XTn8OOwy.js');
require('../../chunks/bundle-DrXG_ZI5.js');
require('../../chunks/bundle-CkLOqY_J.js');
require('../../chunks/bundle-BO0JOImE.js');
require('../../chunks/bundle-Dcn1Gf-8.js');
require('../../chunks/bundle-DkZ8dvkY.js');
require('../../chunks/bundle-DL9pw4YL.js');
require('../../chunks/bundle-DrPixXq9.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-ttq3NeTS.js');
require('../../chunks/bundle-CRtS_Hdn.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../ui/DateSeparator.js');
require('../../chunks/bundle-LSLwWEwG.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-CsHnjhet.js');
require('../../chunks/bundle-C9DxbvFZ.js');
require('dompurify');
require('../../chunks/bundle-DhOkJsb_.js');
require('../../chunks/bundle-BHlqknCd.js');
require('../../chunks/bundle-tu3X3qzD.js');
require('../../chunks/bundle-CZ8XCEGd.js');
require('../../ui/MessageContent.js');
require('../../chunks/bundle-C8j790_0.js');
require('../../chunks/bundle-DSQevcAL.js');
require('../../chunks/bundle-BayL2H8_.js');
require('../../chunks/bundle-CDQSndVh.js');
require('../../ui/MessageItemReactionMenu.js');
require('../../ui/ImageRenderer.js');
require('../../ui/ReactionButton.js');
require('../../chunks/bundle-CrV-FZvi.js');
require('../../ui/EmojiReactions.js');
require('../../ui/ReactionBadge.js');
require('../../ui/BottomSheet.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-Dmsb_oex.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../ui/AdminMessage.js');
require('../../ui/QuoteMessage.js');
require('../../chunks/bundle-CMe3c_v7.js');
require('../../ui/MobileMenu.js');
require('../../ui/ThreadReplies.js');
require('../../chunks/bundle-DE83rtdv.js');
require('../../ui/OGMessageItemBody.js');
require('../../chunks/bundle-C9AThBV0.js');
require('../../ui/MentionLabel.js');
require('../../ui/LinkLabel.js');
require('../../ui/TextMessageItemBody.js');
require('../../ui/FileMessageItemBody.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-D5dbLMqr.js');
require('../../ui/FileViewer.js');
require('../../chunks/bundle-XkouAzOQ.js');
require('../../ui/VoiceMessageItemBody.js');
require('../../ui/ProgressBar.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../ui/PlaybackTime.js');
require('../../ui/ThumbnailMessageItemBody.js');
require('../../ui/UnknownMessageItemBody.js');
require('../../ui/TemplateMessageItemBody.js');
require('../../chunks/bundle-TKyDCiE_.js');
require('../../ui/FallbackTemplateMessageItemBody.tsx.js');
require('../../ui/LoadingTemplateMessageItemBody.tsx.js');
require('../../ui/MessageFeedbackFailedModal.js');
require('../../ui/FeedbackIconButton.js');
require('../../ui/MobileFeedbackMenu.js');
require('../../ui/MessageFeedbackModal.js');
require('../../ui/Input.js');
require('../../chunks/bundle-DS66lTJo.js');
require('../../GroupChannel/components/SuggestedReplies.js');
require('../../chunks/bundle-3ucLy5RS.js');
require('./FileViewer.js');
require('../../chunks/bundle-DFLAqRSF.js');
require('./RemoveMessageModal.js');
require('../../chunks/bundle-B1sxVEVf.js');
require('../../chunks/bundle-M6Urrta6.js');
require('../utils/compareMessagesForGrouping.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var DELAY = 100;
function useSetScrollToBottom(_a) {
    var loading = _a.loading;
    var _b = React.useState(0), scrollBottom = _b[0], setScrollBottom = _b[1];
    React.useEffect(function () {
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
        scrollToBottomHandler: useThrottleCallback.useThrottleCallback(scrollCb, DELAY, { trailing: true }),
    };
}

function useScrollBehavior() {
    var _a = Channel_context.useChannelContext(), scrollRef = _a.scrollRef, _b = _a.scrollBehavior, scrollBehavior = _b === void 0 ? 'auto' : _b;
    React.useEffect(function () {
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
    var _j = utils.deleteNullish(props), renderMessage = _j.renderMessage, renderMessageContent = _j.renderMessageContent, renderSuggestedReplies = _j.renderSuggestedReplies, renderCustomSeparator = _j.renderCustomSeparator, _k = _j.renderPlaceholderLoader, renderPlaceholderLoader = _k === void 0 ? function () { return React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.LOADING }); } : _k, _l = _j.renderPlaceholderEmpty, renderPlaceholderEmpty = _l === void 0 ? function () { return React__default.default.createElement(ui_PlaceHolder.default, { className: "sendbird-conversation__no-messages", type: ui_PlaceHolder.PlaceHolderTypes.NO_MESSAGES }); } : _l, _m = _j.renderFrozenNotification, renderFrozenNotification = _m === void 0 ? function () { return React__default.default.createElement(GroupChannel_components_FrozenNotification.FrozenNotification, { className: "sendbird-conversation__messages__notification" }); } : _m;
    var _o = Channel_context.useChannelContext(), allMessages = _o.allMessages, localMessages = _o.localMessages, hasMorePrev = _o.hasMorePrev, hasMoreNext = _o.hasMoreNext, setInitialTimeStamp = _o.setInitialTimeStamp, setAnimatedMessageId = _o.setAnimatedMessageId, setHighLightedMessageId = _o.setHighLightedMessageId, isMessageGroupingEnabled = _o.isMessageGroupingEnabled, scrollRef = _o.scrollRef, onScrollCallback = _o.onScrollCallback, onScrollDownCallback = _o.onScrollDownCallback, messagesDispatcher = _o.messagesDispatcher, messageActionTypes = _o.messageActionTypes, currentGroupChannel = _o.currentGroupChannel, disableMarkAsRead = _o.disableMarkAsRead, filterMessageList = _o.filterMessageList, replyType = _o.replyType, loading = _o.loading, isScrolled = _o.isScrolled, unreadSince = _o.unreadSince, unreadSinceDate = _o.unreadSinceDate, typingMembers = _o.typingMembers;
    var store = useSendbirdStateContext.useSendbirdStateContext();
    var allMessagesFiltered = typeof filterMessageList === 'function' ? allMessages.filter(filterMessageList) : allMessages;
    var markAsReadScheduler = store.config.markAsReadScheduler;
    var _p = React.useState(false), isScrollBottom = _p[0], setIsScrollBottom = _p[1];
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
        if (hasMorePrev && utils$1.isAboutSame(scrollTop, 0, consts.SCROLL_BUFFER)) {
            onScrollCallback(callback);
        }
        if (hasMoreNext && utils$1.isAboutSame(clientHeight + scrollTop, scrollHeight, consts.SCROLL_BUFFER)) {
            onScrollDownCallback(callback);
        }
        if (!disableMarkAsRead && utils$1.isAboutSame(clientHeight + scrollTop, scrollHeight, consts.SCROLL_BUFFER) && !!currentGroupChannel) {
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
            if (scrollBottom < bottom && (!isBottomMessageAffected || scrollBottom < consts.SCROLL_BUFFER)) {
                // Move the scroll as much as the height of the message has changed
                current.scrollTop += bottom - scrollBottom;
            }
        }
    };
    var handleOnScroll = index.useHandleOnScrollCallback({
        hasMore: hasMorePrev,
        hasNext: hasMoreNext,
        onScroll: onScroll,
        scrollRef: scrollRef,
    });
    var onScrollReachedEndDetector = index$1.useOnScrollPositionChangeDetector({
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
    return (React__default.default.createElement(React__default.default.Fragment, null,
        !isScrolled && React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.LOADING }),
        React__default.default.createElement("div", { className: "sendbird-conversation__messages ".concat(className), dir: index$2.getHTMLTextDirection((_a = store === null || store === void 0 ? void 0 : store.config) === null || _a === void 0 ? void 0 : _a.htmlTextDirection, (_b = store === null || store === void 0 ? void 0 : store.config) === null || _b === void 0 ? void 0 : _b.forceLeftToRightMessageLayout) },
            React__default.default.createElement("div", { className: "sendbird-conversation__scroll-container" },
                React__default.default.createElement("div", { className: "sendbird-conversation__padding" }),
                React__default.default.createElement("div", { className: "sendbird-conversation__messages-padding", "data-testid": "sendbird-message-list-container", ref: scrollRef, onScroll: function (e) {
                        handleOnScroll();
                        scrollToBottomHandler(e);
                        onScrollReachedEndDetector(e);
                    } },
                    allMessagesFiltered.map(function (m, idx) {
                        var _a, _b;
                        var _c = Channel_utils_getMessagePartsInfo.getMessagePartsInfo({
                            allMessages: allMessagesFiltered,
                            replyType: replyType,
                            isMessageGroupingEnabled: isMessageGroupingEnabled,
                            currentIndex: idx,
                            currentMessage: m,
                            currentChannel: currentGroupChannel,
                        }), chainTop = _c.chainTop, chainBottom = _c.chainBottom, hasSeparator = _c.hasSeparator;
                        var isByMe = ((_a = m === null || m === void 0 ? void 0 : m.sender) === null || _a === void 0 ? void 0 : _a.userId) === ((_b = store === null || store === void 0 ? void 0 : store.config) === null || _b === void 0 ? void 0 : _b.userId);
                        return (React__default.default.createElement(Message_context.MessageProvider, { message: m, key: m === null || m === void 0 ? void 0 : m.messageId, isByMe: isByMe },
                            React__default.default.createElement(Channel_components_Message, { handleScroll: moveScroll, message: m, hasSeparator: hasSeparator, chainTop: chainTop, chainBottom: chainBottom, renderMessageContent: renderMessageContent, renderSuggestedReplies: renderSuggestedReplies, renderCustomSeparator: renderCustomSeparator, 
                                // backward compatibility
                                renderMessage: renderMessage })));
                    }),
                    localMessages.map(function (m, idx) {
                        var _a, _b;
                        var _c = Channel_utils_getMessagePartsInfo.getMessagePartsInfo({
                            allMessages: allMessagesFiltered,
                            replyType: replyType,
                            isMessageGroupingEnabled: isMessageGroupingEnabled,
                            currentIndex: idx,
                            currentMessage: m,
                            currentChannel: currentGroupChannel,
                        }), chainTop = _c.chainTop, chainBottom = _c.chainBottom;
                        var isByMe = ((_a = m === null || m === void 0 ? void 0 : m.sender) === null || _a === void 0 ? void 0 : _a.userId) === ((_b = store === null || store === void 0 ? void 0 : store.config) === null || _b === void 0 ? void 0 : _b.userId);
                        return (React__default.default.createElement(Message_context.MessageProvider, { message: m, key: m === null || m === void 0 ? void 0 : m.messageId, isByMe: isByMe },
                            React__default.default.createElement(Channel_components_Message, { handleScroll: moveScroll, message: m, chainTop: chainTop, chainBottom: chainBottom, renderMessageContent: renderMessageContent, renderSuggestedReplies: renderSuggestedReplies, renderCustomSeparator: renderCustomSeparator, 
                                // backward compatibility
                                renderMessage: renderMessage })));
                    }),
                    !hasMoreNext
                        && ((_d = (_c = store === null || store === void 0 ? void 0 : store.config) === null || _c === void 0 ? void 0 : _c.groupChannel) === null || _d === void 0 ? void 0 : _d.enableTypingIndicator)
                        && ((_g = (_f = (_e = store === null || store === void 0 ? void 0 : store.config) === null || _e === void 0 ? void 0 : _e.groupChannel) === null || _f === void 0 ? void 0 : _f.typingIndicatorTypes) === null || _g === void 0 ? void 0 : _g.has(types.TypingIndicatorType.Bubble)) && (React__default.default.createElement(ui_TypingIndicatorBubble, { typingMembers: typingMembers, handleScroll: moveScroll })))),
            (currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.isFrozen) && renderFrozenNotification(),
            /**
             * Show unread count IFF scroll is not bottom or is bottom but hasNext is true.
             */
            (!isScrollBottom || hasMoreNext) && (unreadSince || unreadSinceDate) && (React__default.default.createElement(GroupChannel_components_UnreadCount.UnreadCount, { className: "sendbird-conversation__messages__notification", count: currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.unreadMessageCount, time: unreadSince, lastReadAt: unreadSinceDate, onClick: function () {
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
            scrollBottom > SCROLL_BOTTOM_PADDING && (React__default.default.createElement("div", { className: "sendbird-conversation__scroll-bottom-button", onClick: onClickScrollBot, onKeyDown: onClickScrollBot, tabIndex: 0, role: "button" },
                React__default.default.createElement(ui_Icon.default, { width: "24px", height: "24px", type: ui_Icon.IconTypes.CHEVRON_DOWN, fillColor: ui_Icon.IconColors.PRIMARY }))))));
};

exports.MessageList = MessageList;
exports.default = MessageList;
//# sourceMappingURL=MessageList.js.map
