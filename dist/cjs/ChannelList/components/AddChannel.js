'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ChannelList_context = require('../../chunks/bundle-CLCDfoFi.js');
var AddGroupChannelView = require('../../chunks/bundle-BZQNMt45.js');
require('../../chunks/bundle-Bdr7xlea.js');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../chunks/bundle-C1poxl5k.js');
require('../../chunks/bundle-Ck6ikNW6.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('../../chunks/bundle-DgjptBQW.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('../../chunks/bundle-DZhkNDpN.js');
require('../../chunks/bundle-BLoixwYr.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('react-dom');
require('../../chunks/bundle-Cy1ruNzs.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-CAR4EIKs.js');
require('../../ui/Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-DrScP7Am.js');
require('../../CreateChannel.js');
require('../../CreateChannel/components/CreateChannelUI.js');
require('../../chunks/bundle-C2pGgDQd.js');
require('../../sendbirdSelectors.js');
require('../../CreateChannel/components/InviteUsers.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../CreateChannel/components/SelectChannelType.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var AddChannel = function () {
    var _a = React.useState(false), showModal = _a[0], setShowModal = _a[1];
    var _b = ChannelList_context.useChannelListContext(), overrideInviteUser = _b.overrideInviteUser, onBeforeCreateChannel = _b.onBeforeCreateChannel, onChannelSelect = _b.onChannelSelect;
    return (React__default.default.createElement(AddGroupChannelView.AddGroupChannelView, { createChannelVisible: showModal, onChangeCreateChannelVisible: setShowModal, onCreateChannelClick: overrideInviteUser, onBeforeCreateChannel: onBeforeCreateChannel, onChannelCreated: function (it) { return onChannelSelect === null || onChannelSelect === void 0 ? void 0 : onChannelSelect(it); } }));
};

exports.AddChannel = AddChannel;
exports.default = AddChannel;
//# sourceMappingURL=AddChannel.js.map
