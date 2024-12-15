'use strict';

var React = require('react');
var ui_Label = require('../chunks/bundle-CAR4EIKs.js');
var ui_LinkLabel = require('./LinkLabel.js');
var index = require('../chunks/bundle-BLoixwYr.js');
var ui_MentionLabel = require('./MentionLabel.js');
require('../chunks/bundle-Bdr7xlea.js');
require('../chunks/bundle-Dio8pG-T.js');
require('../chunks/bundle-Ck6ikNW6.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-Dr9yFtKa.js');
require('../chunks/bundle-C2CwvM-u.js');
require('../chunks/bundle-BD0wJiNh.js');
require('../chunks/bundle-BKyZTqvq.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('./SortByRow.js');
require('../chunks/bundle-C1poxl5k.js');
require('../withSendbird.js');
require('./IconButton.js');
require('../chunks/bundle-Cy1ruNzs.js');
require('./UserProfile.js');
require('../chunks/bundle-DgjptBQW.js');
require('@sendbird/uikit-tools');
require('../chunks/bundle-DZhkNDpN.js');
require('../chunks/bundle-DrIKAEHN.js');
require('./Button.js');
require('./Icon.js');
require('css-vars-ponyfill');
require('../chunks/bundle-CJM9Pdwg.js');
require('../useSendbirdStateContext.js');
require('../sendbirdSelectors.js');
require('../chunks/bundle-C6Q6BfQY.js');
require('../chunks/bundle-C8wv9DWs.js');
require('./ImageRenderer.js');
require('../chunks/bundle-B4PTJ_bJ.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

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
    return (React__default.default.createElement("span", { className: "sendbird-word", "data-testid": "sendbird-ui-word" }, (message === null || message === void 0 ? void 0 : message.mentionedUsers) && index.convertWordToStringObj(word, message.mentionedUsers).map(function (stringObj, index$1) {
        var type = (stringObj === null || stringObj === void 0 ? void 0 : stringObj.type) || '';
        var value = (stringObj === null || stringObj === void 0 ? void 0 : stringObj.value) || '';
        var userId = (stringObj === null || stringObj === void 0 ? void 0 : stringObj.userId) || '';
        var key = "".concat(value, "-").concat(index$1);
        if (renderString && typeof renderString === 'function') {
            return renderString(stringObj);
        }
        if (type === index.StringObjType.mention) {
            return (React__default.default.createElement(ui_MentionLabel, { key: key, mentionTemplate: mentionTemplate, mentionedUserId: userId, mentionedUserNickname: value, isByMe: isByMe }));
        }
        else if (type === index.StringObjType.url) {
            return (React__default.default.createElement(ui_LinkLabel.default, { key: key, className: "sendbird-word__url", src: word, type: ui_Label.LabelTypography.BODY_1, color: isByMe ? ui_Label.LabelColors.ONCONTENT_1 : ui_Label.LabelColors.ONBACKGROUND_1 }, value));
        }
        else {
            return value;
        }
    })));
}

module.exports = Word;
//# sourceMappingURL=Word.js.map
