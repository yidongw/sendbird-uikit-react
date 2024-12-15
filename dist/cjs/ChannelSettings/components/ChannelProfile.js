'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-Cy1ruNzs.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ChannelSettings_context = require('../context.js');
var ui_ChannelAvatar = require('../../ui/ChannelAvatar.js');
var ui_TextButton = require('../../ui/TextButton.js');
var ui_Label = require('../../chunks/bundle-CAR4EIKs.js');
var ChannelSettings_components_EditDetailsModal = require('./EditDetailsModal.js');
var index = require('../../chunks/bundle-BLoixwYr.js');
require('../../chunks/bundle-Bdr7xlea.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../withSendbird.js');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-DgjptBQW.js');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-DZhkNDpN.js');
require('../../chunks/bundle-Ck6ikNW6.js');
require('react-dom');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../ui/Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-Dh0NAI0D.js');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../chunks/bundle-B2Yph-6C.js');
require('../../chunks/bundle-CLzI6bbe.js');
require('../../ui/Input.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-C2CwvM-u.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var ChannelProfile = function () {
    var _a, _b, _c;
    var state = useSendbirdStateContext.useSendbirdStateContext();
    var channelSettingStore = ChannelSettings_context.useChannelSettingsContext();
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var _d = React.useState(false), showModal = _d[0], setShowModal = _d[1];
    var userId = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.userId;
    var theme = ((_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.theme) || 'light';
    var isOnline = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.isOnline;
    var disabled = !isOnline;
    var channel = channelSettingStore === null || channelSettingStore === void 0 ? void 0 : channelSettingStore.channel;
    var channelName = React.useMemo(function () {
        if (!(channel === null || channel === void 0 ? void 0 : channel.name) && !(channel === null || channel === void 0 ? void 0 : channel.members))
            return stringSet.NO_TITLE;
        if (index.isDefaultChannelName(channel))
            return ((channel === null || channel === void 0 ? void 0 : channel.members) || []).map(function (member) { return member.nickname || stringSet.NO_NAME; }).join(', ');
        return channel.name;
    }, [channel === null || channel === void 0 ? void 0 : channel.name, channel === null || channel === void 0 ? void 0 : channel.joinedMemberCount]);
    return (React__default.default.createElement("div", { className: "sendbird-channel-profile" },
        React__default.default.createElement("div", { className: "sendbird-channel-profile--inner" },
            React__default.default.createElement("div", { className: "sendbird-channel-profile__avatar" },
                React__default.default.createElement(ui_ChannelAvatar, { channel: channel, userId: userId, theme: theme, width: 80, height: 80 })),
            React__default.default.createElement(ui_Label.Label, { className: "sendbird-channel-profile__title", type: ui_Label.LabelTypography.SUBTITLE_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, channelName),
            React__default.default.createElement(ui_TextButton, { disabled: disabled, className: "sendbird-channel-profile__edit", onClick: function () {
                    if (disabled) {
                        return;
                    }
                    setShowModal(true);
                }, disableUnderline: true },
                React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BUTTON_1, color: disabled ? ui_Label.LabelColors.ONBACKGROUND_2 : ui_Label.LabelColors.PRIMARY }, stringSet.CHANNEL_SETTING__PROFILE__EDIT)),
            showModal && (React__default.default.createElement(ChannelSettings_components_EditDetailsModal, { onCancel: function () { return setShowModal(false); }, onSubmit: function () { return setShowModal(false); } })))));
};

module.exports = ChannelProfile;
//# sourceMappingURL=ChannelProfile.js.map
