'use strict';

var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var LocalizationContext = require('../../chunks/bundle-Cy1ruNzs.js');
var utils = require('../../chunks/bundle-CoUbsBcp.js');
var Thread_context = require('../context.js');
var Thread_components_ParentMessageInfo = require('./ParentMessageInfo.js');
var Thread_components_ThreadHeader = require('./ThreadHeader.js');
var Thread_components_ThreadList = require('./ThreadList.js');
var Thread_components_ThreadMessageInput = require('./ThreadMessageInput.js');
var Thread_context_types = require('../context/types.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var ui_Label = require('../../chunks/bundle-CAR4EIKs.js');
var useSendMultipleFilesMessage = require('../../chunks/bundle-Bs36T7L5.js');
var Message_context = require('../../Message/context.js');
var index = require('../../chunks/bundle-BLoixwYr.js');
var utils$1 = require('../../chunks/bundle-Ck6ikNW6.js');
require('../../withSendbird.js');
require('../../chunks/bundle-Bdr7xlea.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../chunks/bundle-DgjptBQW.js');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-DZhkNDpN.js');
require('react-dom');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../ui/Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../chunks/bundle-wYxshM30.js');
require('../../chunks/bundle-Dh0NAI0D.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-DspSuA8e.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('../../chunks/bundle-CJnPpHlO.js');
require('../../chunks/bundle-CzLnk6wC.js');
require('./ParentMessageInfoItem.js');
require('../../ui/ImageRenderer.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-CLzI6bbe.js');
require('../../ui/EmojiReactions.js');
require('../../ui/ReactionBadge.js');
require('../../ui/ReactionButton.js');
require('../../chunks/bundle-D_k3_Y_y.js');
require('../../ui/BottomSheet.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../chunks/bundle-CVdJh4P7.js');
require('../../ui/VoiceMessageItemBody.js');
require('../../ui/ProgressBar.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../ui/PlaybackTime.js');
require('../../ui/Loader.js');
require('../../chunks/bundle-92xEkubH.js');
require('../../chunks/bundle-BIkitklZ.js');
require('../../ui/MentionLabel.js');
require('../../ui/LinkLabel.js');
require('../../chunks/bundle-B3JoFOJ4.js');
require('../../ui/FileViewer.js');
require('../../chunks/bundle-DpdA7O8z.js');
require('../../chunks/bundle-BNuA_uqY.js');
require('../../chunks/bundle-DPjtF20V.js');
require('../../chunks/bundle-kFYCld9C.js');
require('../../chunks/bundle-CtHeiC70.js');
require('../../chunks/bundle-CfV7jROn.js');
require('../../ui/MessageItemReactionMenu.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-CCtdwkHe.js');
require('dompurify');
require('../../chunks/bundle-By5v4zYf.js');
require('../../chunks/bundle-DobO_BAb.js');
require('../../chunks/bundle-BaSZqehS.js');
require('../../chunks/bundle-BA-5SFdp.js');
require('../../ui/MobileMenu.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../chunks/bundle-DvvdekCh.js');
require('../../chunks/bundle-BUXIG4fk.js');
require('../../chunks/bundle-BwahJ_Tg.js');
require('../../ui/Header.js');
require('./ThreadListItem.js');
require('../../ui/DateSeparator.js');
require('../../chunks/bundle-BQHwJ1ZS.js');
require('../../chunks/bundle-f7s_1xF4.js');
require('../../chunks/bundle-Cc6_UMK4.js');
require('../../chunks/bundle-8wGi0pKu.js');
require('../../ui/OGMessageItemBody.js');
require('../../ui/TextMessageItemBody.js');
require('../../ui/FileMessageItemBody.js');
require('../../ui/ThumbnailMessageItemBody.js');
require('../../chunks/bundle-DEjC6RIv.js');
require('../../ui/UnknownMessageItemBody.js');
require('../../ui/TemplateMessageItemBody.js');
require('../../chunks/bundle-Dd_liLM9.js');
require('../../ui/FallbackTemplateMessageItemBody.tsx.js');
require('../../ui/LoadingTemplateMessageItemBody.tsx.js');
require('../../ui/MessageFeedbackFailedModal.js');
require('../../chunks/bundle-w0Wt2aBx.js');
require('../../Channel/utils/compareMessagesForGrouping.js');
require('date-fns');
require('../../chunks/bundle-CdcQAzUs.js');
require('../../GroupChannel/components/SuggestedMentionList.js');
require('../../ui/QuoteMessageInput.js');
require('../../VoiceRecorder/useVoiceRecorder.js');
require('../../chunks/bundle-BL2PtzAF.js');
require('../../chunks/bundle-BdRSDnh9.js');
require('../../GroupChannel/context.js');
require('../../chunks/bundle-CpJ9tVDn.js');
require('../../chunks/bundle-CzBskCon.js');
require('../../Channel/hooks/useHandleUploadFiles.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var useMemorizedHeader = function (_a) {
    var renderHeader = _a.renderHeader;
    return React.useMemo(function () {
        if (typeof renderHeader === 'function') {
            return renderHeader();
        }
        return null;
    }, [renderHeader]);
};

var useMemorizedParentMessageInfo = function (_a) {
    var parentMessage = _a.parentMessage, parentMessageState = _a.parentMessageState, renderParentMessageInfo = _a.renderParentMessageInfo, renderParentMessageInfoPlaceholder = _a.renderParentMessageInfoPlaceholder;
    return React.useMemo(function () {
        if (parentMessageState === Thread_context_types.ParentMessageStateTypes.NIL
            || parentMessageState === Thread_context_types.ParentMessageStateTypes.LOADING
            || parentMessageState === Thread_context_types.ParentMessageStateTypes.INVALID) {
            if (typeof renderParentMessageInfoPlaceholder === 'function') {
                return renderParentMessageInfoPlaceholder(parentMessageState);
            }
            switch (parentMessageState) {
                case Thread_context_types.ParentMessageStateTypes.NIL: {
                    return (React__default.default.createElement(ui_PlaceHolder.default, { className: "sendbird-thread-ui__parent-message-info placeholder-nil", type: ui_PlaceHolder.PlaceHolderTypes.NO_RESULTS, iconSize: "64px" }));
                }
                case Thread_context_types.ParentMessageStateTypes.LOADING: {
                    return (React__default.default.createElement(ui_PlaceHolder.default, { className: "sendbird-thread-ui__parent-message-info placeholder-loading", type: ui_PlaceHolder.PlaceHolderTypes.LOADING, iconSize: "64px" }));
                }
                case Thread_context_types.ParentMessageStateTypes.INVALID: {
                    return (React__default.default.createElement(ui_PlaceHolder.default, { className: "sendbird-thread-ui__parent-message-info placeholder-invalid", type: ui_PlaceHolder.PlaceHolderTypes.WRONG, iconSize: "64px" }));
                }
                default: {
                    return null;
                }
            }
        }
        else if (parentMessageState === Thread_context_types.ParentMessageStateTypes.INITIALIZED) {
            if (typeof renderParentMessageInfo === 'function') {
                return renderParentMessageInfo();
            }
        }
        return null;
    }, [
        parentMessage,
        parentMessageState,
        renderParentMessageInfo,
        renderParentMessageInfoPlaceholder,
    ]);
};

var useMemorizedThreadList = function (_a) {
    var threadListState = _a.threadListState, renderThreadListPlaceHolder = _a.renderThreadListPlaceHolder;
    return React.useMemo(function () {
        if (threadListState === Thread_context_types.ThreadListStateTypes.NIL
            || threadListState === Thread_context_types.ThreadListStateTypes.LOADING
            || threadListState === Thread_context_types.ThreadListStateTypes.INVALID) {
            if (typeof renderThreadListPlaceHolder === 'function') {
                return renderThreadListPlaceHolder(threadListState);
            }
            switch (threadListState) {
                case Thread_context_types.ThreadListStateTypes.LOADING: {
                    return (React__default.default.createElement(ui_PlaceHolder.default, { className: "sendbird-thread-ui__thread-list placeholder-loading", type: ui_PlaceHolder.PlaceHolderTypes.LOADING, iconSize: "64px" }));
                }
                case Thread_context_types.ThreadListStateTypes.INVALID: {
                    return (React__default.default.createElement(ui_PlaceHolder.default, { className: "sendbird-thread-ui__thread-list placeholder-invalid", type: ui_PlaceHolder.PlaceHolderTypes.WRONG, iconSize: "64px" }));
                }
                case Thread_context_types.ThreadListStateTypes.NIL: {
                    return React__default.default.createElement(React__default.default.Fragment, null);
                }
                default: {
                    return null;
                }
            }
        }
        return null;
    }, [
        threadListState,
        renderThreadListPlaceHolder,
    ]);
};

var ThreadUI = function (_a) {
    var _b, _c, _d, _e;
    var renderHeader = _a.renderHeader, _f = _a.renderParentMessageInfo, renderParentMessageInfo = _f === void 0 ? function () { return React__default.default.createElement(Thread_components_ParentMessageInfo, { className: "sendbird-thread-ui__parent-message-info" }); } : _f, renderMessage = _a.renderMessage, renderMessageInput = _a.renderMessageInput, renderCustomSeparator = _a.renderCustomSeparator, renderParentMessageInfoPlaceholder = _a.renderParentMessageInfoPlaceholder, renderThreadListPlaceHolder = _a.renderThreadListPlaceHolder, renderFileUploadIcon = _a.renderFileUploadIcon, renderVoiceMessageIcon = _a.renderVoiceMessageIcon, renderSendMessageIcon = _a.renderSendMessageIcon;
    var _g = useSendbirdStateContext.useSendbirdStateContext(), stores = _g.stores, config = _g.config;
    var currentUserId = (_d = (_c = (_b = stores === null || stores === void 0 ? void 0 : stores.sdkStore) === null || _b === void 0 ? void 0 : _b.sdk) === null || _c === void 0 ? void 0 : _c.currentUser) === null || _d === void 0 ? void 0 : _d.userId;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var _h = Thread_context.useThreadContext(), currentChannel = _h.currentChannel, allThreadMessages = _h.allThreadMessages, parentMessage = _h.parentMessage, parentMessageState = _h.parentMessageState, threadListState = _h.threadListState, hasMorePrev = _h.hasMorePrev, hasMoreNext = _h.hasMoreNext, fetchPrevThreads = _h.fetchPrevThreads, fetchNextThreads = _h.fetchNextThreads, onHeaderActionClick = _h.onHeaderActionClick, onMoveToParentMessage = _h.onMoveToParentMessage;
    var replyCount = allThreadMessages.length;
    var isByMe = currentUserId === ((_e = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.sender) === null || _e === void 0 ? void 0 : _e.userId);
    // Memoized custom components
    var MemorizedHeader = useMemorizedHeader({ renderHeader: renderHeader });
    var MemorizedParentMessageInfo = useMemorizedParentMessageInfo({
        parentMessage: parentMessage,
        parentMessageState: parentMessageState,
        renderParentMessageInfo: renderParentMessageInfo,
        renderParentMessageInfoPlaceholder: renderParentMessageInfoPlaceholder,
    });
    var MemorizedThreadList = useMemorizedThreadList({
        threadListState: threadListState,
        renderThreadListPlaceHolder: renderThreadListPlaceHolder,
    });
    // scroll
    var _j = React.useState(0), scrollBottom = _j[0], setScrollBottom = _j[1];
    var scrollRef = React.useRef(null);
    var onScroll = function (e) {
        var _a;
        var element = e.target;
        var scrollTop = element.scrollTop, clientHeight = element.clientHeight, scrollHeight = element.scrollHeight;
        var threadItemNodes = (_a = scrollRef.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.sendbird-thread-list-item');
        var firstNode = threadItemNodes === null || threadItemNodes === void 0 ? void 0 : threadItemNodes[0];
        if (useSendMultipleFilesMessage.isAboutSame(scrollTop, 0, 10) && hasMorePrev) {
            fetchPrevThreads(function (messages) {
                var _a;
                if (messages) {
                    try {
                        (_a = firstNode === null || firstNode === void 0 ? void 0 : firstNode.scrollIntoView) === null || _a === void 0 ? void 0 : _a.call(firstNode, { block: 'start', inline: 'nearest' });
                    }
                    catch (error) {
                        //
                    }
                }
            });
        }
        if (useSendMultipleFilesMessage.isAboutSame(clientHeight + scrollTop, scrollHeight, 10) && hasMoreNext) {
            var scrollTop_1 = scrollTop;
            fetchNextThreads(function (messages) {
                if (messages) {
                    try {
                        element.scrollTop = scrollTop_1;
                        if (scrollRef.current) {
                            scrollRef.current.scrollTop = scrollTop_1;
                        }
                    }
                    catch (error) {
                        //
                    }
                }
            });
        }
        // save the lastest scroll bottom value
        if (scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) {
            var current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;
            setScrollBottom(current.scrollHeight - current.scrollTop - current.offsetHeight);
        }
    };
    return (React__default.default.createElement("div", { className: 'sendbird-thread-ui' },
        MemorizedHeader || (React__default.default.createElement(Thread_components_ThreadHeader, { className: "sendbird-thread-ui__header", channelName: utils.getChannelTitle(currentChannel, currentUserId !== null && currentUserId !== void 0 ? currentUserId : '', stringSet), onActionIconClick: onHeaderActionClick, onChannelNameClick: function () {
                onMoveToParentMessage === null || onMoveToParentMessage === void 0 ? void 0 : onMoveToParentMessage({ message: parentMessage, channel: currentChannel });
            } })),
        React__default.default.createElement("div", { className: utils$1.classnames('sendbird-thread-ui--scroll', 'sendbird-conversation__messages'), ref: scrollRef, onScroll: onScroll, dir: index.getHTMLTextDirection(config === null || config === void 0 ? void 0 : config.htmlTextDirection, config === null || config === void 0 ? void 0 : config.forceLeftToRightMessageLayout) },
            React__default.default.createElement(Message_context.MessageProvider, { message: parentMessage, isByMe: isByMe }, MemorizedParentMessageInfo),
            replyCount > 0 && (React__default.default.createElement("div", { className: "sendbird-thread-ui__reply-counts" },
                React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_3 }, "".concat(replyCount, " ").concat(replyCount > 1 ? stringSet.THREAD__THREAD_REPLIES : stringSet.THREAD__THREAD_REPLY)))),
            MemorizedThreadList || (React__default.default.createElement(Thread_components_ThreadList, { className: "sendbird-thread-ui__thread-list", renderMessage: renderMessage, renderCustomSeparator: renderCustomSeparator, scrollRef: scrollRef, scrollBottom: scrollBottom }))),
        (renderMessageInput === null || renderMessageInput === void 0 ? void 0 : renderMessageInput()) || (React__default.default.createElement(Thread_components_ThreadMessageInput, { className: "sendbird-thread-ui__message-input", renderFileUploadIcon: renderFileUploadIcon, renderVoiceMessageIcon: renderVoiceMessageIcon, renderSendMessageIcon: renderSendMessageIcon }))));
};

module.exports = ThreadUI;
//# sourceMappingURL=ThreadUI.js.map
