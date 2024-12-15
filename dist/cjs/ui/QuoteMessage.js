'use strict';

var React = require('react');
var ui_Icon = require('./Icon.js');
var ui_Label = require('../chunks/bundle-CAR4EIKs.js');
var ui_ImageRenderer = require('./ImageRenderer.js');
var LocalizationContext = require('../chunks/bundle-Cy1ruNzs.js');
var index = require('../chunks/bundle-BLoixwYr.js');
var utils = require('../chunks/bundle-DEjC6RIv.js');
require('../chunks/bundle-Bdr7xlea.js');
require('../chunks/bundle-Ck6ikNW6.js');
require('../chunks/bundle-Dio8pG-T.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-Dr9yFtKa.js');
require('../chunks/bundle-C2CwvM-u.js');
require('../chunks/bundle-BD0wJiNh.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function QuoteMessage(_a) {
    var _b;
    var _c, _d, _e, _f, _g, _h;
    var message = _a.message, _j = _a.userId, userId = _j === void 0 ? '' : _j, _k = _a.isByMe, isByMe = _k === void 0 ? false : _k, _l = _a.className, className = _l === void 0 ? '' : _l, _m = _a.isUnavailable, isUnavailable = _m === void 0 ? false : _m, onClick = _a.onClick;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var parentMessage = message.parentMessage;
    var parentMessageSender = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.sender;
    var parentMessageSenderNickname = (userId === (parentMessageSender === null || parentMessageSender === void 0 ? void 0 : parentMessageSender.userId)) ? stringSet.QUOTED_MESSAGE__CURRENT_USER : parentMessageSender === null || parentMessageSender === void 0 ? void 0 : parentMessageSender.nickname;
    var parentMessageUrl = utils.getMessageFirstFileUrl(parentMessage);
    var parentMessageType = utils.getMessageFirstFileType(parentMessage);
    var currentMessageSenderNickname = (userId === ((_c = message === null || message === void 0 ? void 0 : message.sender) === null || _c === void 0 ? void 0 : _c.userId)) ? stringSet.QUOTED_MESSAGE__CURRENT_USER : (_d = message === null || message === void 0 ? void 0 : message.sender) === null || _d === void 0 ? void 0 : _d.nickname;
    var _o = React.useState(false), isThumbnailLoaded = _o[0], setThumbnailLoaded = _o[1];
    var uikitFileTypes = index.getUIKitFileTypes();
    var splitFileName = (_f = (_e = utils.getMessageFirstFileName(parentMessage)) === null || _e === void 0 ? void 0 : _e.split('/')) !== null && _f !== void 0 ? _f : parentMessageUrl.split('/');
    return (React__default.default.createElement("div", { className: index.getClassName([className, 'sendbird-quote-message', isByMe ? 'outgoing' : 'incoming', isUnavailable ? 'unavailable' : '']), key: parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.messageId, onClick: function () {
            if (!isUnavailable && onClick) {
                onClick();
            }
        }, onTouchEnd: function () {
            if (!isUnavailable && onClick) {
                onClick();
            }
        } },
        React__default.default.createElement("div", { className: "sendbird-quote-message__replied-to" },
            React__default.default.createElement(ui_Icon.default, { className: "sendbird-quote-message__replied-to__icon", type: ui_Icon.IconTypes.REPLY, fillColor: ui_Icon.IconColors.ON_BACKGROUND_3, width: "12px", height: "12px" }),
            React__default.default.createElement(ui_Label.Label, { className: "sendbird-quote-message__replied-to__text", testID: "sendbird-quote-message__replied-to__text", type: ui_Label.LabelTypography.CAPTION_2, color: ui_Label.LabelColors.ONBACKGROUND_3 },
                React__default.default.createElement("span", { className: "sendbird-quote-message__replied-to__text__nickname" }, currentMessageSenderNickname),
                React__default.default.createElement("span", { className: "sendbird-quote-message__replied-to__text__text" }, stringSet.QUOTED_MESSAGE__REPLIED_TO),
                React__default.default.createElement("span", { className: "sendbird-quote-message__replied-to__text__nickname" }, parentMessageSenderNickname))),
        React__default.default.createElement("div", { className: "sendbird-quote-message__replied-message" },
            isUnavailable && (React__default.default.createElement("div", { className: "sendbird-quote-message__replied-message__text-message" },
                React__default.default.createElement(ui_Label.Label, { className: "sendbird-quote-message__replied-message__text-message__word", testID: "sendbird-quote-message__replied-message__text-message__word", type: ui_Label.LabelTypography.BODY_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.QUOTED_MESSAGE__UNAVAILABLE))),
            ((index.isUserMessage(parentMessage) && ((_g = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.message) === null || _g === void 0 ? void 0 : _g.length) > 0) && !isUnavailable) && (React__default.default.createElement("div", { className: "sendbird-quote-message__replied-message__text-message" },
                React__default.default.createElement(ui_Label.Label, { className: "sendbird-quote-message__replied-message__text-message__word", testID: "sendbird-quote-message__replied-message__text-message__word", type: ui_Label.LabelTypography.BODY_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.message))),
            (index.isVoiceMessage(parentMessage) && parentMessageUrl && !isUnavailable) && (React__default.default.createElement("div", { className: "sendbird-quote-message__replied-message__text-message" },
                React__default.default.createElement(ui_Label.Label, { className: "sendbird-quote-message__replied-message__text-message__word", testID: "sendbird-quote-message__replied-message__text-message__word", type: ui_Label.LabelTypography.BODY_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.VOICE_MESSAGE))),
            ((index.isThumbnailMessage(parentMessage)
                || index.isMultipleFilesMessage(parentMessage))
                && parentMessageUrl
                && !isUnavailable) && (React__default.default.createElement("div", { className: "sendbird-quote-message__replied-message__thumbnail-message" },
                React__default.default.createElement(ui_ImageRenderer.default, { className: "sendbird-quote-message__replied-message__thumbnail-message__image", url: parentMessageUrl, alt: parentMessageType, width: "144px", height: "108px", onLoad: function () { return setThumbnailLoaded(true); }, defaultComponent: (React__default.default.createElement("div", { className: "sendbird-quote-message__replied-message__thumbnail-message__placeholder" },
                        React__default.default.createElement("div", { className: "sendbird-quote-message__replied-message__thumbnail-message__placeholder__icon" },
                            React__default.default.createElement(ui_Icon.default, { type: index.isVideo(parentMessageType) ? ui_Icon.IconTypes.PLAY : ui_Icon.IconTypes.PHOTO, fillColor: ui_Icon.IconColors.ON_BACKGROUND_2, width: "22px", height: "22px" })))) }),
                (index.isVideo(parentMessageType) && !(((_h = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.thumbnails) === null || _h === void 0 ? void 0 : _h.length) > 0)) && (React__default.default.createElement(React__default.default.Fragment, null,
                    React__default.default.createElement("video", { className: "sendbird-quote-message__replied-message__thumbnail-message__video" },
                        React__default.default.createElement("source", { src: parentMessageUrl, type: parentMessageType })),
                    React__default.default.createElement("div", { className: "sendbird-quote-message__replied-message__thumbnail-message__cover" },
                        React__default.default.createElement("div", { className: "sendbird-quote-message__replied-message__thumbnail-message__cover__icon" },
                            React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.PLAY, fillColor: ui_Icon.IconColors.ON_BACKGROUND_2, width: "14px", height: "14px" }))))),
                (isThumbnailLoaded && index.isGif(parentMessageType)) && (React__default.default.createElement("div", { className: "sendbird-quote-message__replied-message__thumbnail-message__cover" },
                    React__default.default.createElement("div", { className: "sendbird-quote-message__replied-message__thumbnail-message__cover__icon" },
                        React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.GIF, fillColor: ui_Icon.IconColors.THUMBNAIL_ICON, width: "14px", height: "14px" })))))),
            (index.getUIKitMessageType(parentMessage) === index.UIKitMessageTypes.FILE && parentMessageUrl && !isUnavailable) && (React__default.default.createElement("div", { className: "sendbird-quote-message__replied-message__file-message" },
                React__default.default.createElement(ui_Icon.default, { className: "sendbird-quote-message__replied-message__file-message__type-icon", type: (_b = {},
                        _b[uikitFileTypes.IMAGE] = ui_Icon.IconTypes.PHOTO,
                        _b[uikitFileTypes.VIDEO] = ui_Icon.IconTypes.PLAY,
                        _b[uikitFileTypes.AUDIO] = ui_Icon.IconTypes.FILE_AUDIO,
                        _b[uikitFileTypes.GIF] = ui_Icon.IconTypes.GIF,
                        _b[uikitFileTypes.OTHERS] = ui_Icon.IconTypes.FILE_DOCUMENT,
                        _b)[index.getUIKitFileType(parentMessageType)], fillColor: ui_Icon.IconColors.ON_BACKGROUND_3, width: "16px", height: "16px" }),
                React__default.default.createElement(ui_Label.Label, { className: "sendbird-quote-message__replied-message__file-message__file-name", type: ui_Label.LabelTypography.BODY_2, color: ui_Label.LabelColors.ONBACKGROUND_3 }, index.truncateString(splitFileName[splitFileName.length - 1])))))));
}

module.exports = QuoteMessage;
//# sourceMappingURL=QuoteMessage.js.map
