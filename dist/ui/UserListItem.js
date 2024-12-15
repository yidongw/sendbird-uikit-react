import { c as __spreadArray } from '../chunks/bundle-HcNswZ5p.js';
import React__default, { useRef } from 'react';
import '@sendbird/uikit-tools';
import '../withSendbird.js';
import '../chunks/bundle-ja8H3E0K.js';
import 'css-vars-ponyfill';
import '../chunks/bundle-Bd-i99nk.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '@sendbird/chat/groupChannel';
import { c as classnames } from '../chunks/bundle-0WaCg6X7.js';
import '../chunks/bundle-zy1mnw8U.js';
import { u as useLocalization } from '../chunks/bundle-DhMUg-L7.js';
import '../chunks/bundle-DnSobLtx.js';
import { C as ContextMenu, b as MenuItems } from '../chunks/bundle-BKzcG-aC.js';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import { u as useUserProfileContext } from '../chunks/bundle-B91Bhfde.js';
import { A as Avatar } from '../chunks/bundle-2pbuHA3C.js';
import MutedAvatarOverlay from './MutedAvatarOverlay.js';
import Checkbox from './Checkbox.js';
import UserProfile from './UserProfile.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-Qkp2VIaZ.js';
import { p as pxToNumber } from '../chunks/bundle-DkDQ1PWY.js';
import 'react-dom';
import './IconButton.js';
import './Button.js';
import './Icon.js';
import '../chunks/bundle-C5iY_IvV.js';
import '../chunks/bundle-DQk0aENq.js';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-DjLJFwD7.js';
import '../chunks/bundle-DB7YSrIT.js';
import '../chunks/bundle-dybWaw0v.js';
import './SortByRow.js';
import './ImageRenderer.js';
import '../sendbirdSelectors.js';
import '../chunks/bundle-BwmZGijR.js';

function UserListItem(_a) {
    var user = _a.user, channel = _a.channel, _b = _a.className, className = _b === void 0 ? undefined : _b, checked = _a.checked, checkBox = _a.checkBox, isOperator = _a.isOperator, disabled = _a.disabled, disableMessaging = _a.disableMessaging, action = _a.action, onChange = _a.onChange, _c = _a.avatarSize, avatarSize = _c === void 0 ? '40px' : _c, onClick = _a.onClick, onUserAvatarClick = _a.onUserAvatarClick, renderListItemMenu = _a.renderListItemMenu, _d = _a.size, size = _d === void 0 ? 'normal' : _d;
    var operator = isOperator !== null && isOperator !== void 0 ? isOperator : (user === null || user === void 0 ? void 0 : user.role) === 'operator';
    var uniqueKey = user.userId;
    var actionRef = useRef(null);
    var parentRef = useRef(null);
    var avatarRef = useRef(null);
    var _e = useUserProfileContext(), disableUserProfile = _e.disableUserProfile, renderUserProfile = _e.renderUserProfile;
    var stringSet = useLocalization().stringSet;
    var config = useSendbirdStateContext().config;
    var currentUser = config.userId;
    var itemClassName = size === 'small' ? 'sendbird-user-list-item--small' : 'sendbird-user-list-item';
    var avatarClassName = size === 'small' ? 'sendbird-user-list-item--small__avatar' : 'sendbird-user-list-item__avatar';
    var titleClassName = size === 'small' ? 'sendbird-user-list-item--small__title' : 'sendbird-user-list-item__title';
    var subtitleClassName = size === 'small' ? 'sendbird-user-list-item--small__subtitle' : 'sendbird-user-list-item__subtitle';
    var checkboxClassName = size === 'small' ? 'sendbird-user-list-item--small__checkbox' : 'sendbird-user-list-item__checkbox';
    var actionClassName = size === 'small' ? 'sendbird-user-list-item--small__action' : 'sendbird-user-list-item__action';
    var operatorClassName = size === 'small' ? 'sendbird-user-list-item--small__operator' : 'sendbird-user-list-item__operator';
    return (React__default.createElement("div", { className: classnames.apply(void 0, __spreadArray([itemClassName], (Array.isArray(className) ? className : [className]), false)), ref: parentRef },
        React__default.createElement(ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.createElement(React__default.Fragment, null,
                React__default.createElement(Avatar, { className: avatarClassName, ref: avatarRef, src: (user === null || user === void 0 ? void 0 : user.profileUrl) || (user === null || user === void 0 ? void 0 : user.plainProfileUrl) || '', width: avatarSize, height: avatarSize, onClick: function () {
                        var _a;
                        if (!disableUserProfile) {
                            toggleDropdown();
                            (_a = (onUserAvatarClick !== null && onUserAvatarClick !== void 0 ? onUserAvatarClick : onClick)) === null || _a === void 0 ? void 0 : _a();
                        }
                    } }),
                (user === null || user === void 0 ? void 0 : user.isMuted) && (React__default.createElement(MutedAvatarOverlay, { height: pxToNumber(avatarSize), width: pxToNumber(avatarSize) })))); }, menuItems: function (closeDropdown) { return (renderUserProfile
                ? renderUserProfile({
                    user: user,
                    currentUserId: currentUser !== null && currentUser !== void 0 ? currentUser : '',
                    close: closeDropdown,
                    avatarRef: avatarRef,
                })
                : (React__default.createElement(MenuItems, { openLeft: true, parentRef: avatarRef, parentContainRef: avatarRef, closeDropdown: closeDropdown, style: { paddingTop: '0px', paddingBottom: '0px' } },
                    React__default.createElement(UserProfile, { disableMessaging: disableMessaging, user: user, currentUserId: currentUser, onSuccess: closeDropdown })))); } }),
        React__default.createElement(Label, { className: titleClassName, type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 },
            user.nickname || stringSet.NO_NAME,
            (currentUser === user.userId) && (stringSet.CHANNEL_SETTING__MEMBERS__YOU)),
        !user.nickname && (React__default.createElement(Label, { className: subtitleClassName, type: LabelTypography.CAPTION_3, color: LabelColors.ONBACKGROUND_2 }, user.userId)),
        checkBox && (React__default.createElement("label", { className: checkboxClassName, htmlFor: uniqueKey },
            React__default.createElement(Checkbox, { id: uniqueKey, checked: checked, disabled: disabled, onChange: function (event) { return onChange === null || onChange === void 0 ? void 0 : onChange(event); } }))),
        operator && (React__default.createElement(Label, { className: classnames(operatorClassName, checkBox && 'checkbox'), type: LabelTypography.SUBTITLE_2, color: LabelColors.ONBACKGROUND_2 }, stringSet.LABEL__OPERATOR)),
        !checkBox && !renderListItemMenu && action && (React__default.createElement("div", { className: actionClassName, ref: actionRef }, action({ actionRef: actionRef, parentRef: parentRef }))),
        !checkBox && renderListItemMenu && (React__default.createElement("div", { className: actionClassName, ref: actionRef }, renderListItemMenu({ channel: channel, user: user })))));
}

export { UserListItem, UserListItem as default };
//# sourceMappingURL=UserListItem.js.map
