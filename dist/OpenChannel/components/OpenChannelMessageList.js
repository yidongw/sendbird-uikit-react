import React__default, { useRef, useState, useMemo } from 'react';
import { i as isSameDay } from '../../chunks/bundle-DfmFm_nl.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import PlaceHolder, { PlaceHolderTypes } from '../../ui/PlaceHolder.js';
import { u as useOpenChannelContext } from '../../chunks/bundle-7CrSPht7.js';
import OpenChannelMessage from './OpenChannelMessage.js';
import { MessageProvider } from '../../Message/context.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { u as useHandleOnScrollCallback } from '../../chunks/bundle-DzijJyIT.js';
import { compareMessagesForGrouping } from '../../Channel/utils/compareMessagesForGrouping.js';
import '../../chunks/bundle-DB7YSrIT.js';
import '../../chunks/bundle-HcNswZ5p.js';
import '../../chunks/bundle-0WaCg6X7.js';
import '../../chunks/bundle-DhMUg-L7.js';
import '../../chunks/bundle-dybWaw0v.js';
import '../../chunks/bundle-Qkp2VIaZ.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-B91Bhfde.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import '../../chunks/bundle-ja8H3E0K.js';
import '../../chunks/bundle-Bd-i99nk.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DjLJFwD7.js';
import '../../chunks/bundle-DQk0aENq.js';
import 'react-dom';
import '../../chunks/bundle-DnSobLtx.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../chunks/bundle-BKzcG-aC.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-zVlBKrSk.js';
import '../../chunks/bundle-BwmZGijR.js';
import '../../chunks/bundle-HPKdeJ0K.js';
import '../../chunks/bundle-DkDQ1PWY.js';
import '../../chunks/bundle-D4JzAgen.js';
import '../../ui/OpenchannelUserMessage.js';
import '../../chunks/bundle-2pbuHA3C.js';
import '../../ui/ImageRenderer.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-Du354JpK.js';
import '../../chunks/bundle-2DP5xDcL.js';
import '../../chunks/bundle-B6yWIKOT.js';
import '../../ui/OpenChannelAdminMessage.js';
import '../../ui/OpenchannelOGMessage.js';
import '../../ui/LinkLabel.js';
import '../../chunks/bundle-CYbqxz_s.js';
import '../../chunks/bundle-BvQmfZZv.js';
import '../../ui/MentionLabel.js';
import '../../ui/OpenchannelThumbnailMessage.js';
import '../../ui/OpenchannelFileMessage.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-DGMsaaNU.js';
import '../../ui/DateSeparator.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-lUbYBD0x.js';
import '../../chunks/bundle-CijxkMjj.js';
import '../../chunks/bundle-Bf0OMYby.js';
import 'dompurify';
import '../../chunks/bundle-DCxt9PzH.js';
import '../../chunks/bundle-BddSUitu.js';
import '../../chunks/bundle-DLG7S88z.js';
import '../../ui/FileViewer.js';
import '../../chunks/bundle-A7zrKt0i.js';
import '../../chunks/bundle-BzEzK7wl.js';
import '../../chunks/bundle-tnPVKzs2.js';
import '../../chunks/bundle-D-F3KakE.js';
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
