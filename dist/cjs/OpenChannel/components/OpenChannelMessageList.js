'use strict';

var React = require('react');
var index$1 = require('../../chunks/bundle-Cc6_UMK4.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var OpenChannel_context = require('../../chunks/bundle-CjHcvEl6.js');
var OpenChannel_components_OpenChannelMessage = require('./OpenChannelMessage.js');
var Message_context = require('../../Message/context.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var index = require('../../chunks/bundle-CM4lC-DE.js');
var Channel_utils_compareMessagesForGrouping = require('../../Channel/utils/compareMessagesForGrouping.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-Bdr7xlea.js');
require('../../chunks/bundle-Ck6ikNW6.js');
require('../../chunks/bundle-Cy1ruNzs.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../chunks/bundle-CAR4EIKs.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-DgjptBQW.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('../../chunks/bundle-DZhkNDpN.js');
require('../../chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('react-dom');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-Dh0NAI0D.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../chunks/bundle-BdRSDnh9.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../chunks/bundle-DspSuA8e.js');
require('../../ui/OpenchannelUserMessage.js');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../ui/ImageRenderer.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-DHy4Izth.js');
require('../../chunks/bundle-CJ7RaJYS.js');
require('../../chunks/bundle-D_k3_Y_y.js');
require('../../ui/OpenChannelAdminMessage.js');
require('../../ui/OpenchannelOGMessage.js');
require('../../ui/LinkLabel.js');
require('../../chunks/bundle-92xEkubH.js');
require('../../chunks/bundle-BIkitklZ.js');
require('../../ui/MentionLabel.js');
require('../../ui/OpenchannelThumbnailMessage.js');
require('../../ui/OpenchannelFileMessage.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-CLzI6bbe.js');
require('../../ui/DateSeparator.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-CfV7jROn.js');
require('../../chunks/bundle-CtHeiC70.js');
require('../../chunks/bundle-CCtdwkHe.js');
require('dompurify');
require('../../chunks/bundle-By5v4zYf.js');
require('../../chunks/bundle-DobO_BAb.js');
require('../../chunks/bundle-BaSZqehS.js');
require('../../ui/FileViewer.js');
require('../../chunks/bundle-DpdA7O8z.js');
require('../../chunks/bundle-CzLnk6wC.js');
require('../../chunks/bundle-CpvSgBLD.js');
require('../../chunks/bundle-BNuA_uqY.js');
require('@sendbird/chat/message');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function OpenChannelMessageList(props, ref) {
    var _a = OpenChannel_context.useOpenChannelContext(), _b = _a.isMessageGroupingEnabled, isMessageGroupingEnabled = _b === void 0 ? true : _b, allMessages = _a.allMessages, hasMore = _a.hasMore, onScroll = _a.onScroll;
    var store = useSendbirdStateContext.useSendbirdStateContext();
    var userId = store.config.userId;
    var localRef = React.useRef(null);
    var scrollRef = ref || localRef;
    var _c = React.useState(false), showScrollDownButton = _c[0], setShowScrollDownButton = _c[1];
    var scrollToBottom = function () {
        if (scrollRef && 'current' in scrollRef && scrollRef.current) {
            scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
            setShowScrollDownButton(false);
        }
    };
    var handleOnScroll = index.useHandleOnScrollCallback({
        setShowScrollDownButton: setShowScrollDownButton,
        hasMore: hasMore,
        onScroll: onScroll,
        scrollRef: scrollRef,
    });
    var memoizedMessageList = React.useMemo(function () {
        var _a;
        if (allMessages.length > 0) {
            return (allMessages.map(function (message, index) {
                var _a;
                var previousMessage = allMessages[index - 1];
                var nextMessage = allMessages[index - 1];
                var previousMessageCreatedAt = previousMessage && previousMessage.createdAt;
                var currentCreatedAt = message === null || message === void 0 ? void 0 : message.createdAt;
                // https://stackoverflow.com/a/41855608
                var hasSeparator = !(previousMessageCreatedAt && (index$1.isSameDay(currentCreatedAt, previousMessageCreatedAt)));
                var _b = isMessageGroupingEnabled
                    ? Channel_utils_compareMessagesForGrouping.compareMessagesForGrouping(previousMessage, message, nextMessage)
                    : [false, false], chainTop = _b[0], chainBottom = _b[1];
                var isByMe = ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId) === userId;
                var key = (message === null || message === void 0 ? void 0 : message.messageId) || (message === null || message === void 0 ? void 0 : message.reqId);
                return (React__default.default.createElement(Message_context.MessageProvider, { message: message, isByMe: isByMe, key: key },
                    React__default.default.createElement(OpenChannel_components_OpenChannelMessage, { message: message, chainTop: chainTop, chainBottom: chainBottom, hasSeparator: hasSeparator, renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage })));
            }));
        }
        return (((_a = props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList) === null || _a === void 0 ? void 0 : _a.call(props)) || (React__default.default.createElement(ui_PlaceHolder.default, { className: "sendbird-openchannel-conversation-scroll__container__place-holder", type: ui_PlaceHolder.PlaceHolderTypes.NO_MESSAGES })));
    }, [allMessages]);
    return (React__default.default.createElement("div", { className: "sendbird-openchannel-conversation-scroll" },
        React__default.default.createElement("div", { className: "sendbird-openchannel-conversation-scroll__container" },
            React__default.default.createElement("div", { className: "sendbird-openchannel-conversation-scroll__container__padding" }),
            React__default.default.createElement("div", { className: [
                    'sendbird-openchannel-conversation-scroll__container__item-container',
                    (allMessages.length > 0) ? '' : 'no-messages',
                ].join(' '), onScroll: handleOnScroll, ref: scrollRef }, memoizedMessageList)),
        showScrollDownButton && (React__default.default.createElement("div", { className: "sendbird-openchannel-conversation-scroll__container__scroll-bottom-button", onClick: scrollToBottom, onKeyDown: scrollToBottom, tabIndex: 0, role: "button" },
            React__default.default.createElement(ui_Icon.default, { width: "24px", height: "24px", type: ui_Icon.IconTypes.CHEVRON_DOWN, fillColor: ui_Icon.IconColors.CONTENT })))));
}
var OpenChannelMessageList$1 = React__default.default.forwardRef(OpenChannelMessageList);

module.exports = OpenChannelMessageList$1;
//# sourceMappingURL=OpenChannelMessageList.js.map
