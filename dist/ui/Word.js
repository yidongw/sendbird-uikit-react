import React__default from 'react';
import { a as LabelTypography, b as LabelColors } from '../chunks/bundle-Qkp2VIaZ.js';
import LinkLabel from './LinkLabel.js';
import { C as convertWordToStringObj, S as StringObjType } from '../chunks/bundle-Bd-i99nk.js';
import MentionLabel from './MentionLabel.js';
import '../chunks/bundle-HcNswZ5p.js';
import '../chunks/bundle-dybWaw0v.js';
import '../chunks/bundle-0WaCg6X7.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-DjLJFwD7.js';
import '../chunks/bundle-DB7YSrIT.js';
import '../chunks/bundle-DQk0aENq.js';
import '../chunks/bundle-BKzcG-aC.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import './SortByRow.js';
import '../chunks/bundle-C5iY_IvV.js';
import '../withSendbird.js';
import './IconButton.js';
import '../chunks/bundle-DhMUg-L7.js';
import './UserProfile.js';
import '../chunks/bundle-B91Bhfde.js';
import '@sendbird/uikit-tools';
import '../chunks/bundle-ja8H3E0K.js';
import '../chunks/bundle-DnSobLtx.js';
import './Button.js';
import './Icon.js';
import 'css-vars-ponyfill';
import '../chunks/bundle-zy1mnw8U.js';
import '../useSendbirdStateContext.js';
import '../sendbirdSelectors.js';
import '../chunks/bundle-BwmZGijR.js';
import '../chunks/bundle-2pbuHA3C.js';
import './ImageRenderer.js';
import '../chunks/bundle-DkDQ1PWY.js';

/**
 * @deprecated  This component is deprecated and will be removed in the next major version.
 * Use TextFragment instead.
 */
// Word and StringObj will include types: normal, mention, url
function Word(props) {
    var word = props.word, message = props.message, _a = props.isByMe, isByMe = _a === void 0 ? false : _a, _b = props.mentionTemplate, mentionTemplate = _b === void 0 ? '@' : _b, _c = props.renderString, renderString = _c === void 0 ? null : _c;
    if (word === '') {
        return null;
    }
    return (React__default.createElement("span", { className: "sendbird-word", "data-testid": "sendbird-ui-word" }, (message === null || message === void 0 ? void 0 : message.mentionedUsers) && convertWordToStringObj(word, message.mentionedUsers).map(function (stringObj, index) {
        var type = (stringObj === null || stringObj === void 0 ? void 0 : stringObj.type) || '';
        var value = (stringObj === null || stringObj === void 0 ? void 0 : stringObj.value) || '';
        var userId = (stringObj === null || stringObj === void 0 ? void 0 : stringObj.userId) || '';
        var key = "".concat(value, "-").concat(index);
        if (renderString && typeof renderString === 'function') {
            return renderString(stringObj);
        }
        if (type === StringObjType.mention) {
            return (React__default.createElement(MentionLabel, { key: key, mentionTemplate: mentionTemplate, mentionedUserId: userId, mentionedUserNickname: value, isByMe: isByMe }));
        }
        else if (type === StringObjType.url) {
            return (React__default.createElement(LinkLabel, { key: key, className: "sendbird-word__url", src: word, type: LabelTypography.BODY_1, color: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1 }, value));
        }
        else {
            return value;
        }
    })));
}

export { Word as default };
//# sourceMappingURL=Word.js.map
