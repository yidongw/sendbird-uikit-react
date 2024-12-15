'use strict';

var _tslib = require('../../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var Thread_components_ThreadListItem = require('./ThreadListItem.js');
var Thread_context = require('../context.js');
var Channel_utils_compareMessagesForGrouping = require('../../Channel/utils/compareMessagesForGrouping.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var dateFns = require('date-fns');
var Message_context = require('../../Message/context.js');
var resolvedReplyType = require('../../chunks/bundle-DL9pw4YL.js');
require('../../chunks/bundle-C3e9xkw6.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-CmBrGegh.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../ui/DateSeparator.js');
require('../../chunks/bundle-LSLwWEwG.js');
require('../../chunks/bundle-D8-2bEdY.js');
require('../../chunks/bundle-Dt82hn3m.js');
require('../../chunks/bundle-DfISCDoH.js');
require('../../chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('../../chunks/bundle-BYHj6UqH.js');
require('react-dom');
require('../../chunks/bundle-CzcmYPsN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../ui/Icon.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-M6Urrta6.js');
require('../../ui/FileViewer.js');
require('../../chunks/bundle-Dmsb_oex.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../chunks/bundle-XkouAzOQ.js');
require('../../chunks/bundle-BnciA98a.js');
require('../../chunks/bundle-3ucLy5RS.js');
require('../../chunks/bundle-CxDaflMi.js');
require('../../chunks/bundle-CsHnjhet.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-C9DxbvFZ.js');
require('dompurify');
require('../../chunks/bundle-DhOkJsb_.js');
require('../../chunks/bundle-BHlqknCd.js');
require('../../chunks/bundle-tu3X3qzD.js');
require('../../chunks/bundle-CZ8XCEGd.js');
require('../context/types.js');
require('../../ui/MessageItemReactionMenu.js');
require('../../ui/ReactionButton.js');
require('../../chunks/bundle-CrV-FZvi.js');
require('../../chunks/bundle-C8j790_0.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-DSQevcAL.js');
require('../../chunks/bundle-BayL2H8_.js');
require('../../ui/EmojiReactions.js');
require('../../ui/ReactionBadge.js');
require('../../ui/BottomSheet.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-Bn25Hepq.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-Dcn1Gf-8.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../chunks/bundle-Dim56WjD.js');
require('../../ui/MobileMenu.js');
require('../../chunks/bundle-D5dbLMqr.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-CDQSndVh.js');
require('../../chunks/bundle-DS66lTJo.js');
require('../../chunks/bundle-DE83rtdv.js');
require('../../ui/OGMessageItemBody.js');
require('../../chunks/bundle-C9AThBV0.js');
require('../../ui/MentionLabel.js');
require('../../ui/LinkLabel.js');
require('../../ui/TextMessageItemBody.js');
require('../../ui/FileMessageItemBody.js');
require('../../ui/TextButton.js');
require('../../ui/VoiceMessageItemBody.js');
require('../../ui/ProgressBar.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../ui/PlaybackTime.js');
require('../../ui/ThumbnailMessageItemBody.js');
require('../../chunks/bundle-CMe3c_v7.js');
require('../../ui/UnknownMessageItemBody.js');
require('../../ui/TemplateMessageItemBody.js');
require('../../chunks/bundle-TKyDCiE_.js');
require('../../ui/FallbackTemplateMessageItemBody.tsx.js');
require('../../ui/LoadingTemplateMessageItemBody.tsx.js');
require('../../ui/MessageFeedbackFailedModal.js');
require('../../chunks/bundle-CRtS_Hdn.js');
require('../../chunks/bundle-Dke6QHpR.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../chunks/bundle-DrPixXq9.js');
require('../../chunks/bundle-CIP3LaaL.js');
require('../../chunks/bundle-XTn8OOwy.js');
require('../../chunks/bundle-DrXG_ZI5.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function ThreadList(_a) {
    var className = _a.className, _b = _a.renderMessage, renderMessage = _b === void 0 ? function (props) { return React__default.default.createElement(Thread_components_ThreadListItem, _tslib.__assign({}, props)); } : _b, renderCustomSeparator = _a.renderCustomSeparator, scrollRef = _a.scrollRef, scrollBottom = _a.scrollBottom;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var userId = config.userId;
    var _c = Thread_context.useThreadContext(), currentChannel = _c.currentChannel, allThreadMessages = _c.allThreadMessages, localThreadMessages = _c.localThreadMessages;
    return (React__default.default.createElement("div", { className: "sendbird-thread-list ".concat(className) },
        allThreadMessages.map(function (message, idx) {
            var _a;
            var isByMe = ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId) === userId;
            var prevMessage = allThreadMessages[idx - 1];
            var nextMessage = allThreadMessages[idx + 1];
            // eslint-disable-next-line no-constant-condition
            var _b = Channel_utils_compareMessagesForGrouping.compareMessagesForGrouping(prevMessage, message, nextMessage, currentChannel, resolvedReplyType.getCaseResolvedReplyType(config.groupChannel.replyType).upperCase)
                , chainTop = _b[0], chainBottom = _b[1];
            var hasSeparator = !((prevMessage === null || prevMessage === void 0 ? void 0 : prevMessage.createdAt) > 0 && (dateFns.isSameDay(message === null || message === void 0 ? void 0 : message.createdAt, prevMessage === null || prevMessage === void 0 ? void 0 : prevMessage.createdAt)));
            var handleScroll = function () {
                var current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;
                if (current && scrollBottom) {
                    var bottom = current.scrollHeight - current.scrollTop - current.offsetHeight;
                    if (scrollBottom < bottom) {
                        current.scrollTop += bottom - scrollBottom;
                    }
                }
            };
            return (React__default.default.createElement(Message_context.MessageProvider, { message: message, isByMe: isByMe, key: message === null || message === void 0 ? void 0 : message.messageId }, renderMessage({
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
            return (React__default.default.createElement(Message_context.MessageProvider, { message: message, isByMe: isByMe, key: message === null || message === void 0 ? void 0 : message.messageId }, renderMessage({
                message: message,
                hasSeparator: false,
                renderCustomSeparator: renderCustomSeparator,
                handleScroll: handleScroll,
            })));
        })));
}

module.exports = ThreadList;
//# sourceMappingURL=ThreadList.js.map
