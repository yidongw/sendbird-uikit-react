'use strict';

var React = require('react');
var ui_Label = require('../chunks/bundle-D8-2bEdY.js');
var index = require('../chunks/bundle-e2d_I3io.js');
var LocalizationContext = require('../chunks/bundle-CmBrGegh.js');
require('../chunks/bundle-DRvomNLJ.js');
require('../chunks/bundle-Q9YDOzjz.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-4kwoH67w.js');
require('../chunks/bundle-BCJ8mayg.js');
require('../chunks/bundle-C0tdWwa4.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function UnknownMessageItemBody(_a) {
    var _b;
    var className = _a.className, message = _a.message, _c = _a.isByMe, isByMe = _c === void 0 ? false : _c, _d = _a.mouseHover, mouseHover = _d === void 0 ? false : _d, _e = _a.isReactionEnabled, isReactionEnabled = _e === void 0 ? false : _e;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React__default.default.createElement("div", { className: index.getClassName([
            className !== null && className !== void 0 ? className : '',
            'sendbird-unknown-message-item-body',
            isByMe ? 'outgoing' : 'incoming',
            mouseHover ? 'mouse-hover' : '',
            (isReactionEnabled && ((_b = message === null || message === void 0 ? void 0 : message.reactions) === null || _b === void 0 ? void 0 : _b.length) > 0) ? 'reactions' : '',
        ]) },
        React__default.default.createElement(ui_Label.Label, { className: "sendbird-unknown-message-item-body__header", type: ui_Label.LabelTypography.BODY_1, color: isByMe ? ui_Label.LabelColors.ONCONTENT_1 : ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.UNKNOWN__UNKNOWN_MESSAGE_TYPE),
        React__default.default.createElement(ui_Label.Label, { className: "sendbird-unknown-message-item-body__description", type: ui_Label.LabelTypography.BODY_1, color: isByMe ? ui_Label.LabelColors.ONCONTENT_2 : ui_Label.LabelColors.ONBACKGROUND_2 }, stringSet.UNKNOWN__CANNOT_READ_MESSAGE)));
}

module.exports = UnknownMessageItemBody;
//# sourceMappingURL=UnknownMessageItemBody.js.map
