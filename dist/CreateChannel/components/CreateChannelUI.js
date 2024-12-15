import React__default from 'react';
import { u as useCreateChannelContext } from '../../chunks/bundle-CepS4VOw.js';
import InviteUsers from './InviteUsers.js';
import SelectChannelType from './SelectChannelType.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-BwmZGijR.js';
import '../../chunks/bundle-0WaCg6X7.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-HcNswZ5p.js';
import '../../chunks/bundle-DhMUg-L7.js';
import '../../chunks/bundle-dybWaw0v.js';
import '../../chunks/bundle-DnSobLtx.js';
import '../../chunks/bundle-ja8H3E0K.js';
import '../../chunks/bundle-Bd-i99nk.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DjLJFwD7.js';
import '../../chunks/bundle-DB7YSrIT.js';
import '../../chunks/bundle-DQk0aENq.js';
import 'react-dom';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-Qkp2VIaZ.js';
import '../../ui/Icon.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../chunks/bundle-BKzcG-aC.js';
import '../../ui/SortByRow.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-B91Bhfde.js';
import '../../chunks/bundle-2pbuHA3C.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-DkDQ1PWY.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';

var CreateChannel = function (props) {
    var onCancel = props.onCancel, renderStepOne = props.renderStepOne;
    var _a = useCreateChannelContext(), step = _a.step, setStep = _a.setStep, userListQuery = _a.userListQuery;
    return (React__default.createElement(React__default.Fragment, null,
        step === 0 && ((renderStepOne === null || renderStepOne === void 0 ? void 0 : renderStepOne()) || (React__default.createElement(SelectChannelType, { onCancel: onCancel }))),
        step === 1 && (React__default.createElement(InviteUsers, { userListQuery: userListQuery, onCancel: function () {
                setStep(0);
                onCancel === null || onCancel === void 0 ? void 0 : onCancel();
            } }))));
};

export { CreateChannel as default };
//# sourceMappingURL=CreateChannelUI.js.map
