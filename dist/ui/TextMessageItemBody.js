import React__default, { useContext, useMemo } from 'react';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-Di0Zwz2X.js';
import { y as getClassName, e as isEditedMessage } from '../chunks/bundle-BL0uQSu6.js';
import { L as LocalizationContext } from '../chunks/bundle-CbLNLMef.js';
import { t as tokenizeMessage } from '../chunks/bundle-BS8ALexW.js';
import { T as TextFragment } from '../chunks/bundle-D26kTqMa.js';
import { T as TEXT_MESSAGE_BODY_CLASSNAME } from '../chunks/bundle-DjodzqAP.js';
import '../chunks/bundle-Ck-Lg2K3.js';
import '../chunks/bundle-B80WXNZi.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-fwRBR_Yw.js';
import '../chunks/bundle-CnkNoe49.js';
import '../chunks/bundle-DgxVBBM3.js';
import '../Message/context.js';
import './MentionLabel.js';
import '../chunks/bundle-A5WEPjt6.js';
import 'react-dom';
import '../chunks/bundle-pQHYhigr.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import './SortByRow.js';
import '../chunks/bundle-gMJSD9hQ.js';
import '../withSendbird.js';
import './IconButton.js';
import './UserProfile.js';
import '../chunks/bundle-C3toIOqd.js';
import '@sendbird/uikit-tools';
import '../chunks/bundle-ptS-tNRF.js';
import '../chunks/bundle-Bk1oUUzJ.js';
import './Button.js';
import './Icon.js';
import 'css-vars-ponyfill';
import '../chunks/bundle-CHD1aKHO.js';
import '../useSendbirdStateContext.js';
import '../sendbirdSelectors.js';
import '../chunks/bundle-YOpvheAB.js';
import '../chunks/bundle-BbICJE5Z.js';
import './ImageRenderer.js';
import '../chunks/bundle-CjhP75at.js';
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
