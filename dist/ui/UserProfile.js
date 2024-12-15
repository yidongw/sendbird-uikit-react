import React__default, { useContext } from 'react';
import { L as LocalizationContext } from '../chunks/bundle-DhMUg-L7.js';
import { u as useUserProfileContext } from '../chunks/bundle-B91Bhfde.js';
import { getCreateGroupChannel } from '../sendbirdSelectors.js';
import { A as Avatar } from '../chunks/bundle-2pbuHA3C.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-Qkp2VIaZ.js';
import Button, { ButtonTypes } from './Button.js';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import '../chunks/bundle-HcNswZ5p.js';
import '../chunks/bundle-dybWaw0v.js';
import '@sendbird/uikit-tools';
import '../withSendbird.js';
import '../chunks/bundle-ja8H3E0K.js';
import '../chunks/bundle-Bd-i99nk.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-DjLJFwD7.js';
import '../chunks/bundle-DB7YSrIT.js';
import '../chunks/bundle-DQk0aENq.js';
import '../chunks/bundle-0WaCg6X7.js';
import 'react-dom';
import '../chunks/bundle-DnSobLtx.js';
import './IconButton.js';
import './Icon.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import '../chunks/bundle-zy1mnw8U.js';
import '../chunks/bundle-BKzcG-aC.js';
import './SortByRow.js';
import '../chunks/bundle-BwmZGijR.js';
import './ImageRenderer.js';
import '../chunks/bundle-DkDQ1PWY.js';

function UserProfile(_a) {
    var _b, _c;
    var user = _a.user, currentUserId = _a.currentUserId, _d = _a.disableMessaging, disableMessaging = _d === void 0 ? false : _d, onSuccess = _a.onSuccess;
    var store = useSendbirdStateContext();
    var createChannel = getCreateGroupChannel(store);
    var logger = (_b = store === null || store === void 0 ? void 0 : store.config) === null || _b === void 0 ? void 0 : _b.logger;
    var stringSet = useContext(LocalizationContext).stringSet;
    var currentUserId_ = currentUserId || ((_c = store === null || store === void 0 ? void 0 : store.config) === null || _c === void 0 ? void 0 : _c.userId);
    var onStartDirectMessage = useUserProfileContext().onStartDirectMessage;
    return (React__default.createElement("div", { className: "sendbird__user-profile" },
        React__default.createElement("section", { className: "sendbird__user-profile-avatar" },
            React__default.createElement(Avatar, { height: "80px", width: "80px", src: user === null || user === void 0 ? void 0 : user.profileUrl })),
        React__default.createElement("section", { className: "sendbird__user-profile-name" },
            React__default.createElement(Label, { type: LabelTypography.H_2, color: LabelColors.ONBACKGROUND_1 }, (user === null || user === void 0 ? void 0 : user.nickname) || stringSet.NO_NAME)),
        ((user === null || user === void 0 ? void 0 : user.userId) !== currentUserId_) && !disableMessaging && (React__default.createElement("section", { className: "sendbird__user-profile-message" },
            React__default.createElement(Button, { type: ButtonTypes.SECONDARY, onClick: function () {
                    // Create 1:1 channel
                    var params = {
                        isDistinct: false,
                        invitedUserIds: (user === null || user === void 0 ? void 0 : user.userId) ? [user === null || user === void 0 ? void 0 : user.userId] : [],
                        operatorUserIds: [currentUserId_],
                    };
                    onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess();
                    createChannel(params)
                        .then(function (groupChannel) {
                        logger.info('UserProfile, channel create', groupChannel);
                        onStartDirectMessage === null || onStartDirectMessage === void 0 ? void 0 : onStartDirectMessage(groupChannel);
                    });
                } }, stringSet.USER_PROFILE__MESSAGE))),
        React__default.createElement("div", { className: "sendbird__user-profile-separator" }),
        React__default.createElement("section", { className: "sendbird__user-profile-userId" },
            React__default.createElement(Label, { className: "sendbird__user-profile-userId--label", type: LabelTypography.CAPTION_2, color: LabelColors.ONBACKGROUND_2 }, stringSet.USER_PROFILE__USER_ID),
            React__default.createElement(Label, { className: "sendbird__user-profile-userId--value", type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_1 }, user === null || user === void 0 ? void 0 : user.userId))));
}

export { UserProfile as default };
//# sourceMappingURL=UserProfile.js.map
