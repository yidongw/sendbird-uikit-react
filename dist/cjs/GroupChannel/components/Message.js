'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var uikitTools = require('@sendbird/uikit-tools');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var index = require('../../chunks/bundle-BLoixwYr.js');
var utils = require('../../chunks/bundle-w0Wt2aBx.js');
var GroupChannel_context = require('../context.js');
var MessageView = require('../../chunks/bundle-DcAbHyPY.js');
var GroupChannel_components_FileViewer = require('./FileViewer.js');
var GroupChannel_components_RemoveMessageModal = require('./RemoveMessageModal.js');
var _const = require('../../chunks/bundle-CtHeiC70.js');
require('../../withSendbird.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-DgjptBQW.js');
require('../../chunks/bundle-DZhkNDpN.js');
require('../../chunks/bundle-Ck6ikNW6.js');
require('react-dom');
require('../../chunks/bundle-Cy1ruNzs.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-CAR4EIKs.js');
require('../../ui/Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-CpJ9tVDn.js');
require('../../chunks/bundle-DvvdekCh.js');
require('../../chunks/bundle-CzBskCon.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../chunks/bundle-CVdJh4P7.js');
require('../../chunks/bundle-DspSuA8e.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../ui/DateSeparator.js');
require('../../chunks/bundle-CLzI6bbe.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-CfV7jROn.js');
require('../../chunks/bundle-CCtdwkHe.js');
require('dompurify');
require('../../chunks/bundle-By5v4zYf.js');
require('../../chunks/bundle-DobO_BAb.js');
require('../../chunks/bundle-BaSZqehS.js');
require('../../chunks/bundle-BIkitklZ.js');
require('../../ui/MessageContent.js');
require('../../chunks/bundle-BQHwJ1ZS.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-f7s_1xF4.js');
require('../../chunks/bundle-Cc6_UMK4.js');
require('../../chunks/bundle-BUXIG4fk.js');
require('../../ui/MessageItemReactionMenu.js');
require('../../ui/ImageRenderer.js');
require('../../ui/ReactionButton.js');
require('../../chunks/bundle-D_k3_Y_y.js');
require('../../ui/EmojiReactions.js');
require('../../ui/ReactionBadge.js');
require('../../ui/BottomSheet.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../Message/context.js');
require('../../ui/AdminMessage.js');
require('../../ui/QuoteMessage.js');
require('../../chunks/bundle-DEjC6RIv.js');
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
require('../../chunks/bundle-D-EFC7w9.js');
require('../../chunks/bundle-BJ_HBGTK.js');
require('../../chunks/bundle-CzLnk6wC.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var Message = function (props) {
    var _a = useSendbirdStateContext.useSendbirdStateContext(), config = _a.config, emojiManager = _a.emojiManager;
    var _b = GroupChannel_context.useGroupChannelContext(), loading = _b.loading, currentChannel = _b.currentChannel, animatedMessageId = _b.animatedMessageId, setAnimatedMessageId = _b.setAnimatedMessageId, scrollToMessage = _b.scrollToMessage, replyType = _b.replyType, threadReplySelectType = _b.threadReplySelectType, isReactionEnabled = _b.isReactionEnabled, toggleReaction = _b.toggleReaction, nicknamesMap = _b.nicknamesMap, setQuoteMessage = _b.setQuoteMessage, renderUserMentionItem = _b.renderUserMentionItem, filterEmojiCategoryIds = _b.filterEmojiCategoryIds, onQuoteMessageClick = _b.onQuoteMessageClick, onReplyInThreadClick = _b.onReplyInThreadClick, onMessageAnimated = _b.onMessageAnimated, onBeforeDownloadFileMessage = _b.onBeforeDownloadFileMessage, messages = _b.messages, updateUserMessage = _b.updateUserMessage, sendUserMessage = _b.sendUserMessage, resendMessage = _b.resendMessage, deleteMessage = _b.deleteMessage;
    var message = props.message;
    var initialized = !loading && Boolean(currentChannel);
    var shouldRenderSuggestedReplies = uikitTools.useIIFE(function () {
        var _a = config.groupChannel, enableSuggestedReplies = _a.enableSuggestedReplies, showSuggestedRepliesFor = _a.showSuggestedRepliesFor;
        // Use `allMessages[allMessages.length - 1]` instead of `currentGroupChannel.lastMessage`
        // because lastMessage is not updated when **Bot** sends messages
        var lastMessageInView = messages[messages.length - 1];
        var hasUnsentMessage = index.isSendableMessage(lastMessageInView) && lastMessageInView.sendingStatus !== 'succeeded';
        var showSuggestedReplies = showSuggestedRepliesFor === 'all_messages'
            ? true
            : message.messageId === lastMessageInView.messageId;
        return enableSuggestedReplies && index.getSuggestedReplies(message).length > 0 && !hasUnsentMessage && showSuggestedReplies;
    });
    return (React__default.default.createElement(MessageView.MessageView, _tslib.__assign({}, props, { channel: currentChannel, emojiContainer: emojiManager.emojiContainer, editInputDisabled: !initialized
            || utils.isDisabledBecauseFrozen(currentChannel !== null && currentChannel !== void 0 ? currentChannel : undefined)
            || utils.isDisabledBecauseMuted(currentChannel !== null && currentChannel !== void 0 ? currentChannel : undefined)
            || !config.isOnline, shouldRenderSuggestedReplies: shouldRenderSuggestedReplies, isReactionEnabled: isReactionEnabled !== null && isReactionEnabled !== void 0 ? isReactionEnabled : false, replyType: replyType !== null && replyType !== void 0 ? replyType : 'NONE', threadReplySelectType: threadReplySelectType !== null && threadReplySelectType !== void 0 ? threadReplySelectType : _const.ThreadReplySelectType.PARENT, nicknamesMap: nicknamesMap, renderUserMentionItem: renderUserMentionItem, filterEmojiCategoryIds: filterEmojiCategoryIds, scrollToMessage: scrollToMessage, toggleReaction: toggleReaction, setQuoteMessage: setQuoteMessage, onQuoteMessageClick: onQuoteMessageClick, onReplyInThreadClick: onReplyInThreadClick, sendUserMessage: sendUserMessage, updateUserMessage: updateUserMessage, resendMessage: resendMessage, deleteMessage: deleteMessage, animatedMessageId: animatedMessageId, setAnimatedMessageId: setAnimatedMessageId, onMessageAnimated: onMessageAnimated, renderFileViewer: function (props) { return React__default.default.createElement(GroupChannel_components_FileViewer.FileViewer, _tslib.__assign({}, props)); }, renderRemoveMessageModal: function (props) { return React__default.default.createElement(GroupChannel_components_RemoveMessageModal.RemoveMessageModal, _tslib.__assign({}, props)); }, usedInLegacy: false, onBeforeDownloadFileMessage: onBeforeDownloadFileMessage })));
};

exports.Message = Message;
exports.default = Message;
//# sourceMappingURL=Message.js.map
