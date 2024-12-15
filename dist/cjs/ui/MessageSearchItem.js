'use strict';

var _tslib = require('../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var index$1 = require('../chunks/bundle-C3e9xkw6.js');
var index = require('../chunks/bundle-DSQevcAL.js');
var ui_Avatar = require('../chunks/bundle-Dmsb_oex.js');
var ui_Label = require('../chunks/bundle-D8-2bEdY.js');
var LocalizationContext = require('../chunks/bundle-CmBrGegh.js');
require('../chunks/bundle-BCJ8mayg.js');
require('../chunks/bundle-BayL2H8_.js');
require('./ImageRenderer.js');
require('../chunks/bundle-BYHj6UqH.js');
require('../chunks/bundle-BvFqbvri.js');
require('./Icon.js');
require('../chunks/bundle-Q9YDOzjz.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

// getCreatedAt
function getCreatedAt (_a) {
    var createdAt = _a.createdAt, locale = _a.locale, stringSet = _a.stringSet;
    var optionalParam = { locale: locale };
    if (!createdAt) {
        return '';
    }
    if (index.isToday(createdAt)) {
        return index$1.format(createdAt, stringSet.DATE_FORMAT__LAST_MESSAGE_CREATED_AT__TODAY, optionalParam);
    }
    if (index.isYesterday(createdAt)) {
        return stringSet.MESSAGE_STATUS__YESTERDAY;
    }
    if (index.isThisYear(createdAt)) {
        return index$1.format(createdAt, stringSet.DATE_FORMAT__LAST_MESSAGE_CREATED_AT__THIS_YEAR, optionalParam);
    }
    return index$1.format(createdAt, stringSet.DATE_FORMAT__LAST_MESSAGE_CREATED_AT__PREVIOUS_YEAR, optionalParam);
}

function MessageSearchItem(_a) {
    var className = _a.className, message = _a.message, selected = _a.selected, onClick = _a.onClick;
    var createdAt = message.createdAt;
    var messageText = message.message;
    // @ts-ignore
    var sender = message.sender || message._sender;
    var profileUrl = sender.profileUrl, nickname = sender.nickname;
    var _b = LocalizationContext.useLocalization(), stringSet = _b.stringSet, dateLocale = _b.dateLocale;
    return (React__default.default.createElement("div", { className: _tslib.__spreadArray(_tslib.__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            'sendbird-message-search-item',
            selected ? 'sendbird-message-search-item--selected' : '',
        ], false).join(' '), onClick: function (e) {
            e.stopPropagation();
            onClick === null || onClick === void 0 ? void 0 : onClick(message);
        } },
        React__default.default.createElement("div", { className: "sendbird-message-search-item__left" },
            React__default.default.createElement(ui_Avatar.Avatar, { className: "sendbird-message-search-item__left__sender-avatar", src: profileUrl, alt: "profile image", width: "56px", height: "56px" })),
        React__default.default.createElement("div", { className: "sendbird-message-search-item__right" },
            React__default.default.createElement(ui_Label.Label, { className: "sendbird-message-search-item__right__sender-name", type: ui_Label.LabelTypography.SUBTITLE_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, nickname || stringSet.NO_NAME),
            React__default.default.createElement(ui_Label.Label, { className: "sendbird-message-search-item__right__message-text", type: ui_Label.LabelTypography.BODY_2, color: ui_Label.LabelColors.ONBACKGROUND_3 }, messageText),
            React__default.default.createElement(ui_Label.Label, { className: "sendbird-message-search-item__right__message-created-at", type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_2 }, getCreatedAt({ createdAt: createdAt, locale: dateLocale, stringSet: stringSet }))),
        React__default.default.createElement("div", { className: "sendbird-message-search-item__right-footer" })));
}

module.exports = MessageSearchItem;
//# sourceMappingURL=MessageSearchItem.js.map
