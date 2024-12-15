'use strict';

var React = require('react');
var OpenChannel_context = require('../../chunks/bundle-CjHcvEl6.js');
var OpenChannel_components_OpenChannelInput = require('./OpenChannelInput.js');
var OpenChannel_components_FrozenChannelNotification = require('./FrozenChannelNotification.js');
var OpenChannel_components_OpenChannelHeader = require('./OpenChannelHeader.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var OpenChannel_components_OpenChannelMessageList = require('./OpenChannelMessageList.js');
require('../../chunks/bundle-Cy1ruNzs.js');
require('../../chunks/bundle-Bdr7xlea.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../chunks/bundle-DgjptBQW.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('../../chunks/bundle-DZhkNDpN.js');
require('../../chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('../../chunks/bundle-Ck6ikNW6.js');
require('react-dom');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-CAR4EIKs.js');
require('../../ui/Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-Dh0NAI0D.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../chunks/bundle-BdRSDnh9.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-CfV7jROn.js');
require('../../chunks/bundle-CtHeiC70.js');
require('../../chunks/bundle-CCtdwkHe.js');
require('dompurify');
require('../../chunks/bundle-By5v4zYf.js');
require('../../chunks/bundle-DobO_BAb.js');
require('../../chunks/bundle-BaSZqehS.js');
require('../../chunks/bundle-BIkitklZ.js');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../ui/ImageRenderer.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-Cc6_UMK4.js');
require('./OpenChannelMessage.js');
require('../../chunks/bundle-DspSuA8e.js');
require('../../ui/OpenchannelUserMessage.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-DHy4Izth.js');
require('../../chunks/bundle-CJ7RaJYS.js');
require('../../chunks/bundle-D_k3_Y_y.js');
require('../../ui/OpenChannelAdminMessage.js');
require('../../ui/OpenchannelOGMessage.js');
require('../../ui/LinkLabel.js');
require('../../chunks/bundle-92xEkubH.js');
require('../../Message/context.js');
require('../../ui/MentionLabel.js');
require('../../ui/OpenchannelThumbnailMessage.js');
require('../../ui/OpenchannelFileMessage.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-CLzI6bbe.js');
require('../../ui/DateSeparator.js');
require('../../ui/FileViewer.js');
require('../../chunks/bundle-DpdA7O8z.js');
require('../../chunks/bundle-CzLnk6wC.js');
require('../../chunks/bundle-CM4lC-DE.js');
require('../../chunks/bundle-CpvSgBLD.js');
require('../../chunks/bundle-BNuA_uqY.js');
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
