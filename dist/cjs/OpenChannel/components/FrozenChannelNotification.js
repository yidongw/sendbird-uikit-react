'use strict';

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-CmBrGegh.js');
var ui_Label = require('../../chunks/bundle-D8-2bEdY.js');
require('../../chunks/bundle-DRvomNLJ.js');
require('../../chunks/bundle-Q9YDOzjz.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var FrozenNotification = function () {
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React__default.default.createElement("div", { className: "sendbird-frozen-channel-notification" },
        React__default.default.createElement(ui_Label.Label, { className: "sendbird-frozen-channel-notification__text", type: ui_Label.LabelTypography.CAPTION_2 }, stringSet.CHANNEL_FROZEN)));
};

module.exports = FrozenNotification;
//# sourceMappingURL=FrozenChannelNotification.js.map
