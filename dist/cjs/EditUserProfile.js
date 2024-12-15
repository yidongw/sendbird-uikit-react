'use strict';

var React = require('react');
var EditUserProfile_context = require('./EditUserProfile/context.js');
var EditUserProfile_components_EditUserProfileUI = require('./EditUserProfile/components/EditUserProfileUI.js');
require('./chunks/bundle-Bdr7xlea.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-Cy1ruNzs.js');
require('./chunks/bundle-Dio8pG-T.js');
require('./chunks/bundle-DQPZ4z8-.js');
require('./chunks/bundle-DZhkNDpN.js');
require('./chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-Dr9yFtKa.js');
require('./chunks/bundle-C2CwvM-u.js');
require('./chunks/bundle-BD0wJiNh.js');
require('./chunks/bundle-Ck6ikNW6.js');
require('react-dom');
require('./chunks/bundle-DrIKAEHN.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('./chunks/bundle-CAR4EIKs.js');
require('./ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-CJM9Pdwg.js');
require('./chunks/bundle-BKyZTqvq.js');
require('./ui/SortByRow.js');
require('./ui/Input.js');
require('./chunks/bundle-C8wv9DWs.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-B4PTJ_bJ.js');
require('./ui/TextButton.js');
require('./chunks/bundle-CLzI6bbe.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var EditUserProfile = function (props) {
    var onEditProfile = props.onEditProfile, onCancel = props.onCancel, onThemeChange = props.onThemeChange;
    return (React__default.default.createElement(EditUserProfile_context.EditUserProfileProvider, { onEditProfile: onEditProfile, onCancel: onCancel, onThemeChange: onThemeChange },
        React__default.default.createElement(EditUserProfile_components_EditUserProfileUI.EditUserProfileUI, null)));
};

module.exports = EditUserProfile;
//# sourceMappingURL=EditUserProfile.js.map
