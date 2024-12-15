'use strict';

var _tslib = require('./bundle-DRvomNLJ.js');
var React = require('react');
var LocalizationContext = require('./bundle-CmBrGegh.js');
var ChannelSettings_context = require('../ChannelSettings/context.js');
var ui_Button = require('../ui/Button.js');
var UserListItemMenu = require('./bundle-B5z2w3PD.js');
var ui_UserListItem = require('../ui/UserListItem.js');
var ui_Modal = require('./bundle-DfISCDoH.js');
var index = require('./bundle-HoCgvUVa.js');
var ui_Label = require('./bundle-D8-2bEdY.js');
var groupChannel = require('@sendbird/chat/groupChannel');
var utils = require('./bundle-BYHj6UqH.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function OperatorsModal(_a) {
    var _this = this;
    var onCancel = _a.onCancel, _b = _a.renderUserListItem, renderUserListItem = _b === void 0 ? function (props) { return React__default.default.createElement(ui_UserListItem.UserListItem, _tslib.__assign({}, props)); } : _b, _c = _a.operatorListQueryParams, operatorListQueryParams = _c === void 0 ? {} : _c;
    var _d = React.useState([]), operators = _d[0], setOperators = _d[1];
    var _e = React.useState(null), operatorQuery = _e[0], setOperatorQuery = _e[1];
    var channel = ChannelSettings_context.useChannelSettingsContext().channel;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    React.useEffect(function () {
        var operatorListQuery = channel === null || channel === void 0 ? void 0 : channel.createOperatorListQuery(_tslib.__assign({ limit: 20 }, operatorListQueryParams));
        operatorListQuery === null || operatorListQuery === void 0 ? void 0 : operatorListQuery.next().then(function (operators) {
            setOperators(operators);
        });
        setOperatorQuery(operatorListQuery !== null && operatorListQuery !== void 0 ? operatorListQuery : null);
    }, []);
    return (React__default.default.createElement("div", null,
        React__default.default.createElement(ui_Modal.Modal, { isFullScreenOnMobile: true, hideFooter: true, titleText: stringSet.CHANNEL_SETTING__OPERATORS__TITLE_ALL, onCancel: onCancel },
            React__default.default.createElement("div", { className: "sendbird-more-members__popup-scroll", onScroll: index.useOnScrollPositionChangeDetector({
                    onReachedBottom: function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
                        return _tslib.__generator(this, function (_a) {
                            if (operatorQuery && operatorQuery.hasNext) {
                                operatorQuery.next().then(function (o) {
                                    setOperators(_tslib.__spreadArray(_tslib.__spreadArray([], operators, true), o, true));
                                });
                            }
                            return [2 /*return*/];
                        });
                    }); },
                }) }, operators.map(function (member) { return (React__default.default.createElement(React__default.default.Fragment, { key: member.userId }, renderUserListItem({
                user: member,
                channel: channel,
                renderListItemMenu: function (props) { return (React__default.default.createElement(UserListItemMenu.UserListItemMenu, _tslib.__assign({}, props, { isOperator: true, onToggleOperatorState: function (_a) {
                        var user = _a.user;
                        setOperators(operators.filter(function (_a) {
                            var userId = _a.userId;
                            return userId !== user.userId;
                        }));
                    }, renderMenuItems: function (_a) {
                        var items = _a.items;
                        return (React__default.default.createElement(items.OperatorToggleMenuItem, null));
                    } }))); },
            }))); })))));
}

function AddOperatorsModal(_a) {
    var _this = this;
    var onCancel = _a.onCancel, onSubmit = _a.onSubmit, _b = _a.renderUserListItem, renderUserListItem = _b === void 0 ? function (props) { return React__default.default.createElement(ui_UserListItem.UserListItem, _tslib.__assign({}, props)); } : _b;
    var _c = React.useState([]), members = _c[0], setMembers = _c[1];
    var _d = React.useState({}), selectedMembers = _d[0], setSelectedMembers = _d[1];
    var _e = React.useState(null), memberQuery = _e[0], setMemberQuery = _e[1];
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var channel = ChannelSettings_context.useChannelSettingsContext().channel;
    React.useEffect(function () {
        var memberListQuery = channel === null || channel === void 0 ? void 0 : channel.createMemberListQuery({
            operatorFilter: groupChannel.OperatorFilter.NONOPERATOR,
            limit: 20,
        });
        memberListQuery === null || memberListQuery === void 0 ? void 0 : memberListQuery.next().then(function (members) {
            setMembers(members);
        });
        setMemberQuery(memberListQuery !== null && memberListQuery !== void 0 ? memberListQuery : null);
    }, []);
    var selectedCount = Object.keys(selectedMembers).filter(function (m) { return selectedMembers[m]; }).length;
    return (React__default.default.createElement("div", null,
        React__default.default.createElement(ui_Modal.Modal, { isFullScreenOnMobile: true, type: ui_Button.ButtonTypes.PRIMARY, submitText: stringSet.CHANNEL_SETTING__OPERATORS__ADD_BUTTON, onCancel: onCancel, onSubmit: function () {
                var members = Object.keys(selectedMembers).filter(function (m) { return selectedMembers[m]; });
                channel === null || channel === void 0 ? void 0 : channel.addOperators(members).then(function () {
                    onSubmit(members);
                });
            }, titleText: stringSet.CHANNEL_SETTING__MEMBERS__SELECT_TITLE },
            React__default.default.createElement(ui_Label.Label, { color: (selectedCount > 0) ? ui_Label.LabelColors.PRIMARY : ui_Label.LabelColors.ONBACKGROUND_3, type: ui_Label.LabelTypography.CAPTION_1 }, "".concat(selectedCount, " ").concat(stringSet.MODAL__INVITE_MEMBER__SELECTED)),
            React__default.default.createElement("div", { className: "sendbird-more-members__popup-scroll", onScroll: index.useOnScrollPositionChangeDetector({
                    onReachedBottom: function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
                        var hasNext;
                        return _tslib.__generator(this, function (_a) {
                            hasNext = memberQuery.hasNext;
                            if (hasNext) {
                                memberQuery.next().then(function (o) {
                                    setMembers(_tslib.__spreadArray(_tslib.__spreadArray([], members, true), o, true));
                                });
                            }
                            return [2 /*return*/];
                        });
                    }); },
                }) }, members.map(function (member) { return (React__default.default.createElement(React__default.default.Fragment, { key: member.userId }, renderUserListItem({
                user: member,
                checkBox: true,
                checked: selectedMembers[member.userId],
                disabled: (member === null || member === void 0 ? void 0 : member.role) === 'operator',
                onChange: function (event) {
                    var _a;
                    var modifiedSelectedMembers = _tslib.__assign(_tslib.__assign({}, selectedMembers), (_a = {}, _a[event.target.id] = event.target.checked, _a));
                    if (!event.target.checked) {
                        delete modifiedSelectedMembers[event.target.id];
                    }
                    setSelectedMembers(modifiedSelectedMembers);
                },
            }))); })))));
}

var OperatorList = function (_a) {
    var _b = _a.renderUserListItem, renderUserListItem = _b === void 0 ? function (props) { return React__default.default.createElement(ui_UserListItem.UserListItem, _tslib.__assign({}, props)); } : _b, _c = _a.operatorListQueryParams, operatorListQueryParams = _c === void 0 ? {} : _c;
    var _d = React.useState([]), operators = _d[0], setOperators = _d[1];
    var _e = React.useState(false), showMore = _e[0], setShowMore = _e[1];
    var _f = React.useState(false), showAdd = _f[0], setShowAdd = _f[1];
    var _g = React.useState(false), hasNext = _g[0], setHasNext = _g[1];
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var channel = ChannelSettings_context.useChannelSettingsContext().channel;
    var refreshList = React.useCallback(function () {
        if (!channel) {
            setOperators([]);
            return;
        }
        var operatorListQuery = channel === null || channel === void 0 ? void 0 : channel.createOperatorListQuery(_tslib.__assign({ limit: 10 }, operatorListQueryParams));
        operatorListQuery.next().then(function (operators) {
            setOperators(operators);
            setHasNext(operatorListQuery.hasNext);
        });
    }, [channel === null || channel === void 0 ? void 0 : channel.url, channel === null || channel === void 0 ? void 0 : channel.createOperatorListQuery]);
    React.useEffect(refreshList, [channel === null || channel === void 0 ? void 0 : channel.url]);
    return (React__default.default.createElement(React__default.default.Fragment, null,
        operators.map(function (operator) { return (React__default.default.createElement(React__default.default.Fragment, { key: operator.userId }, renderUserListItem({
            user: operator,
            channel: channel,
            size: 'small',
            avatarSize: '24px',
            renderListItemMenu: function (props) { return (React__default.default.createElement(UserListItemMenu.UserListItemMenu, _tslib.__assign({}, props, { 
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
                    return (React__default.default.createElement(items.OperatorToggleMenuItem, null));
                } }))); },
        }))); }),
        React__default.default.createElement("div", { className: "sendbird-channel-settings-accordion__footer" },
            React__default.default.createElement(ui_Button.default, { type: ui_Button.ButtonTypes.SECONDARY, size: ui_Button.ButtonSizes.SMALL, onClick: function () {
                    setShowAdd(true);
                } }, stringSet.CHANNEL_SETTING__OPERATORS__TITLE_ADD),
            hasNext && (React__default.default.createElement(ui_Button.default, { type: ui_Button.ButtonTypes.SECONDARY, size: ui_Button.ButtonSizes.SMALL, onClick: function () {
                    setShowMore(true);
                } }, stringSet.CHANNEL_SETTING__OPERATORS__TITLE_ALL))),
        showMore && (React__default.default.createElement(OperatorsModal, { onCancel: function () {
                setShowMore(false);
                refreshList();
            }, renderUserListItem: renderUserListItem, operatorListQueryParams: operatorListQueryParams })),
        showAdd && (React__default.default.createElement(AddOperatorsModal, { onCancel: function () { return setShowAdd(false); }, onSubmit: function () {
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
    var onCancel = _a.onCancel, _b = _a.renderUserListItem, renderUserListItem = _b === void 0 ? function (props) { return React__default.default.createElement(ui_UserListItem.UserListItem, _tslib.__assign({}, props)); } : _b, _c = _a.bannedUserListQueryParams, bannedUserListQueryParams = _c === void 0 ? {} : _c;
    var _d = React.useState([]), members = _d[0], setMembers = _d[1];
    var _e = React.useState(null), memberQuery = _e[0], setMemberQuery = _e[1];
    var channel = ChannelSettings_context.useChannelSettingsContext().channel;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    React.useEffect(function () {
        var bannedUserListQuery = channel === null || channel === void 0 ? void 0 : channel.createBannedUserListQuery(_tslib.__assign({ limit: 20 }, bannedUserListQueryParams));
        if (bannedUserListQuery) {
            bannedUserListQuery.next().then(function (users) {
                setMembers(users);
            });
            setMemberQuery(bannedUserListQuery);
        }
    }, []);
    return (React__default.default.createElement("div", null,
        React__default.default.createElement(ui_Modal.Modal, { isFullScreenOnMobile: true, hideFooter: true, onCancel: function () { return onCancel(); }, onSubmit: utils.noop, titleText: stringSet.CHANNEL_SETTING__BANNED_MEMBERS__TITLE },
            React__default.default.createElement("div", { className: "sendbird-more-members__popup-scroll", onScroll: index.useOnScrollPositionChangeDetector({
                    onReachedBottom: function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
                        var hasNext;
                        return _tslib.__generator(this, function (_a) {
                            if (!memberQuery)
                                return [2 /*return*/];
                            hasNext = memberQuery.hasNext;
                            if (hasNext) {
                                memberQuery.next().then(function (o) {
                                    setMembers(_tslib.__spreadArray(_tslib.__spreadArray([], members, true), o, true));
                                });
                            }
                            return [2 /*return*/];
                        });
                    }); },
                }) }, members.map(function (member) { return (renderUserListItem({
                user: member,
                channel: channel,
                renderListItemMenu: function (props) { return (React__default.default.createElement(UserListItemMenu.UserListItemMenu, _tslib.__assign({}, props, { isBanned: true, onToggleBanState: function () {
                        setMembers(members.filter(function (m) {
                            return (m.userId !== member.userId);
                        }));
                    }, renderMenuItems: function (_a) {
                        var items = _a.items;
                        return React__default.default.createElement(items.BanToggleMenuItem, null);
                    } }))); },
            })); })))));
}

var BannedUserList = function (_a) {
    var _b = _a.renderUserListItem, renderUserListItem = _b === void 0 ? function (props) { return React__default.default.createElement(ui_UserListItem.UserListItem, _tslib.__assign({}, props)); } : _b, _c = _a.bannedUserListQueryParams, bannedUserListQueryParams = _c === void 0 ? {} : _c;
    var _d = React.useState([]), members = _d[0], setMembers = _d[1];
    var _e = React.useState(false), hasNext = _e[0], setHasNext = _e[1];
    var _f = React.useState(false), showModal = _f[0], setShowModal = _f[1];
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var channel = ChannelSettings_context.useChannelSettingsContext().channel;
    var refreshList = React.useCallback(function () {
        if (!channel) {
            setMembers([]);
            return;
        }
        var bannedUserListQuery = channel === null || channel === void 0 ? void 0 : channel.createBannedUserListQuery(_tslib.__assign({ limit: 10 }, bannedUserListQueryParams));
        bannedUserListQuery.next().then(function (users) {
            setMembers(users);
            setHasNext(bannedUserListQuery.hasNext);
        });
    }, [channel === null || channel === void 0 ? void 0 : channel.url, channel === null || channel === void 0 ? void 0 : channel.createBannedUserListQuery]);
    React.useEffect(refreshList, [channel === null || channel === void 0 ? void 0 : channel.url]);
    return (React__default.default.createElement(React__default.default.Fragment, null,
        members.map(function (member) { return (React__default.default.createElement(React__default.default.Fragment, { key: member.userId }, renderUserListItem({
            user: member,
            channel: channel,
            size: 'small',
            avatarSize: '24px',
            renderListItemMenu: function (props) { return (React__default.default.createElement(UserListItemMenu.UserListItemMenu, _tslib.__assign({}, props, { isBanned: true, onToggleBanState: function () { return refreshList(); }, renderMenuItems: function (_a) {
                    var items = _a.items;
                    return (React__default.default.createElement(items.BanToggleMenuItem, null));
                } }))); },
        }))); }),
        members && members.length === 0 && (React__default.default.createElement(ui_Label.Label, { className: "sendbird-channel-settings__empty-list", type: ui_Label.LabelTypography.SUBTITLE_2, color: ui_Label.LabelColors.ONBACKGROUND_3 }, stringSet.CHANNEL_SETTING__MODERATION__EMPTY_BAN)),
        hasNext && (React__default.default.createElement("div", { className: "sendbird-channel-settings-accordion__footer" },
            React__default.default.createElement(ui_Button.default, { type: ui_Button.ButtonTypes.SECONDARY, size: ui_Button.ButtonSizes.SMALL, onClick: function () {
                    setShowModal(true);
                } }, stringSet.CHANNEL_SETTING__MODERATION__ALL_BAN))),
        showModal && (React__default.default.createElement(BannedUsersModal, { onCancel: function () {
                setShowModal(false);
                refreshList();
            }, renderUserListItem: renderUserListItem, bannedUserListQueryParams: bannedUserListQueryParams }))));
};

function MutedMembersModal(_a) {
    var _this = this;
    var onCancel = _a.onCancel, _b = _a.renderUserListItem, renderUserListItem = _b === void 0 ? function (props) { return React__default.default.createElement(ui_UserListItem.UserListItem, _tslib.__assign({}, props)); } : _b, _c = _a.memberListQueryParams, memberListQueryParams = _c === void 0 ? {} : _c;
    var _d = React.useState([]), members = _d[0], setMembers = _d[1];
    var _e = React.useState(null), memberQuery = _e[0], setMemberQuery = _e[1];
    var channel = ChannelSettings_context.useChannelSettingsContext().channel;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    React.useEffect(function () {
        var memberUserListQuery = channel === null || channel === void 0 ? void 0 : channel.createMemberListQuery(_tslib.__assign(_tslib.__assign({ limit: 20 }, memberListQueryParams), { 
            // @ts-ignore
            mutedMemberFilter: 'muted' }));
        memberUserListQuery === null || memberUserListQuery === void 0 ? void 0 : memberUserListQuery.next().then(function (members) {
            setMembers(members);
        });
        setMemberQuery(memberUserListQuery !== null && memberUserListQuery !== void 0 ? memberUserListQuery : null);
    }, []);
    return (React__default.default.createElement("div", null,
        React__default.default.createElement(ui_Modal.Modal, { isFullScreenOnMobile: true, hideFooter: true, onCancel: function () { return onCancel(); }, onSubmit: utils.noop, titleText: stringSet.CHANNEL_SETTING__MUTED_MEMBERS__TITLE },
            React__default.default.createElement("div", { className: "sendbird-more-members__popup-scroll", onScroll: index.useOnScrollPositionChangeDetector({
                    onReachedBottom: function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
                        var hasNext;
                        return _tslib.__generator(this, function (_a) {
                            hasNext = memberQuery.hasNext;
                            if (hasNext) {
                                memberQuery.next().then(function (o) {
                                    setMembers(_tslib.__spreadArray(_tslib.__spreadArray([], members, true), o, true));
                                });
                            }
                            return [2 /*return*/];
                        });
                    }); },
                }) }, members.map(function (member) { return (React__default.default.createElement(React__default.default.Fragment, { key: member.userId }, renderUserListItem({
                user: member,
                channel: channel,
                renderListItemMenu: function (props) { return (React__default.default.createElement(UserListItemMenu.UserListItemMenu, _tslib.__assign({}, props, { onToggleMuteState: function () {
                        setMembers(members.filter(function (m) {
                            return (m.userId !== member.userId);
                        }));
                    }, renderMenuItems: function (_a) {
                        var items = _a.items;
                        return (React__default.default.createElement(items.MuteToggleMenuItem, null));
                    } }))); },
            }))); })))));
}

var MutedMemberList = function (_a) {
    var _b = _a.renderUserListItem, renderUserListItem = _b === void 0 ? function (props) { return React__default.default.createElement(ui_UserListItem.UserListItem, _tslib.__assign({}, props)); } : _b, _c = _a.memberListQueryParams, memberListQueryParams = _c === void 0 ? {} : _c;
    var _d = React.useState([]), members = _d[0], setMembers = _d[1];
    var _e = React.useState(false), hasNext = _e[0], setHasNext = _e[1];
    var _f = React.useState(false), showModal = _f[0], setShowModal = _f[1];
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var channel = ChannelSettings_context.useChannelSettingsContext().channel;
    var refreshList = React.useCallback(function () {
        if (!channel) {
            setMembers([]);
            return;
        }
        var memberUserListQuery = channel === null || channel === void 0 ? void 0 : channel.createMemberListQuery(_tslib.__assign(_tslib.__assign({ limit: 10 }, memberListQueryParams), { 
            // @ts-ignore
            mutedMemberFilter: 'muted' }));
        memberUserListQuery.next().then(function (members) {
            setMembers(members);
            setHasNext(memberUserListQuery.hasNext);
        });
    }, [channel === null || channel === void 0 ? void 0 : channel.url, channel === null || channel === void 0 ? void 0 : channel.createMemberListQuery]);
    React.useEffect(refreshList, [channel === null || channel === void 0 ? void 0 : channel.url]);
    return (React__default.default.createElement(React__default.default.Fragment, null,
        members.map(function (member) { return (React__default.default.createElement(React__default.default.Fragment, { key: member.userId }, renderUserListItem({
            user: member,
            channel: channel,
            size: 'small',
            avatarSize: '24px',
            renderListItemMenu: function (props) { return (React__default.default.createElement(UserListItemMenu.UserListItemMenu, _tslib.__assign({}, props, { onToggleMuteState: function () {
                    // Limitation to server-side table update delay.
                    setTimeout(function () {
                        refreshList();
                    }, 500);
                }, renderMenuItems: function (_a) {
                    var items = _a.items;
                    return (React__default.default.createElement(items.MuteToggleMenuItem, null));
                } }))); },
        }))); }),
        members && members.length === 0 && (React__default.default.createElement(ui_Label.Label, { className: "sendbird-channel-settings__empty-list", type: ui_Label.LabelTypography.SUBTITLE_2, color: ui_Label.LabelColors.ONBACKGROUND_3 }, stringSet.CHANNEL_SETTING__NO_UNMUTED)),
        hasNext && (React__default.default.createElement("div", { className: "sendbird-channel-settings-accordion__footer" },
            React__default.default.createElement(ui_Button.default, { type: ui_Button.ButtonTypes.SECONDARY, size: ui_Button.ButtonSizes.SMALL, onClick: function () {
                    setShowModal(true);
                } }, stringSet.CHANNEL_SETTING__MUTED_MEMBERS__TITLE_ALL))),
        showModal && (React__default.default.createElement(MutedMembersModal, { onCancel: function () {
                setShowModal(false);
                refreshList();
            }, renderUserListItem: renderUserListItem, memberListQueryParams: memberListQueryParams }))));
};

exports.BannedUserList = BannedUserList;
exports.MutedMemberList = MutedMemberList;
exports.OperatorList = OperatorList;
//# sourceMappingURL=bundle-CCBu2bix.js.map
