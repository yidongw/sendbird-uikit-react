import React__default, { useContext, useState, useMemo } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-CbLNLMef.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { useChannelSettingsContext } from '../context.js';
import ChannelAvatar from '../../ui/ChannelAvatar.js';
import TextButton from '../../ui/TextButton.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-Di0Zwz2X.js';
import EditDetails from './EditDetailsModal.js';
import { a as isDefaultChannelName } from '../../chunks/bundle-BL0uQSu6.js';
import '../../chunks/bundle-Ck-Lg2K3.js';
import '../../chunks/bundle-B80WXNZi.js';
import '../../withSendbird.js';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-C3toIOqd.js';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-ptS-tNRF.js';
import '../../chunks/bundle-pQHYhigr.js';
import 'react-dom';
import '../../chunks/bundle-Bk1oUUzJ.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../ui/Icon.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-gMJSD9hQ.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CHD1aKHO.js';
import '../../chunks/bundle-DgxVBBM3.js';
import '../../chunks/bundle-fwRBR_Yw.js';
import '../../chunks/bundle-A5WEPjt6.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-BD8hNBsp.js';
import '../../chunks/bundle-BbICJE5Z.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-CjhP75at.js';
import '../../chunks/bundle-Bi8yp0Ws.js';
import '../../chunks/bundle-DUTd4XYU.js';
import '../../ui/Input.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-CnkNoe49.js';

var ChannelProfile = function () {
    var _a, _b, _c;
    var state = useSendbirdStateContext();
    var channelSettingStore = useChannelSettingsContext();
    var stringSet = useContext(LocalizationContext).stringSet;
    var _d = useState(false), showModal = _d[0], setShowModal = _d[1];
    var userId = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.userId;
    var theme = ((_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.theme) || 'light';
    var isOnline = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.isOnline;
    var disabled = !isOnline;
    var channel = channelSettingStore === null || channelSettingStore === void 0 ? void 0 : channelSettingStore.channel;
    var channelName = useMemo(function () {
        if (!(channel === null || channel === void 0 ? void 0 : channel.name) && !(channel === null || channel === void 0 ? void 0 : channel.members))
            return stringSet.NO_TITLE;
        if (isDefaultChannelName(channel))
            return ((channel === null || channel === void 0 ? void 0 : channel.members) || []).map(function (member) { return member.nickname || stringSet.NO_NAME; }).join(', ');
        return channel.name;
    }, [channel === null || channel === void 0 ? void 0 : channel.name, channel === null || channel === void 0 ? void 0 : channel.joinedMemberCount]);
    return (React__default.createElement("div", { className: "sendbird-channel-profile" },
        React__default.createElement("div", { className: "sendbird-channel-profile--inner" },
            React__default.createElement("div", { className: "sendbird-channel-profile__avatar" },
                React__default.createElement(ChannelAvatar, { channel: channel, userId: userId, theme: theme, width: 80, height: 80 })),
            React__default.createElement(Label, { className: "sendbird-channel-profile__title", type: LabelTypography.SUBTITLE_2, color: LabelColors.ONBACKGROUND_1 }, channelName),
            React__default.createElement(TextButton, { disabled: disabled, className: "sendbird-channel-profile__edit", onClick: function () {
                    if (disabled) {
                        return;
                    }
                    setShowModal(true);
                }, disableUnderline: true },
                React__default.createElement(Label, { type: LabelTypography.BUTTON_1, color: disabled ? LabelColors.ONBACKGROUND_2 : LabelColors.PRIMARY }, stringSet.CHANNEL_SETTING__PROFILE__EDIT)),
            showModal && (React__default.createElement(EditDetails, { onCancel: function () { return setShowModal(false); }, onSubmit: function () { return setShowModal(false); } })))));
};

export { ChannelProfile as default };
//# sourceMappingURL=ChannelProfile.js.map
