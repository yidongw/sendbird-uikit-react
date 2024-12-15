import { _ as __assign } from '../chunks/bundle-Ck-Lg2K3.js';
import React__default, { useRef, useEffect, useState, useContext } from 'react';
import { GroupChannelFilter } from '@sendbird/chat/groupChannel';
import { useGroupChannelList, useGroupChannelHandler } from '@sendbird/uikit-tools';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import { U as UserProfileProvider } from '../chunks/bundle-C3toIOqd.js';
import { u as useOnlineStatus, a as useMarkAsDeliveredScheduler } from '../chunks/bundle-qZpJFKwp.js';
import { n as noop } from '../chunks/bundle-pQHYhigr.js';
import '../withSendbird.js';
import '../chunks/bundle-ptS-tNRF.js';
import '../chunks/bundle-BL0uQSu6.js';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-fwRBR_Yw.js';
import '../chunks/bundle-CnkNoe49.js';
import '../chunks/bundle-DgxVBBM3.js';
import 'react-dom';
import '../chunks/bundle-CbLNLMef.js';
import '../chunks/bundle-B80WXNZi.js';
import '../chunks/bundle-Bk1oUUzJ.js';
import '../ui/IconButton.js';
import '../ui/Button.js';
import '../chunks/bundle-Di0Zwz2X.js';
import '../ui/Icon.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../chunks/bundle-gMJSD9hQ.js';
import '@sendbird/chat/openChannel';
import '../chunks/bundle-CHD1aKHO.js';
import '../chunks/bundle-A5WEPjt6.js';
import '../ui/SortByRow.js';

var GroupChannelListContext = React__default.createContext(null);
var GroupChannelListProvider = function (props) {
    var _a, _b, _c;
    var children = props.children, _d = props.className, className = _d === void 0 ? '' : _d, selectedChannelUrl = props.selectedChannelUrl, _e = props.disableAutoSelect, disableAutoSelect = _e === void 0 ? false : _e, allowProfileEdit = props.allowProfileEdit, isTypingIndicatorEnabled = props.isTypingIndicatorEnabled, isMessageReceiptStatusEnabled = props.isMessageReceiptStatusEnabled, channelListQueryParams = props.channelListQueryParams, onThemeChange = props.onThemeChange, _f = props.onChannelSelect, onChannelSelect = _f === void 0 ? noop : _f, _g = props.onChannelCreated, onChannelCreated = _g === void 0 ? noop : _g, onCreateChannelClick = props.onCreateChannelClick, onBeforeCreateChannel = props.onBeforeCreateChannel, onUserProfileUpdated = props.onUserProfileUpdated;
    var globalStore = useSendbirdStateContext();
    var config = globalStore.config, stores = globalStore.stores;
    var sdkStore = stores.sdkStore;
    var sdk = sdkStore.sdk;
    var isConnected = useOnlineStatus(sdk, config.logger);
    var scheduler = useMarkAsDeliveredScheduler({ isConnected: isConnected }, config);
    var scrollRef = useRef(null);
    var channelListDataSource = useGroupChannelList(sdk, {
        collectionCreator: getCollectionCreator(sdk, channelListQueryParams),
        markAsDelivered: function (channels) { return channels.forEach(scheduler.push); },
        onChannelsDeleted: function (channelUrls) {
            channelUrls.forEach(function (url) {
                if (url === selectedChannelUrl)
                    onChannelSelect(null);
            });
        },
    });
    var refreshing = channelListDataSource.refreshing, initialized = channelListDataSource.initialized, groupChannels = channelListDataSource.groupChannels, refresh = channelListDataSource.refresh, loadMore = channelListDataSource.loadMore;
    // SideEffect: Auto select channel
    useEffect(function () {
        var _a;
        if (!disableAutoSelect && stores.sdkStore.initialized && initialized) {
            if (!selectedChannelUrl)
                onChannelSelect((_a = groupChannels[0]) !== null && _a !== void 0 ? _a : null);
        }
    }, [disableAutoSelect, stores.sdkStore.initialized, initialized, selectedChannelUrl]);
    // Recreates the GroupChannelCollection when `channelListQueryParams` change
    useEffect(function () {
        refresh();
    }, [
        Object.keys(channelListQueryParams !== null && channelListQueryParams !== void 0 ? channelListQueryParams : {}).sort()
            .map(function (key) { return "".concat(key, "=").concat(encodeURIComponent(JSON.stringify(channelListQueryParams[key]))); })
            .join('&'),
    ]);
    var _h = useState([]), typingChannelUrls = _h[0], setTypingChannelUrls = _h[1];
    useGroupChannelHandler(sdk, {
        onTypingStatusUpdated: function (channel) {
            var _a;
            var channelList = typingChannelUrls.filter(function (channelUrl) { return channelUrl !== channel.url; });
            if (((_a = channel.getTypingUsers()) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                setTypingChannelUrls(channelList.concat(channel.url));
            }
            else {
                setTypingChannelUrls(channelList);
            }
        },
    });
    return (React__default.createElement(GroupChannelListContext.Provider, { value: {
            className: className,
            selectedChannelUrl: selectedChannelUrl,
            disableAutoSelect: disableAutoSelect,
            allowProfileEdit: (_a = allowProfileEdit !== null && allowProfileEdit !== void 0 ? allowProfileEdit : config.allowProfileEdit) !== null && _a !== void 0 ? _a : true,
            isTypingIndicatorEnabled: (_b = isTypingIndicatorEnabled !== null && isTypingIndicatorEnabled !== void 0 ? isTypingIndicatorEnabled : config.groupChannelList.enableTypingIndicator) !== null && _b !== void 0 ? _b : false,
            isMessageReceiptStatusEnabled: (_c = isMessageReceiptStatusEnabled !== null && isMessageReceiptStatusEnabled !== void 0 ? isMessageReceiptStatusEnabled : config.groupChannelList.enableMessageReceiptStatus) !== null && _c !== void 0 ? _c : false,
            onChannelSelect: onChannelSelect,
            onChannelCreated: onChannelCreated,
            onThemeChange: onThemeChange,
            onCreateChannelClick: onCreateChannelClick,
            onBeforeCreateChannel: onBeforeCreateChannel,
            onUserProfileUpdated: onUserProfileUpdated,
            typingChannelUrls: typingChannelUrls,
            refreshing: refreshing,
            initialized: initialized,
            groupChannels: groupChannels,
            refresh: refresh,
            loadMore: loadMore,
            scrollRef: scrollRef,
        } },
        React__default.createElement(UserProfileProvider, __assign({}, props),
            React__default.createElement("div", { className: "sendbird-channel-list ".concat(className) }, children))));
};
var useGroupChannelListContext = function () {
    var context = useContext(GroupChannelListContext);
    if (!context)
        throw new Error('GroupChannelListContext not found. Use within the GroupChannelList module.');
    return context;
};
function getCollectionCreator(sdk, channelListQueryParams) {
    return function (defaultParams) {
        var params = __assign(__assign({}, defaultParams), channelListQueryParams);
        return sdk.groupChannel.createGroupChannelCollection(__assign(__assign({}, params), { filter: new GroupChannelFilter(params) }));
    };
}

export { GroupChannelListContext, GroupChannelListProvider, useGroupChannelListContext };
//# sourceMappingURL=context.js.map
