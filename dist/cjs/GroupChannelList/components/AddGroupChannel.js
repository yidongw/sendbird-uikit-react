'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var AddGroupChannelView = require('../../chunks/bundle-BZQNMt45.js');
var GroupChannelList_context = require('../context.js');
require('../../ui/IconButton.js');
require('../../chunks/bundle-Bdr7xlea.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-Ck6ikNW6.js');
require('../../CreateChannel.js');
require('../../CreateChannel/components/CreateChannelUI.js');
require('../../chunks/bundle-C2pGgDQd.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../CreateChannel/components/InviteUsers.js');
require('../../chunks/bundle-Cy1ruNzs.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../chunks/bundle-DZhkNDpN.js');
require('../../chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('react-dom');
require('../../ui/Button.js');
require('../../chunks/bundle-CAR4EIKs.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-DgjptBQW.js');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../CreateChannel/components/SelectChannelType.js');
require('../../chunks/bundle-bPnhUeU0.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var AddGroupChannel = function () {
    var _a = React.useState(false), createChannelVisible = _a[0], setCreateChannelVisible = _a[1];
    var _b = GroupChannelList_context.useGroupChannelListContext(), onChannelCreated = _b.onChannelCreated, onBeforeCreateChannel = _b.onBeforeCreateChannel, onCreateChannelClick = _b.onCreateChannelClick;
    return (React__default.default.createElement(AddGroupChannelView.AddGroupChannelView, { createChannelVisible: createChannelVisible, onChangeCreateChannelVisible: setCreateChannelVisible, onCreateChannelClick: onCreateChannelClick, onBeforeCreateChannel: onBeforeCreateChannel, onChannelCreated: onChannelCreated }));
};

exports.AddGroupChannel = AddGroupChannel;
exports.default = AddGroupChannel;
//# sourceMappingURL=AddGroupChannel.js.map
