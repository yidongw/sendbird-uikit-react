'use strict';

var _tslib = require('../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var groupChannel = require('@sendbird/chat/groupChannel');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var UserProfileContext = require('../chunks/bundle-Bn25Hepq.js');
var uuid = require('../chunks/bundle-lGoyqUWm.js');
var compareIds = require('../chunks/bundle-DrXG_ZI5.js');
require('../withSendbird.js');
require('@sendbird/uikit-tools');
require('../chunks/bundle-DfISCDoH.js');
require('../chunks/bundle-e2d_I3io.js');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-4kwoH67w.js');
require('../chunks/bundle-BCJ8mayg.js');
require('../chunks/bundle-C0tdWwa4.js');
require('../chunks/bundle-BYHj6UqH.js');
require('react-dom');
require('../chunks/bundle-CmBrGegh.js');
require('../chunks/bundle-Q9YDOzjz.js');
require('../chunks/bundle-CzcmYPsN.js');
require('../ui/IconButton.js');
require('../ui/Button.js');
require('../chunks/bundle-D8-2bEdY.js');
require('../ui/Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../chunks/bundle-2M4zbjEc.js');
require('../chunks/bundle-BYSQ-mQr.js');
require('../ui/SortByRow.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function useAsyncRequest(request, options) {
    var _this = this;
    var _a;
    var _b = React.useState({ loading: true, response: undefined, error: undefined }), state = _b[0], setState = _b[1];
    var updateWithRequest = function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
        var response_1, error_1;
        return _tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    setState(function (prev) { return ({ loading: true, error: undefined, response: (options === null || options === void 0 ? void 0 : options.resetResponseOnRefresh) ? undefined : prev.response }); });
                    return [4 /*yield*/, request()];
                case 1:
                    response_1 = _a.sent();
                    if (response_1) {
                        setState(function (prev) { return (_tslib.__assign(_tslib.__assign({}, prev), { response: response_1, loading: false })); });
                    }
                    else {
                        setState(function (prev) { return (_tslib.__assign(_tslib.__assign({}, prev), { loading: Boolean(options === null || options === void 0 ? void 0 : options.persistLoadingIfNoResponse) })); });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    setState(function (prev) { return (_tslib.__assign(_tslib.__assign({}, prev), { error: error_1, loading: false })); });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        updateWithRequest();
        return function () {
            if (request.cancel && typeof request.cancel === 'function') {
                request.cancel();
            }
        };
    }, (_a = options === null || options === void 0 ? void 0 : options.deps) !== null && _a !== void 0 ? _a : []);
    return _tslib.__assign(_tslib.__assign({}, state), { refresh: updateWithRequest });
}

var ChannelSettingsContext = React__default.default.createContext(null);
var ChannelSettingsProvider = function (props) {
    var children = props.children, className = props.className, channelUrl = props.channelUrl, onCloseClick = props.onCloseClick, onLeaveChannel = props.onLeaveChannel, onChannelModified = props.onChannelModified, overrideInviteUser = props.overrideInviteUser, onBeforeUpdateChannel = props.onBeforeUpdateChannel, queries = props.queries, renderUserListItem = props.renderUserListItem;
    var _a = useSendbirdStateContext.useSendbirdStateContext(), config = _a.config, stores = _a.stores;
    var sdkStore = stores.sdkStore;
    var logger = config.logger;
    var _b = React.useState(), channelHandlerId = _b[0], setChannelHandlerId = _b[1];
    // hack to keep track of channel updates by triggering useEffect
    var _c = React.useState(function () { return uuid.uuidv4(); }), channelUpdateId = _c[0], setChannelUpdateId = _c[1];
    var forceUpdateUI = function () { return setChannelUpdateId(uuid.uuidv4()); };
    var _d = useAsyncRequest(function () { return _tslib.__awaiter(void 0, void 0, void 0, function () {
        var channel_1, channelHandler, newChannelHandlerId, error_1;
        var _a, _b, _c, _d;
        return _tslib.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    logger.info('ChannelSettings: fetching channel');
                    if (!channelUrl) {
                        logger.warning('ChannelSettings: channel url is required');
                        return [2 /*return*/];
                    }
                    else if (!sdkStore.initialized || !sdkStore.sdk) {
                        logger.warning('ChannelSettings: SDK is not initialized');
                        return [2 /*return*/];
                    }
                    else if (!sdkStore.sdk.groupChannel) {
                        logger.warning('ChannelSettings: GroupChannelModule is not specified in the SDK');
                        return [2 /*return*/];
                    }
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 3, , 4]);
                    if (channelHandlerId) {
                        if ((_b = (_a = sdkStore.sdk) === null || _a === void 0 ? void 0 : _a.groupChannel) === null || _b === void 0 ? void 0 : _b.removeGroupChannelHandler) {
                            logger.info('ChannelSettings: Removing message reciver handler', channelHandlerId);
                            sdkStore.sdk.groupChannel.removeGroupChannelHandler(channelHandlerId);
                        }
                        else if ((_c = sdkStore.sdk) === null || _c === void 0 ? void 0 : _c.groupChannel) {
                            logger.error('ChannelSettings: Not found the removeGroupChannelHandler');
                        }
                        setChannelHandlerId(undefined);
                    }
                    return [4 /*yield*/, sdkStore.sdk.groupChannel.getChannel(channelUrl)];
                case 2:
                    channel_1 = _e.sent();
                    channelHandler = {
                        onUserLeft: function (channel, user) {
                            if (compareIds.compareIds(channel === null || channel === void 0 ? void 0 : channel.url, channelUrl)) {
                                logger.info('ChannelSettings: onUserLeft', { channel: channel, user: user });
                                refresh();
                            }
                        },
                        onUserBanned: function (channel, user) {
                            if (compareIds.compareIds(channel === null || channel === void 0 ? void 0 : channel.url, channelUrl) && channel.isGroupChannel()) {
                                logger.info('ChannelSettings: onUserBanned', { channel: channel, user: user });
                                refresh();
                            }
                        },
                    };
                    newChannelHandlerId = uuid.uuidv4();
                    (_d = sdkStore.sdk.groupChannel) === null || _d === void 0 ? void 0 : _d.addGroupChannelHandler(newChannelHandlerId, new groupChannel.GroupChannelHandler(channelHandler));
                    setChannelHandlerId(newChannelHandlerId);
                    return [2 /*return*/, channel_1];
                case 3:
                    error_1 = _e.sent();
                    logger.error('ChannelSettings: fetching channel error:', error_1);
                    throw error_1;
                case 4: return [2 /*return*/];
            }
        });
    }); }, {
        resetResponseOnRefresh: true,
        persistLoadingIfNoResponse: true,
        deps: [sdkStore.initialized, sdkStore.sdk.groupChannel],
    }), _e = _d.response, channel = _e === void 0 ? null : _e, loading = _d.loading, error = _d.error, refresh = _d.refresh;
    React.useEffect(function () {
        refresh();
    }, [channelUrl, channelUpdateId]);
    return (React__default.default.createElement(ChannelSettingsContext.Provider, { value: {
            channelUrl: channelUrl,
            onCloseClick: onCloseClick,
            onLeaveChannel: onLeaveChannel,
            onChannelModified: onChannelModified,
            onBeforeUpdateChannel: onBeforeUpdateChannel,
            queries: queries,
            overrideInviteUser: overrideInviteUser,
            setChannelUpdateId: setChannelUpdateId,
            forceUpdateUI: forceUpdateUI,
            channel: channel,
            loading: loading,
            invalidChannel: Boolean(error),
            renderUserListItem: renderUserListItem,
        } },
        React__default.default.createElement(UserProfileContext.UserProfileProvider, _tslib.__assign({}, props),
            React__default.default.createElement("div", { className: "sendbird-channel-settings ".concat(className) }, children))));
};
var useChannelSettingsContext = function () {
    var context = React__default.default.useContext(ChannelSettingsContext);
    if (!context)
        throw new Error('ChannelSettingsContext not found. Use within the ChannelSettings module');
    return context;
};

exports.ChannelSettingsProvider = ChannelSettingsProvider;
exports.useChannelSettingsContext = useChannelSettingsContext;
//# sourceMappingURL=context.js.map
