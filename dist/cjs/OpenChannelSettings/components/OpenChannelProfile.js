'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-CmBrGegh.js');
var ui_Label = require('../../chunks/bundle-D8-2bEdY.js');
var ui_TextButton = require('../../ui/TextButton.js');
var ui_OpenChannelAvatar = require('../../ui/OpenChannelAvatar.js');
var OpenChannelSettings_components_EditDetailsModal = require('./EditDetailsModal.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var OpenChannelSettings_context = require('../context.js');
require('../../chunks/bundle-DRvomNLJ.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../chunks/bundle-LSLwWEwG.js');
require('../../chunks/bundle-Dmsb_oex.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-BYHj6UqH.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-B1unRPhi.js');
require('../../chunks/bundle-Dcn1Gf-8.js');
require('../../chunks/bundle-DfISCDoH.js');
require('../../chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('react-dom');
require('../../chunks/bundle-CzcmYPsN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../ui/Input.js');
require('../../chunks/bundle-Bn25Hepq.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function ChannelProfile() {
    var _a, _b;
    var globalState = useSendbirdStateContext.useSendbirdStateContext();
    var disabled = !((_a = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _a === void 0 ? void 0 : _a.isOnline);
    var theme = (_b = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _b === void 0 ? void 0 : _b.theme;
    var channel = OpenChannelSettings_context.useOpenChannelSettingsContext().channel;
    var title = channel === null || channel === void 0 ? void 0 : channel.name;
    var _c = React.useState(false), showModal = _c[0], setShowModal = _c[1];
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React__default.default.createElement("div", { className: "sendbird-openchannel-profile" },
        React__default.default.createElement("div", { className: "sendbird-openchannel-profile--inner" },
            React__default.default.createElement("div", { className: "sendbird-openchannel-profile__avatar" },
                React__default.default.createElement(ui_OpenChannelAvatar, { channel: channel, theme: theme, height: 80, width: 80 })),
            React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_2, color: ui_Label.LabelColors.ONBACKGROUND_1, className: "sendbird-openchannel-profile__title" }, title || stringSet.OPEN_CHANNEL_SETTINGS__NO_TITLE),
            React__default.default.createElement(ui_TextButton, { disabled: disabled, className: "sendbird-openchannel-profile__edit", onClick: function () {
                    if (disabled) {
                        return;
                    }
                    setShowModal(true);
                }, disableUnderline: true },
                React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BUTTON_1, color: disabled ? ui_Label.LabelColors.ONBACKGROUND_2 : ui_Label.LabelColors.PRIMARY }, stringSet.CHANNEL_SETTING__PROFILE__EDIT)),
            showModal && (React__default.default.createElement(OpenChannelSettings_components_EditDetailsModal, { onCancel: function () { return setShowModal(false); } })))));
}

module.exports = ChannelProfile;
//# sourceMappingURL=OpenChannelProfile.js.map
