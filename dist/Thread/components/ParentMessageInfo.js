import { c as __spreadArray, _ as __assign, a as __awaiter, b as __generator } from '../../chunks/bundle-HcNswZ5p.js';
import React__default, { useState, useRef, useEffect } from 'react';
import { f as format } from '../../chunks/bundle-D4JzAgen.js';
import { R as RemoveMessage } from '../../chunks/bundle-C7ocx9AB.js';
import ParentMessageInfoItem from './ParentMessageInfoItem.js';
import { f as getSenderName } from '../../chunks/bundle-Bd-i99nk.js';
import { g as getIsReactionEnabled } from '../../chunks/bundle-CuavrWk1.js';
import { u as useLocalization } from '../../chunks/bundle-DhMUg-L7.js';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { useThreadContext } from '../context.js';
import { u as useUserProfileContext } from '../../chunks/bundle-B91Bhfde.js';
import { S as SuggestedMentionList } from '../../chunks/bundle-Bpffa6Xa.js';
import { A as Avatar } from '../../chunks/bundle-2pbuHA3C.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-Qkp2VIaZ.js';
import FileViewer from '../../ui/FileViewer.js';
import { MessageEmojiMenu } from '../../ui/MessageItemReactionMenu.js';
import { d as MENU_ROOT_ID, E as EMOJI_MENU_ROOT_ID, g as getObservingId, e as MENU_OBSERVING_CLASS_NAME, C as ContextMenu, b as MenuItems } from '../../chunks/bundle-BKzcG-aC.js';
import UserProfile from '../../ui/UserProfile.js';
import MessageInput from '../../ui/MessageInput.js';
import { M as MessageInputKeys } from '../../chunks/bundle-lUbYBD0x.js';
import { R as Role } from '../../chunks/bundle-BixCOuL9.js';
import { u as useMediaQueryContext } from '../../chunks/bundle-DnSobLtx.js';
import { u as useLongPress } from '../../chunks/bundle-B6yWIKOT.js';
import { MobileMenu } from '../../ui/MobileMenu.js';
import { useDirtyGetMentions } from '../../Message/hooks/useDirtyGetMentions.js';
import { g as getCaseResolvedReplyType } from '../../chunks/bundle-CUhgRMBc.js';
import { c as classnames } from '../../chunks/bundle-0WaCg6X7.js';
import { M as MessageMenu } from '../../chunks/bundle-X8EPLaoY.js';
import { u as useElementObserver } from '../../chunks/bundle-Cnmz5VIU.js';
import '../../chunks/bundle-DB7YSrIT.js';
import '../../chunks/bundle-ja8H3E0K.js';
import 'react-dom';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../ui/Icon.js';
import '@sendbird/uikit-tools';
import '../../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../chunks/bundle-DQk0aENq.js';
import '../../chunks/bundle-DjLJFwD7.js';
import '../../chunks/bundle-BzEzK7wl.js';
import '../../ui/ImageRenderer.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-DGMsaaNU.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/ReactionButton.js';
import '../../ui/BottomSheet.js';
import '../../ui/UserListItem.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../chunks/bundle-DkDQ1PWY.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-dybWaw0v.js';
import '../../ui/SortByRow.js';
import '../../sendbirdSelectors.js';
import '../../chunks/bundle-BwmZGijR.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../Message/context.js';
import '../../ui/VoiceMessageItemBody.js';
import '../../ui/ProgressBar.js';
import '../../VoicePlayer/useVoicePlayer.js';
import '../../ui/PlaybackTime.js';
import '../../ui/Loader.js';
import '../../chunks/bundle-CYbqxz_s.js';
import '../../chunks/bundle-BvQmfZZv.js';
import '../../ui/MentionLabel.js';
import '../../ui/LinkLabel.js';
import '../../chunks/bundle-CW5sRqha.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-B43UOaqG.js';
import '../../chunks/bundle-D-F3KakE.js';
import '../context/types.js';
import '../../chunks/bundle-DDTq-6FS.js';
import '../../chunks/bundle-zVlBKrSk.js';
import '../../chunks/bundle-BYBFk8ow.js';
import '../../chunks/bundle-CijxkMjj.js';
import '../../chunks/bundle-A7zrKt0i.js';
import '../../chunks/bundle-Bf0OMYby.js';
import 'dompurify';
import '../../chunks/bundle-DCxt9PzH.js';
import '../../chunks/bundle-BddSUitu.js';
import '../../chunks/bundle-DLG7S88z.js';

function ParentMessageInfo(_a) {
    var _this = this;
    var _b, _c, _d, _e, _f, _g;
    var className = _a.className, _h = _a.renderEmojiMenu, renderEmojiMenu = _h === void 0 ? function (props) { return React__default.createElement(MessageEmojiMenu, __assign({}, props)); } : _h, _j = _a.renderMessageMenu, renderMessageMenu = _j === void 0 ? function (props) { return React__default.createElement(MessageMenu, __assign({}, props)); } : _j;
    var _k = useSendbirdStateContext(), stores = _k.stores, config = _k.config;
    var isOnline = config.isOnline, userMention = config.userMention, logger = config.logger, groupChannel = config.groupChannel;
    var userId = (_c = (_b = stores.userStore.user) === null || _b === void 0 ? void 0 : _b.userId) !== null && _c !== void 0 ? _c : '';
    var _l = useLocalization(), dateLocale = _l.dateLocale, stringSet = _l.stringSet;
    var _m = useThreadContext(), currentChannel = _m.currentChannel, parentMessage = _m.parentMessage, allThreadMessages = _m.allThreadMessages, emojiContainer = _m.emojiContainer, toggleReaction = _m.toggleReaction, updateMessage = _m.updateMessage, deleteMessage = _m.deleteMessage, onMoveToParentMessage = _m.onMoveToParentMessage, onHeaderActionClick = _m.onHeaderActionClick, isMuted = _m.isMuted, isChannelFrozen = _m.isChannelFrozen, onBeforeDownloadFileMessage = _m.onBeforeDownloadFileMessage, filterEmojiCategoryIds = _m.filterEmojiCategoryIds;
    var isMobile = useMediaQueryContext().isMobile;
    var isMenuMounted = useElementObserver("#".concat(getObservingId(parentMessage.messageId), ".").concat(MENU_OBSERVING_CLASS_NAME), [
        document.getElementById(MENU_ROOT_ID),
        document.getElementById(EMOJI_MENU_ROOT_ID),
    ]);
    var _o = useState(false), showRemove = _o[0], setShowRemove = _o[1];
    var _p = useState(false), showFileViewer = _p[0], setShowFileViewer = _p[1];
    var isReactionEnabled = getIsReactionEnabled({
        channel: currentChannel,
        config: config,
    });
    var isMentionEnabled = groupChannel.enableMention;
    var replyType = getCaseResolvedReplyType(groupChannel.replyType).upperCase;
    var isByMe = userId === parentMessage.sender.userId;
    // Mobile
    var mobileMenuRef = useRef(null);
    var _q = useState(false), showMobileMenu = _q[0], setShowMobileMenu = _q[1];
    var longPress = useLongPress({
        onLongPress: function () {
            if (isMobile) {
                setShowMobileMenu(true);
            }
        },
    }, {
        shouldPreventDefault: false,
    });
    // Edit message
    var _r = useState(false), showEditInput = _r[0], setShowEditInput = _r[1];
    var disabled = !isOnline || isMuted || isChannelFrozen && !((currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.myRole) === Role.OPERATOR);
    // Mention
    var editMessageInputRef = useRef(null);
    var _s = useState(''), mentionNickname = _s[0], setMentionNickname = _s[1];
    var _t = useState([]), mentionedUsers = _t[0], setMentionedUsers = _t[1];
    var _u = useState([]), mentionedUserIds = _u[0], setMentionedUserIds = _u[1];
    var _v = useState(null), messageInputEvent = _v[0], setMessageInputEvent = _v[1];
    var _w = useState(null), selectedUser = _w[0], setSelectedUser = _w[1];
    var _x = useState([]), mentionSuggestedUsers = _x[0], setMentionSuggestedUsers = _x[1];
    var displaySuggestedMentionList = isOnline
        && isMentionEnabled
        && mentionNickname.length > 0
        && !isMuted
        && !(isChannelFrozen && !(currentChannel.myRole === Role.OPERATOR));
    var mentionNodes = useDirtyGetMentions({ ref: editMessageInputRef }, { logger: logger });
    var ableMention = (mentionNodes === null || mentionNodes === void 0 ? void 0 : mentionNodes.length) < (userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount);
    useEffect(function () {
        setMentionedUsers(mentionedUsers.filter(function (_a) {
            var userId = _a.userId;
            var i = mentionedUserIds.indexOf(userId);
            if (i < 0) {
                return false;
            }
            else {
                mentionedUserIds.splice(i, 1);
                return true;
            }
        }));
    }, [mentionedUserIds]);
    var handleOnDownloadClick = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var allowDownload, err_1;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!onBeforeDownloadFileMessage)
                        return [2 /*return*/];
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, onBeforeDownloadFileMessage({ message: parentMessage })];
                case 2:
                    allowDownload = _c.sent();
                    if (!allowDownload) {
                        e.preventDefault();
                        (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'ParentMessageInfo: Not allowed to download.');
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _c.sent();
                    (_b = logger === null || logger === void 0 ? void 0 : logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, 'ParentMessageInfo: Error occurred while determining download continuation:', err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    // User Profile
    var avatarRef = useRef(null);
    var _y = useUserProfileContext(), disableUserProfile = _y.disableUserProfile, renderUserProfile = _y.renderUserProfile;
    if (showEditInput && ((_d = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.isUserMessage) === null || _d === void 0 ? void 0 : _d.call(parentMessage))) {
        return (React__default.createElement(React__default.Fragment, null,
            displaySuggestedMentionList && (React__default.createElement(SuggestedMentionList, { className: "parent-message-info--suggested-mention-list", targetNickname: mentionNickname, inputEvent: messageInputEvent !== null && messageInputEvent !== void 0 ? messageInputEvent : undefined, 
                // renderUserMentionItem={renderUserMentionItem}
                onUserItemClick: function (user) {
                    if (user) {
                        setMentionedUsers(__spreadArray(__spreadArray([], mentionedUsers, true), [user], false));
                    }
                    setMentionNickname('');
                    setSelectedUser(user);
                    setMessageInputEvent(null);
                }, onFocusItemChange: function () {
                    setMessageInputEvent(null);
                }, onFetchUsers: function (users) {
                    setMentionSuggestedUsers(users);
                }, ableAddMention: ableMention, maxMentionCount: userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount, maxSuggestionCount: userMention === null || userMention === void 0 ? void 0 : userMention.maxSuggestionCount })),
            React__default.createElement(MessageInput, { channel: currentChannel, isEdit: true, disabled: disabled, ref: editMessageInputRef, mentionSelectedUser: selectedUser, isMentionEnabled: isMentionEnabled, message: parentMessage, onStartTyping: function () {
                    var _a;
                    (_a = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.startTyping) === null || _a === void 0 ? void 0 : _a.call(currentChannel);
                }, onUpdateMessage: function (_a) {
                    var _b;
                    var messageId = _a.messageId, message = _a.message, mentionTemplate = _a.mentionTemplate;
                    updateMessage({
                        messageId: messageId,
                        message: message,
                        mentionedUsers: mentionedUsers,
                        mentionTemplate: mentionTemplate,
                    });
                    setShowEditInput(false);
                    (_b = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.endTyping) === null || _b === void 0 ? void 0 : _b.call(currentChannel);
                }, onCancelEdit: function () {
                    var _a;
                    setMentionNickname('');
                    setMentionedUsers([]);
                    setMentionedUserIds([]);
                    setMentionSuggestedUsers([]);
                    setShowEditInput(false);
                    (_a = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.endTyping) === null || _a === void 0 ? void 0 : _a.call(currentChannel);
                }, onUserMentioned: function (user) {
                    if ((selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.userId) === (user === null || user === void 0 ? void 0 : user.userId)) {
                        setSelectedUser(null);
                        setMentionNickname('');
                    }
                }, onMentionStringChange: function (mentionText) {
                    setMentionNickname(mentionText);
                }, onMentionedUserIdsUpdated: function (userIds) {
                    setMentionedUserIds(userIds);
                }, onKeyDown: function (e) {
                    if (displaySuggestedMentionList && (mentionSuggestedUsers === null || mentionSuggestedUsers === void 0 ? void 0 : mentionSuggestedUsers.length) > 0
                        && ((e.key === MessageInputKeys.Enter && ableMention) || e.key === MessageInputKeys.ArrowUp || e.key === MessageInputKeys.ArrowDown)) {
                        setMessageInputEvent(e);
                        return true;
                    }
                    return false;
                } })));
    }
    return (React__default.createElement("div", __assign({ className: "sendbird-parent-message-info ".concat(className) }, (isMobile) ? __assign({}, longPress) : {}, { ref: mobileMenuRef }),
        React__default.createElement(ContextMenu, { menuTrigger: function (toggleDropdown) {
                var _a, _b, _c;
                return (React__default.createElement(Avatar, { className: "sendbird-parent-message-info__sender", ref: avatarRef, src: ((_b = (_a = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.members) === null || _a === void 0 ? void 0 : _a.find(function (m) { var _a; return (m === null || m === void 0 ? void 0 : m.userId) === ((_a = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.sender) === null || _a === void 0 ? void 0 : _a.userId); })) === null || _b === void 0 ? void 0 : _b.profileUrl)
                        || ((_c = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.sender) === null || _c === void 0 ? void 0 : _c.profileUrl), alt: "thread message sender", width: "40px", height: "40px", onClick: function () {
                        if (!disableUserProfile) {
                            toggleDropdown();
                        }
                    } }));
            }, menuItems: function (closeDropdown) { return (renderUserProfile
                ? renderUserProfile({
                    user: parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.sender,
                    close: closeDropdown,
                    currentUserId: userId,
                    avatarRef: avatarRef,
                })
                : (React__default.createElement(MenuItems, { parentRef: avatarRef, parentContainRef: avatarRef, closeDropdown: closeDropdown, style: { paddingTop: '0px', paddingBottom: '0px' } },
                    React__default.createElement(UserProfile, { user: parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.sender, currentUserId: userId, onSuccess: closeDropdown })))); } }),
        React__default.createElement("div", { className: "sendbird-parent-message-info__content" },
            React__default.createElement("div", { className: "sendbird-parent-message-info__content__info" },
                React__default.createElement(Label, { className: isReactionEnabled
                        ? 'sendbird-parent-message-info__content__info__sender-name--use-reaction'
                        : 'sendbird-parent-message-info__content__info__sender-name', type: LabelTypography.CAPTION_2, color: LabelColors.ONBACKGROUND_2 }, ((_f = (_e = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.members) === null || _e === void 0 ? void 0 : _e.find(function (member) { var _a; return (member === null || member === void 0 ? void 0 : member.userId) === ((_a = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.sender) === null || _a === void 0 ? void 0 : _a.userId); })) === null || _f === void 0 ? void 0 : _f.nickname) || (getSenderName === null || getSenderName === void 0 ? void 0 : getSenderName(parentMessage))),
                React__default.createElement(Label, { className: "sendbird-parent-message-info__content__info__sent-at", type: LabelTypography.CAPTION_3, color: LabelColors.ONBACKGROUND_2 }, format((parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.createdAt) || 0, stringSet.DATE_FORMAT__MESSAGE_CREATED_AT, { locale: dateLocale }))),
            React__default.createElement(ParentMessageInfoItem, { message: parentMessage, showFileViewer: setShowFileViewer, onBeforeDownloadFileMessage: onBeforeDownloadFileMessage })),
        !isMobile && (React__default.createElement("div", { className: 'sendbird-parent-message-info__menu-container' },
            renderMessageMenu({
                className: classnames('sendbird-parent-message-info__context-menu', isReactionEnabled && 'use-reaction', isMenuMounted && 'sendbird-mouse-hover'),
                channel: currentChannel,
                message: parentMessage,
                isByMe: userId === ((_g = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.sender) === null || _g === void 0 ? void 0 : _g.userId),
                disableDeleteMessage: allThreadMessages.length > 0,
                replyType: replyType,
                showEdit: setShowEditInput,
                showRemove: setShowRemove,
                onMoveToParentMessage: function () {
                    onMoveToParentMessage === null || onMoveToParentMessage === void 0 ? void 0 : onMoveToParentMessage({ message: parentMessage, channel: currentChannel });
                },
                deleteMessage: deleteMessage,
            }),
            isReactionEnabled && (renderEmojiMenu({
                className: classnames('sendbird-parent-message-info__reaction-menu', isMenuMounted && 'sendbird-mouse-hover'),
                message: parentMessage,
                userId: userId,
                emojiContainer: emojiContainer,
                toggleReaction: toggleReaction,
                filterEmojiCategoryIds: filterEmojiCategoryIds,
            })))),
        showRemove && (React__default.createElement(RemoveMessage, { onCancel: function () { return setShowRemove(false); }, onSubmit: function () {
                onHeaderActionClick === null || onHeaderActionClick === void 0 ? void 0 : onHeaderActionClick();
            }, message: parentMessage })),
        showFileViewer && (React__default.createElement(FileViewer, { message: parentMessage, onClose: function () { return setShowFileViewer(false); }, onDelete: function () {
                deleteMessage(parentMessage)
                    .then(function () {
                    setShowFileViewer(false);
                });
            }, onDownloadClick: handleOnDownloadClick })),
        showMobileMenu && (React__default.createElement(MobileMenu, { parentRef: mobileMenuRef, channel: currentChannel, message: parentMessage, userId: userId, replyType: replyType, hideMenu: function () {
                setShowMobileMenu(false);
            }, deleteMessage: deleteMessage, deleteMenuState: (allThreadMessages === null || allThreadMessages === void 0 ? void 0 : allThreadMessages.length) === 0
                ? 'ACTIVE'
                : 'HIDE', isReactionEnabled: isReactionEnabled, isByMe: isByMe, emojiContainer: emojiContainer, showEdit: setShowEditInput, showRemove: setShowRemove, toggleReaction: toggleReaction, isOpenedFromThread: true, onDownloadClick: handleOnDownloadClick }))));
}

export { ParentMessageInfo as default };
//# sourceMappingURL=ParentMessageInfo.js.map
