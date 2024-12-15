'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var uikitTools = require('@sendbird/uikit-tools');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var index = require('../../chunks/bundle-e2d_I3io.js');
var utils = require('../../chunks/bundle-CRtS_Hdn.js');
var GroupChannel_context = require('../context.js');
var MessageView = require('../../chunks/bundle-ttq3NeTS.js');
var GroupChannel_components_FileViewer = require('./FileViewer.js');
var GroupChannel_components_RemoveMessageModal = require('./RemoveMessageModal.js');
var _const = require('../../chunks/bundle-CxDaflMi.js');
require('../../withSendbird.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-Bn25Hepq.js');
require('../../chunks/bundle-DfISCDoH.js');
require('../../chunks/bundle-BYHj6UqH.js');
require('react-dom');
require('../../chunks/bundle-CmBrGegh.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../chunks/bundle-CzcmYPsN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-D8-2bEdY.js');
require('../../ui/Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-DkZ8dvkY.js');
require('../../chunks/bundle-DL9pw4YL.js');
require('../../chunks/bundle-DKimAemH.js');
require('../../chunks/bundle-Dcn1Gf-8.js');
require('../../chunks/bundle-Dim56WjD.js');
require('../../chunks/bundle-C3e9xkw6.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../ui/DateSeparator.js');
require('../../chunks/bundle-LSLwWEwG.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-CsHnjhet.js');
require('../../chunks/bundle-C9DxbvFZ.js');
require('dompurify');
require('../../chunks/bundle-DhOkJsb_.js');
require('../../chunks/bundle-BHlqknCd.js');
require('../../chunks/bundle-tu3X3qzD.js');
require('../../chunks/bundle-CZ8XCEGd.js');
require('../../ui/MessageContent.js');
require('../../chunks/bundle-C8j790_0.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-DSQevcAL.js');
require('../../chunks/bundle-BayL2H8_.js');
require('../../chunks/bundle-CDQSndVh.js');
require('../../ui/MessageItemReactionMenu.js');
require('../../ui/ImageRenderer.js');
require('../../ui/ReactionButton.js');
require('../../chunks/bundle-CrV-FZvi.js');
require('../../ui/EmojiReactions.js');
require('../../ui/ReactionBadge.js');
require('../../ui/BottomSheet.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-Dmsb_oex.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../Message/context.js');
require('../../ui/AdminMessage.js');
require('../../ui/QuoteMessage.js');
require('../../chunks/bundle-CMe3c_v7.js');
require('../../ui/MobileMenu.js');
require('../../ui/ThreadReplies.js');
require('../../chunks/bundle-DE83rtdv.js');
require('../../ui/OGMessageItemBody.js');
require('../../chunks/bundle-C9AThBV0.js');
require('../../ui/MentionLabel.js');
require('../../ui/LinkLabel.js');
require('../../ui/TextMessageItemBody.js');
require('../../ui/FileMessageItemBody.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-D5dbLMqr.js');
require('../../ui/FileViewer.js');
require('../../chunks/bundle-XkouAzOQ.js');
require('../../ui/VoiceMessageItemBody.js');
require('../../ui/ProgressBar.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../ui/PlaybackTime.js');
require('../../ui/ThumbnailMessageItemBody.js');
require('../../ui/UnknownMessageItemBody.js');
require('../../ui/TemplateMessageItemBody.js');
require('../../chunks/bundle-TKyDCiE_.js');
require('../../ui/FallbackTemplateMessageItemBody.tsx.js');
require('../../ui/LoadingTemplateMessageItemBody.tsx.js');
require('../../ui/MessageFeedbackFailedModal.js');
require('../../ui/FeedbackIconButton.js');
require('../../ui/MobileFeedbackMenu.js');
require('../../ui/MessageFeedbackModal.js');
require('../../ui/Input.js');
require('../../chunks/bundle-DS66lTJo.js');
require('./SuggestedReplies.js');
require('../../chunks/bundle-3ucLy5RS.js');
require('../../chunks/bundle-DFLAqRSF.js');
require('../../chunks/bundle-B1sxVEVf.js');
require('../../chunks/bundle-M6Urrta6.js');

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
