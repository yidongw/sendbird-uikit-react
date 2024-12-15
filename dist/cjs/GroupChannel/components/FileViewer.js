'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var FileViewerView = require('../../chunks/bundle-DFLAqRSF.js');
var GroupChannel_context = require('../context.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('react-dom');
require('../../chunks/bundle-Dmsb_oex.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-BYHj6UqH.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-D8-2bEdY.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('../../chunks/bundle-DfISCDoH.js');
require('../../chunks/bundle-CmBrGegh.js');
require('../../chunks/bundle-CzcmYPsN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-Bn25Hepq.js');
require('../../chunks/bundle-DkZ8dvkY.js');
require('../../chunks/bundle-DL9pw4YL.js');
require('../../chunks/bundle-CRtS_Hdn.js');
require('../../chunks/bundle-CxDaflMi.js');
require('../../chunks/bundle-DKimAemH.js');
require('../../chunks/bundle-Dcn1Gf-8.js');
require('../../chunks/bundle-Dim56WjD.js');

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
