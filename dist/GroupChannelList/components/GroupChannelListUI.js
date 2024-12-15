import { _ as __assign, a as __awaiter, b as __generator } from '../../chunks/bundle-HcNswZ5p.js';
import React__default from 'react';
import { useGroupChannelListContext } from '../context.js';
import { G as GroupChannelListUIView } from '../../chunks/bundle-C7sMIP5_.js';
import { GroupChannelPreviewAction } from './GroupChannelPreviewAction.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { GroupChannelListItem } from './GroupChannelListItem.js';
import { AddGroupChannel } from './AddGroupChannel.js';
import { n as noop } from '../../chunks/bundle-0WaCg6X7.js';
import '@sendbird/chat/groupChannel';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-B91Bhfde.js';
import '../../withSendbird.js';
import '../../chunks/bundle-ja8H3E0K.js';
import '../../chunks/bundle-Bd-i99nk.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DjLJFwD7.js';
import '../../chunks/bundle-DB7YSrIT.js';
import '../../chunks/bundle-DQk0aENq.js';
import 'react-dom';
import '../../chunks/bundle-DhMUg-L7.js';
import '../../chunks/bundle-dybWaw0v.js';
import '../../chunks/bundle-DnSobLtx.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-Qkp2VIaZ.js';
import '../../ui/Icon.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../chunks/bundle-BKzcG-aC.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-qYO3S317.js';
import './GroupChannelListHeader.js';
import '../../chunks/bundle-2pbuHA3C.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-DkDQ1PWY.js';
import '../../ui/Header.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-DGMsaaNU.js';
import '../../EditUserProfile.js';
import '../../EditUserProfile/context.js';
import '../../EditUserProfile/components/EditUserProfileUI.js';
import '../../chunks/bundle-CuvnTIbR.js';
import '../../ui/Input.js';
import '../../ui/PlaceHolder.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-Y942n2iZ.js';
import '../../chunks/bundle-D-F3KakE.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-tnPVKzs2.js';
import '../../chunks/bundle-Biuu5CVW.js';
import '../../chunks/bundle-D4JzAgen.js';
import '../../chunks/bundle-BDE05Tho.js';
import '../../chunks/bundle-DfmFm_nl.js';
import '../../chunks/bundle-Djmtl7w8.js';
import '../../chunks/bundle-B6yWIKOT.js';
import '../../GroupChannel/components/TypingIndicator.js';
import '../../ui/Badge.js';
import '../../ui/ChannelAvatar.js';
import '../../chunks/bundle-AE2zORxE.js';
import '../../ui/MentionUserLabel.js';
import '../../chunks/bundle-DCxt9PzH.js';
import '../../chunks/bundle-BvQmfZZv.js';
import '../../chunks/bundle-ZRQ-yoGW.js';
import '../../CreateChannel.js';
import '../../CreateChannel/components/CreateChannelUI.js';
import '../../chunks/bundle-CepS4VOw.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-BwmZGijR.js';
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
