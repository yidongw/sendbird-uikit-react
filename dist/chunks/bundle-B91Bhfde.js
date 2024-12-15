import React__default, { useContext } from 'react';
import './bundle-HcNswZ5p.js';
import '@sendbird/uikit-tools';
import '../withSendbird.js';
import './bundle-ja8H3E0K.js';
import 'css-vars-ponyfill';
import './bundle-Bd-i99nk.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '@sendbird/chat/groupChannel';
import './bundle-zy1mnw8U.js';
import './bundle-DhMUg-L7.js';
import './bundle-DnSobLtx.js';
import './bundle-BKzcG-aC.js';
import 'react-dom';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import '../ui/IconButton.js';
import './bundle-Qkp2VIaZ.js';

/**
 * user profile goes deep inside the component tree
 * use this context as a short circuit to send in values
 */
var UserProfileContext = React__default.createContext({
    disableUserProfile: true,
    isOpenChannel: false,
});
var useUserProfileContext = function () { return useContext(UserProfileContext); };
var UserProfileProvider = function (_a) {
    var _b;
    var _c = _a.isOpenChannel, isOpenChannel = _c === void 0 ? false : _c, _d = _a.disableUserProfile, _disableUserProfile = _d === void 0 ? false : _d, _renderUserProfile = _a.renderUserProfile, _onUserProfileMessage = _a.onUserProfileMessage, _onStartDirectMessage = _a.onStartDirectMessage, children = _a.children;
    var config = useSendbirdStateContext().config;
    var onStartDirectMessage = (_b = _onStartDirectMessage !== null && _onStartDirectMessage !== void 0 ? _onStartDirectMessage : _onUserProfileMessage) !== null && _b !== void 0 ? _b : config.onStartDirectMessage;
    return (React__default.createElement(UserProfileContext.Provider, { value: {
            isOpenChannel: isOpenChannel,
            disableUserProfile: _disableUserProfile !== null && _disableUserProfile !== void 0 ? _disableUserProfile : !config.common.enableUsingDefaultUserProfile,
            renderUserProfile: _renderUserProfile !== null && _renderUserProfile !== void 0 ? _renderUserProfile : config.renderUserProfile,
            onStartDirectMessage: onStartDirectMessage,
            /** legacy of onStartDirectMessage */
            onUserProfileMessage: onStartDirectMessage,
        } }, children));
};

export { UserProfileProvider as U, useUserProfileContext as u };
//# sourceMappingURL=bundle-B91Bhfde.js.map
