'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var SuggestedMentionListView = require('../../chunks/bundle-kFYCld9C.js');
var Channel_context = require('../context.js');
require('../../chunks/bundle-CAR4EIKs.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-Ck6ikNW6.js');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../chunks/bundle-Cy1ruNzs.js');
require('../../chunks/bundle-C1poxl5k.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-CtHeiC70.js');
require('../../chunks/bundle-CfV7jROn.js');
require('../../chunks/bundle-DgjptBQW.js');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-DZhkNDpN.js');
require('../../chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('react-dom');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-BNuA_uqY.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-CVdJh4P7.js');
require('../../chunks/bundle-DspSuA8e.js');
require('../../chunks/bundle-wYxshM30.js');
require('../../chunks/bundle-Dh0NAI0D.js');
require('../../chunks/bundle-Clu2jOAp.js');
require('../../chunks/bundle-DrScP7Am.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../chunks/bundle-CpJ9tVDn.js');
require('../../chunks/bundle-DvvdekCh.js');
require('../../chunks/bundle-Bs36T7L5.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var SuggestedMentionList = function (props) {
    var currentGroupChannel = Channel_context.useChannelContext().currentGroupChannel;
    return (React__default.default.createElement(SuggestedMentionListView.SuggestedMentionListView, _tslib.__assign({}, props, { currentChannel: currentGroupChannel })));
};

exports.SuggestedMentionList = SuggestedMentionList;
exports.default = SuggestedMentionList;
//# sourceMappingURL=SuggestedMentionList.js.map
