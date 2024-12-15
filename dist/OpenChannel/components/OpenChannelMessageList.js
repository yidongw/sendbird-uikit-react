import React__default, { useRef, useState, useMemo } from 'react';
import { i as isSameDay } from '../../chunks/bundle-B5oDG6vR.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import PlaceHolder, { PlaceHolderTypes } from '../../ui/PlaceHolder.js';
import { u as useOpenChannelContext } from '../../chunks/bundle-CordabVC.js';
import OpenChannelMessage from './OpenChannelMessage.js';
import { MessageProvider } from '../../Message/context.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { u as useHandleOnScrollCallback } from '../../chunks/bundle-TcoRdnKH.js';
import { compareMessagesForGrouping } from '../../Channel/utils/compareMessagesForGrouping.js';
import '../../chunks/bundle-CnkNoe49.js';
import '../../chunks/bundle-Ck-Lg2K3.js';
import '../../chunks/bundle-pQHYhigr.js';
import '../../chunks/bundle-CbLNLMef.js';
import '../../chunks/bundle-B80WXNZi.js';
import '../../chunks/bundle-Di0Zwz2X.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-C3toIOqd.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import '../../chunks/bundle-ptS-tNRF.js';
import '../../chunks/bundle-BL0uQSu6.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-fwRBR_Yw.js';
import '../../chunks/bundle-DgxVBBM3.js';
import 'react-dom';
import '../../chunks/bundle-Bk1oUUzJ.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-gMJSD9hQ.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CHD1aKHO.js';
import '../../chunks/bundle-A5WEPjt6.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-BD8hNBsp.js';
import '../../chunks/bundle-YOpvheAB.js';
import '../../chunks/bundle-BUI77uOB.js';
import '../../chunks/bundle-CjhP75at.js';
import '../../chunks/bundle-D4fsEPre.js';
import '../../ui/OpenchannelUserMessage.js';
import '../../chunks/bundle-BbICJE5Z.js';
import '../../ui/ImageRenderer.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-BZaJy0ve.js';
import '../../chunks/bundle-iQUZ2efl.js';
import '../../chunks/bundle-B6cyKQvH.js';
import '../../ui/OpenChannelAdminMessage.js';
import '../../ui/OpenchannelOGMessage.js';
import '../../ui/LinkLabel.js';
import '../../chunks/bundle-D26kTqMa.js';
import '../../chunks/bundle-BS8ALexW.js';
import '../../ui/MentionLabel.js';
import '../../ui/OpenchannelThumbnailMessage.js';
import '../../ui/OpenchannelFileMessage.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-DUTd4XYU.js';
import '../../ui/DateSeparator.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-nLX43pTB.js';
import '../../chunks/bundle-DAH20nmQ.js';
import '../../chunks/bundle-Cs72eVze.js';
import 'dompurify';
import '../../chunks/bundle-D6pm-XK9.js';
import '../../chunks/bundle-DjodzqAP.js';
import '../../chunks/bundle-oU_AYCPg.js';
import '../../ui/FileViewer.js';
import '../../chunks/bundle-Dhkrx18n.js';
import '../../chunks/bundle-BD9MPCws.js';
import '../../chunks/bundle-CKpGqedk.js';
import '../../chunks/bundle-DnsBu59R.js';
import '@sendbird/chat/message';

function OpenChannelMessageList(props, ref) {
    var _a = useOpenChannelContext(), _b = _a.isMessageGroupingEnabled, isMessageGroupingEnabled = _b === void 0 ? true : _b, allMessages = _a.allMessages, hasMore = _a.hasMore, onScroll = _a.onScroll;
    var store = useSendbirdStateContext();
    var userId = store.config.userId;
    var localRef = useRef(null);
    var scrollRef = ref || localRef;
    var _c = useState(false), showScrollDownButton = _c[0], setShowScrollDownButton = _c[1];
    var scrollToBottom = function () {
        if (scrollRef && 'current' in scrollRef && scrollRef.current) {
            scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
            setShowScrollDownButton(false);
        }
    };
    var handleOnScroll = useHandleOnScrollCallback({
        setShowScrollDownButton: setShowScrollDownButton,
        hasMore: hasMore,
        onScroll: onScroll,
        scrollRef: scrollRef,
    });
    var memoizedMessageList = useMemo(function () {
        var _a;
        if (allMessages.length > 0) {
            return (allMessages.map(function (message, index) {
                var _a;
                var previousMessage = allMessages[index - 1];
                var nextMessage = allMessages[index - 1];
                var previousMessageCreatedAt = previousMessage && previousMessage.createdAt;
                var currentCreatedAt = message === null || message === void 0 ? void 0 : message.createdAt;
                // https://stackoverflow.com/a/41855608
                var hasSeparator = !(previousMessageCreatedAt && (isSameDay(currentCreatedAt, previousMessageCreatedAt)));
                var _b = isMessageGroupingEnabled
                    ? compareMessagesForGrouping(previousMessage, message, nextMessage)
                    : [false, false], chainTop = _b[0], chainBottom = _b[1];
                var isByMe = ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId) === userId;
                var key = (message === null || message === void 0 ? void 0 : message.messageId) || (message === null || message === void 0 ? void 0 : message.reqId);
                return (React__default.createElement(MessageProvider, { message: message, isByMe: isByMe, key: key },
                    React__default.createElement(OpenChannelMessage, { message: message, chainTop: chainTop, chainBottom: chainBottom, hasSeparator: hasSeparator, renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage })));
            }));
        }
        return (((_a = props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList) === null || _a === void 0 ? void 0 : _a.call(props)) || (React__default.createElement(PlaceHolder, { className: "sendbird-openchannel-conversation-scroll__container__place-holder", type: PlaceHolderTypes.NO_MESSAGES })));
    }, [allMessages]);
    return (React__default.createElement("div", { className: "sendbird-openchannel-conversation-scroll" },
        React__default.createElement("div", { className: "sendbird-openchannel-conversation-scroll__container" },
            React__default.createElement("div", { className: "sendbird-openchannel-conversation-scroll__container__padding" }),
            React__default.createElement("div", { className: [
                    'sendbird-openchannel-conversation-scroll__container__item-container',
                    (allMessages.length > 0) ? '' : 'no-messages',
                ].join(' '), onScroll: handleOnScroll, ref: scrollRef }, memoizedMessageList)),
        showScrollDownButton && (React__default.createElement("div", { className: "sendbird-openchannel-conversation-scroll__container__scroll-bottom-button", onClick: scrollToBottom, onKeyDown: scrollToBottom, tabIndex: 0, role: "button" },
            React__default.createElement(Icon, { width: "24px", height: "24px", type: IconTypes.CHEVRON_DOWN, fillColor: IconColors.CONTENT })))));
}
var OpenChannelMessageList$1 = React__default.forwardRef(OpenChannelMessageList);

export { OpenChannelMessageList$1 as default };
//# sourceMappingURL=OpenChannelMessageList.js.map
