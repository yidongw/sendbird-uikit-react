import { _ as __assign, c as __spreadArray } from '../chunks/bundle-HcNswZ5p.js';
import React__default, { useState, useRef, useMemo, useEffect } from 'react';
import { f as format } from '../chunks/bundle-D4JzAgen.js';
import { A as Avatar } from '../chunks/bundle-2pbuHA3C.js';
import { C as ContextMenu, b as MenuItems, c as MenuItem } from '../chunks/bundle-BKzcG-aC.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import IconButton from './IconButton.js';
import ImageRenderer from './ImageRenderer.js';
import LinkLabel from './LinkLabel.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-Qkp2VIaZ.js';
import Loader from './Loader.js';
import UserProfile from './UserProfile.js';
import { u as useUserProfileContext } from '../chunks/bundle-B91Bhfde.js';
import { u as uuidv4 } from '../chunks/bundle-C5iY_IvV.js';
import { c as copyToClipboard } from '../chunks/bundle-Du354JpK.js';
import { u as useLocalization } from '../chunks/bundle-DhMUg-L7.js';
import { g as getSenderFromMessage, s as showMenuTrigger, i as isFineCopy, a as isFineEdit, b as isFineResend, c as isFineDelete, O as OpenChannelMobileMenu, d as checkIsPending, e as checkIsFailed } from '../chunks/bundle-2DP5xDcL.js';
import { u as useMediaQueryContext } from '../chunks/bundle-DnSobLtx.js';
import { u as useLongPress } from '../chunks/bundle-B6yWIKOT.js';
import { T as TextFragment } from '../chunks/bundle-CYbqxz_s.js';
import { t as tokenizeMessage } from '../chunks/bundle-BvQmfZZv.js';
import { o as openURL } from '../chunks/bundle-0WaCg6X7.js';
import '../chunks/bundle-DB7YSrIT.js';
import '../chunks/bundle-DkDQ1PWY.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import './SortByRow.js';
import '../withSendbird.js';
import '../chunks/bundle-Bd-i99nk.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-DjLJFwD7.js';
import '../chunks/bundle-DQk0aENq.js';
import '../chunks/bundle-dybWaw0v.js';
import '../sendbirdSelectors.js';
import '../chunks/bundle-BwmZGijR.js';
import './Button.js';
import '../useSendbirdStateContext.js';
import '@sendbird/uikit-tools';
import '../chunks/bundle-ja8H3E0K.js';
import 'css-vars-ponyfill';
import '../chunks/bundle-zy1mnw8U.js';
import '../Message/context.js';
import './MentionLabel.js';

function OpenChannelOGMessage(_a) {
    var _b, _c, _d;
    var message = _a.message, isOperator = _a.isOperator, _e = _a.isEphemeral, isEphemeral = _e === void 0 ? false : _e, className = _a.className, disabled = _a.disabled, showEdit = _a.showEdit, showRemove = _a.showRemove, resendMessage = _a.resendMessage, chainTop = _a.chainTop, userId = _a.userId;
    var status = message === null || message === void 0 ? void 0 : message.sendingStatus;
    var ogMetaData = (_b = message.ogMetaData) !== null && _b !== void 0 ? _b : null;
    var defaultImage = ogMetaData === null || ogMetaData === void 0 ? void 0 : ogMetaData.defaultImage;
    var _f = useLocalization(), stringSet = _f.stringSet, dateLocale = _f.dateLocale;
    var isMobile = useMediaQueryContext().isMobile;
    var _g = useUserProfileContext(), disableUserProfile = _g.disableUserProfile, renderUserProfile = _g.renderUserProfile;
    var _h = useState({}), contextStyle = _h[0], setContextStyle = _h[1];
    var _j = useState(false), showContextMenu = _j[0], setShowContextMenu = _j[1];
    var openLink = function () { return openURL(ogMetaData === null || ogMetaData === void 0 ? void 0 : ogMetaData.url); };
    var onLongPress = useLongPress({
        onLongPress: function () { return setShowContextMenu(true); },
        onClick: openLink,
    }, {
        delay: 300,
    });
    var messageComponentRef = useRef();
    var contextMenuRef = useRef();
    var mobileMenuRef = useRef();
    var avatarRef = useRef();
    var isPending = checkIsPending(status);
    var isFailed = checkIsFailed(status);
    var sender = getSenderFromMessage(message);
    var tokens = useMemo(function () {
        return tokenizeMessage({
            messageText: message.message,
        });
    }, [message === null || message === void 0 ? void 0 : message.updatedAt, message === null || message === void 0 ? void 0 : message.message]);
    // place conxt menu top depending clientHeight of message component
    useEffect(function () {
        var _a, _b;
        if (((_a = messageComponentRef === null || messageComponentRef === void 0 ? void 0 : messageComponentRef.current) === null || _a === void 0 ? void 0 : _a.clientHeight) && ((_b = messageComponentRef === null || messageComponentRef === void 0 ? void 0 : messageComponentRef.current) === null || _b === void 0 ? void 0 : _b.clientHeight) > 36) {
            setContextStyle({ top: '8px ' });
        }
        else {
            setContextStyle({ top: '2px' });
        }
    }, [window.innerWidth]);
    if (!message || message.messageType !== 'user') {
        return React__default.createElement(React__default.Fragment, null);
    }
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", __assign({ className: __spreadArray(__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
                'sendbird-openchannel-og-message',
            ], false).join(' '), ref: messageComponentRef }, (isMobile ? __assign({}, onLongPress) : {})),
            React__default.createElement("div", { className: "sendbird-openchannel-og-message__top" },
                React__default.createElement("div", { className: "sendbird-openchannel-og-message__top__left" }, !chainTop && (React__default.createElement(ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.createElement(Avatar, { className: "sendbird-openchannel-og-message__top__left__avatar", src: sender.profileUrl || '', ref: avatarRef, width: "28px", height: "28px", onClick: function () {
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
                React__default.createElement("div", { className: "sendbird-openchannel-og-message__top__right" },
                    !chainTop && (React__default.createElement("div", { className: "sendbird-openchannel-og-message__top__right__title" },
                        React__default.createElement(Label, { className: "sendbird-openchannel-og-message__top__right__title__sender-name", type: LabelTypography.CAPTION_2, color: isOperator ? LabelColors.SECONDARY_3 : LabelColors.ONBACKGROUND_2 }, sender && (sender.friendName
                            || sender.nickname
                            || sender.userId)),
                        React__default.createElement(Label, { className: "sendbird-openchannel-og-message__top__right__title__sent-at", type: LabelTypography.CAPTION_3, color: LabelColors.ONBACKGROUND_3 }, (message === null || message === void 0 ? void 0 : message.createdAt) && (format(message === null || message === void 0 ? void 0 : message.createdAt, stringSet.DATE_FORMAT__MESSAGE_CREATED_AT, {
                            locale: dateLocale,
                        }))))),
                    React__default.createElement("div", { className: "sendbird-openchannel-og-message__top__right__description" },
                        React__default.createElement(Label, { className: "sendbird-openchannel-og-message__top__right__description__message", type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_1 },
                            React__default.createElement(TextFragment, { tokens: tokens }),
                            (((_c = message === null || message === void 0 ? void 0 : message.updatedAt) !== null && _c !== void 0 ? _c : 0) > 0) && (React__default.createElement(Label, { key: uuidv4(), className: 'sendbird-openchannel-og-message--word', type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_2 }, stringSet.MESSAGE_EDITED))))),
                !isMobile && (React__default.createElement("div", { className: "sendbird-openchannel-og-message__top__context-menu", ref: contextMenuRef, style: contextStyle },
                    React__default.createElement(ContextMenu, { menuTrigger: function (toggleDropdown) { return (showMenuTrigger({ message: message, userId: userId, status: status }) && (React__default.createElement(IconButton, { className: "sendbird-openchannel-og-message__top__context-menu--icon", width: "32px", height: "32px", onClick: function () {
                                toggleDropdown();
                            } },
                            React__default.createElement(Icon, { type: IconTypes.MORE, fillColor: IconColors.CONTENT_INVERSE, width: "24px", height: "24px" })))); }, menuItems: function (closeDropdown) { return (React__default.createElement(MenuItems, { parentRef: contextMenuRef, parentContainRef: contextMenuRef, closeDropdown: closeDropdown, openLeft: true },
                            isFineCopy({ message: message, userId: userId, status: status }) && (React__default.createElement(MenuItem, { className: "sendbird-openchannel-og-message__top__context-menu__copy", onClick: function () {
                                    copyToClipboard(message.message);
                                    closeDropdown();
                                }, testID: "open_channel_og_message_menu_copy" }, stringSet.CONTEXT_MENU_DROPDOWN__COPY)),
                            (!isEphemeral && isFineEdit({ message: message, userId: userId, status: status })) && (React__default.createElement(MenuItem, { className: "sendbird-openchannel-og-message__top__context-menu__edit", onClick: function () {
                                    if (disabled) {
                                        return;
                                    }
                                    showEdit(true);
                                    closeDropdown();
                                }, testID: "open_channel_og_message_menu_edit" }, stringSet.CONTEXT_MENU_DROPDOWN__EDIT)),
                            isFineResend({ message: message, userId: userId, status: status }) && (React__default.createElement(MenuItem, { className: "sendbird-openchannel-og-message__top__context-menu__resend", onClick: function () {
                                    resendMessage(message);
                                    closeDropdown();
                                }, testID: "open_channel_og_message_menu_resend" }, stringSet.CONTEXT_MENU_DROPDOWN__RESEND)),
                            (!isEphemeral && isFineDelete({ message: message, userId: userId, status: status })) && (React__default.createElement(MenuItem, { className: "sendbird-openchannel-og-message__top__context-menu__delete", onClick: function () {
                                    if (disabled) {
                                        return;
                                    }
                                    showRemove(true);
                                    closeDropdown();
                                }, testID: "open_channel_og_message_menu_delete" }, stringSet.CONTEXT_MENU_DROPDOWN__DELETE)))); } })))),
            React__default.createElement("div", { className: "sendbird-openchannel-og-message__bottom" },
                React__default.createElement("div", { className: "sendbird-openchannel-og-message__bottom__og-tag", ref: mobileMenuRef },
                    (ogMetaData === null || ogMetaData === void 0 ? void 0 : ogMetaData.url) && (React__default.createElement(Label, { className: "sendbird-openchannel-og-message__bottom__og-tag__url", type: LabelTypography.CAPTION_3, color: LabelColors.ONBACKGROUND_2 }, ogMetaData.url)),
                    (ogMetaData === null || ogMetaData === void 0 ? void 0 : ogMetaData.title) && (React__default.createElement(LinkLabel, { className: "sendbird-openchannel-og-message__bottom__og-tag__title", src: (_d = ogMetaData.url) !== null && _d !== void 0 ? _d : '', type: LabelTypography.SUBTITLE_2, color: LabelColors.PRIMARY }, ogMetaData.title)),
                    (ogMetaData === null || ogMetaData === void 0 ? void 0 : ogMetaData.description) && (React__default.createElement(Label, { className: "sendbird-openchannel-og-message__bottom__og-tag__description", type: LabelTypography.BODY_2, color: LabelColors.ONBACKGROUND_1 }, ogMetaData.description)),
                    (ogMetaData === null || ogMetaData === void 0 ? void 0 : ogMetaData.url) && (React__default.createElement("div", { className: "sendbird-openchannel-og-message__bottom__og-tag__thumbnail", role: "button", onClick: openLink, onKeyDown: openLink, tabIndex: 0 }, defaultImage && (React__default.createElement(ImageRenderer, { className: "sendbird-openchannel-og-message__bottom__og-tag__thumbnail__image", url: defaultImage.url || '', alt: defaultImage.alt || '', width: "334px", height: "189px", defaultComponent: (React__default.createElement("div", { className: "sendbird-openchannel-og-message__bottom__og-tag__thumbnail__image--placeholder" },
                            React__default.createElement(Icon, { type: IconTypes.THUMBNAIL_NONE, width: "56px", height: "56px" }))) }))))),
                (isPending || isFailed) && (React__default.createElement("div", { className: "sendbird-openchannel-og-message__top__right__tail" },
                    isPending && (React__default.createElement(Loader, { width: "16px", height: "16px" },
                        React__default.createElement(Icon, { className: "sendbird-openchannel-og-message__top__right__tail__pending", type: IconTypes.SPINNER, fillColor: IconColors.PRIMARY, width: "16px", height: "16px" }))),
                    isFailed && (React__default.createElement(Icon, { className: "sendbird-openchannel-og-message__top__right__tail__failed", type: IconTypes.ERROR, fillColor: IconColors.ERROR, width: "16px", height: "16px" })))))),
        showContextMenu && (React__default.createElement(OpenChannelMobileMenu, { message: message, parentRef: mobileMenuRef, hideMenu: function () {
                setShowContextMenu(false);
            }, showRemove: function () {
                setShowContextMenu(false);
                showRemove(true);
            }, showEdit: function () {
                setShowContextMenu(false);
                showEdit(true);
            }, copyToClipboard: function () {
                setShowContextMenu(false);
                copyToClipboard(message === null || message === void 0 ? void 0 : message.message);
            }, resendMessage: function () {
                setShowContextMenu(false);
                resendMessage(message);
            } }))));
}

export { OpenChannelOGMessage as default };
//# sourceMappingURL=OpenchannelOGMessage.js.map
