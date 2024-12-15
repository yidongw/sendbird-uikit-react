'use strict';

var React = require('react');
var utils = require('./bundle-BYHj6UqH.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var ui_ContextMenu = require('./bundle-BYSQ-mQr.js');
var _tslib = require('./bundle-DRvomNLJ.js');
var ui_IconButton = require('../ui/IconButton.js');
var ui_Icon = require('../ui/Icon.js');
var index = require('./bundle-e2d_I3io.js');
var LocalizationContext = require('./bundle-CmBrGegh.js');
var SendbirdChat = require('@sendbird/chat');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var TriggerIcon = function (_a) {
    var ref = _a.ref, _b = _a.onClick, onClick = _b === void 0 ? utils.noop : _b, _c = _a.onBlur, onBlur = _c === void 0 ? utils.noop : _c, _d = _a.renderIcon, renderIcon = _d === void 0 ? function (props) { return React__default.default.createElement(ui_Icon.default, _tslib.__assign({}, props)); } : _d;
    return (React__default.default.createElement(ui_IconButton, { ref: ref, width: "32px", height: "32px", onClick: onClick, onBlur: onBlur }, renderIcon({
        type: ui_Icon.IconTypes.MORE,
        fillColor: ui_Icon.IconColors.CONTENT_INVERSE,
        width: '24px',
        height: '24px',
    })));
};
var CopyMenuItem = function (props) {
    var _a;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _b = ui_ContextMenu.useMessageMenuContext(), message = _b.message, hideMenu = _b.hideMenu;
    return (React__default.default.createElement(ui_ContextMenu.MenuItem, _tslib.__assign({}, props, { onClick: function (e) {
            var _a;
            if (index.isUserMessage(message))
                index.copyToClipboard(message.message);
            hideMenu();
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : stringSet.MESSAGE_MENU__COPY));
};
var ReplyMenuItem = function (props) {
    var _a;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _b = ui_ContextMenu.useMessageMenuContext(), message = _b.message, hideMenu = _b.hideMenu, setQuoteMessage = _b.setQuoteMessage;
    return (React__default.default.createElement(ui_ContextMenu.MenuItem, _tslib.__assign({}, props, { disabled: message.parentMessageId > 0, onClick: function (e) {
            var _a;
            setQuoteMessage(message);
            hideMenu();
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : stringSet.MESSAGE_MENU__REPLY));
};
var ThreadMenuItem = function (props) {
    var _a;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _b = ui_ContextMenu.useMessageMenuContext(), message = _b.message, hideMenu = _b.hideMenu, onReplyInThread = _b.onReplyInThread;
    return (React__default.default.createElement(ui_ContextMenu.MenuItem, _tslib.__assign({}, props, { onClick: function (e) {
            var _a;
            onReplyInThread({ message: message });
            hideMenu();
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : stringSet.MESSAGE_MENU__THREAD));
};
var OpenInChannelMenuItem = function (props) {
    var _a;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _b = ui_ContextMenu.useMessageMenuContext(), hideMenu = _b.hideMenu, onMoveToParentMessage = _b.onMoveToParentMessage;
    return (React__default.default.createElement(ui_ContextMenu.MenuItem, _tslib.__assign({}, props, { onClick: function (e) {
            var _a;
            onMoveToParentMessage();
            hideMenu();
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : stringSet.MESSAGE_MENU__OPEN_IN_CHANNEL));
};
var EditMenuItem = function (props) {
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
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : stringSet.MESSAGE_MENU__EDIT));
};
var ResendMenuItem = function (props) {
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
        } }), (_a = props.children) !== null && _a !== void 0 ? _a : stringSet.MESSAGE_MENU__RESEND));
};
var DeleteMenuItem = function (props) {
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
        } }), (_c = props.children) !== null && _c !== void 0 ? _c : stringSet.MESSAGE_MENU__DELETE));
};

var isReplyTypeMessageEnabled = function (_a) {
    var _b;
    var channel = _a.channel, message = _a.message;
    if (index.isFailedMessage(message) || index.isPendingMessage(message)) {
        return false;
    }
    if (!((_b = channel === null || channel === void 0 ? void 0 : channel.isGroupChannel) === null || _b === void 0 ? void 0 : _b.call(channel)) || (channel === null || channel === void 0 ? void 0 : channel.isEphemeral)) {
        return false;
    }
    var isBroadcast = channel === null || channel === void 0 ? void 0 : channel.isBroadcast;
    var isOperator = (channel === null || channel === void 0 ? void 0 : channel.myRole) === SendbirdChat.Role.OPERATOR;
    if (isBroadcast)
        return isOperator;
    return true;
};
var showMenuItemCopy = function (_a) {
    var message = _a.message;
    return index.isUserMessage(message);
};
var showMenuItemEdit = function (_a) {
    var message = _a.message, channel = _a.channel, isByMe = _a.isByMe;
    return (!(channel === null || channel === void 0 ? void 0 : channel.isEphemeral) && index.isUserMessage(message) && index.isSentMessage(message) && isByMe);
};
var showMenuItemResend = function (_a) {
    var message = _a.message, isByMe = _a.isByMe;
    return (index.isFailedMessage(message) && (message === null || message === void 0 ? void 0 : message.isResendable) && isByMe);
};
var showMenuItemDelete = function (_a) {
    var message = _a.message, channel = _a.channel, isByMe = _a.isByMe;
    return !(channel === null || channel === void 0 ? void 0 : channel.isEphemeral) && !index.isPendingMessage(message) && isByMe;
};
var showMenuItemOpenInChannel = function (_a) {
    var _b = _a.onMoveToParentMessage, onMoveToParentMessage = _b === void 0 ? undefined : _b;
    return !!onMoveToParentMessage;
};
var showMenuItemReply = function (_a) {
    var channel = _a.channel, message = _a.message, replyType = _a.replyType;
    return isReplyTypeMessageEnabled({ channel: channel, message: message }) && replyType === 'QUOTE_REPLY';
};
var showMenuItemThread = function (_a) {
    var channel = _a.channel, message = _a.message, replyType = _a.replyType, onReplyInThread = _a.onReplyInThread;
    return isReplyTypeMessageEnabled({ channel: channel, message: message }) && replyType === 'THREAD' && !(message === null || message === void 0 ? void 0 : message.parentMessageId) && typeof onReplyInThread === 'function';
};

var MessageMenu = function (_a) {
    var _b;
    var className = _a.className, message = _a.message, channel = _a.channel, isByMe = _a.isByMe, replyType = _a.replyType, _c = _a.renderTrigger, renderTrigger = _c === void 0 ? TriggerIcon : _c, renderMenuItems = _a.renderMenuItems, _d = _a.disableDeleteMessage, disableDeleteMessage = _d === void 0 ? null : _d, _e = _a.showEdit, showEdit = _e === void 0 ? utils.noop : _e, _f = _a.showRemove, showRemove = _f === void 0 ? utils.noop : _f, deleteMessage = _a.deleteMessage, resendMessage = _a.resendMessage, setQuoteMessage = _a.setQuoteMessage, onReplyInThread = _a.onReplyInThread, onMoveToParentMessage = _a.onMoveToParentMessage;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var isOnline = config.isOnline;
    var triggerRef = React.useRef(null);
    var containerRef = React.useRef(null);
    var _g = React.useState(false), isMenuVisible = _g[0], setMenuVisibility = _g[1];
    var hideMenu = function () { return setMenuVisibility(false); };
    var showMenu = function () { return setMenuVisibility(true); };
    var toggleMenu = function () { return setMenuVisibility(function (visible) { return !visible; }); };
    var params = {
        message: message,
        channel: channel,
        isByMe: isByMe,
        replyType: replyType,
        onReplyInThread: onReplyInThread,
        onMoveToParentMessage: onMoveToParentMessage,
    };
    return (React__default.default.createElement("div", { className: utils.classnames('sendbird-message-menu', className), ref: containerRef },
        React__default.default.createElement(ui_ContextMenu.MessageMenuProvider, { value: {
                message: message,
                hideMenu: hideMenu,
                showMenu: showMenu,
                toggleMenu: toggleMenu,
                setQuoteMessage: setQuoteMessage,
                onReplyInThread: onReplyInThread,
                onMoveToParentMessage: onMoveToParentMessage,
                showEdit: showEdit,
                showRemove: showRemove,
                deleteMessage: deleteMessage,
                resendMessage: resendMessage,
                isOnline: isOnline,
                disableDeleteMessage: disableDeleteMessage,
                triggerRef: triggerRef,
                containerRef: containerRef,
            } },
            (renderTrigger({ ref: triggerRef, onClick: toggleMenu })),
            isMenuVisible && (React__default.default.createElement(ui_ContextMenu.MenuItems, { id: ui_ContextMenu.getObservingId(message.messageId), parentRef: triggerRef, parentContainRef: containerRef, closeDropdown: hideMenu, openLeft: isByMe }, (_b = renderMenuItems === null || renderMenuItems === void 0 ? void 0 : renderMenuItems({
                items: {
                    CopyMenuItem: CopyMenuItem,
                    ReplyMenuItem: ReplyMenuItem,
                    ThreadMenuItem: ThreadMenuItem,
                    OpenInChannelMenuItem: OpenInChannelMenuItem,
                    EditMenuItem: EditMenuItem,
                    ResendMenuItem: ResendMenuItem,
                    DeleteMenuItem: DeleteMenuItem,
                },
            })) !== null && _b !== void 0 ? _b : (React__default.default.createElement(React__default.default.Fragment, null,
                showMenuItemCopy(params) && React__default.default.createElement(CopyMenuItem, null),
                showMenuItemReply(params) && React__default.default.createElement(ReplyMenuItem, null),
                showMenuItemThread(params) && React__default.default.createElement(ThreadMenuItem, null),
                showMenuItemOpenInChannel(params) && React__default.default.createElement(OpenInChannelMenuItem, null),
                showMenuItemEdit(params) && React__default.default.createElement(EditMenuItem, null),
                showMenuItemResend(params) && React__default.default.createElement(ResendMenuItem, null),
                showMenuItemDelete(params) && React__default.default.createElement(DeleteMenuItem, null))))))));
};

exports.MessageMenu = MessageMenu;
//# sourceMappingURL=bundle-CDQSndVh.js.map
