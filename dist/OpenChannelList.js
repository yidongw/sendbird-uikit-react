import React__default from 'react';
import OpenChannelListUI from './OpenChannelList/components/OpenChannelListUI.js';
import { O as OpenChannelListProvider } from './chunks/bundle-DVry0adG.js';
import './OpenChannelList/components/OpenChannelPreview.js';
import './chunks/bundle-2pbuHA3C.js';
import './chunks/bundle-HcNswZ5p.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-0WaCg6X7.js';
import './chunks/bundle-DkDQ1PWY.js';
import './ui/Icon.js';
import './chunks/bundle-Qkp2VIaZ.js';
import './chunks/bundle-dybWaw0v.js';
import './ui/PlaceHolder.js';
import './chunks/bundle-DhMUg-L7.js';
import './ui/Loader.js';
import './ui/IconButton.js';
import './CreateOpenChannel.js';
import './CreateOpenChannel/components/CreateOpenChannelUI.js';
import './ui/Button.js';
import './chunks/bundle-ja8H3E0K.js';
import './chunks/bundle-Bd-i99nk.js';
import '@sendbird/chat/groupChannel';
import './utils/message/getOutgoingMessageState.js';
import './chunks/bundle-DjLJFwD7.js';
import './chunks/bundle-DB7YSrIT.js';
import './chunks/bundle-DQk0aENq.js';
import 'react-dom';
import './chunks/bundle-DnSobLtx.js';
import '@sendbird/uikit-tools';
import './withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import './chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import './chunks/bundle-zy1mnw8U.js';
import './useSendbirdStateContext.js';
import './chunks/bundle-BKzcG-aC.js';
import './ui/SortByRow.js';
import './ui/Input.js';
import './ui/TextButton.js';
import './chunks/bundle-DGMsaaNU.js';
import './CreateOpenChannel/context.js';
import './chunks/bundle-BwmZGijR.js';

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
