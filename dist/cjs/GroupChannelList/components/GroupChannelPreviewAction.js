'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-Cy1ruNzs.js');
var ui_ContextMenu = require('../../chunks/bundle-BKyZTqvq.js');
var ui_IconButton = require('../../ui/IconButton.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Modal = require('../../chunks/bundle-DZhkNDpN.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-Bdr7xlea.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('react-dom');
require('../../chunks/bundle-Ck6ikNW6.js');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-C1poxl5k.js');
require('../../withSendbird.js');
require('../../chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('../../chunks/bundle-CAR4EIKs.js');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('../../chunks/bundle-CJM9Pdwg.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var LeaveGroupChannel = function (_a) {
    var channel = _a.channel, onSubmit = _a.onSubmit, onCancel = _a.onCancel;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var logger = config.logger, isOnline = config.isOnline;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    if (channel) {
        return (React__default.default.createElement(ui_Modal.Modal, { disabled: !isOnline, onCancel: onCancel, onSubmit: function () {
                logger.info('LeaveGroupChannel: Leaving channel', channel);
                channel.leave().then(function () {
                    logger.info('LeaveGroupChannel: Leaving channel successful!', channel);
                    onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit();
                });
            }, submitText: stringSet.MODAL__LEAVE_CHANNEL__FOOTER, titleText: stringSet.MODAL__LEAVE_CHANNEL__TITLE }));
    }
};

function GroupChannelPreviewAction(_a) {
    var channel = _a.channel, _b = _a.disabled, disabled = _b === void 0 ? false : _b, onLeaveChannel = _a.onLeaveChannel;
    var parentRef = React.useRef(null);
    var parentContainerRef = React.useRef(null);
    var _c = React.useState(false), showModal = _c[0], setShowModal = _c[1];
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React__default.default.createElement("div", { ref: parentContainerRef, tabIndex: 0, role: "button", style: { display: 'inline-block' }, onKeyDown: function (e) { return e.stopPropagation(); }, onClick: function (e) { return e.stopPropagation(); } },
        React__default.default.createElement(ui_ContextMenu.ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.default.createElement(ui_IconButton, { ref: parentRef, onClick: toggleDropdown, height: "32px", width: "32px" },
                React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.MORE, fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" }))); }, menuItems: function (closeDropdown) { return (React__default.default.createElement(ui_ContextMenu.MenuItems, { parentRef: parentRef, parentContainRef: parentContainerRef, closeDropdown: closeDropdown },
                React__default.default.createElement(ui_ContextMenu.MenuItem$1, { onClick: function () {
                        if (disabled)
                            return;
                        setShowModal(true);
                        closeDropdown();
                    }, testID: "channel_list_item_context_menu_leave_channel" }, stringSet.CHANNEL_SETTING__LEAVE_CHANNEL__TITLE))); } }),
        showModal && (React__default.default.createElement(LeaveGroupChannel, { channel: channel, onSubmit: function () {
                setShowModal(false);
                onLeaveChannel === null || onLeaveChannel === void 0 ? void 0 : onLeaveChannel();
            }, onCancel: function () { return setShowModal(false); } }))));
}

exports.GroupChannelPreviewAction = GroupChannelPreviewAction;
exports.default = GroupChannelPreviewAction;
//# sourceMappingURL=GroupChannelPreviewAction.js.map
