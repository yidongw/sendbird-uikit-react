'use strict';

var React = require('react');
var DOMPurify = require('dompurify');
var _const = require('./bundle-CsHnjhet.js');
var _const$1 = require('./bundle-CxDaflMi.js');
var _tslib = require('./bundle-DRvomNLJ.js');
var consts = require('./bundle-DhOkJsb_.js');
var consts$2 = require('./bundle-BHlqknCd.js');
var consts$1 = require('./bundle-tu3X3qzD.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var DOMPurify__default = /*#__PURE__*/_interopDefaultCompat(DOMPurify);

function renderToString(_a) {
    var userId = _a.userId, nickname = _a.nickname;
    // donot change this template, it wont work
    var el = "<span data-userid=\"".concat(userId, "\" data-sb-mention=\"true\" class=\"").concat(consts.MENTION_USER_LABEL_CLASSNAME, "\">").concat(nickname, "</span>");
    var purifier = DOMPurify__default.default(window);
    var sanitized_ = purifier.sanitize(el);
    var token = sanitized_.split(' ');
    var spanTag = token[0], rest = token.slice(1);
    // we do this because DOMPurify removes the contenteditable attribute
    var sanitized = _tslib.__spreadArray([spanTag, 'contenteditable="false"'], rest, true).join(' ');
    return sanitized;
}

/**
 * - Converts `<` and `>` characters to their HTML entities (`&#60;` and `&#62;`).
 * - All other characters (including special symbols, emojis, and non-English text) remain unchanged.
 */
var sanitizeString = function (str) {
    if (str === void 0) { str = ''; }
    if (!str)
        return '';
    return str.replace(/[<>]/g, function (char) { return (char === '<' ? '&#60;' : '&#62;'); });
};
/**
 * NodeList cannot be used with Array methods
 * @param {NodeListOf<ChildNode>} childNodes
 * @returns Array of child nodes
 */
var nodeListToArray = function (childNodes) {
    return childNodes ? Array.from(childNodes) : [];
};
function isChannelTypeSupportsMultipleFilesMessage(channel) {
    var _a;
    return channel && ((_a = channel.isGroupChannel) === null || _a === void 0 ? void 0 : _a.call(channel)) && !channel.isBroadcast && !channel.isSuper;
}
// Type guard: This function ensures that the node contains `innerText` and `dataset` properties
function isHTMLElement(node) {
    return node.nodeType === _const.NodeTypes.ElementNode;
}
// eslint-disable-next-line no-undef
function extractTextAndMentions(childNodes) {
    var messageText = '';
    var mentionTemplate = '';
    childNodes.forEach(function (node) {
        if (isHTMLElement(node) && node.nodeName === _const.NodeNames.Span) {
            var innerText = node.innerText, _a = node.dataset, dataset = _a === void 0 ? {} : _a;
            var _b = dataset.userid, userid = _b === void 0 ? '' : _b;
            messageText += innerText;
            mentionTemplate += "".concat(_const$1.USER_MENTION_TEMP_CHAR, "{").concat(userid, "}");
        }
        else if (isHTMLElement(node) && node.nodeName === _const.NodeNames.Br) {
            messageText += '\n';
            mentionTemplate += '\n';
        }
        else if (isHTMLElement(node) && node.nodeName === _const.NodeNames.Div) {
            var _c = node.textContent, textContent = _c === void 0 ? '' : _c;
            messageText += "\n".concat(textContent);
            mentionTemplate += "\n".concat(textContent);
        }
        else {
            var _d = node.textContent, textContent = _d === void 0 ? '' : _d;
            messageText += textContent;
            mentionTemplate += textContent;
        }
    });
    return { messageText: messageText, mentionTemplate: mentionTemplate };
}

function insertTemplateToDOM(templateList) {
    var nodes = templateList.map(function (template) {
        var text = template.text, userId = template.userId;
        if (userId) {
            return renderToString({ userId: userId, nickname: text });
        }
        return sanitizeString(text);
    })
        .join(' ')
        // add a space at the end of the mention, else cursor/caret wont work
        .concat(' ');
    document.execCommand('insertHTML', false, nodes);
}

var TEXT_MESSAGE_CLASS = 'sendbird-word';
var MENTION_CLASS = 'sendbird-word__mention';
var MENTION_CLASS_IN_INPUT = 'sendbird-mention-user-label';
var MENTION_CLASS_COMBINED_QUERY = ".".concat(MENTION_CLASS, ", .").concat(MENTION_CLASS_IN_INPUT);

function querySelectorIncludingSelf(master, selector) {
    var result = _tslib.__spreadArray([
        master
    ], Array.from(master.querySelectorAll(selector)), true).find(function (el) { return el.matches(selector); });
    return result;
}
// Pasted dom node can be OG_MESSAGE or partial message or full message
// full messsage would have TEXT_MESSAGE_BODY_CLASSNAME and have childNodes
// partial message would not have TEXT_MESSAGE_BODY_CLASSNAME
function getLeafNodes(master) {
    // og message
    var ogMessage = querySelectorIncludingSelf(master, ".".concat(consts$1.OG_MESSAGE_BODY_CLASSNAME));
    if (ogMessage) {
        return nodeListToArray(ogMessage.childNodes);
    }
    var textMessageBody = querySelectorIncludingSelf(master, ".".concat(consts$2.TEXT_MESSAGE_BODY_CLASSNAME));
    if (textMessageBody) {
        return nodeListToArray(textMessageBody.childNodes);
    }
    return nodeListToArray(master.childNodes);
}
function hasMention(parent) {
    return (parent === null || parent === void 0 ? void 0 : parent.querySelector(MENTION_CLASS_COMBINED_QUERY)) ? true : false;
}
var extractTextFromNodes = function (nodes) {
    var text = '';
    nodes.forEach(function (node) {
        // to preserve space between words
        var textNodes = node.querySelectorAll(".".concat(TEXT_MESSAGE_CLASS));
        if (textNodes.length > 0) {
            text += ((extractTextFromNodes(Array.from(textNodes))) + ' ');
        }
        text += (node.innerText + ' ');
    });
    return text;
};
function domToMessageTemplate(nodeArray) {
    var templates = nodeArray === null || nodeArray === void 0 ? void 0 : nodeArray.reduce(function (accumulator, currentValue) {
        var _a, _b;
        // currentValue can be node(from messageBody or messageInput) or text
        var mentionNode;
        // this looks awkward, but it is a fallback to set default text
        var text = currentValue === null || currentValue === void 0 ? void 0 : currentValue.innerText;
        // if text node, set text
        if (currentValue instanceof Text) {
            mentionNode = false;
            text = (_a = currentValue.textContent) !== null && _a !== void 0 ? _a : '';
        }
        if (currentValue instanceof HTMLElement) {
            mentionNode = (currentValue.classList.contains(MENTION_CLASS) || currentValue.classList.contains(MENTION_CLASS_IN_INPUT))
                ? currentValue
                : currentValue.querySelector(MENTION_CLASS_COMBINED_QUERY);
        }
        // if mentionNode is not null, it is a mention
        if (mentionNode) {
            var text_1 = currentValue === null || currentValue === void 0 ? void 0 : currentValue.innerText;
            var userId = (_b = mentionNode.dataset) === null || _b === void 0 ? void 0 : _b.userid;
            return _tslib.__spreadArray(_tslib.__spreadArray([], accumulator, true), [
                {
                    text: text_1,
                    userId: userId,
                },
            ], false);
        }
        return _tslib.__spreadArray(_tslib.__spreadArray([], accumulator, true), [
            {
                text: text,
            },
        ], false);
    }, []);
    return templates;
}
function getUsersFromWords(templates, channel) {
    var userMap = {};
    var users = channel.members;
    templates.forEach(function (template) {
        if (template.userId) {
            var mentionedMember = users.find(function (user) { return user.userId === template.userId; });
            // Object.values would return array-> [undefined] if the user is not in the channel
            if (mentionedMember) {
                userMap[template.userId] = mentionedMember;
            }
        }
    });
    return Object.values(userMap);
}

function pasteContentAtCaret(content) {
    var selection = window.getSelection(); // Get the current selection
    if (selection && selection.rangeCount > 0) {
        var range = selection.getRangeAt(selection.rangeCount - 1); // Get the last range
        range.deleteContents(); // Clear any existing content
        // Create a new text node with the content and a Zero-width space
        var textNode = document.createTextNode(content + '\u200B');
        range.insertNode(textNode); // Insert the new text node at the caret position
        // Move the caret to the end of the inserted content
        range.setStart(textNode, textNode.length);
        range.collapse(true); // Collapse the range (no text selection)
        // Reset the selection with the updated range
        selection.removeAllRanges();
        selection.addRange(range); // Apply the updated selection
    }
}
function createPasteNodeWithContent(html) {
    var pasteNode = document.createElement('div');
    pasteNode.innerHTML = html;
    return pasteNode;
}
// usePaste Hook
function usePaste(_a) {
    var ref = _a.ref, setIsInput = _a.setIsInput, channel = _a.channel, setMentionedUsers = _a.setMentionedUsers;
    return React.useCallback(function (e) {
        e.preventDefault();
        var html = e.clipboardData.getData('text/html');
        var text = e.clipboardData.getData('text') || getURIListText(e);
        // 1. Simple text paste: no HTML present
        if (!html) {
            pasteContentAtCaret(sanitizeString(text));
            setIsInput(true);
            return;
        }
        // 2. HTML paste: process mentions and sanitized content
        var purifier = DOMPurify__default.default(window);
        var cleanHtml = purifier.sanitize(html);
        var pasteNode = createPasteNodeWithContent(cleanHtml);
        if (!hasMention(pasteNode)) {
            // No mention, paste as plain text
            var extractedText = extractTextFromNodes(Array.from(pasteNode.children));
            pasteContentAtCaret(sanitizeString(extractedText));
            pasteNode.remove();
            setIsInput(true);
            return;
        }
        // 3. Mentions present: process mentions and update state
        var leafNodes = getLeafNodes(pasteNode);
        var words = domToMessageTemplate(leafNodes);
        var mentionedUsers = channel.isGroupChannel() ? getUsersFromWords(words, channel) : [];
        setMentionedUsers(mentionedUsers); // Update mentioned users state
        insertTemplateToDOM(words); // Insert mentions and content into the DOM
        pasteNode.remove();
        setIsInput(true);
    }, [ref, setIsInput, channel, setMentionedUsers]);
}
// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#dragging_links
function getURIListText(e) {
    var pasteData = e.clipboardData.getData('text/uri-list');
    if (pasteData.length === 0)
        return '';
    return pasteData
        .split('\n')
        .reduce(function (accumulator, line) {
        var txt = line.trim();
        if (txt !== '' && !txt.startsWith('#')) {
            accumulator += txt + '\n';
        }
        return accumulator;
    }, '');
}

exports.extractTextAndMentions = extractTextAndMentions;
exports.isChannelTypeSupportsMultipleFilesMessage = isChannelTypeSupportsMultipleFilesMessage;
exports.nodeListToArray = nodeListToArray;
exports.renderToString = renderToString;
exports.sanitizeString = sanitizeString;
exports.usePaste = usePaste;
//# sourceMappingURL=bundle-C9DxbvFZ.js.map
