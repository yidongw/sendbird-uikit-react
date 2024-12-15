import { c as __spreadArray, _ as __assign } from '../chunks/bundle-Ck-Lg2K3.js';
import React__default, { useRef, useState, useEffect } from 'react';
import { f as format } from '../chunks/bundle-D4fsEPre.js';
import { A as Avatar } from '../chunks/bundle-BbICJE5Z.js';
import { C as ContextMenu, b as MenuItems, c as MenuItem } from '../chunks/bundle-A5WEPjt6.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import IconButton from './IconButton.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-Di0Zwz2X.js';
import Loader from './Loader.js';
import UserProfile from './UserProfile.js';
import { u as useUserProfileContext } from '../chunks/bundle-C3toIOqd.js';
import { u as useLocalization } from '../chunks/bundle-CbLNLMef.js';
import { c as copyToClipboard } from '../chunks/bundle-BZaJy0ve.js';
import { u as uuidv4 } from '../chunks/bundle-gMJSD9hQ.js';
import { g as getSenderFromMessage, s as showMenuTrigger, i as isFineCopy, a as isFineEdit, b as isFineResend, c as isFineDelete, O as OpenChannelMobileMenu, d as checkIsPending, e as checkIsFailed } from '../chunks/bundle-iQUZ2efl.js';
import { u as useMediaQueryContext } from '../chunks/bundle-Bk1oUUzJ.js';
import { u as useLongPress } from '../chunks/bundle-B6cyKQvH.js';
import { e as isEditedMessage } from '../chunks/bundle-BL0uQSu6.js';
import '../chunks/bundle-CnkNoe49.js';
import './ImageRenderer.js';
import '../chunks/bundle-pQHYhigr.js';
import '../chunks/bundle-CjhP75at.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import './SortByRow.js';
import '../withSendbird.js';
import '../chunks/bundle-B80WXNZi.js';
import '../sendbirdSelectors.js';
import '../chunks/bundle-YOpvheAB.js';
import './Button.js';
import '../useSendbirdStateContext.js';
import '@sendbird/uikit-tools';
import '../chunks/bundle-ptS-tNRF.js';
import 'css-vars-ponyfill';
import '@sendbird/chat/groupChannel';
import '../chunks/bundle-CHD1aKHO.js';
import '../chunks/bundle-DgxVBBM3.js';
import '../chunks/bundle-fwRBR_Yw.js';
import '../utils/message/getOutgoingMessageState.js';

function OpenchannelUserMessage(_a) {
    var className = _a.className, message = _a.message, isOperator = _a.isOperator, _b = _a.isEphemeral, isEphemeral = _b === void 0 ? false : _b, userId = _a.userId, resendMessage = _a.resendMessage, disabled = _a.disabled, showEdit = _a.showEdit, showRemove = _a.showRemove, chainTop = _a.chainTop;
    // hooks
    var _c = useLocalization(), stringSet = _c.stringSet, dateLocale = _c.dateLocale;
    var _d = useUserProfileContext(), disableUserProfile = _d.disableUserProfile, renderUserProfile = _d.renderUserProfile;
    var messageRef = useRef();
    var avatarRef = useRef();
    var contextMenuRef = useRef();
    var mobileMenuRef = useRef();
    var _e = useState({}), contextStyle = _e[0], setContextStyle = _e[1];
    var _f = useState(false), contextMenu = _f[0], setContextMenu = _f[1];
    // consts
    var status = message === null || message === void 0 ? void 0 : message.sendingStatus;
    var isPending = checkIsPending(status);
    var isFailed = checkIsFailed(status);
    var sender = getSenderFromMessage(message);
    // place context menu top depending clientHeight of message component
    useEffect(function () {
        var _a;
        if (((_a = messageRef === null || messageRef === void 0 ? void 0 : messageRef.current) === null || _a === void 0 ? void 0 : _a.clientHeight) && messageRef.current.clientHeight > 36) {
            setContextStyle({ top: '8px ' });
        }
        else {
            setContextStyle({ top: '2px' });
        }
    }, [window.innerWidth]);
    var onLongPress = useLongPress({
        onLongPress: function () {
            setContextMenu(true);
        },
    });
    var isMobile = useMediaQueryContext().isMobile;
    if (!message || message.messageType !== 'user') {
        return React__default.createElement(React__default.Fragment, null);
    }
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", { className: __spreadArray(__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
                'sendbird-openchannel-user-message',
            ], false).join(' '), ref: messageRef },
            React__default.createElement("div", { className: "sendbird-openchannel-user-message__left" }, !chainTop && (React__default.createElement(ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.createElement(Avatar, { className: "sendbird-openchannel-user-message__left__avatar", src: sender.profileUrl || '', ref: avatarRef, width: "28px", height: "28px", onClick: function () {
                        if (!disableUserProfile) {
                            toggleDropdown();
                        }
                    } })); }, menuItems: function (closeDropdown) { return (renderUserProfile
                    ? (renderUserProfile({
                        user: sender,
                        close: closeDropdown,
                        currentUserId: userId,
                        avatarRef: avatarRef,
                    }))
                    : (React__default.createElement(MenuItems, { parentRef: avatarRef, parentContainRef: avatarRef, closeDropdown: closeDropdown, style: { paddingTop: '0px', paddingBottom: '0px' } },
                        React__default.createElement(UserProfile, { user: sender, onSuccess: closeDropdown, disableMessaging: true })))); } }))),
            React__default.createElement("div", { className: "sendbird-openchannel-user-message__right" },
                !chainTop && (React__default.createElement("div", { className: "sendbird-openchannel-user-message__right__top" },
                    React__default.createElement(Label, { className: "sendbird-openchannel-user-message__right__top__sender-name", type: LabelTypography.CAPTION_2, color: isOperator ? LabelColors.SECONDARY_3 : LabelColors.ONBACKGROUND_2 }, sender && (sender.friendName
                        || sender.nickname
                        || sender.userId)),
                    React__default.createElement(Label, { className: "sendbird-openchannel-user-message__right__top__sent-at", type: LabelTypography.CAPTION_3, color: LabelColors.ONBACKGROUND_3 }, (message === null || message === void 0 ? void 0 : message.createdAt) && (format(message === null || message === void 0 ? void 0 : message.createdAt, stringSet.DATE_FORMAT__MESSAGE_CREATED_AT, {
                        locale: dateLocale,
                    }))))),
                React__default.createElement("div", __assign({}, (isMobile ? __assign({}, onLongPress) : {}), { className: "sendbird-openchannel-user-message__right__bottom", ref: mobileMenuRef }),
                    React__default.createElement(Label, { className: "sendbird-openchannel-user-message__right__bottom__message", type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_1 }, message === null || message === void 0 ? void 0 :
                        message.message,
                        isEditedMessage(message) && (React__default.createElement(Label, { key: uuidv4(), type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_2, className: "sendbird-openchannel-user-message-word" }, " ".concat(stringSet.MESSAGE_EDITED, " "))))),
                (isPending || isFailed) && (React__default.createElement("div", { className: "sendbird-openchannel-user-message__right__tail" },
                    isPending && (React__default.createElement(Loader, { width: "16px", height: "16px" },
                        React__default.createElement(Icon, { className: "sendbird-openchannel-user-message__right__tail__pending", type: IconTypes.SPINNER, fillColor: IconColors.PRIMARY, width: "16px", height: "16px" }))),
                    isFailed && (React__default.createElement(Icon, { className: "sendbird-openchannel-user-message__right__tail__failed", type: IconTypes.ERROR, fillColor: IconColors.ERROR, width: "16px", height: "16px" }))))),
            !isMobile && (React__default.createElement("div", { className: "sendbird-openchannel-user-message__context-menu", ref: contextMenuRef, style: contextStyle },
                React__default.createElement(ContextMenu, { menuTrigger: function (toggleDropdown) { return (showMenuTrigger({ message: message, userId: userId, status: status }) && (React__default.createElement(IconButton, { className: "sendbird-openchannel-user-message__context-menu--icon", width: "32px", height: "32px", onClick: function () {
                            toggleDropdown();
                        } },
                        React__default.createElement(Icon, { type: IconTypes.MORE, fillColor: IconColors.CONTENT_INVERSE, width: "24px", height: "24px" })))); }, menuItems: function (closeDropdown) { return (React__default.createElement(MenuItems, { parentRef: contextMenuRef, parentContainRef: contextMenuRef, closeDropdown: closeDropdown, openLeft: true },
                        isFineCopy({ message: message, userId: userId, status: status }) && (React__default.createElement(MenuItem, { className: "sendbird-openchannel-user-message__context-menu__copy", onClick: function () {
                                copyToClipboard(message.message);
                                closeDropdown();
                            }, testID: "open_channel_user_message_menu_copy" }, stringSet.CONTEXT_MENU_DROPDOWN__COPY)),
                        (!isEphemeral && isFineEdit({ message: message, userId: userId, status: status })) && (React__default.createElement(MenuItem, { className: "sendbird-openchannel-user-message__context-menu__edit", onClick: function () {
                                if (disabled) {
                                    return;
                                }
                                showEdit(true);
                                closeDropdown();
                            }, testID: "open_channel_user_message_menu_edit" }, stringSet.CONTEXT_MENU_DROPDOWN__EDIT)),
                        isFineResend({ message: message, userId: userId, status: status }) && (React__default.createElement(MenuItem, { className: "sendbird-openchannel-user-message__context-menu__resend", onClick: function () {
                                resendMessage(message);
                                closeDropdown();
                            }, testID: "open_channel_user_message_menu_resend" }, stringSet.CONTEXT_MENU_DROPDOWN__RESEND)),
                        (!isEphemeral && isFineDelete({ message: message, userId: userId, status: status })) && (React__default.createElement(MenuItem, { className: "sendbird-openchannel-user-message__context-menu__delete", onClick: function () {
                                if (disabled) {
                                    return;
                                }
                                showRemove(true);
                                closeDropdown();
                            }, testID: "open_channel_user_message_menu_delete" }, stringSet.CONTEXT_MENU_DROPDOWN__DELETE)))); } })))),
        contextMenu && (React__default.createElement(OpenChannelMobileMenu, { message: message, parentRef: mobileMenuRef, hideMenu: function () {
                setContextMenu(false);
            }, showRemove: function () {
                setContextMenu(false);
                showRemove(true);
            }, showEdit: function () {
                setContextMenu(false);
                showEdit(true);
            }, copyToClipboard: function () {
                setContextMenu(false);
                copyToClipboard(message === null || message === void 0 ? void 0 : message.message);
            }, resendMessage: function () {
                setContextMenu(false);
                resendMessage(message);
            } }))));
}

export { OpenchannelUserMessage as default };
//# sourceMappingURL=OpenchannelUserMessage.js.map
