'use strict';

var _tslib = require('../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var ui_Avatar = require('../chunks/bundle-Dmsb_oex.js');
var ui_Icon = require('./Icon.js');
var ui_Label = require('../chunks/bundle-D8-2bEdY.js');
var LocalizationContext = require('../chunks/bundle-CmBrGegh.js');
var index$1 = require('../chunks/bundle-C3e9xkw6.js');
var index = require('../chunks/bundle-DSQevcAL.js');
var index$2 = require('../chunks/bundle-e2d_I3io.js');
var utils = require('../chunks/bundle-CMe3c_v7.js');
require('./ImageRenderer.js');
require('../chunks/bundle-BYHj6UqH.js');
require('../chunks/bundle-BvFqbvri.js');
require('../chunks/bundle-Q9YDOzjz.js');
require('../chunks/bundle-BCJ8mayg.js');
require('../chunks/bundle-BayL2H8_.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-4kwoH67w.js');
require('../chunks/bundle-C0tdWwa4.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function getCreatedAt(_a) {
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
function getIconOfFileType(message) {
    var _a, _b, _c;
    var fileMessageUrl = (_a = utils.getMessageFirstFileUrl(message)) !== null && _a !== void 0 ? _a : '';
    var fileExtension = (_c = (_b = (fileMessageUrl.match(/\.([^.]*?)(?=\?|#|$)/))) === null || _b === void 0 ? void 0 : _b[1]) !== null && _c !== void 0 ? _c : '';
    if (/(jpg|jpeg|png)$/i.test(fileExtension)) {
        return ui_Icon.IconTypes.PHOTO;
    }
    else if (/mp4$/i.test(fileExtension) || index$2.isVoiceMessage(message)) {
        return ui_Icon.IconTypes.PLAY;
    }
    else if (/mp3/i.test(fileExtension)) {
        return ui_Icon.IconTypes.FILE_AUDIO;
    }
    else if (/gif/i.test(fileExtension)) {
        return ui_Icon.IconTypes.GIF;
    }
    else {
        return ui_Icon.IconTypes.FILE_DOCUMENT;
    }
}

function MessageSearchFileItem(props) {
    var className = props.className, message = props.message, selected = props.selected, onClick = props.onClick;
    var createdAt = message.createdAt;
    var url = utils.getMessageFirstFileUrl(message);
    var name = utils.getMessageFirstFileName(message);
    // @ts-ignore
    var sender = message.sender || message._sender;
    var profileUrl = sender.profileUrl, nickname = sender.nickname;
    var _a = LocalizationContext.useLocalization(), stringSet = _a.stringSet, dateLocale = _a.dateLocale;
    var isVoiceMsg = index$2.isVoiceMessage(message);
    var prettyFilename = isVoiceMsg ? stringSet.VOICE_MESSAGE : (name || url);
    return (React__default.default.createElement("div", { className: _tslib.__spreadArray(_tslib.__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            'sendbird-message-search-file-item',
            selected ? 'sendbird-message-search-file-item--selected' : '',
        ], false).join(' '), onClick: function (e) {
            e.stopPropagation();
            onClick === null || onClick === void 0 ? void 0 : onClick(message);
        } },
        React__default.default.createElement("div", { className: "sendbird-message-search-file-item__left" },
            React__default.default.createElement(ui_Avatar.Avatar, { className: "sendbird-message-search-file-item__left__sender-avatar", src: profileUrl, alt: "profile image", width: "56px", height: "56px" })),
        React__default.default.createElement("div", { className: "sendbird-message-search-file-item__right" },
            React__default.default.createElement(ui_Label.Label, { className: "sendbird-message-search-file-item__right__sender-name", type: ui_Label.LabelTypography.SUBTITLE_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, nickname || stringSet.NO_NAME),
            React__default.default.createElement("div", { className: "sendbird-message-search-file-item__right__content" },
                !isVoiceMsg && (React__default.default.createElement("div", { className: 'sendbird-message-search-file-item__right__content__type-icon' },
                    React__default.default.createElement(ui_Icon.default, { type: getIconOfFileType(message), fillColor: ui_Icon.IconColors.PRIMARY, width: "18px", height: "18px" }))),
                React__default.default.createElement(ui_Label.Label, { className: "sendbird-message-search-file-item__right__content__url", type: ui_Label.LabelTypography.BODY_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, prettyFilename))),
        React__default.default.createElement(ui_Label.Label, { className: "sendbird-message-search-file-item__message-created-at", type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_2 }, getCreatedAt({ createdAt: createdAt, locale: dateLocale, stringSet: stringSet })),
        React__default.default.createElement("div", { className: "sendbird-message-search-file-item__right-footer" })));
}

module.exports = MessageSearchFileItem;
//# sourceMappingURL=MessageSearchFileItem.js.map
