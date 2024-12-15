import { a as __awaiter, b as __generator } from './bundle-HcNswZ5p.js';
import { p as pxToNumber } from './bundle-DkDQ1PWY.js';

var compressImage = function (_a) {
    var imageFile = _a.imageFile, compressionRate = _a.compressionRate, resizingWidth = _a.resizingWidth, resizingHeight = _a.resizingHeight, outputFormat = _a.outputFormat;
    var image = document.createElement('img');
    return new Promise(function (resolve, reject) {
        image.src = URL.createObjectURL(imageFile);
        image.onerror = reject;
        image.onload = function () {
            URL.revokeObjectURL(image.src);
            var canvas = document.createElement('canvas');
            var originWidth = image.width;
            var originHeight = image.height;
            var targetResizingWidth = (!resizingWidth || resizingWidth > originWidth) ? originWidth : resizingWidth;
            var targetResizingHeight = (!resizingHeight || resizingHeight > originHeight) ? originHeight : resizingHeight;
            var widthRatio = originWidth / targetResizingWidth;
            var heightRatio = originHeight / targetResizingHeight;
            /**
             * Set the target resizing values again with the calculated ratios
             * to use the impactful value, so the original images' ratio won't be broken.
             */
            if (widthRatio > heightRatio) {
                targetResizingHeight = originHeight / (resizingWidth ? widthRatio : 1);
            }
            else if (heightRatio > widthRatio) {
                targetResizingWidth = originWidth / (resizingHeight ? heightRatio : 1);
            }
            canvas.width = targetResizingWidth;
            canvas.height = targetResizingHeight;
            var ctx = canvas.getContext('2d');
            if (!ctx) {
                reject(new Error('Failed to get canvas 2d context'));
                return;
            }
            ctx.drawImage(image, 0, 0, targetResizingWidth, targetResizingHeight);
            // Change the file.name & file.type for converting file type
            var targetFileType = outputFormat === 'preserve' ? imageFile.type : "image/".concat(outputFormat);
            var targetSubtype = targetFileType.split('/').pop();
            var dotIndex = imageFile.name.lastIndexOf('.');
            // targetName = `fileName.targetSubtype`
            var targetName = "".concat(dotIndex === -1 ? imageFile.name : imageFile.name.substring(0, dotIndex), ".").concat(targetSubtype);
            ctx.canvas.toBlob(function (blob) {
                if (blob) {
                    var file = new File([blob], targetName, { type: targetFileType });
                    resolve(file);
                }
                else {
                    reject(new Error('Failed to compress image'));
                }
            }, targetFileType, compressionRate);
        };
    });
};
var compressImages = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var compressionRate, _c, outputFormat, resizingWidth, resizingHeight, result;
    var files = _b.files, logger = _b.logger, imageCompression = _b.imageCompression;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                compressionRate = imageCompression.compressionRate, _c = imageCompression.outputFormat, outputFormat = _c === void 0 ? 'preserve' : _c;
                resizingWidth = imageCompression.resizingWidth ? pxToNumber(imageCompression.resizingWidth) : undefined;
                resizingHeight = imageCompression.resizingHeight ? pxToNumber(imageCompression.resizingHeight) : undefined;
                result = {
                    failedIndexes: [],
                    compressedFiles: [],
                };
                if (!(Array.isArray(files) && files.length > 0)) {
                    logger === null || logger === void 0 ? void 0 : logger.warning('utils - compressImages: There are no files.', files);
                    return [2 /*return*/, result];
                }
                if (!compressionRate || compressionRate < 0 || 1 < compressionRate) {
                    logger === null || logger === void 0 ? void 0 : logger.warning('utils - compressImages: The compressionRate is not acceptable.', compressionRate);
                    return [2 /*return*/, result];
                }
                return [4 /*yield*/, Promise.all(files
                        .map(function (file, index) { return __awaiter(void 0, void 0, void 0, function () {
                        var compressedImage, err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'image/jpeg')) {
                                        logger === null || logger === void 0 ? void 0 : logger.warning('utils - compressImages: The fileType is not compressible.', { file: file, index: index });
                                        result.failedIndexes.push(index);
                                        result.compressedFiles.push(file);
                                        return [2 /*return*/];
                                    }
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, compressImage({
                                            imageFile: file,
                                            compressionRate: compressionRate,
                                            resizingWidth: resizingWidth,
                                            resizingHeight: resizingHeight,
                                            outputFormat: outputFormat,
                                        })];
                                case 2:
                                    compressedImage = _a.sent();
                                    result.compressedFiles.push(compressedImage);
                                    return [3 /*break*/, 4];
                                case 3:
                                    err_1 = _a.sent();
                                    result.compressedFiles.push(file);
                                    result.failedIndexes.push(index);
                                    logger === null || logger === void 0 ? void 0 : logger.warning('utils - compressImages: Failed to compress image file', { file: file, err: err_1 });
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); }))];
            case 1:
                _d.sent();
                logger === null || logger === void 0 ? void 0 : logger.info('utils - compressImages: Finished compressing images', result);
                return [2 /*return*/, result];
        }
    });
}); };

export { compressImages as c };
//# sourceMappingURL=bundle-HPKdeJ0K.js.map
