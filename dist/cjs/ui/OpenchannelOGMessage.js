'use strict';

var _tslib = require('../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var index$1 = require('../chunks/bundle-DspSuA8e.js');
var ui_Avatar = require('../chunks/bundle-C8wv9DWs.js');
var ui_ContextMenu = require('../chunks/bundle-BKyZTqvq.js');
var ui_Icon = require('./Icon.js');
var ui_IconButton = require('./IconButton.js');
var ui_ImageRenderer = require('./ImageRenderer.js');
var ui_LinkLabel = require('./LinkLabel.js');
var ui_Label = require('../chunks/bundle-CAR4EIKs.js');
var ui_Loader = require('./Loader.js');
var ui_UserProfile = require('./UserProfile.js');
var UserProfileContext = require('../chunks/bundle-DgjptBQW.js');
var uuid = require('../chunks/bundle-C1poxl5k.js');
var utils = require('../chunks/bundle-DHy4Izth.js');
var LocalizationContext = require('../chunks/bundle-Cy1ruNzs.js');
var index = require('../chunks/bundle-CJ7RaJYS.js');
var MediaQueryContext = require('../chunks/bundle-DrIKAEHN.js');
var useLongPress = require('../chunks/bundle-D_k3_Y_y.js');
var index$2 = require('../chunks/bundle-92xEkubH.js');
var tokenize = require('../chunks/bundle-BIkitklZ.js');
var utils$1 = require('../chunks/bundle-Ck6ikNW6.js');
require('../chunks/bundle-C2CwvM-u.js');
require('../chunks/bundle-B4PTJ_bJ.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('./SortByRow.js');
require('../withSendbird.js');
require('../chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-Dr9yFtKa.js');
require('../chunks/bundle-BD0wJiNh.js');
require('../chunks/bundle-Dio8pG-T.js');
require('../sendbirdSelectors.js');
require('../chunks/bundle-C6Q6BfQY.js');
require('./Button.js');
require('../useSendbirdStateContext.js');
require('@sendbird/uikit-tools');
require('../chunks/bundle-DZhkNDpN.js');
require('css-vars-ponyfill');
require('../chunks/bundle-CJM9Pdwg.js');
require('../Message/context.js');
require('./MentionLabel.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function OpenChannelOGMessage(_a) {
    var _b, _c, _d;
    var message = _a.message, isOperator = _a.isOperator, _e = _a.isEphemeral, isEphemeral = _e === void 0 ? false : _e, className = _a.className, disabled = _a.disabled, showEdit = _a.showEdit, showRemove = _a.showRemove, resendMessage = _a.resendMessage, chainTop = _a.chainTop, userId = _a.userId;
    var status = message === null || message === void 0 ? void 0 : message.sendingStatus;
    var ogMetaData = (_b = message.ogMetaData) !== null && _b !== void 0 ? _b : null;
    var defaultImage = ogMetaData === null || ogMetaData === void 0 ? void 0 : ogMetaData.defaultImage;
    var _f = LocalizationContext.useLocalization(), stringSet = _f.stringSet, dateLocale = _f.dateLocale;
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    var _g = UserProfileContext.useUserProfileContext(), disableUserProfile = _g.disableUserProfile, renderUserProfile = _g.renderUserProfile;
    var _h = React.useState({}), contextStyle = _h[0], setContextStyle = _h[1];
    var _j = React.useState(false), showContextMenu = _j[0], setShowContextMenu = _j[1];
    var openLink = function () { return utils$1.openURL(ogMetaData === null || ogMetaData === void 0 ? void 0 : ogMetaData.url); };
    var onLongPress = useLongPress.useLongPress({
        onLongPress: function () { return setShowContextMenu(true); },
        onClick: openLink,
    }, {
        delay: 300,
    });
    var messageComponentRef = React.useRef();
    var contextMenuRef = React.useRef();
    var mobileMenuRef = React.useRef();
    var avatarRef = React.useRef();
    var isPending = index.checkIsPending(status);
    var isFailed = index.checkIsFailed(status);
    var sender = index.getSenderFromMessage(message);
    var tokens = React.useMemo(function () {
        return tokenize.tokenizeMessage({
            messageText: message.message,
        });
    }, [message === null || message === void 0 ? void 0 : message.updatedAt, message === null || message === void 0 ? void 0 : message.message]);
    // place conxt menu top depending clientHeight of message component
    React.useEffect(function () {
        var _a, _b;
        if (((_a = messageComponentRef === null || messageComponentRef === void 0 ? void 0 : messageComponentRef.current) === null || _a === void 0 ? void 0 : _a.clientHeight) && ((_b = messageComponentRef === null || messageComponentRef === void 0 ? void 0 : messageComponentRef.current) === null || _b === void 0 ? void 0 : _b.clientHeight) > 36) {
            setContextStyle({ top: '8px ' });
        }
        else {
            setContextStyle({ top: '2px' });
        }
    }, [window.innerWidth]);
    if (!message || message.messageType !== 'user') {
        return React__default.default.createElement(React__default.default.Fragment, null);
    }
    return (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement("div", _tslib.__assign({ className: _tslib.__spreadArray(_tslib.__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
                'sendbird-openchannel-og-message',
            ], false).join(' '), ref: messageComponentRef }, (isMobile ? _tslib.__assign({}, onLongPress) : {})),
            React__default.default.createElement("div", { className: "sendbird-openchannel-og-message__top" },
                React__default.default.createElement("div", { className: "sendbird-openchannel-og-message__top__left" }, !chainTop && (React__default.default.createElement(ui_ContextMenu.ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.default.createElement(ui_Avatar.Avatar, { className: "sendbird-openchannel-og-message__top__left__avatar", src: sender.profileUrl || '', ref: avatarRef, width: "28px", height: "28px", onClick: function () {
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
                React__default.default.createElement("div", { className: "sendbird-openchannel-og-message__top__right" },
                    !chainTop && (React__default.default.createElement("div", { className: "sendbird-openchannel-og-message__top__right__title" },
                        React__default.default.createElement(ui_Label.Label, { className: "sendbird-openchannel-og-message__top__right__title__sender-name", type: ui_Label.LabelTypography.CAPTION_2, color: isOperator ? ui_Label.LabelColors.SECONDARY_3 : ui_Label.LabelColors.ONBACKGROUND_2 }, sender && (sender.friendName
                            || sender.nickname
                            || sender.userId)),
                        React__default.default.createElement(ui_Label.Label, { className: "sendbird-openchannel-og-message__top__right__title__sent-at", type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_3 }, (message === null || message === void 0 ? void 0 : message.createdAt) && (index$1.format(message === null || message === void 0 ? void 0 : message.createdAt, stringSet.DATE_FORMAT__MESSAGE_CREATED_AT, {
                            locale: dateLocale,
                        }))))),
                    React__default.default.createElement("div", { className: "sendbird-openchannel-og-message__top__right__description" },
                        React__default.default.createElement(ui_Label.Label, { className: "sendbird-openchannel-og-message__top__right__description__message", type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_1 },
                            React__default.default.createElement(index$2.TextFragment, { tokens: tokens }),
                            (((_c = message === null || message === void 0 ? void 0 : message.updatedAt) !== null && _c !== void 0 ? _c : 0) > 0) && (React__default.default.createElement(ui_Label.Label, { key: uuid.uuidv4(), className: 'sendbird-openchannel-og-message--word', type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_2 }, stringSet.MESSAGE_EDITED))))),
                !isMobile && (React__default.default.createElement("div", { className: "sendbird-openchannel-og-message__top__context-menu", ref: contextMenuRef, style: contextStyle },
                    React__default.default.createElement(ui_ContextMenu.ContextMenu, { menuTrigger: function (toggleDropdown) { return (index.showMenuTrigger({ message: message, userId: userId, status: status }) && (React__default.default.createElement(ui_IconButton, { className: "sendbird-openchannel-og-message__top__context-menu--icon", width: "32px", height: "32px", onClick: function () {
                                toggleDropdown();
                            } },
                            React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.MORE, fillColor: ui_Icon.IconColors.CONTENT_INVERSE, width: "24px", height: "24px" })))); }, menuItems: function (closeDropdown) { return (React__default.default.createElement(ui_ContextMenu.MenuItems, { parentRef: contextMenuRef, parentContainRef: contextMenuRef, closeDropdown: closeDropdown, openLeft: true },
                            index.isFineCopy({ message: message, userId: userId, status: status }) && (React__default.default.createElement(ui_ContextMenu.MenuItem$1, { className: "sendbird-openchannel-og-message__top__context-menu__copy", onClick: function () {
                                    utils.copyToClipboard(message.message);
                                    closeDropdown();
                                }, testID: "open_channel_og_message_menu_copy" }, stringSet.CONTEXT_MENU_DROPDOWN__COPY)),
                            (!isEphemeral && index.isFineEdit({ message: message, userId: userId, status: status })) && (React__default.default.createElement(ui_ContextMenu.MenuItem$1, { className: "sendbird-openchannel-og-message__top__context-menu__edit", onClick: function () {
                                    if (disabled) {
                                        return;
                                    }
                                    showEdit(true);
                                    closeDropdown();
                                }, testID: "open_channel_og_message_menu_edit" }, stringSet.CONTEXT_MENU_DROPDOWN__EDIT)),
                            index.isFineResend({ message: message, userId: userId, status: status }) && (React__default.default.createElement(ui_ContextMenu.MenuItem$1, { className: "sendbird-openchannel-og-message__top__context-menu__resend", onClick: function () {
                                    resendMessage(message);
                                    closeDropdown();
                                }, testID: "open_channel_og_message_menu_resend" }, stringSet.CONTEXT_MENU_DROPDOWN__RESEND)),
                            (!isEphemeral && index.isFineDelete({ message: message, userId: userId, status: status })) && (React__default.default.createElement(ui_ContextMenu.MenuItem$1, { className: "sendbird-openchannel-og-message__top__context-menu__delete", onClick: function () {
                                    if (disabled) {
                                        return;
                                    }
                                    showRemove(true);
                                    closeDropdown();
                                }, testID: "open_channel_og_message_menu_delete" }, stringSet.CONTEXT_MENU_DROPDOWN__DELETE)))); } })))),
            React__default.default.createElement("div", { className: "sendbird-openchannel-og-message__bottom" },
                React__default.default.createElement("div", { className: "sendbird-openchannel-og-message__bottom__og-tag", ref: mobileMenuRef },
                    (ogMetaData === null || ogMetaData === void 0 ? void 0 : ogMetaData.url) && (React__default.default.createElement(ui_Label.Label, { className: "sendbird-openchannel-og-message__bottom__og-tag__url", type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_2 }, ogMetaData.url)),
                    (ogMetaData === null || ogMetaData === void 0 ? void 0 : ogMetaData.title) && (React__default.default.createElement(ui_LinkLabel.default, { className: "sendbird-openchannel-og-message__bottom__og-tag__title", src: (_d = ogMetaData.url) !== null && _d !== void 0 ? _d : '', type: ui_Label.LabelTypography.SUBTITLE_2, color: ui_Label.LabelColors.PRIMARY }, ogMetaData.title)),
                    (ogMetaData === null || ogMetaData === void 0 ? void 0 : ogMetaData.description) && (React__default.default.createElement(ui_Label.Label, { className: "sendbird-openchannel-og-message__bottom__og-tag__description", type: ui_Label.LabelTypography.BODY_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, ogMetaData.description)),
                    (ogMetaData === null || ogMetaData === void 0 ? void 0 : ogMetaData.url) && (React__default.default.createElement("div", { className: "sendbird-openchannel-og-message__bottom__og-tag__thumbnail", role: "button", onClick: openLink, onKeyDown: openLink, tabIndex: 0 }, defaultImage && (React__default.default.createElement(ui_ImageRenderer.default, { className: "sendbird-openchannel-og-message__bottom__og-tag__thumbnail__image", url: defaultImage.url || '', alt: defaultImage.alt || '', width: "334px", height: "189px", defaultComponent: (React__default.default.createElement("div", { className: "sendbird-openchannel-og-message__bottom__og-tag__thumbnail__image--placeholder" },
                            React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.THUMBNAIL_NONE, width: "56px", height: "56px" }))) }))))),
                (isPending || isFailed) && (React__default.default.createElement("div", { className: "sendbird-openchannel-og-message__top__right__tail" },
                    isPending && (React__default.default.createElement(ui_Loader, { width: "16px", height: "16px" },
                        React__default.default.createElement(ui_Icon.default, { className: "sendbird-openchannel-og-message__top__right__tail__pending", type: ui_Icon.IconTypes.SPINNER, fillColor: ui_Icon.IconColors.PRIMARY, width: "16px", height: "16px" }))),
                    isFailed && (React__default.default.createElement(ui_Icon.default, { className: "sendbird-openchannel-og-message__top__right__tail__failed", type: ui_Icon.IconTypes.ERROR, fillColor: ui_Icon.IconColors.ERROR, width: "16px", height: "16px" })))))),
        showContextMenu && (React__default.default.createElement(index.OpenChannelMobileMenu, { message: message, parentRef: mobileMenuRef, hideMenu: function () {
                setShowContextMenu(false);
            }, showRemove: function () {
                setShowContextMenu(false);
                showRemove(true);
            }, showEdit: function () {
                setShowContextMenu(false);
                showEdit(true);
            }, copyToClipboard: function () {
                setShowContextMenu(false);
                utils.copyToClipboard(message === null || message === void 0 ? void 0 : message.message);
            }, resendMessage: function () {
                setShowContextMenu(false);
                resendMessage(message);
            } }))));
}

module.exports = OpenChannelOGMessage;
//# sourceMappingURL=OpenchannelOGMessage.js.map
