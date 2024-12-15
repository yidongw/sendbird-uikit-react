'use strict';

var React = require('react');
require('./bundle-Bdr7xlea.js');
require('@sendbird/uikit-tools');
require('../withSendbird.js');
require('./bundle-DZhkNDpN.js');
require('css-vars-ponyfill');
require('./bundle-BLoixwYr.js');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('@sendbird/chat/groupChannel');
require('./bundle-CJM9Pdwg.js');
require('./bundle-Cy1ruNzs.js');
require('./bundle-DrIKAEHN.js');
require('./bundle-BKyZTqvq.js');
require('react-dom');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
require('../ui/IconButton.js');
require('./bundle-CAR4EIKs.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

/**
 * user profile goes deep inside the component tree
 * use this context as a short circuit to send in values
 */
var UserProfileContext = React__default.default.createContext({
    disableUserProfile: true,
    isOpenChannel: false,
});
var useUserProfileContext = function () { return React.useContext(UserProfileContext); };
var UserProfileProvider = function (_a) {
    var _b;
    var _c = _a.isOpenChannel, isOpenChannel = _c === void 0 ? false : _c, _d = _a.disableUserProfile, _disableUserProfile = _d === void 0 ? false : _d, _renderUserProfile = _a.renderUserProfile, _onUserProfileMessage = _a.onUserProfileMessage, _onStartDirectMessage = _a.onStartDirectMessage, children = _a.children;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var onStartDirectMessage = (_b = _onStartDirectMessage !== null && _onStartDirectMessage !== void 0 ? _onStartDirectMessage : _onUserProfileMessage) !== null && _b !== void 0 ? _b : config.onStartDirectMessage;
    return (React__default.default.createElement(UserProfileContext.Provider, { value: {
            isOpenChannel: isOpenChannel,
            disableUserProfile: _disableUserProfile !== null && _disableUserProfile !== void 0 ? _disableUserProfile : !config.common.enableUsingDefaultUserProfile,
            renderUserProfile: _renderUserProfile !== null && _renderUserProfile !== void 0 ? _renderUserProfile : config.renderUserProfile,
            onStartDirectMessage: onStartDirectMessage,
            /** legacy of onStartDirectMessage */
            onUserProfileMessage: onStartDirectMessage,
        } }, children));
};

exports.UserProfileProvider = UserProfileProvider;
exports.useUserProfileContext = useUserProfileContext;
//# sourceMappingURL=bundle-DgjptBQW.js.map
