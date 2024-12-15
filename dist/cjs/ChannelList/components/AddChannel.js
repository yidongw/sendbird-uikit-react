'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ChannelList_context = require('../../chunks/bundle-87svnWdd.js');
var AddGroupChannelView = require('../../chunks/bundle-BazUjMwn.js');
require('../../chunks/bundle-DRvomNLJ.js');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-Dcn1Gf-8.js');
require('../../chunks/bundle-lGoyqUWm.js');
require('../../chunks/bundle-BYHj6UqH.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('../../chunks/bundle-Bn25Hepq.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('../../chunks/bundle-DfISCDoH.js');
require('../../chunks/bundle-e2d_I3io.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('react-dom');
require('../../chunks/bundle-CmBrGegh.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../chunks/bundle-CzcmYPsN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-D8-2bEdY.js');
require('../../ui/Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../useSendbirdStateContext.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-BO0JOImE.js');
require('../../CreateChannel.js');
require('../../CreateChannel/components/CreateChannelUI.js');
require('../../chunks/bundle-BNYkSvfJ.js');
require('../../sendbirdSelectors.js');
require('../../CreateChannel/components/InviteUsers.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-Dmsb_oex.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-BvFqbvri.js');
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
