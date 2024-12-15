'use strict';

var React = require('react');
var CreateOpenChannel_components_CreateOpenChannelUI = require('./CreateOpenChannel/components/CreateOpenChannelUI.js');
var CreateOpenChannel_context = require('./CreateOpenChannel/context.js');
require('./chunks/bundle-CmBrGegh.js');
require('./chunks/bundle-DRvomNLJ.js');
require('./chunks/bundle-Q9YDOzjz.js');
require('./chunks/bundle-Dmsb_oex.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-BYHj6UqH.js');
require('./chunks/bundle-BvFqbvri.js');
require('./ui/Icon.js');
require('./chunks/bundle-D8-2bEdY.js');
require('./ui/Button.js');
require('./chunks/bundle-DfISCDoH.js');
require('./chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-4kwoH67w.js');
require('./chunks/bundle-BCJ8mayg.js');
require('./chunks/bundle-C0tdWwa4.js');
require('react-dom');
require('./chunks/bundle-CzcmYPsN.js');
require('./ui/IconButton.js');
require('@sendbird/uikit-tools');
require('./withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-2M4zbjEc.js');
require('./useSendbirdStateContext.js');
require('./chunks/bundle-BYSQ-mQr.js');
require('./ui/SortByRow.js');
require('./ui/Input.js');
require('./ui/TextButton.js');
require('./chunks/bundle-LSLwWEwG.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function CreateOpenChannel(_a) {
    var className = _a.className, onCreateChannel = _a.onCreateChannel, onBeforeCreateChannel = _a.onBeforeCreateChannel, closeModal = _a.closeModal, renderHeader = _a.renderHeader, renderProfileInput = _a.renderProfileInput;
    return (React__default.default.createElement(CreateOpenChannel_context.CreateOpenChannelProvider, { className: className, onCreateChannel: onCreateChannel, onBeforeCreateChannel: onBeforeCreateChannel },
        React__default.default.createElement(CreateOpenChannel_components_CreateOpenChannelUI, { closeModal: closeModal, renderHeader: renderHeader, renderProfileInput: renderProfileInput })));
}

module.exports = CreateOpenChannel;
//# sourceMappingURL=CreateOpenChannel.js.map
