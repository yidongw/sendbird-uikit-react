'use strict';

var _tslib = require('../../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var Thread_components_ThreadListItem = require('./ThreadListItem.js');
var Thread_context = require('../context.js');
var Channel_utils_compareMessagesForGrouping = require('../../Channel/utils/compareMessagesForGrouping.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var dateFns = require('date-fns');
var Message_context = require('../../Message/context.js');
var resolvedReplyType = require('../../chunks/bundle-DvvdekCh.js');
require('../../chunks/bundle-DspSuA8e.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-Cy1ruNzs.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../ui/DateSeparator.js');
require('../../chunks/bundle-CLzI6bbe.js');
require('../../chunks/bundle-CAR4EIKs.js');
require('../../chunks/bundle-CJnPpHlO.js');
require('../../chunks/bundle-DZhkNDpN.js');
require('../../chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('../../chunks/bundle-Ck6ikNW6.js');
require('react-dom');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../ui/Icon.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-CzLnk6wC.js');
require('../../ui/FileViewer.js');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../chunks/bundle-DpdA7O8z.js');
require('../../chunks/bundle-DPjtF20V.js');
require('../../chunks/bundle-kFYCld9C.js');
require('../../chunks/bundle-CtHeiC70.js');
require('../../chunks/bundle-CfV7jROn.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-CCtdwkHe.js');
require('dompurify');
require('../../chunks/bundle-By5v4zYf.js');
require('../../chunks/bundle-DobO_BAb.js');
require('../../chunks/bundle-BaSZqehS.js');
require('../../chunks/bundle-BIkitklZ.js');
require('../context/types.js');
require('../../ui/MessageItemReactionMenu.js');
require('../../ui/ReactionButton.js');
require('../../chunks/bundle-D_k3_Y_y.js');
require('../../chunks/bundle-BQHwJ1ZS.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-f7s_1xF4.js');
require('../../chunks/bundle-Cc6_UMK4.js');
require('../../ui/EmojiReactions.js');
require('../../ui/ReactionBadge.js');
require('../../ui/BottomSheet.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-DgjptBQW.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../chunks/bundle-CVdJh4P7.js');
require('../../ui/MobileMenu.js');
require('../../chunks/bundle-B3JoFOJ4.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-BUXIG4fk.js');
require('../../chunks/bundle-BwahJ_Tg.js');
require('../../chunks/bundle-8wGi0pKu.js');
require('../../ui/OGMessageItemBody.js');
require('../../chunks/bundle-92xEkubH.js');
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
require('../../chunks/bundle-DEjC6RIv.js');
require('../../ui/UnknownMessageItemBody.js');
require('../../ui/TemplateMessageItemBody.js');
require('../../chunks/bundle-Dd_liLM9.js');
require('../../ui/FallbackTemplateMessageItemBody.tsx.js');
require('../../ui/LoadingTemplateMessageItemBody.tsx.js');
require('../../ui/MessageFeedbackFailedModal.js');
require('../../chunks/bundle-w0Wt2aBx.js');
require('../../chunks/bundle-BA-5SFdp.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../chunks/bundle-Bs36T7L5.js');
require('../../chunks/bundle-BNuA_uqY.js');
require('../../chunks/bundle-wYxshM30.js');
require('../../chunks/bundle-Dh0NAI0D.js');

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
