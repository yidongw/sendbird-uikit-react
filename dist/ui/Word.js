import React__default from 'react';
import { a as LabelTypography, b as LabelColors } from '../chunks/bundle-Di0Zwz2X.js';
import LinkLabel from './LinkLabel.js';
import { C as convertWordToStringObj, S as StringObjType } from '../chunks/bundle-BL0uQSu6.js';
import MentionLabel from './MentionLabel.js';
import '../chunks/bundle-Ck-Lg2K3.js';
import '../chunks/bundle-B80WXNZi.js';
import '../chunks/bundle-pQHYhigr.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-fwRBR_Yw.js';
import '../chunks/bundle-CnkNoe49.js';
import '../chunks/bundle-DgxVBBM3.js';
import '../chunks/bundle-A5WEPjt6.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import './SortByRow.js';
import '../chunks/bundle-gMJSD9hQ.js';
import '../withSendbird.js';
import './IconButton.js';
import '../chunks/bundle-CbLNLMef.js';
import './UserProfile.js';
import '../chunks/bundle-C3toIOqd.js';
import '@sendbird/uikit-tools';
import '../chunks/bundle-ptS-tNRF.js';
import '../chunks/bundle-Bk1oUUzJ.js';
import './Button.js';
import './Icon.js';
import 'css-vars-ponyfill';
import '../chunks/bundle-CHD1aKHO.js';
import '../useSendbirdStateContext.js';
import '../sendbirdSelectors.js';
import '../chunks/bundle-YOpvheAB.js';
import '../chunks/bundle-BbICJE5Z.js';
import './ImageRenderer.js';
import '../chunks/bundle-CjhP75at.js';

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
