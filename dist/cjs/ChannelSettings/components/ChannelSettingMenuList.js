'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var ui_Label = require('../../chunks/bundle-CAR4EIKs.js');
var ui_Icon = require('../../ui/Icon.js');
var utils = require('../../chunks/bundle-BNuA_uqY.js');
var ChannelSettings_components_ChannelSettingsMenuItem = require('./ChannelSettingsMenuItem.js');
var ChannelSettings_context = require('../context.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../chunks/bundle-Ck6ikNW6.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-Cy1ruNzs.js');
require('@sendbird/chat/groupChannel');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-DgjptBQW.js');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-DZhkNDpN.js');
require('../../chunks/bundle-BLoixwYr.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('react-dom');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-Dh0NAI0D.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var MenuListByRole = function (_a) {
    var menuItems = _a.menuItems;
    var channel = ChannelSettings_context.useChannelSettingsContext().channel;
    var menuItemsByRole = utils.isOperator(channel) ? menuItems.operator : menuItems.nonOperator;
    // State to track the open accordion key
    var _b = React.useState(null), openAccordionKey = _b[0], setOpenAccordionKey = _b[1];
    return (React__default.default.createElement("div", { className: "sendbird-channel-settings__operator" }, Object.entries(menuItemsByRole).map(function (_a) {
        var key = _a[0], item = _a[1];
        if (item.hideMenu)
            return null;
        return (React__default.default.createElement(ChannelSettings_components_ChannelSettingsMenuItem.MenuItem, { key: key, onClick: item.onClick, onKeyDown: item.onKeyDown, renderLeft: function () { return React__default.default.createElement(ui_Icon.default, _tslib.__assign({}, item.icon)); }, renderMiddle: function () { return React__default.default.createElement(ui_Label.Label, _tslib.__assign({}, item.label)); }, renderRight: item.rightComponent, renderAccordion: item.accordionComponent, accordionOpened: openAccordionKey === key, setAccordionOpened: function () {
                setOpenAccordionKey(function (prevKey) { return (prevKey === key ? null : key); });
            } }));
    })));
};

exports.MenuListByRole = MenuListByRole;
exports.default = MenuListByRole;
//# sourceMappingURL=ChannelSettingMenuList.js.map
