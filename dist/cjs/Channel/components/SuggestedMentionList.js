'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var SuggestedMentionListView = require('../../chunks/bundle-3ucLy5RS.js');
var Channel_context = require('../context.js');
require('../../chunks/bundle-D8-2bEdY.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-BYHj6UqH.js');
require('../../chunks/bundle-Dmsb_oex.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../chunks/bundle-CmBrGegh.js');
require('../../chunks/bundle-lGoyqUWm.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-CxDaflMi.js');
require('../../chunks/bundle-CsHnjhet.js');
require('../../chunks/bundle-Bn25Hepq.js');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-DfISCDoH.js');
require('../../chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('react-dom');
require('../../chunks/bundle-CzcmYPsN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
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

var SuggestedMentionList = function (props) {
    var currentGroupChannel = Channel_context.useChannelContext().currentGroupChannel;
    return (React__default.default.createElement(SuggestedMentionListView.SuggestedMentionListView, _tslib.__assign({}, props, { currentChannel: currentGroupChannel })));
};

exports.SuggestedMentionList = SuggestedMentionList;
exports.default = SuggestedMentionList;
//# sourceMappingURL=SuggestedMentionList.js.map
