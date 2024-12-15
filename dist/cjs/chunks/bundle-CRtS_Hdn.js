'use strict';

var _const = require('./bundle-CxDaflMi.js');

function getComponentKeyFromMessage(message) {
    if ('sendingStatus' in message) {
        if (message.sendingStatus === 'succeeded')
            return String(message.messageId);
        return message.reqId;
    }
    return String(message.messageId);
}
function isContextMenuClosed() {
    var _a, _b;
    return (((_a = document.getElementById('sendbird-dropdown-portal')) === null || _a === void 0 ? void 0 : _a.childElementCount) === 0
        && ((_b = document.getElementById('sendbird-emoji-list-portal')) === null || _b === void 0 ? void 0 : _b.childElementCount) === 0);
}
function getMessageTopOffset(messageCreatedAt) {
    var _a;
    var element = (_a = document.querySelectorAll("[data-sb-created-at=\"".concat(messageCreatedAt, "\"]"))) === null || _a === void 0 ? void 0 : _a[0];
    if (element instanceof HTMLElement) {
        return element.offsetTop;
    }
    return null;
}
var isDisabledBecauseFrozen = function (groupChannel) {
    if (!groupChannel)
        return false;
    return groupChannel.isFrozen && groupChannel.myRole !== 'operator';
};
var isDisabledBecauseMuted = function (groupChannel) {
    if (!groupChannel)
        return false;
    return groupChannel.myMutedState === 'muted';
};
var isDisabledBecauseSuggestedReplies = function (channel, enableSuggestedReplies) {
    var _a, _b, _c, _d;
    return enableSuggestedReplies
        && Array.isArray((_b = (_a = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _a === void 0 ? void 0 : _a.extendedMessagePayload) === null || _b === void 0 ? void 0 : _b.suggested_replies)
        && !!((_d = (_c = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _c === void 0 ? void 0 : _c.extendedMessagePayload) === null || _d === void 0 ? void 0 : _d.disable_chat_input);
};
var isFormVersionCompatible = function (version) {
    return version <= _const.UIKIT_COMPATIBLE_FORM_VERSION;
};
var isDisabledBecauseMessageForm = function (allMessages, enableFormTypeMessage) {
    return enableFormTypeMessage
        && allMessages.some(function (message) {
            var _a;
            return (!!message.messageForm
                && !message.messageForm.isSubmitted
                && !!((_a = message.extendedMessagePayload) === null || _a === void 0 ? void 0 : _a.disable_chat_input)
                && isFormVersionCompatible(message.messageForm.version));
        });
};

exports.getComponentKeyFromMessage = getComponentKeyFromMessage;
exports.getMessageTopOffset = getMessageTopOffset;
exports.isContextMenuClosed = isContextMenuClosed;
exports.isDisabledBecauseFrozen = isDisabledBecauseFrozen;
exports.isDisabledBecauseMessageForm = isDisabledBecauseMessageForm;
exports.isDisabledBecauseMuted = isDisabledBecauseMuted;
exports.isDisabledBecauseSuggestedReplies = isDisabledBecauseSuggestedReplies;
exports.isFormVersionCompatible = isFormVersionCompatible;
//# sourceMappingURL=bundle-CRtS_Hdn.js.map
