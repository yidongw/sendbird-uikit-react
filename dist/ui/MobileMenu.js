import { _ as __assign } from '../chunks/bundle-HcNswZ5p.js';
import React__default, { useState } from 'react';
import { m as isUserMessage, B as copyToClipboard, x as isFailedMessage, r as isSentMessage, w as isPendingMessage, c as isFileMessage, i as isVoiceMessage, V as isThreadMessage, W as getEmojiListAll } from '../chunks/bundle-Bd-i99nk.js';
import { n as noop, c as classnames } from '../chunks/bundle-0WaCg6X7.js';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import { u as useMessageMenuContext, a as MenuItem, M as MessageMenuProvider, b as MenuItems, B as BottomSheetMenuItem } from '../chunks/bundle-BKzcG-aC.js';
import './IconButton.js';
import { u as useLocalization } from '../chunks/bundle-DhMUg-L7.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-Qkp2VIaZ.js';
import '@sendbird/chat';
import Icon, { IconTypes, IconColors } from './Icon.js';
import BottomSheet from './BottomSheet.js';
import ImageRenderer from './ImageRenderer.js';
import ReactionButton from './ReactionButton.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-DjLJFwD7.js';
import '../chunks/bundle-DB7YSrIT.js';
import '../chunks/bundle-DQk0aENq.js';
import '../withSendbird.js';
import 'react-dom';
import '@sendbird/chat/openChannel';
import './SortByRow.js';
import '../chunks/bundle-C5iY_IvV.js';
import '../chunks/bundle-dybWaw0v.js';
import '../chunks/bundle-ja8H3E0K.js';
import '../chunks/bundle-DnSobLtx.js';
import './Button.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../chunks/bundle-zy1mnw8U.js';
import '../chunks/bundle-B6yWIKOT.js';

var CopyMenuItem$1 = function (props) {
    var _a;
    var stringSet = useLocalization().stringSet;
    var _b = useMessageMenuContext(), message = _b.message, hideMenu = _b.hideMenu;
    return (React__default.createElement(MenuItem, __assign({}, props, { onClick: function (e) {
            var _a;
            if (isUserMessage(message))
                copyToClipboard(message.message);
            hideMenu();
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__COPY),
        React__default.createElement(Icon, { type: IconTypes.COPY, fillColor: IconColors.PRIMARY, width: "24px", height: "24px" })))));
};
var ReplyMenuItem$1 = function (props) {
    var _a, _b, _c;
    var stringSet = useLocalization().stringSet;
    var _d = useMessageMenuContext(), message = _d.message, hideMenu = _d.hideMenu, setQuoteMessage = _d.setQuoteMessage;
    return (React__default.createElement(MenuItem, __assign({}, props, { disabled: message.parentMessageId > 0, onClick: function (e) {
            var _a;
            setQuoteMessage(message);
            hideMenu();
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: ((_b = message.parentMessageId) !== null && _b !== void 0 ? _b : 0) > 0 ? LabelColors.ONBACKGROUND_4 : LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__REPLY),
        React__default.createElement(Icon, { type: IconTypes.REPLY, fillColor: ((_c = message.parentMessageId) !== null && _c !== void 0 ? _c : 0) > 0 ? IconColors.ON_BACKGROUND_4 : IconColors.PRIMARY, width: "24px", height: "24px" })))));
};
var ThreadMenuItem$1 = function (props) {
    var _a;
    var stringSet = useLocalization().stringSet;
    var _b = useMessageMenuContext(), message = _b.message, hideMenu = _b.hideMenu, onReplyInThread = _b.onReplyInThread;
    return (React__default.createElement(MenuItem, __assign({}, props, { onClick: function (e) {
            var _a;
            onReplyInThread({ message: message });
            hideMenu();
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__THREAD),
        React__default.createElement(Icon, { type: IconTypes.THREAD, fillColor: IconColors.PRIMARY, width: "24px", height: "24px" })))));
};
var EditMenuItem$1 = function (props) {
    var _a;
    var stringSet = useLocalization().stringSet;
    var _b = useMessageMenuContext(), hideMenu = _b.hideMenu, showEdit = _b.showEdit, isOnline = _b.isOnline;
    return (React__default.createElement(MenuItem, __assign({}, props, { onClick: function (e) {
            var _a;
            if (isOnline) {
                showEdit(true);
                hideMenu();
                (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__EDIT),
        React__default.createElement(Icon, { type: IconTypes.EDIT, fillColor: IconColors.PRIMARY, width: "24px", height: "24px" })))));
};
var ResendMenuItem$1 = function (props) {
    var _a;
    var stringSet = useLocalization().stringSet;
    var _b = useMessageMenuContext(), message = _b.message, hideMenu = _b.hideMenu, resendMessage = _b.resendMessage, isOnline = _b.isOnline;
    return (React__default.createElement(MenuItem, __assign({}, props, { onClick: function (e) {
            var _a;
            if (isOnline) {
                resendMessage(message);
                hideMenu();
                (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__RESEND),
        React__default.createElement(Icon, { type: IconTypes.REFRESH, fillColor: IconColors.PRIMARY, width: "24px", height: "24px" })))));
};
var DeleteMenuItem$1 = function (props) {
    var _a, _b, _c;
    var stringSet = useLocalization().stringSet;
    var _d = useMessageMenuContext(), message = _d.message, hideMenu = _d.hideMenu, deleteMessage = _d.deleteMessage, showRemove = _d.showRemove, isOnline = _d.isOnline, disableDeleteMessage = _d.disableDeleteMessage;
    return (React__default.createElement(MenuItem, __assign({}, props, { disabled: typeof disableDeleteMessage === 'boolean'
            ? disableDeleteMessage
            : ((_b = (_a = message.threadInfo) === null || _a === void 0 ? void 0 : _a.replyCount) !== null && _b !== void 0 ? _b : 0) > 0, onClick: function (e) {
            var _a;
            if (isFailedMessage(message)) {
                deleteMessage(message);
            }
            else if (isOnline) {
                showRemove(true);
                hideMenu();
                (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }
        } }), (_c = props.children) !== null && _c !== void 0 ? _c : (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: disableDeleteMessage ? LabelColors.ONBACKGROUND_4 : LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__DELETE),
        React__default.createElement(Icon, { type: IconTypes.DELETE, fillColor: IconColors.PRIMARY, width: "24px", height: "24px" })))));
};
var DownloadMenuItem$1 = function (props) {
    var _a;
    var stringSet = useLocalization().stringSet;
    var _b = useMessageMenuContext(), hideMenu = _b.hideMenu, message = _b.message, onDownloadClick = _b.onDownloadClick;
    var url = message.url;
    return (React__default.createElement(MenuItem, __assign({}, props, { onClick: function () {
            hideMenu();
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.createElement("a", { className: "sendbird-message__contextmenu--hyperlink", rel: "noopener noreferrer", href: url, target: "_blank", onClick: onDownloadClick },
        React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__SAVE),
        React__default.createElement(Icon, { type: IconTypes.DOWNLOAD, fillColor: IconColors.PRIMARY, width: "24px", height: "24px" })))));
};

var MobileContextMenu = function (props) {
    var _a, _b, _c, _d;
    var channel = props.channel, message = props.message, replyType = props.replyType, userId = props.userId, resendMessage = props.resendMessage, showEdit = props.showEdit, showRemove = props.showRemove, deleteMenuState = props.deleteMenuState, deleteMessage = props.deleteMessage, setQuoteMessage = props.setQuoteMessage, parentRef = props.parentRef, onReplyInThread = props.onReplyInThread, _e = props.isOpenedFromThread, isOpenedFromThread = _e === void 0 ? false : _e, _f = props.onDownloadClick, onDownloadClick = _f === void 0 ? null : _f, renderMenuItems = props.renderMenuItems, hideMobileMenu = props.hideMenu;
    var isByMe = ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId) === userId;
    var config = useSendbirdStateContext().config;
    var isOnline = config.isOnline;
    // Menu Items condition
    var showMenuItemCopy = isUserMessage(message);
    var showMenuItemEdit = isUserMessage(message) && isSentMessage(message) && isByMe;
    var showMenuItemResend = isFailedMessage(message) && (message === null || message === void 0 ? void 0 : message.isResendable) && isByMe;
    var showMenuItemDelete = !isPendingMessage(message) && isByMe;
    var showMenuItemDeleteByState = isByMe && (deleteMenuState === undefined || deleteMenuState !== 'HIDE');
    var showMenuItemDeleteFinal = showMenuItemDeleteByState && showMenuItemDelete;
    var showMenuItemDownload = !isPendingMessage(message) && isFileMessage(message) && !(isVoiceMessage(message) && (channel === null || channel === void 0 ? void 0 : channel.isSuper) || (channel === null || channel === void 0 ? void 0 : channel.isBroadcast));
    var showMenuItemReply = replyType === 'QUOTE_REPLY' && !isFailedMessage(message) && !isPendingMessage(message) && (channel === null || channel === void 0 ? void 0 : channel.isGroupChannel());
    var showMenuItemThread = replyType === 'THREAD' && !isOpenedFromThread && !isFailedMessage(message) && !isPendingMessage(message) && !isThreadMessage(message) && (channel === null || channel === void 0 ? void 0 : channel.isGroupChannel());
    var disableDeleteMessage = (deleteMenuState !== undefined && deleteMenuState === 'DISABLE') || ((_c = (_b = message === null || message === void 0 ? void 0 : message.threadInfo) === null || _b === void 0 ? void 0 : _b.replyCount) !== null && _c !== void 0 ? _c : 0) > 0;
    var contextValue = {
        message: message,
        hideMenu: hideMobileMenu,
        setQuoteMessage: setQuoteMessage,
        onReplyInThread: onReplyInThread,
        onMoveToParentMessage: noop,
        showEdit: showEdit,
        showRemove: showRemove,
        deleteMessage: deleteMessage,
        resendMessage: resendMessage,
        isOnline: isOnline,
        disableDeleteMessage: disableDeleteMessage,
        triggerRef: parentRef,
        containerRef: parentRef,
        onDownloadClick: onDownloadClick,
    };
    return (React__default.createElement(MessageMenuProvider, { value: contextValue },
        React__default.createElement(MenuItems, { className: "sendbird-message__mobile-context-menu", parentRef: parentRef, parentContainRef: parentRef, closeDropdown: hideMobileMenu }, (_d = renderMenuItems === null || renderMenuItems === void 0 ? void 0 : renderMenuItems({
            items: {
                CopyMenuItem: CopyMenuItem$1,
                ReplyMenuItem: ReplyMenuItem$1,
                ThreadMenuItem: ThreadMenuItem$1,
                EditMenuItem: EditMenuItem$1,
                ResendMenuItem: ResendMenuItem$1,
                DeleteMenuItem: DeleteMenuItem$1,
            },
        })) !== null && _d !== void 0 ? _d : (React__default.createElement(React__default.Fragment, null,
            showMenuItemCopy && React__default.createElement(CopyMenuItem$1, null),
            showMenuItemReply && React__default.createElement(ReplyMenuItem$1, null),
            showMenuItemThread && React__default.createElement(ThreadMenuItem$1, null),
            showMenuItemEdit && React__default.createElement(EditMenuItem$1, null),
            showMenuItemResend && React__default.createElement(ResendMenuItem$1, null),
            showMenuItemDeleteFinal && React__default.createElement(DeleteMenuItem$1, null),
            showMenuItemDownload && React__default.createElement(DownloadMenuItem$1, null))))));
};

var CopyMenuItem = function (props) {
    var _a;
    var stringSet = useLocalization().stringSet;
    var _b = useMessageMenuContext(), message = _b.message, hideMenu = _b.hideMenu;
    return (React__default.createElement(BottomSheetMenuItem, __assign({}, props, { onClick: function (e) {
            var _a;
            if (isUserMessage(message))
                copyToClipboard(message.message);
            hideMenu();
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Icon, { type: IconTypes.COPY, fillColor: IconColors.PRIMARY, width: "24px", height: "24px" }),
        React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__COPY)))));
};
var EditMenuItem = function (props) {
    var _a;
    var stringSet = useLocalization().stringSet;
    var _b = useMessageMenuContext(), hideMenu = _b.hideMenu, showEdit = _b.showEdit, isOnline = _b.isOnline;
    return (React__default.createElement(BottomSheetMenuItem, __assign({}, props, { onClick: function (e) {
            var _a;
            if (isOnline) {
                showEdit(true);
                hideMenu();
                (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Icon, { type: IconTypes.EDIT, fillColor: IconColors.PRIMARY, width: "24px", height: "24px" }),
        React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__EDIT)))));
};
var ResendMenuItem = function (props) {
    var _a;
    var stringSet = useLocalization().stringSet;
    var _b = useMessageMenuContext(), message = _b.message, hideMenu = _b.hideMenu, resendMessage = _b.resendMessage, isOnline = _b.isOnline;
    return (React__default.createElement(BottomSheetMenuItem, __assign({}, props, { onClick: function (e) {
            var _a;
            if (isOnline) {
                resendMessage(message);
                hideMenu();
                (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Icon, { type: IconTypes.REFRESH, fillColor: IconColors.PRIMARY, width: "24px", height: "24px" }),
        React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__RESEND)))));
};
var ReplyMenuItem = function (props) {
    var _a, _b, _c;
    var stringSet = useLocalization().stringSet;
    var _d = useMessageMenuContext(), message = _d.message, hideMenu = _d.hideMenu, setQuoteMessage = _d.setQuoteMessage;
    return (React__default.createElement(BottomSheetMenuItem, __assign({}, props, { disabled: message.parentMessageId > 0, onClick: function (e) {
            var _a;
            setQuoteMessage(message);
            hideMenu();
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Icon, { type: IconTypes.REPLY, fillColor: ((_b = message.parentMessageId) !== null && _b !== void 0 ? _b : 0) > 0 ? IconColors.ON_BACKGROUND_3 : IconColors.PRIMARY, width: "24px", height: "24px" }),
        React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: ((_c = message.parentMessageId) !== null && _c !== void 0 ? _c : 0) > 0 ? LabelColors.ONBACKGROUND_4 : LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__REPLY)))));
};
var ThreadMenuItem = function (props) {
    var _a;
    var stringSet = useLocalization().stringSet;
    var _b = useMessageMenuContext(), message = _b.message, hideMenu = _b.hideMenu, onReplyInThread = _b.onReplyInThread;
    return (React__default.createElement(BottomSheetMenuItem, __assign({}, props, { onClick: function (e) {
            var _a;
            onReplyInThread({ message: message });
            hideMenu();
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Icon, { type: IconTypes.THREAD, fillColor: IconColors.PRIMARY, width: "24px", height: "24px" }),
        React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__THREAD)))));
};
var DeleteMenuItem = function (props) {
    var _a, _b, _c;
    var stringSet = useLocalization().stringSet;
    var _d = useMessageMenuContext(), message = _d.message, hideMenu = _d.hideMenu, deleteMessage = _d.deleteMessage, showRemove = _d.showRemove, isOnline = _d.isOnline, disableDeleteMessage = _d.disableDeleteMessage;
    return (React__default.createElement(BottomSheetMenuItem, __assign({}, props, { disabled: typeof disableDeleteMessage === 'boolean'
            ? disableDeleteMessage
            : ((_b = (_a = message.threadInfo) === null || _a === void 0 ? void 0 : _a.replyCount) !== null && _b !== void 0 ? _b : 0) > 0, onClick: function (e) {
            var _a;
            if (isFailedMessage(message)) {
                deleteMessage(message);
            }
            else if (isOnline) {
                showRemove(true);
                hideMenu();
                (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }
        } }), (_c = props.children) !== null && _c !== void 0 ? _c : (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Icon, { type: IconTypes.DELETE, fillColor: IconColors.PRIMARY, width: "24px", height: "24px" }),
        React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: disableDeleteMessage ? LabelColors.ONBACKGROUND_4 : LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__DELETE)))));
};
var DownloadMenuItem = function (props) {
    var _a;
    var stringSet = useLocalization().stringSet;
    var _b = useMessageMenuContext(), hideMenu = _b.hideMenu, message = _b.message, onDownloadClick = _b.onDownloadClick;
    var url = message.url;
    return (React__default.createElement(BottomSheetMenuItem, { onClick: function () { return hideMenu(); } }, (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.createElement("a", { className: "sendbird-message__bottomsheet--hyperlink", rel: "noopener noreferrer", href: url, target: "_blank", onClick: onDownloadClick },
        React__default.createElement(Icon, { type: IconTypes.DOWNLOAD, fillColor: IconColors.PRIMARY, width: "24px", height: "24px" }),
        React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__SAVE)))));
};

var EMOJI_SIZE = 38;
var MobileBottomSheet = function (props) {
    var _a, _b, _c, _d;
    var hideMenu = props.hideMenu, channel = props.channel, emojiContainer = props.emojiContainer, message = props.message, replyType = props.replyType, userId = props.userId, resendMessage = props.resendMessage, deleteMessage = props.deleteMessage, toggleReaction = props.toggleReaction, _e = props.isReactionEnabled, isReactionEnabled = _e === void 0 ? false : _e, showEdit = props.showEdit, showRemove = props.showRemove, deleteMenuState = props.deleteMenuState, setQuoteMessage = props.setQuoteMessage, onReplyInThread = props.onReplyInThread, _f = props.isOpenedFromThread, isOpenedFromThread = _f === void 0 ? false : _f, onDownloadClick = props.onDownloadClick, renderMenuItems = props.renderMenuItems;
    var isByMe = ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId) === userId;
    var config = useSendbirdStateContext().config;
    var isOnline = config.isOnline;
    var showMenuItemCopy = isUserMessage(message);
    var showMenuItemEdit = (isUserMessage(message) && isSentMessage(message) && isByMe);
    var showMenuItemResend = (isOnline && isFailedMessage(message) && (message === null || message === void 0 ? void 0 : message.isResendable) && isByMe);
    var showMenuItemDelete = !isPendingMessage(message) && isByMe;
    var showMenuItemDeleteByState = isByMe && (deleteMenuState === undefined || deleteMenuState !== 'HIDE');
    var showMenuItemDeleteFinal = showMenuItemDeleteByState && showMenuItemDelete;
    var disableDelete = ((deleteMenuState !== undefined && deleteMenuState === 'DISABLE')
        || ((_c = (_b = message === null || message === void 0 ? void 0 : message.threadInfo) === null || _b === void 0 ? void 0 : _b.replyCount) !== null && _c !== void 0 ? _c : 0) > 0);
    var showMenuItemDownload = isSentMessage(message) && isFileMessage(message) && !isVoiceMessage(message);
    var showReaction = !isFailedMessage(message) && !isPendingMessage(message) && isReactionEnabled;
    var showMenuItemReply = (replyType === 'QUOTE_REPLY')
        && !isFailedMessage(message)
        && !isPendingMessage(message)
        && ((channel === null || channel === void 0 ? void 0 : channel.isGroupChannel()) && !(channel === null || channel === void 0 ? void 0 : channel.isBroadcast));
    var showMenuItemThread = (replyType === 'THREAD') && !isOpenedFromThread
        && !isFailedMessage(message)
        && !isPendingMessage(message)
        && !isThreadMessage(message)
        && ((channel === null || channel === void 0 ? void 0 : channel.isGroupChannel()) && !(channel === null || channel === void 0 ? void 0 : channel.isBroadcast));
    var maxEmojisPerRow = Math.floor(window.innerWidth / EMOJI_SIZE) - 1;
    var _g = useState(false), showEmojisOnly = _g[0], setShowEmojisOnly = _g[1];
    var emojis = emojiContainer && getEmojiListAll(emojiContainer);
    var visibleEmojis = showEmojisOnly ? emojis : emojis === null || emojis === void 0 ? void 0 : emojis.slice(0, maxEmojisPerRow);
    var canShowMoreEmojis = emojis && emojis.length > maxEmojisPerRow;
    var contextValue = {
        message: message,
        hideMenu: hideMenu,
        setQuoteMessage: setQuoteMessage,
        onReplyInThread: onReplyInThread,
        onMoveToParentMessage: function () { },
        showEdit: showEdit,
        showRemove: showRemove,
        deleteMessage: deleteMessage,
        resendMessage: resendMessage,
        isOnline: isOnline,
        disableDeleteMessage: disableDelete,
        triggerRef: null,
        containerRef: null,
        onDownloadClick: onDownloadClick,
    };
    return (React__default.createElement(MessageMenuProvider, { value: contextValue },
        React__default.createElement(BottomSheet, { onBackdropClick: hideMenu },
            React__default.createElement("div", { className: "sendbird-message__bottomsheet" },
                showReaction && (React__default.createElement("div", { className: "sendbird-message__bottomsheet-reactions" },
                    React__default.createElement("ul", { className: "sendbird-message__bottomsheet-reaction-bar" },
                        React__default.createElement("div", { className: classnames('sendbird-message__bottomsheet-reaction-bar__row', showEmojisOnly && 'sendbird-message__bottomsheet-reaction-bar__all') },
                            visibleEmojis.map(function (emoji) {
                                var _a, _b, _c;
                                var isReacted = (_c = (_b = (_a = message === null || message === void 0 ? void 0 : message.reactions) === null || _a === void 0 ? void 0 : _a.filter(function (reaction) { return reaction.key === emoji.key; })[0]) === null || _b === void 0 ? void 0 : _b.userIds) === null || _c === void 0 ? void 0 : _c.some(function (reactorId) { return reactorId === userId; });
                                return (React__default.createElement(ReactionButton, { key: emoji.key, width: "".concat(EMOJI_SIZE, "px"), height: "".concat(EMOJI_SIZE, "px"), selected: isReacted, onClick: function () {
                                        hideMenu();
                                        toggleReaction === null || toggleReaction === void 0 ? void 0 : toggleReaction(message, emoji.key, isReacted);
                                    }, testID: "ui_mobile_emoji_reactions_menu_".concat(emoji.key) },
                                    React__default.createElement(ImageRenderer, { url: (emoji === null || emoji === void 0 ? void 0 : emoji.url) || '', width: "28px", height: "28px", placeHolder: function (_a) {
                                            var style = _a.style;
                                            return (React__default.createElement("div", { style: style },
                                                React__default.createElement(Icon, { type: IconTypes.QUESTION, fillColor: IconColors.ON_BACKGROUND_3, width: "28px", height: "28px" })));
                                        } })));
                            }),
                            canShowMoreEmojis && !showEmojisOnly && (React__default.createElement(ReactionButton, { key: "emoji_more", width: "38px", height: "38px", onClick: function () { return setShowEmojisOnly(true); }, testID: "ui_mobile_emoji_reactions_menu_emojiadd" },
                                React__default.createElement(ImageRenderer, { url: '', width: "28px", height: "28px", placeHolder: function (_a) {
                                        var style = _a.style;
                                        return (React__default.createElement("div", { style: style },
                                            React__default.createElement(Icon, { type: IconTypes.EMOJI_MORE, fillColor: IconColors.ON_BACKGROUND_3, width: "28px", height: "28px" })));
                                    } }))))))),
                !showEmojisOnly && (React__default.createElement("div", { className: "sendbird-message__bottomsheet--actions" }, (_d = renderMenuItems === null || renderMenuItems === void 0 ? void 0 : renderMenuItems({
                    items: {
                        CopyMenuItem: CopyMenuItem,
                        EditMenuItem: EditMenuItem,
                        ResendMenuItem: ResendMenuItem,
                        ReplyMenuItem: ReplyMenuItem,
                        ThreadMenuItem: ThreadMenuItem,
                        DeleteMenuItem: DeleteMenuItem,
                    },
                })) !== null && _d !== void 0 ? _d : (React__default.createElement(React__default.Fragment, null,
                    showMenuItemCopy && React__default.createElement(CopyMenuItem, null),
                    showMenuItemEdit && React__default.createElement(EditMenuItem, null),
                    showMenuItemResend && React__default.createElement(ResendMenuItem, null),
                    showMenuItemReply && React__default.createElement(ReplyMenuItem, null),
                    showMenuItemThread && React__default.createElement(ThreadMenuItem, null),
                    showMenuItemDeleteFinal && React__default.createElement(DeleteMenuItem, null),
                    showMenuItemDownload && React__default.createElement(DownloadMenuItem, null)))))))));
};

var MobileMenu = function (props) {
    return (React__default.createElement(React__default.Fragment, null, (props === null || props === void 0 ? void 0 : props.isReactionEnabled) ? React__default.createElement(MobileBottomSheet, __assign({}, props)) : React__default.createElement(MobileContextMenu, __assign({}, props))));
};

export { MobileBottomSheet, MobileContextMenu, MobileMenu, MobileMenu as default };
//# sourceMappingURL=MobileMenu.js.map
