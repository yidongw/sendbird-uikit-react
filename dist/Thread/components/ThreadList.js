import { _ as __assign } from '../../chunks/bundle-Ck-Lg2K3.js';
import React__default from 'react';
import ThreadListItem from './ThreadListItem.js';
import { useThreadContext } from '../context.js';
import { compareMessagesForGrouping } from '../../Channel/utils/compareMessagesForGrouping.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { isSameDay } from 'date-fns';
import { MessageProvider } from '../../Message/context.js';
import { g as getCaseResolvedReplyType } from '../../chunks/bundle-yYNXeh2L.js';
import '../../chunks/bundle-D4fsEPre.js';
import '../../chunks/bundle-CnkNoe49.js';
import '../../chunks/bundle-CbLNLMef.js';
import '../../chunks/bundle-B80WXNZi.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-DUTd4XYU.js';
import '../../chunks/bundle-Di0Zwz2X.js';
import '../../chunks/bundle-DxS9au3G.js';
import '../../chunks/bundle-ptS-tNRF.js';
import '../../chunks/bundle-BL0uQSu6.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-fwRBR_Yw.js';
import '../../chunks/bundle-DgxVBBM3.js';
import '../../chunks/bundle-pQHYhigr.js';
import 'react-dom';
import '../../chunks/bundle-Bk1oUUzJ.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../ui/Icon.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-gMJSD9hQ.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CHD1aKHO.js';
import '../../chunks/bundle-A5WEPjt6.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-BD9MPCws.js';
import '../../ui/FileViewer.js';
import '../../chunks/bundle-BbICJE5Z.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-CjhP75at.js';
import '../../chunks/bundle-Dhkrx18n.js';
import '../../chunks/bundle-C_hBU-VS.js';
import '../../chunks/bundle-KZzhMils.js';
import '../../chunks/bundle-DAH20nmQ.js';
import '../../chunks/bundle-nLX43pTB.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-Cs72eVze.js';
import 'dompurify';
import '../../chunks/bundle-D6pm-XK9.js';
import '../../chunks/bundle-DjodzqAP.js';
import '../../chunks/bundle-oU_AYCPg.js';
import '../../chunks/bundle-BS8ALexW.js';
import '../context/types.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-B6cyKQvH.js';
import '../../chunks/bundle-IQ2MguAG.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-BxmZCK6X.js';
import '../../chunks/bundle-B5oDG6vR.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/BottomSheet.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-C3toIOqd.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-YOpvheAB.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../chunks/bundle-2HULaUfY.js';
import '../../ui/MobileMenu.js';
import '../../chunks/bundle-BztO2DWM.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-MK34Xf8y.js';
import '../../chunks/bundle-DgN4UDUl.js';
import '../../chunks/bundle-BNGFpTQ2.js';
import '../../ui/OGMessageItemBody.js';
import '../../chunks/bundle-D26kTqMa.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../ui/TextMessageItemBody.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/TextButton.js';
import '../../ui/VoiceMessageItemBody.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../chunks/bundle-CxwGa1l3.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/TemplateMessageItemBody.js';
import '../../chunks/bundle-Mlk4FQsw.js';
import '../../ui/FallbackTemplateMessageItemBody.tsx.js';
import '../../ui/LoadingTemplateMessageItemBody.tsx.js';
import '../../ui/MessageFeedbackFailedModal.js';
import '../../chunks/bundle-BT00z1C1.js';
import '../../chunks/bundle-BMUVlu6F.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../chunks/bundle-DknnqCJX.js';
import '../../chunks/bundle-DnsBu59R.js';
import '../../chunks/bundle-BhvKqaai.js';
import '../../chunks/bundle-BD8hNBsp.js';

function ThreadList(_a) {
    var className = _a.className, _b = _a.renderMessage, renderMessage = _b === void 0 ? function (props) { return React__default.createElement(ThreadListItem, __assign({}, props)); } : _b, renderCustomSeparator = _a.renderCustomSeparator, scrollRef = _a.scrollRef, scrollBottom = _a.scrollBottom;
    var config = useSendbirdStateContext().config;
    var userId = config.userId;
    var _c = useThreadContext(), currentChannel = _c.currentChannel, allThreadMessages = _c.allThreadMessages, localThreadMessages = _c.localThreadMessages;
    return (React__default.createElement("div", { className: "sendbird-thread-list ".concat(className) },
        allThreadMessages.map(function (message, idx) {
            var _a;
            var isByMe = ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId) === userId;
            var prevMessage = allThreadMessages[idx - 1];
            var nextMessage = allThreadMessages[idx + 1];
            // eslint-disable-next-line no-constant-condition
            var _b = compareMessagesForGrouping(prevMessage, message, nextMessage, currentChannel, getCaseResolvedReplyType(config.groupChannel.replyType).upperCase)
                , chainTop = _b[0], chainBottom = _b[1];
            var hasSeparator = !((prevMessage === null || prevMessage === void 0 ? void 0 : prevMessage.createdAt) > 0 && (isSameDay(message === null || message === void 0 ? void 0 : message.createdAt, prevMessage === null || prevMessage === void 0 ? void 0 : prevMessage.createdAt)));
            var handleScroll = function () {
                var current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;
                if (current && scrollBottom) {
                    var bottom = current.scrollHeight - current.scrollTop - current.offsetHeight;
                    if (scrollBottom < bottom) {
                        current.scrollTop += bottom - scrollBottom;
                    }
                }
            };
            return (React__default.createElement(MessageProvider, { message: message, isByMe: isByMe, key: message === null || message === void 0 ? void 0 : message.messageId }, renderMessage({
                message: message,
                chainTop: chainTop,
                chainBottom: chainBottom,
                hasSeparator: hasSeparator,
                renderCustomSeparator: renderCustomSeparator,
                handleScroll: handleScroll,
            })));
        }),
        localThreadMessages.map(function (message) {
            var _a;
            var isByMe = ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId) === userId;
            var handleScroll = function () {
                var current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;
                if (current) {
                    var bottom = current.scrollHeight - current.scrollTop - current.offsetHeight;
                    if (scrollBottom < bottom) {
                        current.scrollTop += bottom - scrollBottom;
                    }
                }
            };
            return (React__default.createElement(MessageProvider, { message: message, isByMe: isByMe, key: message === null || message === void 0 ? void 0 : message.messageId }, renderMessage({
                message: message,
                hasSeparator: false,
                renderCustomSeparator: renderCustomSeparator,
                handleScroll: handleScroll,
            })));
        })));
}

export { ThreadList as default };
//# sourceMappingURL=ThreadList.js.map
