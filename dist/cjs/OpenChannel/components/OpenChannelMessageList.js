'use strict';

var React = require('react');
var index$1 = require('../../chunks/bundle-BayL2H8_.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var OpenChannel_context = require('../../chunks/bundle-D8WonUC2.js');
var OpenChannel_components_OpenChannelMessage = require('./OpenChannelMessage.js');
var Message_context = require('../../Message/context.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var index = require('../../chunks/bundle-CaVRt4Gx.js');
var Channel_utils_compareMessagesForGrouping = require('../../Channel/utils/compareMessagesForGrouping.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-DRvomNLJ.js');
require('../../chunks/bundle-BYHj6UqH.js');
require('../../chunks/bundle-CmBrGegh.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../chunks/bundle-D8-2bEdY.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-Bn25Hepq.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('../../chunks/bundle-DfISCDoH.js');
require('../../chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('react-dom');
require('../../chunks/bundle-CzcmYPsN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-DrXG_ZI5.js');
require('../../chunks/bundle-Dcn1Gf-8.js');
require('../../chunks/bundle-Ivv-MORg.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../chunks/bundle-C3e9xkw6.js');
require('../../ui/OpenchannelUserMessage.js');
require('../../chunks/bundle-Dmsb_oex.js');
require('../../ui/ImageRenderer.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-ZVE6E_YV.js');
require('../../chunks/bundle-koqtwo1j.js');
require('../../chunks/bundle-CrV-FZvi.js');
require('../../ui/OpenChannelAdminMessage.js');
require('../../ui/OpenchannelOGMessage.js');
require('../../ui/LinkLabel.js');
require('../../chunks/bundle-C9AThBV0.js');
require('../../chunks/bundle-CZ8XCEGd.js');
require('../../ui/MentionLabel.js');
require('../../ui/OpenchannelThumbnailMessage.js');
require('../../ui/OpenchannelFileMessage.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-LSLwWEwG.js');
require('../../ui/DateSeparator.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-CsHnjhet.js');
require('../../chunks/bundle-CxDaflMi.js');
require('../../chunks/bundle-C9DxbvFZ.js');
require('dompurify');
require('../../chunks/bundle-DhOkJsb_.js');
require('../../chunks/bundle-BHlqknCd.js');
require('../../chunks/bundle-tu3X3qzD.js');
require('../../ui/FileViewer.js');
require('../../chunks/bundle-XkouAzOQ.js');
require('../../chunks/bundle-M6Urrta6.js');
require('../../chunks/bundle-mTQamCVh.js');
require('../../chunks/bundle-CIP3LaaL.js');
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
