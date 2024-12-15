import React__default from 'react';
import CreateOpenChannelUI from './CreateOpenChannel/components/CreateOpenChannelUI.js';
import { CreateOpenChannelProvider } from './CreateOpenChannel/context.js';
import './chunks/bundle-DhMUg-L7.js';
import './chunks/bundle-HcNswZ5p.js';
import './chunks/bundle-dybWaw0v.js';
import './chunks/bundle-2pbuHA3C.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-0WaCg6X7.js';
import './chunks/bundle-DkDQ1PWY.js';
import './ui/Icon.js';
import './chunks/bundle-Qkp2VIaZ.js';
import './ui/Button.js';
import './chunks/bundle-ja8H3E0K.js';
import './chunks/bundle-Bd-i99nk.js';
import '@sendbird/chat/groupChannel';
import './utils/message/getOutgoingMessageState.js';
import './chunks/bundle-DjLJFwD7.js';
import './chunks/bundle-DB7YSrIT.js';
import './chunks/bundle-DQk0aENq.js';
import 'react-dom';
import './chunks/bundle-DnSobLtx.js';
import './ui/IconButton.js';
import '@sendbird/uikit-tools';
import './withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import './chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import './chunks/bundle-zy1mnw8U.js';
import './useSendbirdStateContext.js';
import './chunks/bundle-BKzcG-aC.js';
import './ui/SortByRow.js';
import './ui/Input.js';
import './ui/TextButton.js';
import './chunks/bundle-DGMsaaNU.js';

function CreateOpenChannel(_a) {
    var className = _a.className, onCreateChannel = _a.onCreateChannel, onBeforeCreateChannel = _a.onBeforeCreateChannel, closeModal = _a.closeModal, renderHeader = _a.renderHeader, renderProfileInput = _a.renderProfileInput;
    return (React__default.createElement(CreateOpenChannelProvider, { className: className, onCreateChannel: onCreateChannel, onBeforeCreateChannel: onBeforeCreateChannel },
        React__default.createElement(CreateOpenChannelUI, { closeModal: closeModal, renderHeader: renderHeader, renderProfileInput: renderProfileInput })));
}

export { CreateOpenChannel as default };
//# sourceMappingURL=CreateOpenChannel.js.map
