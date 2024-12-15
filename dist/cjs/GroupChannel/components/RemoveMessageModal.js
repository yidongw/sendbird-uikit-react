'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var GroupChannel_context = require('../context.js');
var RemoveMessageModalView = require('../../chunks/bundle-BJ_HBGTK.js');
require('@sendbird/chat/message');
require('@sendbird/chat/groupChannel');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-DgjptBQW.js');
require('../../withSendbird.js');
require('../../chunks/bundle-DZhkNDpN.js');
require('../../chunks/bundle-BLoixwYr.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('../../chunks/bundle-Ck6ikNW6.js');
require('react-dom');
require('../../chunks/bundle-Cy1ruNzs.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-CAR4EIKs.js');
require('../../ui/Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-CpJ9tVDn.js');
require('../../chunks/bundle-DvvdekCh.js');
require('../../chunks/bundle-w0Wt2aBx.js');
require('../../chunks/bundle-CtHeiC70.js');
require('../../chunks/bundle-CzBskCon.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../chunks/bundle-CVdJh4P7.js');
require('../../chunks/bundle-CzLnk6wC.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var RemoveMessageModal = function (props) {
    var deleteMessage = GroupChannel_context.useGroupChannelContext().deleteMessage;
    return React__default.default.createElement(RemoveMessageModalView.RemoveMessageModalView, _tslib.__assign({}, props, { deleteMessage: deleteMessage }));
};

exports.RemoveMessageModal = RemoveMessageModal;
exports.default = RemoveMessageModal;
//# sourceMappingURL=RemoveMessageModal.js.map
