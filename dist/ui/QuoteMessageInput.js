import React__default, { useContext } from 'react';
import { c as isFileMessage, d as isMultipleFilesMessage, i as isVoiceMessage, J as isImageMessage, s as isVideoMessage, L as isImageFileInfo, q as isThumbnailMessage, M as isAudioMessage, y as getClassName, u as isGifMessage, m as isUserMessage, n as getUIKitMessageType, U as UIKitMessageTypes } from '../chunks/bundle-Bd-i99nk.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-Qkp2VIaZ.js';
import { L as LocalizationContext } from '../chunks/bundle-DhMUg-L7.js';
import ImageRenderer from './ImageRenderer.js';
import { c as getMessageFirstFileThumbnailUrl, g as getMessageFirstFileUrl, a as getMessageFirstFileType, b as getMessageFirstFileName } from '../chunks/bundle-B_TSibjC.js';
import '../chunks/bundle-HcNswZ5p.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-DjLJFwD7.js';
import '../chunks/bundle-DB7YSrIT.js';
import '../chunks/bundle-DQk0aENq.js';
import '../chunks/bundle-0WaCg6X7.js';
import '../chunks/bundle-dybWaw0v.js';

var componentClassname = 'sendbird-quote_message_input__avatar';
function QuoteMessageThumbnail(_a) {
    var _b;
    var message = _a.message;
    if (!isFileMessage(message) && !isMultipleFilesMessage(message) || isVoiceMessage(message)) {
        return React__default.createElement(React__default.Fragment, null);
    }
    var thumbnailUrl = getMessageFirstFileThumbnailUrl(message);
    if (!thumbnailUrl) {
        if (isImageMessage(message) || isVideoMessage(message)) {
            thumbnailUrl = getMessageFirstFileUrl(message);
        }
        else if (isMultipleFilesMessage(message) && isImageFileInfo((_b = message.fileInfoList) === null || _b === void 0 ? void 0 : _b[0])) {
            thumbnailUrl = message.fileInfoList[0].url;
        }
    }
    if (isVideoMessage(message) && thumbnailUrl) {
        return (React__default.createElement("div", { className: componentClassname },
            React__default.createElement("video", { style: {
                    width: '44px',
                    height: '44px',
                }, src: thumbnailUrl })));
    }
    else if ((isThumbnailMessage(message) || isMultipleFilesMessage(message)) && thumbnailUrl) {
        return (React__default.createElement(ImageRenderer, { className: componentClassname, url: thumbnailUrl, alt: getMessageFirstFileType(message), width: "44px", height: "44px", fixedSize: true }));
    }
    else if (isAudioMessage(message)) {
        return (React__default.createElement("div", { className: componentClassname },
            React__default.createElement(Icon, { type: IconTypes.FILE_AUDIO, fillColor: IconColors.ON_BACKGROUND_2, width: "24px", height: "24px" })));
    }
    else {
        return (React__default.createElement("div", { className: componentClassname },
            React__default.createElement(Icon, { type: IconTypes.FILE_DOCUMENT, fillColor: IconColors.ON_BACKGROUND_2, width: "24px", height: "24px" })));
    }
}

function QuoteMessageInput(_a) {
    var className = _a.className, replyingMessage = _a.replyingMessage, onClose = _a.onClose;
    var stringSet = useContext(LocalizationContext).stringSet;
    var fileMessage = replyingMessage;
    var sender = replyingMessage === null || replyingMessage === void 0 ? void 0 : replyingMessage.sender;
    var displayFileIcon = (isFileMessage(replyingMessage) || isMultipleFilesMessage(replyingMessage))
        && !isVoiceMessage(replyingMessage);
    return (React__default.createElement("div", { className: getClassName(['sendbird-quote_message_input', className !== null && className !== void 0 ? className : '']) },
        displayFileIcon && (React__default.createElement(QuoteMessageThumbnail, { message: fileMessage })),
        React__default.createElement("div", { className: "sendbird-quote_message_input__body", style: {
                width: "calc(100% - ".concat(displayFileIcon ? '164px' : '120px', ")"),
                left: displayFileIcon ? '92px' : '40px',
            } },
            React__default.createElement(Label, { className: "sendbird-quote_message_input__body__sender-name", type: LabelTypography.CAPTION_1, color: LabelColors.ONBACKGROUND_1 }, "".concat(stringSet.QUOTE_MESSAGE_INPUT__REPLY_TO, " ").concat((sender && sender.nickname) ? sender.nickname : stringSet.NO_NAME)),
            React__default.createElement(Label, { className: "sendbird-quote_message_input__body__message-content", type: LabelTypography.BODY_2, color: LabelColors.ONBACKGROUND_3 },
                isImageMessage(fileMessage) && !isGifMessage(fileMessage) && stringSet.QUOTE_MESSAGE_INPUT__FILE_TYPE_IMAGE,
                isVideoMessage(fileMessage) && stringSet.QUOTE_MESSAGE_INPUT__FILE_TYPE__VIDEO,
                isGifMessage(fileMessage) && stringSet.QUOTE_MESSAGE_INPUT__FILE_TYPE_GIF,
                isUserMessage(replyingMessage) && replyingMessage.message,
                getUIKitMessageType(replyingMessage) === UIKitMessageTypes.FILE && getMessageFirstFileName(fileMessage),
                isMultipleFilesMessage(replyingMessage)
                    && "".concat(fileMessage.fileInfoList.length, " Photos"),
                isVoiceMessage(replyingMessage) && stringSet.VOICE_MESSAGE)),
        React__default.createElement(Icon, { className: "sendbird-quote_message_input__close-button", type: IconTypes.CLOSE, fillColor: IconColors.ON_BACKGROUND_2, width: "24px", height: "24px", onClick: function () { return onClose === null || onClose === void 0 ? void 0 : onClose(replyingMessage); } })));
}

export { QuoteMessageInput as default };
//# sourceMappingURL=QuoteMessageInput.js.map
