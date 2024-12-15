import { _ as __assign } from '../../chunks/bundle-HcNswZ5p.js';
import React__default, { useState, useContext, useEffect, useMemo } from 'react';
import { O as OperatorList, M as MutedMemberList, B as BannedUserList } from '../../chunks/bundle-CNuoEUDm.js';
import { M as MemberList } from '../../chunks/bundle-DPIDaugc.js';
import { L as LocalizationContext } from '../../chunks/bundle-DhMUg-L7.js';
import { IconColors, IconTypes } from '../../ui/Icon.js';
import Badge from '../../ui/Badge.js';
import { Toggle } from '../../ui/Toggle.js';
import { a as LabelTypography, b as LabelColors } from '../../chunks/bundle-Qkp2VIaZ.js';
import { useChannelSettingsContext } from '../context.js';
import { MenuItemAction } from '../components/ChannelSettingsMenuItem.js';
import '../../ui/Button.js';
import '../../chunks/bundle-Dexv6XYC.js';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../chunks/bundle-BKzcG-aC.js';
import 'react-dom';
import '../../chunks/bundle-0WaCg6X7.js';
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
import '../../chunks/bundle-dybWaw0v.js';
import '../../chunks/bundle-zVlBKrSk.js';

var kFormatter = function (num) {
    return Math.abs(num) > 999
        ? "".concat((Math.abs(num) / 1000).toFixed(1), "K")
        : num;
};
var commonIconProps = {
    fillColor: IconColors.PRIMARY,
    width: 24,
    height: 24,
    className: 'sendbird-channel-settings__accordion-icon',
};
var commonLabelProps = {
    type: LabelTypography.SUBTITLE_1,
    color: LabelColors.ONBACKGROUND_1,
};
var useMenuItems = function () {
    var _a = useState(false), frozen = _a[0], setFrozen = _a[1];
    var stringSet = useContext(LocalizationContext).stringSet;
    var _b = useChannelSettingsContext(), channel = _b.channel, renderUserListItem = _b.renderUserListItem;
    // work around for
    // https://sendbird.slack.com/archives/G01290GCDCN/p1595922832000900
    // SDK bug - after frozen/unfrozen myRole becomes "none"
    useEffect(function () {
        var _a;
        setFrozen((_a = channel === null || channel === void 0 ? void 0 : channel.isFrozen) !== null && _a !== void 0 ? _a : false);
    }, [channel === null || channel === void 0 ? void 0 : channel.isFrozen]);
    return useMemo(function () { return ({
        operator: {
            operators: {
                icon: __assign(__assign({}, commonIconProps), { type: IconTypes.OPERATOR }),
                label: __assign(__assign({}, commonLabelProps), { children: stringSet.CHANNEL_SETTING__OPERATORS__TITLE }),
                accordionComponent: function () { return React__default.createElement(OperatorList, { renderUserListItem: renderUserListItem }); },
            },
            allUsers: {
                icon: __assign(__assign({}, commonIconProps), { type: IconTypes.MEMBERS }),
                label: __assign(__assign({}, commonLabelProps), { children: stringSet.CHANNEL_SETTING__MEMBERS__TITLE }),
                rightComponent: function (props) { return (React__default.createElement("div", { className: "sendbird-channel-settings__members" },
                    React__default.createElement(Badge, { count: (channel === null || channel === void 0 ? void 0 : channel.memberCount) ? kFormatter(channel.memberCount) : '' }),
                    React__default.createElement(MenuItemAction, __assign({}, props)))); },
                accordionComponent: function () { return React__default.createElement(MemberList, { renderUserListItem: renderUserListItem }); },
            },
            mutedUsers: {
                icon: __assign(__assign({}, commonIconProps), { type: IconTypes.MUTE }),
                label: __assign(__assign({}, commonLabelProps), { children: stringSet.CHANNEL_SETTING__MUTED_MEMBERS__TITLE }),
                accordionComponent: function () { return React__default.createElement(MutedMemberList, { renderUserListItem: renderUserListItem }); },
            },
            bannedUsers: {
                icon: __assign(__assign({}, commonIconProps), { type: IconTypes.BAN }),
                label: __assign(__assign({}, commonLabelProps), { children: stringSet.CHANNEL_SETTING__BANNED_MEMBERS__TITLE }),
                accordionComponent: function () { return React__default.createElement(BannedUserList, { renderUserListItem: renderUserListItem }); },
            },
            freezeChannel: {
                hideMenu: channel === null || channel === void 0 ? void 0 : channel.isBroadcast,
                icon: __assign(__assign({}, commonIconProps), { type: IconTypes.FREEZE }),
                label: __assign(__assign({}, commonLabelProps), { children: stringSet.CHANNEL_SETTING__FREEZE_CHANNEL }),
                rightComponent: function () { return React__default.createElement(Toggle, { className: "sendbird-channel-settings__frozen-icon", checked: frozen, onChange: function () {
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
                    } }); },
            },
        },
        nonOperator: {
            allUsers: {
                icon: __assign(__assign({}, commonIconProps), { type: IconTypes.MEMBERS }),
                label: __assign(__assign({}, commonLabelProps), { children: stringSet.CHANNEL_SETTING__MEMBERS__TITLE }),
                rightComponent: function (props) { return (React__default.createElement("div", { className: "sendbird-channel-settings__members" },
                    React__default.createElement(Badge, { count: (channel === null || channel === void 0 ? void 0 : channel.memberCount) ? kFormatter(channel.memberCount) : '' }),
                    React__default.createElement(MenuItemAction, __assign({}, props)))); },
                accordionComponent: function () { return React__default.createElement(MemberList, { renderUserListItem: renderUserListItem }); },
            },
        }
    }); }, [channel === null || channel === void 0 ? void 0 : channel.url, frozen]);
};

export { useMenuItems as default, useMenuItems };
//# sourceMappingURL=useMenuList.js.map
