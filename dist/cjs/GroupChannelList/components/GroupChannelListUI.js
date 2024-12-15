'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var GroupChannelList_context = require('../context.js');
var GroupChannelListUIView = require('../../chunks/bundle-DraHD9ga.js');
var GroupChannelList_components_GroupChannelPreviewAction = require('./GroupChannelPreviewAction.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var GroupChannelList_components_GroupChannelListItem = require('./GroupChannelListItem.js');
var GroupChannelList_components_AddGroupChannel = require('./AddGroupChannel.js');
var utils = require('../../chunks/bundle-BYHj6UqH.js');
require('@sendbird/chat/groupChannel');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-Bn25Hepq.js');
require('../../withSendbird.js');
require('../../chunks/bundle-DfISCDoH.js');
require('../../chunks/bundle-e2d_I3io.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-C0tdWwa4.js');
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
require('../../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-DXUZIRaw.js');
require('./GroupChannelListHeader.js');
require('../../chunks/bundle-Dmsb_oex.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../ui/Header.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-LSLwWEwG.js');
require('../../EditUserProfile.js');
require('../../EditUserProfile/context.js');
require('../../EditUserProfile/components/EditUserProfileUI.js');
require('../../chunks/bundle-COQ69cAW.js');
require('../../ui/Input.js');
require('../../ui/PlaceHolder.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-HoCgvUVa.js');
require('../../chunks/bundle-CIP3LaaL.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-mTQamCVh.js');
require('../../chunks/bundle-C8j790_0.js');
require('../../chunks/bundle-C3e9xkw6.js');
require('../../chunks/bundle-DSQevcAL.js');
require('../../chunks/bundle-BayL2H8_.js');
require('../../chunks/bundle-BqTCW-mv.js');
require('../../chunks/bundle-CrV-FZvi.js');
require('../../GroupChannel/components/TypingIndicator.js');
require('../../ui/Badge.js');
require('../../ui/ChannelAvatar.js');
require('../../chunks/bundle-B1unRPhi.js');
require('../../ui/MentionUserLabel.js');
require('../../chunks/bundle-DhOkJsb_.js');
require('../../chunks/bundle-CZ8XCEGd.js');
require('../../chunks/bundle-BazUjMwn.js');
require('../../CreateChannel.js');
require('../../CreateChannel/components/CreateChannelUI.js');
require('../../chunks/bundle-BNYkSvfJ.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-Dcn1Gf-8.js');
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
