import React__default, { useState, useEffect } from 'react';
import { SendbirdProvider } from './SendbirdProvider.js';
import { u as useMediaQueryContext } from './chunks/bundle-Bk1oUUzJ.js';
import { _ as __assign } from './chunks/bundle-Ck-Lg2K3.js';
import { GroupChannel } from './GroupChannel.js';
import { GroupChannelList } from './GroupChannelList.js';
import Channel from './Channel.js';
import ChannelList from './ChannelList.js';
import ChannelSettings from './ChannelSettings.js';
import MessageSearchPannel from './MessageSearch.js';
import Thread from './Thread.js';
import { c as classnames } from './chunks/bundle-pQHYhigr.js';
import { A as APP_LAYOUT_ROOT } from './chunks/bundle-A5WEPjt6.js';
import { GroupChannelHandler } from '@sendbird/chat/groupChannel';
import { useSendbirdStateContext } from './useSendbirdStateContext.js';
import { u as uuidv4 } from './chunks/bundle-gMJSD9hQ.js';
import { u as useVoicePlayerContext, a as ALL } from './chunks/bundle-CHD1aKHO.js';
import { g as getCaseResolvedReplyType } from './chunks/bundle-yYNXeh2L.js';
import '@sendbird/uikit-tools';
import './withSendbird.js';
import './chunks/bundle-ptS-tNRF.js';
import './chunks/bundle-BL0uQSu6.js';
import './utils/message/getOutgoingMessageState.js';
import './chunks/bundle-fwRBR_Yw.js';
import './chunks/bundle-CnkNoe49.js';
import './chunks/bundle-DgxVBBM3.js';
import 'react-dom';
import './chunks/bundle-CbLNLMef.js';
import './chunks/bundle-B80WXNZi.js';
import './ui/IconButton.js';
import './ui/Button.js';
import './chunks/bundle-Di0Zwz2X.js';
import './ui/Icon.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import './chunks/bundle-qVNDxr2e.js';
import './chunks/bundle-qZpJFKwp.js';
import './chunks/bundle--SXvYGPR.js';
import './GroupChannel/context.js';
import '@sendbird/chat/message';
import './chunks/bundle-C3toIOqd.js';
import './chunks/bundle-oJ6bQnA_.js';
import './chunks/bundle-BT00z1C1.js';
import './chunks/bundle-DAH20nmQ.js';
import './chunks/bundle-YOpvheAB.js';
import './chunks/bundle-2HULaUfY.js';
import './ui/SortByRow.js';
import './GroupChannel/components/GroupChannelUI.js';
import './chunks/bundle-BZoYkT8d.js';
import './GroupChannel/components/TypingIndicator.js';
import './chunks/bundle-COJena2l.js';
import './ui/ConnectionStatus.js';
import './ui/PlaceHolder.js';
import './ui/Loader.js';
import './GroupChannel/components/GroupChannelHeader.js';
import './chunks/bundle-BqrxBkb5.js';
import './ui/ChannelAvatar.js';
import './chunks/bundle-BbICJE5Z.js';
import './ui/ImageRenderer.js';
import './chunks/bundle-CjhP75at.js';
import './chunks/bundle-Bi8yp0Ws.js';
import './chunks/bundle-BIxprrGs.js';
import './ui/Header.js';
import './ui/TextButton.js';
import './chunks/bundle-DUTd4XYU.js';
import './GroupChannel/components/MessageList.js';
import './GroupChannel/components/Message.js';
import './chunks/bundle-C4JOx0OP.js';
import './chunks/bundle-D4fsEPre.js';
import './Message/hooks/useDirtyGetMentions.js';
import './ui/DateSeparator.js';
import './ui/MessageInput.js';
import './chunks/bundle-nLX43pTB.js';
import './chunks/bundle-Cs72eVze.js';
import 'dompurify';
import './chunks/bundle-D6pm-XK9.js';
import './chunks/bundle-DjodzqAP.js';
import './chunks/bundle-oU_AYCPg.js';
import './chunks/bundle-BS8ALexW.js';
import './ui/MessageContent.js';
import './chunks/bundle-IQ2MguAG.js';
import './chunks/bundle-BxmZCK6X.js';
import './chunks/bundle-B5oDG6vR.js';
import './chunks/bundle-MK34Xf8y.js';
import './ui/MessageItemReactionMenu.js';
import './ui/ReactionButton.js';
import './chunks/bundle-B6cyKQvH.js';
import './ui/EmojiReactions.js';
import './ui/ReactionBadge.js';
import './ui/BottomSheet.js';
import './ui/UserListItem.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './ui/Tooltip.js';
import './ui/TooltipWrapper.js';
import './Message/context.js';
import './ui/AdminMessage.js';
import './ui/QuoteMessage.js';
import './chunks/bundle-CxwGa1l3.js';
import './ui/MobileMenu.js';
import './ui/ThreadReplies.js';
import './chunks/bundle-BNGFpTQ2.js';
import './ui/OGMessageItemBody.js';
import './chunks/bundle-D26kTqMa.js';
import './ui/MentionLabel.js';
import './ui/LinkLabel.js';
import './ui/TextMessageItemBody.js';
import './ui/FileMessageItemBody.js';
import './chunks/bundle-BztO2DWM.js';
import './ui/FileViewer.js';
import './chunks/bundle-Dhkrx18n.js';
import './ui/VoiceMessageItemBody.js';
import './ui/ProgressBar.js';
import './VoicePlayer/useVoicePlayer.js';
import './ui/PlaybackTime.js';
import './ui/ThumbnailMessageItemBody.js';
import './ui/UnknownMessageItemBody.js';
import './ui/TemplateMessageItemBody.js';
import './chunks/bundle-Mlk4FQsw.js';
import './ui/FallbackTemplateMessageItemBody.tsx.js';
import './ui/LoadingTemplateMessageItemBody.tsx.js';
import './ui/MessageFeedbackFailedModal.js';
import './ui/FeedbackIconButton.js';
import './ui/MobileFeedbackMenu.js';
import './ui/MessageFeedbackModal.js';
import './ui/Input.js';
import './chunks/bundle-DgN4UDUl.js';
import './GroupChannel/components/SuggestedReplies.js';
import './chunks/bundle-KZzhMils.js';
import './GroupChannel/components/FileViewer.js';
import './chunks/bundle-CFrRfSIT.js';
import './GroupChannel/components/RemoveMessageModal.js';
import './chunks/bundle-D5jak6m7.js';
import './chunks/bundle-BD9MPCws.js';
import './GroupChannel/components/UnreadCount.js';
import './GroupChannel/components/FrozenNotification.js';
import './ui/TypingIndicatorBubble.js';
import './Channel/utils/getMessagePartsInfo.js';
import './Channel/utils/compareMessagesForGrouping.js';
import './chunks/bundle-DnsBu59R.js';
import './GroupChannel/components/MessageInputWrapper.js';
import './chunks/bundle-D4F-we3Z.js';
import './GroupChannel/components/SuggestedMentionList.js';
import './ui/QuoteMessageInput.js';
import './VoiceRecorder/useVoiceRecorder.js';
import './chunks/bundle-6bvhA-hg.js';
import './chunks/bundle-BUI77uOB.js';
import './GroupChannelList/context.js';
import './GroupChannelList/components/GroupChannelListUI.js';
import './chunks/bundle-CJPkRcGP.js';
import './GroupChannelList/components/GroupChannelListHeader.js';
import './EditUserProfile.js';
import './EditUserProfile/context.js';
import './EditUserProfile/components/EditUserProfileUI.js';
import './chunks/bundle-Yva9Tory.js';
import './chunks/bundle-CKpGqedk.js';
import './GroupChannelList/components/GroupChannelPreviewAction.js';
import './GroupChannelList/components/GroupChannelListItem.js';
import './chunks/bundle-01eKGnuS.js';
import './ui/Badge.js';
import './ui/MentionUserLabel.js';
import './GroupChannelList/components/AddGroupChannel.js';
import './chunks/bundle-D6b4jlvB.js';
import './CreateChannel.js';
import './CreateChannel/components/CreateChannelUI.js';
import './chunks/bundle--I4N4hbH.js';
import './CreateChannel/components/InviteUsers.js';
import './CreateChannel/components/SelectChannelType.js';
import './Channel/context.js';
import './chunks/bundle-BhvKqaai.js';
import './chunks/bundle-BD8hNBsp.js';
import './chunks/bundle-DByz53YE.js';
import './chunks/bundle-C4W1gyaJ.js';
import './chunks/bundle-DknnqCJX.js';
import './Channel/components/ChannelUI.js';
import './Channel/components/ChannelHeader.js';
import './Channel/components/MessageList.js';
import './Channel/components/Message.js';
import './Channel/components/FileViewer.js';
import './Channel/components/RemoveMessageModal.js';
import './chunks/bundle-TcoRdnKH.js';
import './Channel/components/MessageInput.js';
import './chunks/bundle-D9sjualy.js';
import './ChannelList/components/ChannelListUI.js';
import './ChannelList/components/ChannelPreview.js';
import './ChannelList/components/AddChannel.js';
import './ChannelSettings/components/ChannelSettingsUI.js';
import './ChannelSettings/context.js';
import './ChannelSettings/components/ChannelSettingsHeader.js';
import './ChannelSettings/components/ChannelProfile.js';
import './ChannelSettings/components/EditDetailsModal.js';
import './ChannelSettings/components/LeaveChannel.js';
import './ChannelSettings/components/ChannelSettingsMenuItem.js';
import './ChannelSettings/components/ChannelSettingMenuList.js';
import './ChannelSettings/hooks/useMenuList.js';
import './chunks/bundle-BhIrSa-z.js';
import './chunks/bundle-CgvAKhwx.js';
import './chunks/bundle-BLslmkak.js';
import './ui/Toggle.js';
import './MessageSearch/components/MessageSearchUI.js';
import './MessageSearch/context.js';
import './ui/MessageSearchItem.js';
import './ui/MessageSearchFileItem.js';
import './Thread/context.js';
import './Thread/context/types.js';
import './Thread/components/ThreadUI.js';
import './Thread/components/ParentMessageInfo.js';
import './chunks/bundle-DxS9au3G.js';
import './Thread/components/ParentMessageInfoItem.js';
import './chunks/bundle-C_hBU-VS.js';
import './chunks/bundle-BMUVlu6F.js';
import './Thread/components/ThreadHeader.js';
import './Thread/components/ThreadList.js';
import './Thread/components/ThreadListItem.js';
import 'date-fns';
import './Thread/components/ThreadMessageInput.js';
import './Channel/hooks/useHandleUploadFiles.js';

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
    return (React__default.createElement("div", { className: "sendbird-app__wrap", id: APP_LAYOUT_ROOT },
        React__default.createElement("div", { className: "sendbird-app__channellist-wrap" }, enableLegacyChannelModules ? React__default.createElement(ChannelList, __assign({}, channelListProps)) : React__default.createElement(GroupChannelList, __assign({}, channelListProps))),
        React__default.createElement("div", { className: classnames('sendbird-app__conversation-wrap', showSettings && 'sendbird-app__conversation--settings-open', showSearch && 'sendbird-app__conversation--search-open') }, enableLegacyChannelModules ? React__default.createElement(Channel, __assign({}, channelProps)) : React__default.createElement(GroupChannel, __assign({}, channelProps))),
        showSettings && (React__default.createElement("div", { className: "sendbird-app__settingspanel-wrap" },
            React__default.createElement(ChannelSettings, { className: "sendbird-channel-settings", channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', onCloseClick: function () {
                    setShowSettings(false);
                } }))),
        showSearch && (React__default.createElement("div", { className: "sendbird-app__searchpanel-wrap" },
            React__default.createElement(MessageSearchPannel, { channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', onResultClick: function (message) {
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
        showThread && (React__default.createElement(Thread, { className: "sendbird-app__thread", channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', message: threadTargetMessage, onHeaderActionClick: function () {
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
    var _d = useState(PANELS.CHANNEL_LIST), panel = _d[0], setPanel = _d[1];
    var store = useSendbirdStateContext();
    var sdk = (_b = (_a = store === null || store === void 0 ? void 0 : store.stores) === null || _a === void 0 ? void 0 : _a.sdkStore) === null || _b === void 0 ? void 0 : _b.sdk;
    var userId = (_c = store === null || store === void 0 ? void 0 : store.config) === null || _c === void 0 ? void 0 : _c.userId;
    var pause = useVoicePlayerContext().pause;
    var goToMessage = function (message, timeoutCb) {
        setStartingPoint === null || setStartingPoint === void 0 ? void 0 : setStartingPoint((message === null || message === void 0 ? void 0 : message.createdAt) || null);
        setTimeout(function () {
            timeoutCb === null || timeoutCb === void 0 ? void 0 : timeoutCb((message === null || message === void 0 ? void 0 : message.messageId) || null);
        }, 500);
    };
    useEffect(function () {
        if (panel !== PANELS.CHANNEL) {
            goToMessage(null, function () { return setHighlightedMessage === null || setHighlightedMessage === void 0 ? void 0 : setHighlightedMessage(null); });
        }
    }, [panel]);
    useEffect(function () {
        var _a, _b;
        var handlerId = uuidv4();
        if ((_a = sdk === null || sdk === void 0 ? void 0 : sdk.groupChannel) === null || _a === void 0 ? void 0 : _a.addGroupChannelHandler) {
            var handler = new GroupChannelHandler({
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
    useEffect(function () {
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
            pause(ALL);
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
    return (React__default.createElement("div", { className: "sb_mobile", id: APP_LAYOUT_ROOT },
        panel === PANELS.CHANNEL_LIST && (React__default.createElement("div", { className: "sb_mobile__panelwrap" }, enableLegacyChannelModules ? React__default.createElement(ChannelList, __assign({}, channelListProps)) : React__default.createElement(GroupChannelList, __assign({}, channelListProps)))),
        panel === PANELS.CHANNEL && (React__default.createElement("div", { className: "sb_mobile__panelwrap" }, enableLegacyChannelModules ? React__default.createElement(Channel, __assign({}, channelProps)) : React__default.createElement(GroupChannel, __assign({}, channelProps)))),
        panel === PANELS.CHANNEL_SETTINGS && (React__default.createElement("div", { className: "sb_mobile__panelwrap" },
            React__default.createElement(ChannelSettings, { channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', onCloseClick: function () {
                    setPanel(PANELS.CHANNEL);
                }, onLeaveChannel: function () {
                    setPanel(PANELS.CHANNEL_LIST);
                } }))),
        panel === PANELS.MESSAGE_SEARCH && (React__default.createElement("div", { className: "sb_mobile__panelwrap" },
            React__default.createElement(MessageSearchPannel, { channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', onCloseClick: function () {
                    setPanel(PANELS.CHANNEL);
                }, onResultClick: function (message) {
                    setPanel(PANELS.CHANNEL);
                    goToMessage(message, function (messageId) {
                        setHighlightedMessage === null || setHighlightedMessage === void 0 ? void 0 : setHighlightedMessage(messageId);
                    });
                } }))),
        panel === PANELS.THREAD && (React__default.createElement("div", { className: "sb_mobile__panelwrap" },
            React__default.createElement(Thread, { channelUrl: (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) || '', message: threadTargetMessage, onHeaderActionClick: function () {
                    setPanel(PANELS.CHANNEL);
                    pause(ALL);
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
    var globalStore = useSendbirdStateContext();
    var globalConfigs = globalStore.config;
    var _d = useState(false), showThread = _d[0], setShowThread = _d[1];
    var _e = useState(null), threadTargetMessage = _e[0], setThreadTargetMessage = _e[1];
    var _f = useState(false), showSettings = _f[0], setShowSettings = _f[1];
    var _g = useState(false), showSearch = _g[0], setShowSearch = _g[1];
    var _h = useState(null), highlightedMessage = _h[0], setHighlightedMessage = _h[1];
    var _j = useState(null), startingPoint = _j[0], setStartingPoint = _j[1];
    var isMobile = useMediaQueryContext().isMobile;
    /**
     * Below configs can be set via Dashboard UIKit config setting but as a lower priority than App props.
     * So need to be have fallback value \w global configs even though each prop values are undefined
     */
    var replyType = (_a = props.replyType) !== null && _a !== void 0 ? _a : getCaseResolvedReplyType(globalConfigs.groupChannel.replyType).upperCase;
    var isReactionEnabled = (_b = props.isReactionEnabled) !== null && _b !== void 0 ? _b : globalConfigs.groupChannel.enableReactions;
    var showSearchIcon = (_c = props.showSearchIcon) !== null && _c !== void 0 ? _c : globalConfigs.groupChannelSettings.enableMessageSearch;
    return (React__default.createElement(React__default.Fragment, null, isMobile
        ? (React__default.createElement(MobileLayout, { replyType: replyType, showSearchIcon: showSearchIcon, isReactionEnabled: isReactionEnabled, isMessageGroupingEnabled: isMessageGroupingEnabled, allowProfileEdit: allowProfileEdit, onProfileEditSuccess: onProfileEditSuccess, currentChannel: currentChannel, setCurrentChannel: setCurrentChannel, highlightedMessage: highlightedMessage, setHighlightedMessage: setHighlightedMessage, startingPoint: startingPoint, setStartingPoint: setStartingPoint, threadTargetMessage: threadTargetMessage, setThreadTargetMessage: setThreadTargetMessage, enableLegacyChannelModules: enableLegacyChannelModules }))
        : (React__default.createElement(DesktopLayout, { replyType: replyType, isReactionEnabled: isReactionEnabled, showSearchIcon: showSearchIcon, isMessageGroupingEnabled: isMessageGroupingEnabled, allowProfileEdit: allowProfileEdit, onProfileEditSuccess: onProfileEditSuccess, disableAutoSelect: disableAutoSelect, currentChannel: currentChannel, setCurrentChannel: setCurrentChannel, showThread: showThread, setShowThread: setShowThread, threadTargetMessage: threadTargetMessage, setThreadTargetMessage: setThreadTargetMessage, showSettings: showSettings, setShowSettings: setShowSettings, showSearch: showSearch, setShowSearch: setShowSearch, highlightedMessage: highlightedMessage, setHighlightedMessage: setHighlightedMessage, startingPoint: startingPoint, setStartingPoint: setStartingPoint, enableLegacyChannelModules: enableLegacyChannelModules }))));
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
    var _s = useState(), currentChannel = _s[0], setCurrentChannel = _s[1];
    return (React__default.createElement(SendbirdProvider, { stringSet: stringSet, appId: appId, userId: userId, accessToken: accessToken, customApiHost: customApiHost, customWebSocketHost: customWebSocketHost, breakpoint: breakpoint, theme: theme, nickname: nickname, profileUrl: profileUrl, dateLocale: dateLocale, userListQuery: userListQuery, config: config, colorSet: colorSet, disableMarkAsDelivered: disableMarkAsDelivered, renderUserProfile: renderUserProfile, imageCompression: imageCompression, isMultipleFilesMessageEnabled: isMultipleFilesMessageEnabled, voiceRecord: voiceRecord, onStartDirectMessage: function (channel) {
            setCurrentChannel(channel);
        }, uikitOptions: uikitOptions, isUserIdUsedForNickname: isUserIdUsedForNickname, sdkInitParams: sdkInitParams, customExtensionParams: customExtensionParams, eventHandlers: eventHandlers, isTypingIndicatorEnabledOnChannelList: isTypingIndicatorEnabledOnChannelList, isMessageReceiptStatusEnabledOnChannelList: isMessageReceiptStatusEnabledOnChannelList, replyType: replyType, showSearchIcon: showSearchIcon, disableUserProfile: disableUserProfile, isReactionEnabled: isReactionEnabled, isMentionEnabled: isMentionEnabled, isVoiceMessageEnabled: isVoiceMessageEnabled, htmlTextDirection: htmlTextDirection, forceLeftToRightMessageLayout: forceLeftToRightMessageLayout },
        React__default.createElement(AppLayout, { isMessageGroupingEnabled: isMessageGroupingEnabled, allowProfileEdit: allowProfileEdit, onProfileEditSuccess: onProfileEditSuccess, disableAutoSelect: disableAutoSelect, currentChannel: currentChannel, setCurrentChannel: setCurrentChannel, enableLegacyChannelModules: enableLegacyChannelModules, isReactionEnabled: isReactionEnabled, replyType: replyType, showSearchIcon: showSearchIcon })));
}

export { App as default };
//# sourceMappingURL=App.js.map
