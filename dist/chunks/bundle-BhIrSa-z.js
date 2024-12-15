import { _ as __assign, a as __awaiter, b as __generator, c as __spreadArray } from './bundle-Ck-Lg2K3.js';
import React__default, { useState, useContext, useEffect, useCallback } from 'react';
import { L as LocalizationContext, u as useLocalization } from './bundle-CbLNLMef.js';
import { useChannelSettingsContext } from '../ChannelSettings/context.js';
import Button, { ButtonTypes, ButtonSizes } from '../ui/Button.js';
import { U as UserListItemMenu } from './bundle-CgvAKhwx.js';
import { UserListItem } from '../ui/UserListItem.js';
import { M as Modal } from './bundle-ptS-tNRF.js';
import { u as useOnScrollPositionChangeDetector } from './bundle-Yva9Tory.js';
import { L as Label, b as LabelColors, a as LabelTypography } from './bundle-Di0Zwz2X.js';
import { OperatorFilter } from '@sendbird/chat/groupChannel';
import { n as noop } from './bundle-pQHYhigr.js';

function OperatorsModal(_a) {
    var _this = this;
    var onCancel = _a.onCancel, _b = _a.renderUserListItem, renderUserListItem = _b === void 0 ? function (props) { return React__default.createElement(UserListItem, __assign({}, props)); } : _b, _c = _a.operatorListQueryParams, operatorListQueryParams = _c === void 0 ? {} : _c;
    var _d = useState([]), operators = _d[0], setOperators = _d[1];
    var _e = useState(null), operatorQuery = _e[0], setOperatorQuery = _e[1];
    var channel = useChannelSettingsContext().channel;
    var stringSet = useContext(LocalizationContext).stringSet;
    useEffect(function () {
        var operatorListQuery = channel === null || channel === void 0 ? void 0 : channel.createOperatorListQuery(__assign({ limit: 20 }, operatorListQueryParams));
        operatorListQuery === null || operatorListQuery === void 0 ? void 0 : operatorListQuery.next().then(function (operators) {
            setOperators(operators);
        });
        setOperatorQuery(operatorListQuery !== null && operatorListQuery !== void 0 ? operatorListQuery : null);
    }, []);
    return (React__default.createElement("div", null,
        React__default.createElement(Modal, { isFullScreenOnMobile: true, hideFooter: true, titleText: stringSet.CHANNEL_SETTING__OPERATORS__TITLE_ALL, onCancel: onCancel },
            React__default.createElement("div", { className: "sendbird-more-members__popup-scroll", onScroll: useOnScrollPositionChangeDetector({
                    onReachedBottom: function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (operatorQuery && operatorQuery.hasNext) {
                                operatorQuery.next().then(function (o) {
                                    setOperators(__spreadArray(__spreadArray([], operators, true), o, true));
                                });
                            }
                            return [2 /*return*/];
                        });
                    }); },
                }) }, operators.map(function (member) { return (React__default.createElement(React__default.Fragment, { key: member.userId }, renderUserListItem({
                user: member,
                channel: channel,
                renderListItemMenu: function (props) { return (React__default.createElement(UserListItemMenu, __assign({}, props, { isOperator: true, onToggleOperatorState: function (_a) {
                        var user = _a.user;
                        setOperators(operators.filter(function (_a) {
                            var userId = _a.userId;
                            return userId !== user.userId;
                        }));
                    }, renderMenuItems: function (_a) {
                        var items = _a.items;
                        return (React__default.createElement(items.OperatorToggleMenuItem, null));
                    } }))); },
            }))); })))));
}

function AddOperatorsModal(_a) {
    var _this = this;
    var onCancel = _a.onCancel, onSubmit = _a.onSubmit, _b = _a.renderUserListItem, renderUserListItem = _b === void 0 ? function (props) { return React__default.createElement(UserListItem, __assign({}, props)); } : _b;
    var _c = useState([]), members = _c[0], setMembers = _c[1];
    var _d = useState({}), selectedMembers = _d[0], setSelectedMembers = _d[1];
    var _e = useState(null), memberQuery = _e[0], setMemberQuery = _e[1];
    var stringSet = useContext(LocalizationContext).stringSet;
    var channel = useChannelSettingsContext().channel;
    useEffect(function () {
        var memberListQuery = channel === null || channel === void 0 ? void 0 : channel.createMemberListQuery({
            operatorFilter: OperatorFilter.NONOPERATOR,
            limit: 20,
        });
        memberListQuery === null || memberListQuery === void 0 ? void 0 : memberListQuery.next().then(function (members) {
            setMembers(members);
        });
        setMemberQuery(memberListQuery !== null && memberListQuery !== void 0 ? memberListQuery : null);
    }, []);
    var selectedCount = Object.keys(selectedMembers).filter(function (m) { return selectedMembers[m]; }).length;
    return (React__default.createElement("div", null,
        React__default.createElement(Modal, { isFullScreenOnMobile: true, type: ButtonTypes.PRIMARY, submitText: stringSet.CHANNEL_SETTING__OPERATORS__ADD_BUTTON, onCancel: onCancel, onSubmit: function () {
                var members = Object.keys(selectedMembers).filter(function (m) { return selectedMembers[m]; });
                channel === null || channel === void 0 ? void 0 : channel.addOperators(members).then(function () {
                    onSubmit(members);
                });
            }, titleText: stringSet.CHANNEL_SETTING__MEMBERS__SELECT_TITLE },
            React__default.createElement(Label, { color: (selectedCount > 0) ? LabelColors.PRIMARY : LabelColors.ONBACKGROUND_3, type: LabelTypography.CAPTION_1 }, "".concat(selectedCount, " ").concat(stringSet.MODAL__INVITE_MEMBER__SELECTED)),
            React__default.createElement("div", { className: "sendbird-more-members__popup-scroll", onScroll: useOnScrollPositionChangeDetector({
                    onReachedBottom: function () { return __awaiter(_this, void 0, void 0, function () {
                        var hasNext;
                        return __generator(this, function (_a) {
                            hasNext = memberQuery.hasNext;
                            if (hasNext) {
                                memberQuery.next().then(function (o) {
                                    setMembers(__spreadArray(__spreadArray([], members, true), o, true));
                                });
                            }
                            return [2 /*return*/];
                        });
                    }); },
                }) }, members.map(function (member) { return (React__default.createElement(React__default.Fragment, { key: member.userId }, renderUserListItem({
                user: member,
                checkBox: true,
                checked: selectedMembers[member.userId],
                disabled: (member === null || member === void 0 ? void 0 : member.role) === 'operator',
                onChange: function (event) {
                    var _a;
                    var modifiedSelectedMembers = __assign(__assign({}, selectedMembers), (_a = {}, _a[event.target.id] = event.target.checked, _a));
                    if (!event.target.checked) {
                        delete modifiedSelectedMembers[event.target.id];
                    }
                    setSelectedMembers(modifiedSelectedMembers);
                },
            }))); })))));
}

var OperatorList = function (_a) {
    var _b = _a.renderUserListItem, renderUserListItem = _b === void 0 ? function (props) { return React__default.createElement(UserListItem, __assign({}, props)); } : _b, _c = _a.operatorListQueryParams, operatorListQueryParams = _c === void 0 ? {} : _c;
    var _d = useState([]), operators = _d[0], setOperators = _d[1];
    var _e = useState(false), showMore = _e[0], setShowMore = _e[1];
    var _f = useState(false), showAdd = _f[0], setShowAdd = _f[1];
    var _g = useState(false), hasNext = _g[0], setHasNext = _g[1];
    var stringSet = useContext(LocalizationContext).stringSet;
    var channel = useChannelSettingsContext().channel;
    var refreshList = useCallback(function () {
        if (!channel) {
            setOperators([]);
            return;
        }
        var operatorListQuery = channel === null || channel === void 0 ? void 0 : channel.createOperatorListQuery(__assign({ limit: 10 }, operatorListQueryParams));
        operatorListQuery.next().then(function (operators) {
            setOperators(operators);
            setHasNext(operatorListQuery.hasNext);
        });
    }, [channel === null || channel === void 0 ? void 0 : channel.url, channel === null || channel === void 0 ? void 0 : channel.createOperatorListQuery]);
    useEffect(refreshList, [channel === null || channel === void 0 ? void 0 : channel.url]);
    return (React__default.createElement(React__default.Fragment, null,
        operators.map(function (operator) { return (React__default.createElement(React__default.Fragment, { key: operator.userId }, renderUserListItem({
            user: operator,
            channel: channel,
            size: 'small',
            avatarSize: '24px',
            renderListItemMenu: function (props) { return (React__default.createElement(UserListItemMenu, __assign({}, props, { 
                /**
                 * isOperator:
                 * The ReturnType of createOperatorListQuery is User[].
                 * We can't determine if this user is an operator, because User doesn't have a `role` property.
                 * Therefore, we need to explicitly specify that this user is an operator.
                */
                isOperator: true, onToggleOperatorState: function () {
                    // Limitation to server-side table update delay.
                    setTimeout(function () {
                        refreshList();
                    }, 500);
                }, renderMenuItems: function (_a) {
                    var items = _a.items;
                    return (React__default.createElement(items.OperatorToggleMenuItem, null));
                } }))); },
        }))); }),
        React__default.createElement("div", { className: "sendbird-channel-settings-accordion__footer" },
            React__default.createElement(Button, { type: ButtonTypes.SECONDARY, size: ButtonSizes.SMALL, onClick: function () {
                    setShowAdd(true);
                } }, stringSet.CHANNEL_SETTING__OPERATORS__TITLE_ADD),
            hasNext && (React__default.createElement(Button, { type: ButtonTypes.SECONDARY, size: ButtonSizes.SMALL, onClick: function () {
                    setShowMore(true);
                } }, stringSet.CHANNEL_SETTING__OPERATORS__TITLE_ALL))),
        showMore && (React__default.createElement(OperatorsModal, { onCancel: function () {
                setShowMore(false);
                refreshList();
            }, renderUserListItem: renderUserListItem, operatorListQueryParams: operatorListQueryParams })),
        showAdd && (React__default.createElement(AddOperatorsModal, { onCancel: function () { return setShowAdd(false); }, onSubmit: function () {
                /**
                 * Limitation to server-side table update delay.
                 */
                setTimeout(function () {
                    refreshList();
                }, 500);
                setShowAdd(false);
            }, renderUserListItem: renderUserListItem }))));
};

function BannedUsersModal(_a) {
    var _this = this;
    var onCancel = _a.onCancel, _b = _a.renderUserListItem, renderUserListItem = _b === void 0 ? function (props) { return React__default.createElement(UserListItem, __assign({}, props)); } : _b, _c = _a.bannedUserListQueryParams, bannedUserListQueryParams = _c === void 0 ? {} : _c;
    var _d = useState([]), members = _d[0], setMembers = _d[1];
    var _e = useState(null), memberQuery = _e[0], setMemberQuery = _e[1];
    var channel = useChannelSettingsContext().channel;
    var stringSet = useLocalization().stringSet;
    useEffect(function () {
        var bannedUserListQuery = channel === null || channel === void 0 ? void 0 : channel.createBannedUserListQuery(__assign({ limit: 20 }, bannedUserListQueryParams));
        if (bannedUserListQuery) {
            bannedUserListQuery.next().then(function (users) {
                setMembers(users);
            });
            setMemberQuery(bannedUserListQuery);
        }
    }, []);
    return (React__default.createElement("div", null,
        React__default.createElement(Modal, { isFullScreenOnMobile: true, hideFooter: true, onCancel: function () { return onCancel(); }, onSubmit: noop, titleText: stringSet.CHANNEL_SETTING__BANNED_MEMBERS__TITLE },
            React__default.createElement("div", { className: "sendbird-more-members__popup-scroll", onScroll: useOnScrollPositionChangeDetector({
                    onReachedBottom: function () { return __awaiter(_this, void 0, void 0, function () {
                        var hasNext;
                        return __generator(this, function (_a) {
                            if (!memberQuery)
                                return [2 /*return*/];
                            hasNext = memberQuery.hasNext;
                            if (hasNext) {
                                memberQuery.next().then(function (o) {
                                    setMembers(__spreadArray(__spreadArray([], members, true), o, true));
                                });
                            }
                            return [2 /*return*/];
                        });
                    }); },
                }) }, members.map(function (member) { return (renderUserListItem({
                user: member,
                channel: channel,
                renderListItemMenu: function (props) { return (React__default.createElement(UserListItemMenu, __assign({}, props, { isBanned: true, onToggleBanState: function () {
                        setMembers(members.filter(function (m) {
                            return (m.userId !== member.userId);
                        }));
                    }, renderMenuItems: function (_a) {
                        var items = _a.items;
                        return React__default.createElement(items.BanToggleMenuItem, null);
                    } }))); },
            })); })))));
}

var BannedUserList = function (_a) {
    var _b = _a.renderUserListItem, renderUserListItem = _b === void 0 ? function (props) { return React__default.createElement(UserListItem, __assign({}, props)); } : _b, _c = _a.bannedUserListQueryParams, bannedUserListQueryParams = _c === void 0 ? {} : _c;
    var _d = useState([]), members = _d[0], setMembers = _d[1];
    var _e = useState(false), hasNext = _e[0], setHasNext = _e[1];
    var _f = useState(false), showModal = _f[0], setShowModal = _f[1];
    var stringSet = useContext(LocalizationContext).stringSet;
    var channel = useChannelSettingsContext().channel;
    var refreshList = useCallback(function () {
        if (!channel) {
            setMembers([]);
            return;
        }
        var bannedUserListQuery = channel === null || channel === void 0 ? void 0 : channel.createBannedUserListQuery(__assign({ limit: 10 }, bannedUserListQueryParams));
        bannedUserListQuery.next().then(function (users) {
            setMembers(users);
            setHasNext(bannedUserListQuery.hasNext);
        });
    }, [channel === null || channel === void 0 ? void 0 : channel.url, channel === null || channel === void 0 ? void 0 : channel.createBannedUserListQuery]);
    useEffect(refreshList, [channel === null || channel === void 0 ? void 0 : channel.url]);
    return (React__default.createElement(React__default.Fragment, null,
        members.map(function (member) { return (React__default.createElement(React__default.Fragment, { key: member.userId }, renderUserListItem({
            user: member,
            channel: channel,
            size: 'small',
            avatarSize: '24px',
            renderListItemMenu: function (props) { return (React__default.createElement(UserListItemMenu, __assign({}, props, { isBanned: true, onToggleBanState: function () { return refreshList(); }, renderMenuItems: function (_a) {
                    var items = _a.items;
                    return (React__default.createElement(items.BanToggleMenuItem, null));
                } }))); },
        }))); }),
        members && members.length === 0 && (React__default.createElement(Label, { className: "sendbird-channel-settings__empty-list", type: LabelTypography.SUBTITLE_2, color: LabelColors.ONBACKGROUND_3 }, stringSet.CHANNEL_SETTING__MODERATION__EMPTY_BAN)),
        hasNext && (React__default.createElement("div", { className: "sendbird-channel-settings-accordion__footer" },
            React__default.createElement(Button, { type: ButtonTypes.SECONDARY, size: ButtonSizes.SMALL, onClick: function () {
                    setShowModal(true);
                } }, stringSet.CHANNEL_SETTING__MODERATION__ALL_BAN))),
        showModal && (React__default.createElement(BannedUsersModal, { onCancel: function () {
                setShowModal(false);
                refreshList();
            }, renderUserListItem: renderUserListItem, bannedUserListQueryParams: bannedUserListQueryParams }))));
};

function MutedMembersModal(_a) {
    var _this = this;
    var onCancel = _a.onCancel, _b = _a.renderUserListItem, renderUserListItem = _b === void 0 ? function (props) { return React__default.createElement(UserListItem, __assign({}, props)); } : _b, _c = _a.memberListQueryParams, memberListQueryParams = _c === void 0 ? {} : _c;
    var _d = useState([]), members = _d[0], setMembers = _d[1];
    var _e = useState(null), memberQuery = _e[0], setMemberQuery = _e[1];
    var channel = useChannelSettingsContext().channel;
    var stringSet = useLocalization().stringSet;
    useEffect(function () {
        var memberUserListQuery = channel === null || channel === void 0 ? void 0 : channel.createMemberListQuery(__assign(__assign({ limit: 20 }, memberListQueryParams), { 
            // @ts-ignore
            mutedMemberFilter: 'muted' }));
        memberUserListQuery === null || memberUserListQuery === void 0 ? void 0 : memberUserListQuery.next().then(function (members) {
            setMembers(members);
        });
        setMemberQuery(memberUserListQuery !== null && memberUserListQuery !== void 0 ? memberUserListQuery : null);
    }, []);
    return (React__default.createElement("div", null,
        React__default.createElement(Modal, { isFullScreenOnMobile: true, hideFooter: true, onCancel: function () { return onCancel(); }, onSubmit: noop, titleText: stringSet.CHANNEL_SETTING__MUTED_MEMBERS__TITLE },
            React__default.createElement("div", { className: "sendbird-more-members__popup-scroll", onScroll: useOnScrollPositionChangeDetector({
                    onReachedBottom: function () { return __awaiter(_this, void 0, void 0, function () {
                        var hasNext;
                        return __generator(this, function (_a) {
                            hasNext = memberQuery.hasNext;
                            if (hasNext) {
                                memberQuery.next().then(function (o) {
                                    setMembers(__spreadArray(__spreadArray([], members, true), o, true));
                                });
                            }
                            return [2 /*return*/];
                        });
                    }); },
                }) }, members.map(function (member) { return (React__default.createElement(React__default.Fragment, { key: member.userId }, renderUserListItem({
                user: member,
                channel: channel,
                renderListItemMenu: function (props) { return (React__default.createElement(UserListItemMenu, __assign({}, props, { onToggleMuteState: function () {
                        setMembers(members.filter(function (m) {
                            return (m.userId !== member.userId);
                        }));
                    }, renderMenuItems: function (_a) {
                        var items = _a.items;
                        return (React__default.createElement(items.MuteToggleMenuItem, null));
                    } }))); },
            }))); })))));
}

var MutedMemberList = function (_a) {
    var _b = _a.renderUserListItem, renderUserListItem = _b === void 0 ? function (props) { return React__default.createElement(UserListItem, __assign({}, props)); } : _b, _c = _a.memberListQueryParams, memberListQueryParams = _c === void 0 ? {} : _c;
    var _d = useState([]), members = _d[0], setMembers = _d[1];
    var _e = useState(false), hasNext = _e[0], setHasNext = _e[1];
    var _f = useState(false), showModal = _f[0], setShowModal = _f[1];
    var stringSet = useLocalization().stringSet;
    var channel = useChannelSettingsContext().channel;
    var refreshList = useCallback(function () {
        if (!channel) {
            setMembers([]);
            return;
        }
        var memberUserListQuery = channel === null || channel === void 0 ? void 0 : channel.createMemberListQuery(__assign(__assign({ limit: 10 }, memberListQueryParams), { 
            // @ts-ignore
            mutedMemberFilter: 'muted' }));
        memberUserListQuery.next().then(function (members) {
            setMembers(members);
            setHasNext(memberUserListQuery.hasNext);
        });
    }, [channel === null || channel === void 0 ? void 0 : channel.url, channel === null || channel === void 0 ? void 0 : channel.createMemberListQuery]);
    useEffect(refreshList, [channel === null || channel === void 0 ? void 0 : channel.url]);
    return (React__default.createElement(React__default.Fragment, null,
        members.map(function (member) { return (React__default.createElement(React__default.Fragment, { key: member.userId }, renderUserListItem({
            user: member,
            channel: channel,
            size: 'small',
            avatarSize: '24px',
            renderListItemMenu: function (props) { return (React__default.createElement(UserListItemMenu, __assign({}, props, { onToggleMuteState: function () {
                    // Limitation to server-side table update delay.
                    setTimeout(function () {
                        refreshList();
                    }, 500);
                }, renderMenuItems: function (_a) {
                    var items = _a.items;
                    return (React__default.createElement(items.MuteToggleMenuItem, null));
                } }))); },
        }))); }),
        members && members.length === 0 && (React__default.createElement(Label, { className: "sendbird-channel-settings__empty-list", type: LabelTypography.SUBTITLE_2, color: LabelColors.ONBACKGROUND_3 }, stringSet.CHANNEL_SETTING__NO_UNMUTED)),
        hasNext && (React__default.createElement("div", { className: "sendbird-channel-settings-accordion__footer" },
            React__default.createElement(Button, { type: ButtonTypes.SECONDARY, size: ButtonSizes.SMALL, onClick: function () {
                    setShowModal(true);
                } }, stringSet.CHANNEL_SETTING__MUTED_MEMBERS__TITLE_ALL))),
        showModal && (React__default.createElement(MutedMembersModal, { onCancel: function () {
                setShowModal(false);
                refreshList();
            }, renderUserListItem: renderUserListItem, memberListQueryParams: memberListQueryParams }))));
};

export { BannedUserList as B, MutedMemberList as M, OperatorList as O };
//# sourceMappingURL=bundle-BhIrSa-z.js.map
