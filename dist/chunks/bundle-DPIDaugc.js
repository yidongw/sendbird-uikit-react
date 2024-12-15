import { _ as __assign, a as __awaiter, b as __generator, c as __spreadArray, d as __rest } from './bundle-HcNswZ5p.js';
import React__default, { useState, useContext, useEffect, useMemo, useCallback } from 'react';
import { Role } from '@sendbird/chat';
import { L as LocalizationContext, u as useLocalization } from './bundle-DhMUg-L7.js';
import { useChannelSettingsContext } from '../ChannelSettings/context.js';
import Button, { ButtonTypes, ButtonSizes } from '../ui/Button.js';
import { U as UserListItemMenu } from './bundle-Dexv6XYC.js';
import { UserListItem } from '../ui/UserListItem.js';
import { M as Modal } from './bundle-ja8H3E0K.js';
import { n as noop } from './bundle-0WaCg6X7.js';
import { u as useOnScrollPositionChangeDetector } from './bundle-Y942n2iZ.js';
import './bundle-Qkp2VIaZ.js';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';

function MembersModal(_a) {
    var _this = this;
    var onCancel = _a.onCancel, _b = _a.renderUserListItem, renderUserListItem = _b === void 0 ? function (props) { return React__default.createElement(UserListItem, __assign({}, props)); } : _b, _c = _a.memberListQueryParams, memberListQueryParams = _c === void 0 ? {} : _c;
    var _d = useState([]), members = _d[0], setMembers = _d[1];
    var _e = useState(null), memberQuery = _e[0], setMemberQuery = _e[1];
    var channel = useChannelSettingsContext().channel;
    var stringSet = useContext(LocalizationContext).stringSet;
    useEffect(function () {
        var memberListQuery = channel === null || channel === void 0 ? void 0 : channel.createMemberListQuery(__assign({ limit: 20 }, memberListQueryParams));
        memberListQuery === null || memberListQuery === void 0 ? void 0 : memberListQuery.next().then(function (members) {
            setMembers(members);
        });
        setMemberQuery(memberListQuery !== null && memberListQuery !== void 0 ? memberListQuery : null);
    }, []);
    return (React__default.createElement("div", null,
        React__default.createElement(Modal, { isFullScreenOnMobile: true, hideFooter: true, onCancel: function () { return onCancel(); }, onSubmit: noop, titleText: stringSet.CHANNEL_SETTING__MEMBERS__SEE_ALL_MEMBERS },
            React__default.createElement("div", { className: "sendbird-more-members__popup-scroll", onScroll: useOnScrollPositionChangeDetector({
                    onReachedBottom: function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (memberQuery && memberQuery.hasNext) {
                                memberQuery.next().then(function (o) {
                                    setMembers(__spreadArray(__spreadArray([], members, true), o, true));
                                });
                            }
                            return [2 /*return*/];
                        });
                    }); },
                }) }, members.map(function (member, index) { return (React__default.createElement(React__default.Fragment, { key: member.userId }, renderUserListItem({
                // NOTE: This `index` is used to display the current user's user item at the top when customizing externally.
                index: index,
                user: member,
                channel: channel,
                renderListItemMenu: function (props) { return (React__default.createElement(UserListItemMenu, __assign({}, props, { onToggleOperatorState: function (_a) {
                        var isOperator = _a.newStatus;
                        var newMembers = __spreadArray([], members, true);
                        for (var _i = 0, newMembers_1 = newMembers; _i < newMembers_1.length; _i++) {
                            var newMember = newMembers_1[_i];
                            if (newMember.userId === member.userId) {
                                newMember.role = isOperator ? Role.OPERATOR : Role.NONE;
                                break;
                            }
                        }
                        setMembers(newMembers);
                    }, onToggleMuteState: function (_a) {
                        var isMuted = _a.newStatus;
                        var newMembers = __spreadArray([], members, true);
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
    var onCancel = _a.onCancel, onSubmit = _a.onSubmit, _e = _a.renderUserListItem, renderUserListItem = _e === void 0 ? function (props) { return React__default.createElement(UserListItem, __assign({}, props)); } : _e;
    var _f = useState([]), users = _f[0], setUsers = _f[1];
    var _g = useState(null), userListQuery = _g[0], setUserListQuery = _g[1];
    var _h = useState({}), selectedUsers = _h[0], setSelectedUsers = _h[1];
    var state = useSendbirdStateContext();
    var sdk = (_c = (_b = state === null || state === void 0 ? void 0 : state.stores) === null || _b === void 0 ? void 0 : _b.sdkStore) === null || _c === void 0 ? void 0 : _c.sdk;
    var globalUserListQuery = (_d = state === null || state === void 0 ? void 0 : state.config) === null || _d === void 0 ? void 0 : _d.userListQuery;
    var _j = useChannelSettingsContext(), channel = _j.channel, overrideInviteUser = _j.overrideInviteUser, queries = _j.queries;
    var stringSet = useLocalization().stringSet;
    var onScroll = useOnScrollPositionChangeDetector({
        onReachedBottom: function () {
            return __awaiter(this, void 0, void 0, function () {
                var users_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(userListQuery === null || userListQuery === void 0 ? void 0 : userListQuery.hasNext)) return [3 /*break*/, 2];
                            return [4 /*yield*/, userListQuery.next()];
                        case 1:
                            users_1 = _a.sent();
                            setUsers(function (prev) { return __spreadArray(__spreadArray([], prev, true), users_1, true); });
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        },
    });
    var onInviteUsers = function () { return __awaiter(_this, void 0, void 0, function () {
        var userIdsToInvite;
        return __generator(this, function (_a) {
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
            var draft = __rest(_a, []);
            if (draft[user.userId]) {
                delete draft[user.userId];
            }
            else {
                draft[user.userId] = user;
            }
            return draft;
        });
    };
    var membersMap = useMemo(function () {
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
    useEffect(function () {
        var fetchUsersAndSetQuery = function () { return __awaiter(_this, void 0, void 0, function () {
            var query, users_2;
            var _a;
            return __generator(this, function (_b) {
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
    return (React__default.createElement("div", null,
        React__default.createElement(Modal, { isFullScreenOnMobile: true, disabled: Object.keys(selectedUsers).length === 0, submitText: stringSet.BUTTON__INVITE, type: ButtonTypes.PRIMARY, onCancel: function () { return onCancel(); }, onSubmit: onInviteUsers, titleText: stringSet.CHANNEL_SETTING__MEMBERS__SELECT_TITLE },
            React__default.createElement("div", { className: "sendbird-more-members__popup-scroll", onScroll: onScroll },
                React__default.createElement("div", { className: "sendbird-more-members__popup-scroll__inner" }, users.map(function (user) {
                    var isMember = Boolean(membersMap ? membersMap[user.userId] : false);
                    var isSelected = Boolean(selectedUsers[user.userId]);
                    return (React__default.createElement(React__default.Fragment, { key: user.userId }, renderUserListItem({
                        user: user,
                        checkBox: true,
                        checked: isMember || isSelected,
                        disabled: isMember,
                        onChange: function () { return onSelectUser(user); },
                    })));
                }))))));
}

var MemberList = function (_a) {
    var _b = _a.renderUserListItem, renderUserListItem = _b === void 0 ? function (props) { return React__default.createElement(UserListItem, __assign({}, props)); } : _b, _c = _a.memberListQueryParams, memberListQueryParams = _c === void 0 ? {} : _c;
    var _d = useState([]), members = _d[0], setMembers = _d[1];
    var _e = useState(false), hasNext = _e[0], setHasNext = _e[1];
    var _f = useState(false), showAllMembers = _f[0], setShowAllMembers = _f[1];
    var _g = useState(false), showInviteUsers = _g[0], setShowInviteUsers = _g[1];
    var _h = useChannelSettingsContext(), channel = _h.channel, forceUpdateUI = _h.forceUpdateUI;
    var stringSet = useContext(LocalizationContext).stringSet;
    var isOperator = channel.myRole === Role.OPERATOR;
    var refreshList = useCallback(function () {
        if (!channel) {
            setMembers([]);
            return;
        }
        var memberUserListQuery = channel === null || channel === void 0 ? void 0 : channel.createMemberListQuery(__assign({ limit: 10 }, memberListQueryParams));
        memberUserListQuery.next().then(function (members) {
            setMembers(members);
            setHasNext(memberUserListQuery.hasNext);
        });
    }, [channel === null || channel === void 0 ? void 0 : channel.url, channel === null || channel === void 0 ? void 0 : channel.createMemberListQuery]);
    useEffect(refreshList, [channel === null || channel === void 0 ? void 0 : channel.url]);
    return (React__default.createElement("div", { className: "sendbird-channel-settings-member-list" },
        members.map(function (member, index) { return (React__default.createElement(React__default.Fragment, { key: member.userId }, renderUserListItem({
            // NOTE: This `index` is used to display the current user's user item at the top when customizing externally.
            index: index,
            user: member,
            channel: channel,
            size: 'small',
            avatarSize: '24px',
            renderListItemMenu: isOperator
                ? function (props) { return (React__default.createElement(UserListItemMenu, __assign({}, props, { onToggleOperatorState: function (_a) {
                        var isOperator = _a.newStatus;
                        var newMembers = __spreadArray([], members, true);
                        for (var _i = 0, newMembers_1 = newMembers; _i < newMembers_1.length; _i++) {
                            var newMember = newMembers_1[_i];
                            if (newMember.userId === member.userId) {
                                newMember.role = isOperator ? Role.OPERATOR : Role.NONE;
                                break;
                            }
                        }
                        setMembers(newMembers);
                    }, onToggleMuteState: function (_a) {
                        var isMuted = _a.newStatus;
                        var newMembers = __spreadArray([], members, true);
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
                : function () { return React__default.createElement(React__default.Fragment, null); },
        }))); }),
        React__default.createElement("div", { className: "sendbird-channel-settings-accordion__footer" },
            hasNext && (React__default.createElement(Button, { type: ButtonTypes.SECONDARY, size: ButtonSizes.SMALL, onClick: function () { return setShowAllMembers(true); } }, stringSet.CHANNEL_SETTING__MEMBERS__SEE_ALL_MEMBERS)),
            React__default.createElement(Button, { type: ButtonTypes.SECONDARY, size: ButtonSizes.SMALL, onClick: function () { return setShowInviteUsers(true); } }, stringSet.CHANNEL_SETTING__MEMBERS__INVITE_MEMBER)),
        showAllMembers && (React__default.createElement(MembersModal, { onCancel: function () {
                setShowAllMembers(false);
                refreshList();
                forceUpdateUI();
            }, renderUserListItem: renderUserListItem, memberListQueryParams: memberListQueryParams })),
        showInviteUsers && (React__default.createElement(InviteUsersModal, { onCancel: function () { return setShowInviteUsers(false); }, onSubmit: function () {
                setShowInviteUsers(false);
                refreshList();
                forceUpdateUI();
            }, renderUserListItem: renderUserListItem }))));
};

export { MemberList as M };
//# sourceMappingURL=bundle-DPIDaugc.js.map
