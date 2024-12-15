'use strict';

var _tslib = require('./bundle-DRvomNLJ.js');
var React = require('react');
var ui_Button = require('../ui/Button.js');
var ui_ContextMenu = require('./bundle-BYSQ-mQr.js');
var ui_Icon = require('../ui/Icon.js');
var ui_IconButton = require('../ui/IconButton.js');
var ui_Label = require('./bundle-D8-2bEdY.js');
var SendbirdChat = require('@sendbird/chat');
var LocalizationContext = require('./bundle-CmBrGegh.js');
var UserProfileContext = require('./bundle-Bn25Hepq.js');
require('../ui/AccordionGroup.js');
var ui_Avatar = require('./bundle-Dmsb_oex.js');
require('react-dom');
require('./bundle-CzcmYPsN.js');
require('@sendbird/uikit-tools');
require('../withSendbird.js');
var ui_Modal = require('./bundle-DfISCDoH.js');
require('css-vars-ponyfill');
require('./bundle-e2d_I3io.js');
require('@sendbird/chat/openChannel');
require('@sendbird/chat/groupChannel');
require('./bundle-2M4zbjEc.js');
var ui_MutedAvatarOverlay = require('../ui/MutedAvatarOverlay.js');
var ui_UserProfile = require('../ui/UserProfile.js');
var OpenChannelSettings_context = require('../OpenChannelSettings/context.js');
var ui_UserListItem = require('../ui/UserListItem.js');
var utils = require('./bundle-BYHj6UqH.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function ParticipantsModal(_a) {
    var _b, _c, _d;
    var onCancel = _a.onCancel;
    var state = useSendbirdStateContext.useSendbirdStateContext();
    var channel = OpenChannelSettings_context.useOpenChannelSettingsContext().channel;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var _e = React.useState([]), participants = _e[0], setParticipants = _e[1];
    var _f = React.useState(null), participantListQuery = _f[0], setParticipantListQuery = _f[1];
    var userId = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.userId;
    var sdk = (_d = (_c = state === null || state === void 0 ? void 0 : state.stores) === null || _c === void 0 ? void 0 : _c.sdkStore) === null || _d === void 0 ? void 0 : _d.sdk;
    var isOperatorView = channel === null || channel === void 0 ? void 0 : channel.isOperator(userId);
    React.useEffect(function () {
        if (!channel || !(channel === null || channel === void 0 ? void 0 : channel.createParticipantListQuery)) {
            return;
        }
        var participantListQuery = channel === null || channel === void 0 ? void 0 : channel.createParticipantListQuery({});
        setParticipantListQuery(participantListQuery);
        participantListQuery.next().then(function (participantList) {
            setParticipants(participantList);
        });
    }, []);
    return (React__default.default.createElement("div", null,
        React__default.default.createElement(ui_Modal.Modal, { hideFooter: true, isFullScreenOnMobile: true, onCancel: function () { return onCancel(); }, onSubmit: utils.noop, titleText: stringSet.OPEN_CHANNEL_SETTINGS__ALL_PARTICIPANTS_TITLE },
            React__default.default.createElement("div", { className: "sendbird-more-members__popup-scroll", onScroll: function (e) {
                    if (participantListQuery) {
                        var hasNext = participantListQuery.hasNext;
                        var target = e.target;
                        var fetchMore = (target.clientHeight + target.scrollTop === target.scrollHeight);
                        if (hasNext && fetchMore) {
                            participantListQuery.next().then(function (fetchedParticipants) {
                                setParticipants(_tslib.__spreadArray(_tslib.__spreadArray([], (participants !== null && participants !== void 0 ? participants : []), true), fetchedParticipants, true));
                            });
                        }
                    }
                } }, participants === null || participants === void 0 ? void 0 : participants.map(function (p) {
                var _a;
                var isOperator = channel === null || channel === void 0 ? void 0 : channel.isOperator(p.userId);
                return (React__default.default.createElement(ui_UserListItem.UserListItem, { user: p, key: p.userId, currentUser: (_a = sdk === null || sdk === void 0 ? void 0 : sdk.currentUser) === null || _a === void 0 ? void 0 : _a.userId, action: (userId !== p.userId && isOperatorView)
                        ? function (_a) {
                            var actionRef = _a.actionRef, parentRef = _a.parentRef;
                            return (React__default.default.createElement(ui_ContextMenu.ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.default.createElement(ui_IconButton, { className: "sendbird-user-message__more__menu", width: "32px", height: "32px", onClick: toggleDropdown },
                                    React__default.default.createElement(ui_Icon.default, { width: "24px", height: "24px", type: ui_Icon.IconTypes.MORE, fillColor: ui_Icon.IconColors.CONTENT_INVERSE }))); }, menuItems: function (closeDropdown) { return (React__default.default.createElement(ui_ContextMenu.MenuItems, { parentContainRef: parentRef, parentRef: actionRef, closeDropdown: closeDropdown, openLeft: true },
                                    React__default.default.createElement(ui_ContextMenu.OperatorMenuItem, { channel: channel, user: p, onChange: function () { return closeDropdown(); }, onError: function () {
                                            // FIXME: handle error later
                                            closeDropdown();
                                        }, testID: "open_channel_setting_participant_context_menu_".concat((isOperator) ? 'unregister_operator' : 'register_as_operator') }, isOperator
                                        ? stringSet.OPEN_CHANNEL_SETTING__MODERATION__UNREGISTER_OPERATOR
                                        : stringSet.OPEN_CHANNEL_SETTING__MODERATION__REGISTER_AS_OPERATOR),
                                    React__default.default.createElement(ui_ContextMenu.MuteMenuItem, { channel: channel, user: p, onChange: function () { return closeDropdown(); }, onError: function () {
                                            // FIXME: handle error later
                                            closeDropdown();
                                        }, testID: "open_channel_setting_participant_context_menu_".concat(p.isMuted ? 'unmute' : 'mute') }, p.isMuted
                                        ? stringSet.OPEN_CHANNEL_SETTING__MODERATION__UNMUTE
                                        : stringSet.OPEN_CHANNEL_SETTING__MODERATION__MUTE),
                                    React__default.default.createElement(ui_ContextMenu.MenuItem$1, { onClick: function () {
                                            channel === null || channel === void 0 ? void 0 : channel.banUser(p).then(function () {
                                                closeDropdown();
                                            });
                                        }, testID: "open_channel_setting_participant_context_menu_ban" }, stringSet.OPEN_CHANNEL_SETTING__MODERATION__BAN))); } }));
                        }
                        : function () { return React__default.default.createElement(React__default.default.Fragment, null); } }));
            })))));
}

var UserListItem = function (_a) {
    var user = _a.user, currentUser = _a.currentUser, isOperator = _a.isOperator, action = _a.action;
    var avatarRef = React.useRef(null);
    var actionRef = React.useRef(null);
    var _b = UserProfileContext.useUserProfileContext(), disableUserProfile = _b.disableUserProfile, renderUserProfile = _b.renderUserProfile;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React__default.default.createElement("div", { className: "sendbird-participants-accordion__member" },
        React__default.default.createElement("div", { className: "sendbird-participants-accordion__member-avatar" },
            React__default.default.createElement(ui_ContextMenu.ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.default.createElement(React__default.default.Fragment, null,
                    React__default.default.createElement(ui_Avatar.Avatar, { className: "sendbird-participants-accordion__member-avatar__avatar", onClick: function () {
                            if (!disableUserProfile) {
                                toggleDropdown();
                            }
                        }, ref: avatarRef, src: user.profileUrl, width: 24, height: 24 }),
                    user instanceof SendbirdChat.Participant && user.isMuted ? (React__default.default.createElement(ui_MutedAvatarOverlay, null)) : '')); }, menuItems: function (closeDropdown) { return (renderUserProfile
                    ? renderUserProfile({
                        user: user,
                        currentUserId: currentUser !== null && currentUser !== void 0 ? currentUser : '',
                        close: closeDropdown,
                        avatarRef: avatarRef,
                    })
                    : (React__default.default.createElement(ui_ContextMenu.MenuItems, { openLeft: true, parentRef: avatarRef, 
                        // for catching location(x, y) of MenuItems
                        parentContainRef: avatarRef, 
                        // for toggling more options(menus & reactions)
                        closeDropdown: closeDropdown, style: { paddingTop: '0px', paddingBottom: '0px' } },
                        React__default.default.createElement(ui_UserProfile, { disableMessaging: true, user: user, currentUserId: currentUser, onSuccess: closeDropdown })))); } })),
        React__default.default.createElement(ui_Label.Label, { className: "sendbird-participants-accordion__member__title", type: ui_Label.LabelTypography.SUBTITLE_2, color: ui_Label.LabelColors.ONBACKGROUND_1 },
            user.nickname || stringSet.NO_NAME,
            (currentUser === user.userId) && (stringSet.OPEN_CHANNEL_SETTINGS__MEMBERS__YOU)), // if there is now nickname, display userId
        !user.nickname && (React__default.default.createElement(ui_Label.Label, { className: "sendbird-participants-accordion__member__title user-id", type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_2 }, user.userId)),
        isOperator && (React__default.default.createElement(ui_Label.Label, { className: "sendbird-participants-accordion__member__title\n                ".concat((user === null || user === void 0 ? void 0 : user.userId) !== currentUser ? 'operator' : '', "\n                ").concat((user === null || user === void 0 ? void 0 : user.userId) === currentUser ? 'self-operator' : '', "\n              "), type: ui_Label.LabelTypography.SUBTITLE_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, stringSet.OPEN_CHANNEL_SETTINGS__MEMBERS__OPERATOR)),
        action && (React__default.default.createElement("div", { className: "sendbird-participants-accordion__member__action", ref: actionRef }, action({ actionRef: actionRef })))));
};

function ParticipantList(_a) {
    var _b;
    var _c = _a.isOperatorView, isOperatorView = _c === void 0 ? false : _c;
    var globalState = useSendbirdStateContext.useSendbirdStateContext();
    var currentUserId = (_b = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _b === void 0 ? void 0 : _b.userId;
    var channel = OpenChannelSettings_context.useOpenChannelSettingsContext().channel;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var _d = React.useState(null), participants = _d[0], setParticipants = _d[1];
    var _e = React.useState(null), participantListQuery = _e[0], setParticipantListQuery = _e[1];
    var _f = React.useState(false), showParticipantsModal = _f[0], setShowParticipantsModal = _f[1];
    React.useEffect(function () {
        if (!channel || !(channel === null || channel === void 0 ? void 0 : channel.createParticipantListQuery)) {
            return;
        }
        var participantListQuery = channel === null || channel === void 0 ? void 0 : channel.createParticipantListQuery({ limit: 10 });
        setParticipantListQuery(participantListQuery);
        participantListQuery.next().then(function (participants) {
            setParticipants(participants);
        });
    }, [channel]);
    var refreshList = React.useCallback(function () {
        if (!channel) {
            setParticipants([]);
            return;
        }
        var participantListQuery = channel === null || channel === void 0 ? void 0 : channel.createParticipantListQuery({ limit: 10 });
        participantListQuery.next().then(function (participants) {
            setParticipants(participants);
        });
    }, [channel]);
    return (React__default.default.createElement("div", { className: "sendbird-openchannel-settings__participant-list", onScroll: function (e) {
            if (participantListQuery) {
                var hasNext = participantListQuery.hasNext;
                var target = e.target;
                var fetchMore = (target.clientHeight + target.scrollTop === target.scrollHeight);
                if (hasNext && fetchMore) {
                    participantListQuery.next().then(function (fetchedParticipants) {
                        setParticipants(_tslib.__spreadArray(_tslib.__spreadArray([], (participants !== null && participants !== void 0 ? participants : []), true), fetchedParticipants, true));
                    });
                }
            }
        } },
        React__default.default.createElement("div", null, participants === null || participants === void 0 ? void 0 :
            participants.map(function (p) {
                var isOperator = channel === null || channel === void 0 ? void 0 : channel.isOperator(p.userId);
                return (React__default.default.createElement(UserListItem, { user: p, currentUser: currentUserId, key: p.userId, isOperator: isOperator, action: function (_a) {
                        var actionRef = _a.actionRef;
                        return ((isOperatorView && currentUserId !== (p === null || p === void 0 ? void 0 : p.userId))
                            ? (React__default.default.createElement(ui_ContextMenu.ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.default.createElement(ui_IconButton, { className: "sendbird-openchannel-participant-list__menu", width: "32px", height: "32px", onClick: toggleDropdown },
                                    React__default.default.createElement(ui_Icon.default, { width: "24px", height: "24px", type: ui_Icon.IconTypes.MORE, fillColor: ui_Icon.IconColors.CONTENT_INVERSE }))); }, menuItems: function (closeDropdown) { return (React__default.default.createElement(ui_ContextMenu.MenuItems, { parentRef: actionRef, closeDropdown: closeDropdown, openLeft: true },
                                    React__default.default.createElement(ui_ContextMenu.OperatorMenuItem, { channel: channel, user: p, onChange: function () {
                                            closeDropdown();
                                            refreshList();
                                        }, onError: function () {
                                            // FIXME: handle error later
                                            closeDropdown();
                                        }, testID: "open_channel_setting_partitipant_conext_menu_".concat((isOperator) ? 'unregister_operator' : 'register_as_operator') }, isOperator
                                        ? stringSet.OPEN_CHANNEL_SETTING__MODERATION__UNREGISTER_OPERATOR
                                        : stringSet.OPEN_CHANNEL_SETTING__MODERATION__REGISTER_AS_OPERATOR),
                                    React__default.default.createElement(ui_ContextMenu.MuteMenuItem, { channel: channel, user: p, onChange: function () {
                                            closeDropdown();
                                            refreshList();
                                        }, onError: function () {
                                            // FIXME: handle error later
                                            closeDropdown();
                                        }, testID: "open_channel_setting_partitipant_conext_menu_".concat(p.isMuted ? 'unmute' : 'mute') }, p.isMuted
                                        ? stringSet.OPEN_CHANNEL_SETTING__MODERATION__UNMUTE
                                        : stringSet.OPEN_CHANNEL_SETTING__MODERATION__MUTE),
                                    React__default.default.createElement(ui_ContextMenu.MenuItem$1, { onClick: function () {
                                            channel === null || channel === void 0 ? void 0 : channel.banUser(p).then(function () {
                                                closeDropdown();
                                                refreshList();
                                            });
                                        }, testID: "open_channel_setting_partitipant_conext_menu_ban" }, stringSet.OPEN_CHANNEL_SETTING__MODERATION__BAN))); } }))
                            : null);
                    } }));
            }),
            (participants && participants.length === 0)
                ? (React__default.default.createElement(ui_Label.Label, { className: "sendbird-channel-settings__empty-list", type: ui_Label.LabelTypography.SUBTITLE_2, color: ui_Label.LabelColors.ONBACKGROUND_3 }, stringSet.OPEN_CHANNEL_SETTINGS__EMPTY_LIST)) : null,
            React__default.default.createElement("div", { className: "sendbird-openchannel-participant-list__footer" }, (participantListQuery === null || participantListQuery === void 0 ? void 0 : participantListQuery.hasNext) && (React__default.default.createElement(ui_Button.default, { type: ui_Button.ButtonTypes.SECONDARY, size: ui_Button.ButtonSizes.SMALL, onClick: function () { return setShowParticipantsModal(true); } }, stringSet.OPEN_CHANNEL_SETTINGS__ALL_PARTICIPANTS_TITLE))),
            showParticipantsModal && (React__default.default.createElement(ParticipantsModal, { onCancel: function () {
                    setShowParticipantsModal(false);
                    refreshList();
                } })))));
}

exports.ParticipantList = ParticipantList;
exports.UserListItem = UserListItem;
//# sourceMappingURL=bundle-BXr7r310.js.map
