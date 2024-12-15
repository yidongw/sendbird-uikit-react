'use strict';

var React = require('react');
var EditUserProfile_context = require('./EditUserProfile/context.js');
var EditUserProfile_components_EditUserProfileUI = require('./EditUserProfile/components/EditUserProfileUI.js');
require('./chunks/bundle-DRvomNLJ.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./chunks/bundle-CmBrGegh.js');
require('./chunks/bundle-Q9YDOzjz.js');
require('./chunks/bundle-COQ69cAW.js');
require('./chunks/bundle-DfISCDoH.js');
require('./chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-4kwoH67w.js');
require('./chunks/bundle-BCJ8mayg.js');
require('./chunks/bundle-C0tdWwa4.js');
require('./chunks/bundle-BYHj6UqH.js');
require('react-dom');
require('./chunks/bundle-CzcmYPsN.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('./chunks/bundle-D8-2bEdY.js');
require('./ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-2M4zbjEc.js');
require('./chunks/bundle-BYSQ-mQr.js');
require('./ui/SortByRow.js');
require('./ui/Input.js');
require('./chunks/bundle-Dmsb_oex.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-BvFqbvri.js');
require('./ui/TextButton.js');
require('./chunks/bundle-LSLwWEwG.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var EditUserProfile = function (props) {
    var onEditProfile = props.onEditProfile, onCancel = props.onCancel, onThemeChange = props.onThemeChange;
    return (React__default.default.createElement(EditUserProfile_context.EditUserProfileProvider, { onEditProfile: onEditProfile, onCancel: onCancel, onThemeChange: onThemeChange },
        React__default.default.createElement(EditUserProfile_components_EditUserProfileUI.EditUserProfileUI, null)));
};

module.exports = EditUserProfile;
//# sourceMappingURL=EditUserProfile.js.map
