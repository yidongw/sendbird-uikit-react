'use strict';

var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var LocalizationContext = require('../../chunks/bundle-CmBrGegh.js');
var utils = require('../../chunks/bundle-CMB26qvu.js');
var Thread_context = require('../context.js');
var Thread_components_ParentMessageInfo = require('./ParentMessageInfo.js');
var Thread_components_ThreadHeader = require('./ThreadHeader.js');
var Thread_components_ThreadList = require('./ThreadList.js');
var Thread_components_ThreadMessageInput = require('./ThreadMessageInput.js');
var Thread_context_types = require('../context/types.js');
var ui_PlaceHolder = require('../../ui/PlaceHolder.js');
var ui_Label = require('../../chunks/bundle-D8-2bEdY.js');
var useSendMultipleFilesMessage = require('../../chunks/bundle-DrPixXq9.js');
var Message_context = require('../../Message/context.js');
var index = require('../../chunks/bundle-e2d_I3io.js');
var utils$1 = require('../../chunks/bundle-BYHj6UqH.js');
require('../../withSendbird.js');
require('../../chunks/bundle-DRvomNLJ.js');
require('../../chunks/bundle-Q9YDOzjz.js');
require('../../chunks/bundle-Bn25Hepq.js');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-DfISCDoH.js');
require('react-dom');
require('../../chunks/bundle-CzcmYPsN.js');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../ui/Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-2M4zbjEc.js');
require('../../chunks/bundle-C0tdWwa4.js');
require('../../chunks/bundle-4kwoH67w.js');
require('../../chunks/bundle-BYSQ-mQr.js');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-Dcn1Gf-8.js');
require('../../chunks/bundle-XTn8OOwy.js');
require('../../chunks/bundle-DrXG_ZI5.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-C3e9xkw6.js');
require('../../chunks/bundle-BCJ8mayg.js');
require('../../chunks/bundle-Dt82hn3m.js');
require('../../chunks/bundle-M6Urrta6.js');
require('./ParentMessageInfoItem.js');
require('../../ui/ImageRenderer.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-LSLwWEwG.js');
require('../../ui/EmojiReactions.js');
require('../../ui/ReactionBadge.js');
require('../../ui/ReactionButton.js');
require('../../chunks/bundle-CrV-FZvi.js');
require('../../ui/BottomSheet.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../ui/UserListItem.js');
require('../../chunks/bundle-Dmsb_oex.js');
require('../../chunks/bundle-BvFqbvri.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../chunks/bundle-Dim56WjD.js');
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
require('../../ui/FileViewer.js');
require('../../chunks/bundle-XkouAzOQ.js');
require('../../chunks/bundle-CIP3LaaL.js');
require('../../chunks/bundle-BnciA98a.js');
require('../../chunks/bundle-3ucLy5RS.js');
require('../../chunks/bundle-CxDaflMi.js');
require('../../chunks/bundle-CsHnjhet.js');
require('../../ui/MessageItemReactionMenu.js');
require('../../ui/MessageInput.js');
require('../../chunks/bundle-C9DxbvFZ.js');
require('dompurify');
require('../../chunks/bundle-DhOkJsb_.js');
require('../../chunks/bundle-BHlqknCd.js');
require('../../chunks/bundle-tu3X3qzD.js');
require('../../chunks/bundle-Dke6QHpR.js');
require('../../ui/MobileMenu.js');
require('../../Message/hooks/useDirtyGetMentions.js');
require('../../chunks/bundle-DL9pw4YL.js');
require('../../chunks/bundle-CDQSndVh.js');
require('../../chunks/bundle-DS66lTJo.js');
require('../../ui/Header.js');
require('./ThreadListItem.js');
require('../../ui/DateSeparator.js');
require('../../chunks/bundle-C8j790_0.js');
require('../../chunks/bundle-DSQevcAL.js');
require('../../chunks/bundle-BayL2H8_.js');
require('../../chunks/bundle-DE83rtdv.js');
require('../../ui/OGMessageItemBody.js');
require('../../ui/TextMessageItemBody.js');
require('../../ui/FileMessageItemBody.js');
require('../../ui/ThumbnailMessageItemBody.js');
require('../../chunks/bundle-CMe3c_v7.js');
require('../../ui/UnknownMessageItemBody.js');
require('../../ui/TemplateMessageItemBody.js');
require('../../chunks/bundle-TKyDCiE_.js');
require('../../ui/FallbackTemplateMessageItemBody.tsx.js');
require('../../ui/LoadingTemplateMessageItemBody.tsx.js');
require('../../ui/MessageFeedbackFailedModal.js');
require('../../chunks/bundle-CRtS_Hdn.js');
require('../../Channel/utils/compareMessagesForGrouping.js');
require('date-fns');
require('../../chunks/bundle-goPOCuqE.js');
require('../../GroupChannel/components/SuggestedMentionList.js');
require('../../ui/QuoteMessageInput.js');
require('../../VoiceRecorder/useVoiceRecorder.js');
require('../../chunks/bundle-DLUxBAy9.js');
require('../../chunks/bundle-Ivv-MORg.js');
require('../../GroupChannel/context.js');
require('../../chunks/bundle-DkZ8dvkY.js');
require('../../chunks/bundle-DKimAemH.js');
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
