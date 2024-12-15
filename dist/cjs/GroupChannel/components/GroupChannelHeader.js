'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var GroupChannelHeaderView = require('../../chunks/bundle-Dbk15PIx.js');
var GroupChannel_context = require('../context.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-Ck6ikNW6.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../chunks/bundle-B2Yph-6C.js');
require('../../chunks/bundle-CoUbsBcp.js');
require('../../chunks/bundle-CAR4EIKs.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-Cy1ruNzs.js');
require('../../ui/Header.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-CLzI6bbe.js');
require('../../ui/IconButton.js');
require('@sendbird/chat/message');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-DgjptBQW.js');
require('../../chunks/bundle-DZhkNDpN.js');
require('react-dom');
require('../../ui/Button.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-CpJ9tVDn.js');
require('../../chunks/bundle-DvvdekCh.js');
require('../../chunks/bundle-w0Wt2aBx.js');
require('../../chunks/bundle-CtHeiC70.js');
require('../../chunks/bundle-CzBskCon.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../chunks/bundle-CVdJh4P7.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var GroupChannelHeader = function (props) {
    var context = GroupChannel_context.useGroupChannelContext();
    return (React__default.default.createElement(GroupChannelHeaderView.GroupChannelHeaderView, _tslib.__assign({}, props, context, { currentChannel: context.currentChannel })));
};

exports.GroupChannelHeader = GroupChannelHeader;
exports.default = GroupChannelHeader;
//# sourceMappingURL=GroupChannelHeader.js.map
