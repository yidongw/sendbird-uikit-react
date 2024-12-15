'use strict';

var React = require('react');
var ui_Label = require('../chunks/bundle-CAR4EIKs.js');
var index = require('../chunks/bundle-BLoixwYr.js');
var LocalizationContext = require('../chunks/bundle-Cy1ruNzs.js');
var tokenize = require('../chunks/bundle-BIkitklZ.js');
var index$1 = require('../chunks/bundle-92xEkubH.js');
var consts = require('../chunks/bundle-DobO_BAb.js');
require('../chunks/bundle-Bdr7xlea.js');
require('../chunks/bundle-Dio8pG-T.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-Dr9yFtKa.js');
require('../chunks/bundle-C2CwvM-u.js');
require('../chunks/bundle-BD0wJiNh.js');
require('../Message/context.js');
require('./MentionLabel.js');
require('../chunks/bundle-BKyZTqvq.js');
require('react-dom');
require('../chunks/bundle-Ck6ikNW6.js');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('./SortByRow.js');
require('../chunks/bundle-C1poxl5k.js');
require('../withSendbird.js');
require('./IconButton.js');
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
require('./LinkLabel.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function TextMessageItemBody(_a) {
    var _b;
    var _c = _a.className, className = _c === void 0 ? '' : _c, message = _a.message, _d = _a.isByMe, isByMe = _d === void 0 ? false : _d, _e = _a.mouseHover, mouseHover = _e === void 0 ? false : _e, _f = _a.isMentionEnabled, isMentionEnabled = _f === void 0 ? false : _f, _g = _a.isReactionEnabled, isReactionEnabled = _g === void 0 ? false : _g, _h = _a.isMarkdownEnabled, isMarkdownEnabled = _h === void 0 ? false : _h;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var isMessageMentioned = isMentionEnabled
        && (message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate)
        && message.mentionedMessageTemplate.length > 0
        && (message === null || message === void 0 ? void 0 : message.mentionedUsers)
        && message.mentionedUsers.length > 0;
    var tokens = React.useMemo(function () {
        var _a;
        if (isMessageMentioned) {
            return tokenize.tokenizeMessage({
                mentionedUsers: (_a = message === null || message === void 0 ? void 0 : message.mentionedUsers) !== null && _a !== void 0 ? _a : undefined,
                messageText: message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate,
                includeMarkdown: isMarkdownEnabled,
            });
        }
        return tokenize.tokenizeMessage({
            messageText: message === null || message === void 0 ? void 0 : message.message,
            includeMarkdown: isMarkdownEnabled,
        });
    }, [message === null || message === void 0 ? void 0 : message.updatedAt, message === null || message === void 0 ? void 0 : message.message]);
    return (React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BODY_1, color: isByMe ? ui_Label.LabelColors.ONCONTENT_1 : ui_Label.LabelColors.ONBACKGROUND_1 },
        React__default.default.createElement("div", { className: index.getClassName([
                className,
                consts.TEXT_MESSAGE_BODY_CLASSNAME,
                isByMe ? 'outgoing' : 'incoming',
                mouseHover ? 'mouse-hover' : '',
                (isReactionEnabled && ((_b = message === null || message === void 0 ? void 0 : message.reactions) === null || _b === void 0 ? void 0 : _b.length) > 0) ? 'reactions' : '',
            ]) },
            React__default.default.createElement(index$1.TextFragment, { tokens: tokens }),
            index.isEditedMessage(message) && (React__default.default.createElement(ui_Label.Label, { className: "sendbird-text-message-item-body__message edited", type: ui_Label.LabelTypography.BODY_1, color: isByMe ? ui_Label.LabelColors.ONCONTENT_2 : ui_Label.LabelColors.ONBACKGROUND_2 }, " ".concat(stringSet.MESSAGE_EDITED, " "))))));
}

module.exports = TextMessageItemBody;
//# sourceMappingURL=TextMessageItemBody.js.map
