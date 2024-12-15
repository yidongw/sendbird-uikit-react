import React__default, { useState, useMemo, useRef, useEffect } from 'react';
import { a as __awaiter, b as __generator, _ as __assign } from './bundle-HcNswZ5p.js';
import { SendingStatus } from '@sendbird/chat/message';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import Icon, { IconTypes, IconColors } from '../ui/Icon.js';
import ImageRenderer, { getBorderRadiusForMultipleImageRenderer } from '../ui/ImageRenderer.js';
import { y as getClassName, A as isGif, K } from './bundle-Bd-i99nk.js';
import FileViewer from '../ui/FileViewer.js';

function ImageGrid(_a) {
    var _b;
    var children = _a.children, className = _a.className, message = _a.message, isReactionEnabled = _a.isReactionEnabled;
    return (React__default.createElement("div", { className: 'sendbird-image-grid-wrap' },
        React__default.createElement("div", { className: getClassName([
                className !== null && className !== void 0 ? className : '',
                'sendbird-image-grid',
                (isReactionEnabled && ((_b = message === null || message === void 0 ? void 0 : message.reactions) === null || _b === void 0 ? void 0 : _b.length) > 0) ? 'reactions' : '',
            ]) }, children)));
}

var GRID_WIDTH_CHAT_WEB = 400;
var GRID_SIDE_PADDING = 8;
var GRID_GAP = 4;
var TIMESTAMP_WIDTH_AND_ITS_SIDE_MARGIN = 54;
var PROFILE_IMAGE_WIDTH = 40;
var CHAT_MOBILE_SIDE_PADDING = 48;
var THREAD_PARENT_WIDTH = 320;
var THREAD_PARENT_SIDE_PADDING = 28;
var THREAD_PARENT_GRID_MARGIN_LEFT = 12;
var THREAD_CHILD_WIDTH = 200;
var THREAD_CHILD_SIDE_PADDING = 8;
var THREAD_CHILD_MOBILE_SIDE_PADDING = 32;
var THREAD_CHILD_MOBILE_TIMESTAMP_WIDTH_AND_ITS_SIDE_MARGIN = 60;
var MULTIPLE_FILES_IMAGE_SIDE_LENGTH = {
    CHAT_WEB: "calc(".concat(GRID_WIDTH_CHAT_WEB / 2, "px - ").concat((GRID_SIDE_PADDING + GRID_GAP) / 2, "px)"),
    CHAT_MOBILE: "calc(50vw - ".concat((CHAT_MOBILE_SIDE_PADDING + PROFILE_IMAGE_WIDTH + TIMESTAMP_WIDTH_AND_ITS_SIDE_MARGIN + GRID_SIDE_PADDING + GRID_GAP) / 2, "px)"),
    THREAD_PARENT_WEB: "calc(".concat((THREAD_PARENT_WIDTH - (THREAD_PARENT_SIDE_PADDING + PROFILE_IMAGE_WIDTH + THREAD_PARENT_GRID_MARGIN_LEFT + GRID_GAP)) / 2, "px)"),
    THREAD_PARENT_MOBILE: "calc(50vw - ".concat((THREAD_PARENT_SIDE_PADDING + PROFILE_IMAGE_WIDTH + THREAD_PARENT_GRID_MARGIN_LEFT + GRID_GAP) / 2, "px)"),
    THREAD_CHILD_WEB: "calc(".concat((THREAD_CHILD_WIDTH - THREAD_CHILD_SIDE_PADDING - GRID_GAP) / 2, "px)"),
    THREAD_CHILD_MOBILE: "calc(50vw - ".concat((THREAD_CHILD_MOBILE_SIDE_PADDING + PROFILE_IMAGE_WIDTH + THREAD_CHILD_MOBILE_TIMESTAMP_WIDTH_AND_ITS_SIDE_MARGIN + GRID_SIDE_PADDING + GRID_GAP) / 2, "px)"),
};
var MULTIPLE_FILES_IMAGE_BORDER_RADIUS = {
    CHAT_WEB: '6px',
    CHAT_MOBILE: '6px',
    THREAD_PARENT_WEB: '6px',
    THREAD_PARENT_MOBILE: '6px',
    THREAD_CHILD_WEB: '6px',
    THREAD_CHILD_MOBILE: '6px',
};
var MULTIPLE_FILES_IMAGE_THUMBNAIL_SIDE_LENGTH = '34px';

var ThreadMessageKind = {
    PARENT: 'parent',
    CHILD: 'child',
};
function MultipleFilesMessageItemBody(_a) {
    var _this = this;
    var _b, _c;
    var className = _a.className, message = _a.message, _d = _a.isReactionEnabled, isReactionEnabled = _d === void 0 ? false : _d, threadMessageKindKey = _a.threadMessageKindKey, _e = _a.statefulFileInfoList, statefulFileInfoList = _e === void 0 ? [] : _e, _f = _a.onBeforeDownloadFileMessage, onBeforeDownloadFileMessage = _f === void 0 ? null : _f;
    var logger = (_c = (_b = useSendbirdStateContext === null || useSendbirdStateContext === void 0 ? void 0 : useSendbirdStateContext()) === null || _b === void 0 ? void 0 : _b.config) === null || _c === void 0 ? void 0 : _c.logger;
    var _g = useState(-1), currentFileViewerIndex = _g[0], setCurrentFileViewerIndex = _g[1];
    function onClose() {
        setCurrentFileViewerIndex(-1);
    }
    function onClickLeft() {
        setCurrentFileViewerIndex(currentFileViewerIndex === 0 ? statefulFileInfoList.length - 1 : currentFileViewerIndex - 1);
    }
    function onClickRight() {
        setCurrentFileViewerIndex(currentFileViewerIndex === statefulFileInfoList.length - 1 ? 0 : currentFileViewerIndex + 1);
    }
    return (threadMessageKindKey ? (React__default.createElement(React__default.Fragment, null,
        currentFileViewerIndex > -1 && (React__default.createElement(FileViewer, { message: message, statefulFileInfoList: statefulFileInfoList, currentIndex: currentFileViewerIndex, onClickLeft: onClickLeft, onClickRight: onClickRight, onClose: onClose, onDownloadClick: function (e) { return __awaiter(_this, void 0, void 0, function () {
                var allowDownload, err_1;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!onBeforeDownloadFileMessage)
                                return [2 /*return*/];
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, onBeforeDownloadFileMessage({ message: message, index: currentFileViewerIndex })];
                        case 2:
                            allowDownload = _c.sent();
                            if (!allowDownload) {
                                e.preventDefault();
                                (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'MultipleFilesMessageItemBody: Not allowed to download.');
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _c.sent();
                            (_b = logger === null || logger === void 0 ? void 0 : logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, 'MultipleFilesMessageItemBody: Error occurred while determining download continuation:', err_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); } })),
        React__default.createElement(ImageGrid, { className: className, message: message, isReactionEnabled: isReactionEnabled }, statefulFileInfoList.map(function (fileInfo, index) {
            var _a, _b, _c, _d;
            return (React__default.createElement("div", { className: "sendbird-multiple-files-image-renderer-wrapper", onClick: message.sendingStatus === SendingStatus.SUCCEEDED ? function () { return setCurrentFileViewerIndex(index); } : undefined, key: "sendbird-multiple-files-image-renderer-".concat(index, "-").concat(fileInfo.url) },
                React__default.createElement(ImageRenderer, { url: (_d = (_c = (_b = (_a = fileInfo.thumbnails) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.url) !== null && _c !== void 0 ? _c : fileInfo.url) !== null && _d !== void 0 ? _d : '', fixedSize: false, width: MULTIPLE_FILES_IMAGE_SIDE_LENGTH[threadMessageKindKey], maxSideLength: MULTIPLE_FILES_IMAGE_SIDE_LENGTH.CHAT_WEB, height: MULTIPLE_FILES_IMAGE_SIDE_LENGTH[threadMessageKindKey], borderRadius: getBorderRadiusForMultipleImageRenderer(MULTIPLE_FILES_IMAGE_BORDER_RADIUS[threadMessageKindKey], index, statefulFileInfoList.length), shadeOnHover: true, isUploaded: !!fileInfo.isUploaded, placeHolder: function (_a) {
                        var style = _a.style;
                        if (fileInfo.mimeType && isGif(fileInfo.mimeType))
                            return React__default.createElement(ImagePlaceholder.GIF, { style: style });
                        return React__default.createElement(ImagePlaceholder.Default, { style: style });
                    }, defaultComponent: React__default.createElement(ImagePlaceholder.LoadError, null) })));
        })))) : React__default.createElement(React__default.Fragment, null));
}
var ImagePlaceholder = {
    Default: function (_a) {
        var style = _a.style;
        return (React__default.createElement("div", { className: "sendbird-multiple-files-image-renderer__thumbnail__placeholder", style: style },
            React__default.createElement(Icon, { type: IconTypes.PHOTO, fillColor: IconColors.ON_BACKGROUND_2, width: MULTIPLE_FILES_IMAGE_THUMBNAIL_SIDE_LENGTH, height: MULTIPLE_FILES_IMAGE_THUMBNAIL_SIDE_LENGTH })));
    },
    GIF: function (_a) {
        var style = _a.style;
        return (React__default.createElement("div", { className: "sendbird-multiple-files-image-renderer__thumbnail__placeholder", style: style },
            React__default.createElement("div", { className: "sendbird-multiple-files-image-renderer__thumbnail__placeholder__icon" },
                React__default.createElement(Icon, { type: IconTypes.GIF, fillColor: IconColors.THUMBNAIL_ICON, width: MULTIPLE_FILES_IMAGE_THUMBNAIL_SIDE_LENGTH, height: MULTIPLE_FILES_IMAGE_THUMBNAIL_SIDE_LENGTH }))));
    },
    LoadError: function () { return (React__default.createElement("div", { className: "sendbird-multiple-files-image-renderer__thumbnail__placeholder" },
        React__default.createElement(Icon, { type: IconTypes.THUMBNAIL_NONE, fillColor: IconColors.ON_BACKGROUND_2, width: MULTIPLE_FILES_IMAGE_THUMBNAIL_SIDE_LENGTH, height: MULTIPLE_FILES_IMAGE_THUMBNAIL_SIDE_LENGTH }))); },
};

function useThreadMessageKindKeySelector(_a) {
    var threadMessageKind = _a.threadMessageKind, isMobile = _a.isMobile;
    var threadMessageKindKey = useMemo(function () {
        return K(threadMessageKind)
            .with(ThreadMessageKind.PARENT, function () { return (isMobile
            ? 'THREAD_PARENT_MOBILE'
            : 'THREAD_PARENT_WEB'); })
            .with(ThreadMessageKind.CHILD, function () { return (isMobile
            ? 'THREAD_CHILD_MOBILE'
            : 'THREAD_CHILD_WEB'); })
            .otherwise(function () { return (isMobile
            ? 'CHAT_MOBILE'
            : 'CHAT_WEB'); });
    }, [isMobile, threadMessageKind]);
    return threadMessageKindKey;
}

// SendingStatus.SCHEDULED is currently not covered in UIKit
//  So we can ignore for now, but for future, it is better to explicitly use PENDING, FAILED, or CANCELED.
var useFileInfoListWithUploaded = function (message) {
    var _a, _b;
    var blobHandler = useRef(new Map());
    var getObjectURL = function (index, blob) {
        if (!blobHandler.current.has(index) && blob)
            blobHandler.current.set(index, URL.createObjectURL(blob));
        return blobHandler.current.get(index);
    };
    var revokeURLs = function () {
        if (blobHandler.current.size > 0) {
            blobHandler.current.forEach(function (url) { return URL.revokeObjectURL(url); });
            blobHandler.current.clear();
        }
    };
    useEffect(function () {
        return function () { return revokeURLs(); };
    }, []);
    if (!message || !message.isMultipleFilesMessage || !message.isMultipleFilesMessage()) {
        return [];
    }
    else if (message.sendingStatus === SendingStatus.SUCCEEDED) {
        revokeURLs();
        return message.fileInfoList.map(function (it) {
            var _a, _b;
            return (__assign(__assign({}, it), { url: it.url, isUploaded: true, mimeType: (_a = it.mimeType) !== null && _a !== void 0 ? _a : undefined, fileName: (_b = it.fileName) !== null && _b !== void 0 ? _b : undefined }));
        });
    }
    else {
        return (_b = (_a = message === null || message === void 0 ? void 0 : message.messageParams) === null || _a === void 0 ? void 0 : _a.fileInfoList.map(function (it, index) {
            var _a, _b;
            return (__assign(__assign({}, it), { url: (_b = (_a = getObjectURL(index)) !== null && _a !== void 0 ? _a : it.fileUrl) !== null && _b !== void 0 ? _b : (it.file instanceof Blob ? getObjectURL(index, it.file) : undefined), isUploaded: !it.file && typeof it.fileUrl === 'string' && it.fileUrl.length > 0 }));
        })) !== null && _b !== void 0 ? _b : [];
    }
};

export { MultipleFilesMessageItemBody as M, ThreadMessageKind as T, useFileInfoListWithUploaded as a, useThreadMessageKindKeySelector as u };
//# sourceMappingURL=bundle-CW5sRqha.js.map
