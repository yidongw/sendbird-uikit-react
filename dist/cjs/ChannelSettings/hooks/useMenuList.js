'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var MutedMemberList = require('../../chunks/bundle-8mIcMPP_.js');
var MemberList = require('../../chunks/bundle-DYMi37Hl.js');
var LocalizationContext = require('../../chunks/bundle-Cy1ruNzs.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Badge = require('../../ui/Badge.js');
var ui_Toggle = require('../../ui/Toggle.js');
var ui_Label = require('../../chunks/bundle-CAR4EIKs.js');
var ChannelSettings_context = require('../context.js');
var ChannelSettings_components_ChannelSettingsMenuItem = require('../components/ChannelSettingsMenuItem.js');
require('../../ui/Button.js');
require('../../chunks/bundle-DR7YlSPs.js');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('react-dom');
require('../../chunks/bundle-Ck6ikNW6.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-C1poxl5k.js');
require('../../ui/IconButton.js');
require('../../chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('../../ui/UserListItem.js');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-DZhkNDpN.js');
require('../../chunks/bundle-DrIKAEHN.js');
require('css-vars-ponyfill');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-DgjptBQW.js');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../chunks/bundle-CvCKKQx5.js');
require('../../chunks/bundle-BNuA_uqY.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-CpvSgBLD.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../chunks/bundle-Dh0NAI0D.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var kFormatter = function (num) {
    return Math.abs(num) > 999
        ? "".concat((Math.abs(num) / 1000).toFixed(1), "K")
        : num;
};
var commonIconProps = {
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: 24,
    height: 24,
    className: 'sendbird-channel-settings__accordion-icon',
};
var commonLabelProps = {
    type: ui_Label.LabelTypography.SUBTITLE_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1,
};
var useMenuItems = function () {
    var _a = React.useState(false), frozen = _a[0], setFrozen = _a[1];
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var _b = ChannelSettings_context.useChannelSettingsContext(), channel = _b.channel, renderUserListItem = _b.renderUserListItem;
    // work around for
    // https://sendbird.slack.com/archives/G01290GCDCN/p1595922832000900
    // SDK bug - after frozen/unfrozen myRole becomes "none"
    React.useEffect(function () {
        var _a;
        setFrozen((_a = channel === null || channel === void 0 ? void 0 : channel.isFrozen) !== null && _a !== void 0 ? _a : false);
    }, [channel === null || channel === void 0 ? void 0 : channel.isFrozen]);
    return React.useMemo(function () { return ({
        operator: {
            operators: {
                icon: _tslib.__assign(_tslib.__assign({}, commonIconProps), { type: ui_Icon.IconTypes.OPERATOR }),
                label: _tslib.__assign(_tslib.__assign({}, commonLabelProps), { children: stringSet.CHANNEL_SETTING__OPERATORS__TITLE }),
                accordionComponent: function () { return React__default.default.createElement(MutedMemberList.OperatorList, { renderUserListItem: renderUserListItem }); },
            },
            allUsers: {
                icon: _tslib.__assign(_tslib.__assign({}, commonIconProps), { type: ui_Icon.IconTypes.MEMBERS }),
                label: _tslib.__assign(_tslib.__assign({}, commonLabelProps), { children: stringSet.CHANNEL_SETTING__MEMBERS__TITLE }),
                rightComponent: function (props) { return (React__default.default.createElement("div", { className: "sendbird-channel-settings__members" },
                    React__default.default.createElement(ui_Badge, { count: (channel === null || channel === void 0 ? void 0 : channel.memberCount) ? kFormatter(channel.memberCount) : '' }),
                    React__default.default.createElement(ChannelSettings_components_ChannelSettingsMenuItem.MenuItemAction, _tslib.__assign({}, props)))); },
                accordionComponent: function () { return React__default.default.createElement(MemberList.MemberList, { renderUserListItem: renderUserListItem }); },
            },
            mutedUsers: {
                icon: _tslib.__assign(_tslib.__assign({}, commonIconProps), { type: ui_Icon.IconTypes.MUTE }),
                label: _tslib.__assign(_tslib.__assign({}, commonLabelProps), { children: stringSet.CHANNEL_SETTING__MUTED_MEMBERS__TITLE }),
                accordionComponent: function () { return React__default.default.createElement(MutedMemberList.MutedMemberList, { renderUserListItem: renderUserListItem }); },
            },
            bannedUsers: {
                icon: _tslib.__assign(_tslib.__assign({}, commonIconProps), { type: ui_Icon.IconTypes.BAN }),
                label: _tslib.__assign(_tslib.__assign({}, commonLabelProps), { children: stringSet.CHANNEL_SETTING__BANNED_MEMBERS__TITLE }),
                accordionComponent: function () { return React__default.default.createElement(MutedMemberList.BannedUserList, { renderUserListItem: renderUserListItem }); },
            },
            freezeChannel: {
                hideMenu: channel === null || channel === void 0 ? void 0 : channel.isBroadcast,
                icon: _tslib.__assign(_tslib.__assign({}, commonIconProps), { type: ui_Icon.IconTypes.FREEZE }),
                label: _tslib.__assign(_tslib.__assign({}, commonLabelProps), { children: stringSet.CHANNEL_SETTING__FREEZE_CHANNEL }),
                rightComponent: function () { return React__default.default.createElement(ui_Toggle.Toggle, { className: "sendbird-channel-settings__frozen-icon", checked: frozen, onChange: function () {
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
                icon: _tslib.__assign(_tslib.__assign({}, commonIconProps), { type: ui_Icon.IconTypes.MEMBERS }),
                label: _tslib.__assign(_tslib.__assign({}, commonLabelProps), { children: stringSet.CHANNEL_SETTING__MEMBERS__TITLE }),
                rightComponent: function (props) { return (React__default.default.createElement("div", { className: "sendbird-channel-settings__members" },
                    React__default.default.createElement(ui_Badge, { count: (channel === null || channel === void 0 ? void 0 : channel.memberCount) ? kFormatter(channel.memberCount) : '' }),
                    React__default.default.createElement(ChannelSettings_components_ChannelSettingsMenuItem.MenuItemAction, _tslib.__assign({}, props)))); },
                accordionComponent: function () { return React__default.default.createElement(MemberList.MemberList, { renderUserListItem: renderUserListItem }); },
            },
        }
    }); }, [channel === null || channel === void 0 ? void 0 : channel.url, frozen]);
};

exports.default = useMenuItems;
exports.useMenuItems = useMenuItems;
//# sourceMappingURL=useMenuList.js.map
