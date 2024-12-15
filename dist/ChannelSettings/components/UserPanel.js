import React__default, { useContext, useState } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-DhMUg-L7.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-Qkp2VIaZ.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import Badge from '../../ui/Badge.js';
import { M as MemberList } from '../../chunks/bundle-DPIDaugc.js';
import { useChannelSettingsContext } from '../context.js';
import '../../chunks/bundle-HcNswZ5p.js';
import '../../chunks/bundle-dybWaw0v.js';
import '../../chunks/bundle-0WaCg6X7.js';
import '@sendbird/chat';
import '../../ui/Button.js';
import '../../chunks/bundle-Dexv6XYC.js';
import '@sendbird/chat/openChannel';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-BKzcG-aC.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-C5iY_IvV.js';
import '../../ui/IconButton.js';
import '../../chunks/bundle-Bd-i99nk.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DjLJFwD7.js';
import '../../chunks/bundle-DB7YSrIT.js';
import '../../chunks/bundle-DQk0aENq.js';
import '../../ui/UserListItem.js';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-ja8H3E0K.js';
import '../../chunks/bundle-DnSobLtx.js';
import 'css-vars-ponyfill';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../chunks/bundle-B91Bhfde.js';
import '../../chunks/bundle-2pbuHA3C.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-DkDQ1PWY.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-BwmZGijR.js';
import '../../chunks/bundle-Y942n2iZ.js';
import '../../chunks/bundle-D-F3KakE.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-tnPVKzs2.js';
import '../../chunks/bundle-zVlBKrSk.js';

var kFormatter = function (num) {
    return Math.abs(num) > 999
        ? "".concat((Math.abs(num) / 1000).toFixed(1), "K")
        : num;
};
var UserPanel = function () {
    var stringSet = useContext(LocalizationContext).stringSet;
    var _a = useState(false), showAccordion = _a[0], setShowAccordion = _a[1];
    var channel = useChannelSettingsContext().channel;
    return (React__default.createElement("div", { className: 'sendbird-channel-settings__user-panel' },
        React__default.createElement("div", { className: [
                'sendbird-channel-settings__panel-item',
                'sendbird-channel-settings__members',
            ].join(' '), role: "switch", "aria-checked": showAccordion, onKeyDown: function () { return setShowAccordion(!showAccordion); }, onClick: function () { return setShowAccordion(!showAccordion); }, tabIndex: 0 },
            React__default.createElement(Icon, { className: "sendbird-channel-settings__panel-icon-left", type: IconTypes.MEMBERS, fillColor: IconColors.PRIMARY, height: "24px", width: "24px" }),
            React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 },
                stringSet.CHANNEL_SETTING__MEMBERS__TITLE,
                React__default.createElement(Badge, { className: 'sendbird-channel-settings__badge', count: channel ? kFormatter(channel === null || channel === void 0 ? void 0 : channel.memberCount) : '' })),
            React__default.createElement(Icon, { className: [
                    'sendbird-channel-settings__panel-icon-right',
                    'sendbird-channel-settings__panel-icon--chevron',
                    (showAccordion ? 'sendbird-channel-settings__panel-icon--open' : ''),
                ].join(' '), type: IconTypes.CHEVRON_RIGHT, height: "24px", width: "24px" })),
        showAccordion && (React__default.createElement(MemberList, null))));
};

export { UserPanel as default };
//# sourceMappingURL=UserPanel.js.map
