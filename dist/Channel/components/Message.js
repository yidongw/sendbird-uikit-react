import { _ as __assign } from '../../chunks/bundle-HcNswZ5p.js';
import React__default from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { useChannelContext } from '../context.js';
import { g as getSuggestedReplies } from '../../chunks/bundle-Bd-i99nk.js';
import { b as isDisabledBecauseFrozen, c as isDisabledBecauseMuted } from '../../chunks/bundle-D-F3KakE.js';
import { M as MessageView } from '../../chunks/bundle-8I0oGHOc.js';
import { FileViewer } from './FileViewer.js';
import RemoveMessageModal from './RemoveMessageModal.js';
import '../../withSendbird.js';
import '../../chunks/bundle-B91Bhfde.js';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-ja8H3E0K.js';
import '../../chunks/bundle-0WaCg6X7.js';
import 'react-dom';
import '../../chunks/bundle-DhMUg-L7.js';
import '../../chunks/bundle-dybWaw0v.js';
import '../../chunks/bundle-DnSobLtx.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-Qkp2VIaZ.js';
import '../../ui/Icon.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../chunks/bundle-DQk0aENq.js';
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
import '../../ui/Loader.js';
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
import '../../Message/context.js';
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
import '../../chunks/bundle-mGA-NFf6.js';
import '../../chunks/bundle-CCwC3Lit.js';
import '../../chunks/bundle-BzEzK7wl.js';

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
