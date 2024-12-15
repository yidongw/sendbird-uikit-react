'use strict';

var _tslib = require('../../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var ChannelList_components_ChannelPreview = require('./ChannelPreview.js');
var GroupChannelList_components_GroupChannelPreviewAction = require('../../GroupChannelList/components/GroupChannelPreviewAction.js');
var ChannelList_context = require('../../chunks/bundle-CLCDfoFi.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var GroupChannelListUIView = require('../../chunks/bundle-CkC2GGZG.js');
var ChannelList_components_AddChannel = require('./AddChannel.js');
var utils = require('../../chunks/bundle-Ck6ikNW6.js');
require('../../chunks/bundle-Cy1ruNzs.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../chunks/bundle-BQHwJ1ZS.js');
require('../../chunks/bundle-DspSuA8e.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-CAR4EIKs.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('../../chunks/bundle-f7s_1xF4.js');
require('../../chunks/bundle-Cc6_UMK4.js');
require('../../chunks/bundle-DPzUMsqg.js');
require('../../chunks/bundle-D_k3_Y_y.js');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../GroupChannel/components/TypingIndicator.js');
require('../../chunks/bundle-C1poxl5k.js');
require('../../ui/Badge.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../chunks/bundle-B2Yph-6C.js');
require('../../ui/MentionUserLabel.js');
require('../../chunks/bundle-By5v4zYf.js');
require('../../chunks/bundle-DZhkNDpN.js');
require('react-dom');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-CLzI6bbe.js');
require('../../chunks/bundle-BIkitklZ.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../chunks/bundle-DgjptBQW.js');
require('../../chunks/bundle-DrScP7Am.js');
require('../../GroupChannelList/components/GroupChannelListHeader.js');
require('../../ui/Header.js');
require('../../EditUserProfile.js');
require('../../EditUserProfile/context.js');
require('../../EditUserProfile/components/EditUserProfileUI.js');
require('../../chunks/bundle-DQPZ4z8-.js');
require('../../ui/Input.js');
require('../../ui/PlaceHolder.js');
require('../../chunks/bundle-CvCKKQx5.js');
require('../../chunks/bundle-BNuA_uqY.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-CpvSgBLD.js');
require('../../chunks/bundle-BZQNMt45.js');
require('../../CreateChannel.js');
require('../../CreateChannel/components/CreateChannelUI.js');
require('../../chunks/bundle-C2pGgDQd.js');
require('../../sendbirdSelectors.js');
require('../../CreateChannel/components/InviteUsers.js');
require('../../ui/UserListItem.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../CreateChannel/components/SelectChannelType.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var ChannelListUI = function (props) {
    var renderHeader = props.renderHeader, renderChannelPreview = props.renderChannelPreview, renderPlaceHolderError = props.renderPlaceHolderError, renderPlaceHolderLoading = props.renderPlaceHolderLoading, renderPlaceHolderEmptyList = props.renderPlaceHolderEmptyList;
    var _a = ChannelList_context.useChannelListContext(), onThemeChange = _a.onThemeChange, allowProfileEdit = _a.allowProfileEdit, allChannels = _a.allChannels, currentChannel = _a.currentChannel, channelListDispatcher = _a.channelListDispatcher, typingChannels = _a.typingChannels, initialized = _a.initialized, fetchChannelList = _a.fetchChannelList, onProfileEditSuccess = _a.onProfileEditSuccess;
    var _b = useSendbirdStateContext.useSendbirdStateContext(), stores = _b.stores, config = _b.config;
    var logger = config.logger, _c = config.isOnline, isOnline = _c === void 0 ? false : _c;
    var sdk = stores.sdkStore.sdk;
    var renderListItem = function (props) {
        var channel = props.item, index = props.index;
        var previewProps = {
            channel: channel,
            tabIndex: index,
            isSelected: (channel === null || channel === void 0 ? void 0 : channel.url) === (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url),
            isTyping: typingChannels === null || typingChannels === void 0 ? void 0 : typingChannels.some(function (_a) {
                var url = _a.url;
                return url === (channel === null || channel === void 0 ? void 0 : channel.url);
            }),
            renderChannelAction: function (props) { return React__default.default.createElement(GroupChannelList_components_GroupChannelPreviewAction.GroupChannelPreviewAction, _tslib.__assign({}, props)); },
            onClick: function () {
                if (!isOnline && !(sdk === null || sdk === void 0 ? void 0 : sdk.isCacheEnabled)) {
                    logger.warning('ChannelList: Inactivated clicking channel item during offline.');
                    return;
                }
                logger.info('ChannelList: Clicked on channel:', channel);
                channelListDispatcher({
                    type: ChannelList_context.SET_CURRENT_CHANNEL,
                    payload: channel,
                });
            },
            onLeaveChannel: function (channel, cb) {
                return _tslib.__awaiter(this, void 0, void 0, function () {
                    var response, err_1;
                    return _tslib.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                logger.info('ChannelList: Leaving channel', channel);
                                if (!channel) return [3 /*break*/, 4];
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, channel.leave()];
                            case 2:
                                response = _a.sent();
                                logger.info('ChannelList: Leaving channel success', response);
                                if (cb && typeof cb === 'function')
                                    cb(channel, null);
                                channelListDispatcher({
                                    type: ChannelList_context.LEAVE_CHANNEL_SUCCESS,
                                    payload: channel.url,
                                });
                                return [3 /*break*/, 4];
                            case 3:
                                err_1 = _a.sent();
                                logger.error('ChannelList: Leaving channel failed', err_1);
                                if (cb && typeof cb === 'function')
                                    cb(channel, err_1);
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            },
        };
        if (renderChannelPreview) {
            return (React__default.default.createElement("div", { key: channel === null || channel === void 0 ? void 0 : channel.url, onClick: previewProps.onClick }, renderChannelPreview(previewProps)));
        }
        return React__default.default.createElement(ChannelList_components_ChannelPreview, _tslib.__assign({ key: channel === null || channel === void 0 ? void 0 : channel.url }, previewProps));
    };
    return (React__default.default.createElement(GroupChannelListUIView.GroupChannelListUIView, { renderHeader: renderHeader, renderChannel: renderListItem, renderPlaceHolderError: renderPlaceHolderError, renderPlaceHolderLoading: renderPlaceHolderLoading, renderPlaceHolderEmptyList: renderPlaceHolderEmptyList, onChangeTheme: onThemeChange !== null && onThemeChange !== void 0 ? onThemeChange : utils.noop, allowProfileEdit: allowProfileEdit, onUserProfileUpdated: onProfileEditSuccess !== null && onProfileEditSuccess !== void 0 ? onProfileEditSuccess : utils.noop, channels: allChannels, onLoadMore: fetchChannelList, initialized: initialized, renderAddChannel: function () { return React__default.default.createElement(ChannelList_components_AddChannel.AddChannel, null); } }));
};

module.exports = ChannelListUI;
//# sourceMappingURL=ChannelListUI.js.map
