'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var AddGroupChannelView = require('../../chunks/bundle-BazUjMwn.js');
var GroupChannelList_context = require('../context.js');
require('../../ui/IconButton.js');
require('../../chunks/bundle-DRvomNLJ.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-BYHj6UqH.js');
require('../../CreateChannel.js');
require('../../CreateChannel/components/CreateChannelUI.js');
require('../../chunks/bundle-BNYkSvfJ.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-Dcn1Gf-8.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../CreateChannel/components/InviteUsers.js');
require('../../chunks/bundle-CmBrGegh.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../chunks/bundle-CzcmYPsN.js');
require('../../chunks/bundle-DfISCDoH.js');
require('../../chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('react-dom');
require('../../ui/Button.js');
require('../../chunks/bundle-D8-2bEdY.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-Bn25Hepq.js');
require('../../chunks/bundle-Dmsb_oex.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../CreateChannel/components/SelectChannelType.js');
require('../../chunks/bundle-DXUZIRaw.js');

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
