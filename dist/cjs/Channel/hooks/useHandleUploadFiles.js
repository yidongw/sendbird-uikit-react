'use strict';

var _tslib = require('../../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var index = require('../../chunks/bundle-BLoixwYr.js');
var ui_Modal = require('../../chunks/bundle-DZhkNDpN.js');
require('../../chunks/bundle-CAR4EIKs.js');
var ui_Button = require('../../ui/Button.js');
var LocalizationContext = require('../../chunks/bundle-Cy1ruNzs.js');
var compressImages = require('../../chunks/bundle-BdRSDnh9.js');
var consts = require('../../chunks/bundle-BD0wJiNh.js');
require('../../withSendbird.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-Ck6ikNW6.js');
require('react-dom');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../ui/IconButton.js');
require('../../ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../chunks/bundle-B4PTJ_bJ.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var useHandleUploadFiles = function (_a, _b) {
    var sendFileMessage = _a.sendFileMessage, sendMultipleFilesMessage = _a.sendMultipleFilesMessage, quoteMessage = _a.quoteMessage;
    var logger = _b.logger;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var imageCompression = config.imageCompression;
    var uikitUploadSizeLimit = config === null || config === void 0 ? void 0 : config.uikitUploadSizeLimit;
    var uikitMultipleFilesMessageLimit = config === null || config === void 0 ? void 0 : config.uikitMultipleFilesMessageLimit;
    var openModal = ui_Modal.useGlobalModalContext().openModal;
    var handleUploadFiles = React.useCallback(function (files) { return _tslib.__awaiter(void 0, void 0, void 0, function () {
        var compressedFiles, sendingFiles, file, imageFiles_1, otherFiles_1;
        return _tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Validate Parameters
                    if (!sendFileMessage || !sendMultipleFilesMessage) {
                        logger.warning('Channel|useHandleUploadFiles: required functions are undefined', { sendFileMessage: sendFileMessage, sendMultipleFilesMessage: sendMultipleFilesMessage });
                        return [2 /*return*/];
                    }
                    if (files.length === 0) {
                        logger.warning('Channel|useHandleUploadFiles: given file list is empty.', { files: files });
                        return [2 /*return*/];
                    }
                    if (files.length > uikitMultipleFilesMessageLimit) {
                        logger.info("Channel|useHandleUploadFiles: Cannot upload files more than ".concat(uikitMultipleFilesMessageLimit));
                        openModal({
                            modalProps: {
                                titleText: stringSet.FILE_UPLOAD_NOTIFICATION__COUNT_LIMIT.replace('%d', "".concat(uikitMultipleFilesMessageLimit)),
                                hideFooter: true,
                            },
                            childElement: function (_a) {
                                var closeModal = _a.closeModal;
                                return (React__default.default.createElement(ui_Modal.ModalFooter, { type: ui_Button.ButtonTypes.PRIMARY, submitText: stringSet.BUTTON__OK, hideCancelButton: true, onCancel: closeModal, onSubmit: closeModal }));
                            },
                        });
                        return [2 /*return*/];
                    }
                    /**
                     * Validate file sizes
                     * The default value of uikitUploadSizeLimit is 25MiB
                     */
                    if (files.some(function (file) { return file.size > uikitUploadSizeLimit; })) {
                        logger.info("Channel|useHandleUploadFiles: Cannot upload file size exceeding ".concat(uikitUploadSizeLimit));
                        openModal({
                            modalProps: {
                                titleText: stringSet.FILE_UPLOAD_NOTIFICATION__SIZE_LIMIT.replace('%d', "".concat(Math.floor(uikitUploadSizeLimit / consts.ONE_MiB))),
                                hideFooter: true,
                            },
                            childElement: function (_a) {
                                var closeModal = _a.closeModal;
                                return (React__default.default.createElement(ui_Modal.ModalFooter, { type: ui_Button.ButtonTypes.PRIMARY, submitText: stringSet.BUTTON__OK, hideCancelButton: true, onCancel: closeModal, onSubmit: closeModal }));
                            },
                        });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, compressImages.compressImages({
                            files: files,
                            imageCompression: imageCompression,
                            logger: logger,
                        })];
                case 1:
                    compressedFiles = (_a.sent()).compressedFiles;
                    sendingFiles = compressedFiles;
                    // Send File Message
                    if (sendingFiles.length === 1) {
                        logger.info('Channel|useHandleUploadFiles: sending one file.');
                        file = sendingFiles[0];
                        sendFileMessage(file, quoteMessage);
                    }
                    else if (sendingFiles.length > 1) {
                        logger.info('Channel|useHandleUploadFiles: sending multiple files.');
                        imageFiles_1 = [];
                        otherFiles_1 = [];
                        sendingFiles.forEach(function (file) {
                            if (index.isImage(file.type)) {
                                imageFiles_1.push(file);
                            }
                            else {
                                otherFiles_1.push(file);
                            }
                        });
                        return [2 /*return*/, otherFiles_1.reduce(function (previousPromise, item) {
                                return previousPromise.then(function () {
                                    return sendFileMessage(item, quoteMessage);
                                });
                            }, (function () {
                                if (imageFiles_1.length === 0) {
                                    return Promise.resolve();
                                }
                                else if (imageFiles_1.length === 1) {
                                    return sendFileMessage(imageFiles_1[0], quoteMessage);
                                }
                                else {
                                    return sendMultipleFilesMessage(imageFiles_1, quoteMessage);
                                }
                            })())];
                    }
                    return [2 /*return*/];
            }
        });
    }); }, [
        sendFileMessage,
        sendMultipleFilesMessage,
        quoteMessage,
    ]);
    return handleUploadFiles;
};

exports.useHandleUploadFiles = useHandleUploadFiles;
//# sourceMappingURL=useHandleUploadFiles.js.map
