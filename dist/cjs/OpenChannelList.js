'use strict';

var React = require('react');
var OpenChannelList_components_OpenChannelListUI = require('./OpenChannelList/components/OpenChannelListUI.js');
var OpenChannelList_context = require('./chunks/bundle-BVT26-Dv.js');
require('./OpenChannelList/components/OpenChannelPreview.js');
require('./chunks/bundle-Dmsb_oex.js');
require('./chunks/bundle-DRvomNLJ.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-BYHj6UqH.js');
require('./chunks/bundle-BvFqbvri.js');
require('./ui/Icon.js');
require('./chunks/bundle-D8-2bEdY.js');
require('./chunks/bundle-Q9YDOzjz.js');
require('./ui/PlaceHolder.js');
require('./chunks/bundle-CmBrGegh.js');
require('./ui/Loader.js');
require('./ui/IconButton.js');
require('./CreateOpenChannel.js');
require('./CreateOpenChannel/components/CreateOpenChannelUI.js');
require('./ui/Button.js');
require('./chunks/bundle-DfISCDoH.js');
require('./chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-4kwoH67w.js');
require('./chunks/bundle-BCJ8mayg.js');
require('./chunks/bundle-C0tdWwa4.js');
require('react-dom');
require('./chunks/bundle-CzcmYPsN.js');
require('@sendbird/uikit-tools');
require('./withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-2M4zbjEc.js');
require('./useSendbirdStateContext.js');
require('./chunks/bundle-BYSQ-mQr.js');
require('./ui/SortByRow.js');
require('./ui/Input.js');
require('./ui/TextButton.js');
require('./chunks/bundle-LSLwWEwG.js');
require('./CreateOpenChannel/context.js');
require('./chunks/bundle-Dcn1Gf-8.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function OpenChannelList(_a) {
    var 
    // provider
    className = _a.className, queries = _a.queries, onChannelSelected = _a.onChannelSelected, 
    // ui
    renderHeader = _a.renderHeader, renderChannelPreview = _a.renderChannelPreview, renderPlaceHolderEmpty = _a.renderPlaceHolderEmpty, renderPlaceHolderError = _a.renderPlaceHolderError, renderPlaceHolderLoading = _a.renderPlaceHolderLoading;
    return (React__default.default.createElement(OpenChannelList_context.OpenChannelListProvider, { className: className, queries: queries, onChannelSelected: onChannelSelected },
        React__default.default.createElement(OpenChannelList_components_OpenChannelListUI, { renderHeader: renderHeader, renderChannelPreview: renderChannelPreview, renderPlaceHolderEmpty: renderPlaceHolderEmpty, renderPlaceHolderError: renderPlaceHolderError, renderPlaceHolderLoading: renderPlaceHolderLoading })));
}

module.exports = OpenChannelList;
//# sourceMappingURL=OpenChannelList.js.map
