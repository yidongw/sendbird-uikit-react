'use strict';

var React = require('react');
var SendbirdProvider = require('./SendbirdProvider.js');
var MediaQueryContext = require('./chunks/bundle-DrIKAEHN.js');
var _tslib = require('./chunks/bundle-Bdr7xlea.js');
var GroupChannel = require('./GroupChannel.js');
var GroupChannelList = require('./GroupChannelList.js');
var Channel = require('./Channel.js');
var ChannelList = require('./ChannelList.js');
var ChannelSettings = require('./ChannelSettings.js');
var MessageSearch = require('./MessageSearch.js');
var Thread = require('./Thread.js');
var utils = require('./chunks/bundle-Ck6ikNW6.js');
var ui_ContextMenu = require('./chunks/bundle-BKyZTqvq.js');
var groupChannel = require('@sendbird/chat/groupChannel');
var useSendbirdStateContext = require('./useSendbirdStateContext.js');
var uuid = require('./chunks/bundle-C1poxl5k.js');
var VoicePlayer_context = require('./chunks/bundle-CJM9Pdwg.js');
var resolvedReplyType = require('./chunks/bundle-DvvdekCh.js');
require('@sendbird/uikit-tools');
require('./withSendbird.js');
require('./chunks/bundle-DZhkNDpN.js');
require('./chunks/bundle-BLoixwYr.js');
require('./utils/message/getOutgoingMessageState.js');
require('./chunks/bundle-Dr9yFtKa.js');
require('./chunks/bundle-C2CwvM-u.js');
require('./chunks/bundle-BD0wJiNh.js');
require('react-dom');
require('./chunks/bundle-Cy1ruNzs.js');
require('./chunks/bundle-Dio8pG-T.js');
require('./ui/IconButton.js');
require('./ui/Button.js');
require('./chunks/bundle-CAR4EIKs.js');
require('./ui/Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('./chunks/bundle-DQPZ4z8-.js');
require('./chunks/bundle-bPnhUeU0.js');
require('./chunks/bundle-CzBskCon.js');
require('./GroupChannel/context.js');
require('@sendbird/chat/message');
require('./chunks/bundle-DgjptBQW.js');
require('./chunks/bundle-CpJ9tVDn.js');
require('./chunks/bundle-w0Wt2aBx.js');
require('./chunks/bundle-CtHeiC70.js');
require('./chunks/bundle-C6Q6BfQY.js');
require('./chunks/bundle-CVdJh4P7.js');
require('./ui/SortByRow.js');
require('./GroupChannel/components/GroupChannelUI.js');
require('./chunks/bundle-D0lm7gpy.js');
require('./GroupChannel/components/TypingIndicator.js');
require('./chunks/bundle-lxEd4uN4.js');
require('./ui/ConnectionStatus.js');
require('./ui/PlaceHolder.js');
require('./ui/Loader.js');
require('./GroupChannel/components/GroupChannelHeader.js');
require('./chunks/bundle-Dbk15PIx.js');
require('./ui/ChannelAvatar.js');
require('./chunks/bundle-C8wv9DWs.js');
require('./ui/ImageRenderer.js');
require('./chunks/bundle-B4PTJ_bJ.js');
require('./chunks/bundle-B2Yph-6C.js');
require('./chunks/bundle-CoUbsBcp.js');
require('./ui/Header.js');
require('./ui/TextButton.js');
require('./chunks/bundle-CLzI6bbe.js');
require('./GroupChannel/components/MessageList.js');
require('./GroupChannel/components/Message.js');
require('./chunks/bundle-DcAbHyPY.js');
require('./chunks/bundle-DspSuA8e.js');
require('./Message/hooks/useDirtyGetMentions.js');
require('./ui/DateSeparator.js');
require('./ui/MessageInput.js');
require('./chunks/bundle-CfV7jROn.js');
require('./chunks/bundle-CCtdwkHe.js');
require('dompurify');
require('./chunks/bundle-By5v4zYf.js');
require('./chunks/bundle-DobO_BAb.js');
require('./chunks/bundle-BaSZqehS.js');
require('./chunks/bundle-BIkitklZ.js');
require('./ui/MessageContent.js');
require('./chunks/bundle-BQHwJ1ZS.js');
require('./chunks/bundle-f7s_1xF4.js');
require('./chunks/bundle-Cc6_UMK4.js');
require('./chunks/bundle-BUXIG4fk.js');
require('./ui/MessageItemReactionMenu.js');
require('./ui/ReactionButton.js');
require('./chunks/bundle-D_k3_Y_y.js');
require('./ui/EmojiReactions.js');
require('./ui/ReactionBadge.js');
require('./ui/BottomSheet.js');
require('./ui/UserListItem.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./ui/Tooltip.js');
require('./ui/TooltipWrapper.js');
require('./Message/context.js');
require('./ui/AdminMessage.js');
require('./ui/QuoteMessage.js');
require('./chunks/bundle-DEjC6RIv.js');
require('./ui/MobileMenu.js');
require('./ui/ThreadReplies.js');
require('./chunks/bundle-8wGi0pKu.js');
require('./ui/OGMessageItemBody.js');
require('./chunks/bundle-92xEkubH.js');
require('./ui/MentionLabel.js');
require('./ui/LinkLabel.js');
require('./ui/TextMessageItemBody.js');
require('./ui/FileMessageItemBody.js');
require('./chunks/bundle-B3JoFOJ4.js');
require('./ui/FileViewer.js');
require('./chunks/bundle-DpdA7O8z.js');
require('./ui/VoiceMessageItemBody.js');
require('./ui/ProgressBar.js');
require('./VoicePlayer/useVoicePlayer.js');
require('./ui/PlaybackTime.js');
require('./ui/ThumbnailMessageItemBody.js');
require('./ui/UnknownMessageItemBody.js');
require('./ui/TemplateMessageItemBody.js');
require('./chunks/bundle-Dd_liLM9.js');
require('./ui/FallbackTemplateMessageItemBody.tsx.js');
require('./ui/LoadingTemplateMessageItemBody.tsx.js');
require('./ui/MessageFeedbackFailedModal.js');
require('./ui/FeedbackIconButton.js');
require('./ui/MobileFeedbackMenu.js');
require('./ui/MessageFeedbackModal.js');
require('./ui/Input.js');
require('./chunks/bundle-BwahJ_Tg.js');
require('./GroupChannel/components/SuggestedReplies.js');
require('./chunks/bundle-kFYCld9C.js');
require('./GroupChannel/components/FileViewer.js');
require('./chunks/bundle-D-EFC7w9.js');
require('./GroupChannel/components/RemoveMessageModal.js');
require('./chunks/bundle-BJ_HBGTK.js');
require('./chunks/bundle-CzLnk6wC.js');
require('./GroupChannel/components/UnreadCount.js');
require('./GroupChannel/components/FrozenNotification.js');
require('./ui/TypingIndicatorBubble.js');
require('./Channel/utils/getMessagePartsInfo.js');
require('./Channel/utils/compareMessagesForGrouping.js');
require('./chunks/bundle-BNuA_uqY.js');
require('./GroupChannel/components/MessageInputWrapper.js');
require('./chunks/bundle-CdcQAzUs.js');
require('./GroupChannel/components/SuggestedMentionList.js');
require('./ui/QuoteMessageInput.js');
require('./VoiceRecorder/useVoiceRecorder.js');
require('./chunks/bundle-BL2PtzAF.js');
require('./chunks/bundle-BdRSDnh9.js');
require('./GroupChannelList/context.js');
require('./GroupChannelList/components/GroupChannelListUI.js');
require('./chunks/bundle-CkC2GGZG.js');
require('./GroupChannelList/components/GroupChannelListHeader.js');
require('./EditUserProfile.js');
require('./EditUserProfile/context.js');
require('./EditUserProfile/components/EditUserProfileUI.js');
require('./chunks/bundle-CvCKKQx5.js');
require('./chunks/bundle-CpvSgBLD.js');
require('./GroupChannelList/components/GroupChannelPreviewAction.js');
require('./GroupChannelList/components/GroupChannelListItem.js');
require('./chunks/bundle-DPzUMsqg.js');
require('./ui/Badge.js');
require('./ui/MentionUserLabel.js');
require('./GroupChannelList/components/AddGroupChannel.js');
require('./chunks/bundle-BZQNMt45.js');
require('./CreateChannel.js');
require('./CreateChannel/components/CreateChannelUI.js');
require('./chunks/bundle-C2pGgDQd.js');
require('./CreateChannel/components/InviteUsers.js');
require('./CreateChannel/components/SelectChannelType.js');
require('./Channel/context.js');
require('./chunks/bundle-wYxshM30.js');
require('./chunks/bundle-Dh0NAI0D.js');
require('./chunks/bundle-Clu2jOAp.js');
require('./chunks/bundle-DrScP7Am.js');
require('./chunks/bundle-Bs36T7L5.js');
require('./Channel/components/ChannelUI.js');
require('./Channel/components/ChannelHeader.js');
require('./Channel/components/MessageList.js');
require('./Channel/components/Message.js');
require('./Channel/components/FileViewer.js');
require('./Channel/components/RemoveMessageModal.js');
require('./chunks/bundle-CM4lC-DE.js');
require('./Channel/components/MessageInput.js');
require('./chunks/bundle-CLCDfoFi.js');
require('./ChannelList/components/ChannelListUI.js');
require('./ChannelList/components/ChannelPreview.js');
require('./ChannelList/components/AddChannel.js');
require('./ChannelSettings/components/ChannelSettingsUI.js');
require('./ChannelSettings/context.js');
require('./ChannelSettings/components/ChannelSettingsHeader.js');
require('./ChannelSettings/components/ChannelProfile.js');
require('./ChannelSettings/components/EditDetailsModal.js');
require('./ChannelSettings/components/LeaveChannel.js');
require('./ChannelSettings/components/ChannelSettingsMenuItem.js');
require('./ChannelSettings/components/ChannelSettingMenuList.js');
require('./ChannelSettings/hooks/useMenuList.js');
require('./chunks/bundle-8mIcMPP_.js');
require('./chunks/bundle-DR7YlSPs.js');
require('./chunks/bundle-DYMi37Hl.js');
require('./ui/Toggle.js');
require('./MessageSearch/components/MessageSearchUI.js');
require('./MessageSearch/context.js');
require('./ui/MessageSearchItem.js');
require('./ui/MessageSearchFileItem.js');
require('./Thread/context.js');
require('./Thread/context/types.js');
require('./Thread/components/ThreadUI.js');
require('./Thread/components/ParentMessageInfo.js');
require('./chunks/bundle-CJnPpHlO.js');
require('./Thread/components/ParentMessageInfoItem.js');
require('./chunks/bundle-DPjtF20V.js');
require('./chunks/bundle-BA-5SFdp.js');
require('./Thread/components/ThreadHeader.js');
require('./Thread/components/ThreadList.js');
require('./Thread/components/ThreadListItem.js');
require('date-fns');
require('./Thread/components/ThreadMessageInput.js');
require('./Channel/hooks/useHandleUploadFiles.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var DesktopLayout = function (props) {
    var isReactionEnabled = props.isReactionEnabled, replyType = props.replyType, isMessageGroupingEnabled = props.isMessageGroupingEnabled, isMultipleFilesMessageEnabled = props.isMultipleFilesMessageEnabled, allowProfileEdit = props.allowProfileEdit, showSearchIcon = props.showSearchIcon, onProfileEditSuccess = props.onProfileEditSuccess, disableAutoSelect = props.disableAutoSelect, currentChannel = props.currentChannel, setCurrentChannel = props.setCurrentChannel, showSettings = props.showSettings, setShowSettings = props.setShowSettings, showSearch = props.showSearch, setShowSearch = props.setShowSearch, highlightedMessage = props.highlightedMessage, setHighlightedMessage = props.setHighlightedMessage, startingPoint = props.startingPoint, setStartingPoint = props.setStartingPoint, showThread = props.showThread, setShowThread = props.setShowThread, threadTargetMessage = props.threadTargetMessage, setThreadTargetMessage = props.setThreadTargetMessage, enableLegacyChannelModules = props.enableLegacyChannelModules;
    var updateFocusedChannel = function (channel) {
        setStartingPoint === null || setStartingPoint === void 0 ? void 0 : setStartingPoint(null);
        setHighlightedMessage === null || setHighlightedMessage === void 0 ? void 0 : setHighlightedMessage(null);
        if (channel) {
            setCurrentChannel(channel);
        }
        else {
            setCurrentChannel(undefined);
        }
    };
    var onClickThreadReply = function (_a) {
        var message = _a.message;
        // parent message
        setShowSettings(false);
        setShowSearch(false);
        if (replyType === 'THREAD') {
            setThreadTargetMessage(message);
            setShowThread(true);
        }
    };
    var channelListProps = {
        allowProfileEdit: allowProfileEdit,
        activeChannelUrl: currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url,
        onProfileEditSuccess: onProfileEditSuccess,
        disableAutoSelect: disableAutoSelect,
        onChannelSelect: updateFocusedChannel,
        // for GroupChannelList
        selectedChannelUrl: currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url,
        onChannelCreated: updateFocusedChannel,
        onUserProfileUpdated: onProfileEditSuccess,
    };
    var channelProps = {
        channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '',
        onChatHeaderActionClick: function () {
            setShowSearch(false);
            setShowThread(false);
            setShowSettings(!showSettings);
        },
        onSearchClick: function () {
            setShowSettings(false);
            setShowThread(false);
            setShowSearch(!showSearch);
        },
        onReplyInThread: onClickThreadReply,
        onQuoteMessageClick: function (_a) {
            var message = _a.message;
            // thread message
            setShowSettings(false);
            setShowSearch(false);
            if (replyType === 'THREAD') {
                setThreadTargetMessage(message);
                setShowThread(true);
            }
        },
        animatedMessage: highlightedMessage,
        onMessageAnimated: function () { return setHighlightedMessage === null || setHighlightedMessage === void 0 ? void 0 : setHighlightedMessage(null); },
        showSearchIcon: showSearchIcon,
        startingPoint: startingPoint !== null && startingPoint !== void 0 ? startingPoint : undefined,
        isReactionEnabled: isReactionEnabled,
        replyType: replyType,
        isMessageGroupingEnabled: isMessageGroupingEnabled,
        isMultipleFilesMessageEnabled: isMultipleFilesMessageEnabled,
        // for GroupChannel
        animatedMessageId: highlightedMessage,
        onReplyInThreadClick: onClickThreadReply,
    };
    return (React__default.default.createElement("div", { className: "sendbird-app__wrap", id: ui_ContextMenu.APP_LAYOUT_ROOT },
        React__default.default.createElement("div", { className: "sendbird-app__channellist-wrap" }, enableLegacyChannelModules ? React__default.default.createElement(ChannelList, _tslib.__assign({}, channelListProps)) : React__default.default.createElement(GroupChannelList.GroupChannelList, _tslib.__assign({}, channelListProps))),
        React__default.default.createElement("div", { className: utils.classnames('sendbird-app__conversation-wrap', showSettings && 'sendbird-app__conversation--settings-open', showSearch && 'sendbird-app__conversation--search-open') }, enableLegacyChannelModules ? React__default.default.createElement(Channel, _tslib.__assign({}, channelProps)) : React__default.default.createElement(GroupChannel.GroupChannel, _tslib.__assign({}, channelProps))),
        showSettings && (React__default.default.createElement("div", { className: "sendbird-app__settingspanel-wrap" },
            React__default.default.createElement(ChannelSettings, { className: "sendbird-channel-settings", channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', onCloseClick: function () {
                    setShowSettings(false);
                } }))),
        showSearch && (React__default.default.createElement("div", { className: "sendbird-app__searchpanel-wrap" },
            React__default.default.createElement(MessageSearch, { channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', onResultClick: function (message) {
                    if (message.messageId === highlightedMessage) {
                        setHighlightedMessage === null || setHighlightedMessage === void 0 ? void 0 : setHighlightedMessage(null);
                        setTimeout(function () {
                            setHighlightedMessage === null || setHighlightedMessage === void 0 ? void 0 : setHighlightedMessage(message.messageId);
                        });
                    }
                    else {
                        setStartingPoint === null || setStartingPoint === void 0 ? void 0 : setStartingPoint(message.createdAt);
                        setHighlightedMessage === null || setHighlightedMessage === void 0 ? void 0 : setHighlightedMessage(message.messageId);
                    }
                }, onCloseClick: function () {
                    setShowSearch(false);
                } }))),
        showThread && (React__default.default.createElement(Thread, { className: "sendbird-app__thread", channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', message: threadTargetMessage, onHeaderActionClick: function () {
                setShowThread(false);
            }, onMoveToParentMessage: function (_a) {
                var message = _a.message, channel = _a.channel;
                if ((channel === null || channel === void 0 ? void 0 : channel.url) !== (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url)) {
                    setCurrentChannel(channel);
                }
                setTimeout(function () {
                    if ((message === null || message === void 0 ? void 0 : message.messageId) !== highlightedMessage) {
                        setStartingPoint === null || setStartingPoint === void 0 ? void 0 : setStartingPoint(message === null || message === void 0 ? void 0 : message.createdAt);
                    }
                }, 200);
                setTimeout(function () {
                    setStartingPoint === null || setStartingPoint === void 0 ? void 0 : setStartingPoint(null);
                    setHighlightedMessage === null || setHighlightedMessage === void 0 ? void 0 : setHighlightedMessage(message === null || message === void 0 ? void 0 : message.messageId);
                }, 500);
            } }))));
};

var PANELS;
(function (PANELS) {
    PANELS["CHANNEL_LIST"] = "CHANNEL_LIST";
    PANELS["CHANNEL"] = "CHANNEL";
    PANELS["CHANNEL_SETTINGS"] = "CHANNEL_SETTINGS";
    PANELS["MESSAGE_SEARCH"] = "MESSAGE_SEARCH";
    PANELS["THREAD"] = "THREAD";
})(PANELS || (PANELS = {}));
var MobileLayout = function (props) {
    var _a, _b, _c;
    var replyType = props.replyType, isMessageGroupingEnabled = props.isMessageGroupingEnabled, isMultipleFilesMessageEnabled = props.isMultipleFilesMessageEnabled, allowProfileEdit = props.allowProfileEdit, isReactionEnabled = props.isReactionEnabled, showSearchIcon = props.showSearchIcon, onProfileEditSuccess = props.onProfileEditSuccess, currentChannel = props.currentChannel, setCurrentChannel = props.setCurrentChannel, startingPoint = props.startingPoint, setStartingPoint = props.setStartingPoint, threadTargetMessage = props.threadTargetMessage, setThreadTargetMessage = props.setThreadTargetMessage, highlightedMessage = props.highlightedMessage, setHighlightedMessage = props.setHighlightedMessage, enableLegacyChannelModules = props.enableLegacyChannelModules;
    var _d = React.useState(PANELS.CHANNEL_LIST), panel = _d[0], setPanel = _d[1];
    var store = useSendbirdStateContext.useSendbirdStateContext();
    var sdk = (_b = (_a = store === null || store === void 0 ? void 0 : store.stores) === null || _a === void 0 ? void 0 : _a.sdkStore) === null || _b === void 0 ? void 0 : _b.sdk;
    var userId = (_c = store === null || store === void 0 ? void 0 : store.config) === null || _c === void 0 ? void 0 : _c.userId;
    var pause = VoicePlayer_context.useVoicePlayerContext().pause;
    var goToMessage = function (message, timeoutCb) {
        setStartingPoint === null || setStartingPoint === void 0 ? void 0 : setStartingPoint((message === null || message === void 0 ? void 0 : message.createdAt) || null);
        setTimeout(function () {
            timeoutCb === null || timeoutCb === void 0 ? void 0 : timeoutCb((message === null || message === void 0 ? void 0 : message.messageId) || null);
        }, 500);
    };
    React.useEffect(function () {
        if (panel !== PANELS.CHANNEL) {
            goToMessage(null, function () { return setHighlightedMessage === null || setHighlightedMessage === void 0 ? void 0 : setHighlightedMessage(null); });
        }
    }, [panel]);
    React.useEffect(function () {
        var _a, _b;
        var handlerId = uuid.uuidv4();
        if ((_a = sdk === null || sdk === void 0 ? void 0 : sdk.groupChannel) === null || _a === void 0 ? void 0 : _a.addGroupChannelHandler) {
            var handler = new groupChannel.GroupChannelHandler({
                onUserBanned: function (groupChannel, user) {
                    if (groupChannel.url === (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) && (user === null || user === void 0 ? void 0 : user.userId) === userId) {
                        setPanel(PANELS.CHANNEL_LIST);
                    }
                },
                onChannelDeleted: function (channelUrl) {
                    if (channelUrl === (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url)) {
                        setPanel(PANELS.CHANNEL_LIST);
                    }
                },
                onUserLeft: function (groupChannel, user) {
                    if (groupChannel.url === (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) && (user === null || user === void 0 ? void 0 : user.userId) === userId) {
                        setPanel(PANELS.CHANNEL_LIST);
                    }
                },
            });
            (_b = sdk === null || sdk === void 0 ? void 0 : sdk.groupChannel) === null || _b === void 0 ? void 0 : _b.addGroupChannelHandler(handlerId, handler);
        }
        return function () {
            var _a, _b;
            (_b = (_a = sdk === null || sdk === void 0 ? void 0 : sdk.groupChannel) === null || _a === void 0 ? void 0 : _a.removeGroupChannelHandler) === null || _b === void 0 ? void 0 : _b.call(_a, handlerId);
        };
    }, [sdk, currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url]);
    // if currentChannel is changed while on Thread
    // then change panel type to CHANNEL
    React.useEffect(function () {
        if (panel === PANELS.THREAD) {
            setPanel(PANELS.CHANNEL);
        }
    }, [currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url]);
    var channelListProps = {
        allowProfileEdit: allowProfileEdit,
        onProfileEditSuccess: onProfileEditSuccess,
        disableAutoSelect: true,
        onChannelSelect: function (channel) {
            setCurrentChannel(channel !== null && channel !== void 0 ? channel : undefined);
            if (channel) {
                setPanel(PANELS.CHANNEL);
            }
            else {
                setPanel(PANELS.CHANNEL_LIST);
            }
        },
        // for GroupChannelList
        onChannelCreated: function (channel) {
            setCurrentChannel(channel);
            setPanel(PANELS.CHANNEL);
        },
        onUserProfileUpdated: onProfileEditSuccess,
    };
    var channelProps = {
        channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '',
        onChatHeaderActionClick: function () {
            setPanel(PANELS.CHANNEL_SETTINGS);
        },
        onBackClick: function () {
            setPanel(PANELS.CHANNEL_LIST);
            pause(VoicePlayer_context.ALL);
        },
        onSearchClick: function () {
            setPanel(PANELS.MESSAGE_SEARCH);
        },
        onReplyInThread: function (_a) {
            var message = _a.message;
            if (replyType === 'THREAD') {
                setPanel(PANELS.THREAD);
                setThreadTargetMessage(message);
            }
        },
        onQuoteMessageClick: function (_a) {
            var message = _a.message;
            // thread message
            if (replyType === 'THREAD') {
                setThreadTargetMessage(message);
                setPanel(PANELS.THREAD);
            }
        },
        animatedMessage: highlightedMessage,
        onMessageAnimated: function () { return setHighlightedMessage === null || setHighlightedMessage === void 0 ? void 0 : setHighlightedMessage(null); },
        showSearchIcon: showSearchIcon,
        startingPoint: startingPoint !== null && startingPoint !== void 0 ? startingPoint : undefined,
        isReactionEnabled: isReactionEnabled,
        replyType: replyType,
        isMessageGroupingEnabled: isMessageGroupingEnabled,
        isMultipleFilesMessageEnabled: isMultipleFilesMessageEnabled,
        // for GroupChannel
        animatedMessageId: highlightedMessage,
        onReplyInThreadClick: function (_a) {
            var message = _a.message;
            if (replyType === 'THREAD') {
                setPanel(PANELS.THREAD);
                setThreadTargetMessage(message);
            }
        },
    };
    return (React__default.default.createElement("div", { className: "sb_mobile", id: ui_ContextMenu.APP_LAYOUT_ROOT },
        panel === PANELS.CHANNEL_LIST && (React__default.default.createElement("div", { className: "sb_mobile__panelwrap" }, enableLegacyChannelModules ? React__default.default.createElement(ChannelList, _tslib.__assign({}, channelListProps)) : React__default.default.createElement(GroupChannelList.GroupChannelList, _tslib.__assign({}, channelListProps)))),
        panel === PANELS.CHANNEL && (React__default.default.createElement("div", { className: "sb_mobile__panelwrap" }, enableLegacyChannelModules ? React__default.default.createElement(Channel, _tslib.__assign({}, channelProps)) : React__default.default.createElement(GroupChannel.GroupChannel, _tslib.__assign({}, channelProps)))),
        panel === PANELS.CHANNEL_SETTINGS && (React__default.default.createElement("div", { className: "sb_mobile__panelwrap" },
            React__default.default.createElement(ChannelSettings, { channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', onCloseClick: function () {
                    setPanel(PANELS.CHANNEL);
                }, onLeaveChannel: function () {
                    setPanel(PANELS.CHANNEL_LIST);
                } }))),
        panel === PANELS.MESSAGE_SEARCH && (React__default.default.createElement("div", { className: "sb_mobile__panelwrap" },
            React__default.default.createElement(MessageSearch, { channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', onCloseClick: function () {
                    setPanel(PANELS.CHANNEL);
                }, onResultClick: function (message) {
                    setPanel(PANELS.CHANNEL);
                    goToMessage(message, function (messageId) {
                        setHighlightedMessage === null || setHighlightedMessage === void 0 ? void 0 : setHighlightedMessage(messageId);
                    });
                } }))),
        panel === PANELS.THREAD && (React__default.default.createElement("div", { className: "sb_mobile__panelwrap" },
            React__default.default.createElement(Thread, { channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', message: threadTargetMessage, onHeaderActionClick: function () {
                    setPanel(PANELS.CHANNEL);
                    pause(VoicePlayer_context.ALL);
                }, onMoveToParentMessage: function (_a) {
                    var message = _a.message, channel = _a.channel;
                    setCurrentChannel(channel);
                    goToMessage(message, function (messageId) {
                        setPanel(PANELS.CHANNEL);
                        setHighlightedMessage === null || setHighlightedMessage === void 0 ? void 0 : setHighlightedMessage(messageId);
                    });
                } })))));
};

var AppLayout = function (props) {
    var _a, _b, _c;
    var isMessageGroupingEnabled = props.isMessageGroupingEnabled, allowProfileEdit = props.allowProfileEdit, onProfileEditSuccess = props.onProfileEditSuccess, disableAutoSelect = props.disableAutoSelect, currentChannel = props.currentChannel, setCurrentChannel = props.setCurrentChannel, enableLegacyChannelModules = props.enableLegacyChannelModules;
    var globalStore = useSendbirdStateContext.useSendbirdStateContext();
    var globalConfigs = globalStore.config;
    var _d = React.useState(false), showThread = _d[0], setShowThread = _d[1];
    var _e = React.useState(null), threadTargetMessage = _e[0], setThreadTargetMessage = _e[1];
    var _f = React.useState(false), showSettings = _f[0], setShowSettings = _f[1];
    var _g = React.useState(false), showSearch = _g[0], setShowSearch = _g[1];
    var _h = React.useState(null), highlightedMessage = _h[0], setHighlightedMessage = _h[1];
    var _j = React.useState(null), startingPoint = _j[0], setStartingPoint = _j[1];
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    /**
     * Below configs can be set via Dashboard UIKit config setting but as a lower priority than App props.
     * So need to be have fallback value \w global configs even though each prop values are undefined
     */
    var replyType = (_a = props.replyType) !== null && _a !== void 0 ? _a : resolvedReplyType.getCaseResolvedReplyType(globalConfigs.groupChannel.replyType).upperCase;
    var isReactionEnabled = (_b = props.isReactionEnabled) !== null && _b !== void 0 ? _b : globalConfigs.groupChannel.enableReactions;
    var showSearchIcon = (_c = props.showSearchIcon) !== null && _c !== void 0 ? _c : globalConfigs.groupChannelSettings.enableMessageSearch;
    return (React__default.default.createElement(React__default.default.Fragment, null, isMobile
        ? (React__default.default.createElement(MobileLayout, { replyType: replyType, showSearchIcon: showSearchIcon, isReactionEnabled: isReactionEnabled, isMessageGroupingEnabled: isMessageGroupingEnabled, allowProfileEdit: allowProfileEdit, onProfileEditSuccess: onProfileEditSuccess, currentChannel: currentChannel, setCurrentChannel: setCurrentChannel, highlightedMessage: highlightedMessage, setHighlightedMessage: setHighlightedMessage, startingPoint: startingPoint, setStartingPoint: setStartingPoint, threadTargetMessage: threadTargetMessage, setThreadTargetMessage: setThreadTargetMessage, enableLegacyChannelModules: enableLegacyChannelModules }))
        : (React__default.default.createElement(DesktopLayout, { replyType: replyType, isReactionEnabled: isReactionEnabled, showSearchIcon: showSearchIcon, isMessageGroupingEnabled: isMessageGroupingEnabled, allowProfileEdit: allowProfileEdit, onProfileEditSuccess: onProfileEditSuccess, disableAutoSelect: disableAutoSelect, currentChannel: currentChannel, setCurrentChannel: setCurrentChannel, showThread: showThread, setShowThread: setShowThread, threadTargetMessage: threadTargetMessage, setThreadTargetMessage: setThreadTargetMessage, showSettings: showSettings, setShowSettings: setShowSettings, showSearch: showSearch, setShowSearch: setShowSearch, highlightedMessage: highlightedMessage, setHighlightedMessage: setHighlightedMessage, startingPoint: startingPoint, setStartingPoint: setStartingPoint, enableLegacyChannelModules: enableLegacyChannelModules }))));
};

/**
 * This is a drop in Chat solution
 * Can also be used as an example for creating
 * default chat apps
 */
function App(props) {
    var appId = props.appId, userId = props.userId, _a = props.accessToken, accessToken = _a === void 0 ? '' : _a, _b = props.customApiHost, customApiHost = _b === void 0 ? '' : _b, _c = props.customWebSocketHost, customWebSocketHost = _c === void 0 ? '' : _c, breakpoint = props.breakpoint, _d = props.theme, theme = _d === void 0 ? 'light' : _d, userListQuery = props.userListQuery, _e = props.nickname, nickname = _e === void 0 ? '' : _e, _f = props.profileUrl, profileUrl = _f === void 0 ? '' : _f, dateLocale = props.dateLocale, _g = props.config, config = _g === void 0 ? {} : _g, voiceRecord = props.voiceRecord, _h = props.isMessageGroupingEnabled, isMessageGroupingEnabled = _h === void 0 ? true : _h, colorSet = props.colorSet, stringSet = props.stringSet, _j = props.allowProfileEdit, allowProfileEdit = _j === void 0 ? false : _j, _k = props.disableMarkAsDelivered, disableMarkAsDelivered = _k === void 0 ? false : _k, renderUserProfile = props.renderUserProfile, onProfileEditSuccess = props.onProfileEditSuccess, _l = props.imageCompression, imageCompression = _l === void 0 ? {} : _l, _m = props.disableAutoSelect, disableAutoSelect = _m === void 0 ? false : _m, sdkInitParams = props.sdkInitParams, customExtensionParams = props.customExtensionParams, eventHandlers = props.eventHandlers, isMultipleFilesMessageEnabled = props.isMultipleFilesMessageEnabled, _o = props.isUserIdUsedForNickname, isUserIdUsedForNickname = _o === void 0 ? true : _o, _p = props.enableLegacyChannelModules, enableLegacyChannelModules = _p === void 0 ? false : _p, uikitOptions = props.uikitOptions, _q = props.htmlTextDirection, htmlTextDirection = _q === void 0 ? 'ltr' : _q, _r = props.forceLeftToRightMessageLayout, forceLeftToRightMessageLayout = _r === void 0 ? false : _r, 
    // The below configs are duplicates of the Dashboard UIKit Configs.
    // Since their default values will be set in the Sendbird component,
    // we don't need to set them here.
    showSearchIcon = props.showSearchIcon, isMentionEnabled = props.isMentionEnabled, isReactionEnabled = props.isReactionEnabled, replyType = props.replyType, disableUserProfile = props.disableUserProfile, isVoiceMessageEnabled = props.isVoiceMessageEnabled, isTypingIndicatorEnabledOnChannelList = props.isTypingIndicatorEnabledOnChannelList, isMessageReceiptStatusEnabledOnChannelList = props.isMessageReceiptStatusEnabledOnChannelList;
    var _s = React.useState(), currentChannel = _s[0], setCurrentChannel = _s[1];
    return (React__default.default.createElement(SendbirdProvider.SendbirdProvider, { stringSet: stringSet, appId: appId, userId: userId, accessToken: accessToken, customApiHost: customApiHost, customWebSocketHost: customWebSocketHost, breakpoint: breakpoint, theme: theme, nickname: nickname, profileUrl: profileUrl, dateLocale: dateLocale, userListQuery: userListQuery, config: config, colorSet: colorSet, disableMarkAsDelivered: disableMarkAsDelivered, renderUserProfile: renderUserProfile, imageCompression: imageCompression, isMultipleFilesMessageEnabled: isMultipleFilesMessageEnabled, voiceRecord: voiceRecord, onStartDirectMessage: function (channel) {
            setCurrentChannel(channel);
        }, uikitOptions: uikitOptions, isUserIdUsedForNickname: isUserIdUsedForNickname, sdkInitParams: sdkInitParams, customExtensionParams: customExtensionParams, eventHandlers: eventHandlers, isTypingIndicatorEnabledOnChannelList: isTypingIndicatorEnabledOnChannelList, isMessageReceiptStatusEnabledOnChannelList: isMessageReceiptStatusEnabledOnChannelList, replyType: replyType, showSearchIcon: showSearchIcon, disableUserProfile: disableUserProfile, isReactionEnabled: isReactionEnabled, isMentionEnabled: isMentionEnabled, isVoiceMessageEnabled: isVoiceMessageEnabled, htmlTextDirection: htmlTextDirection, forceLeftToRightMessageLayout: forceLeftToRightMessageLayout },
        React__default.default.createElement(AppLayout, { isMessageGroupingEnabled: isMessageGroupingEnabled, allowProfileEdit: allowProfileEdit, onProfileEditSuccess: onProfileEditSuccess, disableAutoSelect: disableAutoSelect, currentChannel: currentChannel, setCurrentChannel: setCurrentChannel, enableLegacyChannelModules: enableLegacyChannelModules, isReactionEnabled: isReactionEnabled, replyType: replyType, showSearchIcon: showSearchIcon })));
}

module.exports = App;
//# sourceMappingURL=App.js.map
