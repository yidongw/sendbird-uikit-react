import React__default, { useContext } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-DhMUg-L7.js';
import MessageInput from '../../ui/MessageInput.js';
import { u as useOpenChannelContext } from '../../chunks/bundle-7CrSPht7.js';
import '../../chunks/bundle-HcNswZ5p.js';
import '../../chunks/bundle-dybWaw0v.js';
import '../../chunks/bundle-lUbYBD0x.js';
import '../../chunks/bundle-CijxkMjj.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-Qkp2VIaZ.js';
import '../../chunks/bundle-Bf0OMYby.js';
import 'dompurify';
import '../../chunks/bundle-DCxt9PzH.js';
import '../../chunks/bundle-BddSUitu.js';
import '../../chunks/bundle-DLG7S88z.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-0WaCg6X7.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-Bd-i99nk.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DjLJFwD7.js';
import '../../chunks/bundle-DB7YSrIT.js';
import '../../chunks/bundle-DQk0aENq.js';
import '../../chunks/bundle-BvQmfZZv.js';
import '../../chunks/bundle-B91Bhfde.js';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-ja8H3E0K.js';
import 'react-dom';
import '../../chunks/bundle-DnSobLtx.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../chunks/bundle-BKzcG-aC.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-zVlBKrSk.js';
import '../../chunks/bundle-BwmZGijR.js';
import '../../chunks/bundle-HPKdeJ0K.js';
import '../../chunks/bundle-DkDQ1PWY.js';

var OpenChannelInput = React__default.forwardRef(function (props, ref) {
    var _a = useOpenChannelContext(), currentOpenChannel = _a.currentOpenChannel, disabled = _a.disabled, handleSendMessage = _a.handleSendMessage, handleFileUpload = _a.handleFileUpload, amIMuted = _a.amIMuted;
    var channel = currentOpenChannel;
    var stringSet = useContext(LocalizationContext).stringSet;
    var value = props.value;
    function getPlaceHolderString() {
        if (amIMuted) {
            return stringSet.MESSAGE_INPUT__PLACE_HOLDER__MUTED;
        }
        if (disabled) {
            return stringSet.MESSAGE_INPUT__PLACE_HOLDER__DISABLED;
        }
        return '';
    }
    if (!channel) {
        return null;
    }
    return (React__default.createElement("div", { className: "sendbird-openchannel-footer" },
        React__default.createElement(MessageInput, { channel: currentOpenChannel, ref: ref, value: value, disabled: disabled, isVoiceMessageEnabled: false, onSendMessage: handleSendMessage, onFileUpload: handleFileUpload, placeholder: getPlaceHolderString() })));
});

export { OpenChannelInput as default };
//# sourceMappingURL=OpenChannelInput.js.map
