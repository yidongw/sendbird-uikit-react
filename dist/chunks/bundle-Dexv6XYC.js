import { a as __awaiter, b as __generator, d as __rest, _ as __assign } from './bundle-HcNswZ5p.js';
import React__default, { useState, useRef, useCallback, createContext, useContext } from 'react';
import { Role } from '@sendbird/chat';
import { OpenChannel } from '@sendbird/chat/openChannel';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import '../withSendbird.js';
import { a as MenuItem, b as MenuItems } from './bundle-BKzcG-aC.js';
import 'react-dom';
import IconButton from '../ui/IconButton.js';
import './bundle-Bd-i99nk.js';
import { u as useLocalization } from './bundle-DhMUg-L7.js';
import { c as classnames } from './bundle-0WaCg6X7.js';
import Icon, { IconTypes, IconColors } from '../ui/Icon.js';

// Utility function to handle processing state and promise execution
var processToggleAction = function (isProcessing, action, errorHandler) { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (isProcessing.current) {
                    errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(new Error('Processing in progress'));
                    return [2 /*return*/];
                }
                isProcessing.current = true;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, 4, 5]);
                return [4 /*yield*/, action()];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                error_1 = _a.sent();
                errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error_1);
                return [3 /*break*/, 5];
            case 4:
                isProcessing.current = false;
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
var getInitialIsOperator = function (channel, user) {
    if (!channel)
        return false;
    if (channel instanceof OpenChannel) {
        return channel.isOperator(user);
    }
    return (user === null || user === void 0 ? void 0 : user.role) === Role.OPERATOR;
};
var getInitialIsMuted = function (channel, user) {
    return channel ? user === null || user === void 0 ? void 0 : user.isMuted : false;
};
var useToggleOperator = function (_a) {
    var channel = _a.channel, user = _a.user, onToggleOperatorState = _a.onToggleOperatorState, _isOperator = _a.isOperator;
    var _b = useState(_isOperator !== null && _isOperator !== void 0 ? _isOperator : getInitialIsOperator(channel, user)), isOperator = _b[0], setIsOperator = _b[1];
    var isProcessing = useRef(false);
    var toggleOperator = useCallback(function () {
        // If channel is undefined, resolve immediately
        if (!channel)
            return Promise.resolve();
        return processToggleAction(isProcessing, function () { return __awaiter(void 0, void 0, void 0, function () {
            var togglePromise, newStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        togglePromise = isOperator
                            ? channel.removeOperators([user.userId])
                            : channel.addOperators([user.userId]);
                        return [4 /*yield*/, togglePromise];
                    case 1:
                        _a.sent();
                        newStatus = !isOperator;
                        setIsOperator(newStatus);
                        onToggleOperatorState === null || onToggleOperatorState === void 0 ? void 0 : onToggleOperatorState({ user: user, newStatus: newStatus });
                        return [2 /*return*/];
                }
            });
        }); }, function (error) {
            onToggleOperatorState === null || onToggleOperatorState === void 0 ? void 0 : onToggleOperatorState({ user: user, newStatus: isOperator, error: error });
        });
    }, [isOperator, channel.url, user.userId, onToggleOperatorState]);
    return {
        isOperator: isOperator,
        toggleOperator: toggleOperator,
    };
};
var useToggleMute = function (_a) {
    var channel = _a.channel, user = _a.user, onToggleMuteState = _a.onToggleMuteState, _isMuted = _a.isMuted;
    var _b = useState(_isMuted !== null && _isMuted !== void 0 ? _isMuted : getInitialIsMuted(channel, user)), isMuted = _b[0], setIsMuted = _b[1];
    var isProcessing = useRef(false);
    var toggleMute = useCallback(function () {
        // If channel is undefined, resolve immediately
        if (!channel)
            return Promise.resolve();
        return processToggleAction(isProcessing, function () { return __awaiter(void 0, void 0, void 0, function () {
            var togglePromise, newStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        togglePromise = isMuted
                            ? channel.unmuteUser(user)
                            : channel.muteUser(user);
                        return [4 /*yield*/, togglePromise];
                    case 1:
                        _a.sent();
                        newStatus = !isMuted;
                        setIsMuted(newStatus);
                        onToggleMuteState === null || onToggleMuteState === void 0 ? void 0 : onToggleMuteState({ user: user, newStatus: newStatus });
                        return [2 /*return*/];
                }
            });
        }); }, function (error) {
            onToggleMuteState === null || onToggleMuteState === void 0 ? void 0 : onToggleMuteState({ user: user, newStatus: isMuted, error: error });
        });
    }, [isMuted, channel.url, user.userId, onToggleMuteState]);
    return {
        isMuted: isMuted,
        toggleMute: toggleMute,
    };
};
var useToggleBan = function (_a) {
    var channel = _a.channel, user = _a.user, onToggleBanState = _a.onToggleBanState, _isBanned = _a.isBanned;
    var _b = useState(_isBanned !== null && _isBanned !== void 0 ? _isBanned : false), isBanned = _b[0], setIsBanned = _b[1]; // Initially starting with false
    var isProcessing = useRef(false);
    var toggleBan = useCallback(function () {
        // If channel is undefined, resolve immediately
        if (!channel)
            return Promise.resolve();
        return processToggleAction(isProcessing, function () { return __awaiter(void 0, void 0, void 0, function () {
            var togglePromise, newStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        togglePromise = isBanned
                            ? channel.unbanUser(user)
                            : channel.banUser(user);
                        return [4 /*yield*/, togglePromise];
                    case 1:
                        _a.sent();
                        newStatus = !isBanned;
                        setIsBanned(newStatus);
                        onToggleBanState === null || onToggleBanState === void 0 ? void 0 : onToggleBanState({ user: user, newStatus: newStatus });
                        return [2 /*return*/];
                }
            });
        }); }, function (error) {
            onToggleBanState === null || onToggleBanState === void 0 ? void 0 : onToggleBanState({ user: user, newStatus: isBanned, error: error });
        });
    }, [isBanned, channel.url, user.userId, onToggleBanState]);
    return {
        isBanned: isBanned,
        toggleBan: toggleBan,
    };
};

var UserListItemMenuContext = createContext(undefined);
var UserListItemMenuProvider = function (_a) {
    var children = _a.children, values = __rest(_a, ["children"]);
    var config = useSendbirdStateContext().config;
    var currentUserId = config.userId;
    var channel = values.channel, user = values.user;
    var isCurrentUser = user.userId === currentUserId;
    var isCurrentUserOperator = (function () {
        if (!channel)
            return false;
        return channel instanceof OpenChannel
            ? channel.isOperator(currentUserId)
            : channel.myRole === Role.OPERATOR;
    })();
    var operatorState = useToggleOperator(values);
    var muteState = useToggleMute(values);
    var banState = useToggleBan(values);
    return (React__default.createElement(UserListItemMenuContext.Provider, { value: __assign(__assign(__assign(__assign(__assign({}, values), operatorState), muteState), banState), { isCurrentUser: isCurrentUser, isCurrentUserOperator: isCurrentUserOperator }) }, children));
};
var useUserListItemMenuContext = function () {
    var context = useContext(UserListItemMenuContext);
    if (!context) {
        throw new Error('useUserListItemMenuContext must be used within a UserListItemMenuProvider.');
    }
    return context;
};

var OperatorToggleMenuItem = function (props) {
    var _a;
    var stringSet = useLocalization().stringSet;
    var _b = useUserListItemMenuContext(), isOperator = _b.isOperator, toggleOperator = _b.toggleOperator, isCurrentUser = _b.isCurrentUser, isCurrentUserOperator = _b.isCurrentUserOperator, hideMenu = _b.hideMenu;
    if (!isCurrentUserOperator)
        return React__default.createElement(React__default.Fragment, null);
    return (React__default.createElement(MenuItem, __assign({}, props, { onClick: function (e) {
            var _a;
            (_a = props === null || props === void 0 ? void 0 : props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
            toggleOperator();
            hideMenu();
        }, disabled: isCurrentUser }), (_a = props === null || props === void 0 ? void 0 : props.children) !== null && _a !== void 0 ? _a : (isOperator
        ? stringSet.CHANNEL_SETTING__MODERATION__UNREGISTER_OPERATOR
        : stringSet.CHANNEL_SETTING__MODERATION__REGISTER_AS_OPERATOR)));
};
var MuteToggleMenuItem = function (props) {
    var _a;
    var stringSet = useLocalization().stringSet;
    var _b = useUserListItemMenuContext(), isMuted = _b.isMuted, toggleMute = _b.toggleMute, isCurrentUserOperator = _b.isCurrentUserOperator, hideMenu = _b.hideMenu, channel = _b.channel;
    if (!isCurrentUserOperator || (channel === null || channel === void 0 ? void 0 : channel.isBroadcast))
        return React__default.createElement(React__default.Fragment, null);
    return (React__default.createElement(MenuItem, __assign({}, props, { onClick: function (e) {
            var _a;
            (_a = props === null || props === void 0 ? void 0 : props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
            toggleMute();
            hideMenu();
        } }), (_a = props === null || props === void 0 ? void 0 : props.children) !== null && _a !== void 0 ? _a : (isMuted
        ? stringSet.CHANNEL_SETTING__MODERATION__UNMUTE
        : stringSet.CHANNEL_SETTING__MODERATION__MUTE)));
};
var BanToggleMenuItem = function (props) {
    var _a;
    var stringSet = useLocalization().stringSet;
    var _b = useUserListItemMenuContext(), isBanned = _b.isBanned, toggleBan = _b.toggleBan, isCurrentUserOperator = _b.isCurrentUserOperator, hideMenu = _b.hideMenu;
    if (!isCurrentUserOperator)
        return React__default.createElement(React__default.Fragment, null);
    return (React__default.createElement(MenuItem, __assign({}, props, { onClick: function (e) {
            var _a;
            (_a = props === null || props === void 0 ? void 0 : props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
            toggleBan();
            hideMenu();
        } }), (_a = props === null || props === void 0 ? void 0 : props.children) !== null && _a !== void 0 ? _a : (isBanned
        ? stringSet.CHANNEL_SETTING__MODERATION__UNBAN
        : stringSet.CHANNEL_SETTING__MODERATION__BAN)));
};

var TriggerIcon = function (_a) {
    var toggleMenu = _a.toggleMenu, ref = _a.ref;
    return (React__default.createElement(IconButton, { ref: ref, className: "sendbird-user-message__more__menu", width: "32px", height: "32px", onClick: toggleMenu },
        React__default.createElement(Icon, { width: "24px", height: "24px", type: IconTypes.MORE, fillColor: IconColors.CONTENT_INVERSE })));
};
var DefaultMenuItems = function (_a) {
    var items = _a.items;
    var OperatorToggleMenuItem = items.OperatorToggleMenuItem, MuteToggleMenuItem = items.MuteToggleMenuItem, BanToggleMenuItem = items.BanToggleMenuItem;
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(OperatorToggleMenuItem, null),
        React__default.createElement(MuteToggleMenuItem, null),
        React__default.createElement(BanToggleMenuItem, null)));
};

var UserListItemMenu = function (props) {
    var user = props.user, className = props.className, _a = props.renderTrigger, renderTrigger = _a === void 0 ? TriggerIcon : _a, _b = props.renderMenuItems, renderMenuItems = _b === void 0 ? DefaultMenuItems : _b;
    var _c = useState(false), isMenuVisible = _c[0], setMenuVisibility = _c[1];
    var containerRef = useRef(null);
    var triggerRef = useRef(null);
    var config = useSendbirdStateContext().config;
    var currentUserId = config.userId;
    var toggleMenu = function () {
        setMenuVisibility(function (prev) { return !prev; });
    };
    var hideMenu = function () {
        setMenuVisibility(false);
    };
    if (user.userId === currentUserId) {
        return null;
    }
    return (React__default.createElement("div", { className: classnames('sendbird-user-list-item-menu', className), ref: containerRef },
        React__default.createElement(UserListItemMenuProvider, __assign({}, props, { hideMenu: hideMenu, toggleMenu: toggleMenu }),
            renderTrigger({ ref: triggerRef, toggleMenu: toggleMenu }),
            isMenuVisible && (React__default.createElement(MenuItems
            // TODO: Add id using getObservingId for useElementObserver
            , { 
                // TODO: Add id using getObservingId for useElementObserver
                parentRef: triggerRef, parentContainRef: containerRef, closeDropdown: hideMenu }, renderMenuItems({
                items: {
                    OperatorToggleMenuItem: OperatorToggleMenuItem,
                    MuteToggleMenuItem: MuteToggleMenuItem,
                    BanToggleMenuItem: BanToggleMenuItem,
                },
            }))))));
};

export { UserListItemMenu as U, UserListItemMenuProvider as a, useUserListItemMenuContext as u };
//# sourceMappingURL=bundle-Dexv6XYC.js.map
