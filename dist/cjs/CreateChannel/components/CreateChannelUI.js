'use strict';

var React = require('react');
var CreateChannel_context = require('../../chunks/bundle-C2pGgDQd.js');
var CreateChannel_components_InviteUsers = require('./InviteUsers.js');
var CreateChannel_components_SelectChannelType = require('./SelectChannelType.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../chunks/bundle-Ck6ikNW6.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-Bdr7xlea.js');
require('../../chunks/bundle-Cy1ruNzs.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../chunks/bundle-DZhkNDpN.js');
require('../../chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('react-dom');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-CAR4EIKs.js');
require('../../ui/Icon.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-DgjptBQW.js');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var CreateChannel = function (props) {
    var onCancel = props.onCancel, renderStepOne = props.renderStepOne;
    var _a = CreateChannel_context.useCreateChannelContext(), step = _a.step, setStep = _a.setStep, userListQuery = _a.userListQuery;
    return (React__default.default.createElement(React__default.default.Fragment, null,
        step === 0 && ((renderStepOne === null || renderStepOne === void 0 ? void 0 : renderStepOne()) || (React__default.default.createElement(CreateChannel_components_SelectChannelType, { onCancel: onCancel }))),
        step === 1 && (React__default.default.createElement(CreateChannel_components_InviteUsers, { userListQuery: userListQuery, onCancel: function () {
                setStep(0);
                onCancel === null || onCancel === void 0 ? void 0 : onCancel();
            } }))));
};

module.exports = CreateChannel;
//# sourceMappingURL=CreateChannelUI.js.map
