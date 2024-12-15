'use strict';

var _tslib = require('../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var ui_Label = require('../chunks/bundle-D8-2bEdY.js');
var ui_Icon = require('./Icon.js');
var ui_TextButton = require('./TextButton.js');
var index = require('../chunks/bundle-e2d_I3io.js');
var color = require('../chunks/bundle-LSLwWEwG.js');
var MediaQueryContext = require('../chunks/bundle-CzcmYPsN.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var utils = require('../chunks/bundle-BYHj6UqH.js');
require('../chunks/bundle-Q9YDOzjz.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-4kwoH67w.js');
require('../chunks/bundle-BCJ8mayg.js');
require('../chunks/bundle-C0tdWwa4.js');
require('../withSendbird.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function FileMessageItemBody(_a) {
    var _this = this;
    var _b, _c, _d;
    var _e = _a.className, className = _e === void 0 ? '' : _e, message = _a.message, _f = _a.isByMe, isByMe = _f === void 0 ? false : _f, _g = _a.mouseHover, mouseHover = _g === void 0 ? false : _g, _h = _a.isReactionEnabled, isReactionEnabled = _h === void 0 ? false : _h, truncateLimit = _a.truncateLimit, onBeforeDownloadFileMessage = _a.onBeforeDownloadFileMessage;
    var logger = null;
    try {
        logger = (_c = (_b = useSendbirdStateContext.useSendbirdStateContext()) === null || _b === void 0 ? void 0 : _b.config) === null || _c === void 0 ? void 0 : _c.logger;
    }
    catch (err) {
        // TODO: Handle error
    }
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    var truncateMaxNum = truncateLimit !== null && truncateLimit !== void 0 ? truncateLimit : (isMobile ? 20 : undefined);
    var downloadFileWithUrl = function () { return utils.openURL(message === null || message === void 0 ? void 0 : message.url); };
    var handleOnClickTextButton = onBeforeDownloadFileMessage
        ? function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
            var allowDownload, err_1;
            var _a, _b;
            return _tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, onBeforeDownloadFileMessage({ message: message })];
                    case 1:
                        allowDownload = _c.sent();
                        if (allowDownload) {
                            downloadFileWithUrl();
                        }
                        else {
                            (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'FileMessageItemBody: Not allowed to download.');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _c.sent();
                        (_b = logger === null || logger === void 0 ? void 0 : logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, 'FileMessageItemBody: Error occurred while determining download continuation:', err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); }
        : downloadFileWithUrl;
    return (React__default.default.createElement("div", { className: index.getClassName([
            className,
            'sendbird-file-message-item-body',
            isByMe ? 'outgoing' : 'incoming',
            mouseHover ? 'mouse-hover' : '',
            (isReactionEnabled && ((_d = message === null || message === void 0 ? void 0 : message.reactions) === null || _d === void 0 ? void 0 : _d.length) > 0) ? 'reactions' : '',
        ]) },
        React__default.default.createElement("div", { className: "sendbird-file-message-item-body__file-icon" },
            React__default.default.createElement(ui_Icon.default, { className: "sendbird-file-message-item-body__file-icon__icon", type: {
                    IMAGE: ui_Icon.IconTypes.PHOTO,
                    VIDEO: ui_Icon.IconTypes.PLAY,
                    AUDIO: ui_Icon.IconTypes.FILE_AUDIO,
                    GIF: ui_Icon.IconTypes.GIF,
                    OTHERS: ui_Icon.IconTypes.FILE_DOCUMENT,
                }[index.getUIKitFileType(message === null || message === void 0 ? void 0 : message.type)], fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" })),
        React__default.default.createElement(ui_TextButton, { className: "sendbird-file-message-item-body__file-name", onClick: handleOnClickTextButton, color: isByMe ? color.Colors.ONCONTENT_1 : color.Colors.ONBACKGROUND_1 },
            React__default.default.createElement(ui_Label.Label, { className: "sendbird-file-message-item-body__file-name__text", testID: "sendbird-file-message-item-body__file-name__text", type: ui_Label.LabelTypography.BODY_1, color: isByMe ? ui_Label.LabelColors.ONCONTENT_1 : ui_Label.LabelColors.ONBACKGROUND_1 }, index.truncateString((message === null || message === void 0 ? void 0 : message.name) || (message === null || message === void 0 ? void 0 : message.url), truncateMaxNum)))));
}

module.exports = FileMessageItemBody;
//# sourceMappingURL=FileMessageItemBody.js.map
