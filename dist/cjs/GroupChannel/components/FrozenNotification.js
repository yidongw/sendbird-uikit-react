'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-CmBrGegh.js');
var ui_Label = require('../../chunks/bundle-D8-2bEdY.js');
var utils = require('../../chunks/bundle-BYHj6UqH.js');
require('../../chunks/bundle-DRvomNLJ.js');
require('../../chunks/bundle-Q9YDOzjz.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var FrozenNotification = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React__default.default.createElement("div", { className: utils.classnames('sendbird-notification', 'sendbird-notification--frozen', className), "data-testid": "sendbird-notification" },
        React__default.default.createElement(ui_Label.Label, { className: "sendbird-notification__text", testID: "sendbird-notification__text", type: ui_Label.LabelTypography.CAPTION_2 }, stringSet.CHANNEL_FROZEN)));
};

exports.FrozenNotification = FrozenNotification;
exports.default = FrozenNotification;
//# sourceMappingURL=FrozenNotification.js.map
