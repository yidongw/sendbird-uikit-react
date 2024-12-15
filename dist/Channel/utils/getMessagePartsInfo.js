import { i as isSameDay } from '../../chunks/bundle-B5oDG6vR.js';
import { compareMessagesForGrouping } from './compareMessagesForGrouping.js';
import '../../chunks/bundle-CnkNoe49.js';
import '../../chunks/bundle-D4fsEPre.js';
import '../../chunks/bundle-CbLNLMef.js';
import '../../chunks/bundle-Ck-Lg2K3.js';
import 'react';
import '../../chunks/bundle-B80WXNZi.js';
import '../../chunks/bundle-BL0uQSu6.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-fwRBR_Yw.js';
import '../../chunks/bundle-DgxVBBM3.js';

/**
 * exported, should be backward compatible
 */
var getMessagePartsInfo = function (_a) {
    var _b = _a.allMessages, allMessages = _b === void 0 ? [] : _b, _c = _a.isMessageGroupingEnabled, isMessageGroupingEnabled = _c === void 0 ? true : _c, _d = _a.currentIndex, currentIndex = _d === void 0 ? 0 : _d, currentMessage = _a.currentMessage, _e = _a.currentChannel, currentChannel = _e === void 0 ? null : _e, _f = _a.replyType, replyType = _f === void 0 ? '' : _f;
    var previousMessage = allMessages[currentIndex - 1];
    var nextMessage = allMessages[currentIndex + 1];
    var _g = isMessageGroupingEnabled
        ? compareMessagesForGrouping(previousMessage, currentMessage, nextMessage, currentChannel, replyType)
        : [false, false], chainTop = _g[0], chainBottom = _g[1];
    var previousMessageCreatedAt = previousMessage === null || previousMessage === void 0 ? void 0 : previousMessage.createdAt;
    var currentCreatedAt = currentMessage.createdAt;
    // NOTE: for pending/failed messages
    var isLocalMessage = 'sendingStatus' in currentMessage && (currentMessage.sendingStatus !== 'succeeded');
    // https://stackoverflow.com/a/41855608
    var hasSeparator = isLocalMessage ? false : !(previousMessageCreatedAt && (isSameDay(currentCreatedAt, previousMessageCreatedAt)));
    return {
        chainTop: chainTop,
        chainBottom: chainBottom,
        hasSeparator: hasSeparator,
    };
};

export { getMessagePartsInfo };
//# sourceMappingURL=getMessagePartsInfo.js.map
