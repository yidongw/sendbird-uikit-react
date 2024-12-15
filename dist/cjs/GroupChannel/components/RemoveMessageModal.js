'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var GroupChannel_context = require('../context.js');
var RemoveMessageModalView = require('../../chunks/bundle-B1sxVEVf.js');
require('@sendbird/chat/message');
require('@sendbird/chat/groupChannel');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-Bn25Hepq.js');
require('../../withSendbird.js');
require('../../chunks/bundle-DfISCDoH.js');
require('../../chunks/bundle-e2d_I3io.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('../../chunks/bundle-BYHj6UqH.js');
require('react-dom');
require('../../chunks/bundle-CmBrGegh.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../chunks/bundle-CzcmYPsN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-D8-2bEdY.js');
require('../../ui/Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-DkZ8dvkY.js');
require('../../chunks/bundle-DL9pw4YL.js');
require('../../chunks/bundle-CRtS_Hdn.js');
require('../../chunks/bundle-CxDaflMi.js');
require('../../chunks/bundle-DKimAemH.js');
require('../../chunks/bundle-Dcn1Gf-8.js');
require('../../chunks/bundle-Dim56WjD.js');
require('../../chunks/bundle-M6Urrta6.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var RemoveMessageModal = function (props) {
    var deleteMessage = GroupChannel_context.useGroupChannelContext().deleteMessage;
    return React__default.default.createElement(RemoveMessageModalView.RemoveMessageModalView, _tslib.__assign({}, props, { deleteMessage: deleteMessage }));
};

exports.RemoveMessageModal = RemoveMessageModal;
exports.default = RemoveMessageModal;
//# sourceMappingURL=RemoveMessageModal.js.map
