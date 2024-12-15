import { c as __spreadArray } from '../chunks/bundle-HcNswZ5p.js';
import React__default from 'react';
import { f as format } from '../chunks/bundle-D4JzAgen.js';
import { i as isToday, a as isYesterday, b as isThisYear } from '../chunks/bundle-BDE05Tho.js';
import { A as Avatar } from '../chunks/bundle-2pbuHA3C.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-Qkp2VIaZ.js';
import { u as useLocalization } from '../chunks/bundle-DhMUg-L7.js';
import '../chunks/bundle-DB7YSrIT.js';
import '../chunks/bundle-DfmFm_nl.js';
import './ImageRenderer.js';
import '../chunks/bundle-0WaCg6X7.js';
import '../chunks/bundle-DkDQ1PWY.js';
import './Icon.js';
import '../chunks/bundle-dybWaw0v.js';

// getCreatedAt
function getCreatedAt (_a) {
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

function MessageSearchItem(_a) {
    var className = _a.className, message = _a.message, selected = _a.selected, onClick = _a.onClick;
    var createdAt = message.createdAt;
    var messageText = message.message;
    // @ts-ignore
    var sender = message.sender || message._sender;
    var profileUrl = sender.profileUrl, nickname = sender.nickname;
    var _b = useLocalization(), stringSet = _b.stringSet, dateLocale = _b.dateLocale;
    return (React__default.createElement("div", { className: __spreadArray(__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            'sendbird-message-search-item',
            selected ? 'sendbird-message-search-item--selected' : '',
        ], false).join(' '), onClick: function (e) {
            e.stopPropagation();
            onClick === null || onClick === void 0 ? void 0 : onClick(message);
        } },
        React__default.createElement("div", { className: "sendbird-message-search-item__left" },
            React__default.createElement(Avatar, { className: "sendbird-message-search-item__left__sender-avatar", src: profileUrl, alt: "profile image", width: "56px", height: "56px" })),
        React__default.createElement("div", { className: "sendbird-message-search-item__right" },
            React__default.createElement(Label, { className: "sendbird-message-search-item__right__sender-name", type: LabelTypography.SUBTITLE_2, color: LabelColors.ONBACKGROUND_1 }, nickname || stringSet.NO_NAME),
            React__default.createElement(Label, { className: "sendbird-message-search-item__right__message-text", type: LabelTypography.BODY_2, color: LabelColors.ONBACKGROUND_3 }, messageText),
            React__default.createElement(Label, { className: "sendbird-message-search-item__right__message-created-at", type: LabelTypography.CAPTION_3, color: LabelColors.ONBACKGROUND_2 }, getCreatedAt({ createdAt: createdAt, locale: dateLocale, stringSet: stringSet }))),
        React__default.createElement("div", { className: "sendbird-message-search-item__right-footer" })));
}

export { MessageSearchItem as default };
//# sourceMappingURL=MessageSearchItem.js.map
