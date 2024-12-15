'use strict';

var _tslib = require('../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var index$1 = require('../chunks/bundle-DspSuA8e.js');
var ui_Avatar = require('../chunks/bundle-C8wv9DWs.js');
var ui_ContextMenu = require('../chunks/bundle-BKyZTqvq.js');
var ui_Icon = require('./Icon.js');
var ui_IconButton = require('./IconButton.js');
var ui_Label = require('../chunks/bundle-CAR4EIKs.js');
var ui_Loader = require('./Loader.js');
var ui_UserProfile = require('./UserProfile.js');
var UserProfileContext = require('../chunks/bundle-DgjptBQW.js');
var LocalizationContext = require('../chunks/bundle-Cy1ruNzs.js');
var utils = require('../chunks/bundle-DHy4Izth.js');
var uuid = require('../chunks/bundle-C1poxl5k.js');
var index = require('../chunks/bundle-CJ7RaJYS.js');
var MediaQueryContext = require('../chunks/bundle-DrIKAEHN.js');
var useLongPress = require('../chunks/bundle-D_k3_Y_y.js');
var index$2 = require('../chunks/bundle-BLoixwYr.js');
require('../chunks/bundle-C2CwvM-u.js');
require('./ImageRenderer.js');
require('../chunks/bundle-Ck6ikNW6.js');
require('../chunks/bundle-B4PTJ_bJ.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('./SortByRow.js');
require('../withSendbird.js');
require('../chunks/bundle-Dio8pG-T.js');
require('../sendbirdSelectors.js');
require('../chunks/bundle-C6Q6BfQY.js');
require('./Button.js');
require('../useSendbirdStateContext.js');
require('@sendbird/uikit-tools');
require('../chunks/bundle-DZhkNDpN.js');
require('css-vars-ponyfill');
require('@sendbird/chat/groupChannel');
require('../chunks/bundle-CJM9Pdwg.js');
require('../chunks/bundle-BD0wJiNh.js');
require('../chunks/bundle-Dr9yFtKa.js');
require('../utils/message/getOutgoingMessageState.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function OpenchannelUserMessage(_a) {
    var className = _a.className, message = _a.message, isOperator = _a.isOperator, _b = _a.isEphemeral, isEphemeral = _b === void 0 ? false : _b, userId = _a.userId, resendMessage = _a.resendMessage, disabled = _a.disabled, showEdit = _a.showEdit, showRemove = _a.showRemove, chainTop = _a.chainTop;
    // hooks
    var _c = LocalizationContext.useLocalization(), stringSet = _c.stringSet, dateLocale = _c.dateLocale;
    var _d = UserProfileContext.useUserProfileContext(), disableUserProfile = _d.disableUserProfile, renderUserProfile = _d.renderUserProfile;
    var messageRef = React.useRef();
    var avatarRef = React.useRef();
    var contextMenuRef = React.useRef();
    var mobileMenuRef = React.useRef();
    var _e = React.useState({}), contextStyle = _e[0], setContextStyle = _e[1];
    var _f = React.useState(false), contextMenu = _f[0], setContextMenu = _f[1];
    // consts
    var status = message === null || message === void 0 ? void 0 : message.sendingStatus;
    var isPending = index.checkIsPending(status);
    var isFailed = index.checkIsFailed(status);
    var sender = index.getSenderFromMessage(message);
    // place context menu top depending clientHeight of message component
    React.useEffect(function () {
        var _a;
        if (((_a = messageRef === null || messageRef === void 0 ? void 0 : messageRef.current) === null || _a === void 0 ? void 0 : _a.clientHeight) && messageRef.current.clientHeight > 36) {
            setContextStyle({ top: '8px ' });
        }
        else {
            setContextStyle({ top: '2px' });
        }
    }, [window.innerWidth]);
    var onLongPress = useLongPress.useLongPress({
        onLongPress: function () {
            setContextMenu(true);
        },
    });
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    if (!message || message.messageType !== 'user') {
        return React__default.default.createElement(React__default.default.Fragment, null);
    }
    return (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement("div", { className: _tslib.__spreadArray(_tslib.__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
                'sendbird-openchannel-user-message',
            ], false).join(' '), ref: messageRef },
            React__default.default.createElement("div", { className: "sendbird-openchannel-user-message__left" }, !chainTop && (React__default.default.createElement(ui_ContextMenu.ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.default.createElement(ui_Avatar.Avatar, { className: "sendbird-openchannel-user-message__left__avatar", src: sender.profileUrl || '', ref: avatarRef, width: "28px", height: "28px", onClick: function () {
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
                    : (React__default.default.createElement(ui_ContextMenu.MenuItems, { parentRef: avatarRef, parentContainRef: avatarRef, closeDropdown: closeDropdown, style: { paddingTop: '0px', paddingBottom: '0px' } },
                        React__default.default.createElement(ui_UserProfile, { user: sender, onSuccess: closeDropdown, disableMessaging: true })))); } }))),
            React__default.default.createElement("div", { className: "sendbird-openchannel-user-message__right" },
                !chainTop && (React__default.default.createElement("div", { className: "sendbird-openchannel-user-message__right__top" },
                    React__default.default.createElement(ui_Label.Label, { className: "sendbird-openchannel-user-message__right__top__sender-name", type: ui_Label.LabelTypography.CAPTION_2, color: isOperator ? ui_Label.LabelColors.SECONDARY_3 : ui_Label.LabelColors.ONBACKGROUND_2 }, sender && (sender.friendName
                        || sender.nickname
                        || sender.userId)),
                    React__default.default.createElement(ui_Label.Label, { className: "sendbird-openchannel-user-message__right__top__sent-at", type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_3 }, (message === null || message === void 0 ? void 0 : message.createdAt) && (index$1.format(message === null || message === void 0 ? void 0 : message.createdAt, stringSet.DATE_FORMAT__MESSAGE_CREATED_AT, {
                        locale: dateLocale,
                    }))))),
                React__default.default.createElement("div", _tslib.__assign({}, (isMobile ? _tslib.__assign({}, onLongPress) : {}), { className: "sendbird-openchannel-user-message__right__bottom", ref: mobileMenuRef }),
                    React__default.default.createElement(ui_Label.Label, { className: "sendbird-openchannel-user-message__right__bottom__message", type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, message === null || message === void 0 ? void 0 :
                        message.message,
                        index$2.isEditedMessage(message) && (React__default.default.createElement(ui_Label.Label, { key: uuid.uuidv4(), type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_2, className: "sendbird-openchannel-user-message-word" }, " ".concat(stringSet.MESSAGE_EDITED, " "))))),
                (isPending || isFailed) && (React__default.default.createElement("div", { className: "sendbird-openchannel-user-message__right__tail" },
                    isPending && (React__default.default.createElement(ui_Loader, { width: "16px", height: "16px" },
                        React__default.default.createElement(ui_Icon.default, { className: "sendbird-openchannel-user-message__right__tail__pending", type: ui_Icon.IconTypes.SPINNER, fillColor: ui_Icon.IconColors.PRIMARY, width: "16px", height: "16px" }))),
                    isFailed && (React__default.default.createElement(ui_Icon.default, { className: "sendbird-openchannel-user-message__right__tail__failed", type: ui_Icon.IconTypes.ERROR, fillColor: ui_Icon.IconColors.ERROR, width: "16px", height: "16px" }))))),
            !isMobile && (React__default.default.createElement("div", { className: "sendbird-openchannel-user-message__context-menu", ref: contextMenuRef, style: contextStyle },
                React__default.default.createElement(ui_ContextMenu.ContextMenu, { menuTrigger: function (toggleDropdown) { return (index.showMenuTrigger({ message: message, userId: userId, status: status }) && (React__default.default.createElement(ui_IconButton, { className: "sendbird-openchannel-user-message__context-menu--icon", width: "32px", height: "32px", onClick: function () {
                            toggleDropdown();
                        } },
                        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.MORE, fillColor: ui_Icon.IconColors.CONTENT_INVERSE, width: "24px", height: "24px" })))); }, menuItems: function (closeDropdown) { return (React__default.default.createElement(ui_ContextMenu.MenuItems, { parentRef: contextMenuRef, parentContainRef: contextMenuRef, closeDropdown: closeDropdown, openLeft: true },
                        index.isFineCopy({ message: message, userId: userId, status: status }) && (React__default.default.createElement(ui_ContextMenu.MenuItem$1, { className: "sendbird-openchannel-user-message__context-menu__copy", onClick: function () {
                                utils.copyToClipboard(message.message);
                                closeDropdown();
                            }, testID: "open_channel_user_message_menu_copy" }, stringSet.CONTEXT_MENU_DROPDOWN__COPY)),
                        (!isEphemeral && index.isFineEdit({ message: message, userId: userId, status: status })) && (React__default.default.createElement(ui_ContextMenu.MenuItem$1, { className: "sendbird-openchannel-user-message__context-menu__edit", onClick: function () {
                                if (disabled) {
                                    return;
                                }
                                showEdit(true);
                                closeDropdown();
                            }, testID: "open_channel_user_message_menu_edit" }, stringSet.CONTEXT_MENU_DROPDOWN__EDIT)),
                        index.isFineResend({ message: message, userId: userId, status: status }) && (React__default.default.createElement(ui_ContextMenu.MenuItem$1, { className: "sendbird-openchannel-user-message__context-menu__resend", onClick: function () {
                                resendMessage(message);
                                closeDropdown();
                            }, testID: "open_channel_user_message_menu_resend" }, stringSet.CONTEXT_MENU_DROPDOWN__RESEND)),
                        (!isEphemeral && index.isFineDelete({ message: message, userId: userId, status: status })) && (React__default.default.createElement(ui_ContextMenu.MenuItem$1, { className: "sendbird-openchannel-user-message__context-menu__delete", onClick: function () {
                                if (disabled) {
                                    return;
                                }
                                showRemove(true);
                                closeDropdown();
                            }, testID: "open_channel_user_message_menu_delete" }, stringSet.CONTEXT_MENU_DROPDOWN__DELETE)))); } })))),
        contextMenu && (React__default.default.createElement(index.OpenChannelMobileMenu, { message: message, parentRef: mobileMenuRef, hideMenu: function () {
                setContextMenu(false);
            }, showRemove: function () {
                setContextMenu(false);
                showRemove(true);
            }, showEdit: function () {
                setContextMenu(false);
                showEdit(true);
            }, copyToClipboard: function () {
                setContextMenu(false);
                utils.copyToClipboard(message === null || message === void 0 ? void 0 : message.message);
            }, resendMessage: function () {
                setContextMenu(false);
                resendMessage(message);
            } }))));
}

module.exports = OpenchannelUserMessage;
//# sourceMappingURL=OpenchannelUserMessage.js.map
