'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../../chunks/bundle-DspSuA8e.js');
var index$1 = require('../../chunks/bundle-BLoixwYr.js');
var LocalizationContext = require('../../chunks/bundle-Cy1ruNzs.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-Bdr7xlea.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('react');
require('../../chunks/bundle-Dio8pG-T.js');

/**
 * exported, should be backward compatible
 * @returns [chainTop: `boolean`, chainBottom: `boolean`]
 */
var compareMessagesForGrouping = function (prevMessage, currMessage, nextMessage, currentChannel, replyType) {
    if (!currentChannel || currentChannel.channelType !== 'group') {
        return [
            isSameGroup(prevMessage, currMessage),
            isSameGroup(currMessage, nextMessage),
        ];
    }
    if (replyType === 'THREAD' && (currMessage === null || currMessage === void 0 ? void 0 : currMessage.threadInfo)) {
        return [false, false];
    }
    var sendingStatus = (currMessage === null || currMessage === void 0 ? void 0 : currMessage.sendingStatus) || '';
    var isAcceptable = sendingStatus !== 'pending' && sendingStatus !== 'failed';
    return [
        isSameGroup(prevMessage, currMessage, currentChannel) && isAcceptable,
        isSameGroup(currMessage, nextMessage, currentChannel) && isAcceptable,
    ];
};
var getMessageCreatedAt = function (message) {
    var stringSet = LocalizationContext.useLocalization().stringSet;
    return index.format(message.createdAt, stringSet.DATE_FORMAT__MESSAGE_CREATED_AT);
};
var isSameGroup = function (message, comparingMessage, currentChannel) {
    var _a, _b;
    if (!(message
        && comparingMessage
        && message.messageType
        && message.messageType !== 'admin'
        && comparingMessage.messageType
        && (comparingMessage === null || comparingMessage === void 0 ? void 0 : comparingMessage.messageType) !== 'admin'
        && 'sender' in message
        && 'sender' in comparingMessage
        && message.createdAt
        && comparingMessage.createdAt
        && message.sender.userId
        && comparingMessage.sender.userId)) {
        return false;
    }
    return ((message === null || message === void 0 ? void 0 : message.sendingStatus) === (comparingMessage === null || comparingMessage === void 0 ? void 0 : comparingMessage.sendingStatus)
        && ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId) === ((_b = comparingMessage === null || comparingMessage === void 0 ? void 0 : comparingMessage.sender) === null || _b === void 0 ? void 0 : _b.userId)
        && getMessageCreatedAt(message) === getMessageCreatedAt(comparingMessage)) && (currentChannel ? index$1.isReadMessage(currentChannel, message) === index$1.isReadMessage(currentChannel, comparingMessage) : true);
};
var messages = {
    compareMessagesForGrouping: compareMessagesForGrouping,
    getMessageCreatedAt: getMessageCreatedAt,
    isSameGroup: isSameGroup,
};

exports.compareMessagesForGrouping = compareMessagesForGrouping;
exports.default = messages;
exports.getMessageCreatedAt = getMessageCreatedAt;
exports.isSameGroup = isSameGroup;
//# sourceMappingURL=compareMessagesForGrouping.js.map
