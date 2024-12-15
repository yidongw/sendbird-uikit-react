'use strict';

var _tslib = require('../../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var RemoveMessageModalView = require('../../chunks/bundle-B1sxVEVf.js');
var Channel_context = require('../context.js');
require('../../chunks/bundle-DfISCDoH.js');
require('../../chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
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
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-M6Urrta6.js');
require('../../chunks/bundle-Bn25Hepq.js');
require('../../chunks/bundle-CxDaflMi.js');
require('../../chunks/bundle-CIP3LaaL.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-Dim56WjD.js');
require('../../chunks/bundle-C3e9xkw6.js');
require('../../chunks/bundle-XTn8OOwy.js');
require('../../chunks/bundle-DrXG_ZI5.js');
require('../../chunks/bundle-CkLOqY_J.js');
require('../../chunks/bundle-BO0JOImE.js');
require('../../chunks/bundle-Dcn1Gf-8.js');
require('../../chunks/bundle-DkZ8dvkY.js');
require('../../chunks/bundle-DL9pw4YL.js');
require('../../chunks/bundle-DrPixXq9.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var RemoveMessageModal = function (props) {
    var deleteMessage = Channel_context.useChannelContext().deleteMessage;
    return React__default.default.createElement(RemoveMessageModalView.RemoveMessageModalView, _tslib.__assign({}, props, { deleteMessage: deleteMessage }));
};

module.exports = RemoveMessageModal;
//# sourceMappingURL=RemoveMessageModal.js.map
