import { _ as __assign } from '../../chunks/bundle-Ck-Lg2K3.js';
import React__default, { useState, useContext } from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { useChannelSettingsContext } from '../context.js';
import { ChannelSettingsHeader } from './ChannelSettingsHeader.js';
import PlaceHolder, { PlaceHolderTypes } from '../../ui/PlaceHolder.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-Di0Zwz2X.js';
import { L as LocalizationContext } from '../../chunks/bundle-CbLNLMef.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import ChannelProfile from './ChannelProfile.js';
import LeaveChannel from './LeaveChannel.js';
import { d as deleteNullish, c as classnames } from '../../chunks/bundle-pQHYhigr.js';
import { MenuItem } from './ChannelSettingsMenuItem.js';
import { MenuListByRole } from './ChannelSettingMenuList.js';
import { useMenuItems } from '../hooks/useMenuList.js';
export { B as BannedUserList, M as MutedMemberList, O as OperatorList } from '../../chunks/bundle-BhIrSa-z.js';
export { M as MemberList } from '../../chunks/bundle-BLslmkak.js';
import '../../withSendbird.js';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-C3toIOqd.js';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-ptS-tNRF.js';
import '../../chunks/bundle-BL0uQSu6.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-fwRBR_Yw.js';
import '../../chunks/bundle-CnkNoe49.js';
import '../../chunks/bundle-DgxVBBM3.js';
import 'react-dom';
import '../../chunks/bundle-Bk1oUUzJ.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-gMJSD9hQ.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CHD1aKHO.js';
import '../../chunks/bundle-A5WEPjt6.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-BD8hNBsp.js';
import '../../ui/Header.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-DUTd4XYU.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-B80WXNZi.js';
import '../../ui/ChannelAvatar.js';
import '../../chunks/bundle-BbICJE5Z.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-CjhP75at.js';
import '../../chunks/bundle-Bi8yp0Ws.js';
import './EditDetailsModal.js';
import '../../ui/Input.js';
import '../../chunks/bundle-DnsBu59R.js';
import '@sendbird/chat/message';
import '../../ui/Badge.js';
import '../../ui/Toggle.js';
import '../../chunks/bundle-CgvAKhwx.js';
import '../../ui/UserListItem.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-YOpvheAB.js';
import '../../chunks/bundle-Yva9Tory.js';
import '../../chunks/bundle-CKpGqedk.js';

var ChannelSettingsUI = function (props) {
    var _a;
    var _b = useChannelSettingsContext(), channel = _b.channel, invalidChannel = _b.invalidChannel, onCloseClick = _b.onCloseClick, loading = _b.loading;
    var _c = deleteNullish(props), _d = _c.renderHeader, renderHeader = _d === void 0 ? function (props) { return React__default.createElement(ChannelSettingsHeader, __assign({}, props)); } : _d, renderLeaveChannel = _c.renderLeaveChannel, renderChannelProfile = _c.renderChannelProfile, _e = _c.renderModerationPanel, renderModerationPanel = _e === void 0 ? function (props) { return React__default.createElement(MenuListByRole, __assign({}, props)); } : _e, renderPlaceholderError = _c.renderPlaceholderError, renderPlaceholderLoading = _c.renderPlaceholderLoading;
    var menuItems = useMenuItems();
    var state = useSendbirdStateContext();
    var _f = useState(false), showLeaveChannelModal = _f[0], setShowLeaveChannelModal = _f[1];
    var isOnline = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.isOnline;
    var stringSet = useContext(LocalizationContext).stringSet;
    if (loading) {
        if (renderPlaceholderLoading)
            return renderPlaceholderLoading();
        return React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.LOADING });
    }
    var headerProps = { onCloseClick: onCloseClick };
    if (invalidChannel || !channel) {
        return (React__default.createElement("div", null,
            renderHeader(headerProps),
            React__default.createElement("div", null, renderPlaceholderError ? renderPlaceholderError() : React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.WRONG }))));
    }
    return (React__default.createElement(React__default.Fragment, null,
        renderHeader(headerProps),
        React__default.createElement("div", { className: "sendbird-channel-settings__scroll-area" },
            (renderChannelProfile === null || renderChannelProfile === void 0 ? void 0 : renderChannelProfile()) || React__default.createElement(ChannelProfile, null), renderModerationPanel === null || renderModerationPanel === void 0 ? void 0 :
            renderModerationPanel({ menuItems: menuItems }),
            (renderLeaveChannel === null || renderLeaveChannel === void 0 ? void 0 : renderLeaveChannel()) || (React__default.createElement(MenuItem, { className: classnames(!isOnline ? 'sendbird-channel-settings__panel-item__disabled' : '', 'sendbird-channel-settings__panel-item__leave-channel'), onKeyDown: function () {
                    if (!isOnline)
                        return;
                    setShowLeaveChannelModal(true);
                }, onClick: function () {
                    if (!isOnline)
                        return;
                    setShowLeaveChannelModal(true);
                }, renderLeft: function () { return (React__default.createElement(Icon, { className: ['sendbird-channel-settings__panel-icon-left', 'sendbird-channel-settings__panel-icon__leave'].join(' '), type: IconTypes.LEAVE, fillColor: IconColors.ERROR, height: "24px", width: "24px" })); }, renderMiddle: function () { return (React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__LEAVE_CHANNEL__TITLE)); } })),
            showLeaveChannelModal && (React__default.createElement(LeaveChannel, { onCancel: function () {
                    setShowLeaveChannelModal(false);
                }, onSubmit: function () {
                    setShowLeaveChannelModal(false);
                    onCloseClick === null || onCloseClick === void 0 ? void 0 : onCloseClick();
                } })))));
};

export { ChannelSettingsUI as default };
//# sourceMappingURL=ChannelSettingsUI.js.map
