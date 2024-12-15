import { _ as __assign, a as __awaiter, b as __generator } from '../../chunks/bundle-HcNswZ5p.js';
import React__default from 'react';
import { F as FileViewerView } from '../../chunks/bundle-mGA-NFf6.js';
import { useGroupChannelContext } from '../context.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import 'react-dom';
import '../../chunks/bundle-2pbuHA3C.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-0WaCg6X7.js';
import '../../chunks/bundle-DkDQ1PWY.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-Qkp2VIaZ.js';
import '../../chunks/bundle-dybWaw0v.js';
import '../../chunks/bundle-Bd-i99nk.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DjLJFwD7.js';
import '../../chunks/bundle-DB7YSrIT.js';
import '../../chunks/bundle-DQk0aENq.js';
import '../../chunks/bundle-ja8H3E0K.js';
import '../../chunks/bundle-DhMUg-L7.js';
import '../../chunks/bundle-DnSobLtx.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../chunks/bundle-BKzcG-aC.js';
import '../../ui/SortByRow.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-B91Bhfde.js';
import '../../chunks/bundle-CZtAsa-i.js';
import '../../chunks/bundle-CUhgRMBc.js';
import '../../chunks/bundle-BB4cJn39.js';
import '../../chunks/bundle-CijxkMjj.js';
import '../../chunks/bundle-CT4PvZdn.js';
import '../../chunks/bundle-BwmZGijR.js';
import '../../chunks/bundle-CuavrWk1.js';

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
