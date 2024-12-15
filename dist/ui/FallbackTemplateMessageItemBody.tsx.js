import React__default, { useContext } from 'react';
import { L as LocalizationContext } from '../chunks/bundle-DhMUg-L7.js';
import { y as getClassName } from '../chunks/bundle-Bd-i99nk.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-Qkp2VIaZ.js';
import '../chunks/bundle-HcNswZ5p.js';
import '../chunks/bundle-dybWaw0v.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-DjLJFwD7.js';
import '../chunks/bundle-DB7YSrIT.js';
import '../chunks/bundle-DQk0aENq.js';

function FallbackTemplateMessageItemBody(_a) {
    var className = _a.className, message = _a.message, isByMe = _a.isByMe;
    var stringSet = useContext(LocalizationContext).stringSet;
    var text = message['message'];
    return (React__default.createElement("div", { className: getClassName([
            className !== null && className !== void 0 ? className : '',
            isByMe ? 'outgoing' : 'incoming',
            'sendbird-template-message-item-body__fallback_message',
        ]) }, text
        ? React__default.createElement(React__default.Fragment, null,
            React__default.createElement(Label, { type: LabelTypography.BODY_1, color: LabelColors.ONCONTENT_INVERSE_1 }, text))
        : React__default.createElement(React__default.Fragment, null,
            React__default.createElement(Label, { className: 'sendbird-template-message-item-body__fallback_message__header', type: LabelTypography.BODY_1, color: LabelColors.ONCONTENT_INVERSE_1 }, stringSet.UNKNOWN__TEMPLATE_ERROR),
            React__default.createElement(Label, { className: 'sendbird-template-message-item-body__fallback_message__description', type: LabelTypography.BODY_1, color: LabelColors.ONCONTENT_INVERSE_3 }, stringSet.UNKNOWN__CANNOT_READ_TEMPLATE))));
}

export { FallbackTemplateMessageItemBody, FallbackTemplateMessageItemBody as default };
//# sourceMappingURL=FallbackTemplateMessageItemBody.tsx.js.map
