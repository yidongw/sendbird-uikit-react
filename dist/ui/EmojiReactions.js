import React__default, { useState, useContext, useMemo, useRef } from 'react';
import ReactionBadge from './ReactionBadge.js';
import ReactionButton from './ReactionButton.js';
import ImageRenderer from './ImageRenderer.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import { C as ContextMenu, f as EmojiListItems } from '../chunks/bundle-BKzcG-aC.js';
import { X as getEmojiUrl, Y as isReactedBy, Z as getEmojiTooltipString, W as getEmojiListAll, _ as getEmojiMapAll, v as getEmojiListByCategoryIds, y as getClassName } from '../chunks/bundle-Bd-i99nk.js';
import BottomSheet from './BottomSheet.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-Qkp2VIaZ.js';
import { UserListItem } from './UserListItem.js';
import { c as classnames } from '../chunks/bundle-0WaCg6X7.js';
import { _ as __assign } from '../chunks/bundle-HcNswZ5p.js';
import Tooltip from './Tooltip.js';
import TooltipWrapper from './TooltipWrapper.js';
import { u as useMediaQueryContext } from '../chunks/bundle-DnSobLtx.js';
import { u as useLongPress } from '../chunks/bundle-B6yWIKOT.js';
import { L as LocalizationContext } from '../chunks/bundle-DhMUg-L7.js';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import { useMessageContext } from '../Message/context.js';
import { b as useGlobalModalContext, c as ModalFooter } from '../chunks/bundle-ja8H3E0K.js';
import { ButtonTypes } from './Button.js';
import { g as getIsReactionEnabled } from '../chunks/bundle-CuavrWk1.js';
import '../chunks/bundle-dybWaw0v.js';
import 'react-dom';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import './SortByRow.js';
import '../chunks/bundle-C5iY_IvV.js';
import '../withSendbird.js';
import './IconButton.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-DjLJFwD7.js';
import '../chunks/bundle-DB7YSrIT.js';
import '../chunks/bundle-DQk0aENq.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../chunks/bundle-zy1mnw8U.js';
import '../chunks/bundle-B91Bhfde.js';
import '../chunks/bundle-2pbuHA3C.js';
import '../chunks/bundle-DkDQ1PWY.js';
import './MutedAvatarOverlay.js';
import './Checkbox.js';
import './UserProfile.js';
import '../sendbirdSelectors.js';
import '../chunks/bundle-BwmZGijR.js';

var ReactedMembersBottomSheet = function (_a) {
    var _b, _c, _d;
    var message = _a.message, channel = _a.channel, _e = _a.emojiKey, emojiKey = _e === void 0 ? '' : _e, hideMenu = _a.hideMenu, emojiContainer = _a.emojiContainer, onPressUserProfileHandler = _a.onPressUserProfileHandler;
    var _f = channel.members, members = _f === void 0 ? [] : _f;
    var _g = useState(emojiKey), selectedEmoji = _g[0], setSelectedEmoji = _g[1];
    function onPressUserProfileCallBack() {
        if (onPressUserProfileHandler && message) {
            var sender = message === null || message === void 0 ? void 0 : message.sender;
            onPressUserProfileHandler(sender);
        }
    }
    return (React__default.createElement(BottomSheet, { onBackdropClick: hideMenu },
        React__default.createElement("div", { className: "sendbird-message__bottomsheet" },
            React__default.createElement("div", { className: "sendbird-message__bottomsheet__reacted-members" }, (_b = message.reactions) === null || _b === void 0 ? void 0 : _b.map(function (reaction) {
                var emojiUrl = getEmojiUrl(emojiContainer, reaction.key);
                return (React__default.createElement("div", { key: reaction.key, className: classnames('sendbird-message__bottomsheet__reacted-members__item', selectedEmoji === reaction.key && 'sendbird-message__bottomsheet__reacted-members__item__selected'), onClick: function () {
                        setSelectedEmoji(reaction.key);
                    } },
                    React__default.createElement(ImageRenderer, { url: emojiUrl, width: "28px", height: "28px", placeHolder: function (_a) {
                            var style = _a.style;
                            return (React__default.createElement("div", { style: style },
                                React__default.createElement(Icon, { type: IconTypes.QUESTION, fillColor: IconColors.ON_BACKGROUND_3, width: "28px", height: "28px" })));
                        } }),
                    React__default.createElement(Label, { type: LabelTypography.BUTTON_2, color: selectedEmoji === reaction.key ? LabelColors.PRIMARY : LabelColors.ONBACKGROUND_3 }, reaction.userIds.length)));
            })),
            React__default.createElement("div", { className: "sendbird-message__bottomsheet__reactor-list" }, // making a member list who reacted to the message with the `selectedEmoji`
            ((_d = (_c = message.reactions) === null || _c === void 0 ? void 0 : _c.find(function (reaction) { return reaction.key === selectedEmoji; })) === null || _d === void 0 ? void 0 : _d.userIds.map(function (userId) { return members.find(function (member) { return member.userId === userId; }); }).filter(function (member) { return member !== undefined; }))
                .map(function (member) { return (React__default.createElement(UserListItem, { key: member.userId, className: "sendbird-message__bottomsheet__reactor-list__item", user: member, avatarSize: "36px", onUserAvatarClick: onPressUserProfileCallBack })); })))));
};

function ReactionItem(_a) {
    var _b;
    var reaction = _a.reaction, memberNicknamesMap = _a.memberNicknamesMap, setEmojiKey = _a.setEmojiKey, toggleReaction = _a.toggleReaction, emojisMap = _a.emojisMap, channel = _a.channel, message = _a.message, isFiltered = _a.isFiltered;
    var openModal = useGlobalModalContext().openModal;
    var store = useSendbirdStateContext();
    var isMobile = useMediaQueryContext().isMobile;
    var messageStore = useMessageContext();
    var stringSet = useContext(LocalizationContext).stringSet;
    var userId = store.config.userId;
    var reactedByMe = isReactedBy(userId, reaction);
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
                    return (React__default.createElement(ModalFooter, { type: ButtonTypes.PRIMARY, submitText: stringSet.BUTTON__OK, hideCancelButton: true, onCancel: closeModal, onSubmit: closeModal }));
                },
            });
            return;
        }
        setEmojiKey('');
        toggleReaction === null || toggleReaction === void 0 ? void 0 : toggleReaction((message !== null && message !== void 0 ? message : messageStore === null || messageStore === void 0 ? void 0 : messageStore.message), reaction.key, reactedByMe);
    };
    var longPress = useLongPress({
        onLongPress: function () {
            setEmojiKey(reaction.key);
        },
        onClick: handleOnClick,
    }, {
        shouldPreventDefault: true,
        shouldStopPropagation: true,
    });
    return (React__default.createElement(TooltipWrapper, { className: "sendbird-emoji-reactions__reaction-badge", hoverTooltip: showHoverTooltip ? (React__default.createElement(Tooltip, null, getEmojiTooltipString(reaction, userId, memberNicknamesMap, stringSet))) : React__default.createElement(React__default.Fragment, null) },
        React__default.createElement("div", __assign({}, (isMobile
            ? longPress
            : { onClick: handleOnClick })),
            React__default.createElement(ReactionBadge, { count: reaction.userIds.length, selected: reactedByMe },
                React__default.createElement(ImageRenderer, { circle: true, url: ((_b = emojisMap.get(reaction === null || reaction === void 0 ? void 0 : reaction.key)) === null || _b === void 0 ? void 0 : _b.url) || '', width: "20px", height: "20px", defaultComponent: (React__default.createElement(Icon, { width: "20px", height: "20px", type: IconTypes.QUESTION })) })))));
}

var AddReactionBadgeItem = function (_a) {
    var onClick = _a.onClick;
    var onlyClick = useLongPress({
        onLongPress: function () { },
        onClick: onClick,
    }, {
        shouldPreventDefault: true,
        shouldStopPropagation: true,
    });
    return (React__default.createElement("div", __assign({ className: "sendbird-emoji-reactions__add-reaction-badge", "data-testid": "sendbird-emoji-reactions__add-reaction-badge" }, onlyClick),
        React__default.createElement(ReactionBadge, { isAdd: true },
            React__default.createElement(Icon, { type: IconTypes.EMOJI_MORE, fillColor: IconColors.ON_BACKGROUND_3, width: "20px", height: "20px" }))));
};

var MobileEmojisBottomSheet = function (_a) {
    var userId = _a.userId, message = _a.message, emojiContainer = _a.emojiContainer, hideMenu = _a.hideMenu, toggleReaction = _a.toggleReaction;
    var emojiAllList = useMemo(function () {
        return getEmojiListAll(emojiContainer);
    }, [emojiContainer]);
    return (React__default.createElement(BottomSheet, { onBackdropClick: hideMenu },
        React__default.createElement("div", { className: "sendbird-message__bottomsheet sendbird-message__emojis-bottomsheet" }, emojiAllList.map(function (emoji) {
            var _a, _b, _c, _d;
            var isReacted = (_d = ((_c = (_b = (_a = message === null || message === void 0 ? void 0 : message.reactions) === null || _a === void 0 ? void 0 : _a.find(function (reaction) { return reaction.key === emoji.key; })) === null || _b === void 0 ? void 0 : _b.userIds) === null || _c === void 0 ? void 0 : _c.some(function (reactorId) { return reactorId === userId; }))) !== null && _d !== void 0 ? _d : false;
            return (React__default.createElement(ReactionButton, { key: emoji.key, width: "44px", height: "44px", selected: isReacted, onClick: function (e) {
                    e === null || e === void 0 ? void 0 : e.stopPropagation();
                    toggleReaction === null || toggleReaction === void 0 ? void 0 : toggleReaction(message, emoji.key, isReacted);
                    hideMenu();
                }, testID: "ui_mobile_emoji_reactions_menu_".concat(emoji.key) },
                React__default.createElement(ImageRenderer, { url: emoji.url, width: "38px", height: "38px", placeHolder: function (_a) {
                        var style = _a.style;
                        return (React__default.createElement("div", { style: style },
                            React__default.createElement(Icon, { type: IconTypes.QUESTION, fillColor: IconColors.ON_BACKGROUND_3, width: "28px", height: "28px" })));
                    } })));
        }))));
};

var EmojiReactions = function (_a) {
    var _b, _c, _d, _e, _f;
    var _g = _a.className, className = _g === void 0 ? '' : _g, userId = _a.userId, message = _a.message, channel = _a.channel, emojiContainer = _a.emojiContainer, memberNicknamesMap = _a.memberNicknamesMap, _h = _a.spaceFromTrigger, spaceFromTrigger = _h === void 0 ? { x: 0, y: 0 } : _h, _j = _a.isByMe, isByMe = _j === void 0 ? false : _j, toggleReaction = _a.toggleReaction, onPressUserProfile = _a.onPressUserProfile, filterEmojiCategoryIds = _a.filterEmojiCategoryIds;
    var showTheReactedMembers = false;
    try {
        var config = useSendbirdStateContext().config;
        showTheReactedMembers = channel ? getIsReactionEnabled({
            channel: channel,
            config: config,
        }) : false;
    }
    catch (err) {
        // TODO: Handle error
    }
    var isMobile = useMediaQueryContext().isMobile;
    var addReactionRef = useRef(null);
    var _k = useState(false), showEmojiList = _k[0], setShowEmojiList = _k[1];
    var _l = useState(''), selectedEmojiKey = _l[0], setSelectedEmojiKey = _l[1];
    var emojisMap = getEmojiMapAll(emojiContainer);
    var filteredEmojis = useMemo(function () {
        return getEmojiListByCategoryIds(emojiContainer, filterEmojiCategoryIds === null || filterEmojiCategoryIds === void 0 ? void 0 : filterEmojiCategoryIds(message));
    }, [emojiContainer, filterEmojiCategoryIds]);
    var showAddReactionBadge = ((_c = (_b = message.reactions) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0) < emojisMap.size;
    return (React__default.createElement("div", { className: getClassName([
            className, 'sendbird-emoji-reactions',
            isByMe ? 'outgoing' : 'incoming',
        ]) },
        (((_e = (_d = message.reactions) === null || _d === void 0 ? void 0 : _d.length) !== null && _e !== void 0 ? _e : 0) > 0) && ((_f = message.reactions) === null || _f === void 0 ? void 0 : _f.map(function (reaction) {
            return (React__default.createElement(ReactionItem, { key: reaction === null || reaction === void 0 ? void 0 : reaction.key, reaction: reaction, memberNicknamesMap: memberNicknamesMap, setEmojiKey: setSelectedEmojiKey, toggleReaction: toggleReaction, emojisMap: emojisMap, channel: channel, message: message, isFiltered: getEmojiListByCategoryIds(emojiContainer, filterEmojiCategoryIds === null || filterEmojiCategoryIds === void 0 ? void 0 : filterEmojiCategoryIds(message))
                    .every(function (elem) { return elem.key !== (reaction === null || reaction === void 0 ? void 0 : reaction.key); }) }));
        })),
        (!isMobile && showAddReactionBadge) && (React__default.createElement(ContextMenu, { menuTrigger: function (toggleDropdown) { return (React__default.createElement(ReactionBadge, { className: "sendbird-emoji-reactions__add-reaction-badge", testID: "sendbird-emoji-reactions__add-reaction-badge", ref: addReactionRef, isAdd: true, onClick: function (e) {
                    var _a;
                    toggleDropdown();
                    (_a = e === null || e === void 0 ? void 0 : e.stopPropagation) === null || _a === void 0 ? void 0 : _a.call(e);
                } },
                React__default.createElement(Icon, { type: IconTypes.EMOJI_MORE, fillColor: IconColors.ON_BACKGROUND_3, width: "20px", height: "20px" }))); }, menuItems: function (closeDropdown) {
                if (filteredEmojis.length === 0)
                    return null;
                return (React__default.createElement(EmojiListItems, { parentRef: addReactionRef, parentContainRef: addReactionRef, closeDropdown: closeDropdown, spaceFromTrigger: spaceFromTrigger }, getEmojiListByCategoryIds(emojiContainer, filterEmojiCategoryIds === null || filterEmojiCategoryIds === void 0 ? void 0 : filterEmojiCategoryIds(message)).map(function (emoji) {
                    var _a, _b, _c;
                    var isReacted = ((_c = (_b = (_a = message === null || message === void 0 ? void 0 : message.reactions) === null || _a === void 0 ? void 0 : _a.find(function (reaction) { return reaction.key === emoji.key; })) === null || _b === void 0 ? void 0 : _b.userIds) === null || _c === void 0 ? void 0 : _c.some(function (reactorId) { return reactorId === userId; })) || false;
                    return (React__default.createElement(ReactionButton, { key: emoji.key, width: "36px", height: "36px", selected: isReacted, onClick: function (e) {
                            closeDropdown();
                            toggleReaction === null || toggleReaction === void 0 ? void 0 : toggleReaction(message, emoji.key, isReacted);
                            e === null || e === void 0 ? void 0 : e.stopPropagation();
                        }, testID: "ui_emoji_reactions_menu_".concat(emoji.key) },
                        React__default.createElement(ImageRenderer, { url: (emoji === null || emoji === void 0 ? void 0 : emoji.url) || '', width: "28px", height: "28px", placeHolder: function (_a) {
                                var style = _a.style;
                                return (React__default.createElement("div", { style: style },
                                    React__default.createElement(Icon, { type: IconTypes.QUESTION, fillColor: IconColors.ON_BACKGROUND_3, width: "28px", height: "28px" })));
                            } })));
                })));
            } })),
        (isMobile && showAddReactionBadge) && (React__default.createElement(AddReactionBadgeItem, { onClick: function () {
                setShowEmojiList(true);
            } })),
        (isMobile && showEmojiList) && (React__default.createElement(MobileEmojisBottomSheet, { userId: userId, message: message, emojiContainer: emojiContainer, hideMenu: function () {
                setShowEmojiList(false);
            }, toggleReaction: toggleReaction })),
        (isMobile && selectedEmojiKey && channel !== null && showTheReactedMembers) && (React__default.createElement(ReactedMembersBottomSheet, { message: message, channel: channel, emojiKey: selectedEmojiKey, hideMenu: function () {
                setSelectedEmojiKey('');
            }, emojiContainer: emojiContainer, onPressUserProfileHandler: onPressUserProfile }))));
};

export { EmojiReactions as default };
//# sourceMappingURL=EmojiReactions.js.map
