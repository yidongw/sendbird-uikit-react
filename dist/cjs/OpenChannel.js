'use strict';

var React = require('react');
var OpenChannel_components_OpenChannelUI = require('./OpenChannel/components/OpenChannelUI.js');
var OpenChannel_context = require('./chunks/bundle-CjHcvEl6.js');
require('./OpenChannel/components/OpenChannelInput.js');
require('./chunks/bundle-Cy1ruNzs.js');
require('./chunks/bundle-Bdr7xlea.js');
require('./chunks/bundle-Dio8pG-T.js');
require('./ui/MessageInput.js');
require('./chunks/bundle-CfV7jROn.js');
require('./chunks/bundle-CtHeiC70.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('./chunks/bundle-CAR4EIKs.js');
require('./chunks/bundle-CCtdwkHe.js');
require('dompurify');
require('./chunks/bundle-By5v4zYf.js');
require('./chunks/bundle-DobO_BAb.js');
require('./chunks/bundle-BaSZqehS.js');
require('./ui/Icon.js');
require('./chunks/bundle-Ck6ikNW6.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-Dr9yFtKa.js');
require('./chunks/bundle-C2CwvM-u.js');
require('./chunks/bundle-BD0wJiNh.js');
require('./chunks/bundle-BIkitklZ.js');
require('./OpenChannel/components/FrozenChannelNotification.js');
require('./OpenChannel/components/OpenChannelHeader.js');
require('./chunks/bundle-C8wv9DWs.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-B4PTJ_bJ.js');
require('./chunks/bundle-DrIKAEHN.js');
require('./ui/PlaceHolder.js');
require('./ui/Loader.js');
require('./OpenChannel/components/OpenChannelMessageList.js');
require('./chunks/bundle-Cc6_UMK4.js');
require('./OpenChannel/components/OpenChannelMessage.js');
require('./chunks/bundle-DspSuA8e.js');
require('./ui/OpenchannelUserMessage.js');
require('./chunks/bundle-BKyZTqvq.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('./ui/SortByRow.js');
require('./chunks/bundle-C1poxl5k.js');
require('./ui/UserProfile.js');
require('./chunks/bundle-DgjptBQW.js');
require('@sendbird/uikit-tools');
require('./chunks/bundle-DZhkNDpN.js');
require('css-vars-ponyfill');
require('./chunks/bundle-CJM9Pdwg.js');
require('./sendbirdSelectors.js');
require('./chunks/bundle-C6Q6BfQY.js');
require('./chunks/bundle-DHy4Izth.js');
require('./chunks/bundle-CJ7RaJYS.js');
require('./chunks/bundle-D_k3_Y_y.js');
require('./ui/OpenChannelAdminMessage.js');
require('./ui/OpenchannelOGMessage.js');
require('./ui/LinkLabel.js');
require('./chunks/bundle-92xEkubH.js');
require('./Message/context.js');
require('./ui/MentionLabel.js');
require('./ui/OpenchannelThumbnailMessage.js');
require('./ui/OpenchannelFileMessage.js');
require('./ui/TextButton.js');
require('./chunks/bundle-CLzI6bbe.js');
require('./ui/DateSeparator.js');
require('./ui/FileViewer.js');
require('./chunks/bundle-DpdA7O8z.js');
require('./chunks/bundle-CzLnk6wC.js');
require('./chunks/bundle-CM4lC-DE.js');
require('./chunks/bundle-CpvSgBLD.js');
require('./chunks/bundle-BNuA_uqY.js');
require('@sendbird/chat/message');
require('./Channel/utils/compareMessagesForGrouping.js');
require('./chunks/bundle-Dh0NAI0D.js');
require('./chunks/bundle-BdRSDnh9.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var OpenChannel = function (props) {
    return (React__default.default.createElement(OpenChannel_context.OpenChannelProvider, { channelUrl: props === null || props === void 0 ? void 0 : props.channelUrl, isMessageGroupingEnabled: props === null || props === void 0 ? void 0 : props.isMessageGroupingEnabled, queries: props === null || props === void 0 ? void 0 : props.queries, messageLimit: props === null || props === void 0 ? void 0 : props.messageLimit, onBeforeSendUserMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendUserMessage, onBeforeSendFileMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendFileMessage, onChatHeaderActionClick: props === null || props === void 0 ? void 0 : props.onChatHeaderActionClick, disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile, renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile, onBackClick: props === null || props === void 0 ? void 0 : props.onBackClick },
        React__default.default.createElement(OpenChannel_components_OpenChannelUI, { renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage, renderHeader: props === null || props === void 0 ? void 0 : props.renderHeader, renderInput: props === null || props === void 0 ? void 0 : props.renderInput, renderMessageInput: props === null || props === void 0 ? void 0 : props.renderMessageInput, renderPlaceHolderEmptyList: props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList, renderPlaceHolderError: props === null || props === void 0 ? void 0 : props.renderPlaceHolderError, renderPlaceHolderLoading: props === null || props === void 0 ? void 0 : props.renderPlaceHolderLoading })));
};

module.exports = OpenChannel;
//# sourceMappingURL=OpenChannel.js.map
