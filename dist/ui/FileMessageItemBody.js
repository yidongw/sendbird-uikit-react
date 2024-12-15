import { a as __awaiter, b as __generator } from '../chunks/bundle-HcNswZ5p.js';
import React__default from 'react';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-Qkp2VIaZ.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import TextButton from './TextButton.js';
import { y as getClassName, p as getUIKitFileType, t as truncateString } from '../chunks/bundle-Bd-i99nk.js';
import { C as Colors } from '../chunks/bundle-DGMsaaNU.js';
import { u as useMediaQueryContext } from '../chunks/bundle-DnSobLtx.js';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import { o as openURL } from '../chunks/bundle-0WaCg6X7.js';
import '../chunks/bundle-dybWaw0v.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-DjLJFwD7.js';
import '../chunks/bundle-DB7YSrIT.js';
import '../chunks/bundle-DQk0aENq.js';
import '../withSendbird.js';

function FileMessageItemBody(_a) {
    var _this = this;
    var _b, _c, _d;
    var _e = _a.className, className = _e === void 0 ? '' : _e, message = _a.message, _f = _a.isByMe, isByMe = _f === void 0 ? false : _f, _g = _a.mouseHover, mouseHover = _g === void 0 ? false : _g, _h = _a.isReactionEnabled, isReactionEnabled = _h === void 0 ? false : _h, truncateLimit = _a.truncateLimit, onBeforeDownloadFileMessage = _a.onBeforeDownloadFileMessage;
    var logger = null;
    try {
        logger = (_c = (_b = useSendbirdStateContext()) === null || _b === void 0 ? void 0 : _b.config) === null || _c === void 0 ? void 0 : _c.logger;
    }
    catch (err) {
        // TODO: Handle error
    }
    var isMobile = useMediaQueryContext().isMobile;
    var truncateMaxNum = truncateLimit !== null && truncateLimit !== void 0 ? truncateLimit : (isMobile ? 20 : undefined);
    var downloadFileWithUrl = function () { return openURL(message === null || message === void 0 ? void 0 : message.url); };
    var handleOnClickTextButton = onBeforeDownloadFileMessage
        ? function () { return __awaiter(_this, void 0, void 0, function () {
            var allowDownload, err_1;
            var _a, _b;
            return __generator(this, function (_c) {
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
    return (React__default.createElement("div", { className: getClassName([
            className,
            'sendbird-file-message-item-body',
            isByMe ? 'outgoing' : 'incoming',
            mouseHover ? 'mouse-hover' : '',
            (isReactionEnabled && ((_d = message === null || message === void 0 ? void 0 : message.reactions) === null || _d === void 0 ? void 0 : _d.length) > 0) ? 'reactions' : '',
        ]) },
        React__default.createElement("div", { className: "sendbird-file-message-item-body__file-icon" },
            React__default.createElement(Icon, { className: "sendbird-file-message-item-body__file-icon__icon", type: {
                    IMAGE: IconTypes.PHOTO,
                    VIDEO: IconTypes.PLAY,
                    AUDIO: IconTypes.FILE_AUDIO,
                    GIF: IconTypes.GIF,
                    OTHERS: IconTypes.FILE_DOCUMENT,
                }[getUIKitFileType(message === null || message === void 0 ? void 0 : message.type)], fillColor: IconColors.PRIMARY, width: "24px", height: "24px" })),
        React__default.createElement(TextButton, { className: "sendbird-file-message-item-body__file-name", onClick: handleOnClickTextButton, color: isByMe ? Colors.ONCONTENT_1 : Colors.ONBACKGROUND_1 },
            React__default.createElement(Label, { className: "sendbird-file-message-item-body__file-name__text", testID: "sendbird-file-message-item-body__file-name__text", type: LabelTypography.BODY_1, color: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1 }, truncateString((message === null || message === void 0 ? void 0 : message.name) || (message === null || message === void 0 ? void 0 : message.url), truncateMaxNum)))));
}

export { FileMessageItemBody as default };
//# sourceMappingURL=FileMessageItemBody.js.map
