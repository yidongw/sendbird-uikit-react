'use strict';

var React = require('react');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
require('../withSendbird.js');
require('../chunks/bundle-Bdr7xlea.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var CreateOpenChannelContext = React__default.default.createContext(null);
var CreateOpenChannelProvider = function (_a) {
    var _b, _c;
    var className = _a.className, children = _a.children, onCreateChannel = _a.onCreateChannel, onBeforeCreateChannel = _a.onBeforeCreateChannel;
    var _d = useSendbirdStateContext.useSendbirdStateContext(), stores = _d.stores, config = _d.config;
    var logger = config.logger;
    var sdk = ((_b = stores === null || stores === void 0 ? void 0 : stores.sdkStore) === null || _b === void 0 ? void 0 : _b.sdk) || null;
    var sdkInitialized = ((_c = stores === null || stores === void 0 ? void 0 : stores.sdkStore) === null || _c === void 0 ? void 0 : _c.initialized) || false;
    var createNewOpenChannel = React.useCallback(function (params) {
        var _a;
        var name = params.name, coverUrlOrImage = params.coverUrlOrImage;
        if (sdkInitialized) {
            var params_1 = {};
            params_1.operatorUserIds = ((_a = sdk === null || sdk === void 0 ? void 0 : sdk.currentUser) === null || _a === void 0 ? void 0 : _a.userId) ? [sdk.currentUser.userId] : [];
            params_1.name = name;
            params_1.coverUrlOrImage = coverUrlOrImage;
            sdk.openChannel.createChannel((onBeforeCreateChannel === null || onBeforeCreateChannel === void 0 ? void 0 : onBeforeCreateChannel(params_1)) || params_1)
                .then(function (openChannel) {
                logger.info('CreateOpenChannel: Succeeded creating openChannel', openChannel);
                onCreateChannel === null || onCreateChannel === void 0 ? void 0 : onCreateChannel(openChannel);
            })
                .catch(function (err) {
                logger.warning('CreateOpenChannel: Failed creating openChannel', err);
            });
        }
    }, [sdkInitialized, onBeforeCreateChannel, onCreateChannel]);
    return (React__default.default.createElement(CreateOpenChannelContext.Provider, { value: {
            // interface
            sdk: sdk,
            sdkInitialized: sdkInitialized,
            logger: logger,
            createNewOpenChannel: createNewOpenChannel,
        } },
        React__default.default.createElement("div", { className: "sendbird-create-open-channel ".concat(className), style: { height: 0 } }, children)));
};
var useCreateOpenChannelContext = function () {
    var context = React__default.default.useContext(CreateOpenChannelContext);
    if (!context)
        throw new Error('CreateOpenChannelContext not found. Use within the CreateOpenChannel module.');
    return context;
};

exports.CreateOpenChannelProvider = CreateOpenChannelProvider;
exports.useCreateOpenChannelContext = useCreateOpenChannelContext;
//# sourceMappingURL=context.js.map
