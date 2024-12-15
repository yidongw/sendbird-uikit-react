'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ChannelSettings_context = require('../context.js');
var ChannelSettings_components_ChannelSettingsHeader = require('./ChannelSettingsHeader.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var ui_Label = require('../../chunks/bundle-D8-2bEdY.js');
var LocalizationContext = require('../../chunks/bundle-CmBrGegh.js');
var ui_Icon = require('../../ui/Icon.js');
var ChannelSettings_components_ChannelProfile = require('./ChannelProfile.js');
var ChannelSettings_components_LeaveChannel = require('./LeaveChannel.js');
var utils = require('../../chunks/bundle-BYHj6UqH.js');
var ChannelSettings_components_ChannelSettingsMenuItem = require('./ChannelSettingsMenuItem.js');
var ChannelSettings_components_ChannelSettingMenuList = require('./ChannelSettingMenuList.js');
var ChannelSettings_hooks_useMenuList = require('../hooks/useMenuList.js');
var MutedMemberList = require('../../chunks/bundle-CCBu2bix.js');
var MemberList = require('../../chunks/bundle-DF4jOSgA.js');
require('../../withSendbird.js');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-Bn25Hepq.js');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-DfISCDoH.js');
require('../../chunks/bundle-e2d_I3io.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('react-dom');
require('../../chunks/bundle-CzcmYPsN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-DrXG_ZI5.js');
require('../../ui/Header.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-LSLwWEwG.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-Dmsb_oex.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../chunks/bundle-B1unRPhi.js');
require('./EditDetailsModal.js');
require('../../ui/Input.js');
require('../../chunks/bundle-CIP3LaaL.js');
require('@sendbird/chat/message');
require('../../ui/Badge.js');
require('../../ui/Toggle.js');
require('../../chunks/bundle-B5z2w3PD.js');
require('../../ui/UserListItem.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-Dcn1Gf-8.js');
require('../../chunks/bundle-HoCgvUVa.js');
require('../../chunks/bundle-mTQamCVh.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var ChannelSettingsUI = function (props) {
    var _a;
    var _b = ChannelSettings_context.useChannelSettingsContext(), channel = _b.channel, invalidChannel = _b.invalidChannel, onCloseClick = _b.onCloseClick, loading = _b.loading;
    var _c = utils.deleteNullish(props), _d = _c.renderHeader, renderHeader = _d === void 0 ? function (props) { return React__default.default.createElement(ChannelSettings_components_ChannelSettingsHeader.ChannelSettingsHeader, _tslib.__assign({}, props)); } : _d, renderLeaveChannel = _c.renderLeaveChannel, renderChannelProfile = _c.renderChannelProfile, _e = _c.renderModerationPanel, renderModerationPanel = _e === void 0 ? function (props) { return React__default.default.createElement(ChannelSettings_components_ChannelSettingMenuList.MenuListByRole, _tslib.__assign({}, props)); } : _e, renderPlaceholderError = _c.renderPlaceholderError, renderPlaceholderLoading = _c.renderPlaceholderLoading;
    var menuItems = ChannelSettings_hooks_useMenuList.useMenuItems();
    var state = useSendbirdStateContext.useSendbirdStateContext();
    var _f = React.useState(false), showLeaveChannelModal = _f[0], setShowLeaveChannelModal = _f[1];
    var isOnline = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.isOnline;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    if (loading) {
        if (renderPlaceholderLoading)
            return renderPlaceholderLoading();
        return React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.LOADING });
    }
    var headerProps = { onCloseClick: onCloseClick };
    if (invalidChannel || !channel) {
        return (React__default.default.createElement("div", null,
            renderHeader(headerProps),
            React__default.default.createElement("div", null, renderPlaceholderError ? renderPlaceholderError() : React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.WRONG }))));
    }
    return (React__default.default.createElement(React__default.default.Fragment, null,
        renderHeader(headerProps),
        React__default.default.createElement("div", { className: "sendbird-channel-settings__scroll-area" },
            (renderChannelProfile === null || renderChannelProfile === void 0 ? void 0 : renderChannelProfile()) || React__default.default.createElement(ChannelSettings_components_ChannelProfile, null), renderModerationPanel === null || renderModerationPanel === void 0 ? void 0 :
            renderModerationPanel({ menuItems: menuItems }),
            (renderLeaveChannel === null || renderLeaveChannel === void 0 ? void 0 : renderLeaveChannel()) || (React__default.default.createElement(ChannelSettings_components_ChannelSettingsMenuItem.MenuItem, { className: utils.classnames(!isOnline ? 'sendbird-channel-settings__panel-item__disabled' : '', 'sendbird-channel-settings__panel-item__leave-channel'), onKeyDown: function () {
                    if (!isOnline)
                        return;
                    setShowLeaveChannelModal(true);
                }, onClick: function () {
                    if (!isOnline)
                        return;
                    setShowLeaveChannelModal(true);
                }, renderLeft: function () { return (React__default.default.createElement(ui_Icon.default, { className: ['sendbird-channel-settings__panel-icon-left', 'sendbird-channel-settings__panel-icon__leave'].join(' '), type: ui_Icon.IconTypes.LEAVE, fillColor: ui_Icon.IconColors.ERROR, height: "24px", width: "24px" })); }, renderMiddle: function () { return (React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__LEAVE_CHANNEL__TITLE)); } })),
            showLeaveChannelModal && (React__default.default.createElement(ChannelSettings_components_LeaveChannel, { onCancel: function () {
                    setShowLeaveChannelModal(false);
                }, onSubmit: function () {
                    setShowLeaveChannelModal(false);
                    onCloseClick === null || onCloseClick === void 0 ? void 0 : onCloseClick();
                } })))));
};

exports.BannedUserList = MutedMemberList.BannedUserList;
exports.MutedMemberList = MutedMemberList.MutedMemberList;
exports.OperatorList = MutedMemberList.OperatorList;
exports.MemberList = MemberList.MemberList;
exports.default = ChannelSettingsUI;
//# sourceMappingURL=ChannelSettingsUI.js.map
