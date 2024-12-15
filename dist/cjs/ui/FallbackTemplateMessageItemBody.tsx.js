'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var LocalizationContext = require('../chunks/bundle-CmBrGegh.js');
var index = require('../chunks/bundle-e2d_I3io.js');
var ui_Label = require('../chunks/bundle-D8-2bEdY.js');
require('../chunks/bundle-DRvomNLJ.js');
require('../chunks/bundle-Q9YDOzjz.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-4kwoH67w.js');
require('../chunks/bundle-BCJ8mayg.js');
require('../chunks/bundle-C0tdWwa4.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function FallbackTemplateMessageItemBody(_a) {
    var className = _a.className, message = _a.message, isByMe = _a.isByMe;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var text = message['message'];
    return (React__default.default.createElement("div", { className: index.getClassName([
            className !== null && className !== void 0 ? className : '',
            isByMe ? 'outgoing' : 'incoming',
            'sendbird-template-message-item-body__fallback_message',
        ]) }, text
        ? React__default.default.createElement(React__default.default.Fragment, null,
            React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONCONTENT_INVERSE_1 }, text))
        : React__default.default.createElement(React__default.default.Fragment, null,
            React__default.default.createElement(ui_Label.Label, { className: 'sendbird-template-message-item-body__fallback_message__header', type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONCONTENT_INVERSE_1 }, stringSet.UNKNOWN__TEMPLATE_ERROR),
            React__default.default.createElement(ui_Label.Label, { className: 'sendbird-template-message-item-body__fallback_message__description', type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONCONTENT_INVERSE_3 }, stringSet.UNKNOWN__CANNOT_READ_TEMPLATE))));
}

exports.FallbackTemplateMessageItemBody = FallbackTemplateMessageItemBody;
exports.default = FallbackTemplateMessageItemBody;
//# sourceMappingURL=FallbackTemplateMessageItemBody.tsx.js.map
