import React__default, { useContext } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-CbLNLMef.js';
import MessageInput from '../../ui/MessageInput.js';
import { u as useOpenChannelContext } from '../../chunks/bundle-CordabVC.js';
import '../../chunks/bundle-Ck-Lg2K3.js';
import '../../chunks/bundle-B80WXNZi.js';
import '../../chunks/bundle-nLX43pTB.js';
import '../../chunks/bundle-DAH20nmQ.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-Di0Zwz2X.js';
import '../../chunks/bundle-Cs72eVze.js';
import 'dompurify';
import '../../chunks/bundle-D6pm-XK9.js';
import '../../chunks/bundle-DjodzqAP.js';
import '../../chunks/bundle-oU_AYCPg.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-pQHYhigr.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-BL0uQSu6.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-fwRBR_Yw.js';
import '../../chunks/bundle-CnkNoe49.js';
import '../../chunks/bundle-DgxVBBM3.js';
import '../../chunks/bundle-BS8ALexW.js';
import '../../chunks/bundle-C3toIOqd.js';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-ptS-tNRF.js';
import 'react-dom';
import '../../chunks/bundle-Bk1oUUzJ.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-gMJSD9hQ.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CHD1aKHO.js';
import '../../chunks/bundle-A5WEPjt6.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-BD8hNBsp.js';
import '../../chunks/bundle-YOpvheAB.js';
import '../../chunks/bundle-BUI77uOB.js';
import '../../chunks/bundle-CjhP75at.js';

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
