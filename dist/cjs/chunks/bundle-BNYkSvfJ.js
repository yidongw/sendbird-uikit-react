'use strict';

var React = require('react');
var sendbirdSelectors = require('../sendbirdSelectors.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

exports.CHANNEL_TYPE = void 0;
(function (CHANNEL_TYPE) {
    CHANNEL_TYPE["GROUP"] = "group";
    CHANNEL_TYPE["SUPERGROUP"] = "supergroup";
    CHANNEL_TYPE["BROADCAST"] = "broadcast";
})(exports.CHANNEL_TYPE || (exports.CHANNEL_TYPE = {}));

var CreateChannelContext = React__default.default.createContext(null);
var CreateChannelProvider = function (props) {
    var _a;
    var children = props.children, onCreateChannelClick = props.onCreateChannelClick, onBeforeCreateChannel = props.onBeforeCreateChannel, onChannelCreated = props.onChannelCreated, userListQuery = props.userListQuery, onCreateChannel = props.onCreateChannel, overrideInviteUser = props.overrideInviteUser;
    var store = useSendbirdStateContext.useSendbirdStateContext();
    var _userListQuery = userListQuery !== null && userListQuery !== void 0 ? userListQuery : (_a = store === null || store === void 0 ? void 0 : store.config) === null || _a === void 0 ? void 0 : _a.userListQuery;
    var _b = React.useState(0), step = _b[0], setStep = _b[1];
    var _c = React.useState(exports.CHANNEL_TYPE.GROUP), type = _c[0], setType = _c[1];
    return (React__default.default.createElement(CreateChannelContext.Provider, { value: {
            sdk: store.stores.sdkStore.sdk,
            createChannel: sendbirdSelectors.getCreateGroupChannel(store),
            onCreateChannelClick: onCreateChannelClick,
            onBeforeCreateChannel: onBeforeCreateChannel,
            onChannelCreated: onChannelCreated,
            userListQuery: _userListQuery,
            step: step,
            setStep: setStep,
            type: type,
            setType: setType,
            onCreateChannel: onCreateChannel,
            overrideInviteUser: overrideInviteUser,
        } }, children));
};
var useCreateChannelContext = function () {
    var context = React__default.default.useContext(CreateChannelContext);
    if (!context)
        throw new Error('CreateChannelContext not found. Use within the CreateChannel module.');
    return context;
};

exports.CreateChannelProvider = CreateChannelProvider;
exports.useCreateChannelContext = useCreateChannelContext;
//# sourceMappingURL=bundle-BNYkSvfJ.js.map
