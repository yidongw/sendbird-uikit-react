'use strict';

var _tslib = require('../../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var Channel_context = require('../context.js');
var index = require('../../chunks/bundle-e2d_I3io.js');
var utils = require('../../chunks/bundle-CIP3LaaL.js');
var MessageView = require('../../chunks/bundle-ttq3NeTS.js');
var Channel_components_FileViewer = require('./FileViewer.js');
var Channel_components_RemoveMessageModal = require('./RemoveMessageModal.js');
require('../../withSendbird.js');
require('../../chunks/bundle-Bn25Hepq.js');
require('@sendbird/uikit-tools');
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
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-CxDaflMi.js');
require('../../chunks/bundle-Dim56WjD.js');
require('../../chunks/bundle-C3e9xkw6.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-XTn8OOwy.js');
require('../../chunks/bundle-DrXG_ZI5.js');
require('../../chunks/bundle-CkLOqY_J.js');
require('../../chunks/bundle-BO0JOImE.js');
require('../../chunks/bundle-Dcn1Gf-8.js');
require('../../chunks/bundle-DkZ8dvkY.js');
require('../../chunks/bundle-DL9pw4YL.js');
require('../../chunks/bundle-DrPixXq9.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-CRtS_Hdn.js');
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
require('../../GroupChannel/components/SuggestedReplies.js');
require('../../chunks/bundle-3ucLy5RS.js');
require('../../chunks/bundle-DFLAqRSF.js');
require('../../chunks/bundle-B1sxVEVf.js');
require('../../chunks/bundle-M6Urrta6.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var Message = function (props) {
    var _a, _b;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var _c = Channel_context.useChannelContext(), initialized = _c.initialized, currentGroupChannel = _c.currentGroupChannel, animatedMessageId = _c.animatedMessageId, setAnimatedMessageId = _c.setAnimatedMessageId, updateMessage = _c.updateMessage, scrollToMessage = _c.scrollToMessage, replyType = _c.replyType, threadReplySelectType = _c.threadReplySelectType, isReactionEnabled = _c.isReactionEnabled, toggleReaction = _c.toggleReaction, emojiContainer = _c.emojiContainer, nicknamesMap = _c.nicknamesMap, setQuoteMessage = _c.setQuoteMessage, resendMessage = _c.resendMessage, deleteMessage = _c.deleteMessage, renderUserMentionItem = _c.renderUserMentionItem, onReplyInThread = _c.onReplyInThread, onQuoteMessageClick = _c.onQuoteMessageClick, onMessageAnimated = _c.onMessageAnimated, sendMessage = _c.sendMessage, localMessages = _c.localMessages, allMessages = _c.allMessages;
    var message = props.message;
    if (!currentGroupChannel)
        return null;
    return (React__default.default.createElement(MessageView.MessageView, _tslib.__assign({}, props, { channel: currentGroupChannel, emojiContainer: emojiContainer, editInputDisabled: !initialized || utils.isDisabledBecauseFrozen(currentGroupChannel) || utils.isDisabledBecauseMuted(currentGroupChannel) || !config.isOnline, shouldRenderSuggestedReplies: ((_a = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _a === void 0 ? void 0 : _a.enableSuggestedReplies)
            && (((_b = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _b === void 0 ? void 0 : _b.showSuggestedRepliesFor) === 'all_messages'
                ? true
                : message.messageId === allMessages[allMessages.length - 1].messageId
            // Use `allMessages[allMessages.length - 1]` instead of `currentGroupChannel.lastMessage`
            // because lastMessage is not updated when **Bot** sends messages
            )
            // the options should appear only when there's no failed or pending messages
            && (localMessages === null || localMessages === void 0 ? void 0 : localMessages.length) === 0
            && index.getSuggestedReplies(message).length > 0, isReactionEnabled: isReactionEnabled, replyType: replyType, threadReplySelectType: threadReplySelectType, nicknamesMap: nicknamesMap, renderUserMentionItem: renderUserMentionItem, scrollToMessage: scrollToMessage, toggleReaction: toggleReaction, setQuoteMessage: setQuoteMessage, onQuoteMessageClick: onQuoteMessageClick, onReplyInThreadClick: onReplyInThread, sendUserMessage: function (params) {
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
        }, resendMessage: resendMessage, deleteMessage: deleteMessage, animatedMessageId: animatedMessageId, setAnimatedMessageId: setAnimatedMessageId, onMessageAnimated: onMessageAnimated, renderFileViewer: function (props) { return React__default.default.createElement(Channel_components_FileViewer.FileViewer, _tslib.__assign({}, props)); }, renderRemoveMessageModal: function (props) { return React__default.default.createElement(Channel_components_RemoveMessageModal, _tslib.__assign({}, props)); } })));
};

module.exports = Message;
//# sourceMappingURL=Message.js.map
