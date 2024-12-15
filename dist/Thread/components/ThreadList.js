import { _ as __assign } from '../../chunks/bundle-HcNswZ5p.js';
import React__default from 'react';
import ThreadListItem from './ThreadListItem.js';
import { useThreadContext } from '../context.js';
import { compareMessagesForGrouping } from '../../Channel/utils/compareMessagesForGrouping.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { isSameDay } from 'date-fns';
import { MessageProvider } from '../../Message/context.js';
import { g as getCaseResolvedReplyType } from '../../chunks/bundle-CUhgRMBc.js';
import '../../chunks/bundle-D4JzAgen.js';
import '../../chunks/bundle-DB7YSrIT.js';
import '../../chunks/bundle-DhMUg-L7.js';
import '../../chunks/bundle-dybWaw0v.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-DGMsaaNU.js';
import '../../chunks/bundle-Qkp2VIaZ.js';
import '../../chunks/bundle-C7ocx9AB.js';
import '../../chunks/bundle-ja8H3E0K.js';
import '../../chunks/bundle-Bd-i99nk.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DjLJFwD7.js';
import '../../chunks/bundle-DQk0aENq.js';
import '../../chunks/bundle-0WaCg6X7.js';
import 'react-dom';
import '../../chunks/bundle-DnSobLtx.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../ui/Icon.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../chunks/bundle-BKzcG-aC.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-BzEzK7wl.js';
import '../../ui/FileViewer.js';
import '../../chunks/bundle-2pbuHA3C.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-DkDQ1PWY.js';
import '../../chunks/bundle-A7zrKt0i.js';
import '../../chunks/bundle-Bpffa6Xa.js';
import '../../chunks/bundle-BYBFk8ow.js';
import '../../chunks/bundle-CijxkMjj.js';
import '../../chunks/bundle-lUbYBD0x.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-Bf0OMYby.js';
import 'dompurify';
import '../../chunks/bundle-DCxt9PzH.js';
import '../../chunks/bundle-BddSUitu.js';
import '../../chunks/bundle-DLG7S88z.js';
import '../../chunks/bundle-BvQmfZZv.js';
import '../context/types.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-B6yWIKOT.js';
import '../../chunks/bundle-Biuu5CVW.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-BDE05Tho.js';
import '../../chunks/bundle-DfmFm_nl.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/BottomSheet.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-B91Bhfde.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-BwmZGijR.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../chunks/bundle-CuavrWk1.js';
import '../../ui/MobileMenu.js';
import '../../chunks/bundle-CW5sRqha.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-X8EPLaoY.js';
import '../../chunks/bundle-Cnmz5VIU.js';
import '../../chunks/bundle-C5pqGUL_.js';
import '../../ui/OGMessageItemBody.js';
import '../../chunks/bundle-CYbqxz_s.js';
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
import '../../chunks/bundle-B_TSibjC.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/TemplateMessageItemBody.js';
import '../../chunks/bundle-CvDJ0OhP.js';
import '../../ui/FallbackTemplateMessageItemBody.tsx.js';
import '../../ui/LoadingTemplateMessageItemBody.tsx.js';
import '../../ui/MessageFeedbackFailedModal.js';
import '../../chunks/bundle-BB4cJn39.js';
import '../../chunks/bundle-BixCOuL9.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../chunks/bundle-B43UOaqG.js';
import '../../chunks/bundle-D-F3KakE.js';
import '../../chunks/bundle-DDTq-6FS.js';
import '../../chunks/bundle-zVlBKrSk.js';

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
