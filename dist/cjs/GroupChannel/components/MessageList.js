'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var uikitTools = require('@sendbird/uikit-tools');
var index = require('../../chunks/bundle-BLoixwYr.js');
var types = require('../../chunks/bundle-lxEd4uN4.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var ui_Icon = require('../../ui/Icon.js');
var GroupChannel_components_Message = require('./Message.js');
var GroupChannel_components_UnreadCount = require('./UnreadCount.js');
var GroupChannel_components_FrozenNotification = require('./FrozenNotification.js');
var consts = require('../../chunks/bundle-BD0wJiNh.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ui_TypingIndicatorBubble = require('../../ui/TypingIndicatorBubble.js');
var GroupChannel_context = require('../context.js');
var utils$1 = require('../../chunks/bundle-Ck6ikNW6.js');
var Channel_utils_getMessagePartsInfo = require('../../Channel/utils/getMessagePartsInfo.js');
var Message_context = require('../../Message/context.js');
var utils$2 = require('../../chunks/bundle-w0Wt2aBx.js');
var utils = require('../../chunks/bundle-BNuA_uqY.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-Cy1ruNzs.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../chunks/bundle-CAR4EIKs.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-DcAbHyPY.js');
require('../../chunks/bundle-DspSuA8e.js');
require('../../chunks/bundle-CtHeiC70.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../ui/DateSeparator.js');
require('../../chunks/bundle-CLzI6bbe.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-CfV7jROn.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-CCtdwkHe.js');
require('dompurify');
require('../../chunks/bundle-By5v4zYf.js');
require('../../chunks/bundle-DobO_BAb.js');
require('../../chunks/bundle-BaSZqehS.js');
require('../../chunks/bundle-BIkitklZ.js');
require('../../withSendbird.js');
require('../../ui/MessageContent.js');
require('../../chunks/bundle-BQHwJ1ZS.js');
require('../../chunks/bundle-f7s_1xF4.js');
require('../../chunks/bundle-Cc6_UMK4.js');
require('../../chunks/bundle-BUXIG4fk.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-C1poxl5k.js');
require('../../ui/MessageItemReactionMenu.js');
require('../../ui/ImageRenderer.js');
require('../../ui/ReactionButton.js');
require('../../chunks/bundle-D_k3_Y_y.js');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../ui/EmojiReactions.js');
require('../../ui/ReactionBadge.js');
require('../../ui/BottomSheet.js');
require('../../chunks/bundle-DZhkNDpN.js');
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
require('../../chunks/bundle-CVdJh4P7.js');
require('../../ui/AdminMessage.js');
require('../../ui/QuoteMessage.js');
require('../../chunks/bundle-DEjC6RIv.js');
require('@sendbird/chat/message');
require('../../ui/MobileMenu.js');
require('../../ui/ThreadReplies.js');
require('../../chunks/bundle-8wGi0pKu.js');
require('../../ui/OGMessageItemBody.js');
require('../../chunks/bundle-92xEkubH.js');
require('../../ui/MentionLabel.js');
require('../../ui/LinkLabel.js');
require('../../ui/TextMessageItemBody.js');
require('../../ui/FileMessageItemBody.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-B3JoFOJ4.js');
require('../../ui/FileViewer.js');
require('../../chunks/bundle-DpdA7O8z.js');
require('../../ui/VoiceMessageItemBody.js');
require('../../ui/ProgressBar.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../ui/PlaybackTime.js');
require('../../ui/ThumbnailMessageItemBody.js');
require('../../ui/UnknownMessageItemBody.js');
require('../../ui/TemplateMessageItemBody.js');
require('../../chunks/bundle-Dd_liLM9.js');
require('../../ui/FallbackTemplateMessageItemBody.tsx.js');
require('../../ui/LoadingTemplateMessageItemBody.tsx.js');
require('../../ui/MessageFeedbackFailedModal.js');
require('../../ui/FeedbackIconButton.js');
require('../../ui/MobileFeedbackMenu.js');
require('../../ui/MessageFeedbackModal.js');
require('../../ui/Input.js');
require('../../chunks/bundle-BwahJ_Tg.js');
require('./SuggestedReplies.js');
require('../../chunks/bundle-kFYCld9C.js');
require('./FileViewer.js');
require('../../chunks/bundle-D-EFC7w9.js');
require('../../chunks/bundle-CpJ9tVDn.js');
require('../../chunks/bundle-DvvdekCh.js');
require('../../chunks/bundle-CzBskCon.js');
require('./RemoveMessageModal.js');
require('../../chunks/bundle-BJ_HBGTK.js');
require('../../chunks/bundle-CzLnk6wC.js');
require('../../Channel/utils/compareMessagesForGrouping.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var InfiniteList = React.forwardRef(function (props, listRef) {
    var messages = props.messages, renderMessage = props.renderMessage, scrollPositionRef = props.scrollPositionRef, scrollDistanceFromBottomRef = props.scrollDistanceFromBottomRef, onLoadPrevious = props.onLoadPrevious, onLoadNext = props.onLoadNext, _a = props.loadThreshold, loadThreshold = _a === void 0 ? 0.05 : _a, typingIndicator = props.typingIndicator, _b = props.onScrollPosition, onScrollPosition = _b === void 0 ? utils$1.noop : _b, initDeps = props.initDeps;
    var isFetching = React__default.default.useRef(false);
    var direction = React__default.default.useRef();
    var oldScrollTop = React.useRef(0);
    // SideEffect: scroll to bottom on initialized
    React.useLayoutEffect(function () {
        if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }
    }, initDeps);
    // SideEffect: keep scroll position
    React.useLayoutEffect(function () {
        if (listRef.current) {
            if (direction.current === 'top') {
                listRef.current.scrollTop = listRef.current.scrollHeight - scrollPositionRef.current;
            }
            if (direction.current === 'bottom') {
                listRef.current.scrollTop = oldScrollTop.current;
            }
            direction.current = undefined;
        }
    }, [listRef.current, messages.length]);
    var handleScroll = function () { return _tslib.__awaiter(void 0, void 0, void 0, function () {
        var list, threshold;
        return _tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!listRef.current)
                        return [2 /*return*/];
                    list = listRef.current;
                    onScrollPosition(getReachedStatus(list));
                    scrollPositionRef.current = list.scrollHeight - list.scrollTop;
                    scrollDistanceFromBottomRef.current = scrollPositionRef.current - list.clientHeight;
                    oldScrollTop.current = list.scrollTop;
                    if (isFetching.current)
                        return [2 /*return*/];
                    threshold = list.clientHeight * Math.min(Math.max(0, loadThreshold), 1);
                    if (!(list.scrollTop <= threshold)) return [3 /*break*/, 2];
                    isFetching.current = true;
                    direction.current = 'top';
                    return [4 /*yield*/, onLoadPrevious()];
                case 1:
                    _a.sent();
                    isFetching.current = false;
                    return [3 /*break*/, 5];
                case 2:
                    if (!(list.scrollHeight - list.scrollTop - list.clientHeight <= threshold)) return [3 /*break*/, 4];
                    isFetching.current = true;
                    direction.current = 'bottom';
                    return [4 /*yield*/, onLoadNext()];
                case 3:
                    _a.sent();
                    isFetching.current = false;
                    return [3 /*break*/, 5];
                case 4:
                    direction.current = undefined;
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React__default.default.createElement("div", { className: "sendbird-conversation__scroll-container" },
        React__default.default.createElement("div", { className: "sendbird-conversation__padding" }),
        React__default.default.createElement("div", { ref: listRef, className: "sendbird-conversation__messages-padding", "data-testid": "sendbird-message-list-container", onScroll: handleScroll },
            messages.map(function (message, index) { return renderMessage({ message: message, index: index }); }),
            typingIndicator)));
});
function getReachedStatus(element) {
    if (utils.isAboutSame(element.scrollTop, 0, consts.SCROLL_BUFFER)) {
        return 'top';
    }
    if (utils.isAboutSame(element.scrollHeight, element.clientHeight + element.scrollTop, consts.SCROLL_BUFFER)) {
        return 'bottom';
    }
    return 'middle';
}

var MessageList = function (props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var _h = props.className, className = _h === void 0 ? '' : _h;
    var _j = utils$1.deleteNullish(props), _k = _j.renderMessage, renderMessage = _k === void 0 ? function (props) { return React__default.default.createElement(GroupChannel_components_Message.Message, _tslib.__assign({}, props)); } : _k, renderMessageContent = _j.renderMessageContent, renderSuggestedReplies = _j.renderSuggestedReplies, renderCustomSeparator = _j.renderCustomSeparator, _l = _j.renderPlaceholderLoader, renderPlaceholderLoader = _l === void 0 ? function () { return React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.LOADING }); } : _l, _m = _j.renderPlaceholderEmpty, renderPlaceholderEmpty = _m === void 0 ? function () { return React__default.default.createElement(ui_PlaceHolder.default, { className: "sendbird-conversation__no-messages", type: ui_PlaceHolder.PlaceHolderTypes.NO_MESSAGES }); } : _m, _o = _j.renderFrozenNotification, renderFrozenNotification = _o === void 0 ? function () { return React__default.default.createElement(GroupChannel_components_FrozenNotification.FrozenNotification, { className: "sendbird-conversation__messages__notification" }); } : _o;
    var _p = GroupChannel_context.useGroupChannelContext(), channelUrl = _p.channelUrl, hasNext = _p.hasNext, loading = _p.loading, messages = _p.messages, newMessages = _p.newMessages, scrollToBottom = _p.scrollToBottom, isScrollBottomReached = _p.isScrollBottomReached, isMessageGroupingEnabled = _p.isMessageGroupingEnabled, scrollRef = _p.scrollRef, scrollDistanceFromBottomRef = _p.scrollDistanceFromBottomRef, scrollPositionRef = _p.scrollPositionRef, currentChannel = _p.currentChannel, replyType = _p.replyType, scrollPubSub = _p.scrollPubSub, loadNext = _p.loadNext, loadPrevious = _p.loadPrevious, setIsScrollBottomReached = _p.setIsScrollBottomReached, resetNewMessages = _p.resetNewMessages;
    var store = useSendbirdStateContext.useSendbirdStateContext();
    var _q = React.useState(), unreadSinceDate = _q[0], setUnreadSinceDate = _q[1];
    React.useEffect(function () {
        if (isScrollBottomReached) {
            setUnreadSinceDate(undefined);
        }
        else {
            setUnreadSinceDate(new Date());
        }
    }, [isScrollBottomReached]);
    /**
     * 1. Move the message list scroll
     *    when each message's height is changed by `reactions` OR `showEdit`
     * 2. Keep the scrollBottom value after fetching new message list
     */
    var onMessageContentSizeChanged = function (isBottomMessageAffected) {
        if (isBottomMessageAffected === void 0) { isBottomMessageAffected = false; }
        var elem = scrollRef.current;
        if (elem) {
            var latestDistance = scrollDistanceFromBottomRef.current;
            var currentDistance = elem.scrollHeight - elem.scrollTop - elem.offsetHeight;
            if (latestDistance < currentDistance && (!isBottomMessageAffected || latestDistance < consts.SCROLL_BUFFER)) {
                var diff = currentDistance - latestDistance;
                // Move the scroll as much as the height of the message has changed
                scrollPubSub.publish('scroll', { top: elem.scrollTop + diff, lazy: false, animated: false });
            }
        }
    };
    var renderer = {
        frozenNotification: function () {
            if (!currentChannel || !currentChannel.isFrozen)
                return null;
            return renderFrozenNotification();
        },
        unreadMessagesNotification: function () {
            if (isScrollBottomReached || !unreadSinceDate)
                return null;
            return (React__default.default.createElement(GroupChannel_components_UnreadCount.UnreadCount, { className: "sendbird-conversation__messages__notification", count: newMessages.length, lastReadAt: unreadSinceDate, onClick: function () { return scrollToBottom(); } }));
        },
        scrollToBottomButton: function () {
            if (!hasNext() && isScrollBottomReached)
                return null;
            return (React__default.default.createElement("div", { className: "sendbird-conversation__scroll-bottom-button", onClick: function () { return scrollToBottom(); }, onKeyDown: function () { return scrollToBottom(); }, tabIndex: 0, role: "button" },
                React__default.default.createElement(ui_Icon.default, { width: "24px", height: "24px", type: ui_Icon.IconTypes.CHEVRON_DOWN, fillColor: ui_Icon.IconColors.PRIMARY })));
        },
    };
    if (loading) {
        return renderPlaceholderLoader();
    }
    if (messages.length === 0) {
        return renderPlaceholderEmpty();
    }
    return (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement("div", { className: "sendbird-conversation__messages ".concat(className), dir: index.getHTMLTextDirection((_a = store === null || store === void 0 ? void 0 : store.config) === null || _a === void 0 ? void 0 : _a.htmlTextDirection, (_b = store === null || store === void 0 ? void 0 : store.config) === null || _b === void 0 ? void 0 : _b.forceLeftToRightMessageLayout) },
            React__default.default.createElement(InfiniteList, { ref: scrollRef, initDeps: [channelUrl], scrollPositionRef: scrollPositionRef, scrollDistanceFromBottomRef: scrollDistanceFromBottomRef, onLoadNext: loadNext, onLoadPrevious: loadPrevious, onScrollPosition: function (it) {
                    var isScrollBottomReached = it === 'bottom';
                    if (newMessages.length > 0 && isScrollBottomReached) {
                        resetNewMessages();
                    }
                    setIsScrollBottomReached(isScrollBottomReached);
                }, messages: messages, renderMessage: function (_a) {
                    var message = _a.message, index$1 = _a.index;
                    var _b = Channel_utils_getMessagePartsInfo.getMessagePartsInfo({
                        allMessages: messages,
                        replyType: replyType !== null && replyType !== void 0 ? replyType : 'NONE',
                        isMessageGroupingEnabled: isMessageGroupingEnabled !== null && isMessageGroupingEnabled !== void 0 ? isMessageGroupingEnabled : false,
                        currentIndex: index$1,
                        currentMessage: message,
                        currentChannel: currentChannel,
                    }), chainTop = _b.chainTop, chainBottom = _b.chainBottom, hasSeparator = _b.hasSeparator;
                    var isOutgoingMessage = index.isSendableMessage(message) && message.sender.userId === store.config.userId;
                    return (React__default.default.createElement(Message_context.MessageProvider, { message: message, key: utils$2.getComponentKeyFromMessage(message), isByMe: isOutgoingMessage }, renderMessage({
                        handleScroll: onMessageContentSizeChanged,
                        message: message,
                        hasSeparator: hasSeparator,
                        chainTop: chainTop,
                        chainBottom: chainBottom,
                        renderMessageContent: renderMessageContent,
                        renderSuggestedReplies: renderSuggestedReplies,
                        renderCustomSeparator: renderCustomSeparator,
                    })));
                }, typingIndicator: !hasNext()
                    && ((_d = (_c = store === null || store === void 0 ? void 0 : store.config) === null || _c === void 0 ? void 0 : _c.groupChannel) === null || _d === void 0 ? void 0 : _d.enableTypingIndicator)
                    && ((_g = (_f = (_e = store === null || store === void 0 ? void 0 : store.config) === null || _e === void 0 ? void 0 : _e.groupChannel) === null || _f === void 0 ? void 0 : _f.typingIndicatorTypes) === null || _g === void 0 ? void 0 : _g.has(types.TypingIndicatorType.Bubble)) && (React__default.default.createElement(TypingIndicatorBubbleWrapper, { channelUrl: channelUrl, handleScroll: onMessageContentSizeChanged })) }),
            React__default.default.createElement(React__default.default.Fragment, null, renderer.frozenNotification()),
            React__default.default.createElement(React__default.default.Fragment, null, renderer.unreadMessagesNotification()),
            React__default.default.createElement(React__default.default.Fragment, null, renderer.scrollToBottomButton()))));
};
var TypingIndicatorBubbleWrapper = function (props) {
    var stores = useSendbirdStateContext.useSendbirdStateContext().stores;
    var _a = React.useState([]), typingMembers = _a[0], setTypingMembers = _a[1];
    uikitTools.useGroupChannelHandler(stores.sdkStore.sdk, {
        onTypingStatusUpdated: function (channel) {
            if (channel.url === props.channelUrl) {
                setTypingMembers(channel.getTypingUsers());
            }
        },
    });
    return React__default.default.createElement(ui_TypingIndicatorBubble, { typingMembers: typingMembers, handleScroll: props.handleScroll });
};

exports.MessageList = MessageList;
exports.default = MessageList;
//# sourceMappingURL=MessageList.js.map
