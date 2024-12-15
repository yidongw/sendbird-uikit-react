'use strict';

var React = require('react');
var CreateOpenChannel_components_CreateOpenChannelUI = require('./CreateOpenChannel/components/CreateOpenChannelUI.js');
var CreateOpenChannel_context = require('./CreateOpenChannel/context.js');
require('./chunks/bundle-Cy1ruNzs.js');
require('./chunks/bundle-Bdr7xlea.js');
require('./chunks/bundle-Dio8pG-T.js');
require('./chunks/bundle-C8wv9DWs.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-Ck6ikNW6.js');
require('./chunks/bundle-B4PTJ_bJ.js');
require('./ui/Icon.js');
require('./chunks/bundle-CAR4EIKs.js');
require('./ui/Button.js');
require('./chunks/bundle-DZhkNDpN.js');
require('./chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-Dr9yFtKa.js');
require('./chunks/bundle-C2CwvM-u.js');
require('./chunks/bundle-BD0wJiNh.js');
require('react-dom');
require('./chunks/bundle-DrIKAEHN.js');
require('./ui/IconButton.js');
require('@sendbird/uikit-tools');
require('./withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-CJM9Pdwg.js');
require('./useSendbirdStateContext.js');
require('./chunks/bundle-BKyZTqvq.js');
require('./ui/SortByRow.js');
require('./ui/Input.js');
require('./ui/TextButton.js');
require('./chunks/bundle-CLzI6bbe.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function CreateOpenChannel(_a) {
    var className = _a.className, onCreateChannel = _a.onCreateChannel, onBeforeCreateChannel = _a.onBeforeCreateChannel, closeModal = _a.closeModal, renderHeader = _a.renderHeader, renderProfileInput = _a.renderProfileInput;
    return (React__default.default.createElement(CreateOpenChannel_context.CreateOpenChannelProvider, { className: className, onCreateChannel: onCreateChannel, onBeforeCreateChannel: onBeforeCreateChannel },
        React__default.default.createElement(CreateOpenChannel_components_CreateOpenChannelUI, { closeModal: closeModal, renderHeader: renderHeader, renderProfileInput: renderProfileInput })));
}

module.exports = CreateOpenChannel;
//# sourceMappingURL=CreateOpenChannel.js.map
