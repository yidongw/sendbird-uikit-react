'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var FileViewerView = require('../../chunks/bundle-D-EFC7w9.js');
var GroupChannel_context = require('../context.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('react-dom');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-Ck6ikNW6.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-CAR4EIKs.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('../../chunks/bundle-DZhkNDpN.js');
require('../../chunks/bundle-Cy1ruNzs.js');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-DgjptBQW.js');
require('../../chunks/bundle-CpJ9tVDn.js');
require('../../chunks/bundle-DvvdekCh.js');
require('../../chunks/bundle-w0Wt2aBx.js');
require('../../chunks/bundle-CtHeiC70.js');
require('../../chunks/bundle-CzBskCon.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../chunks/bundle-CVdJh4P7.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var FileViewer = function (props) {
    var _a = GroupChannel_context.useGroupChannelContext(), deleteMessage = _a.deleteMessage, onBeforeDownloadFileMessage = _a.onBeforeDownloadFileMessage;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var logger = config.logger;
    return (React__default.default.createElement(FileViewerView.FileViewerView, _tslib.__assign({}, props, { deleteMessage: deleteMessage, onDownloadClick: function (e) { return _tslib.__awaiter(void 0, void 0, void 0, function () {
            var allowDownload, err_1;
            var _a, _b;
            return _tslib.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!onBeforeDownloadFileMessage)
                            return [2 /*return*/];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, onBeforeDownloadFileMessage({ message: props.message })];
                    case 2:
                        allowDownload = _c.sent();
                        if (!allowDownload) {
                            e.preventDefault();
                            (_a = logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'FileViewer: Not allowed to download.');
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _c.sent();
                        (_b = logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, 'FileViewer: Error occurred while determining download continuation:', err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); } })));
};

exports.FileViewer = FileViewer;
exports.default = FileViewer;
//# sourceMappingURL=FileViewer.js.map
