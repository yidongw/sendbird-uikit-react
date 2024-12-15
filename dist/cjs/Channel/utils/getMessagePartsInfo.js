'use strict';

var index = require('../../chunks/bundle-BayL2H8_.js');
var Channel_utils_compareMessagesForGrouping = require('./compareMessagesForGrouping.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-C3e9xkw6.js');
require('../../chunks/bundle-CmBrGegh.js');
require('../../chunks/bundle-DRvomNLJ.js');
require('react');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-C0tdWwa4.js');

/**
 * exported, should be backward compatible
 */
var getMessagePartsInfo = function (_a) {
    var _b = _a.allMessages, allMessages = _b === void 0 ? [] : _b, _c = _a.isMessageGroupingEnabled, isMessageGroupingEnabled = _c === void 0 ? true : _c, _d = _a.currentIndex, currentIndex = _d === void 0 ? 0 : _d, currentMessage = _a.currentMessage, _e = _a.currentChannel, currentChannel = _e === void 0 ? null : _e, _f = _a.replyType, replyType = _f === void 0 ? '' : _f;
    var previousMessage = allMessages[currentIndex - 1];
    var nextMessage = allMessages[currentIndex + 1];
    var _g = isMessageGroupingEnabled
        ? Channel_utils_compareMessagesForGrouping.compareMessagesForGrouping(previousMessage, currentMessage, nextMessage, currentChannel, replyType)
        : [false, false], chainTop = _g[0], chainBottom = _g[1];
    var previousMessageCreatedAt = previousMessage === null || previousMessage === void 0 ? void 0 : previousMessage.createdAt;
    var currentCreatedAt = currentMessage.createdAt;
    // NOTE: for pending/failed messages
    var isLocalMessage = 'sendingStatus' in currentMessage && (currentMessage.sendingStatus !== 'succeeded');
    // https://stackoverflow.com/a/41855608
    var hasSeparator = isLocalMessage ? false : !(previousMessageCreatedAt && (index.isSameDay(currentCreatedAt, previousMessageCreatedAt)));
    return {
        chainTop: chainTop,
        chainBottom: chainBottom,
        hasSeparator: hasSeparator,
    };
};

exports.getMessagePartsInfo = getMessagePartsInfo;
//# sourceMappingURL=getMessagePartsInfo.js.map
