'use strict';

var React = require('react');
var index = require('./bundle-e2d_I3io.js');
var tokenize = require('./bundle-CZ8XCEGd.js');
var Message_context = require('../Message/context.js');
var ui_MentionLabel = require('../ui/MentionLabel.js');
var ui_LinkLabel = require('../ui/LinkLabel.js');
var ui_Label = require('./bundle-D8-2bEdY.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

// this function is used to generate a unique key for token in message
// it changes with updated time and index
// messageUpdatedAt is the key part of this key generator
function keyGenerator(createdAt, messageUpdatedAt, index) {
    return "sb-msg_".concat(createdAt, "_").concat(messageUpdatedAt, "_").concat(index);
}

function asSafeURL(url) {
    var safeURL = decodeURIComponent(url);
    try {
        var protocol_1 = new URL(safeURL).protocol;
        if (['https:', 'http:'].some(function (it) { return it === protocol_1.toLowerCase(); })) {
            return safeURL;
        }
        else {
            return '#';
        }
    }
    catch (error) {
        if (!safeURL.startsWith('http://') && !safeURL.startsWith('https://')) {
            safeURL = 'https://' + safeURL;
        }
    }
    return safeURL;
}

function TextFragment(_a) {
    var tokens = _a.tokens;
    var messageStore = Message_context.useMessageContext();
    var message = messageStore === null || messageStore === void 0 ? void 0 : messageStore.message;
    var isByMe = messageStore === null || messageStore === void 0 ? void 0 : messageStore.isByMe;
    var updatedAt = message.updatedAt, createdAt = message.createdAt;
    return (React__default.default.createElement(React__default.default.Fragment, null, tokens === null || tokens === void 0 ? void 0 : tokens.map(function (token, idx) {
        var key = keyGenerator(createdAt, updatedAt, idx);
        return index.K(token.type)
            .with(tokenize.TOKEN_TYPES.markdown, function () {
            var markdownToken = token;
            var groups = markdownToken.groups;
            return React__default.default.createElement("span", { className: "sendbird-word", key: key, "data-testid": "sendbird-ui-word" }, index.K(markdownToken.markdownType)
                .with('bold', function () { return (React__default.default.createElement("span", { style: { fontWeight: 'bold' } },
                React__default.default.createElement(TextFragment, { tokens: tokenize.tokenizeMarkdown({ messageText: groups[1] }) }))); })
                .with('url', function () {
                return (React__default.default.createElement("a", { className: isByMe
                        ? 'sendbird-label--color-oncontent-1'
                        : 'sendbird-label--color-onbackground-1', href: asSafeURL(groups[2]) },
                    React__default.default.createElement(TextFragment, { tokens: tokenize.tokenizeMarkdown({ messageText: groups[1] }) })));
            })
                .otherwise(function () { return React__default.default.createElement(React__default.default.Fragment, null); }));
        })
            .with(tokenize.TOKEN_TYPES.mention, function () { return (React__default.default.createElement("span", { className: "sendbird-word", key: key, "data-testid": "sendbird-ui-word" },
            React__default.default.createElement(ui_MentionLabel, { mentionTemplate: tokenize.USER_MENTION_PREFIX, 
                // @ts-ignore
                mentionedUserId: token.userId, mentionedUserNickname: token.value, isByMe: isByMe }))); })
            .with(tokenize.TOKEN_TYPES.url, function () { return (React__default.default.createElement("span", { className: "sendbird-word", key: key, "data-testid": "sendbird-ui-word" },
            React__default.default.createElement(ui_LinkLabel.default, { src: token.value, type: ui_Label.LabelTypography.BODY_1, color: isByMe ? ui_Label.LabelColors.ONCONTENT_1 : ui_Label.LabelColors.ONBACKGROUND_1 }, token.value))); })
            .otherwise(function () { return React__default.default.createElement(React__default.default.Fragment, { key: key }, tokenize.getWhiteSpacePreservedText(token.value)); });
    })));
}

exports.TextFragment = TextFragment;
//# sourceMappingURL=bundle-C9AThBV0.js.map
