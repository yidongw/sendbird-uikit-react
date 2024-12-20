'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var GroupChannel_context = require('../context.js');
var GroupChannelUIView = require('../../chunks/bundle-m_rlBsFo.js');
var GroupChannel_components_GroupChannelHeader = require('./GroupChannelHeader.js');
var GroupChannel_components_MessageList = require('./MessageList.js');
var GroupChannel_components_MessageInputWrapper = require('./MessageInputWrapper.js');
var utils = require('../../chunks/bundle-BYHj6UqH.js');
require('@sendbird/chat/message');
require('@sendbird/chat/groupChannel');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-Bn25Hepq.js');
require('../../withSendbird.js');
require('../../chunks/bundle-DfISCDoH.js');
require('../../chunks/bundle-e2d_I3io.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-C0tdWwa4.js');
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
require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-DkZ8dvkY.js');
require('../../chunks/bundle-DL9pw4YL.js');
require('../../chunks/bundle-CRtS_Hdn.js');
require('../../chunks/bundle-CxDaflMi.js');
require('../../chunks/bundle-DKimAemH.js');
require('../../chunks/bundle-Dcn1Gf-8.js');
require('../../chunks/bundle-Dim56WjD.js');
require('./TypingIndicator.js');
require('../../chunks/bundle-Bfs6deby.js');
require('../../ui/ConnectionStatus.js');
require('../../ui/PlaceHolder.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-BY9ZB-y7.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-Dmsb_oex.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../chunks/bundle-B1unRPhi.js');
require('../../chunks/bundle-CMB26qvu.js');
require('../../ui/Header.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-LSLwWEwG.js');
require('./Message.js');
require('../../chunks/bundle-ttq3NeTS.js');
require('../../chunks/bundle-C3e9xkw6.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../ui/DateSeparator.js');
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
require('../../chunks/bundle-DSQevcAL.js');
require('../../chunks/bundle-BayL2H8_.js');
require('../../chunks/bundle-CDQSndVh.js');
require('../../ui/MessageItemReactionMenu.js');
require('../../ui/ReactionButton.js');
require('../../chunks/bundle-CrV-FZvi.js');
require('../../ui/EmojiReactions.js');
require('../../ui/ReactionBadge.js');
require('../../ui/BottomSheet.js');
require('../../ui/UserListItem.js');
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
require('./FileViewer.js');
require('../../chunks/bundle-DFLAqRSF.js');
require('./RemoveMessageModal.js');
require('../../chunks/bundle-B1sxVEVf.js');
require('../../chunks/bundle-M6Urrta6.js');
require('./UnreadCount.js');
require('./FrozenNotification.js');
require('../../ui/TypingIndicatorBubble.js');
require('../../Channel/utils/getMessagePartsInfo.js');
require('../../Channel/utils/compareMessagesForGrouping.js');
require('../../chunks/bundle-CIP3LaaL.js');
require('../../chunks/bundle-goPOCuqE.js');
require('./SuggestedMentionList.js');
require('../../ui/QuoteMessageInput.js');
require('../../VoiceRecorder/useVoiceRecorder.js');
require('../../chunks/bundle-DLUxBAy9.js');
require('../../chunks/bundle-Ivv-MORg.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var GroupChannelUI = function (props) {
    var context = GroupChannel_context.useGroupChannelContext();
    var channelUrl = context.channelUrl, fetchChannelError = context.fetchChannelError;
    // Inject components to presentation layer
    var _a = utils.deleteNullish(props), _b = _a.renderChannelHeader, renderChannelHeader = _b === void 0 ? function (props) { return React__default.default.createElement(GroupChannel_components_GroupChannelHeader.GroupChannelHeader, _tslib.__assign({}, props)); } : _b, _c = _a.renderMessageList, renderMessageList = _c === void 0 ? function (props) { return React__default.default.createElement(GroupChannel_components_MessageList.MessageList, _tslib.__assign({}, props, { className: "sendbird-conversation__message-list" })); } : _c, _d = _a.renderMessageInput, renderMessageInput = _d === void 0 ? function () { return React__default.default.createElement(GroupChannel_components_MessageInputWrapper.MessageInputWrapper, _tslib.__assign({}, props)); } : _d;
    return (React__default.default.createElement(GroupChannelUIView.GroupChannelUIView, _tslib.__assign({}, props, context, { isInvalid: fetchChannelError !== null, channelUrl: channelUrl, renderChannelHeader: renderChannelHeader, renderMessageList: renderMessageList, renderMessageInput: renderMessageInput })));
};

exports.GroupChannelUI = GroupChannelUI;
exports.default = GroupChannelUI;
//# sourceMappingURL=GroupChannelUI.js.map
