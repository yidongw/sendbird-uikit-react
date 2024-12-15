'use strict';

var React = require('react');
var ui_ReactionBadge = require('./ReactionBadge.js');
var ui_ReactionButton = require('./ReactionButton.js');
var ui_ImageRenderer = require('./ImageRenderer.js');
var ui_Icon = require('./Icon.js');
var ui_ContextMenu = require('../chunks/bundle-BKyZTqvq.js');
var index = require('../chunks/bundle-BLoixwYr.js');
var ui_BottomSheet = require('./BottomSheet.js');
var ui_Label = require('../chunks/bundle-CAR4EIKs.js');
var ui_UserListItem = require('./UserListItem.js');
var utils = require('../chunks/bundle-Ck6ikNW6.js');
var _tslib = require('../chunks/bundle-Bdr7xlea.js');
var ui_Tooltip = require('./Tooltip.js');
var ui_TooltipWrapper = require('./TooltipWrapper.js');
var MediaQueryContext = require('../chunks/bundle-DrIKAEHN.js');
var useLongPress = require('../chunks/bundle-D_k3_Y_y.js');
var LocalizationContext = require('../chunks/bundle-Cy1ruNzs.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var Message_context = require('../Message/context.js');
var ui_Modal = require('../chunks/bundle-DZhkNDpN.js');
var ui_Button = require('./Button.js');
var getIsReactionEnabled = require('../chunks/bundle-CVdJh4P7.js');
require('../chunks/bundle-Dio8pG-T.js');
require('react-dom');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('./SortByRow.js');
require('../chunks/bundle-C1poxl5k.js');
require('../withSendbird.js');
require('./IconButton.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-Dr9yFtKa.js');
require('../chunks/bundle-C2CwvM-u.js');
require('../chunks/bundle-BD0wJiNh.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('../chunks/bundle-CJM9Pdwg.js');
require('../chunks/bundle-DgjptBQW.js');
require('../chunks/bundle-C8wv9DWs.js');
require('../chunks/bundle-B4PTJ_bJ.js');
require('./MutedAvatarOverlay.js');
require('./Checkbox.js');
require('./UserProfile.js');
require('../sendbirdSelectors.js');
require('../chunks/bundle-C6Q6BfQY.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var ReactedMembersBottomSheet = function (_a) {
    var _b, _c, _d;
    var message = _a.message, channel = _a.channel, _e = _a.emojiKey, emojiKey = _e === void 0 ? '' : _e, hideMenu = _a.hideMenu, emojiContainer = _a.emojiContainer, onPressUserProfileHandler = _a.onPressUserProfileHandler;
    var _f = channel.members, members = _f === void 0 ? [] : _f;
    var _g = React.useState(emojiKey), selectedEmoji = _g[0], setSelectedEmoji = _g[1];
    function onPressUserProfileCallBack() {
        if (onPressUserProfileHandler && message) {
            var sender = message === null || message === void 0 ? void 0 : message.sender;
            onPressUserProfileHandler(sender);
        }
    }
    return (React__default.default.createElement(ui_BottomSheet, { onBackdropClick: hideMenu },
        React__default.default.createElement("div", { className: "sendbird-message__bottomsheet" },
            React__default.default.createElement("div", { className: "sendbird-message__bottomsheet__reacted-members" }, (_b = message.reactions) === null || _b === void 0 ? void 0 : _b.map(function (reaction) {
                var emojiUrl = index.getEmojiUrl(emojiContainer, reaction.key);
                return (React__default.default.createElement("div", { key: reaction.key, className: utils.classnames('sendbird-message__bottomsheet__reacted-members__item', selectedEmoji === reaction.key && 'sendbird-message__bottomsheet__reacted-members__item__selected'), onClick: function () {
                        setSelectedEmoji(reaction.key);
                    } },
                    React__default.default.createElement(ui_ImageRenderer.default, { url: emojiUrl, width: "28px", height: "28px", placeHolder: function (_a) {
                            var style = _a.style;
                            return (React__default.default.createElement("div", { style: style },
                                React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.QUESTION, fillColor: ui_Icon.IconColors.ON_BACKGROUND_3, width: "28px", height: "28px" })));
                        } }),
                    React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BUTTON_2, color: selectedEmoji === reaction.key ? ui_Label.LabelColors.PRIMARY : ui_Label.LabelColors.ONBACKGROUND_3 }, reaction.userIds.length)));
            })),
            React__default.default.createElement("div", { className: "sendbird-message__bottomsheet__reactor-list" }, // making a member list who reacted to the message with the `selectedEmoji`
            ((_d = (_c = message.reactions) === null || _c === void 0 ? void 0 : _c.find(function (reaction) { return reaction.key === selectedEmoji; })) === null || _d === void 0 ? void 0 : _d.userIds.map(function (userId) { return members.find(function (member) { return member.userId === userId; }); }).filter(function (member) { return member !== undefined; }))
                .map(function (member) { return (React__default.default.createElement(ui_UserListItem.UserListItem, { key: member.userId, className: "sendbird-message__bottomsheet__reactor-list__item", user: member, avatarSize: "36px", onUserAvatarClick: onPressUserProfileCallBack })); })))));
};

function ReactionItem(_a) {
    var _b;
    var reaction = _a.reaction, memberNicknamesMap = _a.memberNicknamesMap, setEmojiKey = _a.setEmojiKey, toggleReaction = _a.toggleReaction, emojisMap = _a.emojisMap, channel = _a.channel, message = _a.message, isFiltered = _a.isFiltered;
    var openModal = ui_Modal.useGlobalModalContext().openModal;
    var store = useSendbirdStateContext.useSendbirdStateContext();
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    var messageStore = Message_context.useMessageContext();
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var userId = store.config.userId;
    var reactedByMe = index.isReactedBy(userId, reaction);
    var showHoverTooltip = (reaction.userIds.length > 0)
        && ((channel === null || channel === void 0 ? void 0 : channel.isGroupChannel()) && !channel.isSuper);
    var handleOnClick = function () {
        if (isFiltered && !reactedByMe) {
            openModal({
                modalProps: {
                    titleText: 'Add reaction failed',
                    hideFooter: true,
                    isCloseOnClickOutside: true,
                },
                childElement: function (_a) {
                    var closeModal = _a.closeModal;
                    return (React__default.default.createElement(ui_Modal.ModalFooter, { type: ui_Button.ButtonTypes.PRIMARY, submitText: stringSet.BUTTON__OK, hideCancelButton: true, onCancel: closeModal, onSubmit: closeModal }));
                },
            });
            return;
        }
        setEmojiKey('');
        toggleReaction === null || toggleReaction === void 0 ? void 0 : toggleReaction((message !== null && message !== void 0 ? message : messageStore === null || messageStore === void 0 ? void 0 : messageStore.message), reaction.key, reactedByMe);
    };
    var longPress = useLongPress.useLongPress({
        onLongPress: function () {
            setEmojiKey(reaction.key);
        },
        onClick: handleOnClick,
    }, {
        shouldPreventDefault: true,
        shouldStopPropagation: true,
    });
    return (React__default.default.createElement(ui_TooltipWrapper, { className: "sendbird-emoji-reactions__reaction-badge", hoverTooltip: showHoverTooltip ? (React__default.default.createElement(ui_Tooltip, null, index.getEmojiTooltipString(reaction, userId, memberNicknamesMap, stringSet))) : React__default.default.createElement(React__default.default.Fragment, null) },
        React__default.default.createElement("div", _tslib.__assign({}, (isMobile
            ? longPress
            : { onClick: handleOnClick })),
            React__default.default.createElement(ui_ReactionBadge, { count: reaction.userIds.length, selected: reactedByMe },
                React__default.default.createElement(ui_ImageRenderer.default, { circle: true, url: ((_b = emojisMap.get(reaction === null || reaction === void 0 ? void 0 : reaction.key)) === null || _b === void 0 ? void 0 : _b.url) || '', width: "20px", height: "20px", defaultComponent: (React__default.default.createElement(ui_Icon.default, { width: "20px", height: "20px", type: ui_Icon.IconTypes.QUESTION })) })))));
}

var AddReactionBadgeItem = function (_a) {
    var onClick = _a.onClick;
    var onlyClick = useLongPress.useLongPress({
        onLongPress: function () { },
        onClick: onClick,
    }, {
        shouldPreventDefault: true,
        shouldStopPropagation: true,
    });
    return (React__default.default.createElement("div", _tslib.__assign({ className: "sendbird-emoji-reactions__add-reaction-badge", "data-testid": "sendbird-emoji-reactions__add-reaction-badge" }, onlyClick),
        React__default.default.createElement(ui_ReactionBadge, { isAdd: true },
            React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.EMOJI_MORE, fillColor: ui_Icon.IconColors.ON_BACKGROUND_3, width: "20px", height: "20px" }))));
};

var MobileEmojisBottomSheet = function (_a) {
    var userId = _a.userId, message = _a.message, emojiContainer = _a.emojiContainer, hideMenu = _a.hideMenu, toggleReaction = _a.toggleReaction;
    var emojiAllList = React.useMemo(function () {
        return index.getEmojiListAll(emojiContainer);
    }, [emojiContainer]);
    return (React__default.default.createElement(ui_BottomSheet, { onBackdropClick: hideMenu },
        React__default.default.createElement("div", { className: "sendbird-message__bottomsheet sendbird-message__emojis-bottomsheet" }, emojiAllList.map(function (emoji) {
            var _a, _b, _c, _d;
            var isReacted = (_d = ((_c = (_b = (_a = message === null || message === void 0 ? void 0 : message.reactions) === null || _a === void 0 ? void 0 : _a.find(function (reaction) { return reaction.key === emoji.key; })) === null || _b === void 0 ? void 0 : _b.userIds) === null || _c === void 0 ? void 0 : _c.some(function (reactorId) { return reactorId === userId; }))) !== null && _d !== void 0 ? _d : false;
            return (React__default.default.createElement(ui_ReactionButton, { key: emoji.key, width: "44px", height: "44px", selected: isReacted, onClick: function (e) {
                    e === null || e === void 0 ? void 0 : e.stopPropagation();
                    toggleReaction === null || toggleReaction === void 0 ? void 0 : toggleReaction(message, emoji.key, isReacted);
                    hideMenu();
                }, testID: "ui_mobile_emoji_reactions_menu_".concat(emoji.key) },
                React__default.default.createElement(ui_ImageRenderer.default, { url: emoji.url, width: "38px", height: "38px", placeHolder: function (_a) {
                        var style = _a.style;
                        return (React__default.default.createElement("div", { style: style },
                            React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.QUESTION, fillColor: ui_Icon.IconColors.ON_BACKGROUND_3, width: "28px", height: "28px" })));
                    } })));
        }))));
};

var EmojiReactions = function (_a) {
    var _b, _c, _d, _e, _f;
    var _g = _a.className, className = _g === void 0 ? '' : _g, userId = _a.userId, message = _a.message, channel = _a.channel, emojiContainer = _a.emojiContainer, memberNicknamesMap = _a.memberNicknamesMap, _h = _a.spaceFromTrigger, spaceFromTrigger = _h === void 0 ? { x: 0, y: 0 } : _h, _j = _a.isByMe, isByMe = _j === void 0 ? false : _j, toggleReaction = _a.toggleReaction, onPressUserProfile = _a.onPressUserProfile, filterEmojiCategoryIds = _a.filterEmojiCategoryIds;
    var showTheReactedMembers = false;
    try {
        var config = useSendbirdStateContext.useSendbirdStateContext().config;
        showTheReactedMembers = channel ? getIsReactionEnabled.getIsReactionEnabled({
            channel: channel,
            config: config,
        }) : false;
    }
    catch (err) {
        // TODO: Handle error
    }
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    var addReactionRef = React.useRef(null);
    var _k = React.useState(false), showEmojiList = _k[0], setShowEmojiList = _k[1];
    var _l = React.useState(''), selectedEmojiKey = _l[0], setSelectedEmojiKey = _l[1];
    var emojisMap = index.getEmojiMapAll(emojiContainer);
    var filteredEmojis = React.useMemo(function () {
        return index.getEmojiListByCategoryIds(emojiContainer, filterEmojiCategoryIds === null || filterEmojiCategoryIds === void 0 ? void 0 : filterEmojiCategoryIds(message));
    }, [emojiContainer, filterEmojiCategoryIds]);
    var showAddReactionBadge = ((_c = (_b = message.reactions) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0) < emojisMap.size;
    return (React__default.default.createElement("div", { className: index.getClassName([
            className, 'sendbird-emoji-reactions',
            isByMe ? 'outgoing' : 'incoming',
        ]) },
        (((_e = (_d = message.reactions) === null || _d === void 0 ? void 0 : _d.length) !== null && _e !== void 0 ? _e : 0) > 0) && ((_f = message.reactions) === null || _f === void 0 ? void 0 : _f.map(function (reaction) {
            return (React__default.default.createElement(ReactionItem, { key: reaction === null || reaction === void 0 ? void 0 : reaction.key, reaction: reaction, memberNicknamesMap: memberNicknamesMap, setEmojiKey: setSelectedEmojiKey, toggleReaction: toggleReaction, emojisMap: emojisMap, channel: channel, message: message, isFiltered: index.getEmojiListByCategoryIds(emojiContainer, filterEmojiCategoryIds === null || filterEmojiCategoryIds === void 0 ? void 0 : filterEmojiCategoryIds(message))
                    .every(function (elem) { return elem.key !== (reaction === null || reaction === void 0 ? void 0 : reaction.key); }) }));
        })),
        (!isMobile && showAddReactionBadge) && (React__default.default.createElement(ui_ContextMenu.ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.default.createElement(ui_ReactionBadge, { className: "sendbird-emoji-reactions__add-reaction-badge", testID: "sendbird-emoji-reactions__add-reaction-badge", ref: addReactionRef, isAdd: true, onClick: function (e) {
                    var _a;
                    toggleDropdown();
                    (_a = e === null || e === void 0 ? void 0 : e.stopPropagation) === null || _a === void 0 ? void 0 : _a.call(e);
                } },
                React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.EMOJI_MORE, fillColor: ui_Icon.IconColors.ON_BACKGROUND_3, width: "20px", height: "20px" }))); }, menuItems: function (closeDropdown) {
                if (filteredEmojis.length === 0)
                    return null;
                return (React__default.default.createElement(ui_ContextMenu.EmojiListItems, { parentRef: addReactionRef, parentContainRef: addReactionRef, closeDropdown: closeDropdown, spaceFromTrigger: spaceFromTrigger }, index.getEmojiListByCategoryIds(emojiContainer, filterEmojiCategoryIds === null || filterEmojiCategoryIds === void 0 ? void 0 : filterEmojiCategoryIds(message)).map(function (emoji) {
                    var _a, _b, _c;
                    var isReacted = ((_c = (_b = (_a = message === null || message === void 0 ? void 0 : message.reactions) === null || _a === void 0 ? void 0 : _a.find(function (reaction) { return reaction.key === emoji.key; })) === null || _b === void 0 ? void 0 : _b.userIds) === null || _c === void 0 ? void 0 : _c.some(function (reactorId) { return reactorId === userId; })) || false;
                    return (React__default.default.createElement(ui_ReactionButton, { key: emoji.key, width: "36px", height: "36px", selected: isReacted, onClick: function (e) {
                            closeDropdown();
                            toggleReaction === null || toggleReaction === void 0 ? void 0 : toggleReaction(message, emoji.key, isReacted);
                            e === null || e === void 0 ? void 0 : e.stopPropagation();
                        }, testID: "ui_emoji_reactions_menu_".concat(emoji.key) },
                        React__default.default.createElement(ui_ImageRenderer.default, { url: (emoji === null || emoji === void 0 ? void 0 : emoji.url) || '', width: "28px", height: "28px", placeHolder: function (_a) {
                                var style = _a.style;
                                return (React__default.default.createElement("div", { style: style },
                                    React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.QUESTION, fillColor: ui_Icon.IconColors.ON_BACKGROUND_3, width: "28px", height: "28px" })));
                            } })));
                })));
            } })),
        (isMobile && showAddReactionBadge) && (React__default.default.createElement(AddReactionBadgeItem, { onClick: function () {
                setShowEmojiList(true);
            } })),
        (isMobile && showEmojiList) && (React__default.default.createElement(MobileEmojisBottomSheet, { userId: userId, message: message, emojiContainer: emojiContainer, hideMenu: function () {
                setShowEmojiList(false);
            }, toggleReaction: toggleReaction })),
        (isMobile && selectedEmojiKey && channel !== null && showTheReactedMembers) && (React__default.default.createElement(ReactedMembersBottomSheet, { message: message, channel: channel, emojiKey: selectedEmojiKey, hideMenu: function () {
                setSelectedEmojiKey('');
            }, emojiContainer: emojiContainer, onPressUserProfileHandler: onPressUserProfile }))));
};

module.exports = EmojiReactions;
//# sourceMappingURL=EmojiReactions.js.map
