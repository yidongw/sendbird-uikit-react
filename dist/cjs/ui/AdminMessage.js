'use strict';

var _tslib = require('../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var ui_Label = require('../chunks/bundle-CAR4EIKs.js');
require('../chunks/bundle-Dio8pG-T.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function AdminMessage(_a) {
    var _b;
    var _c = _a.className, className = _c === void 0 ? '' : _c, message = _a.message;
    if (!((message === null || message === void 0 ? void 0 : message.isAdminMessage) || (message === null || message === void 0 ? void 0 : message.messageType)) || !((_b = message === null || message === void 0 ? void 0 : message.isAdminMessage) === null || _b === void 0 ? void 0 : _b.call(message)) || (message === null || message === void 0 ? void 0 : message.messageType) !== 'admin') {
        return null;
    }
    return (React__default.default.createElement("div", { className: _tslib.__spreadArray(_tslib.__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            'sendbird-admin-message',
        ], false).join(' ') },
        React__default.default.createElement(ui_Label.Label, { className: "sendbird-admin-message__text", type: ui_Label.LabelTypography.CAPTION_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, message === null || message === void 0 ? void 0 : message.message)));
}

module.exports = AdminMessage;
//# sourceMappingURL=AdminMessage.js.map
