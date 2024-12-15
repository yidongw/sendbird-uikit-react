import React__default, { useContext, useMemo } from 'react';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-Qkp2VIaZ.js';
import { y as getClassName, e as isEditedMessage } from '../chunks/bundle-Bd-i99nk.js';
import { L as LocalizationContext } from '../chunks/bundle-DhMUg-L7.js';
import { t as tokenizeMessage } from '../chunks/bundle-BvQmfZZv.js';
import { T as TextFragment } from '../chunks/bundle-CYbqxz_s.js';
import { T as TEXT_MESSAGE_BODY_CLASSNAME } from '../chunks/bundle-BddSUitu.js';
import '../chunks/bundle-HcNswZ5p.js';
import '../chunks/bundle-dybWaw0v.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-DjLJFwD7.js';
import '../chunks/bundle-DB7YSrIT.js';
import '../chunks/bundle-DQk0aENq.js';
import '../Message/context.js';
import './MentionLabel.js';
import '../chunks/bundle-BKzcG-aC.js';
import 'react-dom';
import '../chunks/bundle-0WaCg6X7.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import './SortByRow.js';
import '../chunks/bundle-C5iY_IvV.js';
import '../withSendbird.js';
import './IconButton.js';
import './UserProfile.js';
import '../chunks/bundle-B91Bhfde.js';
import '@sendbird/uikit-tools';
import '../chunks/bundle-ja8H3E0K.js';
import '../chunks/bundle-DnSobLtx.js';
import './Button.js';
import './Icon.js';
import 'css-vars-ponyfill';
import '../chunks/bundle-zy1mnw8U.js';
import '../useSendbirdStateContext.js';
import '../sendbirdSelectors.js';
import '../chunks/bundle-BwmZGijR.js';
import '../chunks/bundle-2pbuHA3C.js';
import './ImageRenderer.js';
import '../chunks/bundle-DkDQ1PWY.js';
import './LinkLabel.js';

function TextMessageItemBody(_a) {
    var _b;
    var _c = _a.className, className = _c === void 0 ? '' : _c, message = _a.message, _d = _a.isByMe, isByMe = _d === void 0 ? false : _d, _e = _a.mouseHover, mouseHover = _e === void 0 ? false : _e, _f = _a.isMentionEnabled, isMentionEnabled = _f === void 0 ? false : _f, _g = _a.isReactionEnabled, isReactionEnabled = _g === void 0 ? false : _g, _h = _a.isMarkdownEnabled, isMarkdownEnabled = _h === void 0 ? false : _h;
    var stringSet = useContext(LocalizationContext).stringSet;
    var isMessageMentioned = isMentionEnabled
        && (message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate)
        && message.mentionedMessageTemplate.length > 0
        && (message === null || message === void 0 ? void 0 : message.mentionedUsers)
        && message.mentionedUsers.length > 0;
    var tokens = useMemo(function () {
        var _a;
        if (isMessageMentioned) {
            return tokenizeMessage({
                mentionedUsers: (_a = message === null || message === void 0 ? void 0 : message.mentionedUsers) !== null && _a !== void 0 ? _a : undefined,
                messageText: message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate,
                includeMarkdown: isMarkdownEnabled,
            });
        }
        return tokenizeMessage({
            messageText: message === null || message === void 0 ? void 0 : message.message,
            includeMarkdown: isMarkdownEnabled,
        });
    }, [message === null || message === void 0 ? void 0 : message.updatedAt, message === null || message === void 0 ? void 0 : message.message]);
    return (React__default.createElement(Label, { type: LabelTypography.BODY_1, color: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1 },
        React__default.createElement("div", { className: getClassName([
                className,
                TEXT_MESSAGE_BODY_CLASSNAME,
                isByMe ? 'outgoing' : 'incoming',
                mouseHover ? 'mouse-hover' : '',
                (isReactionEnabled && ((_b = message === null || message === void 0 ? void 0 : message.reactions) === null || _b === void 0 ? void 0 : _b.length) > 0) ? 'reactions' : '',
            ]) },
            React__default.createElement(TextFragment, { tokens: tokens }),
            isEditedMessage(message) && (React__default.createElement(Label, { className: "sendbird-text-message-item-body__message edited", type: LabelTypography.BODY_1, color: isByMe ? LabelColors.ONCONTENT_2 : LabelColors.ONBACKGROUND_2 }, " ".concat(stringSet.MESSAGE_EDITED, " "))))));
}

export { TextMessageItemBody as default };
//# sourceMappingURL=TextMessageItemBody.js.map
