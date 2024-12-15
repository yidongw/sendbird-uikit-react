'use strict';

var _tslib = require('../../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var Channel_context = require('../context.js');
var index = require('../../chunks/bundle-BLoixwYr.js');
var utils = require('../../chunks/bundle-BNuA_uqY.js');
var MessageView = require('../../chunks/bundle-DcAbHyPY.js');
var Channel_components_FileViewer = require('./FileViewer.js');
var Channel_components_RemoveMessageModal = require('./RemoveMessageModal.js');
require('../../withSendbird.js');
require('../../chunks/bundle-DgjptBQW.js');
require('@sendbird/uikit-tools');
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
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-CtHeiC70.js');
require('../../chunks/bundle-CVdJh4P7.js');
require('../../chunks/bundle-DspSuA8e.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-wYxshM30.js');
require('../../chunks/bundle-Dh0NAI0D.js');
require('../../chunks/bundle-Clu2jOAp.js');
require('../../chunks/bundle-DrScP7Am.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../chunks/bundle-CpJ9tVDn.js');
require('../../chunks/bundle-DvvdekCh.js');
require('../../chunks/bundle-Bs36T7L5.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-w0Wt2aBx.js');
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
require('../../GroupChannel/components/SuggestedReplies.js');
require('../../chunks/bundle-kFYCld9C.js');
require('../../chunks/bundle-D-EFC7w9.js');
require('../../chunks/bundle-BJ_HBGTK.js');
require('../../chunks/bundle-CzLnk6wC.js');

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
