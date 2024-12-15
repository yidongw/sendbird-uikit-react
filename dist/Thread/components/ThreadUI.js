import React__default, { useMemo, useState, useRef } from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { u as useLocalization } from '../../chunks/bundle-DhMUg-L7.js';
import { g as getChannelTitle } from '../../chunks/bundle-BL4_FV0d.js';
import { useThreadContext } from '../context.js';
import ParentMessageInfo from './ParentMessageInfo.js';
import ThreadHeader from './ThreadHeader.js';
import ThreadList from './ThreadList.js';
import ThreadMessageInput from './ThreadMessageInput.js';
import { ParentMessageStateTypes, ThreadListStateTypes } from '../context/types.js';
import PlaceHolder, { PlaceHolderTypes } from '../../ui/PlaceHolder.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-Qkp2VIaZ.js';
import { i as isAboutSame } from '../../chunks/bundle-B43UOaqG.js';
import { MessageProvider } from '../../Message/context.js';
import { N as getHTMLTextDirection } from '../../chunks/bundle-Bd-i99nk.js';
import { c as classnames } from '../../chunks/bundle-0WaCg6X7.js';
import '../../withSendbird.js';
import '../../chunks/bundle-HcNswZ5p.js';
import '../../chunks/bundle-dybWaw0v.js';
import '../../chunks/bundle-B91Bhfde.js';
import '@sendbird/uikit-tools';
import '../../chunks/bundle-ja8H3E0K.js';
import 'react-dom';
import '../../chunks/bundle-DnSobLtx.js';
import '../../ui/IconButton.js';
import '../../ui/Button.js';
import '../../ui/Icon.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../../chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../chunks/bundle-DQk0aENq.js';
import '../../chunks/bundle-DjLJFwD7.js';
import '../../chunks/bundle-BKzcG-aC.js';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-BwmZGijR.js';
import '../../chunks/bundle-DDTq-6FS.js';
import '../../chunks/bundle-zVlBKrSk.js';
import '@sendbird/chat/message';
import '../../chunks/bundle-D4JzAgen.js';
import '../../chunks/bundle-DB7YSrIT.js';
import '../../chunks/bundle-C7ocx9AB.js';
import '../../chunks/bundle-BzEzK7wl.js';
import './ParentMessageInfoItem.js';
import '../../ui/ImageRenderer.js';
import '../../ui/TextButton.js';
import '../../chunks/bundle-DGMsaaNU.js';
import '../../ui/EmojiReactions.js';
import '../../ui/ReactionBadge.js';
import '../../ui/ReactionButton.js';
import '../../chunks/bundle-B6yWIKOT.js';
import '../../ui/BottomSheet.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../ui/UserListItem.js';
import '../../chunks/bundle-2pbuHA3C.js';
import '../../chunks/bundle-DkDQ1PWY.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../chunks/bundle-CuavrWk1.js';
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
import '../../ui/FileViewer.js';
import '../../chunks/bundle-A7zrKt0i.js';
import '../../chunks/bundle-D-F3KakE.js';
import '../../chunks/bundle-Bpffa6Xa.js';
import '../../chunks/bundle-BYBFk8ow.js';
import '../../chunks/bundle-CijxkMjj.js';
import '../../chunks/bundle-lUbYBD0x.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/MessageInput.js';
import '../../chunks/bundle-Bf0OMYby.js';
import 'dompurify';
import '../../chunks/bundle-DCxt9PzH.js';
import '../../chunks/bundle-BddSUitu.js';
import '../../chunks/bundle-DLG7S88z.js';
import '../../chunks/bundle-BixCOuL9.js';
import '../../ui/MobileMenu.js';
import '../../Message/hooks/useDirtyGetMentions.js';
import '../../chunks/bundle-CUhgRMBc.js';
import '../../chunks/bundle-X8EPLaoY.js';
import '../../chunks/bundle-Cnmz5VIU.js';
import '../../ui/Header.js';
import './ThreadListItem.js';
import '../../ui/DateSeparator.js';
import '../../chunks/bundle-Biuu5CVW.js';
import '../../chunks/bundle-BDE05Tho.js';
import '../../chunks/bundle-DfmFm_nl.js';
import '../../chunks/bundle-C5pqGUL_.js';
import '../../ui/OGMessageItemBody.js';
import '../../ui/TextMessageItemBody.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../chunks/bundle-B_TSibjC.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/TemplateMessageItemBody.js';
import '../../chunks/bundle-CvDJ0OhP.js';
import '../../ui/FallbackTemplateMessageItemBody.tsx.js';
import '../../ui/LoadingTemplateMessageItemBody.tsx.js';
import '../../ui/MessageFeedbackFailedModal.js';
import '../../chunks/bundle-BB4cJn39.js';
import '../../Channel/utils/compareMessagesForGrouping.js';
import 'date-fns';
import '../../chunks/bundle-9bLgMxxd.js';
import '../../GroupChannel/components/SuggestedMentionList.js';
import '../../ui/QuoteMessageInput.js';
import '../../VoiceRecorder/useVoiceRecorder.js';
import '../../chunks/bundle-DzdrCQZi.js';
import '../../chunks/bundle-HPKdeJ0K.js';
import '../../GroupChannel/context.js';
import '../../chunks/bundle-CZtAsa-i.js';
import '../../chunks/bundle-CT4PvZdn.js';
import '../../Channel/hooks/useHandleUploadFiles.js';

var useMemorizedHeader = function (_a) {
    var renderHeader = _a.renderHeader;
    return useMemo(function () {
        if (typeof renderHeader === 'function') {
            return renderHeader();
        }
        return null;
    }, [renderHeader]);
};

var useMemorizedParentMessageInfo = function (_a) {
    var parentMessage = _a.parentMessage, parentMessageState = _a.parentMessageState, renderParentMessageInfo = _a.renderParentMessageInfo, renderParentMessageInfoPlaceholder = _a.renderParentMessageInfoPlaceholder;
    return useMemo(function () {
        if (parentMessageState === ParentMessageStateTypes.NIL
            || parentMessageState === ParentMessageStateTypes.LOADING
            || parentMessageState === ParentMessageStateTypes.INVALID) {
            if (typeof renderParentMessageInfoPlaceholder === 'function') {
                return renderParentMessageInfoPlaceholder(parentMessageState);
            }
            switch (parentMessageState) {
                case ParentMessageStateTypes.NIL: {
                    return (React__default.createElement(PlaceHolder, { className: "sendbird-thread-ui__parent-message-info placeholder-nil", type: PlaceHolderTypes.NO_RESULTS, iconSize: "64px" }));
                }
                case ParentMessageStateTypes.LOADING: {
                    return (React__default.createElement(PlaceHolder, { className: "sendbird-thread-ui__parent-message-info placeholder-loading", type: PlaceHolderTypes.LOADING, iconSize: "64px" }));
                }
                case ParentMessageStateTypes.INVALID: {
                    return (React__default.createElement(PlaceHolder, { className: "sendbird-thread-ui__parent-message-info placeholder-invalid", type: PlaceHolderTypes.WRONG, iconSize: "64px" }));
                }
                default: {
                    return null;
                }
            }
        }
        else if (parentMessageState === ParentMessageStateTypes.INITIALIZED) {
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
    return useMemo(function () {
        if (threadListState === ThreadListStateTypes.NIL
            || threadListState === ThreadListStateTypes.LOADING
            || threadListState === ThreadListStateTypes.INVALID) {
            if (typeof renderThreadListPlaceHolder === 'function') {
                return renderThreadListPlaceHolder(threadListState);
            }
            switch (threadListState) {
                case ThreadListStateTypes.LOADING: {
                    return (React__default.createElement(PlaceHolder, { className: "sendbird-thread-ui__thread-list placeholder-loading", type: PlaceHolderTypes.LOADING, iconSize: "64px" }));
                }
                case ThreadListStateTypes.INVALID: {
                    return (React__default.createElement(PlaceHolder, { className: "sendbird-thread-ui__thread-list placeholder-invalid", type: PlaceHolderTypes.WRONG, iconSize: "64px" }));
                }
                case ThreadListStateTypes.NIL: {
                    return React__default.createElement(React__default.Fragment, null);
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
    var renderHeader = _a.renderHeader, _f = _a.renderParentMessageInfo, renderParentMessageInfo = _f === void 0 ? function () { return React__default.createElement(ParentMessageInfo, { className: "sendbird-thread-ui__parent-message-info" }); } : _f, renderMessage = _a.renderMessage, renderMessageInput = _a.renderMessageInput, renderCustomSeparator = _a.renderCustomSeparator, renderParentMessageInfoPlaceholder = _a.renderParentMessageInfoPlaceholder, renderThreadListPlaceHolder = _a.renderThreadListPlaceHolder, renderFileUploadIcon = _a.renderFileUploadIcon, renderVoiceMessageIcon = _a.renderVoiceMessageIcon, renderSendMessageIcon = _a.renderSendMessageIcon;
    var _g = useSendbirdStateContext(), stores = _g.stores, config = _g.config;
    var currentUserId = (_d = (_c = (_b = stores === null || stores === void 0 ? void 0 : stores.sdkStore) === null || _b === void 0 ? void 0 : _b.sdk) === null || _c === void 0 ? void 0 : _c.currentUser) === null || _d === void 0 ? void 0 : _d.userId;
    var stringSet = useLocalization().stringSet;
    var _h = useThreadContext(), currentChannel = _h.currentChannel, allThreadMessages = _h.allThreadMessages, parentMessage = _h.parentMessage, parentMessageState = _h.parentMessageState, threadListState = _h.threadListState, hasMorePrev = _h.hasMorePrev, hasMoreNext = _h.hasMoreNext, fetchPrevThreads = _h.fetchPrevThreads, fetchNextThreads = _h.fetchNextThreads, onHeaderActionClick = _h.onHeaderActionClick, onMoveToParentMessage = _h.onMoveToParentMessage;
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
    var _j = useState(0), scrollBottom = _j[0], setScrollBottom = _j[1];
    var scrollRef = useRef(null);
    var onScroll = function (e) {
        var _a;
        var element = e.target;
        var scrollTop = element.scrollTop, clientHeight = element.clientHeight, scrollHeight = element.scrollHeight;
        var threadItemNodes = (_a = scrollRef.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.sendbird-thread-list-item');
        var firstNode = threadItemNodes === null || threadItemNodes === void 0 ? void 0 : threadItemNodes[0];
        if (isAboutSame(scrollTop, 0, 10) && hasMorePrev) {
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
        if (isAboutSame(clientHeight + scrollTop, scrollHeight, 10) && hasMoreNext) {
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
    return (React__default.createElement("div", { className: 'sendbird-thread-ui' },
        MemorizedHeader || (React__default.createElement(ThreadHeader, { className: "sendbird-thread-ui__header", channelName: getChannelTitle(currentChannel, currentUserId !== null && currentUserId !== void 0 ? currentUserId : '', stringSet), onActionIconClick: onHeaderActionClick, onChannelNameClick: function () {
                onMoveToParentMessage === null || onMoveToParentMessage === void 0 ? void 0 : onMoveToParentMessage({ message: parentMessage, channel: currentChannel });
            } })),
        React__default.createElement("div", { className: classnames('sendbird-thread-ui--scroll', 'sendbird-conversation__messages'), ref: scrollRef, onScroll: onScroll, dir: getHTMLTextDirection(config === null || config === void 0 ? void 0 : config.htmlTextDirection, config === null || config === void 0 ? void 0 : config.forceLeftToRightMessageLayout) },
            React__default.createElement(MessageProvider, { message: parentMessage, isByMe: isByMe }, MemorizedParentMessageInfo),
            replyCount > 0 && (React__default.createElement("div", { className: "sendbird-thread-ui__reply-counts" },
                React__default.createElement(Label, { type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_3 }, "".concat(replyCount, " ").concat(replyCount > 1 ? stringSet.THREAD__THREAD_REPLIES : stringSet.THREAD__THREAD_REPLY)))),
            MemorizedThreadList || (React__default.createElement(ThreadList, { className: "sendbird-thread-ui__thread-list", renderMessage: renderMessage, renderCustomSeparator: renderCustomSeparator, scrollRef: scrollRef, scrollBottom: scrollBottom }))),
        (renderMessageInput === null || renderMessageInput === void 0 ? void 0 : renderMessageInput()) || (React__default.createElement(ThreadMessageInput, { className: "sendbird-thread-ui__message-input", renderFileUploadIcon: renderFileUploadIcon, renderVoiceMessageIcon: renderVoiceMessageIcon, renderSendMessageIcon: renderSendMessageIcon }))));
};

export { ThreadUI as default };
//# sourceMappingURL=ThreadUI.js.map
