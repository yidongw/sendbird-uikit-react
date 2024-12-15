'use strict';

var _tslib = require('../../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var index$1 = require('../../chunks/bundle-C3e9xkw6.js');
var RemoveMessageModal = require('../../chunks/bundle-Dt82hn3m.js');
var Thread_components_ParentMessageInfoItem = require('./ParentMessageInfoItem.js');
var index = require('../../chunks/bundle-e2d_I3io.js');
var getIsReactionEnabled = require('../../chunks/bundle-Dim56WjD.js');
var LocalizationContext = require('../../chunks/bundle-CmBrGegh.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var Thread_context = require('../context.js');
var UserProfileContext = require('../../chunks/bundle-Bn25Hepq.js');
var SuggestedMentionList = require('../../chunks/bundle-BnciA98a.js');
var ui_Avatar = require('../../chunks/bundle-Dmsb_oex.js');
var ui_Label = require('../../chunks/bundle-D8-2bEdY.js');
var ui_FileViewer = require('../../ui/FileViewer.js');
var ui_MessageItemReactionMenu = require('../../ui/MessageItemReactionMenu.js');
var ui_ContextMenu = require('../../chunks/bundle-BYSQ-mQr.js');
var ui_UserProfile = require('../../ui/UserProfile.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var _const = require('../../chunks/bundle-CsHnjhet.js');
var types = require('../../chunks/bundle-Dke6QHpR.js');
var MediaQueryContext = require('../../chunks/bundle-CzcmYPsN.js');
var useLongPress = require('../../chunks/bundle-CrV-FZvi.js');
var ui_MobileMenu = require('../../ui/MobileMenu.js');
var Message_hooks_useDirtyGetMentions = require('../../Message/hooks/useDirtyGetMentions.js');
var resolvedReplyType = require('../../chunks/bundle-DL9pw4YL.js');
var utils = require('../../chunks/bundle-BYHj6UqH.js');
var MessageMenu = require('../../chunks/bundle-CDQSndVh.js');
var useElementObserver = require('../../chunks/bundle-DS66lTJo.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-DfISCDoH.js');
require('react-dom');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../ui/Icon.js');
require('@sendbird/uikit-tools');
require('../../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-M6Urrta6.js');
require('../../ui/ImageRenderer.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-LSLwWEwG.js');
require('../../ui/EmojiReactions.js');
require('../../ui/ReactionBadge.js');
require('../../ui/ReactionButton.js');
require('../../ui/BottomSheet.js');
require('../../ui/UserListItem.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../ui/SortByRow.js');
require('../../sendbirdSelectors.js');
require('../../chunks/bundle-Dcn1Gf-8.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../Message/context.js');
require('../../ui/VoiceMessageItemBody.js');
require('../../ui/ProgressBar.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../ui/PlaybackTime.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-C9AThBV0.js');
require('../../chunks/bundle-CZ8XCEGd.js');
require('../../ui/MentionLabel.js');
require('../../ui/LinkLabel.js');
require('../../chunks/bundle-D5dbLMqr.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-DrPixXq9.js');
require('../../chunks/bundle-CIP3LaaL.js');
require('../context/types.js');
require('../../chunks/bundle-XTn8OOwy.js');
require('../../chunks/bundle-DrXG_ZI5.js');
require('../../chunks/bundle-3ucLy5RS.js');
require('../../chunks/bundle-CxDaflMi.js');
require('../../chunks/bundle-XkouAzOQ.js');
require('../../chunks/bundle-C9DxbvFZ.js');
require('dompurify');
require('../../chunks/bundle-DhOkJsb_.js');
require('../../chunks/bundle-BHlqknCd.js');
require('../../chunks/bundle-tu3X3qzD.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function ParentMessageInfo(_a) {
    var _this = this;
    var _b, _c, _d, _e, _f, _g;
    var className = _a.className, _h = _a.renderEmojiMenu, renderEmojiMenu = _h === void 0 ? function (props) { return React__default.default.createElement(ui_MessageItemReactionMenu.MessageEmojiMenu, _tslib.__assign({}, props)); } : _h, _j = _a.renderMessageMenu, renderMessageMenu = _j === void 0 ? function (props) { return React__default.default.createElement(MessageMenu.MessageMenu, _tslib.__assign({}, props)); } : _j;
    var _k = useSendbirdStateContext.useSendbirdStateContext(), stores = _k.stores, config = _k.config;
    var isOnline = config.isOnline, userMention = config.userMention, logger = config.logger, groupChannel = config.groupChannel;
    var userId = (_c = (_b = stores.userStore.user) === null || _b === void 0 ? void 0 : _b.userId) !== null && _c !== void 0 ? _c : '';
    var _l = LocalizationContext.useLocalization(), dateLocale = _l.dateLocale, stringSet = _l.stringSet;
    var _m = Thread_context.useThreadContext(), currentChannel = _m.currentChannel, parentMessage = _m.parentMessage, allThreadMessages = _m.allThreadMessages, emojiContainer = _m.emojiContainer, toggleReaction = _m.toggleReaction, updateMessage = _m.updateMessage, deleteMessage = _m.deleteMessage, onMoveToParentMessage = _m.onMoveToParentMessage, onHeaderActionClick = _m.onHeaderActionClick, isMuted = _m.isMuted, isChannelFrozen = _m.isChannelFrozen, onBeforeDownloadFileMessage = _m.onBeforeDownloadFileMessage, filterEmojiCategoryIds = _m.filterEmojiCategoryIds;
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    var isMenuMounted = useElementObserver.useElementObserver("#".concat(ui_ContextMenu.getObservingId(parentMessage.messageId), ".").concat(ui_ContextMenu.MENU_OBSERVING_CLASS_NAME), [
        document.getElementById(ui_ContextMenu.MENU_ROOT_ID),
        document.getElementById(ui_ContextMenu.EMOJI_MENU_ROOT_ID),
    ]);
    var _o = React.useState(false), showRemove = _o[0], setShowRemove = _o[1];
    var _p = React.useState(false), showFileViewer = _p[0], setShowFileViewer = _p[1];
    var isReactionEnabled = getIsReactionEnabled.getIsReactionEnabled({
        channel: currentChannel,
        config: config,
    });
    var isMentionEnabled = groupChannel.enableMention;
    var replyType = resolvedReplyType.getCaseResolvedReplyType(groupChannel.replyType).upperCase;
    var isByMe = userId === parentMessage.sender.userId;
    // Mobile
    var mobileMenuRef = React.useRef(null);
    var _q = React.useState(false), showMobileMenu = _q[0], setShowMobileMenu = _q[1];
    var longPress = useLongPress.useLongPress({
        onLongPress: function () {
            if (isMobile) {
                setShowMobileMenu(true);
            }
        },
    }, {
        shouldPreventDefault: false,
    });
    // Edit message
    var _r = React.useState(false), showEditInput = _r[0], setShowEditInput = _r[1];
    var disabled = !isOnline || isMuted || isChannelFrozen && !((currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.myRole) === types.Role.OPERATOR);
    // Mention
    var editMessageInputRef = React.useRef(null);
    var _s = React.useState(''), mentionNickname = _s[0], setMentionNickname = _s[1];
    var _t = React.useState([]), mentionedUsers = _t[0], setMentionedUsers = _t[1];
    var _u = React.useState([]), mentionedUserIds = _u[0], setMentionedUserIds = _u[1];
    var _v = React.useState(null), messageInputEvent = _v[0], setMessageInputEvent = _v[1];
    var _w = React.useState(null), selectedUser = _w[0], setSelectedUser = _w[1];
    var _x = React.useState([]), mentionSuggestedUsers = _x[0], setMentionSuggestedUsers = _x[1];
    var displaySuggestedMentionList = isOnline
        && isMentionEnabled
        && mentionNickname.length > 0
        && !isMuted
        && !(isChannelFrozen && !(currentChannel.myRole === types.Role.OPERATOR));
    var mentionNodes = Message_hooks_useDirtyGetMentions.useDirtyGetMentions({ ref: editMessageInputRef }, { logger: logger });
    var ableMention = (mentionNodes === null || mentionNodes === void 0 ? void 0 : mentionNodes.length) < (userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount);
    React.useEffect(function () {
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
    var handleOnDownloadClick = function (e) { return _tslib.__awaiter(_this, void 0, void 0, function () {
        var allowDownload, err_1;
        var _a, _b;
        return _tslib.__generator(this, function (_c) {
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
    var avatarRef = React.useRef(null);
    var _y = UserProfileContext.useUserProfileContext(), disableUserProfile = _y.disableUserProfile, renderUserProfile = _y.renderUserProfile;
    if (showEditInput && ((_d = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.isUserMessage) === null || _d === void 0 ? void 0 : _d.call(parentMessage))) {
        return (React__default.default.createElement(React__default.default.Fragment, null,
            displaySuggestedMentionList && (React__default.default.createElement(SuggestedMentionList.SuggestedMentionList, { className: "parent-message-info--suggested-mention-list", targetNickname: mentionNickname, inputEvent: messageInputEvent !== null && messageInputEvent !== void 0 ? messageInputEvent : undefined, 
                // renderUserMentionItem={renderUserMentionItem}
                onUserItemClick: function (user) {
                    if (user) {
                        setMentionedUsers(_tslib.__spreadArray(_tslib.__spreadArray([], mentionedUsers, true), [user], false));
                    }
                    setMentionNickname('');
                    setSelectedUser(user);
                    setMessageInputEvent(null);
                }, onFocusItemChange: function () {
                    setMessageInputEvent(null);
                }, onFetchUsers: function (users) {
                    setMentionSuggestedUsers(users);
                }, ableAddMention: ableMention, maxMentionCount: userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount, maxSuggestionCount: userMention === null || userMention === void 0 ? void 0 : userMention.maxSuggestionCount })),
            React__default.default.createElement(ui_MessageInput, { channel: currentChannel, isEdit: true, disabled: disabled, ref: editMessageInputRef, mentionSelectedUser: selectedUser, isMentionEnabled: isMentionEnabled, message: parentMessage, onStartTyping: function () {
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
                        && ((e.key === _const.MessageInputKeys.Enter && ableMention) || e.key === _const.MessageInputKeys.ArrowUp || e.key === _const.MessageInputKeys.ArrowDown)) {
                        setMessageInputEvent(e);
                        return true;
                    }
                    return false;
                } })));
    }
    return (React__default.default.createElement("div", _tslib.__assign({ className: "sendbird-parent-message-info ".concat(className) }, (isMobile) ? _tslib.__assign({}, longPress) : {}, { ref: mobileMenuRef }),
        React__default.default.createElement(ui_ContextMenu.ContextMenu, { menuTrigger: function (toggleDropdown) {
                var _a, _b, _c;
                return (React__default.default.createElement(ui_Avatar.Avatar, { className: "sendbird-parent-message-info__sender", ref: avatarRef, src: ((_b = (_a = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.members) === null || _a === void 0 ? void 0 : _a.find(function (m) { var _a; return (m === null || m === void 0 ? void 0 : m.userId) === ((_a = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.sender) === null || _a === void 0 ? void 0 : _a.userId); })) === null || _b === void 0 ? void 0 : _b.profileUrl)
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
                : (React__default.default.createElement(ui_ContextMenu.MenuItems, { parentRef: avatarRef, parentContainRef: avatarRef, closeDropdown: closeDropdown, style: { paddingTop: '0px', paddingBottom: '0px' } },
                    React__default.default.createElement(ui_UserProfile, { user: parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.sender, currentUserId: userId, onSuccess: closeDropdown })))); } }),
        React__default.default.createElement("div", { className: "sendbird-parent-message-info__content" },
            React__default.default.createElement("div", { className: "sendbird-parent-message-info__content__info" },
                React__default.default.createElement(ui_Label.Label, { className: isReactionEnabled
                        ? 'sendbird-parent-message-info__content__info__sender-name--use-reaction'
                        : 'sendbird-parent-message-info__content__info__sender-name', type: ui_Label.LabelTypography.CAPTION_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, ((_f = (_e = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.members) === null || _e === void 0 ? void 0 : _e.find(function (member) { var _a; return (member === null || member === void 0 ? void 0 : member.userId) === ((_a = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.sender) === null || _a === void 0 ? void 0 : _a.userId); })) === null || _f === void 0 ? void 0 : _f.nickname) || (index.getSenderName === null || index.getSenderName === void 0 ? void 0 : index.getSenderName(parentMessage))),
                React__default.default.createElement(ui_Label.Label, { className: "sendbird-parent-message-info__content__info__sent-at", type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_2 }, index$1.format((parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.createdAt) || 0, stringSet.DATE_FORMAT__MESSAGE_CREATED_AT, { locale: dateLocale }))),
            React__default.default.createElement(Thread_components_ParentMessageInfoItem, { message: parentMessage, showFileViewer: setShowFileViewer, onBeforeDownloadFileMessage: onBeforeDownloadFileMessage })),
        !isMobile && (React__default.default.createElement("div", { className: 'sendbird-parent-message-info__menu-container' },
            renderMessageMenu({
                className: utils.classnames('sendbird-parent-message-info__context-menu', isReactionEnabled && 'use-reaction', isMenuMounted && 'sendbird-mouse-hover'),
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
                className: utils.classnames('sendbird-parent-message-info__reaction-menu', isMenuMounted && 'sendbird-mouse-hover'),
                message: parentMessage,
                userId: userId,
                emojiContainer: emojiContainer,
                toggleReaction: toggleReaction,
                filterEmojiCategoryIds: filterEmojiCategoryIds,
            })))),
        showRemove && (React__default.default.createElement(RemoveMessageModal.RemoveMessage, { onCancel: function () { return setShowRemove(false); }, onSubmit: function () {
                onHeaderActionClick === null || onHeaderActionClick === void 0 ? void 0 : onHeaderActionClick();
            }, message: parentMessage })),
        showFileViewer && (React__default.default.createElement(ui_FileViewer.default, { message: parentMessage, onClose: function () { return setShowFileViewer(false); }, onDelete: function () {
                deleteMessage(parentMessage)
                    .then(function () {
                    setShowFileViewer(false);
                });
            }, onDownloadClick: handleOnDownloadClick })),
        showMobileMenu && (React__default.default.createElement(ui_MobileMenu.MobileMenu, { parentRef: mobileMenuRef, channel: currentChannel, message: parentMessage, userId: userId, replyType: replyType, hideMenu: function () {
                setShowMobileMenu(false);
            }, deleteMessage: deleteMessage, deleteMenuState: (allThreadMessages === null || allThreadMessages === void 0 ? void 0 : allThreadMessages.length) === 0
                ? 'ACTIVE'
                : 'HIDE', isReactionEnabled: isReactionEnabled, isByMe: isByMe, emojiContainer: emojiContainer, showEdit: setShowEditInput, showRemove: setShowRemove, toggleReaction: toggleReaction, isOpenedFromThread: true, onDownloadClick: handleOnDownloadClick }))));
}

module.exports = ParentMessageInfo;
//# sourceMappingURL=ParentMessageInfo.js.map
