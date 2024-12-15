'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var ui_Label = require('../chunks/bundle-CAR4EIKs.js');
var MediaQueryContext = require('../chunks/bundle-DrIKAEHN.js');
var ui_TextButton = require('./TextButton.js');
var ui_Icon = require('./Icon.js');
var ui_IconButton = require('./IconButton.js');
var utils = require('../chunks/bundle-Ck6ikNW6.js');
require('../chunks/bundle-Dio8pG-T.js');
require('../chunks/bundle-CLzI6bbe.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var Header = function (_a) {
    var _b;
    var className = _a.className, renderLeft = _a.renderLeft, renderRight = _a.renderRight, renderMiddle = _a.renderMiddle;
    var isMobile = false;
    try {
        isMobile = (_b = MediaQueryContext.useMediaQueryContext === null || MediaQueryContext.useMediaQueryContext === void 0 ? void 0 : MediaQueryContext.useMediaQueryContext()) === null || _b === void 0 ? void 0 : _b.isMobile;
    }
    catch (err) {
        // TODO: handle it
    }
    return (React__default.default.createElement("div", { className: utils.classnames('sendbird-ui-header', className), "data-testid": "sendbird-ui-header" },
        renderLeft ? (React__default.default.createElement("div", { className: utils.classnames('sendbird-ui-header__left', isMobile ? 'sendbird-ui-header--is-mobile' : 'sendbird-ui-header--is-desktop') }, renderLeft === null || renderLeft === void 0 ? void 0 : renderLeft())) : null,
        React__default.default.createElement("div", { className: "sendbird-ui-header__middle" }, renderMiddle === null || renderMiddle === void 0 ? void 0 : renderMiddle()),
        renderRight ? (React__default.default.createElement("div", { className: utils.classnames('sendbird-ui-header__right', isMobile ? 'sendbird-ui-header--is-mobile' : 'sendbird-ui-header--is-desktop') }, renderRight === null || renderRight === void 0 ? void 0 : renderRight())) : null));
};
var Title = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, onClickSubtitle = _a.onClickSubtitle;
    return (React__default.default.createElement("div", { className: "sendbird-ui-header__middle" },
        title && (React__default.default.createElement(ui_Label.Label, { className: "sendbird-ui-header__middle__title", type: ui_Label.LabelTypography.H_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, title)),
        subtitle && (onClickSubtitle ? (React__default.default.createElement(ui_TextButton, { className: "sendbird-ui-header__middle__subtitle__container", onClick: onClickSubtitle, disableUnderline: true },
            React__default.default.createElement(ui_Label.Label, { className: "sendbird-ui-header__middle__subtitle", type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_2 }, subtitle))) : (React__default.default.createElement(ui_Label.Label, { className: "sendbird-ui-header__middle__subtitle", type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_2 }, subtitle)))));
};
var IconButton = function (_a) {
    var className = _a.className, onClick = _a.onClick, type = _a.type, color = _a.color, _b = _a.width, width = _b === void 0 ? '32px' : _b, _c = _a.height, height = _c === void 0 ? '32px' : _c, _d = _a.renderIcon, renderIcon = _d === void 0 ? function (props) { return React__default.default.createElement(Icon, _tslib.__assign({}, props)); } : _d;
    return (React__default.default.createElement(ui_IconButton, { className: className, width: width, height: height, onClick: onClick }, renderIcon({ type: type, color: color })));
};
var Icon = function (_a) {
    var className = _a.className, type = _a.type, color = _a.color, _b = _a.width, width = _b === void 0 ? '22px' : _b, _c = _a.height, height = _c === void 0 ? '22px' : _c, _d = _a.onClick, onClick = _d === void 0 ? utils.noop : _d;
    return (React__default.default.createElement(ui_Icon.default, { className: className, type: type, fillColor: color, width: width, height: height, onClick: function (e) { return onClick === null || onClick === void 0 ? void 0 : onClick(e); } }));
};
var Header$1 = Object.assign(Header, { Title: Title, IconButton: IconButton, Icon: Icon });

exports.Header = Header;
exports.Icon = Icon;
exports.IconButton = IconButton;
exports.Title = Title;
exports.default = Header$1;
//# sourceMappingURL=Header.js.map
