import { c as __spreadArray } from './bundle-HcNswZ5p.js';

var USER_MENTION_PREFIX = '@';

var TOKEN_TYPES = {
    string: 'string',
    mention: 'mention',
    url: 'url',
    undetermined: 'undetermined',
    markdown: 'markdown',
};

/**
 * /\[(.*?)\]\((.*?)\) is for url.
 * /\*\*(.*?)\*\* for bold.
 */
var MarkdownRegex = /\[(.*?)\]\((.*?)\)|\*\*(.*?)\*\*/g;
function getUserMentionRegex(mentionedUsers, templatePrefix_) {
    var templatePrefix = templatePrefix_ || USER_MENTION_PREFIX;
    return RegExp("(".concat(mentionedUsers.map(function (u) {
        var userId = u.userId.replace(
        // If user.id includes these patterns, need to convert it into an escaped one
        /([.*+?^${}()|[\]\\])/g, '\\$1');
        /**
         * //{ And //} are also for escaping
         * because curly braces `{}` are metacharacters in regular expressions used to specify repetition
         */
        return "".concat(templatePrefix, "\\{").concat(userId, "\\}");
    }).join('|'), ")"), 'g');
}
function identifyMentions(_a) {
    var tokens = _a.tokens, _b = _a.mentionedUsers, mentionedUsers = _b === void 0 ? [] : _b, _c = _a.templatePrefix, templatePrefix = _c === void 0 ? USER_MENTION_PREFIX : _c;
    if (!(mentionedUsers === null || mentionedUsers === void 0 ? void 0 : mentionedUsers.length)) {
        return tokens;
    }
    var userMentionRegex = getUserMentionRegex(mentionedUsers, templatePrefix);
    var results = tokens.map(function (token) {
        // if the token is not undetermined, return it as is
        // is kinda unnecessary with TS, but just in case
        if (token.type !== TOKEN_TYPES.undetermined) {
            return token;
        }
        var value = token.value;
        var parts = value.split(userMentionRegex);
        var tokens = parts.map(function (part) {
            if (part.match(userMentionRegex)) {
                var matchedUser = mentionedUsers.find(function (user) { return "@{".concat(user === null || user === void 0 ? void 0 : user.userId, "}") === part; });
                var nickname = (matchedUser === null || matchedUser === void 0 ? void 0 : matchedUser.nickname) || '(No name)';
                return { value: nickname, type: TOKEN_TYPES.mention, userId: matchedUser === null || matchedUser === void 0 ? void 0 : matchedUser.userId };
            }
            else {
                return { value: part, type: TOKEN_TYPES.undetermined };
            }
        });
        return tokens;
    }).flat();
    return results;
}
function identifyUrlsAndStrings(token) {
    var URL_REG = /(?:https?:\/\/|www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.(xn--)?[a-z]{2,20}\b([-a-zA-Z0-9@:%_+[\],.~#?&/=]*[-a-zA-Z0-9@:%_+~#?&/=])*/g;
    var results = token.map(function (token) {
        if (token.type !== TOKEN_TYPES.undetermined) {
            return token;
        }
        var _a = token.value, value = _a === void 0 ? '' : _a;
        var matches = Array.from(value.matchAll(URL_REG));
        var founds = matches.map(function (value) {
            var _a;
            var text = value[0];
            var start = (_a = value.index) !== null && _a !== void 0 ? _a : 0;
            var end = start + text.length;
            return { text: text, start: start, end: end };
        });
        var items = [{ value: value, type: TOKEN_TYPES.string }];
        var cursor = 0;
        founds.forEach(function (_a) {
            var text = _a.text, start = _a.start, end = _a.end;
            var restText = items.pop().value;
            var head = restText.slice(0, start - cursor);
            var mid = text;
            var tail = restText.slice(end - cursor);
            if (head.length > 0)
                items.push({ value: head, type: TOKEN_TYPES.string });
            items.push({ value: mid, type: TOKEN_TYPES.url });
            if (tail.length > 0)
                items.push({ value: tail, type: TOKEN_TYPES.string });
            cursor = end;
        });
        return items;
    }).flat();
    return results;
}
/**
 * For every string token in the given list of tokens, if the token contains markdowns, the token is split into
 * string tokens and markdown tokens in the original order.
 * Returns a new array tokens.
 * @param tokens
 */
function splitTokensWithMarkdowns(tokens) {
    var prevTokens = tokens;
    var newTokens = [];
    prevTokens.forEach(function (token) {
        if (token.type === TOKEN_TYPES.mention || token.type === TOKEN_TYPES.markdown) {
            newTokens.push(token);
            return;
        }
        var rawStr = token.value;
        // @ts-ignore
        var matches = Array.from(rawStr.matchAll(MarkdownRegex));
        var allMatches = matches.map(function (value) {
            var _a;
            var text = value[0];
            var start = (_a = value.index) !== null && _a !== void 0 ? _a : 0;
            var end = start + text.length;
            return { text: text, start: start, end: end, groups: value.filter(function (val) { return typeof val === 'string'; }) };
        });
        var restText = rawStr;
        var cursor = 0;
        allMatches.forEach(function (_a) {
            var text = _a.text, start = _a.start, end = _a.end, groups = _a.groups;
            var left = {
                type: TOKEN_TYPES.undetermined,
                value: restText.slice(0, start - cursor),
            };
            newTokens.push(left);
            var markdownType;
            if (text.startsWith('[')) {
                markdownType = 'url';
            }
            else if (text.startsWith('**')) {
                markdownType = 'bold';
            }
            var mid = {
                type: TOKEN_TYPES.markdown,
                markdownType: markdownType,
                value: text,
                groups: groups,
            };
            newTokens.push(mid);
            restText = rawStr.slice(end);
            cursor = end;
        });
        if (restText) {
            var right = {
                type: TOKEN_TYPES.undetermined,
                value: restText,
            };
            newTokens.push(right);
        }
    });
    return newTokens;
}
function combineNearbyStrings(tokens) {
    var results = tokens.reduce(function (acc, token) {
        var lastToken = acc[acc.length - 1];
        if ((lastToken === null || lastToken === void 0 ? void 0 : lastToken.type) === TOKEN_TYPES.string && token.type === TOKEN_TYPES.string) {
            lastToken.value = "".concat(lastToken.value).concat(token.value);
            return acc;
        }
        return __spreadArray(__spreadArray([], acc, true), [token], false);
    }, []);
    return results;
}
/**
 * Converts text into set of rich tokens
 */
function tokenizeMessage(_a) {
    var messageText = _a.messageText, _b = _a.mentionedUsers, mentionedUsers = _b === void 0 ? [] : _b, _c = _a.templatePrefix, templatePrefix = _c === void 0 ? USER_MENTION_PREFIX : _c, _d = _a.includeMarkdown, includeMarkdown = _d === void 0 ? false : _d;
    // mention can be squeezed-in(no-space-between) with other mentions and urls
    // if no users are mentioned, return the messageText as a single token
    var partialResult = [{
            type: TOKEN_TYPES.undetermined,
            value: messageText,
        }];
    // order is important because we want to identify mentions first
    // identifyMentions will return a token with type mention or undetermined
    var partialWithMentions = identifyMentions({
        tokens: partialResult,
        mentionedUsers: mentionedUsers,
        templatePrefix: templatePrefix,
    });
    var partialsWithUrlsAndMentions = identifyUrlsAndStrings(includeMarkdown
        ? splitTokensWithMarkdowns(partialWithMentions)
        : partialWithMentions);
    var result = combineNearbyStrings(partialsWithUrlsAndMentions);
    return result;
}
function getChannelPreviewMessage(messageText) {
    var partialResult = [{
            type: TOKEN_TYPES.undetermined,
            value: messageText,
        }];
    var tokens = splitTokensWithMarkdowns(partialResult);
    return markDownTokenResolver(tokens);
}
function markDownTokenResolver(tokens) {
    var result = tokens.map(function (token) {
        if (token.type === TOKEN_TYPES.markdown) {
            return markDownTokenResolver(tokenizeMarkdown({ messageText: token.groups[1] }));
        }
        return token.value;
    });
    return result.join('');
}
function tokenizeMarkdown(_a) {
    var messageText = _a.messageText;
    var partialResult = [{
            type: TOKEN_TYPES.undetermined,
            value: messageText,
        }];
    var result = combineNearbyStrings(splitTokensWithMarkdowns(partialResult));
    return result;
}
/**
 * Don't need to use this util in DOM element since the white spaces will be kept as is,
 * but will need if the text is wrapped \w React.Fragement or </>
 * @link https://sendbird.slack.com/archives/GPGHESTL3/p1681180484341369
 * Or!!! -> convert any space or tab in leading/trailing to nbsp
 * to preserve the leading & trailing white spaces
 */
function getWhiteSpacePreservedText(text) {
    var NON_BREAKING_SPACE = '\u00A0';
    // Split the input string into lines
    var lines = text.split('\n');
    // Process each line and convert leading and trailing white spaces to "\u00A0"
    var processedLines = lines.map(function (line) {
        var _a, _b;
        var leadingWhitespace = ((_a = line.match(/^\s*/)) === null || _a === void 0 ? void 0 : _a[0]) || '';
        var trailingWhitespace = ((_b = line.match(/\s*$/)) === null || _b === void 0 ? void 0 : _b[0]) || '';
        var convertedLeadingWhitespace = leadingWhitespace.replace(/ /g, NON_BREAKING_SPACE);
        var convertedTrailingWhitespace = trailingWhitespace.replace(/ /g, NON_BREAKING_SPACE);
        return convertedLeadingWhitespace + line.trim() + convertedTrailingWhitespace;
    });
    // Combine the processed lines into a new string with "\n"
    var result = processedLines.join('\n');
    return result;
}

export { TOKEN_TYPES as T, USER_MENTION_PREFIX as U, tokenizeMarkdown as a, getWhiteSpacePreservedText as b, getChannelPreviewMessage as g, tokenizeMessage as t };
//# sourceMappingURL=bundle-BvQmfZZv.js.map
