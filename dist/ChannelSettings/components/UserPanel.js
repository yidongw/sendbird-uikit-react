import React__default, { useContext, useState } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-CbLNLMef.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-Di0Zwz2X.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import Badge from '../../ui/Badge.js';
import { M as MemberList } from '../../chunks/bundle-BLslmkak.js';
import { useChannelSettingsContext } from '../context.js';
import '../../chunks/bundle-Ck-Lg2K3.js';
import '../../chunks/bundle-B80WXNZi.js';
import '../../chunks/bundle-pQHYhigr.js';
import '@sendbird/chat';
import '../../ui/Button.js';
import '../../chunks/bundle-CgvAKhwx.js';
import '@sendbird/chat/openChannel';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-A5WEPjt6.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-gMJSD9hQ.js';
import '../../ui/IconButton.js';
import '../../chunks/bundle-BL0uQSu6.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-fwRBR_Yw.js';
import '../../chunks/bundle-CnkNoe49.js';
import '../../chunks/bundle-DgxVBBM3.js';
import '../../ui/UserListItem.js';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-ptS-tNRF.js';
import '../../chunks/bundle-Bk1oUUzJ.js';
import 'css-vars-ponyfill';
import '../../chunks/bundle-CHD1aKHO.js';
import '../../chunks/bundle-C3toIOqd.js';
import '../../chunks/bundle-BbICJE5Z.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-CjhP75at.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-YOpvheAB.js';
import '../../chunks/bundle-Yva9Tory.js';
import '../../chunks/bundle-DnsBu59R.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-CKpGqedk.js';
import '../../chunks/bundle-BD8hNBsp.js';

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
