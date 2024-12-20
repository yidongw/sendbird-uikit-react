'use strict';

var _tslib = require('../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var _const$1 = require('../chunks/bundle-CsHnjhet.js');
var _const = require('../chunks/bundle-CxDaflMi.js');
var ui_IconButton = require('./IconButton.js');
var ui_Button = require('./Button.js');
var ui_MessageInput_hooks_usePaste = require('../chunks/bundle-C9DxbvFZ.js');
var ui_Icon = require('./Icon.js');
var ui_Label = require('../chunks/bundle-D8-2bEdY.js');
var LocalizationContext = require('../chunks/bundle-CmBrGegh.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var index = require('../chunks/bundle-e2d_I3io.js');
var tokenize = require('../chunks/bundle-CZ8XCEGd.js');
var utils = require('../chunks/bundle-BYHj6UqH.js');
var browser = require('../chunks/bundle-4kwoH67w.js');
require('dompurify');
require('../chunks/bundle-DhOkJsb_.js');
require('../chunks/bundle-BHlqknCd.js');
require('../chunks/bundle-tu3X3qzD.js');
require('../chunks/bundle-Q9YDOzjz.js');
require('../withSendbird.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-BCJ8mayg.js');
require('../chunks/bundle-C0tdWwa4.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

/**
 * FIXME:
 * Import this ChannelType enum from @sendbird/chat
 * once MessageInput.spec unit tests can be run \wo jest <-> ESM issue
 */
var ChannelType;
(function (ChannelType) {
    ChannelType["BASE"] = "base";
    ChannelType["GROUP"] = "group";
    ChannelType["OPEN"] = "open";
})(ChannelType || (ChannelType = {}));
/**
 * FIXME: Simplify this in UIKit@v4
 * If customer is using MessageInput inside our modules(ie: Channel, Thread, etc),
 * we should use the config from the module.
 * If customer is using MessageInput outside our modules(ie: custom UI),
 * we expect Channel to be undefined and customer gets control to show/hide file-upload.
 * @param {*} channel GroupChannel | OpenChannel
 * @param {*} config SendBirdStateConfig
 * @returns boolean
 */
var checkIfFileUploadEnabled = function (_a) {
    var channel = _a.channel, config = _a.config;
    var isEnabled = index.K(channel === null || channel === void 0 ? void 0 : channel.channelType)
        .with(ChannelType.GROUP, function () { var _a; return (_a = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _a === void 0 ? void 0 : _a.enableDocument; })
        .with(ChannelType.OPEN, function () { var _a; return (_a = config === null || config === void 0 ? void 0 : config.openChannel) === null || _a === void 0 ? void 0 : _a.enableDocument; })
        .otherwise(function () { return true; });
    return isEnabled;
};

var TEXT_FIELD_ID = 'sendbird-message-input-text-field';
var noop = function () {
    return null;
};
var resetInput = function (ref) {
    if (ref && ref.current) {
        ref.current.innerHTML = '';
    }
};
var initialTargetStringInfo = {
    targetString: '',
    startNodeIndex: null,
    startOffsetIndex: null,
    endNodeIndex: null,
    endOffsetIndex: null,
};
var MessageInput = React__default.default.forwardRef(function (props, externalRef) {
    var _a, _b, _c, _d, _e;
    var channel = props.channel, _f = props.className, className = _f === void 0 ? '' : _f, _g = props.messageFieldId, messageFieldId = _g === void 0 ? '' : _g, _h = props.isEdit, isEdit = _h === void 0 ? false : _h, _j = props.isMobile, isMobile = _j === void 0 ? false : _j, _k = props.isMentionEnabled, isMentionEnabled = _k === void 0 ? false : _k, _l = props.isVoiceMessageEnabled, isVoiceMessageEnabled = _l === void 0 ? true : _l, _m = props.isSelectingMultipleFilesEnabled, isSelectingMultipleFilesEnabled = _m === void 0 ? false : _m, _o = props.disabled, disabled = _o === void 0 ? false : _o, _p = props.message, message = _p === void 0 ? null : _p, _q = props.placeholder, placeholder = _q === void 0 ? '' : _q, _r = props.maxLength, maxLength = _r === void 0 ? 5000 : _r, _s = props.onFileUpload, onFileUpload = _s === void 0 ? noop : _s, _t = props.onSendMessage, onSendMessage = _t === void 0 ? noop : _t, _u = props.onUpdateMessage, onUpdateMessage = _u === void 0 ? noop : _u, _v = props.onCancelEdit, onCancelEdit = _v === void 0 ? noop : _v, _w = props.onStartTyping, onStartTyping = _w === void 0 ? noop : _w, _x = props.channelUrl, channelUrl = _x === void 0 ? '' : _x, _y = props.mentionSelectedUser, mentionSelectedUser = _y === void 0 ? null : _y, _z = props.onUserMentioned, onUserMentioned = _z === void 0 ? noop : _z, _0 = props.onMentionStringChange, onMentionStringChange = _0 === void 0 ? noop : _0, _1 = props.onMentionedUserIdsUpdated, onMentionedUserIdsUpdated = _1 === void 0 ? noop : _1, _2 = props.onVoiceMessageIconClick, onVoiceMessageIconClick = _2 === void 0 ? noop : _2, _3 = props.onKeyUp, onKeyUp = _3 === void 0 ? noop : _3, _4 = props.onKeyDown, onKeyDown = _4 === void 0 ? noop : _4, _5 = props.renderFileUploadIcon, renderFileUploadIcon = _5 === void 0 ? noop : _5, _6 = props.renderVoiceMessageIcon, renderVoiceMessageIcon = _6 === void 0 ? noop : _6, _7 = props.renderSendMessageIcon, renderSendMessageIcon = _7 === void 0 ? noop : _7, _8 = props.setMentionedUsers, setMentionedUsers = _8 === void 0 ? noop : _8, acceptableMimeTypes = props.acceptableMimeTypes;
    var internalRef = (externalRef && 'current' in externalRef) ? externalRef : React.useRef(null);
    var ghostInputRef = React.useRef(null);
    var textFieldId = messageFieldId || TEXT_FIELD_ID;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _9 = useSendbirdStateContext.useSendbirdStateContext(), config = _9.config, eventHandlers = _9.eventHandlers;
    var isFileUploadEnabled = checkIfFileUploadEnabled({
        channel: channel,
        config: config,
    });
    var fileInputRef = React.useRef();
    var _10 = React.useState(false), isInput = _10[0], setIsInput = _10[1];
    var _11 = React.useState([]), mentionedUserIds = _11[0], setMentionedUserIds = _11[1];
    var _12 = React.useState(_tslib.__assign({}, initialTargetStringInfo)), targetStringInfo = _12[0], setTargetStringInfo = _12[1];
    // #Edit mode
    // for easily initialize input value from outside, but
    // useEffect(_, [channelUrl]) erase it
    var initialValue = props === null || props === void 0 ? void 0 : props.value;
    React.useEffect(function () {
        var textField = internalRef === null || internalRef === void 0 ? void 0 : internalRef.current;
        setMentionedUserIds([]);
        setIsInput((textField === null || textField === void 0 ? void 0 : textField.textContent) ? textField.textContent.trim().length > 0 : false);
    }, [initialValue]);
    // #Mention | Clear input value when channel changes
    React.useEffect(function () {
        if (!isEdit) {
            setIsInput(false);
            resetInput(internalRef);
        }
    }, [channelUrl]);
    // #Mention & #Edit | Fill message input values
    React.useEffect(function () {
        var _a, _b;
        if (isEdit && (message === null || message === void 0 ? void 0 : message.messageId)) {
            // const textField = document.getElementById(textFieldId);
            var textField = internalRef === null || internalRef === void 0 ? void 0 : internalRef.current;
            if (isMentionEnabled
                && (message === null || message === void 0 ? void 0 : message.mentionedUsers)
                && message.mentionedUsers.length > 0
                && (message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate)
                && message.mentionedMessageTemplate.length > 0) {
                /* mention enabled */
                var _c = message.mentionedUsers, mentionedUsers_1 = _c === void 0 ? [] : _c;
                var tokens = tokenize.tokenizeMessage({
                    messageText: message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate,
                    mentionedUsers: mentionedUsers_1,
                    includeMarkdown: channel.isGroupChannel() && config.groupChannel.enableMarkdownForUserMessage,
                });
                if (textField) {
                    textField.innerHTML = tokens
                        .map(function (token) {
                        if (token.type === tokenize.TOKEN_TYPES.mention) {
                            var mentionedUser = mentionedUsers_1.find(function (user) { return user.userId === token.userId; });
                            var nickname = "".concat(tokenize.USER_MENTION_PREFIX).concat((mentionedUser === null || mentionedUser === void 0 ? void 0 : mentionedUser.nickname) || token.value || stringSet.MENTION_NAME__NO_NAME);
                            return ui_MessageInput_hooks_usePaste.renderToString({
                                userId: token.userId,
                                nickname: nickname,
                            });
                        }
                        return ui_MessageInput_hooks_usePaste.sanitizeString(token.value);
                    })
                        .join('');
                }
            }
            else {
                /* mention disabled */
                try {
                    if (textField) {
                        textField.innerHTML = (_a = ui_MessageInput_hooks_usePaste.sanitizeString(message === null || message === void 0 ? void 0 : message.message)) !== null && _a !== void 0 ? _a : '';
                    }
                }
                catch (_d) {
                    //
                }
                setMentionedUserIds([]);
            }
            setIsInput((textField === null || textField === void 0 ? void 0 : textField.textContent) ? ((_b = textField === null || textField === void 0 ? void 0 : textField.textContent) === null || _b === void 0 ? void 0 : _b.trim().length) > 0 : false);
        }
    }, [isEdit, message]);
    // #Mention | Detect MentionedLabel modified
    var useMentionedLabelDetection = React.useCallback(function () {
        var _a;
        var textField = internalRef === null || internalRef === void 0 ? void 0 : internalRef.current;
        if (isMentionEnabled && textField) {
            var newMentionedUserIds = Array.from(textField.getElementsByClassName('sendbird-mention-user-label')).map(
            // @ts-ignore
            function (node) { var _a; return (_a = node === null || node === void 0 ? void 0 : node.dataset) === null || _a === void 0 ? void 0 : _a.userid; });
            if (!index.arrayEqual(mentionedUserIds, newMentionedUserIds) || newMentionedUserIds.length === 0) {
                onMentionedUserIdsUpdated(newMentionedUserIds);
                setMentionedUserIds(newMentionedUserIds);
            }
        }
        setIsInput((textField === null || textField === void 0 ? void 0 : textField.textContent) ? ((_a = textField.textContent) === null || _a === void 0 ? void 0 : _a.trim().length) > 0 : false);
    }, [targetStringInfo, isMentionEnabled]);
    // #Mention | Replace selected user nickname to the MentionedUserLabel
    React.useEffect(function () {
        var _a, _b, _c, _d;
        if (isMentionEnabled && mentionSelectedUser) {
            var targetString = targetStringInfo.targetString, startNodeIndex = targetStringInfo.startNodeIndex, startOffsetIndex = targetStringInfo.startOffsetIndex, endNodeIndex = targetStringInfo.endNodeIndex, endOffsetIndex = targetStringInfo.endOffsetIndex;
            var textField_1 = internalRef === null || internalRef === void 0 ? void 0 : internalRef.current;
            if (targetString && startNodeIndex !== null && startOffsetIndex !== null && endOffsetIndex !== null && endNodeIndex !== null && textField_1) {
                // const textField = document.getElementById(textFieldId);
                var childNodes = ui_MessageInput_hooks_usePaste.nodeListToArray(textField_1 === null || textField_1 === void 0 ? void 0 : textField_1.childNodes);
                var startNodeTextContent = (_b = (_a = childNodes[startNodeIndex]) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : '';
                var frontTextNode = document.createTextNode(startNodeTextContent.slice(0, startOffsetIndex));
                var endNodeTextContent = (_d = (_c = childNodes[endNodeIndex]) === null || _c === void 0 ? void 0 : _c.textContent) !== null && _d !== void 0 ? _d : '';
                var backTextNode = endOffsetIndex && document.createTextNode("\u00A0".concat(endNodeTextContent.slice(endOffsetIndex)));
                var mentionLabel = ui_MessageInput_hooks_usePaste.renderToString({
                    userId: mentionSelectedUser === null || mentionSelectedUser === void 0 ? void 0 : mentionSelectedUser.userId,
                    nickname: "".concat(_const.USER_MENTION_TEMP_CHAR).concat((mentionSelectedUser === null || mentionSelectedUser === void 0 ? void 0 : mentionSelectedUser.nickname) || stringSet.MENTION_NAME__NO_NAME),
                });
                var div = document.createElement('div');
                div.innerHTML = mentionLabel;
                var newNodes = _tslib.__spreadArray(_tslib.__spreadArray(_tslib.__spreadArray([], childNodes.slice(0, startNodeIndex), true), [
                    frontTextNode,
                    div.childNodes[0],
                    backTextNode
                ], false), childNodes.slice(endNodeIndex + 1), true);
                if (textField_1) {
                    textField_1.innerHTML = '';
                    newNodes.forEach(function (newNode) {
                        if (newNode) {
                            textField_1.appendChild(newNode);
                        }
                    });
                }
                onUserMentioned(mentionSelectedUser);
                if (window.getSelection || document.getSelection) {
                    // set caret postion
                    var selection = window.getSelection() || document.getSelection();
                    selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
                    var range = new Range();
                    range.selectNodeContents(textField_1);
                    range.setStart(textField_1.childNodes[startNodeIndex + 2], 1);
                    range.setEnd(textField_1.childNodes[startNodeIndex + 2], 1);
                    range.collapse(false);
                    selection === null || selection === void 0 ? void 0 : selection.addRange(range);
                    textField_1.focus();
                }
                setTargetStringInfo(_tslib.__assign({}, initialTargetStringInfo));
                useMentionedLabelDetection();
            }
        }
    }, [mentionSelectedUser, isMentionEnabled]);
    // #Mention | Detect mentioning user nickname
    var useMentionInputDetection = React.useCallback(function () {
        var _a, _b;
        var selection = ((_a = window === null || window === void 0 ? void 0 : window.getSelection) === null || _a === void 0 ? void 0 : _a.call(window)) || ((_b = document === null || document === void 0 ? void 0 : document.getSelection) === null || _b === void 0 ? void 0 : _b.call(document));
        var textField = internalRef === null || internalRef === void 0 ? void 0 : internalRef.current;
        if ((selection === null || selection === void 0 ? void 0 : selection.anchorNode) === textField) {
            onMentionStringChange('');
        }
        if (isMentionEnabled
            && textField
            && selection
            && selection.anchorNode === selection.focusNode
            && selection.anchorOffset === selection.focusOffset) {
            var textStack = '';
            var startNodeIndex = null;
            var startOffsetIndex = null;
            var _loop_1 = function (index) {
                var currentNode = textField.childNodes[index];
                if (currentNode.nodeType === _const$1.NodeTypes.TextNode) {
                    /* text node */
                    var textContent = (function () {
                        var _a;
                        if (currentNode === selection.anchorNode) {
                            return (currentNode === null || currentNode === void 0 ? void 0 : currentNode.textContent) ? currentNode === null || currentNode === void 0 ? void 0 : currentNode.textContent.slice(0, selection.anchorOffset) : '';
                        }
                        return (_a = currentNode === null || currentNode === void 0 ? void 0 : currentNode.textContent) !== null && _a !== void 0 ? _a : '';
                    })();
                    if (textStack.length > 0) {
                        textStack += textContent;
                    }
                    else {
                        var charLastIndex = textContent.lastIndexOf(_const.USER_MENTION_TEMP_CHAR);
                        for (var i = charLastIndex - 1; i > -1; i -= 1) {
                            if (textContent[i] === _const.USER_MENTION_TEMP_CHAR) {
                                charLastIndex = i;
                            }
                            else {
                                break;
                            }
                        }
                        if (charLastIndex > -1) {
                            textStack = textContent;
                            startNodeIndex = index;
                            startOffsetIndex = charLastIndex;
                        }
                    }
                }
                else {
                    /* other nodes */
                    textStack = '';
                    startNodeIndex = null;
                    startOffsetIndex = null;
                }
                if (currentNode === selection.anchorNode) {
                    /**
                     * targetString could be ''
                     * startNodeIndex and startOffsetIndex could be null
                     */
                    var targetString = textStack && startOffsetIndex !== null ? textStack.slice(startOffsetIndex) : ''; // include template character
                    setTargetStringInfo({
                        targetString: targetString,
                        startNodeIndex: startNodeIndex,
                        startOffsetIndex: startOffsetIndex,
                        endNodeIndex: index,
                        endOffsetIndex: selection.anchorOffset,
                    });
                    onMentionStringChange(targetString);
                    return { value: void 0 };
                }
            };
            for (var index = 0; index < textField.childNodes.length; index += 1) {
                var state_1 = _loop_1(index);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        }
    }, [isMentionEnabled]);
    var sendMessage = function () {
        var _a, _b;
        try {
            var textField_2 = internalRef === null || internalRef === void 0 ? void 0 : internalRef.current;
            if (!isEdit && (textField_2 === null || textField_2 === void 0 ? void 0 : textField_2.textContent)) {
                var _c = ui_MessageInput_hooks_usePaste.extractTextAndMentions(textField_2.childNodes), messageText = _c.messageText, mentionTemplate = _c.mentionTemplate;
                var params = { message: messageText, mentionTemplate: mentionTemplate };
                onSendMessage(params);
                resetInput(internalRef);
                /**
                 * Note: contentEditable does not work as expected in mobile WebKit (Safari).
                 * @see https://github.com/sendbird/sendbird-uikit-react/pull/1108
                 */
                if (browser.isMobileIOS(navigator.userAgent)) {
                    if (ghostInputRef.current)
                        ghostInputRef.current.focus();
                    requestAnimationFrame(function () { return textField_2.focus(); });
                }
                else {
                    // important: keeps the keyboard open -> must add test on refactor
                    textField_2.focus();
                }
                setIsInput(false);
            }
        }
        catch (error) {
            (_b = (_a = eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.message) === null || _a === void 0 ? void 0 : _a.onSendMessageFailed) === null || _b === void 0 ? void 0 : _b.call(_a, message, error);
        }
    };
    var isEditDisabled = !((_b = (_a = internalRef === null || internalRef === void 0 ? void 0 : internalRef.current) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim());
    var editMessage = function () {
        var _a, _b;
        try {
            var textField = internalRef === null || internalRef === void 0 ? void 0 : internalRef.current;
            var messageId = message === null || message === void 0 ? void 0 : message.messageId;
            if (isEdit && messageId && textField) {
                var _c = ui_MessageInput_hooks_usePaste.extractTextAndMentions(textField.childNodes), messageText = _c.messageText, mentionTemplate = _c.mentionTemplate;
                var params = { messageId: messageId, message: messageText, mentionTemplate: mentionTemplate };
                onUpdateMessage(params);
                resetInput(internalRef);
            }
        }
        catch (error) {
            (_b = (_a = eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.message) === null || _a === void 0 ? void 0 : _a.onUpdateMessageFailed) === null || _b === void 0 ? void 0 : _b.call(_a, message, error);
        }
    };
    var onPaste = ui_MessageInput_hooks_usePaste.usePaste({
        ref: internalRef,
        setMentionedUsers: setMentionedUsers,
        channel: channel,
        setIsInput: setIsInput,
    });
    var uploadFile = function (event) {
        var _a, _b;
        var files = event.currentTarget.files;
        try {
            if (files) {
                onFileUpload(Array.from(files));
            }
        }
        catch (error) {
            (_b = (_a = eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.message) === null || _a === void 0 ? void 0 : _a.onFileUploadFailed) === null || _b === void 0 ? void 0 : _b.call(_a, error);
        }
        finally {
            event.target.value = '';
        }
    };
    var adjustScrollToCaret = function () {
        var _a;
        var inputRef = internalRef;
        var selection = window.getSelection();
        if (!selection || selection.rangeCount === 0)
            return;
        // Get the last range (caret or selected text position) from the selection
        var range = selection.getRangeAt(selection.rangeCount - 1);
        var rect = range.getBoundingClientRect();
        var container = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        if (!container || !inputRef.current)
            return;
        // If the caret (or selection) is below the visible container area, scroll down
        if (rect.bottom > container.bottom) {
            var scrollAmount = Math.min(rect.bottom - container.bottom, // Calculate how much we need to scroll
            inputRef.current.scrollHeight - inputRef.current.clientHeight);
            inputRef.current.scrollTop += scrollAmount; // Adjust the scroll position downward
        }
        // If the caret (or selection) is above the visible container area, scroll up
        else if (rect.top < container.top) {
            var scrollAmount = Math.min(container.top - rect.top, // Calculate how much we need to scroll
            inputRef.current.scrollTop);
            inputRef.current.scrollTop -= scrollAmount; // Adjust the scroll position upward
        }
    };
    return (React__default.default.createElement("form", { className: utils.classnames.apply(void 0, _tslib.__spreadArray(_tslib.__spreadArray([], (Array.isArray(className) ? className : [className]), false), [isEdit && 'sendbird-message-input__edit',
            disabled && 'sendbird-message-input-form__disabled'], false)) },
        React__default.default.createElement("div", { className: utils.classnames('sendbird-message-input', disabled && 'sendbird-message-input__disabled'), "data-testid": "sendbird-message-input" },
            browser.isMobileIOS(navigator.userAgent) && (React__default.default.createElement("input", { id: 'ghost-input-reset-ime-cjk', ref: ghostInputRef, style: { opacity: 0, padding: 0, margin: 0, height: 0, border: 'none', position: 'absolute', top: -9999 }, defaultValue: '_' })),
            React__default.default.createElement("div", { id: "".concat(textFieldId).concat(isEdit ? message === null || message === void 0 ? void 0 : message.messageId : ''), className: "sendbird-message-input--textarea ".concat(textFieldId), contentEditable: !disabled, role: "textbox", "aria-label": "Text Input", ref: internalRef, 
                // @ts-ignore
                disabled: disabled, maxLength: maxLength, onKeyDown: function (e) {
                    var _a, _b, _c, _d;
                    var preventEvent = onKeyDown(e);
                    if (preventEvent) {
                        e.preventDefault();
                    }
                    else {
                        if (!e.shiftKey
                            && e.key === _const$1.MessageInputKeys.Enter
                            && !isMobile
                            && ((_a = internalRef === null || internalRef === void 0 ? void 0 : internalRef.current) === null || _a === void 0 ? void 0 : _a.textContent)
                            && internalRef.current.textContent.trim().length > 0
                            && ((_b = e === null || e === void 0 ? void 0 : e.nativeEvent) === null || _b === void 0 ? void 0 : _b.isComposing) !== true
                        /**
                         * NOTE: What isComposing does?
                         * Check if the user has finished composing characters
                         * (e.g., for languages like Korean, Japanese, where characters are composed from multiple keystrokes)
                         * Prevents executing the code while the user is still composing characters.
                         */
                        ) {
                            e.preventDefault();
                            sendMessage();
                        }
                        if (e.key === _const$1.MessageInputKeys.Backspace
                            && ((_d = (_c = internalRef === null || internalRef === void 0 ? void 0 : internalRef.current) === null || _c === void 0 ? void 0 : _c.childNodes) === null || _d === void 0 ? void 0 : _d.length) === 2
                            && !internalRef.current.childNodes[0].textContent
                            && internalRef.current.childNodes[1].nodeType === _const$1.NodeTypes.ElementNode) {
                            internalRef.current.removeChild(internalRef.current.childNodes[1]);
                        }
                    }
                }, onKeyUp: function (e) {
                    var preventEvent = onKeyUp(e);
                    if (preventEvent) {
                        e.preventDefault();
                    }
                    else {
                        useMentionInputDetection();
                    }
                }, onClick: function () {
                    useMentionInputDetection();
                }, onInput: function () {
                    var _a;
                    onStartTyping();
                    setIsInput(((_a = internalRef === null || internalRef === void 0 ? void 0 : internalRef.current) === null || _a === void 0 ? void 0 : _a.textContent) ? internalRef.current.textContent.trim().length > 0 : false);
                    useMentionedLabelDetection();
                }, onPaste: function (e) {
                    onPaste(e);
                    setTimeout(adjustScrollToCaret);
                } }),
            ((_e = (_d = (_c = internalRef === null || internalRef === void 0 ? void 0 : internalRef.current) === null || _c === void 0 ? void 0 : _c.textContent) === null || _d === void 0 ? void 0 : _d.length) !== null && _e !== void 0 ? _e : 0) === 0 && (React__default.default.createElement(ui_Label.Label, { className: "sendbird-message-input--placeholder", type: ui_Label.LabelTypography.BODY_1, color: disabled ? ui_Label.LabelColors.ONBACKGROUND_4 : ui_Label.LabelColors.ONBACKGROUND_3 }, placeholder || stringSet.MESSAGE_INPUT__PLACE_HOLDER)),
            !isEdit && isInput && (React__default.default.createElement(ui_IconButton, { className: "sendbird-message-input--send", height: "32px", width: "32px", onClick: function () { return sendMessage(); }, testID: "sendbird-message-input-send-button" }, (renderSendMessageIcon === null || renderSendMessageIcon === void 0 ? void 0 : renderSendMessageIcon()) || (React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.SEND, fillColor: disabled ? ui_Icon.IconColors.ON_BACKGROUND_4 : ui_Icon.IconColors.PRIMARY, width: "20px", height: "20px" })))),
            !isEdit
                && !isInput
                && ((renderFileUploadIcon === null || renderFileUploadIcon === void 0 ? void 0 : renderFileUploadIcon())
                    // UIKit Dashboard configuration should have lower priority than
                    // renderFileUploadIcon which is set in code level
                    || (isFileUploadEnabled && (React__default.default.createElement(ui_IconButton, { className: utils.classnames('sendbird-message-input--attach', isVoiceMessageEnabled && 'is-voice-message-enabled'), height: "32px", width: "32px", onClick: function () {
                            var _a, _b;
                            // todo: clear previous input
                            (_b = (_a = fileInputRef === null || fileInputRef === void 0 ? void 0 : fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click) === null || _b === void 0 ? void 0 : _b.call(_a);
                        } },
                        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.ATTACH, fillColor: disabled ? ui_Icon.IconColors.ON_BACKGROUND_4 : ui_Icon.IconColors.CONTENT_INVERSE, width: "20px", height: "20px" }),
                        React__default.default.createElement("input", { className: "sendbird-message-input--attach-input", type: "file", ref: fileInputRef, 
                            // It will affect to <Channel /> and <Thread />
                            onChange: function (event) { return uploadFile(event); }, accept: index.getMimeTypesUIKitAccepts(acceptableMimeTypes), multiple: isSelectingMultipleFilesEnabled && ui_MessageInput_hooks_usePaste.isChannelTypeSupportsMultipleFilesMessage(channel) }))))),
            isVoiceMessageEnabled && !isEdit && !isInput && (React__default.default.createElement(ui_IconButton, { className: "sendbird-message-input--voice-message", width: "32px", height: "32px", onClick: onVoiceMessageIconClick }, (renderVoiceMessageIcon === null || renderVoiceMessageIcon === void 0 ? void 0 : renderVoiceMessageIcon()) || (React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.AUDIO_ON_LINED, fillColor: disabled ? ui_Icon.IconColors.ON_BACKGROUND_4 : ui_Icon.IconColors.CONTENT_INVERSE, width: "20px", height: "20px" }))))),
        isEdit && (React__default.default.createElement("div", { className: "sendbird-message-input--edit-action", "data-testid": "sendbird-message-input--edit-action" },
            React__default.default.createElement(ui_Button.default, { className: "sendbird-message-input--edit-action__cancel", type: ui_Button.ButtonTypes.SECONDARY, size: ui_Button.ButtonSizes.SMALL, onClick: onCancelEdit }, stringSet.BUTTON__CANCEL),
            React__default.default.createElement(ui_Button.default, { className: "sendbird-message-input--edit-action__save", type: ui_Button.ButtonTypes.PRIMARY, size: ui_Button.ButtonSizes.SMALL, disabled: isEditDisabled, onClick: function () { return editMessage(); } }, stringSet.BUTTON__SAVE)))));
});

module.exports = MessageInput;
//# sourceMappingURL=MessageInput.js.map
