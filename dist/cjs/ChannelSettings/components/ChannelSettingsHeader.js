'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-CmBrGegh.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Header = require('../../ui/Header.js');
require('../../chunks/bundle-DRvomNLJ.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../withSendbird.js');
require('../../chunks/bundle-BYHj6UqH.js');
require('../../chunks/bundle-D8-2bEdY.js');
require('../../chunks/bundle-CzcmYPsN.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-LSLwWEwG.js');
require('../../ui/IconButton.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var ChannelSettingsHeader = function (_a) {
    var onCloseClick = _a.onCloseClick, 
    // Header custom props
    renderLeft = _a.renderLeft, renderMiddle = _a.renderMiddle, renderRight = _a.renderRight;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var logger = config.logger;
    return (React__default.default.createElement(ui_Header.default, { className: "sendbird-channel-settings__header", renderLeft: renderLeft, renderMiddle: renderMiddle !== null && renderMiddle !== void 0 ? renderMiddle : (function () { return (React__default.default.createElement(ui_Header.default.Title, { title: stringSet.CHANNEL_SETTING__HEADER__TITLE })); }), renderRight: renderRight !== null && renderRight !== void 0 ? renderRight : (function () { return (React__default.default.createElement("div", { className: "sendbird-channel-settings__header-icon" },
            React__default.default.createElement(ui_Header.default.IconButton, { type: ui_Icon.IconTypes.CLOSE, onClick: function (e) {
                    logger.info('ChannelSettings: Click close');
                    onCloseClick(e);
                } }))); }) }));
};

exports.ChannelSettingsHeader = ChannelSettingsHeader;
exports.default = ChannelSettingsHeader;
//# sourceMappingURL=ChannelSettingsHeader.js.map
