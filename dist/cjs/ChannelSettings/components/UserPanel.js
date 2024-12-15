'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-Cy1ruNzs.js');
var ui_Label = require('../../chunks/bundle-CAR4EIKs.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Badge = require('../../ui/Badge.js');
var MemberList = require('../../chunks/bundle-DYMi37Hl.js');
var ChannelSettings_context = require('../context.js');
require('../../chunks/bundle-Bdr7xlea.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../chunks/bundle-Ck6ikNW6.js');
require('@sendbird/chat');
require('../../ui/Button.js');
require('../../chunks/bundle-DR7YlSPs.js');
require('@sendbird/chat/openChannel');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-C1poxl5k.js');
require('../../ui/IconButton.js');
require('../../chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('../../ui/UserListItem.js');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-DZhkNDpN.js');
require('../../chunks/bundle-DrIKAEHN.js');
require('css-vars-ponyfill');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-DgjptBQW.js');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../chunks/bundle-CvCKKQx5.js');
require('../../chunks/bundle-BNuA_uqY.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-CpvSgBLD.js');
require('../../chunks/bundle-Dh0NAI0D.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var kFormatter = function (num) {
    return Math.abs(num) > 999
        ? "".concat((Math.abs(num) / 1000).toFixed(1), "K")
        : num;
};
var UserPanel = function () {
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var _a = React.useState(false), showAccordion = _a[0], setShowAccordion = _a[1];
    var channel = ChannelSettings_context.useChannelSettingsContext().channel;
    return (React__default.default.createElement("div", { className: 'sendbird-channel-settings__user-panel' },
        React__default.default.createElement("div", { className: [
                'sendbird-channel-settings__panel-item',
                'sendbird-channel-settings__members',
            ].join(' '), role: "switch", "aria-checked": showAccordion, onKeyDown: function () { return setShowAccordion(!showAccordion); }, onClick: function () { return setShowAccordion(!showAccordion); }, tabIndex: 0 },
            React__default.default.createElement(ui_Icon.default, { className: "sendbird-channel-settings__panel-icon-left", type: ui_Icon.IconTypes.MEMBERS, fillColor: ui_Icon.IconColors.PRIMARY, height: "24px", width: "24px" }),
            React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 },
                stringSet.CHANNEL_SETTING__MEMBERS__TITLE,
                React__default.default.createElement(ui_Badge, { className: 'sendbird-channel-settings__badge', count: channel ? kFormatter(channel === null || channel === void 0 ? void 0 : channel.memberCount) : '' })),
            React__default.default.createElement(ui_Icon.default, { className: [
                    'sendbird-channel-settings__panel-icon-right',
                    'sendbird-channel-settings__panel-icon--chevron',
                    (showAccordion ? 'sendbird-channel-settings__panel-icon--open' : ''),
                ].join(' '), type: ui_Icon.IconTypes.CHEVRON_RIGHT, height: "24px", width: "24px" })),
        showAccordion && (React__default.default.createElement(MemberList.MemberList, null))));
};

module.exports = UserPanel;
//# sourceMappingURL=UserPanel.js.map
