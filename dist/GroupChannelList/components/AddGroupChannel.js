import React__default, { useState } from 'react';
import { A as AddGroupChannelView } from '../../chunks/bundle-ZRQ-yoGW.js';
import { useGroupChannelListContext } from '../context.js';
import '../../ui/IconButton.js';
import '../../chunks/bundle-HcNswZ5p.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-0WaCg6X7.js';
import '../../CreateChannel.js';
import '../../CreateChannel/components/CreateChannelUI.js';
import '../../chunks/bundle-CepS4VOw.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-BwmZGijR.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../CreateChannel/components/InviteUsers.js';
import '../../chunks/bundle-DhMUg-L7.js';
import '../../chunks/bundle-dybWaw0v.js';
import '../../chunks/bundle-DnSobLtx.js';
import '../../chunks/bundle-ja8H3E0K.js';
import '../../chunks/bundle-Bd-i99nk.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DjLJFwD7.js';
import '../../chunks/bundle-DB7YSrIT.js';
import '../../chunks/bundle-DQk0aENq.js';
import 'react-dom';
import '../../ui/Button.js';
import '../../chunks/bundle-Qkp2VIaZ.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../chunks/bundle-BKzcG-aC.js';
import '../../ui/SortByRow.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-B91Bhfde.js';
import '../../chunks/bundle-2pbuHA3C.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-DkDQ1PWY.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../CreateChannel/components/SelectChannelType.js';
import '../../chunks/bundle-qYO3S317.js';

var AddGroupChannel = function () {
    var _a = useState(false), createChannelVisible = _a[0], setCreateChannelVisible = _a[1];
    var _b = useGroupChannelListContext(), onChannelCreated = _b.onChannelCreated, onBeforeCreateChannel = _b.onBeforeCreateChannel, onCreateChannelClick = _b.onCreateChannelClick;
    return (React__default.createElement(AddGroupChannelView, { createChannelVisible: createChannelVisible, onChangeCreateChannelVisible: setCreateChannelVisible, onCreateChannelClick: onCreateChannelClick, onBeforeCreateChannel: onBeforeCreateChannel, onChannelCreated: onChannelCreated }));
};

export { AddGroupChannel, AddGroupChannel as default };
//# sourceMappingURL=AddGroupChannel.js.map
