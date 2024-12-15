import React__default, { useContext } from 'react';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-Qkp2VIaZ.js';
import { y as getClassName } from '../chunks/bundle-Bd-i99nk.js';
import { L as LocalizationContext } from '../chunks/bundle-DhMUg-L7.js';
import '../chunks/bundle-HcNswZ5p.js';
import '../chunks/bundle-dybWaw0v.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-DjLJFwD7.js';
import '../chunks/bundle-DB7YSrIT.js';
import '../chunks/bundle-DQk0aENq.js';

function UnknownMessageItemBody(_a) {
    var _b;
    var className = _a.className, message = _a.message, _c = _a.isByMe, isByMe = _c === void 0 ? false : _c, _d = _a.mouseHover, mouseHover = _d === void 0 ? false : _d, _e = _a.isReactionEnabled, isReactionEnabled = _e === void 0 ? false : _e;
    var stringSet = useContext(LocalizationContext).stringSet;
    return (React__default.createElement("div", { className: getClassName([
            className !== null && className !== void 0 ? className : '',
            'sendbird-unknown-message-item-body',
            isByMe ? 'outgoing' : 'incoming',
            mouseHover ? 'mouse-hover' : '',
            (isReactionEnabled && ((_b = message === null || message === void 0 ? void 0 : message.reactions) === null || _b === void 0 ? void 0 : _b.length) > 0) ? 'reactions' : '',
        ]) },
        React__default.createElement(Label, { className: "sendbird-unknown-message-item-body__header", type: LabelTypography.BODY_1, color: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1 }, stringSet.UNKNOWN__UNKNOWN_MESSAGE_TYPE),
        React__default.createElement(Label, { className: "sendbird-unknown-message-item-body__description", type: LabelTypography.BODY_1, color: isByMe ? LabelColors.ONCONTENT_2 : LabelColors.ONBACKGROUND_2 }, stringSet.UNKNOWN__CANNOT_READ_MESSAGE)));
}

export { UnknownMessageItemBody as default };
//# sourceMappingURL=UnknownMessageItemBody.js.map
