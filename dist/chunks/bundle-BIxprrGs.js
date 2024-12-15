import { c as LabelStringSet } from './bundle-Di0Zwz2X.js';
import { a as isDefaultChannelName } from './bundle-BL0uQSu6.js';

var getChannelTitle = function (channel, currentUserId, stringSet) {
    var _a;
    var LABEL_STRING_SET = stringSet || LabelStringSet;
    if (!(channel === null || channel === void 0 ? void 0 : channel.name) && !(channel === null || channel === void 0 ? void 0 : channel.members)) {
        return LABEL_STRING_SET.NO_TITLE;
    }
    if (!isDefaultChannelName(channel)) {
        return channel.name;
    }
    if (((_a = channel === null || channel === void 0 ? void 0 : channel.members) === null || _a === void 0 ? void 0 : _a.length) === 1) {
        return LABEL_STRING_SET.NO_MEMBERS;
    }
    return channel === null || channel === void 0 ? void 0 : channel.members.filter(function (_a) {
        var userId = _a.userId;
        return userId !== currentUserId;
    }).map(function (_a) {
        var nickname = _a.nickname;
        return (nickname || LABEL_STRING_SET.NO_NAME);
    }).join(', ');
};

export { getChannelTitle as g };
//# sourceMappingURL=bundle-BIxprrGs.js.map
