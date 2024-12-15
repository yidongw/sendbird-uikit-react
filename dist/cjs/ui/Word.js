'use strict';

var React = require('react');
var ui_Label = require('../chunks/bundle-D8-2bEdY.js');
var ui_LinkLabel = require('./LinkLabel.js');
var index = require('../chunks/bundle-e2d_I3io.js');
var ui_MentionLabel = require('./MentionLabel.js');
require('../chunks/bundle-DRvomNLJ.js');
require('../chunks/bundle-Q9YDOzjz.js');
require('../chunks/bundle-BYHj6UqH.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-4kwoH67w.js');
require('../chunks/bundle-BCJ8mayg.js');
require('../chunks/bundle-C0tdWwa4.js');
require('../chunks/bundle-BYSQ-mQr.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('./SortByRow.js');
require('../chunks/bundle-lGoyqUWm.js');
require('../withSendbird.js');
require('./IconButton.js');
require('../chunks/bundle-CmBrGegh.js');
require('./UserProfile.js');
require('../chunks/bundle-Bn25Hepq.js');
require('@sendbird/uikit-tools');
require('../chunks/bundle-DfISCDoH.js');
require('../chunks/bundle-CzcmYPsN.js');
require('./Button.js');
require('./Icon.js');
require('css-vars-ponyfill');
require('../chunks/bundle-2M4zbjEc.js');
require('../useSendbirdStateContext.js');
require('../sendbirdSelectors.js');
require('../chunks/bundle-Dcn1Gf-8.js');
require('../chunks/bundle-Dmsb_oex.js');
require('./ImageRenderer.js');
require('../chunks/bundle-BvFqbvri.js');

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
