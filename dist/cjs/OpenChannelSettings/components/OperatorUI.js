'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var LocalizationContext = require('../../chunks/bundle-Cy1ruNzs.js');
var ui_Label = require('../../chunks/bundle-CAR4EIKs.js');
var ui_Icon = require('../../ui/Icon.js');
var OpenChannelSettings_context = require('../context.js');
var OpenChannelSettings_components_OpenChannelProfile = require('./OpenChannelProfile.js');
var ui_Modal = require('../../chunks/bundle-DZhkNDpN.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var OpenChannelSettings_components_ParticipantUI = require('../../chunks/bundle-Lyx6fIGW.js');
var ui_Accordion = require('../../ui/Accordion.js');
var ui_Button = require('../../ui/Button.js');
var ui_ContextMenu = require('../../chunks/bundle-BKyZTqvq.js');
var ui_IconButton = require('../../ui/IconButton.js');
var _tslib = require('../../chunks/bundle-Bdr7xlea.js');
var ui_UserListItem = require('../../ui/UserListItem.js');
var utils = require('../../chunks/bundle-Ck6ikNW6.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-DgjptBQW.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('../../chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('@sendbird/chat');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-DrIKAEHN.js');
require('react-dom');
require('../../chunks/bundle-C1poxl5k.js');
require('../../ui/SortByRow.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-CLzI6bbe.js');
require('../../ui/OpenChannelAvatar.js');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../chunks/bundle-B2Yph-6C.js');
require('./EditDetailsModal.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../ui/Input.js');
require('../../ui/AccordionGroup.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../ui/Checkbox.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function DeleteChannel() {
    var _a, _b;
    var _c = React.useState(false), showDeleteChannelModal = _c[0], setShowDeleteChannelModal = _c[1];
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var globalState = useSendbirdStateContext.useSendbirdStateContext();
    var isOnline = (_a = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _a === void 0 ? void 0 : _a.isOnline;
    var logger = (_b = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _b === void 0 ? void 0 : _b.logger;
    var _d = OpenChannelSettings_context.useOpenChannelSettingsContext(), channel = _d.channel, onDeleteChannel = _d.onDeleteChannel;
    var deleteChannel = function () {
        channel === null || channel === void 0 ? void 0 : channel.delete().then(function (response) {
            logger.info('OpenChannelSettings: Delete channel success', response);
            if (onDeleteChannel) {
                onDeleteChannel(channel);
            }
        }).catch(function (error) {
            logger.warning('OpenChannelSettings: Delete channel failed', error);
        });
    };
    return (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement("div", { className: "sendbird-openchannel-settings__panel-item\n          sendbird-openchannel-settings__delete-channel\n            ".concat(!isOnline ? 'sendbird-openchannel-settings__panel-item__disabled' : ''), role: "button", tabIndex: 0, onKeyDown: function () {
                if (!isOnline) {
                    return;
                }
                setShowDeleteChannelModal(true);
            }, onClick: function () {
                if (!isOnline) {
                    return;
                }
                setShowDeleteChannelModal(true);
            } },
            React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.DELETE, fillColor: ui_Icon.IconColors.ERROR, className: [
                    'sendbird-openchannel-settings__panel-icon-left',
                    'sendbird-openchannel-settings__panel-icon__delete',
                ].join(' '), height: "24px", width: "24px" }),
            React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_PANEL)),
        showDeleteChannelModal && (React__default.default.createElement(ui_Modal.Modal, { isFullScreenOnMobile: true, onCancel: function () {
                setShowDeleteChannelModal(false);
            }, onSubmit: function () {
                deleteChannel();
            }, titleText: stringSet.OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_TITLE, submitText: stringSet.OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_SUBMIT }, stringSet.OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_CONTEXT))));
}

function OperatorListModal(_a) {
    var _b;
    var onCancel = _a.onCancel;
    var _c = React.useState([]), users = _c[0], setUsers = _c[1];
    var _d = React.useState(null), operatorQuery = _d[0], setOperatorQuery = _d[1];
    var channel = OpenChannelSettings_context.useOpenChannelSettingsContext().channel;
    var state = useSendbirdStateContext.useSendbirdStateContext();
    var currentUserId = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.userId;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    React.useEffect(function () {
        var operatorListQuery = channel === null || channel === void 0 ? void 0 : channel.createOperatorListQuery({
            limit: 20,
        });
        if (operatorListQuery) {
            operatorListQuery.next().then(function (participants) {
                setUsers(participants);
            });
            setOperatorQuery(operatorListQuery);
        }
    }, []);
    return (React__default.default.createElement("div", null,
        React__default.default.createElement(ui_Modal.Modal, { hideFooter: true, isFullScreenOnMobile: true, titleText: stringSet.OPEN_CHANNEL_SETTINGS__OPERATORS__TITLE_ALL, onCancel: onCancel },
            React__default.default.createElement("div", { className: "sendbird-more-users__popup-scroll", onScroll: function (e) {
                    var hasNext = operatorQuery === null || operatorQuery === void 0 ? void 0 : operatorQuery.hasNext;
                    var target = e.target;
                    var fetchMore = (target.clientHeight + target.scrollTop === target.scrollHeight);
                    if (hasNext && fetchMore) {
                        operatorQuery.next().then(function (o) {
                            setUsers(_tslib.__spreadArray(_tslib.__spreadArray([], users, true), o, true));
                        });
                    }
                } }, users.map(function (operator) { return (React__default.default.createElement(ui_UserListItem.UserListItem, { currentUser: currentUserId, user: operator, key: operator.userId, action: function (_a) {
                    var parentRef = _a.parentRef, actionRef = _a.actionRef;
                    return (currentUserId !== (operator === null || operator === void 0 ? void 0 : operator.userId)
                        ? (React__default.default.createElement(ui_ContextMenu.ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.default.createElement(ui_IconButton, { className: "sendbird-user-message__more__menu", width: "32px", height: "32px", onClick: toggleDropdown },
                                React__default.default.createElement(ui_Icon.default, { width: "24px", height: "24px", type: ui_Icon.IconTypes.MORE, fillColor: ui_Icon.IconColors.CONTENT_INVERSE }))); }, menuItems: function (closeDropdown) { return (React__default.default.createElement(ui_ContextMenu.MenuItems, { parentContainRef: parentRef, parentRef: actionRef, closeDropdown: closeDropdown, openLeft: true },
                                React__default.default.createElement(ui_ContextMenu.MenuItem$1, { onClick: function () {
                                        channel === null || channel === void 0 ? void 0 : channel.removeOperators([operator.userId]).then(function () {
                                            setUsers(users.filter(function (_a) {
                                                var userId = _a.userId;
                                                return userId !== operator.userId;
                                            }));
                                        });
                                        closeDropdown();
                                    }, testID: "open_channel_setting_operator_context_menu_unregister_operator" }, stringSet.OPEN_CHANNEL_SETTING__MODERATION__UNREGISTER_OPERATOR))); } })) : React__default.default.createElement(React__default.default.Fragment, null));
                } })); })))));
}

function AddOperatorsModal(_a) {
    var onCancel = _a.onCancel, onSubmit = _a.onSubmit;
    var _b = React.useState([]), participants = _b[0], setParticipants = _b[1];
    var _c = React.useState({}), selectedUsers = _c[0], setSelectedUsers = _c[1];
    var _d = React.useState(null), participantQuery = _d[0], setParticipantQuery = _d[1];
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var channel = OpenChannelSettings_context.useOpenChannelSettingsContext().channel;
    React.useEffect(function () {
        var participantListQuery = channel === null || channel === void 0 ? void 0 : channel.createParticipantListQuery({
            limit: 20,
        });
        if (participantListQuery) {
            participantListQuery.next().then(function (users) {
                setParticipants(users);
            });
            setParticipantQuery(participantListQuery);
        }
    }, []);
    var selectedCount = Object.keys(selectedUsers).filter(function (m) { return selectedUsers[m]; }).length;
    return (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement(ui_Modal.Modal, { isFullScreenOnMobile: true, type: ui_Button.ButtonTypes.PRIMARY, submitText: stringSet.CHANNEL_SETTING__OPERATORS__ADD_BUTTON, onCancel: onCancel, onSubmit: function () {
                var users = Object.keys(selectedUsers).filter(function (m) { return selectedUsers[m]; });
                channel === null || channel === void 0 ? void 0 : channel.addOperators(users).then(function () {
                    onSubmit(users);
                });
            }, titleText: stringSet.OPEN_CHANNEL_CONVERSATION__SELECT_PARTICIPANTS },
            React__default.default.createElement(ui_Label.Label, { color: (selectedCount > 0) ? ui_Label.LabelColors.PRIMARY : ui_Label.LabelColors.ONBACKGROUND_3, type: ui_Label.LabelTypography.CAPTION_1 }, "".concat(selectedCount, " ").concat(stringSet.MODAL__INVITE_MEMBER__SELECTED)),
            React__default.default.createElement("div", { className: "sendbird-more-users__popup-scroll", onScroll: function (e) {
                    var hasNext = participantQuery ? participantQuery.hasNext : false;
                    var target = e.target;
                    var fetchMore = (target.clientHeight + target.scrollTop === target.scrollHeight);
                    if (hasNext && fetchMore && participantQuery) {
                        participantQuery.next().then(function (o) {
                            setParticipants(_tslib.__spreadArray(_tslib.__spreadArray([], participants, true), o, true));
                        });
                    }
                } }, participants.map(function (participant) {
                var isOperator = (channel === null || channel === void 0 ? void 0 : channel.operators.find(function (operator) { return (operator === null || operator === void 0 ? void 0 : operator.userId) === (participant === null || participant === void 0 ? void 0 : participant.userId); })) ? true : false;
                return (React__default.default.createElement(ui_UserListItem.UserListItem, { user: participant, key: participant.userId, checkBox: true, checked: selectedUsers[participant.userId] || isOperator, disabled: isOperator, isOperator: isOperator, onChange: function (event) {
                        var _a;
                        var modifiedSelectedUsers = _tslib.__assign(_tslib.__assign({}, selectedUsers), (_a = {}, _a[event.target.id] = event.target.checked, _a));
                        if (!event.target.checked) {
                            delete modifiedSelectedUsers[event.target.id];
                        }
                        setSelectedUsers(modifiedSelectedUsers);
                    } }));
            })))));
}

var OperatorList = function () {
    var _a, _b;
    var _c = React.useState(false), showAdd = _c[0], setShowAdd = _c[1];
    var _d = React.useState(false), showMore = _d[0], setShowMore = _d[1];
    var state = useSendbirdStateContext.useSendbirdStateContext();
    var currentUserId = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.userId;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var channel = OpenChannelSettings_context.useOpenChannelSettingsContext().channel;
    return (React__default.default.createElement("div", null, (_b = channel === null || channel === void 0 ? void 0 : channel.operators) === null || _b === void 0 ? void 0 :
        _b.slice(0, 10).map(function (operator) { return (React__default.default.createElement(OpenChannelSettings_components_ParticipantUI.UserListItem, { key: operator.userId, user: operator, currentUser: currentUserId, action: function (_a) {
                var actionRef = _a.actionRef;
                return (currentUserId !== (operator === null || operator === void 0 ? void 0 : operator.userId)
                    ? (React__default.default.createElement(ui_ContextMenu.ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.default.createElement(ui_IconButton, { className: "sendbird-openchannel-operator-list__menu", width: "32px", height: "32px", onClick: toggleDropdown },
                            React__default.default.createElement(ui_Icon.default, { width: "24px", height: "24px", type: ui_Icon.IconTypes.MORE, fillColor: ui_Icon.IconColors.CONTENT_INVERSE }))); }, menuItems: function (closeDropdown) { return (React__default.default.createElement(ui_ContextMenu.MenuItems, { parentRef: actionRef, closeDropdown: closeDropdown, openLeft: true },
                            React__default.default.createElement(ui_ContextMenu.MenuItem$1, { onClick: function () {
                                    channel === null || channel === void 0 ? void 0 : channel.removeOperators([operator.userId]).then(function () {
                                        closeDropdown();
                                    });
                                }, testID: "open_channel_setting_operator_context_menu_unregister_operator" }, stringSet.OPEN_CHANNEL_SETTING__MODERATION__UNREGISTER_OPERATOR),
                            React__default.default.createElement(ui_ContextMenu.MuteMenuItem, { channel: channel, user: operator, onChange: function () { return closeDropdown(); }, onError: function () {
                                    // FIXME: handle error later
                                    closeDropdown();
                                }, testID: "open_channel_setting_operator_context_menu_".concat(operator.isMuted ? 'unmute' : 'mute') }, operator.isMuted
                                ? stringSet.OPEN_CHANNEL_SETTING__MODERATION__UNMUTE
                                : stringSet.OPEN_CHANNEL_SETTING__MODERATION__MUTE),
                            React__default.default.createElement(ui_ContextMenu.MenuItem$1, { onClick: function () {
                                    channel === null || channel === void 0 ? void 0 : channel.banUser(operator).then(function () {
                                        closeDropdown();
                                    });
                                }, testID: "open_channel_setting_operator_context_menu_ban" }, stringSet.OPEN_CHANNEL_SETTING__MODERATION__BAN))); } })) : React__default.default.createElement(React__default.default.Fragment, null));
            } })); }),
        React__default.default.createElement("div", { className: "sendbird-openchannel-operator-list__footer" },
            React__default.default.createElement(ui_Button.default, { type: ui_Button.ButtonTypes.SECONDARY, size: ui_Button.ButtonSizes.SMALL, onClick: function () {
                    setShowAdd(true);
                } }, stringSet.OPEN_CHANNEL_SETTINGS__OPERATORS__TITLE_ADD),
            (channel === null || channel === void 0 ? void 0 : channel.operators) && channel.operators.length > 10 && (React__default.default.createElement(ui_Button.default, { type: ui_Button.ButtonTypes.SECONDARY, size: ui_Button.ButtonSizes.SMALL, onClick: function () {
                    setShowMore(true);
                } }, stringSet.OPEN_CHANNEL_SETTINGS__OPERATORS__TITLE_ALL))),
        showMore && (React__default.default.createElement(React__default.default.Fragment, null,
            React__default.default.createElement(OperatorListModal, { onCancel: function () {
                    setShowMore(false);
                } }))),
        showAdd && (React__default.default.createElement(React__default.default.Fragment, null,
            React__default.default.createElement(AddOperatorsModal, { onCancel: function () { return setShowAdd(false); }, onSubmit: function () {
                    setShowAdd(false);
                } })))));
};

function MutedParticipantsModal(_a) {
    var _b;
    var onCancel = _a.onCancel;
    var _c = React.useState([]), mutedUsers = _c[0], setMutedUsers = _c[1];
    var _d = React.useState(null), userListQuery = _d[0], setUserListQuery = _d[1];
    var channel = OpenChannelSettings_context.useOpenChannelSettingsContext().channel;
    var state = useSendbirdStateContext.useSendbirdStateContext();
    var currentUserId = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.userId;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    React.useEffect(function () {
        var mutedUserListQuery = channel === null || channel === void 0 ? void 0 : channel.createMutedUserListQuery({
            limit: 10,
        });
        mutedUserListQuery === null || mutedUserListQuery === void 0 ? void 0 : mutedUserListQuery.next().then(function (users) {
            setMutedUsers(users);
        });
        if (mutedUserListQuery) {
            setUserListQuery(mutedUserListQuery);
        }
    }, []);
    return (React__default.default.createElement("div", null,
        React__default.default.createElement(ui_Modal.Modal, { isFullScreenOnMobile: true, hideFooter: true, onCancel: function () { return onCancel(); }, onSubmit: utils.noop, titleText: stringSet.OPEN_CHANNEL_SETTINGS__MUTED_MEMBERS__TITLE },
            React__default.default.createElement("div", { className: "sendbird-more-members__popup-scroll", onScroll: function (e) {
                    var hasNext = userListQuery === null || userListQuery === void 0 ? void 0 : userListQuery.hasNext;
                    var target = e.target;
                    var fetchMore = (target.clientHeight + target.scrollTop === target.scrollHeight);
                    if (hasNext && fetchMore) {
                        userListQuery.next().then(function (o) {
                            setMutedUsers(_tslib.__spreadArray(_tslib.__spreadArray([], mutedUsers, true), o, true));
                        });
                    }
                } }, mutedUsers.map(function (mutedUser) { return (React__default.default.createElement(ui_UserListItem.UserListItem, { currentUser: currentUserId, user: mutedUser, key: mutedUser.userId, action: function (_a) {
                    var actionRef = _a.actionRef;
                    return ((mutedUser === null || mutedUser === void 0 ? void 0 : mutedUser.userId) !== currentUserId
                        ? (React__default.default.createElement(ui_ContextMenu.ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.default.createElement(ui_IconButton, { className: "sendbird-user-message__more__menu", width: "32px", height: "32px", onClick: toggleDropdown },
                                React__default.default.createElement(ui_Icon.default, { width: "24px", height: "24px", type: ui_Icon.IconTypes.MORE, fillColor: ui_Icon.IconColors.CONTENT_INVERSE }))); }, menuItems: function (closeDropdown) { return (React__default.default.createElement(ui_ContextMenu.MenuItems, { parentRef: actionRef, closeDropdown: closeDropdown, openLeft: true },
                                React__default.default.createElement(ui_ContextMenu.MenuItem$1, { onClick: function () {
                                        channel === null || channel === void 0 ? void 0 : channel.unmuteUser(mutedUser).then(function () {
                                            closeDropdown();
                                            setMutedUsers(mutedUsers.filter(function (u) {
                                                return (u.userId !== mutedUser.userId);
                                            }));
                                        });
                                    }, testID: "open_channel_setting_muted_member_context_menu_unmute" }, stringSet.OPEN_CHANNEL_SETTING__MODERATION__UNMUTE))); } })) : React__default.default.createElement(React__default.default.Fragment, null));
                } })); })))));
}

var MutedParticipantList = function () {
    var _a;
    var _b = React.useState([]), mutedUsers = _b[0], setMutedUsers = _b[1];
    var _c = React.useState(false), hasNext = _c[0], setHasNext = _c[1];
    var _d = React.useState(false), showModal = _d[0], setShowModal = _d[1];
    var channel = OpenChannelSettings_context.useOpenChannelSettingsContext().channel;
    var state = useSendbirdStateContext.useSendbirdStateContext();
    var currentUserId = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.userId;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    React.useEffect(function () {
        if (!channel) {
            setMutedUsers([]);
            return;
        }
        var mutedUserListQuery = channel === null || channel === void 0 ? void 0 : channel.createMutedUserListQuery({
            limit: 10,
        });
        mutedUserListQuery.next().then(function (members) {
            setMutedUsers(members);
            setHasNext(mutedUserListQuery.hasNext);
        });
    }, [channel]);
    var refreshList = React.useCallback(function () {
        if (!channel) {
            setMutedUsers([]);
            return;
        }
        var mutedUserListQuery = channel === null || channel === void 0 ? void 0 : channel.createMutedUserListQuery({
            limit: 10,
        });
        mutedUserListQuery.next().then(function (members) {
            setMutedUsers(members);
            setHasNext(mutedUserListQuery.hasNext);
        });
    }, [channel]);
    return (React__default.default.createElement(React__default.default.Fragment, null,
        mutedUsers.map(function (mutedUser) { return (React__default.default.createElement(OpenChannelSettings_components_ParticipantUI.UserListItem, { key: mutedUser.userId, user: mutedUser, currentUser: currentUserId, isOperator: channel === null || channel === void 0 ? void 0 : channel.isOperator(mutedUser.userId), action: function (_a) {
                var actionRef = _a.actionRef;
                return ((mutedUser === null || mutedUser === void 0 ? void 0 : mutedUser.userId) !== currentUserId
                    ? (React__default.default.createElement(ui_ContextMenu.ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.default.createElement(ui_IconButton, { className: "sendbird-user-message__more__menu", width: "32px", height: "32px", onClick: toggleDropdown },
                            React__default.default.createElement(ui_Icon.default, { width: "24px", height: "24px", type: ui_Icon.IconTypes.MORE, fillColor: ui_Icon.IconColors.CONTENT_INVERSE }))); }, menuItems: function (closeDropdown) { return (React__default.default.createElement(ui_ContextMenu.MenuItems, { closeDropdown: closeDropdown, openLeft: true, parentRef: actionRef },
                            React__default.default.createElement(ui_ContextMenu.MenuItem$1, { onClick: function () {
                                    channel === null || channel === void 0 ? void 0 : channel.unmuteUser(mutedUser).then(function () {
                                        refreshList();
                                        closeDropdown();
                                    });
                                }, testID: "open_channel_setting_muted_member_context_menu_unmute" }, stringSet.OPEN_CHANNEL_SETTING__MODERATION__UNMUTE))); } })) : React__default.default.createElement(React__default.default.Fragment, null));
            } })); }),
        mutedUsers && mutedUsers.length === 0 && (React__default.default.createElement(ui_Label.Label, { className: "sendbird-channel-settings__empty-list", type: ui_Label.LabelTypography.SUBTITLE_2, color: ui_Label.LabelColors.ONBACKGROUND_3 }, stringSet.OPEN_CHANNEL_SETTINGS__MUTED_MEMBERS__NO_ONE)),
        hasNext && (React__default.default.createElement("div", { className: "sendbird-channel-settings-muted-participant-list__footer" },
            React__default.default.createElement(ui_Button.default, { type: ui_Button.ButtonTypes.SECONDARY, size: ui_Button.ButtonSizes.SMALL, onClick: function () {
                    setShowModal(true);
                } }, stringSet.OPEN_CHANNEL_SETTINGS__MUTED_MEMBERS__TITLE_ALL))),
        showModal && (React__default.default.createElement(MutedParticipantsModal, { onCancel: function () {
                setShowModal(false);
                refreshList();
            } }))));
};

function BannedUsersModal(_a) {
    var _b;
    var onCancel = _a.onCancel;
    var _c = React.useState([]), bannedUsers = _c[0], setBannedUsers = _c[1];
    var _d = React.useState(null), userListQuery = _d[0], setUserListQuery = _d[1];
    var channel = OpenChannelSettings_context.useOpenChannelSettingsContext().channel;
    var state = useSendbirdStateContext.useSendbirdStateContext();
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var currentUserId = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.userId;
    React.useEffect(function () {
        var bannedUserListQuery = channel === null || channel === void 0 ? void 0 : channel.createBannedUserListQuery();
        bannedUserListQuery === null || bannedUserListQuery === void 0 ? void 0 : bannedUserListQuery.next().then(function (users) {
            setBannedUsers(users);
        });
        setUserListQuery(bannedUserListQuery !== null && bannedUserListQuery !== void 0 ? bannedUserListQuery : null);
    }, []);
    return (React__default.default.createElement("div", null,
        React__default.default.createElement(ui_Modal.Modal, { hideFooter: true, isFullScreenOnMobile: true, onCancel: function () { return onCancel(); }, onSubmit: utils.noop, titleText: stringSet.OPEN_CHANNEL_SETTINGS__MUTED_MEMBERS__TITLE },
            React__default.default.createElement("div", { className: "sendbird-more-members__popup-scroll", onScroll: function (e) {
                    var hasNext = userListQuery === null || userListQuery === void 0 ? void 0 : userListQuery.hasNext;
                    var target = e.target;
                    var fetchMore = (target.clientHeight + target.scrollTop === target.scrollHeight);
                    if (hasNext && fetchMore) {
                        userListQuery.next().then(function (o) {
                            setBannedUsers(_tslib.__spreadArray(_tslib.__spreadArray([], bannedUsers, true), o, true));
                        });
                    }
                } }, bannedUsers.map(function (bannedUser) { return (React__default.default.createElement(ui_UserListItem.UserListItem, { user: bannedUser, key: bannedUser.userId, action: function (_a) {
                    var actionRef = _a.actionRef;
                    return ((bannedUser === null || bannedUser === void 0 ? void 0 : bannedUser.userId) !== currentUserId
                        ? (React__default.default.createElement(ui_ContextMenu.ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.default.createElement(ui_IconButton, { className: "sendbird-user-message__more__menu", width: "32px", height: "32px", onClick: toggleDropdown },
                                React__default.default.createElement(ui_Icon.default, { width: "24px", height: "24px", type: ui_Icon.IconTypes.MORE, fillColor: ui_Icon.IconColors.CONTENT_INVERSE }))); }, menuItems: function (closeDropdown) { return (React__default.default.createElement(ui_ContextMenu.MenuItems, { parentRef: actionRef, closeDropdown: closeDropdown, openLeft: true },
                                React__default.default.createElement(ui_ContextMenu.MenuItem$1, { onClick: function () {
                                        channel === null || channel === void 0 ? void 0 : channel.unbanUser(bannedUser).then(function () {
                                            closeDropdown();
                                            setBannedUsers(bannedUsers.filter(function (u) {
                                                return (u.userId !== bannedUser.userId);
                                            }));
                                        });
                                    }, testID: "open_channel_setting_banned_user_context_menu_unban" }, stringSet.OPEN_CHANNEL_SETTING__MODERATION__UNBAN))); } })) : React__default.default.createElement(React__default.default.Fragment, null));
                } })); })))));
}

var BannedUserList = function () {
    var _a;
    var _b = React.useState([]), bannedUsers = _b[0], setBannedUsers = _b[1];
    var _c = React.useState(false), hasNext = _c[0], setHasNext = _c[1];
    var _d = React.useState(false), showModal = _d[0], setShowModal = _d[1];
    var channel = OpenChannelSettings_context.useOpenChannelSettingsContext().channel;
    var state = useSendbirdStateContext.useSendbirdStateContext();
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var currentUserId = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.userId;
    React.useEffect(function () {
        if (!channel) {
            setBannedUsers([]);
            return;
        }
        var bannedUserListQuery = channel === null || channel === void 0 ? void 0 : channel.createBannedUserListQuery();
        bannedUserListQuery.next().then(function (users) {
            setBannedUsers(users);
            setHasNext(bannedUserListQuery.hasNext);
        });
    }, [channel]);
    var refreshList = React.useCallback(function () {
        if (!channel) {
            setBannedUsers([]);
            return;
        }
        var bannedUserListQuery = channel === null || channel === void 0 ? void 0 : channel.createBannedUserListQuery();
        bannedUserListQuery.next().then(function (users) {
            setBannedUsers(users);
            setHasNext(bannedUserListQuery.hasNext);
        });
    }, [channel]);
    return (React__default.default.createElement(React__default.default.Fragment, null,
        bannedUsers.map(function (bannedUser) { return (React__default.default.createElement(OpenChannelSettings_components_ParticipantUI.UserListItem, { key: bannedUser.userId, user: bannedUser, isOperator: channel === null || channel === void 0 ? void 0 : channel.isOperator(bannedUser.userId), action: function (_a) {
                var actionRef = _a.actionRef;
                return ((bannedUser === null || bannedUser === void 0 ? void 0 : bannedUser.userId) !== currentUserId
                    ? (React__default.default.createElement(ui_ContextMenu.ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.default.createElement(ui_IconButton, { className: "sendbird-user-message__more__menu", width: "32px", height: "32px", onClick: toggleDropdown },
                            React__default.default.createElement(ui_Icon.default, { width: "24px", height: "24px", type: ui_Icon.IconTypes.MORE, fillColor: ui_Icon.IconColors.CONTENT_INVERSE }))); }, menuItems: function (closeDropdown) { return (React__default.default.createElement(ui_ContextMenu.MenuItems, { parentRef: actionRef, closeDropdown: closeDropdown, openLeft: true },
                            React__default.default.createElement(ui_ContextMenu.MenuItem$1, { onClick: function () {
                                    channel === null || channel === void 0 ? void 0 : channel.unbanUser(bannedUser).then(function () {
                                        closeDropdown();
                                        refreshList();
                                    });
                                }, testID: "open_channel_setting_banned_user_context_menu_unban" }, stringSet.OPEN_CHANNEL_SETTING__MODERATION__UNBAN))); } })) : React__default.default.createElement(React__default.default.Fragment, null));
            } })); }),
        bannedUsers && bannedUsers.length === 0 && (React__default.default.createElement(ui_Label.Label, { className: "sendbird-channel-settings__empty-list", type: ui_Label.LabelTypography.SUBTITLE_2, color: ui_Label.LabelColors.ONBACKGROUND_3 }, stringSet.OPEN_CHANNEL_SETTINGS__BANNED_MEMBERS__NO_ONE)),
        hasNext && (React__default.default.createElement("div", { className: "sendbird-channel-settings-banned-user-list__footer" },
            React__default.default.createElement(ui_Button.default, { type: ui_Button.ButtonTypes.SECONDARY, size: ui_Button.ButtonSizes.SMALL, onClick: function () {
                    setShowModal(true);
                } }, stringSet.OPEN_CHANNEL_SETTINGS__BANNED_MEMBERS__TITLE_ALL))),
        showModal && (React__default.default.createElement(BannedUsersModal, { onCancel: function () {
                setShowModal(false);
                refreshList();
            } }))));
};

var copyToClipboard = function (text) {
    // @ts-ignore: Unreachable code error
    if (window.clipboardData && window.clipboardData.setData) {
        // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
        // @ts-ignore: Unreachable code error
        return window.clipboardData.setData('Text', text);
    }
    if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
        var textarea = document.createElement('textarea');
        textarea.textContent = text;
        textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand('copy'); // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            return false;
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
    return false;
};
var OperatorUI = function (_a) {
    var renderChannelProfile = _a.renderChannelProfile;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var _b = OpenChannelSettings_context.useOpenChannelSettingsContext(), onCloseClick = _b.onCloseClick, channel = _b.channel;
    return (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement("div", { className: "sendbird-openchannel-settings__header" },
            React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.H_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_SETTING__HEADER__TITLE),
            React__default.default.createElement(ui_Icon.default, { className: "sendbird-openchannel-settings__close-icon", type: ui_Icon.IconTypes.CLOSE, height: "24px", width: "24px", onClick: function () {
                    onCloseClick === null || onCloseClick === void 0 ? void 0 : onCloseClick();
                } })),
        React__default.default.createElement("div", { className: "sendbird-openchannel-settings__profile" }, (renderChannelProfile === null || renderChannelProfile === void 0 ? void 0 : renderChannelProfile()) || (React__default.default.createElement(OpenChannelSettings_components_OpenChannelProfile, null))),
        React__default.default.createElement("div", { className: "sendbird-openchannel-settings__url" },
            React__default.default.createElement(ui_Icon.default, { className: "sendbird-openchannel-settings__copy-icon", type: ui_Icon.IconTypes.COPY, height: "22px", width: "22px", onClick: function () {
                    var _a;
                    copyToClipboard((_a = channel === null || channel === void 0 ? void 0 : channel.url) !== null && _a !== void 0 ? _a : '');
                } }),
            React__default.default.createElement(ui_Label.Label, { className: "sendbird-openchannel-settings__url-label", type: ui_Label.LabelTypography.CAPTION_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, stringSet.OPEN_CHANNEL_SETTINGS__OPERATOR_URL),
            React__default.default.createElement(ui_Label.Label, { className: "sendbird-openchannel-settings__url-value", type: ui_Label.LabelTypography.SUBTITLE_2 }, channel === null || channel === void 0 ? void 0 : channel.url)),
        React__default.default.createElement(ui_Accordion.AccordionGroup, null,
            React__default.default.createElement(ui_Accordion.default, { className: "sendbird-openchannel-settings__operators-list", id: "operators", renderTitle: function () { return (React__default.default.createElement(React__default.default.Fragment, null,
                    React__default.default.createElement(ui_Icon.default, { className: "sendbird-openchannel-settings__operator-accordion-icon", type: ui_Icon.IconTypes.OPERATOR, fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" }),
                    React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.OPEN_CHANNEL_SETTINGS__OPERATORS_TITLE))); }, renderContent: function () { return (React__default.default.createElement(React__default.default.Fragment, null,
                    React__default.default.createElement(OperatorList, null))); } }),
            React__default.default.createElement(ui_Accordion.default, { className: "sendbird-channel-settings__operators-list", id: "participants", renderTitle: function () { return (React__default.default.createElement(React__default.default.Fragment, null,
                    React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.MEMBERS, fillColor: ui_Icon.IconColors.PRIMARY, width: 24, height: 24, className: "sendbird-openchannel-settings__operator-accordion-icon" }),
                    React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.OPEN_CHANNEL_SETTINGS__PARTICIPANTS_ACCORDION_TITLE))); }, renderContent: function () { return (React__default.default.createElement(React__default.default.Fragment, null,
                    React__default.default.createElement(OpenChannelSettings_components_ParticipantUI.ParticipantList, { isOperatorView: true }))); } }),
            React__default.default.createElement(ui_Accordion.default, { className: "sendbird-channel-settings__operators-list", id: "mutedMembers", renderTitle: function () { return (React__default.default.createElement(React__default.default.Fragment, null,
                    React__default.default.createElement(ui_Icon.default, { className: "sendbird-openchannel-settings__operator-accordion-icon", type: ui_Icon.IconTypes.MUTE, fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" }),
                    React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.OPEN_CHANNEL_SETTINGS__MUTED_MEMBERS__TITLE))); }, renderContent: function () { return (React__default.default.createElement(React__default.default.Fragment, null,
                    React__default.default.createElement(MutedParticipantList, null))); } }),
            React__default.default.createElement(ui_Accordion.default, { className: "sendbird-channel-settings__operators-list", id: "bannedUsers", renderTitle: function () { return (React__default.default.createElement(React__default.default.Fragment, null,
                    React__default.default.createElement(ui_Icon.default, { className: "sendbird-openchannel-settings__operator-accordion-icon", type: ui_Icon.IconTypes.BAN, fillColor: ui_Icon.IconColors.PRIMARY, width: "24px", height: "24px" }),
                    React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.OPEN_CHANNEL_SETTINGS__BANNED_MEMBERS__TITLE))); }, renderContent: function () { return (React__default.default.createElement(React__default.default.Fragment, null,
                    React__default.default.createElement(BannedUserList, null))); } })),
        React__default.default.createElement(DeleteChannel, null)));
};

exports.OperatorUI = OperatorUI;
exports.copyToClipboard = copyToClipboard;
exports.default = OperatorUI;
//# sourceMappingURL=OperatorUI.js.map
