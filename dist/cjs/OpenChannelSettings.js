'use strict';

var React = require('react');
var OpenChannelSettings_components_OpenChannelSettingsUI = require('./OpenChannelSettings/components/OpenChannelSettingsUI.js');
var OpenChannelSettings_context = require('./OpenChannelSettings/context.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-DRvomNLJ.js');
require('./chunks/bundle-CmBrGegh.js');
require('./chunks/bundle-Q9YDOzjz.js');
require('./chunks/bundle-D8-2bEdY.js');
require('./ui/Icon.js');
require('./chunks/bundle-BYHj6UqH.js');
require('./ui/PlaceHolder.js');
require('./ui/Loader.js');
require('./OpenChannelSettings/components/OperatorUI.js');
require('./OpenChannelSettings/components/OpenChannelProfile.js');
require('./ui/TextButton.js');
require('./chunks/bundle-LSLwWEwG.js');
require('./ui/OpenChannelAvatar.js');
require('./chunks/bundle-Dmsb_oex.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-BvFqbvri.js');
require('./chunks/bundle-B1unRPhi.js');
require('./OpenChannelSettings/components/EditDetailsModal.js');
require('./chunks/bundle-Dcn1Gf-8.js');
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
require('./ui/Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-2M4zbjEc.js');
require('./chunks/bundle-BYSQ-mQr.js');
require('./ui/SortByRow.js');
require('./ui/Input.js');
require('./chunks/bundle-BXr7r310.js');
require('./chunks/bundle-Bn25Hepq.js');
require('./ui/AccordionGroup.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./ui/UserListItem.js');
require('./ui/Checkbox.js');
require('./ui/Accordion.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var OpenChannelSetting = function (props) {
    return (React__default.default.createElement(OpenChannelSettings_context.OpenChannelSettingsProvider, { channelUrl: props === null || props === void 0 ? void 0 : props.channelUrl, onCloseClick: props === null || props === void 0 ? void 0 : props.onCloseClick, onBeforeUpdateChannel: props === null || props === void 0 ? void 0 : props.onBeforeUpdateChannel, onChannelModified: props === null || props === void 0 ? void 0 : props.onChannelModified, onDeleteChannel: props === null || props === void 0 ? void 0 : props.onDeleteChannel, disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile, renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile },
        React__default.default.createElement(OpenChannelSettings_components_OpenChannelSettingsUI, { renderOperatorUI: props === null || props === void 0 ? void 0 : props.renderOperatorUI, renderParticipantList: props === null || props === void 0 ? void 0 : props.renderParticipantList })));
};

module.exports = OpenChannelSetting;
//# sourceMappingURL=OpenChannelSettings.js.map
