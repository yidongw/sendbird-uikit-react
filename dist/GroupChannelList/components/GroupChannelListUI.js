import { _ as __assign, a as __awaiter, b as __generator } from '../../chunks/bundle-Ck-Lg2K3.js';
import React__default from 'react';
import { useGroupChannelListContext } from '../context.js';
import { G as GroupChannelListUIView } from '../../chunks/bundle-CJPkRcGP.js';
import { GroupChannelPreviewAction } from './GroupChannelPreviewAction.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { GroupChannelListItem } from './GroupChannelListItem.js';
import { AddGroupChannel } from './AddGroupChannel.js';
import { n as noop } from '../../chunks/bundle-pQHYhigr.js';
import '@sendbird/chat/groupChannel';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-C3toIOqd.js';
import '../../withSendbird.js';
import '../../chunks/bundle-ptS-tNRF.js';
import '../../chunks/bundle-BL0uQSu6.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-fwRBR_Yw.js';
import '../../chunks/bundle-CnkNoe49.js';
import '../../chunks/bundle-DgxVBBM3.js';
import 'react-dom';
import '../../chunks/bundle-CbLNLMef.js';
import '../../chunks/bundle-B80WXNZi.js';
import '../../chunks/bundle-Bk1oUUzJ.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-Di0Zwz2X.js';
import '../../ui/Icon.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-gMJSD9hQ.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CHD1aKHO.js';
import '../../chunks/bundle-A5WEPjt6.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-qZpJFKwp.js';
import './GroupChannelListHeader.js';
import '../../chunks/bundle-BbICJE5Z.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-CjhP75at.js';
import '../../ui/Header.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-DUTd4XYU.js';
import '../../EditUserProfile.js';
import '../../EditUserProfile/context.js';
import '../../EditUserProfile/components/EditUserProfileUI.js';
import '../../chunks/bundle-qVNDxr2e.js';
import '../../ui/Input.js';
import '../../ui/PlaceHolder.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-Yva9Tory.js';
import '../../chunks/bundle-DnsBu59R.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-CKpGqedk.js';
import '../../chunks/bundle-IQ2MguAG.js';
import '../../chunks/bundle-D4fsEPre.js';
import '../../chunks/bundle-BxmZCK6X.js';
import '../../chunks/bundle-B5oDG6vR.js';
import '../../chunks/bundle-01eKGnuS.js';
import '../../chunks/bundle-B6cyKQvH.js';
import '../../GroupChannel/components/TypingIndicator.js';
import '../../ui/Badge.js';
import '../../ui/ChannelAvatar.js';
import '../../chunks/bundle-Bi8yp0Ws.js';
import '../../ui/MentionUserLabel.js';
import '../../chunks/bundle-D6pm-XK9.js';
import '../../chunks/bundle-BS8ALexW.js';
import '../../chunks/bundle-D6b4jlvB.js';
import '../../CreateChannel.js';
import '../../CreateChannel/components/CreateChannelUI.js';
import '../../chunks/bundle--I4N4hbH.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-YOpvheAB.js';
import '../../CreateChannel/components/InviteUsers.js';
import '../../ui/UserListItem.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../CreateChannel/components/SelectChannelType.js';

var GroupChannelListUI = function (props) {
    var renderHeader = props.renderHeader, renderChannelPreview = props.renderChannelPreview, renderPlaceHolderError = props.renderPlaceHolderError, renderPlaceHolderLoading = props.renderPlaceHolderLoading, renderPlaceHolderEmptyList = props.renderPlaceHolderEmptyList;
    var _a = useGroupChannelListContext(), onChannelSelect = _a.onChannelSelect, onThemeChange = _a.onThemeChange, allowProfileEdit = _a.allowProfileEdit, typingChannelUrls = _a.typingChannelUrls, groupChannels = _a.groupChannels, initialized = _a.initialized, selectedChannelUrl = _a.selectedChannelUrl, loadMore = _a.loadMore, onUserProfileUpdated = _a.onUserProfileUpdated, scrollRef = _a.scrollRef;
    var _b = useSendbirdStateContext(), stores = _b.stores, config = _b.config;
    var logger = config.logger, isOnline = config.isOnline;
    var sdk = stores.sdkStore.sdk;
    var renderListItem = function (renderProps) {
        var channel = renderProps.item, index = renderProps.index;
        var itemProps = {
            channel: channel,
            tabIndex: index,
            isSelected: channel.url === selectedChannelUrl,
            isTyping: typingChannelUrls.includes(channel.url),
            renderChannelAction: function (props) { return React__default.createElement(GroupChannelPreviewAction, __assign({}, props)); },
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
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
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
            return (React__default.createElement("div", { key: channel.url, onClick: itemProps.onClick }, renderChannelPreview(itemProps)));
        }
        return React__default.createElement(GroupChannelListItem, __assign({ key: channel.url }, itemProps));
    };
    return (React__default.createElement(GroupChannelListUIView, { renderHeader: renderHeader, renderChannel: renderListItem, renderPlaceHolderError: renderPlaceHolderError, renderPlaceHolderLoading: renderPlaceHolderLoading, renderPlaceHolderEmptyList: renderPlaceHolderEmptyList, onChangeTheme: onThemeChange !== null && onThemeChange !== void 0 ? onThemeChange : noop, allowProfileEdit: allowProfileEdit, onUserProfileUpdated: onUserProfileUpdated !== null && onUserProfileUpdated !== void 0 ? onUserProfileUpdated : noop, channels: groupChannels, onLoadMore: loadMore, initialized: initialized, renderAddChannel: function () { return React__default.createElement(AddGroupChannel, null); }, scrollRef: scrollRef }));
};

export { GroupChannelListUI, GroupChannelListUI as default };
//# sourceMappingURL=GroupChannelListUI.js.map
