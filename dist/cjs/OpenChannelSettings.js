'use strict';

var React = require('react');
var OpenChannelSettings_components_OpenChannelSettingsUI = require('./OpenChannelSettings/components/OpenChannelSettingsUI.js');
var OpenChannelSettings_context = require('./OpenChannelSettings/context.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-Bdr7xlea.js');
require('./chunks/bundle-Cy1ruNzs.js');
require('./chunks/bundle-Dio8pG-T.js');
require('./chunks/bundle-CAR4EIKs.js');
require('./ui/Icon.js');
require('./chunks/bundle-Ck6ikNW6.js');
require('./ui/PlaceHolder.js');
require('./ui/Loader.js');
require('./OpenChannelSettings/components/OperatorUI.js');
require('./OpenChannelSettings/components/OpenChannelProfile.js');
require('./ui/TextButton.js');
require('./chunks/bundle-CLzI6bbe.js');
require('./ui/OpenChannelAvatar.js');
require('./chunks/bundle-C8wv9DWs.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-B4PTJ_bJ.js');
require('./chunks/bundle-B2Yph-6C.js');
require('./OpenChannelSettings/components/EditDetailsModal.js');
require('./chunks/bundle-C6Q6BfQY.js');
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
require('./ui/Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-CJM9Pdwg.js');
require('./chunks/bundle-BKyZTqvq.js');
require('./ui/SortByRow.js');
require('./ui/Input.js');
require('./chunks/bundle-Lyx6fIGW.js');
require('./chunks/bundle-DgjptBQW.js');
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
