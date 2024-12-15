'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var index = require('../chunks/bundle-BLoixwYr.js');
var utils = require('../chunks/bundle-Ck6ikNW6.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var ui_ContextMenu = require('../chunks/bundle-BKyZTqvq.js');
require('./IconButton.js');
var LocalizationContext = require('../chunks/bundle-Cy1ruNzs.js');
var ui_Label = require('../chunks/bundle-CAR4EIKs.js');
require('@sendbird/chat');
var ui_Icon = require('./Icon.js');
var ui_BottomSheet = require('./BottomSheet.js');
var ui_ImageRenderer = require('./ImageRenderer.js');
var ui_ReactionButton = require('./ReactionButton.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-Dr9yFtKa.js');
require('../chunks/bundle-C2CwvM-u.js');
require('../chunks/bundle-BD0wJiNh.js');
require('../withSendbird.js');
require('react-dom');
require('@sendbird/chat/openChannel');
require('./SortByRow.js');
require('../chunks/bundle-C1poxl5k.js');
require('../chunks/bundle-Dio8pG-T.js');
require('../chunks/bundle-DZhkNDpN.js');
require('../chunks/bundle-DrIKAEHN.js');
require('./Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('../chunks/bundle-CJM9Pdwg.js');
require('../chunks/bundle-D_k3_Y_y.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var CopyMenuItem$1 = function (props) {
    var _a;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _b = ui_ContextMenu.useMessageMenuContext(), message = _b.message, hideMenu = _b.hideMenu;
    return (React__default.default.createElement(ui_ContextMenu.MenuItem, _tslib.__assign({}, props, { onClick: function (e) {
            var _a;
            if (index.isUserMessage(message))
                index.copyToClipboard(message.message);
            hideMenu();
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__COPY),
        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.COPY, fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" })))));
};
var ReplyMenuItem$1 = function (props) {
    var _a, _b, _c;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _d = ui_ContextMenu.useMessageMenuContext(), message = _d.message, hideMenu = _d.hideMenu, setQuoteMessage = _d.setQuoteMessage;
    return (React__default.default.createElement(ui_ContextMenu.MenuItem, _tslib.__assign({}, props, { disabled: message.parentMessageId > 0, onClick: function (e) {
            var _a;
            setQuoteMessage(message);
            hideMenu();
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ((_b = message.parentMessageId) !== null && _b !== void 0 ? _b : 0) > 0 ? ui_Label.LabelColors.ONBACKGROUND_4 : ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__REPLY),
        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.REPLY, fillColor: ((_c = message.parentMessageId) !== null && _c !== void 0 ? _c : 0) > 0 ? ui_Icon.IconColors.ON_BACKGROUND_4 : ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" })))));
};
var ThreadMenuItem$1 = function (props) {
    var _a;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _b = ui_ContextMenu.useMessageMenuContext(), message = _b.message, hideMenu = _b.hideMenu, onReplyInThread = _b.onReplyInThread;
    return (React__default.default.createElement(ui_ContextMenu.MenuItem, _tslib.__assign({}, props, { onClick: function (e) {
            var _a;
            onReplyInThread({ message: message });
            hideMenu();
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__THREAD),
        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.THREAD, fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" })))));
};
var EditMenuItem$1 = function (props) {
    var _a;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _b = ui_ContextMenu.useMessageMenuContext(), hideMenu = _b.hideMenu, showEdit = _b.showEdit, isOnline = _b.isOnline;
    return (React__default.default.createElement(ui_ContextMenu.MenuItem, _tslib.__assign({}, props, { onClick: function (e) {
            var _a;
            if (isOnline) {
                showEdit(true);
                hideMenu();
                (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__EDIT),
        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.EDIT, fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" })))));
};
var ResendMenuItem$1 = function (props) {
    var _a;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _b = ui_ContextMenu.useMessageMenuContext(), message = _b.message, hideMenu = _b.hideMenu, resendMessage = _b.resendMessage, isOnline = _b.isOnline;
    return (React__default.default.createElement(ui_ContextMenu.MenuItem, _tslib.__assign({}, props, { onClick: function (e) {
            var _a;
            if (isOnline) {
                resendMessage(message);
                hideMenu();
                (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__RESEND),
        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.REFRESH, fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" })))));
};
var DeleteMenuItem$1 = function (props) {
    var _a, _b, _c;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _d = ui_ContextMenu.useMessageMenuContext(), message = _d.message, hideMenu = _d.hideMenu, deleteMessage = _d.deleteMessage, showRemove = _d.showRemove, isOnline = _d.isOnline, disableDeleteMessage = _d.disableDeleteMessage;
    return (React__default.default.createElement(ui_ContextMenu.MenuItem, _tslib.__assign({}, props, { disabled: typeof disableDeleteMessage === 'boolean'
            ? disableDeleteMessage
            : ((_b = (_a = message.threadInfo) === null || _a === void 0 ? void 0 : _a.replyCount) !== null && _b !== void 0 ? _b : 0) > 0, onClick: function (e) {
            var _a;
            if (index.isFailedMessage(message)) {
                deleteMessage(message);
            }
            else if (isOnline) {
                showRemove(true);
                hideMenu();
                (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }
        } }), (_c = props.children) !== null && _c !== void 0 ? _c : (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: disableDeleteMessage ? ui_Label.LabelColors.ONBACKGROUND_4 : ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__DELETE),
        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.DELETE, fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" })))));
};
var DownloadMenuItem$1 = function (props) {
    var _a;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _b = ui_ContextMenu.useMessageMenuContext(), hideMenu = _b.hideMenu, message = _b.message, onDownloadClick = _b.onDownloadClick;
    var url = message.url;
    return (React__default.default.createElement(ui_ContextMenu.MenuItem, _tslib.__assign({}, props, { onClick: function () {
            hideMenu();
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.default.createElement("a", { className: "sendbird-message__contextmenu--hyperlink", rel: "noopener noreferrer", href: url, target: "_blank", onClick: onDownloadClick },
        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__SAVE),
        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.DOWNLOAD, fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" })))));
};

var MobileContextMenu = function (props) {
    var _a, _b, _c, _d;
    var channel = props.channel, message = props.message, replyType = props.replyType, userId = props.userId, resendMessage = props.resendMessage, showEdit = props.showEdit, showRemove = props.showRemove, deleteMenuState = props.deleteMenuState, deleteMessage = props.deleteMessage, setQuoteMessage = props.setQuoteMessage, parentRef = props.parentRef, onReplyInThread = props.onReplyInThread, _e = props.isOpenedFromThread, isOpenedFromThread = _e === void 0 ? false : _e, _f = props.onDownloadClick, onDownloadClick = _f === void 0 ? null : _f, renderMenuItems = props.renderMenuItems, hideMobileMenu = props.hideMenu;
    var isByMe = ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId) === userId;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var isOnline = config.isOnline;
    // Menu Items condition
    var showMenuItemCopy = index.isUserMessage(message);
    var showMenuItemEdit = index.isUserMessage(message) && index.isSentMessage(message) && isByMe;
    var showMenuItemResend = index.isFailedMessage(message) && (message === null || message === void 0 ? void 0 : message.isResendable) && isByMe;
    var showMenuItemDelete = !index.isPendingMessage(message) && isByMe;
    var showMenuItemDeleteByState = isByMe && (deleteMenuState === undefined || deleteMenuState !== 'HIDE');
    var showMenuItemDeleteFinal = showMenuItemDeleteByState && showMenuItemDelete;
    var showMenuItemDownload = !index.isPendingMessage(message) && index.isFileMessage(message) && !(index.isVoiceMessage(message) && (channel === null || channel === void 0 ? void 0 : channel.isSuper) || (channel === null || channel === void 0 ? void 0 : channel.isBroadcast));
    var showMenuItemReply = replyType === 'QUOTE_REPLY' && !index.isFailedMessage(message) && !index.isPendingMessage(message) && (channel === null || channel === void 0 ? void 0 : channel.isGroupChannel());
    var showMenuItemThread = replyType === 'THREAD' && !isOpenedFromThread && !index.isFailedMessage(message) && !index.isPendingMessage(message) && !index.isThreadMessage(message) && (channel === null || channel === void 0 ? void 0 : channel.isGroupChannel());
    var disableDeleteMessage = (deleteMenuState !== undefined && deleteMenuState === 'DISABLE') || ((_c = (_b = message === null || message === void 0 ? void 0 : message.threadInfo) === null || _b === void 0 ? void 0 : _b.replyCount) !== null && _c !== void 0 ? _c : 0) > 0;
    var contextValue = {
        message: message,
        hideMenu: hideMobileMenu,
        setQuoteMessage: setQuoteMessage,
        onReplyInThread: onReplyInThread,
        onMoveToParentMessage: utils.noop,
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
    return (React__default.default.createElement(ui_ContextMenu.MessageMenuProvider, { value: contextValue },
        React__default.default.createElement(ui_ContextMenu.MenuItems, { className: "sendbird-message__mobile-context-menu", parentRef: parentRef, parentContainRef: parentRef, closeDropdown: hideMobileMenu }, (_d = renderMenuItems === null || renderMenuItems === void 0 ? void 0 : renderMenuItems({
            items: {
                CopyMenuItem: CopyMenuItem$1,
                ReplyMenuItem: ReplyMenuItem$1,
                ThreadMenuItem: ThreadMenuItem$1,
                EditMenuItem: EditMenuItem$1,
                ResendMenuItem: ResendMenuItem$1,
                DeleteMenuItem: DeleteMenuItem$1,
            },
        })) !== null && _d !== void 0 ? _d : (React__default.default.createElement(React__default.default.Fragment, null,
            showMenuItemCopy && React__default.default.createElement(CopyMenuItem$1, null),
            showMenuItemReply && React__default.default.createElement(ReplyMenuItem$1, null),
            showMenuItemThread && React__default.default.createElement(ThreadMenuItem$1, null),
            showMenuItemEdit && React__default.default.createElement(EditMenuItem$1, null),
            showMenuItemResend && React__default.default.createElement(ResendMenuItem$1, null),
            showMenuItemDeleteFinal && React__default.default.createElement(DeleteMenuItem$1, null),
            showMenuItemDownload && React__default.default.createElement(DownloadMenuItem$1, null))))));
};

var CopyMenuItem = function (props) {
    var _a;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _b = ui_ContextMenu.useMessageMenuContext(), message = _b.message, hideMenu = _b.hideMenu;
    return (React__default.default.createElement(ui_ContextMenu.BottomSheetMenuItem, _tslib.__assign({}, props, { onClick: function (e) {
            var _a;
            if (index.isUserMessage(message))
                index.copyToClipboard(message.message);
            hideMenu();
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.COPY, fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" }),
        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__COPY)))));
};
var EditMenuItem = function (props) {
    var _a;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _b = ui_ContextMenu.useMessageMenuContext(), hideMenu = _b.hideMenu, showEdit = _b.showEdit, isOnline = _b.isOnline;
    return (React__default.default.createElement(ui_ContextMenu.BottomSheetMenuItem, _tslib.__assign({}, props, { onClick: function (e) {
            var _a;
            if (isOnline) {
                showEdit(true);
                hideMenu();
                (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.EDIT, fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" }),
        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__EDIT)))));
};
var ResendMenuItem = function (props) {
    var _a;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _b = ui_ContextMenu.useMessageMenuContext(), message = _b.message, hideMenu = _b.hideMenu, resendMessage = _b.resendMessage, isOnline = _b.isOnline;
    return (React__default.default.createElement(ui_ContextMenu.BottomSheetMenuItem, _tslib.__assign({}, props, { onClick: function (e) {
            var _a;
            if (isOnline) {
                resendMessage(message);
                hideMenu();
                (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.REFRESH, fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" }),
        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__RESEND)))));
};
var ReplyMenuItem = function (props) {
    var _a, _b, _c;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _d = ui_ContextMenu.useMessageMenuContext(), message = _d.message, hideMenu = _d.hideMenu, setQuoteMessage = _d.setQuoteMessage;
    return (React__default.default.createElement(ui_ContextMenu.BottomSheetMenuItem, _tslib.__assign({}, props, { disabled: message.parentMessageId > 0, onClick: function (e) {
            var _a;
            setQuoteMessage(message);
            hideMenu();
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.REPLY, fillColor: ((_b = message.parentMessageId) !== null && _b !== void 0 ? _b : 0) > 0 ? ui_Icon.IconColors.ON_BACKGROUND_3 : ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" }),
        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ((_c = message.parentMessageId) !== null && _c !== void 0 ? _c : 0) > 0 ? ui_Label.LabelColors.ONBACKGROUND_4 : ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__REPLY)))));
};
var ThreadMenuItem = function (props) {
    var _a;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _b = ui_ContextMenu.useMessageMenuContext(), message = _b.message, hideMenu = _b.hideMenu, onReplyInThread = _b.onReplyInThread;
    return (React__default.default.createElement(ui_ContextMenu.BottomSheetMenuItem, _tslib.__assign({}, props, { onClick: function (e) {
            var _a;
            onReplyInThread({ message: message });
            hideMenu();
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.THREAD, fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" }),
        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__THREAD)))));
};
var DeleteMenuItem = function (props) {
    var _a, _b, _c;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _d = ui_ContextMenu.useMessageMenuContext(), message = _d.message, hideMenu = _d.hideMenu, deleteMessage = _d.deleteMessage, showRemove = _d.showRemove, isOnline = _d.isOnline, disableDeleteMessage = _d.disableDeleteMessage;
    return (React__default.default.createElement(ui_ContextMenu.BottomSheetMenuItem, _tslib.__assign({}, props, { disabled: typeof disableDeleteMessage === 'boolean'
            ? disableDeleteMessage
            : ((_b = (_a = message.threadInfo) === null || _a === void 0 ? void 0 : _a.replyCount) !== null && _b !== void 0 ? _b : 0) > 0, onClick: function (e) {
            var _a;
            if (index.isFailedMessage(message)) {
                deleteMessage(message);
            }
            else if (isOnline) {
                showRemove(true);
                hideMenu();
                (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }
        } }), (_c = props.children) !== null && _c !== void 0 ? _c : (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.DELETE, fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" }),
        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: disableDeleteMessage ? ui_Label.LabelColors.ONBACKGROUND_4 : ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__DELETE)))));
};
var DownloadMenuItem = function (props) {
    var _a;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _b = ui_ContextMenu.useMessageMenuContext(), hideMenu = _b.hideMenu, message = _b.message, onDownloadClick = _b.onDownloadClick;
    var url = message.url;
    return (React__default.default.createElement(ui_ContextMenu.BottomSheetMenuItem, { onClick: function () { return hideMenu(); } }, (_a = props.children) !== null && _a !== void 0 ? _a : (React__default.default.createElement("a", { className: "sendbird-message__bottomsheet--hyperlink", rel: "noopener noreferrer", href: url, target: "_blank", onClick: onDownloadClick },
        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.DOWNLOAD, fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" }),
        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.MESSAGE_MENU__SAVE)))));
};

var EMOJI_SIZE = 38;
var MobileBottomSheet = function (props) {
    var _a, _b, _c, _d;
    var hideMenu = props.hideMenu, channel = props.channel, emojiContainer = props.emojiContainer, message = props.message, replyType = props.replyType, userId = props.userId, resendMessage = props.resendMessage, deleteMessage = props.deleteMessage, toggleReaction = props.toggleReaction, _e = props.isReactionEnabled, isReactionEnabled = _e === void 0 ? false : _e, showEdit = props.showEdit, showRemove = props.showRemove, deleteMenuState = props.deleteMenuState, setQuoteMessage = props.setQuoteMessage, onReplyInThread = props.onReplyInThread, _f = props.isOpenedFromThread, isOpenedFromThread = _f === void 0 ? false : _f, onDownloadClick = props.onDownloadClick, renderMenuItems = props.renderMenuItems;
    var isByMe = ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId) === userId;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var isOnline = config.isOnline;
    var showMenuItemCopy = index.isUserMessage(message);
    var showMenuItemEdit = (index.isUserMessage(message) && index.isSentMessage(message) && isByMe);
    var showMenuItemResend = (isOnline && index.isFailedMessage(message) && (message === null || message === void 0 ? void 0 : message.isResendable) && isByMe);
    var showMenuItemDelete = !index.isPendingMessage(message) && isByMe;
    var showMenuItemDeleteByState = isByMe && (deleteMenuState === undefined || deleteMenuState !== 'HIDE');
    var showMenuItemDeleteFinal = showMenuItemDeleteByState && showMenuItemDelete;
    var disableDelete = ((deleteMenuState !== undefined && deleteMenuState === 'DISABLE')
        || ((_c = (_b = message === null || message === void 0 ? void 0 : message.threadInfo) === null || _b === void 0 ? void 0 : _b.replyCount) !== null && _c !== void 0 ? _c : 0) > 0);
    var showMenuItemDownload = index.isSentMessage(message) && index.isFileMessage(message) && !index.isVoiceMessage(message);
    var showReaction = !index.isFailedMessage(message) && !index.isPendingMessage(message) && isReactionEnabled;
    var showMenuItemReply = (replyType === 'QUOTE_REPLY')
        && !index.isFailedMessage(message)
        && !index.isPendingMessage(message)
        && ((channel === null || channel === void 0 ? void 0 : channel.isGroupChannel()) && !(channel === null || channel === void 0 ? void 0 : channel.isBroadcast));
    var showMenuItemThread = (replyType === 'THREAD') && !isOpenedFromThread
        && !index.isFailedMessage(message)
        && !index.isPendingMessage(message)
        && !index.isThreadMessage(message)
        && ((channel === null || channel === void 0 ? void 0 : channel.isGroupChannel()) && !(channel === null || channel === void 0 ? void 0 : channel.isBroadcast));
    var maxEmojisPerRow = Math.floor(window.innerWidth / EMOJI_SIZE) - 1;
    var _g = React.useState(false), showEmojisOnly = _g[0], setShowEmojisOnly = _g[1];
    var emojis = emojiContainer && index.getEmojiListAll(emojiContainer);
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
    return (React__default.default.createElement(ui_ContextMenu.MessageMenuProvider, { value: contextValue },
        React__default.default.createElement(ui_BottomSheet, { onBackdropClick: hideMenu },
            React__default.default.createElement("div", { className: "sendbird-message__bottomsheet" },
                showReaction && (React__default.default.createElement("div", { className: "sendbird-message__bottomsheet-reactions" },
                    React__default.default.createElement("ul", { className: "sendbird-message__bottomsheet-reaction-bar" },
                        React__default.default.createElement("div", { className: utils.classnames('sendbird-message__bottomsheet-reaction-bar__row', showEmojisOnly && 'sendbird-message__bottomsheet-reaction-bar__all') },
                            visibleEmojis.map(function (emoji) {
                                var _a, _b, _c;
                                var isReacted = (_c = (_b = (_a = message === null || message === void 0 ? void 0 : message.reactions) === null || _a === void 0 ? void 0 : _a.filter(function (reaction) { return reaction.key === emoji.key; })[0]) === null || _b === void 0 ? void 0 : _b.userIds) === null || _c === void 0 ? void 0 : _c.some(function (reactorId) { return reactorId === userId; });
                                return (React__default.default.createElement(ui_ReactionButton, { key: emoji.key, width: "".concat(EMOJI_SIZE, "px"), height: "".concat(EMOJI_SIZE, "px"), selected: isReacted, onClick: function () {
                                        hideMenu();
                                        toggleReaction === null || toggleReaction === void 0 ? void 0 : toggleReaction(message, emoji.key, isReacted);
                                    }, testID: "ui_mobile_emoji_reactions_menu_".concat(emoji.key) },
                                    React__default.default.createElement(ui_ImageRenderer.default, { url: (emoji === null || emoji === void 0 ? void 0 : emoji.url) || '', width: "28px", height: "28px", placeHolder: function (_a) {
                                            var style = _a.style;
                                            return (React__default.default.createElement("div", { style: style },
                                                React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.QUESTION, fillColor: ui_Icon.IconColors.ON_BACKGROUND_3, width: "28px", height: "28px" })));
                                        } })));
                            }),
                            canShowMoreEmojis && !showEmojisOnly && (React__default.default.createElement(ui_ReactionButton, { key: "emoji_more", width: "38px", height: "38px", onClick: function () { return setShowEmojisOnly(true); }, testID: "ui_mobile_emoji_reactions_menu_emojiadd" },
                                React__default.default.createElement(ui_ImageRenderer.default, { url: '', width: "28px", height: "28px", placeHolder: function (_a) {
                                        var style = _a.style;
                                        return (React__default.default.createElement("div", { style: style },
                                            React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.EMOJI_MORE, fillColor: ui_Icon.IconColors.ON_BACKGROUND_3, width: "28px", height: "28px" })));
                                    } }))))))),
                !showEmojisOnly && (React__default.default.createElement("div", { className: "sendbird-message__bottomsheet--actions" }, (_d = renderMenuItems === null || renderMenuItems === void 0 ? void 0 : renderMenuItems({
                    items: {
                        CopyMenuItem: CopyMenuItem,
                        EditMenuItem: EditMenuItem,
                        ResendMenuItem: ResendMenuItem,
                        ReplyMenuItem: ReplyMenuItem,
                        ThreadMenuItem: ThreadMenuItem,
                        DeleteMenuItem: DeleteMenuItem,
                    },
                })) !== null && _d !== void 0 ? _d : (React__default.default.createElement(React__default.default.Fragment, null,
                    showMenuItemCopy && React__default.default.createElement(CopyMenuItem, null),
                    showMenuItemEdit && React__default.default.createElement(EditMenuItem, null),
                    showMenuItemResend && React__default.default.createElement(ResendMenuItem, null),
                    showMenuItemReply && React__default.default.createElement(ReplyMenuItem, null),
                    showMenuItemThread && React__default.default.createElement(ThreadMenuItem, null),
                    showMenuItemDeleteFinal && React__default.default.createElement(DeleteMenuItem, null),
                    showMenuItemDownload && React__default.default.createElement(DownloadMenuItem, null)))))))));
};

var MobileMenu = function (props) {
    return (React__default.default.createElement(React__default.default.Fragment, null, (props === null || props === void 0 ? void 0 : props.isReactionEnabled) ? React__default.default.createElement(MobileBottomSheet, _tslib.__assign({}, props)) : React__default.default.createElement(MobileContextMenu, _tslib.__assign({}, props))));
};

exports.MobileBottomSheet = MobileBottomSheet;
exports.MobileContextMenu = MobileContextMenu;
exports.MobileMenu = MobileMenu;
exports.default = MobileMenu;
//# sourceMappingURL=MobileMenu.js.map
