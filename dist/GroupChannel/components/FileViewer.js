import { _ as __assign, a as __awaiter, b as __generator } from '../../chunks/bundle-Ck-Lg2K3.js';
import React__default from 'react';
import { F as FileViewerView } from '../../chunks/bundle-CFrRfSIT.js';
import { useGroupChannelContext } from '../context.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import 'react-dom';
import '../../chunks/bundle-BbICJE5Z.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-pQHYhigr.js';
import '../../chunks/bundle-CjhP75at.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-Di0Zwz2X.js';
import '../../chunks/bundle-B80WXNZi.js';
import '../../chunks/bundle-BL0uQSu6.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-fwRBR_Yw.js';
import '../../chunks/bundle-CnkNoe49.js';
import '../../chunks/bundle-DgxVBBM3.js';
import '../../chunks/bundle-ptS-tNRF.js';
import '../../chunks/bundle-CbLNLMef.js';
import '../../chunks/bundle-Bk1oUUzJ.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-gMJSD9hQ.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CHD1aKHO.js';
import '../../chunks/bundle-A5WEPjt6.js';
import '../../ui/SortByRow.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-C3toIOqd.js';
import '../../chunks/bundle-oJ6bQnA_.js';
import '../../chunks/bundle-yYNXeh2L.js';
import '../../chunks/bundle-BT00z1C1.js';
import '../../chunks/bundle-DAH20nmQ.js';
import '../../chunks/bundle--SXvYGPR.js';
import '../../chunks/bundle-YOpvheAB.js';
import '../../chunks/bundle-2HULaUfY.js';

var FileViewer = function (props) {
    var _a = useGroupChannelContext(), deleteMessage = _a.deleteMessage, onBeforeDownloadFileMessage = _a.onBeforeDownloadFileMessage;
    var config = useSendbirdStateContext().config;
    var logger = config.logger;
    return (React__default.createElement(FileViewerView, __assign({}, props, { deleteMessage: deleteMessage, onDownloadClick: function (e) { return __awaiter(void 0, void 0, void 0, function () {
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

export { FileViewer, FileViewer as default };
//# sourceMappingURL=FileViewer.js.map
