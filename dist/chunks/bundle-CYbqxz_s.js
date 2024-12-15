import React__default from 'react';
import { K } from './bundle-Bd-i99nk.js';
import { T as TOKEN_TYPES, a as tokenizeMarkdown, U as USER_MENTION_PREFIX, b as getWhiteSpacePreservedText } from './bundle-BvQmfZZv.js';
import { useMessageContext } from '../Message/context.js';
import MentionLabel from '../ui/MentionLabel.js';
import LinkLabel from '../ui/LinkLabel.js';
import { a as LabelTypography, b as LabelColors } from './bundle-Qkp2VIaZ.js';

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
    var messageStore = useMessageContext();
    var message = messageStore === null || messageStore === void 0 ? void 0 : messageStore.message;
    var isByMe = messageStore === null || messageStore === void 0 ? void 0 : messageStore.isByMe;
    var updatedAt = message.updatedAt, createdAt = message.createdAt;
    return (React__default.createElement(React__default.Fragment, null, tokens === null || tokens === void 0 ? void 0 : tokens.map(function (token, idx) {
        var key = keyGenerator(createdAt, updatedAt, idx);
        return K(token.type)
            .with(TOKEN_TYPES.markdown, function () {
            var markdownToken = token;
            var groups = markdownToken.groups;
            return React__default.createElement("span", { className: "sendbird-word", key: key, "data-testid": "sendbird-ui-word" }, K(markdownToken.markdownType)
                .with('bold', function () { return (React__default.createElement("span", { style: { fontWeight: 'bold' } },
                React__default.createElement(TextFragment, { tokens: tokenizeMarkdown({ messageText: groups[1] }) }))); })
                .with('url', function () {
                return (React__default.createElement("a", { className: isByMe
                        ? 'sendbird-label--color-oncontent-1'
                        : 'sendbird-label--color-onbackground-1', href: asSafeURL(groups[2]) },
                    React__default.createElement(TextFragment, { tokens: tokenizeMarkdown({ messageText: groups[1] }) })));
            })
                .otherwise(function () { return React__default.createElement(React__default.Fragment, null); }));
        })
            .with(TOKEN_TYPES.mention, function () { return (React__default.createElement("span", { className: "sendbird-word", key: key, "data-testid": "sendbird-ui-word" },
            React__default.createElement(MentionLabel, { mentionTemplate: USER_MENTION_PREFIX, 
                // @ts-ignore
                mentionedUserId: token.userId, mentionedUserNickname: token.value, isByMe: isByMe }))); })
            .with(TOKEN_TYPES.url, function () { return (React__default.createElement("span", { className: "sendbird-word", key: key, "data-testid": "sendbird-ui-word" },
            React__default.createElement(LinkLabel, { src: token.value, type: LabelTypography.BODY_1, color: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1 }, token.value))); })
            .otherwise(function () { return React__default.createElement(React__default.Fragment, { key: key }, getWhiteSpacePreservedText(token.value)); });
    })));
}

export { TextFragment as T };
//# sourceMappingURL=bundle-CYbqxz_s.js.map
