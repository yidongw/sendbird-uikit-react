import React__default, { useState, useContext } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-DhMUg-L7.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-Qkp2VIaZ.js';
import TextButton from '../../ui/TextButton.js';
import ChannelAvatar from '../../ui/OpenChannelAvatar.js';
import EditDetails from './EditDetailsModal.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { useOpenChannelSettingsContext } from '../context.js';
import '../../chunks/bundle-HcNswZ5p.js';
import '../../chunks/bundle-dybWaw0v.js';
import '../../chunks/bundle-DGMsaaNU.js';
import '../../chunks/bundle-2pbuHA3C.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-0WaCg6X7.js';
import '../../chunks/bundle-DkDQ1PWY.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-AE2zORxE.js';
import '../../chunks/bundle-BwmZGijR.js';
import '../../chunks/bundle-ja8H3E0K.js';
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
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../chunks/bundle-BKzcG-aC.js';
import '../../ui/SortByRow.js';
import '../../ui/Input.js';
import '../../chunks/bundle-B91Bhfde.js';

function ChannelProfile() {
    var _a, _b;
    var globalState = useSendbirdStateContext();
    var disabled = !((_a = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _a === void 0 ? void 0 : _a.isOnline);
    var theme = (_b = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _b === void 0 ? void 0 : _b.theme;
    var channel = useOpenChannelSettingsContext().channel;
    var title = channel === null || channel === void 0 ? void 0 : channel.name;
    var _c = useState(false), showModal = _c[0], setShowModal = _c[1];
    var stringSet = useContext(LocalizationContext).stringSet;
    return (React__default.createElement("div", { className: "sendbird-openchannel-profile" },
        React__default.createElement("div", { className: "sendbird-openchannel-profile--inner" },
            React__default.createElement("div", { className: "sendbird-openchannel-profile__avatar" },
                React__default.createElement(ChannelAvatar, { channel: channel, theme: theme, height: 80, width: 80 })),
            React__default.createElement(Label, { type: LabelTypography.SUBTITLE_2, color: LabelColors.ONBACKGROUND_1, className: "sendbird-openchannel-profile__title" }, title || stringSet.OPEN_CHANNEL_SETTINGS__NO_TITLE),
            React__default.createElement(TextButton, { disabled: disabled, className: "sendbird-openchannel-profile__edit", onClick: function () {
                    if (disabled) {
                        return;
                    }
                    setShowModal(true);
                }, disableUnderline: true },
                React__default.createElement(Label, { type: LabelTypography.BUTTON_1, color: disabled ? LabelColors.ONBACKGROUND_2 : LabelColors.PRIMARY }, stringSet.CHANNEL_SETTING__PROFILE__EDIT)),
            showModal && (React__default.createElement(EditDetails, { onCancel: function () { return setShowModal(false); } })))));
}

export { ChannelProfile as default };
//# sourceMappingURL=OpenChannelProfile.js.map
