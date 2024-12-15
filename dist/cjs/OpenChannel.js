'use strict';

var React = require('react');
var OpenChannel_components_OpenChannelUI = require('./OpenChannel/components/OpenChannelUI.js');
var OpenChannel_context = require('./chunks/bundle-D8WonUC2.js');
require('./OpenChannel/components/OpenChannelInput.js');
require('./chunks/bundle-CmBrGegh.js');
require('./chunks/bundle-DRvomNLJ.js');
require('./chunks/bundle-Q9YDOzjz.js');
require('./ui/MessageInput.js');
require('./chunks/bundle-CsHnjhet.js');
require('./chunks/bundle-CxDaflMi.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('./chunks/bundle-D8-2bEdY.js');
require('./chunks/bundle-C9DxbvFZ.js');
require('dompurify');
require('./chunks/bundle-DhOkJsb_.js');
require('./chunks/bundle-BHlqknCd.js');
require('./chunks/bundle-tu3X3qzD.js');
require('./ui/Icon.js');
require('./chunks/bundle-BYHj6UqH.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-4kwoH67w.js');
require('./chunks/bundle-BCJ8mayg.js');
require('./chunks/bundle-C0tdWwa4.js');
require('./chunks/bundle-CZ8XCEGd.js');
require('./OpenChannel/components/FrozenChannelNotification.js');
require('./OpenChannel/components/OpenChannelHeader.js');
require('./chunks/bundle-Dmsb_oex.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-BvFqbvri.js');
require('./chunks/bundle-CzcmYPsN.js');
require('./ui/PlaceHolder.js');
require('./ui/Loader.js');
require('./OpenChannel/components/OpenChannelMessageList.js');
require('./chunks/bundle-BayL2H8_.js');
require('./OpenChannel/components/OpenChannelMessage.js');
require('./chunks/bundle-C3e9xkw6.js');
require('./ui/OpenchannelUserMessage.js');
require('./chunks/bundle-BYSQ-mQr.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('./ui/SortByRow.js');
require('./chunks/bundle-lGoyqUWm.js');
require('./ui/UserProfile.js');
require('./chunks/bundle-Bn25Hepq.js');
require('@sendbird/uikit-tools');
require('./chunks/bundle-DfISCDoH.js');
require('css-vars-ponyfill');
require('./chunks/bundle-2M4zbjEc.js');
require('./sendbirdSelectors.js');
require('./chunks/bundle-Dcn1Gf-8.js');
require('./chunks/bundle-ZVE6E_YV.js');
require('./chunks/bundle-koqtwo1j.js');
require('./chunks/bundle-CrV-FZvi.js');
require('./ui/OpenChannelAdminMessage.js');
require('./ui/OpenchannelOGMessage.js');
require('./ui/LinkLabel.js');
require('./chunks/bundle-C9AThBV0.js');
require('./Message/context.js');
require('./ui/MentionLabel.js');
require('./ui/OpenchannelThumbnailMessage.js');
require('./ui/OpenchannelFileMessage.js');
require('./ui/TextButton.js');
require('./chunks/bundle-LSLwWEwG.js');
require('./ui/DateSeparator.js');
require('./ui/FileViewer.js');
require('./chunks/bundle-XkouAzOQ.js');
require('./chunks/bundle-M6Urrta6.js');
require('./chunks/bundle-CaVRt4Gx.js');
require('./chunks/bundle-mTQamCVh.js');
require('./chunks/bundle-CIP3LaaL.js');
require('@sendbird/chat/message');
require('./Channel/utils/compareMessagesForGrouping.js');
require('./chunks/bundle-DrXG_ZI5.js');
require('./chunks/bundle-Ivv-MORg.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var OpenChannel = function (props) {
    return (React__default.default.createElement(OpenChannel_context.OpenChannelProvider, { channelUrl: props === null || props === void 0 ? void 0 : props.channelUrl, isMessageGroupingEnabled: props === null || props === void 0 ? void 0 : props.isMessageGroupingEnabled, queries: props === null || props === void 0 ? void 0 : props.queries, messageLimit: props === null || props === void 0 ? void 0 : props.messageLimit, onBeforeSendUserMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendUserMessage, onBeforeSendFileMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendFileMessage, onChatHeaderActionClick: props === null || props === void 0 ? void 0 : props.onChatHeaderActionClick, disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile, renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile, onBackClick: props === null || props === void 0 ? void 0 : props.onBackClick },
        React__default.default.createElement(OpenChannel_components_OpenChannelUI, { renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage, renderHeader: props === null || props === void 0 ? void 0 : props.renderHeader, renderInput: props === null || props === void 0 ? void 0 : props.renderInput, renderMessageInput: props === null || props === void 0 ? void 0 : props.renderMessageInput, renderPlaceHolderEmptyList: props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList, renderPlaceHolderError: props === null || props === void 0 ? void 0 : props.renderPlaceHolderError, renderPlaceHolderLoading: props === null || props === void 0 ? void 0 : props.renderPlaceHolderLoading })));
};

module.exports = OpenChannel;
//# sourceMappingURL=OpenChannel.js.map
