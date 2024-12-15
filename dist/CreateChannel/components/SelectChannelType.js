import React__default, { useContext } from 'react';
import { getSdk } from '../../sendbirdSelectors.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { u as useCreateChannelContext, a as CHANNEL_TYPE } from '../../chunks/bundle-CepS4VOw.js';
import { L as LocalizationContext } from '../../chunks/bundle-DhMUg-L7.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-Qkp2VIaZ.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import { M as Modal } from '../../chunks/bundle-ja8H3E0K.js';
import '../../chunks/bundle-BwmZGijR.js';
import '../../chunks/bundle-0WaCg6X7.js';
import '../../withSendbird.js';
import '../../chunks/bundle-HcNswZ5p.js';
import '../../chunks/bundle-dybWaw0v.js';
import '../../chunks/bundle-Bd-i99nk.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DjLJFwD7.js';
import '../../chunks/bundle-DB7YSrIT.js';
import '../../chunks/bundle-DQk0aENq.js';
import 'react-dom';
import '../../chunks/bundle-DnSobLtx.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../chunks/bundle-BKzcG-aC.js';
import '../../ui/SortByRow.js';

var isBroadcastChannelEnabled = function (sdk) {
    var _a;
    var ALLOW_BROADCAST_CHANNEL = 'allow_broadcast_channel';
    var applicationAttributes = (_a = sdk === null || sdk === void 0 ? void 0 : sdk.appInfo) === null || _a === void 0 ? void 0 : _a.applicationAttributes;
    if (Array.isArray(applicationAttributes)) {
        return applicationAttributes.includes(ALLOW_BROADCAST_CHANNEL);
    }
    return false;
};
var isSuperGroupChannelEnabled = function (sdk) {
    var _a;
    var ALLOW_SUPER_GROUP_CHANNEL = 'allow_super_group_channel';
    var applicationAttributes = (_a = sdk === null || sdk === void 0 ? void 0 : sdk.appInfo) === null || _a === void 0 ? void 0 : _a.applicationAttributes;
    if (Array.isArray(applicationAttributes)) {
        return applicationAttributes.includes(ALLOW_SUPER_GROUP_CHANNEL);
    }
    return false;
};

var SelectChannelType = function (props) {
    var onCancel = props.onCancel;
    var store = useSendbirdStateContext();
    var sdk = getSdk(store);
    var createChannelProps = useCreateChannelContext();
    var setStep = createChannelProps.setStep, setType = createChannelProps.setType;
    var stringSet = useContext(LocalizationContext).stringSet;
    var isBroadcastAvailable = isBroadcastChannelEnabled(sdk);
    var isSupergroupAvailable = isSuperGroupChannelEnabled(sdk);
    return (React__default.createElement(Modal, { titleText: stringSet === null || stringSet === void 0 ? void 0 : stringSet.MODAL__CREATE_CHANNEL__TITLE, hideFooter: true, onCancel: function () { onCancel === null || onCancel === void 0 ? void 0 : onCancel(); }, className: "sendbird-add-channel__modal" },
        React__default.createElement("div", { className: "sendbird-add-channel__rectangle-wrap" },
            React__default.createElement("div", { className: "sendbird-add-channel__rectangle", onClick: function () {
                    setType(CHANNEL_TYPE.GROUP);
                    setStep(1);
                }, role: "button", tabIndex: 0, onKeyDown: function () {
                    setType(CHANNEL_TYPE.GROUP);
                    setStep(1);
                } },
                React__default.createElement(Icon, { className: "sendbird-add-channel__rectangle__chat-icon", type: IconTypes.CHAT, fillColor: IconColors.PRIMARY, width: "28px", height: "28px" }),
                React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.MODAL__CREATE_CHANNEL__GROUP)),
            isSupergroupAvailable && (React__default.createElement("div", { className: "sendbird-add-channel__rectangle", onClick: function () {
                    setType(CHANNEL_TYPE.SUPERGROUP);
                    setStep(1);
                }, role: "button", tabIndex: 0, onKeyDown: function () {
                    setType(CHANNEL_TYPE.SUPERGROUP);
                    setStep(1);
                } },
                React__default.createElement(Icon, { className: "sendbird-add-channel__rectangle__supergroup-icon", type: IconTypes.SUPERGROUP, fillColor: IconColors.PRIMARY, width: "28px", height: "28px" }),
                React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.MODAL__CREATE_CHANNEL__SUPER))),
            isBroadcastAvailable && (React__default.createElement("div", { className: "sendbird-add-channel__rectangle", onClick: function () {
                    setType(CHANNEL_TYPE.BROADCAST);
                    setStep(1);
                }, role: "button", tabIndex: 0, onKeyDown: function () {
                    setType(CHANNEL_TYPE.BROADCAST);
                    setStep(1);
                } },
                React__default.createElement(Icon, { className: "sendbird-add-channel__rectangle__broadcast-icon", type: IconTypes.BROADCAST, fillColor: IconColors.PRIMARY, width: "28px", height: "28px" }),
                React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.MODAL__CREATE_CHANNEL__BROADCAST))))));
};

export { SelectChannelType as default };
//# sourceMappingURL=SelectChannelType.js.map
