'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var GroupChannelHeaderView = require('../../chunks/bundle-BY9ZB-y7.js');
var GroupChannel_context = require('../context.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-BYHj6UqH.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-Dmsb_oex.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../chunks/bundle-B1unRPhi.js');
require('../../chunks/bundle-CMB26qvu.js');
require('../../chunks/bundle-D8-2bEdY.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('../../chunks/bundle-CzcmYPsN.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-CmBrGegh.js');
require('../../ui/Header.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-LSLwWEwG.js');
require('../../ui/IconButton.js');
require('@sendbird/chat/message');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-Bn25Hepq.js');
require('../../chunks/bundle-DfISCDoH.js');
require('react-dom');
require('../../ui/Button.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-DkZ8dvkY.js');
require('../../chunks/bundle-DL9pw4YL.js');
require('../../chunks/bundle-CRtS_Hdn.js');
require('../../chunks/bundle-CxDaflMi.js');
require('../../chunks/bundle-DKimAemH.js');
require('../../chunks/bundle-Dcn1Gf-8.js');
require('../../chunks/bundle-Dim56WjD.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var GroupChannelHeader = function (props) {
    var context = GroupChannel_context.useGroupChannelContext();
    return (React__default.default.createElement(GroupChannelHeaderView.GroupChannelHeaderView, _tslib.__assign({}, props, context, { currentChannel: context.currentChannel })));
};

exports.GroupChannelHeader = GroupChannelHeader;
exports.default = GroupChannelHeader;
//# sourceMappingURL=GroupChannelHeader.js.map
