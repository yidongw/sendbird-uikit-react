'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-CmBrGegh.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ChannelSettings_context = require('../context.js');
var ui_ChannelAvatar = require('../../ui/ChannelAvatar.js');
var ui_TextButton = require('../../ui/TextButton.js');
var ui_Label = require('../../chunks/bundle-D8-2bEdY.js');
var ChannelSettings_components_EditDetailsModal = require('./EditDetailsModal.js');
var index = require('../../chunks/bundle-e2d_I3io.js');
require('../../chunks/bundle-DRvomNLJ.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../withSendbird.js');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-Bn25Hepq.js');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-DfISCDoH.js');
require('../../chunks/bundle-BYHj6UqH.js');
require('react-dom');
require('../../chunks/bundle-CzcmYPsN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../ui/Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-DrXG_ZI5.js');
require('../../chunks/bundle-Dmsb_oex.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../chunks/bundle-B1unRPhi.js');
require('../../chunks/bundle-LSLwWEwG.js');
require('../../ui/Input.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-BCJ8mayg.js');

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
