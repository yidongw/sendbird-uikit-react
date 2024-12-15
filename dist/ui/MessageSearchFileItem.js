import { c as __spreadArray } from '../chunks/bundle-Ck-Lg2K3.js';
import React__default from 'react';
import { A as Avatar } from '../chunks/bundle-BbICJE5Z.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-Di0Zwz2X.js';
import { u as useLocalization } from '../chunks/bundle-CbLNLMef.js';
import { f as format } from '../chunks/bundle-D4fsEPre.js';
import { i as isToday, a as isYesterday, b as isThisYear } from '../chunks/bundle-BxmZCK6X.js';
import { i as isVoiceMessage } from '../chunks/bundle-BL0uQSu6.js';
import { g as getMessageFirstFileUrl, b as getMessageFirstFileName } from '../chunks/bundle-CxwGa1l3.js';
import './ImageRenderer.js';
import '../chunks/bundle-pQHYhigr.js';
import '../chunks/bundle-CjhP75at.js';
import '../chunks/bundle-B80WXNZi.js';
import '../chunks/bundle-CnkNoe49.js';
import '../chunks/bundle-B5oDG6vR.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-fwRBR_Yw.js';
import '../chunks/bundle-DgxVBBM3.js';

function getCreatedAt(_a) {
    var createdAt = _a.createdAt, locale = _a.locale, stringSet = _a.stringSet;
    var optionalParam = { locale: locale };
    if (!createdAt) {
        return '';
    }
    if (isToday(createdAt)) {
        return format(createdAt, stringSet.DATE_FORMAT__LAST_MESSAGE_CREATED_AT__TODAY, optionalParam);
    }
    if (isYesterday(createdAt)) {
        return stringSet.MESSAGE_STATUS__YESTERDAY;
    }
    if (isThisYear(createdAt)) {
        return format(createdAt, stringSet.DATE_FORMAT__LAST_MESSAGE_CREATED_AT__THIS_YEAR, optionalParam);
    }
    return format(createdAt, stringSet.DATE_FORMAT__LAST_MESSAGE_CREATED_AT__PREVIOUS_YEAR, optionalParam);
}
function getIconOfFileType(message) {
    var _a, _b, _c;
    var fileMessageUrl = (_a = getMessageFirstFileUrl(message)) !== null && _a !== void 0 ? _a : '';
    var fileExtension = (_c = (_b = (fileMessageUrl.match(/\.([^.]*?)(?=\?|#|$)/))) === null || _b === void 0 ? void 0 : _b[1]) !== null && _c !== void 0 ? _c : '';
    if (/(jpg|jpeg|png)$/i.test(fileExtension)) {
        return IconTypes.PHOTO;
    }
    else if (/mp4$/i.test(fileExtension) || isVoiceMessage(message)) {
        return IconTypes.PLAY;
    }
    else if (/mp3/i.test(fileExtension)) {
        return IconTypes.FILE_AUDIO;
    }
    else if (/gif/i.test(fileExtension)) {
        return IconTypes.GIF;
    }
    else {
        return IconTypes.FILE_DOCUMENT;
    }
}

function MessageSearchFileItem(props) {
    var className = props.className, message = props.message, selected = props.selected, onClick = props.onClick;
    var createdAt = message.createdAt;
    var url = getMessageFirstFileUrl(message);
    var name = getMessageFirstFileName(message);
    // @ts-ignore
    var sender = message.sender || message._sender;
    var profileUrl = sender.profileUrl, nickname = sender.nickname;
    var _a = useLocalization(), stringSet = _a.stringSet, dateLocale = _a.dateLocale;
    var isVoiceMsg = isVoiceMessage(message);
    var prettyFilename = isVoiceMsg ? stringSet.VOICE_MESSAGE : (name || url);
    return (React__default.createElement("div", { className: __spreadArray(__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            'sendbird-message-search-file-item',
            selected ? 'sendbird-message-search-file-item--selected' : '',
        ], false).join(' '), onClick: function (e) {
            e.stopPropagation();
            onClick === null || onClick === void 0 ? void 0 : onClick(message);
        } },
        React__default.createElement("div", { className: "sendbird-message-search-file-item__left" },
            React__default.createElement(Avatar, { className: "sendbird-message-search-file-item__left__sender-avatar", src: profileUrl, alt: "profile image", width: "56px", height: "56px" })),
        React__default.createElement("div", { className: "sendbird-message-search-file-item__right" },
            React__default.createElement(Label, { className: "sendbird-message-search-file-item__right__sender-name", type: LabelTypography.SUBTITLE_2, color: LabelColors.ONBACKGROUND_1 }, nickname || stringSet.NO_NAME),
            React__default.createElement("div", { className: "sendbird-message-search-file-item__right__content" },
                !isVoiceMsg && (React__default.createElement("div", { className: 'sendbird-message-search-file-item__right__content__type-icon' },
                    React__default.createElement(Icon, { type: getIconOfFileType(message), fillColor: IconColors.PRIMARY, width: "18px", height: "18px" }))),
                React__default.createElement(Label, { className: "sendbird-message-search-file-item__right__content__url", type: LabelTypography.BODY_2, color: LabelColors.ONBACKGROUND_1 }, prettyFilename))),
        React__default.createElement(Label, { className: "sendbird-message-search-file-item__message-created-at", type: LabelTypography.CAPTION_3, color: LabelColors.ONBACKGROUND_2 }, getCreatedAt({ createdAt: createdAt, locale: dateLocale, stringSet: stringSet })),
        React__default.createElement("div", { className: "sendbird-message-search-file-item__right-footer" })));
}

export { MessageSearchFileItem as default };
//# sourceMappingURL=MessageSearchFileItem.js.map
