'use strict';

var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var OpenChannelSettings_context = require('../context.js');
var LocalizationContext = require('../../chunks/bundle-Cy1ruNzs.js');
var ui_Label = require('../../chunks/bundle-CAR4EIKs.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var OpenChannelSettings_components_OperatorUI = require('./OperatorUI.js');
var OpenChannelSettings_components_ParticipantUI = require('../../chunks/bundle-Lyx6fIGW.js');
require('../../withSendbird.js');
require('../../chunks/bundle-Bdr7xlea.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-DgjptBQW.js');
require('@sendbird/uikit-tools');
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
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-C1poxl5k.js');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../ui/Loader.js');
require('./OpenChannelProfile.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-CLzI6bbe.js');
require('../../ui/OpenChannelAvatar.js');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../chunks/bundle-B2Yph-6C.js');
require('./EditDetailsModal.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../ui/Input.js');
require('../../ui/Accordion.js');
require('../../ui/AccordionGroup.js');
require('../../ui/UserListItem.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function InvalidChannel(_a) {
    var onCloseClick = _a.onCloseClick;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React__default.default.createElement("div", { className: "sendbird-openchannel-settings" },
        React__default.default.createElement("div", { className: "sendbird-openchannel-settings__header" },
            React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.H_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__HEADER__TITLE),
            React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.CLOSE, className: "sendbird-openchannel-settings__close-icon", height: "24px", width: "24px", onClick: function () {
                    onCloseClick === null || onCloseClick === void 0 ? void 0 : onCloseClick();
                } })),
        React__default.default.createElement("div", { className: "sendbird-openchannel-settings__placeholder" },
            React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.WRONG }))));
}

var OpenChannelUI = function (_a) {
    var _b, _c, _d;
    var renderOperatorUI = _a.renderOperatorUI, renderParticipantList = _a.renderParticipantList;
    var _e = OpenChannelSettings_context.useOpenChannelSettingsContext(), channel = _e.channel, onCloseClick = _e.onCloseClick, isChannelInitialized = _e.isChannelInitialized;
    var globalStore = useSendbirdStateContext.useSendbirdStateContext();
    var logger = (_b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _b === void 0 ? void 0 : _b.logger;
    var user = (_d = (_c = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _c === void 0 ? void 0 : _c.userStore) === null || _d === void 0 ? void 0 : _d.user;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    if (isChannelInitialized && !channel) {
        return (React__default.default.createElement(InvalidChannel, { onCloseClick: function () {
                logger.info('OpenChannelSettings: Click close');
                if (onCloseClick) {
                    onCloseClick();
                }
            } }));
    }
    return (React__default.default.createElement("div", { className: 'sendbird-openchannel-settings' },
        (channel === null || channel === void 0 ? void 0 : channel.isOperator(user)) && ((renderOperatorUI === null || renderOperatorUI === void 0 ? void 0 : renderOperatorUI()) || (React__default.default.createElement(OpenChannelSettings_components_OperatorUI.OperatorUI, null))),
        !(channel === null || channel === void 0 ? void 0 : channel.isOperator(user)) && (React__default.default.createElement("div", { className: "sendbird-openchannel-settings__participant" },
            React__default.default.createElement("div", { className: "sendbird-openchannel-settings__header" },
                React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.H_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.OPEN_CHANNEL_SETTINGS__PARTICIPANTS_TITLE),
                React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.CLOSE, className: "sendbird-openchannel-settings__close-icon", height: "24px", width: "24px", onClick: function () {
                        onCloseClick === null || onCloseClick === void 0 ? void 0 : onCloseClick();
                    } })),
            (renderParticipantList === null || renderParticipantList === void 0 ? void 0 : renderParticipantList()) || (React__default.default.createElement(OpenChannelSettings_components_ParticipantUI.ParticipantList, null))))));
};

module.exports = OpenChannelUI;
//# sourceMappingURL=OpenChannelSettingsUI.js.map
