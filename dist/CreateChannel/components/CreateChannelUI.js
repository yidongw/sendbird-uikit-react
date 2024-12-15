import React__default from 'react';
import { u as useCreateChannelContext } from '../../chunks/bundle--I4N4hbH.js';
import InviteUsers from './InviteUsers.js';
import SelectChannelType from './SelectChannelType.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-YOpvheAB.js';
import '../../chunks/bundle-pQHYhigr.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-Ck-Lg2K3.js';
import '../../chunks/bundle-CbLNLMef.js';
import '../../chunks/bundle-B80WXNZi.js';
import '../../chunks/bundle-Bk1oUUzJ.js';
import '../../chunks/bundle-ptS-tNRF.js';
import '../../chunks/bundle-BL0uQSu6.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-fwRBR_Yw.js';
import '../../chunks/bundle-CnkNoe49.js';
import '../../chunks/bundle-DgxVBBM3.js';
import 'react-dom';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../chunks/bundle-Di0Zwz2X.js';
import '../../ui/Icon.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-gMJSD9hQ.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CHD1aKHO.js';
import '../../chunks/bundle-A5WEPjt6.js';
import '../../ui/SortByRow.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-C3toIOqd.js';
import '../../chunks/bundle-BbICJE5Z.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-CjhP75at.js';
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
