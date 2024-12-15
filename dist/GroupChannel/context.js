import { _ as __assign, a as __awaiter, b as __generator } from '../chunks/bundle-Ck-Lg2K3.js';
import React__default, { useRef, useState, useLayoutEffect, useCallback, useMemo, useEffect, useContext } from 'react';
import { MessageMetaArray, ReplyType } from '@sendbird/chat/message';
import { MessageFilter } from '@sendbird/chat/groupChannel';
import { useIIFE, useGroupChannelMessages, useAsyncEffect, useAsyncLayoutEffect, usePreservedCallback } from '@sendbird/uikit-tools';
import { U as UserProfileProvider } from '../chunks/bundle-C3toIOqd.js';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import { u as useToggleReactionCallback } from '../chunks/bundle-oJ6bQnA_.js';
import { g as getCaseResolvedReplyType, a as getCaseResolvedThreadReplySelectType } from '../chunks/bundle-yYNXeh2L.js';
import { d as isContextMenuClosed, e as getMessageTopOffset } from '../chunks/bundle-BT00z1C1.js';
import { p as pubSubFactory } from '../chunks/bundle--SXvYGPR.js';
import { P as PUBSUB_TOPICS, b as PublishingModuleType, p as pubSubTopics } from '../chunks/bundle-YOpvheAB.js';
import { K } from '../chunks/bundle-BL0uQSu6.js';
import { e as VOICE_MESSAGE_FILE_NAME, a as VOICE_MESSAGE_MIME_TYPE, M as META_ARRAY_VOICE_DURATION_KEY, f as META_ARRAY_MESSAGE_TYPE_KEY, g as META_ARRAY_MESSAGE_TYPE_VALUE__VOICE } from '../chunks/bundle-DgxVBBM3.js';
import { g as getIsReactionEnabled } from '../chunks/bundle-2HULaUfY.js';
export { T as ThreadReplySelectType } from '../chunks/bundle-DAH20nmQ.js';
import '../withSendbird.js';
import '../chunks/bundle-ptS-tNRF.js';
import '../chunks/bundle-pQHYhigr.js';
import 'react-dom';
import '../chunks/bundle-CbLNLMef.js';
import '../chunks/bundle-B80WXNZi.js';
import '../chunks/bundle-Bk1oUUzJ.js';
import '../ui/IconButton.js';
import '../ui/Button.js';
import '../chunks/bundle-Di0Zwz2X.js';
import '../ui/Icon.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../chunks/bundle-gMJSD9hQ.js';
import '@sendbird/chat/openChannel';
import '../chunks/bundle-CHD1aKHO.js';
import '../chunks/bundle-fwRBR_Yw.js';
import '../chunks/bundle-A5WEPjt6.js';
import '../ui/SortByRow.js';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-CnkNoe49.js';

function useMessageListScroll(behavior, deps) {
    if (deps === void 0) { deps = []; }
    var scrollRef = useRef(null);
    var scrollPositionRef = useRef(0);
    var scrollDistanceFromBottomRef = useRef(0);
    var scrollPubSub = useState(function () { return pubSubFactory({ publishSynchronous: true }); })[0];
    var _a = useState(true), isScrollBottomReached = _a[0], setIsScrollBottomReached = _a[1];
    // SideEffect: Reset scroll state
    useLayoutEffect(function () {
        scrollPositionRef.current = 0;
        scrollDistanceFromBottomRef.current = 0;
        setIsScrollBottomReached(true);
        if (scrollRef.current)
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, deps);
    useLayoutEffect(function () {
        var unsubscribes = [];
        unsubscribes.push(scrollPubSub.subscribe('scrollToBottom', function (_a) {
            var resolve = _a.resolve, animated = _a.animated;
            runCallback(function () {
                if (!scrollRef.current) {
                    if (resolve)
                        resolve();
                    return;
                }
                if (scrollRef.current.scroll) {
                    scrollRef.current.scroll({ top: scrollRef.current.scrollHeight, behavior: getScrollBehavior(behavior, animated) });
                }
                else {
                    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
                }
                // Update data by manual update
                scrollDistanceFromBottomRef.current = 0;
                setIsScrollBottomReached(true);
                if (resolve)
                    resolve();
            });
        }));
        unsubscribes.push(scrollPubSub.subscribe('scroll', function (_a) {
            var top = _a.top, animated = _a.animated, lazy = _a.lazy, resolve = _a.resolve;
            runCallback(function () {
                if (!scrollRef.current)
                    return;
                var _a = scrollRef.current, scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
                if (scrollRef.current.scroll) {
                    scrollRef.current.scroll({ top: top, behavior: getScrollBehavior(behavior, animated) });
                }
                else if (typeof top === 'number') {
                    scrollRef.current.scrollTop = top;
                }
                // Update data by manual update
                scrollDistanceFromBottomRef.current = Math.max(0, scrollHeight - scrollTop - clientHeight);
                setIsScrollBottomReached(scrollDistanceFromBottomRef.current === 0);
                if (resolve)
                    resolve();
            }, lazy);
        }));
        return function () {
            unsubscribes.forEach(function (_a) {
                var remove = _a.remove;
                return remove();
            });
        };
    }, [behavior]);
    return {
        scrollRef: scrollRef,
        scrollPubSub: scrollPubSub,
        isScrollBottomReached: isScrollBottomReached,
        setIsScrollBottomReached: setIsScrollBottomReached,
        scrollDistanceFromBottomRef: scrollDistanceFromBottomRef,
        scrollPositionRef: scrollPositionRef,
    };
}
function runCallback(callback, lazy) {
    if (lazy === void 0) { lazy = true; }
    if (lazy) {
        setTimeout(function () {
            callback();
        });
    }
    else {
        callback();
    }
}
function getScrollBehavior(behavior, animated) {
    if (typeof animated === 'boolean')
        return animated ? 'smooth' : 'auto';
    return behavior;
}

var pass = function (value) { return value; };
/**
 * @description This hook controls common processes related to message sending, updating.
 * */
function useMessageActions(params) {
    var _this = this;
    var _a = params.onBeforeSendUserMessage, onBeforeSendUserMessage = _a === void 0 ? pass : _a, _b = params.onBeforeSendFileMessage, onBeforeSendFileMessage = _b === void 0 ? pass : _b, _c = params.onBeforeUpdateUserMessage, onBeforeUpdateUserMessage = _c === void 0 ? pass : _c, _d = params.onBeforeSendVoiceMessage, onBeforeSendVoiceMessage = _d === void 0 ? pass : _d, _e = params.onBeforeSendMultipleFilesMessage, onBeforeSendMultipleFilesMessage = _e === void 0 ? pass : _e, sendFileMessage = params.sendFileMessage, sendMultipleFilesMessage = params.sendMultipleFilesMessage, sendUserMessage = params.sendUserMessage, updateUserMessage = params.updateUserMessage, scrollToBottom = params.scrollToBottom, quoteMessage = params.quoteMessage, replyType = params.replyType, channel = params.channel, pubSub = params.pubSub;
    var eventHandlers = useSendbirdStateContext().eventHandlers;
    var buildInternalMessageParams = useCallback(function (basicParams) {
        var messageParams = __assign({}, basicParams);
        if (params.quoteMessage && replyType !== 'NONE') {
            messageParams.isReplyToChannel = true;
            messageParams.parentMessageId = quoteMessage === null || quoteMessage === void 0 ? void 0 : quoteMessage.messageId;
        }
        return messageParams;
    }, [replyType, quoteMessage]);
    // This is a hack for the hotfix of following issue
    // https://sendbird.atlassian.net/browse/SBISSUE-17029
    var asyncScrollToBottom = useCallback(function () {
        setTimeout(scrollToBottom, 0);
    }, []);
    var processParams = useCallback(function (handler, params, type) { return __awaiter(_this, void 0, void 0, function () {
        var result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, handler(params)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, (result === undefined ? params : result)];
                case 2:
                    error_1 = _a.sent();
                    if (typeof (eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.message) === 'object') {
                        K(type)
                            .with('file', 'voice', function () {
                            var _a, _b, _c, _d;
                            if (params.file) {
                                (_b = (_a = eventHandlers.message).onFileUploadFailed) === null || _b === void 0 ? void 0 : _b.call(_a, error_1);
                            }
                            (_d = (_c = eventHandlers.message).onSendMessageFailed) === null || _d === void 0 ? void 0 : _d.call(_c, params, error_1);
                        })
                            .with('multipleFiles', function () {
                            var _a, _b, _c, _d;
                            if (params.fileInfoList) {
                                (_b = (_a = eventHandlers.message).onFileUploadFailed) === null || _b === void 0 ? void 0 : _b.call(_a, error_1);
                            }
                            (_d = (_c = eventHandlers.message).onSendMessageFailed) === null || _d === void 0 ? void 0 : _d.call(_c, params, error_1);
                        })
                            .with('user', function () {
                            var _a, _b;
                            (_b = (_a = eventHandlers.message).onSendMessageFailed) === null || _b === void 0 ? void 0 : _b.call(_a, params, error_1);
                        })
                            .with('update', function () {
                            var _a, _b;
                            (_b = (_a = eventHandlers.message).onUpdateMessageFailed) === null || _b === void 0 ? void 0 : _b.call(_a, params, error_1);
                        })
                            .exhaustive();
                    }
                    throw error_1;
                case 3: return [2 /*return*/];
            }
        });
    }); }, [eventHandlers]);
    return {
        sendUserMessage: useCallback(function (params) { return __awaiter(_this, void 0, void 0, function () {
            var internalParams, processedParams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        internalParams = buildInternalMessageParams(params);
                        return [4 /*yield*/, processParams(onBeforeSendUserMessage, internalParams, 'user')];
                    case 1:
                        processedParams = _a.sent();
                        return [2 /*return*/, sendUserMessage(processedParams, asyncScrollToBottom)];
                }
            });
        }); }, [buildInternalMessageParams, sendUserMessage, scrollToBottom, processParams]),
        sendFileMessage: useCallback(function (params) { return __awaiter(_this, void 0, void 0, function () {
            var internalParams, processedParams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        internalParams = buildInternalMessageParams(params);
                        return [4 /*yield*/, processParams(onBeforeSendFileMessage, internalParams, 'file')];
                    case 1:
                        processedParams = _a.sent();
                        return [2 /*return*/, sendFileMessage(processedParams, asyncScrollToBottom)];
                }
            });
        }); }, [buildInternalMessageParams, sendFileMessage, scrollToBottom, processParams]),
        sendMultipleFilesMessage: useCallback(function (params) { return __awaiter(_this, void 0, void 0, function () {
            var internalParams, processedParams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        internalParams = buildInternalMessageParams(params);
                        return [4 /*yield*/, processParams(onBeforeSendMultipleFilesMessage, internalParams, 'multipleFiles')];
                    case 1:
                        processedParams = _a.sent();
                        return [2 /*return*/, sendMultipleFilesMessage(processedParams, asyncScrollToBottom)];
                }
            });
        }); }, [buildInternalMessageParams, sendMultipleFilesMessage, scrollToBottom, processParams]),
        sendVoiceMessage: useCallback(function (params, duration) { return __awaiter(_this, void 0, void 0, function () {
            var internalParams, processedParams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        internalParams = buildInternalMessageParams(__assign(__assign({}, params), { fileName: VOICE_MESSAGE_FILE_NAME, mimeType: VOICE_MESSAGE_MIME_TYPE, metaArrays: [
                                new MessageMetaArray({
                                    key: META_ARRAY_VOICE_DURATION_KEY,
                                    value: ["".concat(duration)],
                                }),
                                new MessageMetaArray({
                                    key: META_ARRAY_MESSAGE_TYPE_KEY,
                                    value: [META_ARRAY_MESSAGE_TYPE_VALUE__VOICE],
                                }),
                            ] }));
                        return [4 /*yield*/, processParams(onBeforeSendVoiceMessage, internalParams, 'voice')];
                    case 1:
                        processedParams = _a.sent();
                        return [2 /*return*/, sendFileMessage(processedParams, asyncScrollToBottom)];
                }
            });
        }); }, [buildInternalMessageParams, sendFileMessage, scrollToBottom, processParams]),
        updateUserMessage: useCallback(function (messageId, params) { return __awaiter(_this, void 0, void 0, function () {
            var internalParams, processedParams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        internalParams = buildInternalMessageParams(params);
                        return [4 /*yield*/, processParams(onBeforeUpdateUserMessage, internalParams, 'update')];
                    case 1:
                        processedParams = _a.sent();
                        return [2 /*return*/, updateUserMessage(messageId, processedParams)
                                .then(function (message) {
                                pubSub.publish(PUBSUB_TOPICS.UPDATE_USER_MESSAGE, {
                                    channel: channel,
                                    message: message,
                                    publishingModules: [PublishingModuleType.CHANNEL],
                                });
                                return message;
                            })];
                }
            });
        }); }, [buildInternalMessageParams, updateUserMessage, processParams, channel === null || channel === void 0 ? void 0 : channel.url]),
    };
}

var GroupChannelContext = React__default.createContext(null);
var GroupChannelProvider = function (props) {
    var channelUrl = props.channelUrl, children = props.children, moduleReactionEnabled = props.isReactionEnabled, moduleReplyType = props.replyType, moduleThreadReplySelectType = props.threadReplySelectType, _a = props.isMessageGroupingEnabled, isMessageGroupingEnabled = _a === void 0 ? true : _a, isMultipleFilesMessageEnabled = props.isMultipleFilesMessageEnabled, showSearchIcon = props.showSearchIcon, _b = props.disableMarkAsRead, disableMarkAsRead = _b === void 0 ? false : _b, _c = props.scrollBehavior, scrollBehavior = _c === void 0 ? 'auto' : _c, startingPoint = props.startingPoint, _animatedMessageId = props.animatedMessageId, messageListQueryParams = props.messageListQueryParams, onBeforeSendUserMessage = props.onBeforeSendUserMessage, onBeforeSendFileMessage = props.onBeforeSendFileMessage, onBeforeSendVoiceMessage = props.onBeforeSendVoiceMessage, onBeforeSendMultipleFilesMessage = props.onBeforeSendMultipleFilesMessage, onBeforeUpdateUserMessage = props.onBeforeUpdateUserMessage, onBeforeDownloadFileMessage = props.onBeforeDownloadFileMessage, onMessageAnimated = props.onMessageAnimated, onBackClick = props.onBackClick, onChatHeaderActionClick = props.onChatHeaderActionClick, onReplyInThreadClick = props.onReplyInThreadClick, onSearchClick = props.onSearchClick, onQuoteMessageClick = props.onQuoteMessageClick, renderUserMentionItem = props.renderUserMentionItem, filterEmojiCategoryIds = props.filterEmojiCategoryIds;
    // Global context
    var _d = useSendbirdStateContext(), config = _d.config, stores = _d.stores;
    var sdkStore = stores.sdkStore;
    var markAsReadScheduler = config.markAsReadScheduler, logger = config.logger;
    // State
    var _e = useState(null), quoteMessage = _e[0], setQuoteMessage = _e[1];
    var _f = useState(null), animatedMessageId = _f[0], setAnimatedMessageId = _f[1];
    var _g = useState(null), currentChannel = _g[0], setCurrentChannel = _g[1];
    var _h = useState(null), fetchChannelError = _h[0], setFetchChannelError = _h[1];
    // Ref
    var _j = useMessageListScroll(scrollBehavior, [currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url]), scrollRef = _j.scrollRef, scrollPubSub = _j.scrollPubSub, scrollDistanceFromBottomRef = _j.scrollDistanceFromBottomRef, isScrollBottomReached = _j.isScrollBottomReached, setIsScrollBottomReached = _j.setIsScrollBottomReached, scrollPositionRef = _j.scrollPositionRef;
    var messageInputRef = useRef(null);
    var toggleReaction = useToggleReactionCallback(currentChannel, logger);
    var replyType = getCaseResolvedReplyType(moduleReplyType !== null && moduleReplyType !== void 0 ? moduleReplyType : config.groupChannel.replyType).upperCase;
    var threadReplySelectType = getCaseResolvedThreadReplySelectType(moduleThreadReplySelectType !== null && moduleThreadReplySelectType !== void 0 ? moduleThreadReplySelectType : config.groupChannel.threadReplySelectType).upperCase;
    var chatReplyType = useIIFE(function () {
        if (replyType === 'NONE')
            return ReplyType.NONE;
        return ReplyType.ONLY_REPLY_TO_CHANNEL;
    });
    var isReactionEnabled = getIsReactionEnabled({
        channel: currentChannel,
        config: config,
        moduleLevel: moduleReactionEnabled,
    });
    var nicknamesMap = useMemo(function () { var _a; return new Map(((_a = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.members) !== null && _a !== void 0 ? _a : []).map(function (_a) {
        var userId = _a.userId, nickname = _a.nickname;
        return [userId, nickname];
    })); }, [currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.members]);
    var messageDataSource = useGroupChannelMessages(sdkStore.sdk, currentChannel, {
        startingPoint: startingPoint,
        replyType: chatReplyType,
        collectionCreator: getCollectionCreator(currentChannel, messageListQueryParams),
        shouldCountNewMessages: function () { return !isScrollBottomReached; },
        markAsRead: function (channels) {
            if (isScrollBottomReached && !disableMarkAsRead) {
                channels.forEach(function (it) { return markAsReadScheduler.push(it); });
            }
        },
        onMessagesReceived: function () {
            // FIXME: onMessagesReceived called with onApiResult
            if (isScrollBottomReached && isContextMenuClosed()) {
                setTimeout(function () {
                    scrollPubSub.publish('scrollToBottom', {});
                }, 10);
            }
        },
        onChannelDeleted: function () {
            setCurrentChannel(null);
            setFetchChannelError(null);
            onBackClick === null || onBackClick === void 0 ? void 0 : onBackClick();
        },
        onCurrentUserBanned: function () {
            setCurrentChannel(null);
            setFetchChannelError(null);
            onBackClick === null || onBackClick === void 0 ? void 0 : onBackClick();
        },
        onChannelUpdated: function (channel) { return setCurrentChannel(channel); },
        logger: logger,
    });
    // SideEffect: Fetch and set to current channel by channelUrl prop.
    useAsyncEffect(function () { return __awaiter(void 0, void 0, void 0, function () {
        var channel, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(sdkStore.initialized && channelUrl)) return [3 /*break*/, 5];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, sdkStore.sdk.groupChannel.getChannel(channelUrl)];
                case 2:
                    channel = _b.sent();
                    setCurrentChannel(channel);
                    setFetchChannelError(null);
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _b.sent();
                    setCurrentChannel(null);
                    setFetchChannelError(error_1);
                    (_a = logger === null || logger === void 0 ? void 0 : logger.error) === null || _a === void 0 ? void 0 : _a.call(logger, 'GroupChannelProvider: error when fetching channel', error_1);
                    return [3 /*break*/, 5];
                case 4:
                    // Reset states when channel changes
                    setQuoteMessage(null);
                    setAnimatedMessageId(null);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [sdkStore.initialized, sdkStore.sdk, channelUrl]);
    // SideEffect: Scroll to the bottom
    //  - On the initialized message list
    //  - On messages sent from the thread
    useAsyncLayoutEffect(function () { return __awaiter(void 0, void 0, void 0, function () {
        var onSentMessageFromOtherModule, subscribes;
        return __generator(this, function (_a) {
            if (messageDataSource.initialized) {
                scrollPubSub.publish('scrollToBottom', {});
            }
            onSentMessageFromOtherModule = function (data) {
                if (data.channel.url === (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url))
                    scrollPubSub.publish('scrollToBottom', {});
            };
            subscribes = [
                config.pubSub.subscribe(pubSubTopics.SEND_USER_MESSAGE, onSentMessageFromOtherModule),
                config.pubSub.subscribe(pubSubTopics.SEND_FILE_MESSAGE, onSentMessageFromOtherModule),
            ];
            return [2 /*return*/, function () {
                    subscribes.forEach(function (subscribe) { return subscribe.remove(); });
                }];
        });
    }); }, [messageDataSource.initialized, currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url]);
    // SideEffect: Reset MessageCollection with startingPoint prop.
    useEffect(function () {
        if (typeof startingPoint === 'number') {
            // We do not handle animation for message search here.
            // Please update the animatedMessageId prop to trigger the animation.
            scrollToMessage(startingPoint, 0, false, false);
        }
    }, [startingPoint]);
    // SideEffect: Update animatedMessageId prop to state.
    useEffect(function () {
        if (_animatedMessageId)
            setAnimatedMessageId(_animatedMessageId);
    }, [_animatedMessageId]);
    var scrollToBottom = usePreservedCallback(function (animated) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!scrollRef.current)
                        return [2 /*return*/];
                    setAnimatedMessageId(null);
                    setIsScrollBottomReached(true);
                    if (!(config.isOnline && messageDataSource.hasNext())) return [3 /*break*/, 2];
                    return [4 /*yield*/, messageDataSource.resetWithStartingPoint(Number.MAX_SAFE_INTEGER)];
                case 1:
                    _a.sent();
                    scrollPubSub.publish('scrollToBottom', { animated: animated });
                    return [3 /*break*/, 3];
                case 2:
                    scrollPubSub.publish('scrollToBottom', { animated: animated });
                    _a.label = 3;
                case 3:
                    if (currentChannel && !messageDataSource.hasNext()) {
                        messageDataSource.resetNewMessages();
                        if (!disableMarkAsRead)
                            markAsReadScheduler.push(currentChannel);
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    var scrollToMessage = usePreservedCallback(function (createdAt, messageId, messageFocusAnimated, scrollAnimated) { return __awaiter(void 0, void 0, void 0, function () {
        var element, parentNode, clickHandler, message, topOffset;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    element = scrollRef.current;
                    parentNode = element === null || element === void 0 ? void 0 : element.parentNode;
                    clickHandler = {
                        activate: function () {
                            if (!element || !parentNode)
                                return;
                            element.style.pointerEvents = 'auto';
                            parentNode.style.cursor = 'auto';
                        },
                        deactivate: function () {
                            if (!element || !parentNode)
                                return;
                            element.style.pointerEvents = 'none';
                            parentNode.style.cursor = 'wait';
                        },
                    };
                    clickHandler.deactivate();
                    setAnimatedMessageId(null);
                    message = messageDataSource.messages.find(function (it) { return it.messageId === messageId || it.createdAt === createdAt; });
                    if (!message) return [3 /*break*/, 1];
                    topOffset = getMessageTopOffset(message.createdAt);
                    if (topOffset)
                        scrollPubSub.publish('scroll', { top: topOffset, animated: scrollAnimated });
                    if (messageFocusAnimated !== null && messageFocusAnimated !== void 0 ? messageFocusAnimated : true)
                        setAnimatedMessageId(messageId);
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, messageDataSource.resetWithStartingPoint(createdAt)];
                case 2:
                    _a.sent();
                    setTimeout(function () {
                        var topOffset = getMessageTopOffset(createdAt);
                        if (topOffset)
                            scrollPubSub.publish('scroll', { top: topOffset, lazy: false, animated: scrollAnimated });
                        if (messageFocusAnimated !== null && messageFocusAnimated !== void 0 ? messageFocusAnimated : true)
                            setAnimatedMessageId(messageId);
                    });
                    _a.label = 3;
                case 3:
                    clickHandler.activate();
                    return [2 /*return*/];
            }
        });
    }); });
    var messageActions = useMessageActions(__assign(__assign(__assign({}, props), messageDataSource), { scrollToBottom: scrollToBottom, quoteMessage: quoteMessage, replyType: replyType, pubSub: config.pubSub, channel: currentChannel }));
    return (React__default.createElement(GroupChannelContext.Provider, { value: __assign(__assign({ 
            // # Props
            channelUrl: channelUrl, isReactionEnabled: isReactionEnabled, isMessageGroupingEnabled: isMessageGroupingEnabled, isMultipleFilesMessageEnabled: isMultipleFilesMessageEnabled, showSearchIcon: showSearchIcon !== null && showSearchIcon !== void 0 ? showSearchIcon : config.groupChannelSettings.enableMessageSearch, replyType: replyType, threadReplySelectType: threadReplySelectType, disableMarkAsRead: disableMarkAsRead, scrollBehavior: scrollBehavior, 
            // # Custom Props
            messageListQueryParams: messageListQueryParams, 
            // ## Message
            onBeforeSendUserMessage: onBeforeSendUserMessage, onBeforeSendFileMessage: onBeforeSendFileMessage, onBeforeSendVoiceMessage: onBeforeSendVoiceMessage, onBeforeSendMultipleFilesMessage: onBeforeSendMultipleFilesMessage, onBeforeUpdateUserMessage: onBeforeUpdateUserMessage, onBeforeDownloadFileMessage: onBeforeDownloadFileMessage, 
            // ## Focusing
            onMessageAnimated: onMessageAnimated, 
            // ## Click
            onBackClick: onBackClick, onChatHeaderActionClick: onChatHeaderActionClick, onReplyInThreadClick: onReplyInThreadClick, onSearchClick: onSearchClick, onQuoteMessageClick: onQuoteMessageClick, 
            // ## Custom render
            renderUserMentionItem: renderUserMentionItem, filterEmojiCategoryIds: filterEmojiCategoryIds, 
            // Internal Interface
            currentChannel: currentChannel, fetchChannelError: fetchChannelError, nicknamesMap: nicknamesMap, scrollRef: scrollRef, scrollDistanceFromBottomRef: scrollDistanceFromBottomRef, scrollPositionRef: scrollPositionRef, scrollPubSub: scrollPubSub, messageInputRef: messageInputRef, quoteMessage: quoteMessage, setQuoteMessage: setQuoteMessage, animatedMessageId: animatedMessageId, setAnimatedMessageId: setAnimatedMessageId, isScrollBottomReached: isScrollBottomReached, setIsScrollBottomReached: setIsScrollBottomReached, scrollToBottom: scrollToBottom, scrollToMessage: scrollToMessage, toggleReaction: toggleReaction }, messageDataSource), messageActions) },
        React__default.createElement(UserProfileProvider, __assign({}, props), children)));
};
var useGroupChannelContext = function () {
    var context = useContext(GroupChannelContext);
    if (!context)
        throw new Error('GroupChannelContext not found. Use within the GroupChannel module.');
    return context;
};
function getCollectionCreator(groupChannel, messageListQueryParams) {
    return function (defaultParams) {
        var params = __assign(__assign(__assign({}, defaultParams), { prevResultLimit: 30, nextResultLimit: 30 }), messageListQueryParams);
        return groupChannel.createMessageCollection(__assign(__assign({}, params), { filter: new MessageFilter(params) }));
    };
}

export { GroupChannelContext, GroupChannelProvider, useGroupChannelContext };
//# sourceMappingURL=context.js.map
