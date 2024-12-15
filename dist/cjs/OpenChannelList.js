'use strict';

var React = require('react');
var OpenChannelList_components_OpenChannelListUI = require('./OpenChannelList/components/OpenChannelListUI.js');
var OpenChannelList_context = require('./chunks/bundle-Cpbh2oaz.js');
require('./OpenChannelList/components/OpenChannelPreview.js');
require('./chunks/bundle-C8wv9DWs.js');
require('./chunks/bundle-Bdr7xlea.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-Ck6ikNW6.js');
require('./chunks/bundle-B4PTJ_bJ.js');
require('./ui/Icon.js');
require('./chunks/bundle-CAR4EIKs.js');
require('./chunks/bundle-Dio8pG-T.js');
require('./ui/PlaceHolder.js');
require('./chunks/bundle-Cy1ruNzs.js');
require('./ui/Loader.js');
require('./ui/IconButton.js');
require('./CreateOpenChannel.js');
require('./CreateOpenChannel/components/CreateOpenChannelUI.js');
require('./ui/Button.js');
require('./chunks/bundle-DZhkNDpN.js');
require('./chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-Dr9yFtKa.js');
require('./chunks/bundle-C2CwvM-u.js');
require('./chunks/bundle-BD0wJiNh.js');
require('react-dom');
require('./chunks/bundle-DrIKAEHN.js');
require('@sendbird/uikit-tools');
require('./withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('./chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-CJM9Pdwg.js');
require('./useSendbirdStateContext.js');
require('./chunks/bundle-BKyZTqvq.js');
require('./ui/SortByRow.js');
require('./ui/Input.js');
require('./ui/TextButton.js');
require('./chunks/bundle-CLzI6bbe.js');
require('./CreateOpenChannel/context.js');
require('./chunks/bundle-C6Q6BfQY.js');

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
