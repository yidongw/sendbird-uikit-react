'use strict';

var _tslib = require('./bundle-DRvomNLJ.js');
var React = require('react');
var SendbirdChat = require('@sendbird/chat');
var LocalizationContext = require('./bundle-CmBrGegh.js');
var ChannelSettings_context = require('../ChannelSettings/context.js');
var ui_Button = require('../ui/Button.js');
var UserListItemMenu = require('./bundle-B5z2w3PD.js');
var ui_UserListItem = require('../ui/UserListItem.js');
var ui_Modal = require('./bundle-DfISCDoH.js');
var utils = require('./bundle-BYHj6UqH.js');
var index = require('./bundle-HoCgvUVa.js');
require('./bundle-D8-2bEdY.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function MembersModal(_a) {
    var _this = this;
    var onCancel = _a.onCancel, _b = _a.renderUserListItem, renderUserListItem = _b === void 0 ? function (props) { return React__default.default.createElement(ui_UserListItem.UserListItem, _tslib.__assign({}, props)); } : _b, _c = _a.memberListQueryParams, memberListQueryParams = _c === void 0 ? {} : _c;
    var _d = React.useState([]), members = _d[0], setMembers = _d[1];
    var _e = React.useState(null), memberQuery = _e[0], setMemberQuery = _e[1];
    var channel = ChannelSettings_context.useChannelSettingsContext().channel;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    React.useEffect(function () {
        var memberListQuery = channel === null || channel === void 0 ? void 0 : channel.createMemberListQuery(_tslib.__assign({ limit: 20 }, memberListQueryParams));
        memberListQuery === null || memberListQuery === void 0 ? void 0 : memberListQuery.next().then(function (members) {
            setMembers(members);
        });
        setMemberQuery(memberListQuery !== null && memberListQuery !== void 0 ? memberListQuery : null);
    }, []);
    return (React__default.default.createElement("div", null,
        React__default.default.createElement(ui_Modal.Modal, { isFullScreenOnMobile: true, hideFooter: true, onCancel: function () { return onCancel(); }, onSubmit: utils.noop, titleText: stringSet.CHANNEL_SETTING__MEMBERS__SEE_ALL_MEMBERS },
            React__default.default.createElement("div", { className: "sendbird-more-members__popup-scroll", onScroll: index.useOnScrollPositionChangeDetector({
                    onReachedBottom: function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
                        return _tslib.__generator(this, function (_a) {
                            if (memberQuery && memberQuery.hasNext) {
                                memberQuery.next().then(function (o) {
                                    setMembers(_tslib.__spreadArray(_tslib.__spreadArray([], members, true), o, true));
                                });
                            }
                            return [2 /*return*/];
                        });
                    }); },
                }) }, members.map(function (member, index) { return (React__default.default.createElement(React__default.default.Fragment, { key: member.userId }, renderUserListItem({
                // NOTE: This `index` is used to display the current user's user item at the top when customizing externally.
                index: index,
                user: member,
                channel: channel,
                renderListItemMenu: function (props) { return (React__default.default.createElement(UserListItemMenu.UserListItemMenu, _tslib.__assign({}, props, { onToggleOperatorState: function (_a) {
                        var isOperator = _a.newStatus;
                        var newMembers = _tslib.__spreadArray([], members, true);
                        for (var _i = 0, newMembers_1 = newMembers; _i < newMembers_1.length; _i++) {
                            var newMember = newMembers_1[_i];
                            if (newMember.userId === member.userId) {
                                newMember.role = isOperator ? SendbirdChat.Role.OPERATOR : SendbirdChat.Role.NONE;
                                break;
                            }
                        }
                        setMembers(newMembers);
                    }, onToggleMuteState: function (_a) {
                        var isMuted = _a.newStatus;
                        var newMembers = _tslib.__spreadArray([], members, true);
                        for (var _i = 0, newMembers_2 = newMembers; _i < newMembers_2.length; _i++) {
                            var newMember = newMembers_2[_i];
                            if (newMember.userId === member.userId) {
                                newMember.isMuted = isMuted;
                                break;
                            }
                        }
                        setMembers(newMembers);
                    }, onToggleBanState: function () {
                        setMembers(members.filter(function (_a) {
                            var userId = _a.userId;
                            return userId !== member.userId;
                        }));
                    } }))); },
            }))); })))));
}

function InviteUsersModal(_a) {
    var _this = this;
    var _b, _c, _d;
    var onCancel = _a.onCancel, onSubmit = _a.onSubmit, _e = _a.renderUserListItem, renderUserListItem = _e === void 0 ? function (props) { return React__default.default.createElement(ui_UserListItem.UserListItem, _tslib.__assign({}, props)); } : _e;
    var _f = React.useState([]), users = _f[0], setUsers = _f[1];
    var _g = React.useState(null), userListQuery = _g[0], setUserListQuery = _g[1];
    var _h = React.useState({}), selectedUsers = _h[0], setSelectedUsers = _h[1];
    var state = useSendbirdStateContext.useSendbirdStateContext();
    var sdk = (_c = (_b = state === null || state === void 0 ? void 0 : state.stores) === null || _b === void 0 ? void 0 : _b.sdkStore) === null || _c === void 0 ? void 0 : _c.sdk;
    var globalUserListQuery = (_d = state === null || state === void 0 ? void 0 : state.config) === null || _d === void 0 ? void 0 : _d.userListQuery;
    var _j = ChannelSettings_context.useChannelSettingsContext(), channel = _j.channel, overrideInviteUser = _j.overrideInviteUser, queries = _j.queries;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var onScroll = index.useOnScrollPositionChangeDetector({
        onReachedBottom: function () {
            return _tslib.__awaiter(this, void 0, void 0, function () {
                var users_1;
                return _tslib.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(userListQuery === null || userListQuery === void 0 ? void 0 : userListQuery.hasNext)) return [3 /*break*/, 2];
                            return [4 /*yield*/, userListQuery.next()];
                        case 1:
                            users_1 = _a.sent();
                            setUsers(function (prev) { return _tslib.__spreadArray(_tslib.__spreadArray([], prev, true), users_1, true); });
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        },
    });
    var onInviteUsers = function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
        var userIdsToInvite;
        return _tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userIdsToInvite = Object.keys(selectedUsers);
                    if (!(channel && typeof overrideInviteUser === 'function')) return [3 /*break*/, 1];
                    overrideInviteUser({ users: userIdsToInvite, onClose: onCancel, channel: channel });
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, (channel === null || channel === void 0 ? void 0 : channel.inviteWithUserIds(userIdsToInvite))];
                case 2:
                    _a.sent();
                    onSubmit(userIdsToInvite);
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var onSelectUser = function (user) {
        setSelectedUsers(function (_a) {
            var draft = _tslib.__rest(_a, []);
            if (draft[user.userId]) {
                delete draft[user.userId];
            }
            else {
                draft[user.userId] = user;
            }
            return draft;
        });
    };
    var membersMap = React.useMemo(function () {
        var _a;
        var _b, _c;
        // UIKit policy: In a super or broadcast channel, do not check the members when inviting users.
        if ((channel === null || channel === void 0 ? void 0 : channel.isSuper) || (channel === null || channel === void 0 ? void 0 : channel.isBroadcast))
            return _a = {}, _a[(_c = (_b = sdk.currentUser) === null || _b === void 0 ? void 0 : _b.userId) !== null && _c !== void 0 ? _c : ''] = sdk.currentUser, _a;
        return channel === null || channel === void 0 ? void 0 : channel.members.reduce(function (acc, cur) {
            acc[cur.userId] = cur;
            return acc;
        }, {});
    }, [channel === null || channel === void 0 ? void 0 : channel.members.length]);
    React.useEffect(function () {
        var fetchUsersAndSetQuery = function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
            var query, users_2;
            var _a;
            return _tslib.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        query = (_a = globalUserListQuery === null || globalUserListQuery === void 0 ? void 0 : globalUserListQuery()) !== null && _a !== void 0 ? _a : sdk === null || sdk === void 0 ? void 0 : sdk.createApplicationUserListQuery(queries === null || queries === void 0 ? void 0 : queries.applicationUserListQuery);
                        if (!query) return [3 /*break*/, 2];
                        return [4 /*yield*/, query.next()];
                    case 1:
                        users_2 = _b.sent();
                        setUserListQuery(query);
                        setUsers(users_2);
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        fetchUsersAndSetQuery();
    }, [sdk]);
    return (React__default.default.createElement("div", null,
        React__default.default.createElement(ui_Modal.Modal, { isFullScreenOnMobile: true, disabled: Object.keys(selectedUsers).length === 0, submitText: stringSet.BUTTON__INVITE, type: ui_Button.ButtonTypes.PRIMARY, onCancel: function () { return onCancel(); }, onSubmit: onInviteUsers, titleText: stringSet.CHANNEL_SETTING__MEMBERS__SELECT_TITLE },
            React__default.default.createElement("div", { className: "sendbird-more-members__popup-scroll", onScroll: onScroll },
                React__default.default.createElement("div", { className: "sendbird-more-members__popup-scroll__inner" }, users.map(function (user) {
                    var isMember = Boolean(membersMap ? membersMap[user.userId] : false);
                    var isSelected = Boolean(selectedUsers[user.userId]);
                    return (React__default.default.createElement(React__default.default.Fragment, { key: user.userId }, renderUserListItem({
                        user: user,
                        checkBox: true,
                        checked: isMember || isSelected,
                        disabled: isMember,
                        onChange: function () { return onSelectUser(user); },
                    })));
                }))))));
}

var MemberList = function (_a) {
    var _b = _a.renderUserListItem, renderUserListItem = _b === void 0 ? function (props) { return React__default.default.createElement(ui_UserListItem.UserListItem, _tslib.__assign({}, props)); } : _b, _c = _a.memberListQueryParams, memberListQueryParams = _c === void 0 ? {} : _c;
    var _d = React.useState([]), members = _d[0], setMembers = _d[1];
    var _e = React.useState(false), hasNext = _e[0], setHasNext = _e[1];
    var _f = React.useState(false), showAllMembers = _f[0], setShowAllMembers = _f[1];
    var _g = React.useState(false), showInviteUsers = _g[0], setShowInviteUsers = _g[1];
    var _h = ChannelSettings_context.useChannelSettingsContext(), channel = _h.channel, forceUpdateUI = _h.forceUpdateUI;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var isOperator = channel.myRole === SendbirdChat.Role.OPERATOR;
    var refreshList = React.useCallback(function () {
        if (!channel) {
            setMembers([]);
            return;
        }
        var memberUserListQuery = channel === null || channel === void 0 ? void 0 : channel.createMemberListQuery(_tslib.__assign({ limit: 10 }, memberListQueryParams));
        memberUserListQuery.next().then(function (members) {
            setMembers(members);
            setHasNext(memberUserListQuery.hasNext);
        });
    }, [channel === null || channel === void 0 ? void 0 : channel.url, channel === null || channel === void 0 ? void 0 : channel.createMemberListQuery]);
    React.useEffect(refreshList, [channel === null || channel === void 0 ? void 0 : channel.url]);
    return (React__default.default.createElement("div", { className: "sendbird-channel-settings-member-list" },
        members.map(function (member, index) { return (React__default.default.createElement(React__default.default.Fragment, { key: member.userId }, renderUserListItem({
            // NOTE: This `index` is used to display the current user's user item at the top when customizing externally.
            index: index,
            user: member,
            channel: channel,
            size: 'small',
            avatarSize: '24px',
            renderListItemMenu: isOperator
                ? function (props) { return (React__default.default.createElement(UserListItemMenu.UserListItemMenu, _tslib.__assign({}, props, { onToggleOperatorState: function (_a) {
                        var isOperator = _a.newStatus;
                        var newMembers = _tslib.__spreadArray([], members, true);
                        for (var _i = 0, newMembers_1 = newMembers; _i < newMembers_1.length; _i++) {
                            var newMember = newMembers_1[_i];
                            if (newMember.userId === member.userId) {
                                newMember.role = isOperator ? SendbirdChat.Role.OPERATOR : SendbirdChat.Role.NONE;
                                break;
                            }
                        }
                        setMembers(newMembers);
                    }, onToggleMuteState: function (_a) {
                        var isMuted = _a.newStatus;
                        var newMembers = _tslib.__spreadArray([], members, true);
                        for (var _i = 0, newMembers_2 = newMembers; _i < newMembers_2.length; _i++) {
                            var newMember = newMembers_2[_i];
                            if (newMember.userId === member.userId) {
                                newMember.isMuted = isMuted;
                                break;
                            }
                        }
                        setMembers(newMembers);
                    }, onToggleBanState: function () {
                        setMembers(members.filter(function (_a) {
                            var userId = _a.userId;
                            return userId !== member.userId;
                        }));
                    } }))); }
                : function () { return React__default.default.createElement(React__default.default.Fragment, null); },
        }))); }),
        React__default.default.createElement("div", { className: "sendbird-channel-settings-accordion__footer" },
            hasNext && (React__default.default.createElement(ui_Button.default, { type: ui_Button.ButtonTypes.SECONDARY, size: ui_Button.ButtonSizes.SMALL, onClick: function () { return setShowAllMembers(true); } }, stringSet.CHANNEL_SETTING__MEMBERS__SEE_ALL_MEMBERS)),
            React__default.default.createElement(ui_Button.default, { type: ui_Button.ButtonTypes.SECONDARY, size: ui_Button.ButtonSizes.SMALL, onClick: function () { return setShowInviteUsers(true); } }, stringSet.CHANNEL_SETTING__MEMBERS__INVITE_MEMBER)),
        showAllMembers && (React__default.default.createElement(MembersModal, { onCancel: function () {
                setShowAllMembers(false);
                refreshList();
                forceUpdateUI();
            }, renderUserListItem: renderUserListItem, memberListQueryParams: memberListQueryParams })),
        showInviteUsers && (React__default.default.createElement(InviteUsersModal, { onCancel: function () { return setShowInviteUsers(false); }, onSubmit: function () {
                setShowInviteUsers(false);
                refreshList();
                forceUpdateUI();
            }, renderUserListItem: renderUserListItem }))));
};

exports.MemberList = MemberList;
//# sourceMappingURL=bundle-DF4jOSgA.js.map
