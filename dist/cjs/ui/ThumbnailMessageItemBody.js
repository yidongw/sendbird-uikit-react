'use strict';

var _tslib = require('../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var ui_Icon = require('./Icon.js');
var ui_ImageRenderer = require('./ImageRenderer.js');
var index = require('../chunks/bundle-BLoixwYr.js');
var utils$1 = require('../chunks/bundle-Ck6ikNW6.js');
var useLongPress = require('../chunks/bundle-D_k3_Y_y.js');
var utils = require('../chunks/bundle-DEjC6RIv.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-Dr9yFtKa.js');
require('../chunks/bundle-C2CwvM-u.js');
require('../chunks/bundle-BD0wJiNh.js');
require('../chunks/bundle-DrIKAEHN.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function ThumbnailMessageItemBody(_a) {
    var _b, _c;
    var _d = _a.className, className = _d === void 0 ? '' : _d, message = _a.message, _e = _a.isByMe, isByMe = _e === void 0 ? false : _e, _f = _a.mouseHover, mouseHover = _f === void 0 ? false : _f, _g = _a.isReactionEnabled, isReactionEnabled = _g === void 0 ? false : _g, _h = _a.showFileViewer, showFileViewer = _h === void 0 ? utils$1.noop : _h, _j = _a.style, style = _j === void 0 ? {} : _j;
    var thumbnailUrl = utils.getMessageFirstFileThumbnailUrl(message);
    var _k = React.useState(false), imageRendered = _k[0], setImageRendered = _k[1];
    var onClickHandler = useLongPress.useLongPress({
        onLongPress: utils$1.noop,
        onClick: function () {
            if (index.isSentMessage(message)) {
                showFileViewer === null || showFileViewer === void 0 ? void 0 : showFileViewer(true);
            }
        },
    });
    return (React__default.default.createElement("div", _tslib.__assign({ className: index.getClassName([
            className,
            'sendbird-thumbnail-message-item-body',
            isByMe ? 'outgoing' : 'incoming',
            mouseHover ? 'mouse-hover' : '',
            (isReactionEnabled && ((_c = (_b = message.reactions) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0) > 0) ? 'reactions' : '',
        ]) }, onClickHandler),
        React__default.default.createElement(ui_ImageRenderer.default, { className: "sendbird-thumbnail-message-item-body__thumbnail", url: thumbnailUrl || utils.getMessageFirstFileUrl(message), alt: utils.getMessageFirstFileType(message), width: (style === null || style === void 0 ? void 0 : style.width) || '360px', height: (style === null || style === void 0 ? void 0 : style.height) || '270px', onLoad: function () { setImageRendered(true); }, placeHolder: function (_a) {
                var style = _a.style;
                return (React__default.default.createElement("div", { className: "sendbird-thumbnail-message-item-body__placeholder", style: style }));
            } }),
        (index.isVideoMessage(message) && !thumbnailUrl) && !imageRendered && (React__default.default.createElement("video", { className: "sendbird-thumbnail-message-item-body__video" },
            React__default.default.createElement("source", { src: utils.getMessageFirstFileUrl(message), type: utils.getMessageFirstFileType(message) }))),
        React__default.default.createElement("div", { className: "sendbird-thumbnail-message-item-body__image-cover" }),
        (index.isVideoMessage(message) || index.isGifMessage(message)) && (React__default.default.createElement("div", { className: "sendbird-thumbnail-message-item-body__icon-wrapper" },
            React__default.default.createElement("div", { className: "sendbird-thumbnail-message-item-body__icon-wrapper__icon" },
                React__default.default.createElement(ui_Icon.default, { type: index.isVideoMessage(message) ? ui_Icon.IconTypes.PLAY : ui_Icon.IconTypes.GIF, fillColor: ui_Icon.IconColors.THUMBNAIL_ICON, width: "34px", height: "34px" }))))));
}

module.exports = ThumbnailMessageItemBody;
//# sourceMappingURL=ThumbnailMessageItemBody.js.map
