import { c as __spreadArray, _ as __assign } from '../../chunks/bundle-Ck-Lg2K3.js';
import React__default, { useState, useContext, useEffect } from 'react';
import { L as LocalizationContext } from '../../chunks/bundle-CbLNLMef.js';
import { u as useCreateChannelContext } from '../../chunks/bundle--I4N4hbH.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { u as useMediaQueryContext } from '../../chunks/bundle-Bk1oUUzJ.js';
import { M as Modal } from '../../chunks/bundle-ptS-tNRF.js';
import { L as Label, b as LabelColors, a as LabelTypography } from '../../chunks/bundle-Di0Zwz2X.js';
import { ButtonTypes } from '../../ui/Button.js';
import { UserListItem } from '../../ui/UserListItem.js';
import { n as noop } from '../../chunks/bundle-pQHYhigr.js';
import '../../chunks/bundle-B80WXNZi.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-YOpvheAB.js';
import '../../withSendbird.js';
import '../../chunks/bundle-BL0uQSu6.js';
import '@sendbird/chat/groupChannel';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-fwRBR_Yw.js';
import '../../chunks/bundle-CnkNoe49.js';
import '../../chunks/bundle-DgxVBBM3.js';
import 'react-dom';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-gMJSD9hQ.js';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-CHD1aKHO.js';
import '../../chunks/bundle-A5WEPjt6.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-C3toIOqd.js';
import '../../chunks/bundle-BbICJE5Z.js';
import '../../ui/ImageRenderer.js';
import '../../chunks/bundle-CjhP75at.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';

var filterUser = function (idsToFilter) { return function (currentId) { return idsToFilter === null || idsToFilter === void 0 ? void 0 : idsToFilter.includes(currentId); }; };
var setChannelType = function (params, type) {
    if (type === 'broadcast') {
        // eslint-disable-next-line no-param-reassign
        params.isBroadcast = true;
    }
    if (type === 'supergroup') {
        // eslint-disable-next-line no-param-reassign
        params.isSuper = true;
    }
    return params;
};
var createDefaultUserListQuery = function (_a) {
    var sdk = _a.sdk, userFilledApplicationUserListQuery = _a.userFilledApplicationUserListQuery;
    var params = sdk.createApplicationUserListQuery();
    if (userFilledApplicationUserListQuery) {
        Object.keys(userFilledApplicationUserListQuery).forEach(function (key) {
            // @ts-ignore
            params[key] = userFilledApplicationUserListQuery[key];
        });
    }
    return params;
};

var BUFFER = 50;
var InviteUsers = function (_a) {
    var _b, _c, _d;
    var onCancel = _a.onCancel, userListQuery = _a.userListQuery;
    var _e = useCreateChannelContext(), onCreateChannelClick = _e.onCreateChannelClick, onBeforeCreateChannel = _e.onBeforeCreateChannel, onChannelCreated = _e.onChannelCreated, createChannel = _e.createChannel, onCreateChannel = _e.onCreateChannel, overrideInviteUser = _e.overrideInviteUser, type = _e.type;
    var globalStore = useSendbirdStateContext();
    var userId = (_b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _b === void 0 ? void 0 : _b.userId;
    var sdk = (_d = (_c = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _c === void 0 ? void 0 : _c.sdkStore) === null || _d === void 0 ? void 0 : _d.sdk;
    var idsToFilter = [userId];
    var _f = useState([]), users = _f[0], setUsers = _f[1];
    var _g = useState({}), selectedUsers = _g[0], setSelectedUsers = _g[1];
    var stringSet = useContext(LocalizationContext).stringSet;
    var _h = useState(null), usersDataSource = _h[0], setUsersDataSource = _h[1];
    var selectedCount = Object.keys(selectedUsers).length;
    var titleText = stringSet.MODAL__CREATE_CHANNEL__TITLE;
    var submitText = stringSet.BUTTON__CREATE;
    var isMobile = useMediaQueryContext().isMobile;
    var _j = useState(window.innerHeight), scrollableAreaHeight = _j[0], setScrollableAreaHeight = _j[1];
    useEffect(function () {
        var applicationUserListQuery = userListQuery ? userListQuery() : createDefaultUserListQuery({ sdk: sdk });
        setUsersDataSource(applicationUserListQuery);
        if (!(applicationUserListQuery === null || applicationUserListQuery === void 0 ? void 0 : applicationUserListQuery.isLoading)) {
            applicationUserListQuery.next().then(function (it) {
                setUsers(it);
            });
        }
    }, []);
    // To fix navbar break in mobile we set dynamic height to the scrollable area
    useEffect(function () {
        var scrollableAreaHeight = function () {
            setScrollableAreaHeight(window.innerHeight);
        };
        window.addEventListener('resize', scrollableAreaHeight);
        return function () {
            window.removeEventListener('resize', scrollableAreaHeight);
        };
    }, []);
    return (React__default.createElement(Modal, { isFullScreenOnMobile: true, titleText: titleText, submitText: submitText, type: ButtonTypes.PRIMARY, 
        // Disable the create button if no users are selected,
        // but if there's only the logged-in user in the user list,
        // then the create button should be enabled
        disabled: users.length > 1 && Object.keys(selectedUsers).length === 0, onCancel: onCancel, onSubmit: function () {
            var selectedUserList = Object.keys(selectedUsers).length > 0
                ? Object.keys(selectedUsers)
                : [userId];
            var _onChannelCreated = onChannelCreated !== null && onChannelCreated !== void 0 ? onChannelCreated : onCreateChannel;
            var _onCreateChannelClick = onCreateChannelClick !== null && onCreateChannelClick !== void 0 ? onCreateChannelClick : overrideInviteUser;
            if (typeof _onCreateChannelClick === 'function') {
                _onCreateChannelClick({
                    users: selectedUserList,
                    onClose: onCancel !== null && onCancel !== void 0 ? onCancel : noop,
                    channelType: type,
                });
                return;
            }
            if (onBeforeCreateChannel) {
                var params = onBeforeCreateChannel(selectedUserList);
                setChannelType(params, type);
                createChannel(params).then(function (channel) { return _onChannelCreated === null || _onChannelCreated === void 0 ? void 0 : _onChannelCreated(channel); });
            }
            else {
                var params = {};
                params.invitedUserIds = selectedUserList;
                params.isDistinct = false;
                if (userId) {
                    params.operatorUserIds = [userId];
                }
                setChannelType(params, type);
                // do not have custom params
                createChannel(params).then(function (channel) { return _onChannelCreated === null || _onChannelCreated === void 0 ? void 0 : _onChannelCreated(channel); });
            }
            onCancel === null || onCancel === void 0 ? void 0 : onCancel();
        } },
        React__default.createElement("div", null,
            React__default.createElement(Label, { color: (selectedCount > 0) ? LabelColors.PRIMARY : LabelColors.ONBACKGROUND_3, type: LabelTypography.CAPTION_1 }, "".concat(selectedCount, " ").concat(stringSet.MODAL__INVITE_MEMBER__SELECTED)),
            React__default.createElement("div", { className: "sendbird-create-channel--scroll", style: isMobile ? { height: "calc(".concat(scrollableAreaHeight, "px - 200px)") } : {}, onScroll: function (e) {
                    if (!usersDataSource)
                        return;
                    var eventTarget = e.target;
                    var hasNext = usersDataSource.hasNext, isLoading = usersDataSource.isLoading;
                    var fetchMore = ((eventTarget.clientHeight + eventTarget.scrollTop + BUFFER) > eventTarget.scrollHeight);
                    if (hasNext && fetchMore && !isLoading) {
                        usersDataSource.next().then(function (usersBatch) {
                            setUsers(__spreadArray(__spreadArray([], users, true), usersBatch, true));
                        });
                    }
                } }, users.map(function (user) { return (!filterUser(idsToFilter)(user.userId)) && (React__default.createElement(UserListItem, { key: user.userId, user: user, checkBox: true, checked: selectedUsers[user.userId], onChange: function (event) {
                    var _a;
                    var modifiedSelectedUsers = __assign(__assign({}, selectedUsers), (_a = {}, _a[event.target.id] = event.target.checked, _a));
                    if (!event.target.checked) {
                        delete modifiedSelectedUsers[event.target.id];
                    }
                    setSelectedUsers(modifiedSelectedUsers);
                } })); })))));
};

export { InviteUsers as default };
//# sourceMappingURL=InviteUsers.js.map
