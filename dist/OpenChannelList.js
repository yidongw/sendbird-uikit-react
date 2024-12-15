import React__default from 'react';
import OpenChannelListUI from './OpenChannelList/components/OpenChannelListUI.js';
import { O as OpenChannelListProvider } from './chunks/bundle-ClEaK909.js';
import './OpenChannelList/components/OpenChannelPreview.js';
import './chunks/bundle-BbICJE5Z.js';
import './chunks/bundle-Ck-Lg2K3.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-pQHYhigr.js';
import './chunks/bundle-CjhP75at.js';
import './ui/Icon.js';
import './chunks/bundle-Di0Zwz2X.js';
import './chunks/bundle-B80WXNZi.js';
import './ui/PlaceHolder.js';
import './chunks/bundle-CbLNLMef.js';
import './ui/Loader.js';
import './ui/IconButton.js';
import './CreateOpenChannel.js';
import './CreateOpenChannel/components/CreateOpenChannelUI.js';
import './ui/Button.js';
import './chunks/bundle-ptS-tNRF.js';
import './chunks/bundle-BL0uQSu6.js';
import '@sendbird/chat/groupChannel';
import './utils/message/getOutgoingMessageState.js';
import './chunks/bundle-fwRBR_Yw.js';
import './chunks/bundle-CnkNoe49.js';
import './chunks/bundle-DgxVBBM3.js';
import 'react-dom';
import './chunks/bundle-Bk1oUUzJ.js';
import '@sendbird/uikit-tools';
import './withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import './chunks/bundle-gMJSD9hQ.js';
import '@sendbird/chat/openChannel';
import './chunks/bundle-CHD1aKHO.js';
import './useSendbirdStateContext.js';
import './chunks/bundle-A5WEPjt6.js';
import './ui/SortByRow.js';
import './ui/Input.js';
import './ui/TextButton.js';
import './chunks/bundle-DUTd4XYU.js';
import './CreateOpenChannel/context.js';
import './chunks/bundle-YOpvheAB.js';

function OpenChannelList(_a) {
    var 
    // provider
    className = _a.className, queries = _a.queries, onChannelSelected = _a.onChannelSelected, 
    // ui
    renderHeader = _a.renderHeader, renderChannelPreview = _a.renderChannelPreview, renderPlaceHolderEmpty = _a.renderPlaceHolderEmpty, renderPlaceHolderError = _a.renderPlaceHolderError, renderPlaceHolderLoading = _a.renderPlaceHolderLoading;
    return (React__default.createElement(OpenChannelListProvider, { className: className, queries: queries, onChannelSelected: onChannelSelected },
        React__default.createElement(OpenChannelListUI, { renderHeader: renderHeader, renderChannelPreview: renderChannelPreview, renderPlaceHolderEmpty: renderPlaceHolderEmpty, renderPlaceHolderError: renderPlaceHolderError, renderPlaceHolderLoading: renderPlaceHolderLoading })));
}

export { OpenChannelList as default };
//# sourceMappingURL=OpenChannelList.js.map
