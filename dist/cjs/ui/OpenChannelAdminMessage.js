'use strict';

var _tslib = require('../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var ui_Label = require('../chunks/bundle-CAR4EIKs.js');
require('../chunks/bundle-Dio8pG-T.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function OpenChannelAdminMessage(_a) {
    var className = _a.className, message = _a.message;
    return (React__default.default.createElement("div", { className: _tslib.__spreadArray(_tslib.__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            'sendbird-openchannel-admin-message',
        ], false).join(' ') },
        React__default.default.createElement(ui_Label.Label, { className: "sendbird-openchannel-admin-message__text", type: ui_Label.LabelTypography.CAPTION_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, message.message || '')));
}

module.exports = OpenChannelAdminMessage;
//# sourceMappingURL=OpenChannelAdminMessage.js.map
