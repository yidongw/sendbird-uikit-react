'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var MessageInputWrapperView = require('../../chunks/bundle-goPOCuqE.js');
var Channel_context = require('../context.js');
require('../../chunks/bundle-CRtS_Hdn.js');
require('../../chunks/bundle-CxDaflMi.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-CmBrGegh.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../GroupChannel/components/SuggestedMentionList.js');
require('../../chunks/bundle-3ucLy5RS.js');
require('../../chunks/bundle-D8-2bEdY.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-BYHj6UqH.js');
require('../../chunks/bundle-Dmsb_oex.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../chunks/bundle-lGoyqUWm.js');
require('../../chunks/bundle-CsHnjhet.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../ui/QuoteMessageInput.js');
require('../../chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('../../chunks/bundle-CMe3c_v7.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../chunks/bundle-DfISCDoH.js');
require('react-dom');
require('../../chunks/bundle-CzcmYPsN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../VoiceRecorder/useVoiceRecorder.js');
require('../../chunks/bundle-DLUxBAy9.js');
require('../../ui/PlaybackTime.js');
require('../../ui/ProgressBar.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-LSLwWEwG.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-C9DxbvFZ.js');
require('dompurify');
require('../../chunks/bundle-DhOkJsb_.js');
require('../../chunks/bundle-BHlqknCd.js');
require('../../chunks/bundle-tu3X3qzD.js');
require('../../chunks/bundle-CZ8XCEGd.js');
require('../../chunks/bundle-Ivv-MORg.js');
require('../../chunks/bundle-Bn25Hepq.js');
require('../../chunks/bundle-CIP3LaaL.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-Dim56WjD.js');
require('../../chunks/bundle-C3e9xkw6.js');
require('../../chunks/bundle-XTn8OOwy.js');
require('../../chunks/bundle-DrXG_ZI5.js');
require('../../chunks/bundle-CkLOqY_J.js');
require('../../chunks/bundle-BO0JOImE.js');
require('../../chunks/bundle-Dcn1Gf-8.js');
require('../../chunks/bundle-DkZ8dvkY.js');
require('../../chunks/bundle-DL9pw4YL.js');
require('../../chunks/bundle-DrPixXq9.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var MessageInputWrapper = function (props) {
    var context = Channel_context.useChannelContext();
    var quoteMessage = context.quoteMessage, currentGroupChannel = context.currentGroupChannel, sendMessage = context.sendMessage, sendFileMessage = context.sendFileMessage, sendVoiceMessage = context.sendVoiceMessage, sendMultipleFilesMessage = context.sendMultipleFilesMessage;
    return (React__default.default.createElement(MessageInputWrapperView.MessageInputWrapperView, _tslib.__assign({}, props, context, { currentChannel: currentGroupChannel, messages: context.allMessages, sendUserMessage: function (params) {
            return sendMessage({
                message: params.message,
                mentionTemplate: params.mentionedMessageTemplate,
                mentionedUsers: params.mentionedUsers,
                quoteMessage: quoteMessage !== null && quoteMessage !== void 0 ? quoteMessage : undefined,
            });
        }, sendFileMessage: function (params) {
            return sendFileMessage(params.file, quoteMessage !== null && quoteMessage !== void 0 ? quoteMessage : undefined);
        }, sendVoiceMessage: function (_a, duration) {
            var file = _a.file;
            return sendVoiceMessage(file, duration, quoteMessage !== null && quoteMessage !== void 0 ? quoteMessage : undefined);
        }, sendMultipleFilesMessage: function (_a) {
            var fileInfoList = _a.fileInfoList;
            return sendMultipleFilesMessage(fileInfoList.map(function (fileInfo) { return fileInfo.file; }), quoteMessage !== null && quoteMessage !== void 0 ? quoteMessage : undefined);
        } })));
};

exports.MessageInputWrapper = MessageInputWrapper;
exports.default = MessageInputWrapper;
//# sourceMappingURL=MessageInput.js.map
