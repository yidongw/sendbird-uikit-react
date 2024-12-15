'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-CmBrGegh.js');
var ui_Label = require('../../chunks/bundle-D8-2bEdY.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Badge = require('../../ui/Badge.js');
var MemberList = require('../../chunks/bundle-DF4jOSgA.js');
var ChannelSettings_context = require('../context.js');
require('../../chunks/bundle-DRvomNLJ.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../chunks/bundle-BYHj6UqH.js');
require('@sendbird/chat');
require('../../ui/Button.js');
require('../../chunks/bundle-B5z2w3PD.js');
require('@sendbird/chat/openChannel');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-lGoyqUWm.js');
require('../../ui/IconButton.js');
require('../../chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('../../ui/UserListItem.js');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-DfISCDoH.js');
require('../../chunks/bundle-CzcmYPsN.js');
require('css-vars-ponyfill');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../chunks/bundle-Bn25Hepq.js');
require('../../chunks/bundle-Dmsb_oex.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-Dcn1Gf-8.js');
require('../../chunks/bundle-HoCgvUVa.js');
require('../../chunks/bundle-CIP3LaaL.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-mTQamCVh.js');
require('../../chunks/bundle-DrXG_ZI5.js');

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
