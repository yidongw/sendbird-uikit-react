import React__default, { useState, useContext, useEffect } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-CbLNLMef.js';
import Accordion, { AccordionGroup } from '../../ui/Accordion.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-Di0Zwz2X.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import Badge from '../../ui/Badge.js';
import { Toggle } from '../../ui/Toggle.js';
import { O as OperatorList, M as MutedMemberList, B as BannedUserList } from '../../chunks/bundle-BhIrSa-z.js';
import { M as MemberList } from '../../chunks/bundle-BLslmkak.js';
import { useChannelSettingsContext } from '../context.js';
import '../../chunks/bundle-Ck-Lg2K3.js';
import '../../chunks/bundle-B80WXNZi.js';
import '../../ui/AccordionGroup.js';
import '../../chunks/bundle-pQHYhigr.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../ui/Button.js';
import '../../chunks/bundle-CgvAKhwx.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
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
/**
 * @deprecated
 * `ModerationPanel` is deprecated.
 * Use `@sendbird/ChannelSettings/components/ChannelSettingMenuList` instead.
 */
function ModerationPanel() {
    var _a = useState(false), frozen = _a[0], setFrozen = _a[1];
    var stringSet = useContext(LocalizationContext).stringSet;
    var channel = useChannelSettingsContext().channel;
    // work around for
    // https://sendbird.slack.com/archives/G01290GCDCN/p1595922832000900
    // SDK bug - after frozen/unfrozen myRole becomes "none"
    useEffect(function () {
        var _a;
        setFrozen((_a = channel === null || channel === void 0 ? void 0 : channel.isFrozen) !== null && _a !== void 0 ? _a : false);
    }, [channel]);
    return (React__default.createElement(AccordionGroup, { className: "sendbird-channel-settings__operator" },
        React__default.createElement(Accordion, { className: "sendbird-channel-settings__operators-list", id: "operators", renderTitle: function () { return (React__default.createElement(React__default.Fragment, null,
                React__default.createElement(Icon, { type: IconTypes.OPERATOR, fillColor: IconColors.PRIMARY, width: 24, height: 24, className: "sendbird-channel-settings__accordion-icon" }),
                React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__OPERATORS__TITLE))); }, renderContent: function () { return React__default.createElement(OperatorList, null); } }),
        React__default.createElement(Accordion, { className: "sendbird-channel-settings__members-list", id: "members", renderTitle: function () { return (React__default.createElement(React__default.Fragment, null,
                React__default.createElement(Icon, { type: IconTypes.MEMBERS, fillColor: IconColors.PRIMARY, width: 24, height: 24, className: "sendbird-channel-settings__accordion-icon" }),
                React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__MEMBERS__TITLE),
                React__default.createElement(Badge, { count: (channel === null || channel === void 0 ? void 0 : channel.memberCount) ? kFormatter(channel.memberCount) : '' }))); }, renderContent: function () { return React__default.createElement(MemberList, null); } }),
        // No muted members in broadcast channel
        !(channel === null || channel === void 0 ? void 0 : channel.isBroadcast) && (React__default.createElement(Accordion, { id: "mutedMembers", className: "sendbird-channel-settings__muted-members-list", renderTitle: function () { return (React__default.createElement(React__default.Fragment, null,
                React__default.createElement(Icon, { type: IconTypes.MUTE, fillColor: IconColors.PRIMARY, width: 24, height: 24, className: "sendbird-channel-settings__accordion-icon" }),
                React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__MUTED_MEMBERS__TITLE))); }, renderContent: function () { return React__default.createElement(MutedMemberList, null); } })),
        React__default.createElement(Accordion, { className: "sendbird-channel-settings__banned-members-list", id: "bannedUsers", renderTitle: function () { return (React__default.createElement(React__default.Fragment, null,
                React__default.createElement(Icon, { type: IconTypes.BAN, fillColor: IconColors.PRIMARY, width: 24, height: 24, className: "sendbird-channel-settings__accordion-icon" }),
                React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__BANNED_MEMBERS__TITLE))); }, renderContent: function () { return React__default.createElement(BannedUserList, null); } }),
        // cannot freeze broadcast channel
        !(channel === null || channel === void 0 ? void 0 : channel.isBroadcast) && (React__default.createElement("div", { className: "sendbird-channel-settings__freeze" },
            React__default.createElement(Icon, { type: IconTypes.FREEZE, fillColor: IconColors.PRIMARY, width: 24, height: 24, className: "sendbird-channel-settings__accordion-icon" }),
            React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__FREEZE_CHANNEL),
            React__default.createElement(Toggle, { className: "sendbird-channel-settings__frozen-icon", checked: frozen, onChange: function () {
                    if (frozen) {
                        channel === null || channel === void 0 ? void 0 : channel.unfreeze().then(function () {
                            setFrozen(function (prev) { return !prev; });
                        });
                    }
                    else {
                        channel === null || channel === void 0 ? void 0 : channel.freeze().then(function () {
                            setFrozen(function (prev) { return !prev; });
                        });
                    }
                } })))));
}

export { ModerationPanel as default };
//# sourceMappingURL=ModerationPanel.js.map
