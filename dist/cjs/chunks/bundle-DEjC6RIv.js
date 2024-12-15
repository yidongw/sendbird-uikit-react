'use strict';

var index = require('./bundle-BLoixwYr.js');

function getMessageFirstFileType(message) {
    return index.K(message)
        .when(index.isFileMessage, function () {
        var _a;
        return (_a = message === null || message === void 0 ? void 0 : message.type) !== null && _a !== void 0 ? _a : '';
    })
        .when(index.isMultipleFilesMessage, function () {
        var _a, _b;
        return (_b = (_a = getFirstFileInfo(message)) === null || _a === void 0 ? void 0 : _a.mimeType) !== null && _b !== void 0 ? _b : '';
    })
        .otherwise(function () {
        return '';
    });
}
function getFirstFileInfo(message) {
    var fileInfoList = message.fileInfoList;
    return fileInfoList.length > 0 ? fileInfoList[0] : null;
}
function getMessageFirstFileName(message) {
    return index.K(message)
        .when(index.isFileMessage, function () {
        var _a;
        return (_a = message === null || message === void 0 ? void 0 : message.name) !== null && _a !== void 0 ? _a : '';
    })
        .when(index.isMultipleFilesMessage, function () {
        var _a, _b;
        return (_b = (_a = getFirstFileInfo(message)) === null || _a === void 0 ? void 0 : _a.fileName) !== null && _b !== void 0 ? _b : '';
    })
        .otherwise(function () {
        return '';
    });
}
function getMessageFirstFileUrl(message) {
    return index.K(message)
        .when(index.isFileMessage, function () {
        var _a;
        return (_a = message === null || message === void 0 ? void 0 : message.url) !== null && _a !== void 0 ? _a : '';
    })
        .when(index.isMultipleFilesMessage, function () {
        var _a, _b;
        return (_b = (_a = getFirstFileInfo(message)) === null || _a === void 0 ? void 0 : _a.url) !== null && _b !== void 0 ? _b : '';
    })
        .otherwise(function () {
        return '';
    });
}
function getMessageFirstFileThumbnails(message) {
    return index.K(message)
        .when(index.isFileMessage, function () {
        return message.thumbnails;
    })
        .when(index.isMultipleFilesMessage, function () {
        var _a, _b;
        return (_b = (_a = getFirstFileInfo(message)) === null || _a === void 0 ? void 0 : _a.thumbnails) !== null && _b !== void 0 ? _b : [];
    })
        .otherwise(function () {
        return [];
    });
}
function getMessageFirstFileThumbnailUrl(message) {
    var thumbnails = getMessageFirstFileThumbnails(message);
    return (thumbnails && thumbnails.length > 0) ? thumbnails[0].url : '';
}

exports.getMessageFirstFileName = getMessageFirstFileName;
exports.getMessageFirstFileThumbnailUrl = getMessageFirstFileThumbnailUrl;
exports.getMessageFirstFileType = getMessageFirstFileType;
exports.getMessageFirstFileUrl = getMessageFirstFileUrl;
//# sourceMappingURL=bundle-DEjC6RIv.js.map
