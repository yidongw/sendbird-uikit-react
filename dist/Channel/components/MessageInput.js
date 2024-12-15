import { _ as __assign } from '../../chunks/bundle-Ck-Lg2K3.js';
import React__default from 'react';
import { M as MessageInputWrapperView } from '../../chunks/bundle-D4F-we3Z.js';
import { useChannelContext } from '../context.js';
import '../../chunks/bundle-BT00z1C1.js';
import '../../chunks/bundle-DAH20nmQ.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-CbLNLMef.js';
import '../../chunks/bundle-B80WXNZi.js';
import '../../GroupChannel/components/SuggestedMentionList.js';
import '../../chunks/bundle-KZzhMils.js';
import '../../chunks/bundle-Di0Zwz2X.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-pQHYhigr.js';
import '../../chunks/bundle-BbICJE5Z.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-CjhP75at.js';
import '../../chunks/bundle-gMJSD9hQ.js';
import '../../chunks/bundle-nLX43pTB.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/QuoteMessageInput.js';
import '../../chunks/bundle-BL0uQSu6.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-fwRBR_Yw.js';
import '../../chunks/bundle-CnkNoe49.js';
import '../../chunks/bundle-DgxVBBM3.js';
import '../../chunks/bundle-CxwGa1l3.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../chunks/bundle-CHD1aKHO.js';
import '../../chunks/bundle-ptS-tNRF.js';
import 'react-dom';
import '../../chunks/bundle-Bk1oUUzJ.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-A5WEPjt6.js';
import '../../ui/SortByRow.js';
import '../../VoiceRecorder/useVoiceRecorder.js';
import '../../chunks/bundle-6bvhA-hg.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ProgressBar.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-DUTd4XYU.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-Cs72eVze.js';
import 'dompurify';
import '../../chunks/bundle-D6pm-XK9.js';
import '../../chunks/bundle-DjodzqAP.js';
import '../../chunks/bundle-oU_AYCPg.js';
import '../../chunks/bundle-BS8ALexW.js';
import '../../chunks/bundle-BUI77uOB.js';
import '../../chunks/bundle-C3toIOqd.js';
import '../../chunks/bundle-DnsBu59R.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-2HULaUfY.js';
import '../../chunks/bundle-D4fsEPre.js';
import '../../chunks/bundle-BhvKqaai.js';
import '../../chunks/bundle-BD8hNBsp.js';
import '../../chunks/bundle-DByz53YE.js';
import '../../chunks/bundle-C4W1gyaJ.js';
import '../../chunks/bundle-YOpvheAB.js';
import '../../chunks/bundle-oJ6bQnA_.js';
import '../../chunks/bundle-yYNXeh2L.js';
import '../../chunks/bundle-DknnqCJX.js';

var MessageInputWrapper = function (props) {
    var context = useChannelContext();
    var quoteMessage = context.quoteMessage, currentGroupChannel = context.currentGroupChannel, sendMessage = context.sendMessage, sendFileMessage = context.sendFileMessage, sendVoiceMessage = context.sendVoiceMessage, sendMultipleFilesMessage = context.sendMultipleFilesMessage;
    return (React__default.createElement(MessageInputWrapperView, __assign({}, props, context, { currentChannel: currentGroupChannel, messages: context.allMessages, sendUserMessage: function (params) {
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

export { MessageInputWrapper, MessageInputWrapper as default };
//# sourceMappingURL=MessageInput.js.map
