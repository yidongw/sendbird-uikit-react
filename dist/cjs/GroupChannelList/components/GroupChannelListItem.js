'use strict';

var React = require('react');
var ui_MessageStatus = require('../../chunks/bundle-C8j790_0.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var LocalizationContext = require('../../chunks/bundle-CmBrGegh.js');
var GroupChannelList_context = require('../context.js');
var GroupChannelListItemView = require('../../chunks/bundle-BqTCW-mv.js');
require('../../chunks/bundle-DRvomNLJ.js');
require('../../chunks/bundle-C3e9xkw6.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-BYHj6UqH.js');
require('../../chunks/bundle-D8-2bEdY.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('../../chunks/bundle-DSQevcAL.js');
require('../../chunks/bundle-BayL2H8_.js');
require('../../withSendbird.js');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-Bn25Hepq.js');
require('../../chunks/bundle-DfISCDoH.js');
require('react-dom');
require('../../chunks/bundle-CzcmYPsN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-DXUZIRaw.js');
require('../../chunks/bundle-CrV-FZvi.js');
require('../../GroupChannel/components/TypingIndicator.js');
require('../../ui/Badge.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-Dmsb_oex.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../chunks/bundle-B1unRPhi.js');
require('../../ui/MentionUserLabel.js');
require('../../chunks/bundle-DhOkJsb_.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-LSLwWEwG.js');
require('../../chunks/bundle-CZ8XCEGd.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var GroupChannelListItem = function (_a) {
    var _b, _c, _d;
    var channel = _a.channel, isSelected = _a.isSelected, isTyping = _a.isTyping, renderChannelAction = _a.renderChannelAction, onLeaveChannel = _a.onLeaveChannel, onClick = _a.onClick, tabIndex = _a.tabIndex;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _e = GroupChannelList_context.useGroupChannelListContext(), _f = _e.isTypingIndicatorEnabled, isTypingIndicatorEnabled = _f === void 0 ? false : _f, _g = _e.isMessageReceiptStatusEnabled, isMessageReceiptStatusEnabled = _g === void 0 ? false : _g;
    var userId = config.userId;
    var isMessageStatusEnabled = isMessageReceiptStatusEnabled
        && (!((_b = channel.lastMessage) === null || _b === void 0 ? void 0 : _b.isAdminMessage()))
        && ((_d = (_c = channel.lastMessage) === null || _c === void 0 ? void 0 : _c.sender) === null || _d === void 0 ? void 0 : _d.userId) === userId;
    return (React__default.default.createElement(GroupChannelListItemView.GroupChannelListItemView, { channel: channel, tabIndex: tabIndex, channelName: ui_MessageStatus.getChannelTitle(channel, userId, stringSet), isTyping: isTypingIndicatorEnabled && isTyping, isSelected: isSelected, isMessageStatusEnabled: isMessageStatusEnabled, onClick: onClick, onLeaveChannel: onLeaveChannel, renderChannelAction: renderChannelAction }));
};

exports.GroupChannelListItem = GroupChannelListItem;
//# sourceMappingURL=GroupChannelListItem.js.map
