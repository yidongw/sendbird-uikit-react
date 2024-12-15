import React__default from 'react';
import CreateOpenChannelUI from './CreateOpenChannel/components/CreateOpenChannelUI.js';
import { CreateOpenChannelProvider } from './CreateOpenChannel/context.js';
import './chunks/bundle-CbLNLMef.js';
import './chunks/bundle-Ck-Lg2K3.js';
import './chunks/bundle-B80WXNZi.js';
import './chunks/bundle-BbICJE5Z.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-pQHYhigr.js';
import './chunks/bundle-CjhP75at.js';
import './ui/Icon.js';
import './chunks/bundle-Di0Zwz2X.js';
import './ui/Button.js';
import './chunks/bundle-ptS-tNRF.js';
import './chunks/bundle-BL0uQSu6.js';
import '@sendbird/chat/groupChannel';
import './utils/message/getOutgoingMessageState.js';
import './chunks/bundle-fwRBR_Yw.js';
import './chunks/bundle-CnkNoe49.js';
import './chunks/bundle-DgxVBBM3.js';
import 'react-dom';
import './chunks/bundle-Bk1oUUzJ.js';
import './ui/IconButton.js';
import '@sendbird/uikit-tools';
import './withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import './chunks/bundle-gMJSD9hQ.js';
import '@sendbird/chat/openChannel';
import './chunks/bundle-CHD1aKHO.js';
import './useSendbirdStateContext.js';
import './chunks/bundle-A5WEPjt6.js';
import './ui/SortByRow.js';
import './ui/Input.js';
import './ui/TextButton.js';
import './chunks/bundle-DUTd4XYU.js';

function CreateOpenChannel(_a) {
    var className = _a.className, onCreateChannel = _a.onCreateChannel, onBeforeCreateChannel = _a.onBeforeCreateChannel, closeModal = _a.closeModal, renderHeader = _a.renderHeader, renderProfileInput = _a.renderProfileInput;
    return (React__default.createElement(CreateOpenChannelProvider, { className: className, onCreateChannel: onCreateChannel, onBeforeCreateChannel: onBeforeCreateChannel },
        React__default.createElement(CreateOpenChannelUI, { closeModal: closeModal, renderHeader: renderHeader, renderProfileInput: renderProfileInput })));
}

export { CreateOpenChannel as default };
//# sourceMappingURL=CreateOpenChannel.js.map
