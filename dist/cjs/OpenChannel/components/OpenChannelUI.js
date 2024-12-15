'use strict';

var React = require('react');
var OpenChannel_context = require('../../chunks/bundle-D8WonUC2.js');
var OpenChannel_components_OpenChannelInput = require('./OpenChannelInput.js');
var OpenChannel_components_FrozenChannelNotification = require('./FrozenChannelNotification.js');
var OpenChannel_components_OpenChannelHeader = require('./OpenChannelHeader.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var OpenChannel_components_OpenChannelMessageList = require('./OpenChannelMessageList.js');
require('../../chunks/bundle-CmBrGegh.js');
require('../../chunks/bundle-DRvomNLJ.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../chunks/bundle-Bn25Hepq.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('../../chunks/bundle-DfISCDoH.js');
require('../../chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('../../chunks/bundle-BYHj6UqH.js');
require('react-dom');
require('../../chunks/bundle-CzcmYPsN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-D8-2bEdY.js');
require('../../ui/Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-DrXG_ZI5.js');
require('../../chunks/bundle-Dcn1Gf-8.js');
require('../../chunks/bundle-Ivv-MORg.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-CsHnjhet.js');
require('../../chunks/bundle-CxDaflMi.js');
require('../../chunks/bundle-C9DxbvFZ.js');
require('dompurify');
require('../../chunks/bundle-DhOkJsb_.js');
require('../../chunks/bundle-BHlqknCd.js');
require('../../chunks/bundle-tu3X3qzD.js');
require('../../chunks/bundle-CZ8XCEGd.js');
require('../../chunks/bundle-Dmsb_oex.js');
require('../../ui/ImageRenderer.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-BayL2H8_.js');
require('./OpenChannelMessage.js');
require('../../chunks/bundle-C3e9xkw6.js');
require('../../ui/OpenchannelUserMessage.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-ZVE6E_YV.js');
require('../../chunks/bundle-koqtwo1j.js');
require('../../chunks/bundle-CrV-FZvi.js');
require('../../ui/OpenChannelAdminMessage.js');
require('../../ui/OpenchannelOGMessage.js');
require('../../ui/LinkLabel.js');
require('../../chunks/bundle-C9AThBV0.js');
require('../../Message/context.js');
require('../../ui/MentionLabel.js');
require('../../ui/OpenchannelThumbnailMessage.js');
require('../../ui/OpenchannelFileMessage.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-LSLwWEwG.js');
require('../../ui/DateSeparator.js');
require('../../ui/FileViewer.js');
require('../../chunks/bundle-XkouAzOQ.js');
require('../../chunks/bundle-M6Urrta6.js');
require('../../chunks/bundle-CaVRt4Gx.js');
require('../../chunks/bundle-mTQamCVh.js');
require('../../chunks/bundle-CIP3LaaL.js');
require('@sendbird/chat/message');
require('../../Channel/utils/compareMessagesForGrouping.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var COMPONENT_CLASS_NAME = 'sendbird-openchannel-conversation';
var OpenChannelUI = function (_a) {
    var renderMessage = _a.renderMessage, renderHeader = _a.renderHeader, renderPlaceHolderEmptyList = _a.renderPlaceHolderEmptyList, renderPlaceHolderError = _a.renderPlaceHolderError, renderPlaceHolderLoading = _a.renderPlaceHolderLoading, renderMessageInput = _a.renderMessageInput, renderInput = _a.renderInput;
    var _b = OpenChannel_context.useOpenChannelContext(), currentOpenChannel = _b.currentOpenChannel, amIBanned = _b.amIBanned, loading = _b.loading, isInvalid = _b.isInvalid, messageInputRef = _b.messageInputRef, conversationScrollRef = _b.conversationScrollRef;
    if (!currentOpenChannel
        || !(currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.url)
        || amIBanned) {
        return ((renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError())
            || React__default.default.createElement("div", { className: COMPONENT_CLASS_NAME },
                React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.NO_CHANNELS })));
    }
    if (loading) {
        return ((renderPlaceHolderLoading === null || renderPlaceHolderLoading === void 0 ? void 0 : renderPlaceHolderLoading())
            || React__default.default.createElement("div", { className: COMPONENT_CLASS_NAME },
                React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.LOADING })));
    }
    if (isInvalid) {
        return ((renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError())
            || React__default.default.createElement("div", { className: COMPONENT_CLASS_NAME },
                React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.WRONG })));
    }
    var renderInputComponent = renderMessageInput || renderInput;
    return (React__default.default.createElement("div", { className: COMPONENT_CLASS_NAME },
        (renderHeader === null || renderHeader === void 0 ? void 0 : renderHeader()) || React__default.default.createElement(OpenChannel_components_OpenChannelHeader, null),
        (currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.isFrozen) && React__default.default.createElement(OpenChannel_components_FrozenChannelNotification, null),
        React__default.default.createElement(OpenChannel_components_OpenChannelMessageList, { ref: conversationScrollRef, renderMessage: renderMessage, renderPlaceHolderEmptyList: renderPlaceHolderEmptyList }),
        (renderInputComponent === null || renderInputComponent === void 0 ? void 0 : renderInputComponent()) || React__default.default.createElement(OpenChannel_components_OpenChannelInput, { ref: messageInputRef })));
};

module.exports = OpenChannelUI;
//# sourceMappingURL=OpenChannelUI.js.map
