import React__default from 'react';
import { u as useOpenChannelContext } from '../../chunks/bundle-7CrSPht7.js';
import OpenChannelInput from './OpenChannelInput.js';
import FrozenNotification from './FrozenChannelNotification.js';
import OpenchannelConversationHeader from './OpenChannelHeader.js';
import PlaceHolder, { PlaceHolderTypes } from '../../ui/PlaceHolder.js';
import OpenChannelMessageList from './OpenChannelMessageList.js';
import '../../chunks/bundle-DhMUg-L7.js';
import '../../chunks/bundle-HcNswZ5p.js';
import '../../chunks/bundle-dybWaw0v.js';
import '../../chunks/bundle-B91Bhfde.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import '../../chunks/bundle-ja8H3E0K.js';
import '../../chunks/bundle-Bd-i99nk.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DjLJFwD7.js';
import '../../chunks/bundle-DB7YSrIT.js';
import '../../chunks/bundle-DQk0aENq.js';
import '../../chunks/bundle-0WaCg6X7.js';
import 'react-dom';
import '../../chunks/bundle-DnSobLtx.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-Qkp2VIaZ.js';
import '../../ui/Icon.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../useSendbirdStateContext.js';
import '../../chunks/bundle-BKzcG-aC.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-zVlBKrSk.js';
import '../../chunks/bundle-BwmZGijR.js';
import '../../chunks/bundle-HPKdeJ0K.js';
import '../../chunks/bundle-DkDQ1PWY.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-lUbYBD0x.js';
import '../../chunks/bundle-CijxkMjj.js';
import '../../chunks/bundle-Bf0OMYby.js';
import 'dompurify';
import '../../chunks/bundle-DCxt9PzH.js';
import '../../chunks/bundle-BddSUitu.js';
import '../../chunks/bundle-DLG7S88z.js';
import '../../chunks/bundle-BvQmfZZv.js';
import '../../chunks/bundle-2pbuHA3C.js';
import '../../ui/ImageRenderer.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-DfmFm_nl.js';
import './OpenChannelMessage.js';
import '../../chunks/bundle-D4JzAgen.js';
import '../../ui/OpenchannelUserMessage.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-Du354JpK.js';
import '../../chunks/bundle-2DP5xDcL.js';
import '../../chunks/bundle-B6yWIKOT.js';
import '../../ui/OpenChannelAdminMessage.js';
import '../../ui/OpenchannelOGMessage.js';
import '../../ui/LinkLabel.js';
import '../../chunks/bundle-CYbqxz_s.js';
import '../../Message/context.js';
import '../../ui/MentionLabel.js';
import '../../ui/OpenchannelThumbnailMessage.js';
import '../../ui/OpenchannelFileMessage.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-DGMsaaNU.js';
import '../../ui/DateSeparator.js';
import '../../ui/FileViewer.js';
import '../../chunks/bundle-A7zrKt0i.js';
import '../../chunks/bundle-BzEzK7wl.js';
import '../../chunks/bundle-DzijJyIT.js';
import '../../chunks/bundle-tnPVKzs2.js';
import '../../chunks/bundle-D-F3KakE.js';
import '@sendbird/chat/message';
import '../../Channel/utils/compareMessagesForGrouping.js';

var COMPONENT_CLASS_NAME = 'sendbird-openchannel-conversation';
var OpenChannelUI = function (_a) {
    var renderMessage = _a.renderMessage, renderHeader = _a.renderHeader, renderPlaceHolderEmptyList = _a.renderPlaceHolderEmptyList, renderPlaceHolderError = _a.renderPlaceHolderError, renderPlaceHolderLoading = _a.renderPlaceHolderLoading, renderMessageInput = _a.renderMessageInput, renderInput = _a.renderInput;
    var _b = useOpenChannelContext(), currentOpenChannel = _b.currentOpenChannel, amIBanned = _b.amIBanned, loading = _b.loading, isInvalid = _b.isInvalid, messageInputRef = _b.messageInputRef, conversationScrollRef = _b.conversationScrollRef;
    if (!currentOpenChannel
        || !(currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.url)
        || amIBanned) {
        return ((renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError())
            || React__default.createElement("div", { className: COMPONENT_CLASS_NAME },
                React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.NO_CHANNELS })));
    }
    if (loading) {
        return ((renderPlaceHolderLoading === null || renderPlaceHolderLoading === void 0 ? void 0 : renderPlaceHolderLoading())
            || React__default.createElement("div", { className: COMPONENT_CLASS_NAME },
                React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.LOADING })));
    }
    if (isInvalid) {
        return ((renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError())
            || React__default.createElement("div", { className: COMPONENT_CLASS_NAME },
                React__default.createElement(PlaceHolder, { type: PlaceHolderTypes.WRONG })));
    }
    var renderInputComponent = renderMessageInput || renderInput;
    return (React__default.createElement("div", { className: COMPONENT_CLASS_NAME },
        (renderHeader === null || renderHeader === void 0 ? void 0 : renderHeader()) || React__default.createElement(OpenchannelConversationHeader, null),
        (currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.isFrozen) && React__default.createElement(FrozenNotification, null),
        React__default.createElement(OpenChannelMessageList, { ref: conversationScrollRef, renderMessage: renderMessage, renderPlaceHolderEmptyList: renderPlaceHolderEmptyList }),
        (renderInputComponent === null || renderInputComponent === void 0 ? void 0 : renderInputComponent()) || React__default.createElement(OpenChannelInput, { ref: messageInputRef })));
};

export { OpenChannelUI as default };
//# sourceMappingURL=OpenChannelUI.js.map
