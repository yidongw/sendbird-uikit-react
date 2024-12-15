'use strict';

var React = require('react');
var ui_Icon = require('./Icon.js');
var ui_Label = require('../chunks/bundle-CAR4EIKs.js');
var LocalizationContext = require('../chunks/bundle-Cy1ruNzs.js');
require('../chunks/bundle-Bdr7xlea.js');
require('../chunks/bundle-Ck6ikNW6.js');
require('../chunks/bundle-Dio8pG-T.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function ConnectionStatus() {
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React__default.default.createElement("div", { className: "sendbird-connection-status" },
        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BODY_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, stringSet.TRYING_TO_CONNECT),
        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.DISCONNECTED, fillColor: ui_Icon.IconColors.SENT, width: "14px", height: "14px" })));
}

module.exports = ConnectionStatus;
//# sourceMappingURL=ConnectionStatus.js.map
