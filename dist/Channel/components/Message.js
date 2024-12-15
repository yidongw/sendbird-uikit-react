import { _ as __assign } from '../../chunks/bundle-Ck-Lg2K3.js';
import React__default from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { useChannelContext } from '../context.js';
import { g as getSuggestedReplies } from '../../chunks/bundle-BL0uQSu6.js';
import { b as isDisabledBecauseFrozen, c as isDisabledBecauseMuted } from '../../chunks/bundle-DnsBu59R.js';
import { M as MessageView } from '../../chunks/bundle-C4JOx0OP.js';
import { FileViewer } from './FileViewer.js';
import RemoveMessageModal from './RemoveMessageModal.js';
import '../../withSendbird.js';
import '../../chunks/bundle-C3toIOqd.js';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-ptS-tNRF.js';
import '../../chunks/bundle-pQHYhigr.js';
import 'react-dom';
import '../../chunks/bundle-CbLNLMef.js';
import '../../chunks/bundle-B80WXNZi.js';
import '../../chunks/bundle-Bk1oUUzJ.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-Di0Zwz2X.js';
import '../../ui/Icon.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-gMJSD9hQ.js';
import '@sendbird/chat/openChannel';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-CHD1aKHO.js';
import '../../chunks/bundle-DgxVBBM3.js';
import '../../chunks/bundle-fwRBR_Yw.js';
import '../../chunks/bundle-A5WEPjt6.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-DAH20nmQ.js';
import '../../chunks/bundle-2HULaUfY.js';
import '../../chunks/bundle-D4fsEPre.js';
import '../../chunks/bundle-CnkNoe49.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-BhvKqaai.js';
import '../../chunks/bundle-BD8hNBsp.js';
import '../../chunks/bundle-DByz53YE.js';
import '../../chunks/bundle-C4W1gyaJ.js';
import '../../chunks/bundle-YOpvheAB.js';
import '../../chunks/bundle-oJ6bQnA_.js';
import '../../chunks/bundle-yYNXeh2L.js';
import '../../chunks/bundle-DknnqCJX.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-BT00z1C1.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-DUTd4XYU.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-nLX43pTB.js';
import '../../chunks/bundle-Cs72eVze.js';
import 'dompurify';
import '../../chunks/bundle-D6pm-XK9.js';
import '../../chunks/bundle-DjodzqAP.js';
import '../../chunks/bundle-oU_AYCPg.js';
import '../../chunks/bundle-BS8ALexW.js';
import '../../ui/MessageContent.js';
import '../../chunks/bundle-IQ2MguAG.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-BxmZCK6X.js';
import '../../chunks/bundle-B5oDG6vR.js';
import '../../chunks/bundle-MK34Xf8y.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/ImageRenderer.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-B6cyKQvH.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/BottomSheet.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-BbICJE5Z.js';
import '../../chunks/bundle-CjhP75at.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../Message/context.js';
import '../../ui/AdminMessage.js';
import '../../ui/QuoteMessage.js';
import '../../chunks/bundle-CxwGa1l3.js';
import '../../ui/MobileMenu.js';
import '../../ui/ThreadReplies.js';
import '../../chunks/bundle-BNGFpTQ2.js';
import '../../ui/OGMessageItemBody.js';
import '../../chunks/bundle-D26kTqMa.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../ui/TextMessageItemBody.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-BztO2DWM.js';
import '../../ui/FileViewer.js';
import '../../chunks/bundle-Dhkrx18n.js';
import '../../ui/VoiceMessageItemBody.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/TemplateMessageItemBody.js';
import '../../chunks/bundle-Mlk4FQsw.js';
import '../../ui/FallbackTemplateMessageItemBody.tsx.js';
import '../../ui/LoadingTemplateMessageItemBody.tsx.js';
import '../../ui/MessageFeedbackFailedModal.js';
import '../../ui/FeedbackIconButton.js';
import '../../ui/MobileFeedbackMenu.js';
import '../../ui/MessageFeedbackModal.js';
import '../../ui/Input.js';
import '../../chunks/bundle-DgN4UDUl.js';
import '../../GroupChannel/components/SuggestedReplies.js';
import '../../chunks/bundle-KZzhMils.js';
import '../../chunks/bundle-CFrRfSIT.js';
import '../../chunks/bundle-D5jak6m7.js';
import '../../chunks/bundle-BD9MPCws.js';

var Message = function (props) {
    var _a, _b;
    var config = useSendbirdStateContext().config;
    var _c = useChannelContext(), initialized = _c.initialized, currentGroupChannel = _c.currentGroupChannel, animatedMessageId = _c.animatedMessageId, setAnimatedMessageId = _c.setAnimatedMessageId, updateMessage = _c.updateMessage, scrollToMessage = _c.scrollToMessage, replyType = _c.replyType, threadReplySelectType = _c.threadReplySelectType, isReactionEnabled = _c.isReactionEnabled, toggleReaction = _c.toggleReaction, emojiContainer = _c.emojiContainer, nicknamesMap = _c.nicknamesMap, setQuoteMessage = _c.setQuoteMessage, resendMessage = _c.resendMessage, deleteMessage = _c.deleteMessage, renderUserMentionItem = _c.renderUserMentionItem, onReplyInThread = _c.onReplyInThread, onQuoteMessageClick = _c.onQuoteMessageClick, onMessageAnimated = _c.onMessageAnimated, sendMessage = _c.sendMessage, localMessages = _c.localMessages, allMessages = _c.allMessages;
    var message = props.message;
    if (!currentGroupChannel)
        return null;
    return (React__default.createElement(MessageView, __assign({}, props, { channel: currentGroupChannel, emojiContainer: emojiContainer, editInputDisabled: !initialized || isDisabledBecauseFrozen(currentGroupChannel) || isDisabledBecauseMuted(currentGroupChannel) || !config.isOnline, shouldRenderSuggestedReplies: ((_a = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _a === void 0 ? void 0 : _a.enableSuggestedReplies)
            && (((_b = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _b === void 0 ? void 0 : _b.showSuggestedRepliesFor) === 'all_messages'
                ? true
                : message.messageId === allMessages[allMessages.length - 1].messageId
            // Use `allMessages[allMessages.length - 1]` instead of `currentGroupChannel.lastMessage`
            // because lastMessage is not updated when **Bot** sends messages
            )
            // the options should appear only when there's no failed or pending messages
            && (localMessages === null || localMessages === void 0 ? void 0 : localMessages.length) === 0
            && getSuggestedReplies(message).length > 0, isReactionEnabled: isReactionEnabled, replyType: replyType, threadReplySelectType: threadReplySelectType, nicknamesMap: nicknamesMap, renderUserMentionItem: renderUserMentionItem, scrollToMessage: scrollToMessage, toggleReaction: toggleReaction, setQuoteMessage: setQuoteMessage, onQuoteMessageClick: onQuoteMessageClick, onReplyInThreadClick: onReplyInThread, sendUserMessage: function (params) {
            sendMessage({
                message: params.message,
                mentionedUsers: params.mentionedUsers,
                mentionTemplate: params.mentionedMessageTemplate,
            });
        }, updateUserMessage: function (messageId, params) {
            var _a;
            updateMessage({
                messageId: messageId,
                message: (_a = params.message) !== null && _a !== void 0 ? _a : '',
                mentionedUsers: params.mentionedUsers,
                mentionTemplate: params.mentionedMessageTemplate,
            });
        }, resendMessage: resendMessage, deleteMessage: deleteMessage, animatedMessageId: animatedMessageId, setAnimatedMessageId: setAnimatedMessageId, onMessageAnimated: onMessageAnimated, renderFileViewer: function (props) { return React__default.createElement(FileViewer, __assign({}, props)); }, renderRemoveMessageModal: function (props) { return React__default.createElement(RemoveMessageModal, __assign({}, props)); } })));
};

export { Message as default };
//# sourceMappingURL=Message.js.map
