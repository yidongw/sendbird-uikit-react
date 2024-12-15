'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var GroupChannelList_context = require('../context.js');
var GroupChannelListUIView = require('../../chunks/bundle-CkC2GGZG.js');
var GroupChannelList_components_GroupChannelPreviewAction = require('./GroupChannelPreviewAction.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var GroupChannelList_components_GroupChannelListItem = require('./GroupChannelListItem.js');
var GroupChannelList_components_AddGroupChannel = require('./AddGroupChannel.js');
var utils = require('../../chunks/bundle-Ck6ikNW6.js');
require('@sendbird/chat/groupChannel');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-DgjptBQW.js');
require('../../withSendbird.js');
require('../../chunks/bundle-DZhkNDpN.js');
require('../../chunks/bundle-BLoixwYr.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-BD0wJiNh.js');
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
require('../../chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-bPnhUeU0.js');
require('./GroupChannelListHeader.js');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../ui/Header.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-CLzI6bbe.js');
require('../../EditUserProfile.js');
require('../../EditUserProfile/context.js');
require('../../EditUserProfile/components/EditUserProfileUI.js');
require('../../chunks/bundle-DQPZ4z8-.js');
require('../../ui/Input.js');
require('../../ui/PlaceHolder.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-CvCKKQx5.js');
require('../../chunks/bundle-BNuA_uqY.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-CpvSgBLD.js');
require('../../chunks/bundle-BQHwJ1ZS.js');
require('../../chunks/bundle-DspSuA8e.js');
require('../../chunks/bundle-f7s_1xF4.js');
require('../../chunks/bundle-Cc6_UMK4.js');
require('../../chunks/bundle-DPzUMsqg.js');
require('../../chunks/bundle-D_k3_Y_y.js');
require('../../GroupChannel/components/TypingIndicator.js');
require('../../ui/Badge.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-B2Yph-6C.js');
require('../../ui/MentionUserLabel.js');
require('../../chunks/bundle-By5v4zYf.js');
require('../../chunks/bundle-BIkitklZ.js');
require('../../chunks/bundle-BZQNMt45.js');
require('../../CreateChannel.js');
require('../../CreateChannel/components/CreateChannelUI.js');
require('../../chunks/bundle-C2pGgDQd.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../CreateChannel/components/InviteUsers.js');
require('../../ui/UserListItem.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../CreateChannel/components/SelectChannelType.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var GroupChannelListUI = function (props) {
    var renderHeader = props.renderHeader, renderChannelPreview = props.renderChannelPreview, renderPlaceHolderError = props.renderPlaceHolderError, renderPlaceHolderLoading = props.renderPlaceHolderLoading, renderPlaceHolderEmptyList = props.renderPlaceHolderEmptyList;
    var _a = GroupChannelList_context.useGroupChannelListContext(), onChannelSelect = _a.onChannelSelect, onThemeChange = _a.onThemeChange, allowProfileEdit = _a.allowProfileEdit, typingChannelUrls = _a.typingChannelUrls, groupChannels = _a.groupChannels, initialized = _a.initialized, selectedChannelUrl = _a.selectedChannelUrl, loadMore = _a.loadMore, onUserProfileUpdated = _a.onUserProfileUpdated, scrollRef = _a.scrollRef;
    var _b = useSendbirdStateContext.useSendbirdStateContext(), stores = _b.stores, config = _b.config;
    var logger = config.logger, isOnline = config.isOnline;
    var sdk = stores.sdkStore.sdk;
    var renderListItem = function (renderProps) {
        var channel = renderProps.item, index = renderProps.index;
        var itemProps = {
            channel: channel,
            tabIndex: index,
            isSelected: channel.url === selectedChannelUrl,
            isTyping: typingChannelUrls.includes(channel.url),
            renderChannelAction: function (props) { return React__default.default.createElement(GroupChannelList_components_GroupChannelPreviewAction.GroupChannelPreviewAction, _tslib.__assign({}, props)); },
            onClick: function () {
                if (isOnline || (sdk === null || sdk === void 0 ? void 0 : sdk.isCacheEnabled)) {
                    logger.info('ChannelList: Clicked on channel:', channel);
                    onChannelSelect(channel);
                }
                else {
                    logger.warning('ChannelList: Inactivated clicking channel item during offline.');
                }
            },
            onLeaveChannel: function () {
                return _tslib.__awaiter(this, void 0, void 0, function () {
                    return _tslib.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                logger.info('ChannelList: Leaving channel', channel);
                                return [4 /*yield*/, channel.leave()];
                            case 1:
                                _a.sent();
                                logger.info('ChannelList: Leaving channel success');
                                return [2 /*return*/];
                        }
                    });
                });
            },
        };
        if (renderChannelPreview) {
            return (React__default.default.createElement("div", { key: channel.url, onClick: itemProps.onClick }, renderChannelPreview(itemProps)));
        }
        return React__default.default.createElement(GroupChannelList_components_GroupChannelListItem.GroupChannelListItem, _tslib.__assign({ key: channel.url }, itemProps));
    };
    return (React__default.default.createElement(GroupChannelListUIView.GroupChannelListUIView, { renderHeader: renderHeader, renderChannel: renderListItem, renderPlaceHolderError: renderPlaceHolderError, renderPlaceHolderLoading: renderPlaceHolderLoading, renderPlaceHolderEmptyList: renderPlaceHolderEmptyList, onChangeTheme: onThemeChange !== null && onThemeChange !== void 0 ? onThemeChange : utils.noop, allowProfileEdit: allowProfileEdit, onUserProfileUpdated: onUserProfileUpdated !== null && onUserProfileUpdated !== void 0 ? onUserProfileUpdated : utils.noop, channels: groupChannels, onLoadMore: loadMore, initialized: initialized, renderAddChannel: function () { return React__default.default.createElement(GroupChannelList_components_AddGroupChannel.AddGroupChannel, null); }, scrollRef: scrollRef }));
};

exports.GroupChannelListUI = GroupChannelListUI;
exports.default = GroupChannelListUI;
//# sourceMappingURL=GroupChannelListUI.js.map
