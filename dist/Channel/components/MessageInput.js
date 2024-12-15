import { _ as __assign } from '../../chunks/bundle-HcNswZ5p.js';
import React__default from 'react';
import { M as MessageInputWrapperView } from '../../chunks/bundle-9bLgMxxd.js';
import { useChannelContext } from '../context.js';
import '../../chunks/bundle-BB4cJn39.js';
import '../../chunks/bundle-CijxkMjj.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-DhMUg-L7.js';
import '../../chunks/bundle-dybWaw0v.js';
import '../../GroupChannel/components/SuggestedMentionList.js';
import '../../chunks/bundle-BYBFk8ow.js';
import '../../chunks/bundle-Qkp2VIaZ.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-0WaCg6X7.js';
import '../../chunks/bundle-2pbuHA3C.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-DkDQ1PWY.js';
import '../../chunks/bundle-C5iY_IvV.js';
import '../../chunks/bundle-lUbYBD0x.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../ui/QuoteMessageInput.js';
import '../../chunks/bundle-Bd-i99nk.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DjLJFwD7.js';
import '../../chunks/bundle-DB7YSrIT.js';
import '../../chunks/bundle-DQk0aENq.js';
import '../../chunks/bundle-B_TSibjC.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../chunks/bundle-ja8H3E0K.js';
import 'react-dom';
import '../../chunks/bundle-DnSobLtx.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-BKzcG-aC.js';
import '../../ui/SortByRow.js';
import '../../VoiceRecorder/useVoiceRecorder.js';
import '../../chunks/bundle-DzdrCQZi.js';
import '../../ui/PlaybackTime.js';
import '../../ui/ProgressBar.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-DGMsaaNU.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-Bf0OMYby.js';
import 'dompurify';
import '../../chunks/bundle-DCxt9PzH.js';
import '../../chunks/bundle-BddSUitu.js';
import '../../chunks/bundle-DLG7S88z.js';
import '../../chunks/bundle-BvQmfZZv.js';
import '../../chunks/bundle-HPKdeJ0K.js';
import '../../chunks/bundle-B91Bhfde.js';
import '../../chunks/bundle-D-F3KakE.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-CuavrWk1.js';
import '../../chunks/bundle-D4JzAgen.js';
import '../../chunks/bundle-DDTq-6FS.js';
import '../../chunks/bundle-zVlBKrSk.js';
import '../../chunks/bundle-DMEhFKKv.js';
import '../../chunks/bundle-JQDTfT_2.js';
import '../../chunks/bundle-BwmZGijR.js';
import '../../chunks/bundle-CZtAsa-i.js';
import '../../chunks/bundle-CUhgRMBc.js';
import '../../chunks/bundle-B43UOaqG.js';

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
