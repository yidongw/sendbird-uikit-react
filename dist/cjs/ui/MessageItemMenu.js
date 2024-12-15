'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var ui_ContextMenu = require('../chunks/bundle-BYSQ-mQr.js');
var ui_Icon = require('./Icon.js');
var ui_IconButton = require('./IconButton.js');
var index = require('../chunks/bundle-e2d_I3io.js');
var LocalizationContext = require('../chunks/bundle-CmBrGegh.js');
var types = require('../chunks/bundle-Dke6QHpR.js');
var utils = require('../chunks/bundle-BYHj6UqH.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('./SortByRow.js');
require('../chunks/bundle-lGoyqUWm.js');
require('../withSendbird.js');
require('../chunks/bundle-D8-2bEdY.js');
require('../chunks/bundle-Q9YDOzjz.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-4kwoH67w.js');
require('../chunks/bundle-BCJ8mayg.js');
require('../chunks/bundle-C0tdWwa4.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function MessageMenu(props) {
    var _a;
    var className = props.className, message = props.message, channel = props.channel, _b = props.isByMe, isByMe = _b === void 0 ? false : _b, _c = props.disabled, disabled = _c === void 0 ? false : _c, replyType = props.replyType, _d = props.disableDeleteMessage, disableDeleteMessage = _d === void 0 ? null : _d, showEdit = props.showEdit, showRemove = props.showRemove, deleteMessage = props.deleteMessage, resendMessage = props.resendMessage, setQuoteMessage = props.setQuoteMessage, setSupposedHover = props.setSupposedHover, onReplyInThread = props.onReplyInThread, _e = props.onMoveToParentMessage, onMoveToParentMessage = _e === void 0 ? null : _e;
    var _f = utils.deleteNullish(props).renderMenuItem, renderMenuItem = _f === void 0 ? function (props) { return React__default.default.createElement(ui_ContextMenu.MenuItem$1, _tslib.__assign({}, props), props.text); } : _f;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var triggerRef = React.useRef(null);
    var containerRef = React.useRef(null);
    var showMenuItemCopy = index.isUserMessage(message);
    var showMenuItemEdit = (!(channel === null || channel === void 0 ? void 0 : channel.isEphemeral) && index.isUserMessage(message) && index.isSentMessage(message) && isByMe);
    var showMenuItemResend = (index.isFailedMessage(message) && (message === null || message === void 0 ? void 0 : message.isResendable) && isByMe);
    var showMenuItemDelete = !(channel === null || channel === void 0 ? void 0 : channel.isEphemeral) && !index.isPendingMessage(message) && isByMe;
    var showMenuItemOpenInChannel = onMoveToParentMessage !== null;
    /**
     * TODO: Manage timing issue
     * User delete pending message -> Sending message success
     */
    var isReplyTypeEnabled = !index.isFailedMessage(message)
        && !index.isPendingMessage(message)
        && (((_a = channel === null || channel === void 0 ? void 0 : channel.isGroupChannel) === null || _a === void 0 ? void 0 : _a.call(channel))
            && !(channel === null || channel === void 0 ? void 0 : channel.isEphemeral)
            && (((channel === null || channel === void 0 ? void 0 : channel.isBroadcast) && (channel === null || channel === void 0 ? void 0 : channel.myRole) === types.Role.OPERATOR)
                || !(channel === null || channel === void 0 ? void 0 : channel.isBroadcast)));
    var showMenuItemReply = isReplyTypeEnabled && replyType === 'QUOTE_REPLY';
    var showMenuItemThread = isReplyTypeEnabled && replyType === 'THREAD' && !(message === null || message === void 0 ? void 0 : message.parentMessageId) && onReplyInThread;
    if (!(showMenuItemCopy
        || showMenuItemReply
        || showMenuItemThread
        || showMenuItemOpenInChannel
        || showMenuItemEdit
        || showMenuItemResend
        || showMenuItemDelete)) {
        return null;
    }
    return (React__default.default.createElement("div", { className: index.getClassName([className !== null && className !== void 0 ? className : '', 'sendbird-message-item-menu']), ref: containerRef },
        React__default.default.createElement(ui_ContextMenu.ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.default.createElement(ui_IconButton, { className: "sendbird-message-item-menu__trigger", ref: triggerRef, width: "32px", height: "32px", onClick: function () {
                    toggleDropdown();
                    setSupposedHover === null || setSupposedHover === void 0 ? void 0 : setSupposedHover(true);
                }, onBlur: function () {
                    setSupposedHover === null || setSupposedHover === void 0 ? void 0 : setSupposedHover(false);
                } },
                React__default.default.createElement(ui_Icon.default, { className: "sendbird-message-item-menu__trigger__icon", testID: "sendbird-message-item-menu__trigger__icon", type: ui_Icon.IconTypes.MORE, fillColor: ui_Icon.IconColors.CONTENT_INVERSE, width: "24px", height: "24px" }))); }, menuItems: function (close) {
                var _a, _b;
                var closeDropdown = function () {
                    close();
                    setSupposedHover === null || setSupposedHover === void 0 ? void 0 : setSupposedHover(false);
                };
                return (React__default.default.createElement(ui_ContextMenu.MenuItems, { className: "sendbird-message-item-menu__list", testID: "sendbird-message-item-menu__list", parentRef: triggerRef, parentContainRef: containerRef, closeDropdown: closeDropdown, openLeft: isByMe },
                    showMenuItemCopy && (renderMenuItem({
                        className: 'sendbird-message-item-menu__list__menu-item menu-item-copy',
                        onClick: function () {
                            index.copyToClipboard(message === null || message === void 0 ? void 0 : message.message);
                            closeDropdown();
                        },
                        dataSbId: 'ui_message_item_menu_copy',
                        text: stringSet.MESSAGE_MENU__COPY,
                    })),
                    showMenuItemReply && (renderMenuItem({
                        className: 'sendbird-message-item-menu__list__menu-item menu-item-reply',
                        onClick: function () {
                            setQuoteMessage === null || setQuoteMessage === void 0 ? void 0 : setQuoteMessage(message);
                            closeDropdown();
                        },
                        disable: (message === null || message === void 0 ? void 0 : message.parentMessageId) > 0,
                        dataSbId: 'ui_message_item_menu_reply',
                        text: stringSet.MESSAGE_MENU__REPLY,
                    })),
                    showMenuItemThread && (renderMenuItem({
                        className: 'sendbird-message-item-menu__list__menu-item menu-item-thread',
                        onClick: function () {
                            onReplyInThread === null || onReplyInThread === void 0 ? void 0 : onReplyInThread({ message: message });
                            closeDropdown();
                        },
                        dataSbId: 'ui_message_item_menu_thread',
                        text: stringSet.MESSAGE_MENU__THREAD,
                    })),
                    showMenuItemOpenInChannel && (renderMenuItem({
                        className: 'sendbird-message-item-menu__list__menu-item menu-item-open-channel',
                        onClick: function () {
                            onMoveToParentMessage === null || onMoveToParentMessage === void 0 ? void 0 : onMoveToParentMessage();
                            closeDropdown();
                        },
                        dataSbId: 'ui_message_item_menu_open_in_channel',
                        text: stringSet.MESSAGE_MENU__OPEN_IN_CHANNEL,
                    })),
                    showMenuItemEdit && (renderMenuItem({
                        className: 'sendbird-message-item-menu__list__menu-item menu-item-edit',
                        onClick: function () {
                            if (!disabled) {
                                showEdit === null || showEdit === void 0 ? void 0 : showEdit(true);
                                closeDropdown();
                            }
                        },
                        dataSbId: 'ui_message_item_menu_edit',
                        text: stringSet.MESSAGE_MENU__EDIT,
                    })),
                    showMenuItemResend && (renderMenuItem({
                        className: 'sendbird-message-item-menu__list__menu-item menu-item-resend',
                        onClick: function () {
                            if (!disabled) {
                                resendMessage === null || resendMessage === void 0 ? void 0 : resendMessage(message);
                                closeDropdown();
                            }
                        },
                        dataSbId: 'ui_message_item_menu_resend',
                        text: stringSet.MESSAGE_MENU__RESEND,
                    })),
                    showMenuItemDelete && (renderMenuItem({
                        className: 'sendbird-message-item-menu__list__menu-item menu-item-delete',
                        onClick: function () {
                            if (index.isFailedMessage(message)) {
                                deleteMessage === null || deleteMessage === void 0 ? void 0 : deleteMessage(message);
                            }
                            else if (!disabled) {
                                showRemove === null || showRemove === void 0 ? void 0 : showRemove(true);
                                closeDropdown();
                            }
                        },
                        disable: (typeof disableDeleteMessage === 'boolean'
                            ? disableDeleteMessage
                            : ((_b = (_a = message === null || message === void 0 ? void 0 : message.threadInfo) === null || _a === void 0 ? void 0 : _a.replyCount) !== null && _b !== void 0 ? _b : 0) > 0),
                        dataSbId: 'ui_message_item_menu_delete',
                        text: stringSet.MESSAGE_MENU__DELETE,
                    }))));
            } })));
}

exports.MessageMenu = MessageMenu;
exports.default = MessageMenu;
//# sourceMappingURL=MessageItemMenu.js.map
