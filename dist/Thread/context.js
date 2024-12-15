import { _ as __assign, c as __spreadArray, a as __awaiter, b as __generator } from '../chunks/bundle-HcNswZ5p.js';
import React__default, { useEffect, useCallback, useReducer, useMemo } from 'react';
import { c as compareIds, s as scrollIntoLast, g as getParentMessageFrom, u as useSendMultipleFilesMessage, a as getNicknamesMapFromMembers } from '../chunks/bundle-B43UOaqG.js';
import { U as UserProfileProvider } from '../chunks/bundle-B91Bhfde.js';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import { ChannelStateTypes, ThreadListStateTypes, ParentMessageStateTypes } from './context/types.js';
import { ChannelType } from '@sendbird/chat';
import { p as pubSubTopics, a as shouldPubSubPublishToThread, P as PUBSUB_TOPICS, b as PublishingModuleType } from '../chunks/bundle-BwmZGijR.js';
import { s as ON_FILE_INFO_UPLOADED, t as ON_TYPING_STATUS_UPDATED } from '../chunks/bundle-DDTq-6FS.js';
import { GroupChannelHandler } from '@sendbird/chat/groupChannel';
import { u as uuidv4 } from '../chunks/bundle-C5iY_IvV.js';
import { c as compareIds$1 } from '../chunks/bundle-zVlBKrSk.js';
import { MessageType, SendingStatus, MessageMetaArray } from '@sendbird/chat/message';
import '../chunks/bundle-DhMUg-L7.js';
import { d as SCROLL_BOTTOM_DELAY_FOR_SEND, e as VOICE_MESSAGE_FILE_NAME, a as VOICE_MESSAGE_MIME_TYPE, M as META_ARRAY_VOICE_DURATION_KEY, f as META_ARRAY_MESSAGE_TYPE_KEY, g as META_ARRAY_MESSAGE_TYPE_VALUE__VOICE } from '../chunks/bundle-DQk0aENq.js';
import '../chunks/bundle-D-F3KakE.js';
import '../utils/message/getOutgoingMessageState.js';
import '@sendbird/uikit-tools';
import '../withSendbird.js';
import '../chunks/bundle-ja8H3E0K.js';
import '../chunks/bundle-Bd-i99nk.js';
import '../chunks/bundle-DjLJFwD7.js';
import '../chunks/bundle-DB7YSrIT.js';
import '../chunks/bundle-0WaCg6X7.js';
import 'react-dom';
import '../chunks/bundle-DnSobLtx.js';
import '../ui/IconButton.js';
import '../ui/Button.js';
import '../chunks/bundle-Qkp2VIaZ.js';
import '../chunks/bundle-dybWaw0v.js';
import '../ui/Icon.js';
import 'css-vars-ponyfill';
import '@sendbird/chat/openChannel';
import '../chunks/bundle-zy1mnw8U.js';
import '../chunks/bundle-BKzcG-aC.js';
import '../ui/SortByRow.js';

var PREV_THREADS_FETCH_SIZE = 30;
var NEXT_THREADS_FETCH_SIZE = 30;

var ThreadContextActionTypes;
(function (ThreadContextActionTypes) {
    // initialize
    ThreadContextActionTypes["INIT_USER_ID"] = "INIT_USER_ID";
    // channel
    ThreadContextActionTypes["GET_CHANNEL_START"] = "GET_CHANNEL_START";
    ThreadContextActionTypes["GET_CHANNEL_SUCCESS"] = "GET_CHANNEL_SUCCESS";
    ThreadContextActionTypes["GET_CHANNEL_FAILURE"] = "GET_CHANNEL_FAILURE";
    // emojis
    ThreadContextActionTypes["SET_EMOJI_CONTAINER"] = "SET_EMOJI_CONTAINER";
    // parent message
    ThreadContextActionTypes["GET_PARENT_MESSAGE_START"] = "GET_PARENT_MESSAGE_START";
    ThreadContextActionTypes["GET_PARENT_MESSAGE_SUCCESS"] = "GET_PARENT_MESSAGE_SUCCESS";
    ThreadContextActionTypes["GET_PARENT_MESSAGE_FAILURE"] = "GET_PARENT_MESSAGE_FAILURE";
    // fetch threads
    ThreadContextActionTypes["INITIALIZE_THREAD_LIST_START"] = "INITIALIZE_THREAD_LIST_START";
    ThreadContextActionTypes["INITIALIZE_THREAD_LIST_SUCCESS"] = "INITIALIZE_THREAD_LIST_SUCCESS";
    ThreadContextActionTypes["INITIALIZE_THREAD_LIST_FAILURE"] = "INITIALIZE_THREAD_LIST_FAILURE";
    ThreadContextActionTypes["GET_PREV_MESSAGES_START"] = "GET_PREV_MESSAGES_START";
    ThreadContextActionTypes["GET_PREV_MESSAGES_SUCESS"] = "GET_PREV_MESSAGES_SUCESS";
    ThreadContextActionTypes["GET_PREV_MESSAGES_FAILURE"] = "GET_PREV_MESSAGES_FAILURE";
    ThreadContextActionTypes["GET_NEXT_MESSAGES_START"] = "GET_NEXT_MESSAGES_START";
    ThreadContextActionTypes["GET_NEXT_MESSAGES_SUCESS"] = "GET_NEXT_MESSAGES_SUCESS";
    ThreadContextActionTypes["GET_NEXT_MESSAGES_FAILURE"] = "GET_NEXT_MESSAGES_FAILURE";
    // handle messages
    ThreadContextActionTypes["SEND_MESSAGE_START"] = "SEND_MESSAGE_START";
    ThreadContextActionTypes["SEND_MESSAGE_SUCESS"] = "SEND_MESSAGE_SUCESS";
    ThreadContextActionTypes["SEND_MESSAGE_FAILURE"] = "SEND_MESSAGE_FAILURE";
    ThreadContextActionTypes["RESEND_MESSAGE_START"] = "RESEND_MESSAGE_START";
    ThreadContextActionTypes["ON_MESSAGE_DELETED_BY_REQ_ID"] = "ON_MESSAGE_DELETED_BY_REQ_ID";
    // event handlers - message status change
    ThreadContextActionTypes["ON_MESSAGE_RECEIVED"] = "ON_MESSAGE_RECEIVED";
    ThreadContextActionTypes["ON_MESSAGE_UPDATED"] = "ON_MESSAGE_UPDATED";
    ThreadContextActionTypes["ON_MESSAGE_DELETED"] = "ON_MESSAGE_DELETED";
    ThreadContextActionTypes["ON_REACTION_UPDATED"] = "ON_REACTION_UPDATED";
    ThreadContextActionTypes["ON_FILE_INFO_UPLOADED"] = "ON_FILE_INFO_UPLOADED";
    // event handlers - user status change
    ThreadContextActionTypes["ON_USER_MUTED"] = "ON_USER_MUTED";
    ThreadContextActionTypes["ON_USER_UNMUTED"] = "ON_USER_UNMUTED";
    ThreadContextActionTypes["ON_USER_BANNED"] = "ON_USER_BANNED";
    ThreadContextActionTypes["ON_USER_UNBANNED"] = "ON_USER_UNBANNED";
    ThreadContextActionTypes["ON_USER_LEFT"] = "ON_USER_LEFT";
    // event handler - channel status change
    ThreadContextActionTypes["ON_CHANNEL_FROZEN"] = "ON_CHANNEL_FROZEN";
    ThreadContextActionTypes["ON_CHANNEL_UNFROZEN"] = "ON_CHANNEL_UNFROZEN";
    ThreadContextActionTypes["ON_OPERATOR_UPDATED"] = "ON_OPERATOR_UPDATED";
    // event handler - typing status change
    ThreadContextActionTypes["ON_TYPING_STATUS_UPDATED"] = "ON_TYPING_STATUS_UPDATED";
})(ThreadContextActionTypes || (ThreadContextActionTypes = {}));

function reducer(state, action) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
    switch (action.type) {
        // initialize
        case ThreadContextActionTypes.INIT_USER_ID: {
            return __assign(__assign({}, state), { currentUserId: action.payload });
        }
        case ThreadContextActionTypes.GET_CHANNEL_START: {
            return __assign(__assign({}, state), { channelState: ChannelStateTypes.LOADING, currentChannel: null });
        }
        case ThreadContextActionTypes.GET_CHANNEL_SUCCESS: {
            var groupChannel = action.payload.groupChannel;
            return __assign(__assign({}, state), { channelState: ChannelStateTypes.INITIALIZED, currentChannel: groupChannel, 
                // only support in normal group channel
                isMuted: ((_b = (_a = groupChannel === null || groupChannel === void 0 ? void 0 : groupChannel.members) === null || _a === void 0 ? void 0 : _a.find(function (member) { return (member === null || member === void 0 ? void 0 : member.userId) === state.currentUserId; })) === null || _b === void 0 ? void 0 : _b.isMuted) || false, isChannelFrozen: (groupChannel === null || groupChannel === void 0 ? void 0 : groupChannel.isFrozen) || false });
        }
        case ThreadContextActionTypes.GET_CHANNEL_FAILURE: {
            return __assign(__assign({}, state), { channelState: ChannelStateTypes.INVALID, currentChannel: null });
        }
        case ThreadContextActionTypes.SET_EMOJI_CONTAINER: {
            var emojiContainer = action.payload.emojiContainer;
            return __assign(__assign({}, state), { emojiContainer: emojiContainer });
        }
        case ThreadContextActionTypes.GET_PARENT_MESSAGE_START: {
            return __assign(__assign({}, state), { parentMessageState: ParentMessageStateTypes.LOADING, parentMessage: null });
        }
        case ThreadContextActionTypes.GET_PARENT_MESSAGE_SUCCESS: {
            return __assign(__assign({}, state), { parentMessageState: ParentMessageStateTypes.INITIALIZED, parentMessage: action.payload.parentMessage });
        }
        case ThreadContextActionTypes.GET_PARENT_MESSAGE_FAILURE: {
            return __assign(__assign({}, state), { parentMessageState: ParentMessageStateTypes.INVALID, parentMessage: null });
        }
        // fetch threads
        case ThreadContextActionTypes.INITIALIZE_THREAD_LIST_START: {
            return __assign(__assign({}, state), { threadListState: ThreadListStateTypes.LOADING, allThreadMessages: [] });
        }
        case ThreadContextActionTypes.INITIALIZE_THREAD_LIST_SUCCESS: {
            var _z = action.payload, parentMessage = _z.parentMessage, anchorMessage = _z.anchorMessage, threadedMessages = _z.threadedMessages;
            var anchorMessageCreatedAt_1 = (!(anchorMessage === null || anchorMessage === void 0 ? void 0 : anchorMessage.messageId)) ? parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.createdAt : anchorMessage === null || anchorMessage === void 0 ? void 0 : anchorMessage.createdAt;
            var anchorIndex = threadedMessages.findIndex(function (message) { return (message === null || message === void 0 ? void 0 : message.createdAt) > anchorMessageCreatedAt_1; });
            var prevThreadMessages = anchorIndex > -1 ? threadedMessages.slice(0, anchorIndex) : threadedMessages;
            var anchorThreadMessage = (anchorMessage === null || anchorMessage === void 0 ? void 0 : anchorMessage.messageId) ? [anchorMessage] : [];
            var nextThreadMessages = anchorIndex > -1 ? threadedMessages.slice(anchorIndex) : [];
            return __assign(__assign({}, state), { threadListState: ThreadListStateTypes.INITIALIZED, hasMorePrev: anchorIndex === -1 || anchorIndex === PREV_THREADS_FETCH_SIZE, hasMoreNext: threadedMessages.length - anchorIndex === NEXT_THREADS_FETCH_SIZE, allThreadMessages: [prevThreadMessages, anchorThreadMessage, nextThreadMessages].flat() });
        }
        case ThreadContextActionTypes.INITIALIZE_THREAD_LIST_FAILURE: {
            return __assign(__assign({}, state), { threadListState: ThreadListStateTypes.INVALID, allThreadMessages: [] });
        }
        case ThreadContextActionTypes.GET_NEXT_MESSAGES_START: {
            return __assign({}, state);
        }
        case ThreadContextActionTypes.GET_NEXT_MESSAGES_SUCESS: {
            var threadedMessages = action.payload.threadedMessages;
            return __assign(__assign({}, state), { hasMoreNext: threadedMessages.length === NEXT_THREADS_FETCH_SIZE, allThreadMessages: __spreadArray(__spreadArray([], state.allThreadMessages, true), threadedMessages, true) });
        }
        case ThreadContextActionTypes.GET_NEXT_MESSAGES_FAILURE: {
            return __assign(__assign({}, state), { hasMoreNext: false });
        }
        case ThreadContextActionTypes.GET_PREV_MESSAGES_START: {
            return __assign({}, state);
        }
        case ThreadContextActionTypes.GET_PREV_MESSAGES_SUCESS: {
            var threadedMessages = action.payload.threadedMessages;
            return __assign(__assign({}, state), { hasMorePrev: threadedMessages.length === PREV_THREADS_FETCH_SIZE, allThreadMessages: __spreadArray(__spreadArray([], threadedMessages, true), state.allThreadMessages, true) });
        }
        case ThreadContextActionTypes.GET_PREV_MESSAGES_FAILURE: {
            return __assign(__assign({}, state), { hasMorePrev: false });
        }
        // event handlers - message status change
        case ThreadContextActionTypes.ON_MESSAGE_RECEIVED: {
            var _0 = action.payload, channel = _0.channel, message_1 = _0.message;
            if (((_c = state.currentChannel) === null || _c === void 0 ? void 0 : _c.url) !== (channel === null || channel === void 0 ? void 0 : channel.url)
                || state.hasMoreNext
                || ((_d = message_1 === null || message_1 === void 0 ? void 0 : message_1.parentMessage) === null || _d === void 0 ? void 0 : _d.messageId) !== ((_e = state === null || state === void 0 ? void 0 : state.parentMessage) === null || _e === void 0 ? void 0 : _e.messageId)) {
                return state;
            }
            var isAlreadyReceived = state.allThreadMessages.findIndex(function (m) { return (m.messageId === message_1.messageId); }) > -1;
            return __assign(__assign({}, state), { parentMessage: ((_f = state.parentMessage) === null || _f === void 0 ? void 0 : _f.messageId) === (message_1 === null || message_1 === void 0 ? void 0 : message_1.messageId) ? message_1 : state.parentMessage, allThreadMessages: isAlreadyReceived
                    ? state.allThreadMessages.map(function (m) { return (m.messageId === message_1.messageId ? message_1 : m); })
                    : __spreadArray(__spreadArray([], state.allThreadMessages.filter(function (m) { return (m === null || m === void 0 ? void 0 : m.reqId) !== (message_1 === null || message_1 === void 0 ? void 0 : message_1.reqId); }), true), [
                        message_1,
                    ], false) });
        }
        case ThreadContextActionTypes.ON_MESSAGE_UPDATED: {
            var _1 = action.payload, channel = _1.channel, message_2 = _1.message;
            if (((_g = state.currentChannel) === null || _g === void 0 ? void 0 : _g.url) !== (channel === null || channel === void 0 ? void 0 : channel.url)) {
                return state;
            }
            return __assign(__assign({}, state), { parentMessage: ((_h = state.parentMessage) === null || _h === void 0 ? void 0 : _h.messageId) === (message_2 === null || message_2 === void 0 ? void 0 : message_2.messageId)
                    ? message_2
                    : state.parentMessage, allThreadMessages: (_j = state.allThreadMessages) === null || _j === void 0 ? void 0 : _j.map(function (msg) { return (((msg === null || msg === void 0 ? void 0 : msg.messageId) === (message_2 === null || message_2 === void 0 ? void 0 : message_2.messageId)) ? message_2 : msg); }) });
        }
        case ThreadContextActionTypes.ON_MESSAGE_DELETED: {
            var _2 = action.payload, channel = _2.channel, messageId_1 = _2.messageId;
            if (((_k = state.currentChannel) === null || _k === void 0 ? void 0 : _k.url) !== (channel === null || channel === void 0 ? void 0 : channel.url)) {
                return state;
            }
            if (((_l = state === null || state === void 0 ? void 0 : state.parentMessage) === null || _l === void 0 ? void 0 : _l.messageId) === messageId_1) {
                return __assign(__assign({}, state), { parentMessage: null, parentMessageState: ParentMessageStateTypes.NIL, allThreadMessages: [] });
            }
            return __assign(__assign({}, state), { allThreadMessages: (_m = state.allThreadMessages) === null || _m === void 0 ? void 0 : _m.filter(function (msg) { return ((msg === null || msg === void 0 ? void 0 : msg.messageId) !== messageId_1); }), localThreadMessages: (_o = state.localThreadMessages) === null || _o === void 0 ? void 0 : _o.filter(function (msg) { return ((msg === null || msg === void 0 ? void 0 : msg.messageId) !== messageId_1); }) });
        }
        case ThreadContextActionTypes.ON_MESSAGE_DELETED_BY_REQ_ID: {
            return __assign(__assign({}, state), { localThreadMessages: state.localThreadMessages.filter(function (m) { return (!compareIds(m.reqId, action.payload)); }) });
        }
        case ThreadContextActionTypes.ON_REACTION_UPDATED: {
            var reactionEvent_1 = (_p = action.payload) === null || _p === void 0 ? void 0 : _p.reactionEvent;
            if (((_q = state === null || state === void 0 ? void 0 : state.parentMessage) === null || _q === void 0 ? void 0 : _q.messageId) === (reactionEvent_1 === null || reactionEvent_1 === void 0 ? void 0 : reactionEvent_1.messageId)) {
                (_s = (_r = state.parentMessage) === null || _r === void 0 ? void 0 : _r.applyReactionEvent) === null || _s === void 0 ? void 0 : _s.call(_r, reactionEvent_1);
            }
            return __assign(__assign({}, state), { allThreadMessages: state.allThreadMessages.map(function (m) {
                    var _a;
                    if ((reactionEvent_1 === null || reactionEvent_1 === void 0 ? void 0 : reactionEvent_1.messageId) === (m === null || m === void 0 ? void 0 : m.messageId)) {
                        (_a = m === null || m === void 0 ? void 0 : m.applyReactionEvent) === null || _a === void 0 ? void 0 : _a.call(m, reactionEvent_1);
                        return m;
                    }
                    return m;
                }) });
        }
        // event handlers - user status change
        case ThreadContextActionTypes.ON_USER_MUTED: {
            var _3 = action.payload, channel = _3.channel, user = _3.user;
            if (((_t = state.currentChannel) === null || _t === void 0 ? void 0 : _t.url) !== (channel === null || channel === void 0 ? void 0 : channel.url) || state.currentUserId !== (user === null || user === void 0 ? void 0 : user.userId)) {
                return state;
            }
            return __assign(__assign({}, state), { isMuted: true });
        }
        case ThreadContextActionTypes.ON_USER_UNMUTED: {
            var _4 = action.payload, channel = _4.channel, user = _4.user;
            if (((_u = state.currentChannel) === null || _u === void 0 ? void 0 : _u.url) !== (channel === null || channel === void 0 ? void 0 : channel.url) || state.currentUserId !== (user === null || user === void 0 ? void 0 : user.userId)) {
                return state;
            }
            return __assign(__assign({}, state), { isMuted: false });
        }
        case ThreadContextActionTypes.ON_USER_BANNED: {
            return __assign(__assign({}, state), { channelState: ChannelStateTypes.NIL, threadListState: ThreadListStateTypes.NIL, parentMessageState: ParentMessageStateTypes.NIL, currentChannel: null, parentMessage: null, allThreadMessages: [], hasMorePrev: false, hasMoreNext: false });
        }
        case ThreadContextActionTypes.ON_USER_UNBANNED: {
            return __assign({}, state);
        }
        case ThreadContextActionTypes.ON_USER_LEFT: {
            return __assign(__assign({}, state), { channelState: ChannelStateTypes.NIL, threadListState: ThreadListStateTypes.NIL, parentMessageState: ParentMessageStateTypes.NIL, currentChannel: null, parentMessage: null, allThreadMessages: [], hasMorePrev: false, hasMoreNext: false });
        }
        // event handler - channel status change
        case ThreadContextActionTypes.ON_CHANNEL_FROZEN: {
            return __assign(__assign({}, state), { isChannelFrozen: true });
        }
        case ThreadContextActionTypes.ON_CHANNEL_UNFROZEN: {
            return __assign(__assign({}, state), { isChannelFrozen: false });
        }
        case ThreadContextActionTypes.ON_OPERATOR_UPDATED: {
            var channel = action.payload.channel;
            if ((channel === null || channel === void 0 ? void 0 : channel.url) === ((_v = state.currentChannel) === null || _v === void 0 ? void 0 : _v.url)) {
                return __assign(__assign({}, state), { currentChannel: channel });
            }
            return state;
        }
        // message
        case ThreadContextActionTypes.SEND_MESSAGE_START: {
            var message = action.payload.message;
            return __assign(__assign({}, state), { localThreadMessages: __spreadArray(__spreadArray([], state.localThreadMessages, true), [
                    message,
                ], false) });
        }
        case ThreadContextActionTypes.SEND_MESSAGE_SUCESS: {
            var message_3 = action.payload.message;
            return __assign(__assign({}, state), { allThreadMessages: __spreadArray(__spreadArray([], state.allThreadMessages.filter(function (m) { return (!compareIds(m === null || m === void 0 ? void 0 : m.reqId, message_3 === null || message_3 === void 0 ? void 0 : message_3.reqId)); }), true), [
                    message_3,
                ], false), localThreadMessages: state.localThreadMessages.filter(function (m) { return (!compareIds(m === null || m === void 0 ? void 0 : m.reqId, message_3 === null || message_3 === void 0 ? void 0 : message_3.reqId)); }) });
        }
        case ThreadContextActionTypes.SEND_MESSAGE_FAILURE: {
            var message_4 = action.payload.message;
            return __assign(__assign({}, state), { localThreadMessages: state.localThreadMessages.map(function (m) { return (compareIds(m === null || m === void 0 ? void 0 : m.reqId, message_4 === null || message_4 === void 0 ? void 0 : message_4.reqId)
                    ? message_4
                    : m); }) });
        }
        case ThreadContextActionTypes.RESEND_MESSAGE_START: {
            var message_5 = action.payload.message;
            return __assign(__assign({}, state), { localThreadMessages: state.localThreadMessages.map(function (m) { return (compareIds(m === null || m === void 0 ? void 0 : m.reqId, message_5 === null || message_5 === void 0 ? void 0 : message_5.reqId)
                    ? message_5
                    : m); }) });
        }
        case ThreadContextActionTypes.ON_FILE_INFO_UPLOADED: {
            var _5 = action.payload, channelUrl = _5.channelUrl, requestId_1 = _5.requestId, index = _5.index, uploadableFileInfo = _5.uploadableFileInfo, error = _5.error;
            if (!compareIds(channelUrl, (_w = state.currentChannel) === null || _w === void 0 ? void 0 : _w.url)) {
                return state;
            }
            /**
             * We don't have to do anything here because
             * onFailed() will be called so handle error there instead.
             */
            if (error)
                return state;
            var localThreadMessages = state.localThreadMessages;
            var messageToUpdate = localThreadMessages.find(function (message) { return compareIds(hasReqId(message) && message.reqId, requestId_1); });
            var fileInfoList = (_x = messageToUpdate
                .messageParams) === null || _x === void 0 ? void 0 : _x.fileInfoList;
            if (Array.isArray(fileInfoList)) {
                fileInfoList[index] = uploadableFileInfo;
            }
            return __assign(__assign({}, state), { localThreadMessages: localThreadMessages });
        }
        case ThreadContextActionTypes.ON_TYPING_STATUS_UPDATED: {
            var _6 = action.payload, channel = _6.channel, typingMembers = _6.typingMembers;
            if (!compareIds(channel.url, (_y = state.currentChannel) === null || _y === void 0 ? void 0 : _y.url)) {
                return state;
            }
            return __assign(__assign({}, state), { typingMembers: typingMembers });
        }
        default: {
            return state;
        }
    }
}
function hasReqId(message) {
    return 'reqId' in message;
}

var initialState = {
    currentChannel: null,
    allThreadMessages: [],
    localThreadMessages: [],
    parentMessage: null,
    channelState: ChannelStateTypes.NIL,
    parentMessageState: ParentMessageStateTypes.NIL,
    threadListState: ThreadListStateTypes.NIL,
    hasMorePrev: false,
    hasMoreNext: false,
    emojiContainer: {},
    isMuted: false,
    isChannelFrozen: false,
    currentUserId: '',
    typingMembers: [],
};

function useGetChannel(_a, _b) {
    var channelUrl = _a.channelUrl, sdkInit = _a.sdkInit, message = _a.message;
    var sdk = _b.sdk, logger = _b.logger, threadDispatcher = _b.threadDispatcher;
    useEffect(function () {
        var _a, _b;
        // validation check
        if (sdkInit && channelUrl && (sdk === null || sdk === void 0 ? void 0 : sdk.groupChannel)) {
            threadDispatcher({
                type: ThreadContextActionTypes.GET_CHANNEL_START,
                payload: null,
            });
            (_b = (_a = sdk.groupChannel).getChannel) === null || _b === void 0 ? void 0 : _b.call(_a, channelUrl).then(function (groupChannel) {
                logger.info('Thread | useInitialize: Get channel succeeded', groupChannel);
                threadDispatcher({
                    type: ThreadContextActionTypes.GET_CHANNEL_SUCCESS,
                    payload: { groupChannel: groupChannel },
                });
            }).catch(function (error) {
                logger.info('Thread | useInitialize: Get channel failed', error);
                threadDispatcher({
                    type: ThreadContextActionTypes.GET_CHANNEL_FAILURE,
                    payload: error,
                });
            });
        }
    }, [message, sdkInit]);
    /**
     * We don't use channelUrl here,
     * because Thread must operate independently of the channel.
     */
}

function useGetAllEmoji(_a, _b) {
    var sdk = _a.sdk;
    var logger = _b.logger, threadDispatcher = _b.threadDispatcher;
    useEffect(function () {
        if (sdk === null || sdk === void 0 ? void 0 : sdk.getAllEmoji) { // validation check
            sdk === null || sdk === void 0 ? void 0 : sdk.getAllEmoji().then(function (emojiContainer) {
                logger.info('Thread | useGetAllEmoji: Getting emojis succeeded.', emojiContainer);
                threadDispatcher({
                    type: ThreadContextActionTypes.SET_EMOJI_CONTAINER,
                    payload: { emojiContainer: emojiContainer },
                });
            }).catch(function (error) {
                logger.info('Thread | useGetAllEmoji: Getting emojis failed.', error);
            });
        }
    }, [sdk]);
}

function useGetParentMessage(_a, _b) {
    var channelUrl = _a.channelUrl, sdkInit = _a.sdkInit, parentMessage = _a.parentMessage;
    var sdk = _b.sdk, logger = _b.logger, threadDispatcher = _b.threadDispatcher;
    useEffect(function () {
        var _a, _b, _c;
        // validation check
        if (sdkInit && ((_a = sdk === null || sdk === void 0 ? void 0 : sdk.message) === null || _a === void 0 ? void 0 : _a.getMessage) && parentMessage) {
            threadDispatcher({
                type: ThreadContextActionTypes.GET_PARENT_MESSAGE_START,
                payload: null,
            });
            var params = {
                channelUrl: channelUrl,
                channelType: ChannelType.GROUP,
                messageId: parentMessage.messageId,
                includeMetaArray: true,
                includeReactions: true,
                includeThreadInfo: true,
                includeParentMessageInfo: true,
            };
            logger.info('Thread | useGetParentMessage: Get parent message start.', params);
            (_c = (_b = sdk.message).getMessage) === null || _c === void 0 ? void 0 : _c.call(_b, params).then(function (parentMsg) {
                logger.info('Thread | useGetParentMessage: Get parent message succeeded.', parentMessage);
                // @ts-ignore
                parentMsg.ogMetaData = (parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.ogMetaData) || null; // ogMetaData is not included for now
                threadDispatcher({
                    type: ThreadContextActionTypes.GET_PARENT_MESSAGE_SUCCESS,
                    payload: { parentMessage: parentMsg },
                });
            }).catch(function (error) {
                logger.info('Thread | useGetParentMessage: Get parent message failed.', error);
                threadDispatcher({
                    type: ThreadContextActionTypes.GET_PARENT_MESSAGE_FAILURE,
                    payload: error,
                });
            });
        }
    }, [sdkInit, parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.messageId]);
    /**
     * We don't use channelUrl here,
     * because Thread must operate independently of the channel.
     */
}

function useHandleThreadPubsubEvents(_a, _b) {
    var sdkInit = _a.sdkInit, currentChannel = _a.currentChannel, parentMessage = _a.parentMessage;
    var pubSub = _b.pubSub, threadDispatcher = _b.threadDispatcher;
    useEffect(function () {
        var subscriber = new Map();
        if (pubSub === null || pubSub === void 0 ? void 0 : pubSub.subscribe) {
            // TODO: subscribe ON_FILE_INFO_UPLOADED
            subscriber.set(pubSubTopics.SEND_MESSAGE_START, pubSub.subscribe(pubSubTopics.SEND_MESSAGE_START, function (props) {
                var _a, _b;
                var channel = props.channel, message = props.message, publishingModules = props.publishingModules;
                if ((currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) === (channel === null || channel === void 0 ? void 0 : channel.url) && (message === null || message === void 0 ? void 0 : message.parentMessageId) === (parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.messageId) && shouldPubSubPublishToThread(publishingModules)) {
                    // TODO: const clonedMessage = cloneMessage(message);
                    var pendingMessage = __assign({}, message);
                    if (message.isMultipleFilesMessage()) {
                        pendingMessage.fileInfoList = (_b = (_a = message === null || message === void 0 ? void 0 : message.messageParams) === null || _a === void 0 ? void 0 : _a.fileInfoList.map(function (fileInfo) { return (__assign(__assign({}, fileInfo), { url: URL.createObjectURL(fileInfo.file) })); })) !== null && _b !== void 0 ? _b : [];
                    }
                    threadDispatcher({
                        type: ThreadContextActionTypes.SEND_MESSAGE_START,
                        payload: {
                            message: pendingMessage,
                        },
                    });
                }
                scrollIntoLast === null || scrollIntoLast === void 0 ? void 0 : scrollIntoLast();
            }));
            subscriber.set(PUBSUB_TOPICS.ON_FILE_INFO_UPLOADED, pubSub.subscribe(PUBSUB_TOPICS.ON_FILE_INFO_UPLOADED, function (props) {
                var response = props.response, publishingModules = props.publishingModules;
                if ((currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) === response.channelUrl && shouldPubSubPublishToThread(publishingModules)) {
                    threadDispatcher({
                        type: ON_FILE_INFO_UPLOADED,
                        payload: response,
                    });
                }
            }));
            subscriber.set(pubSubTopics.SEND_USER_MESSAGE, pubSub.subscribe(pubSubTopics.SEND_USER_MESSAGE, function (props) {
                var _a = props, channel = _a.channel, message = _a.message;
                if ((currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) === (channel === null || channel === void 0 ? void 0 : channel.url)
                    && (message === null || message === void 0 ? void 0 : message.parentMessageId) === (parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.messageId)) {
                    threadDispatcher({
                        type: ThreadContextActionTypes.SEND_MESSAGE_SUCESS,
                        payload: { message: message },
                    });
                }
                scrollIntoLast === null || scrollIntoLast === void 0 ? void 0 : scrollIntoLast();
            }));
            subscriber.set(pubSubTopics.SEND_MESSAGE_FAILED, pubSub.subscribe(pubSubTopics.SEND_MESSAGE_FAILED, function (props) {
                var channel = props.channel, message = props.message, publishingModules = props.publishingModules;
                if ((currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) === (channel === null || channel === void 0 ? void 0 : channel.url) && (message === null || message === void 0 ? void 0 : message.parentMessageId) === (parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.messageId) && shouldPubSubPublishToThread(publishingModules)) {
                    threadDispatcher({
                        type: ThreadContextActionTypes.SEND_MESSAGE_FAILURE,
                        payload: { message: message },
                    });
                }
            }));
            subscriber.set(pubSubTopics.SEND_FILE_MESSAGE, pubSub.subscribe(pubSubTopics.SEND_FILE_MESSAGE, function (props) {
                var channel = props.channel, message = props.message, publishingModules = props.publishingModules;
                if ((currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) === (channel === null || channel === void 0 ? void 0 : channel.url) && shouldPubSubPublishToThread(publishingModules)) {
                    threadDispatcher({
                        type: ThreadContextActionTypes.SEND_MESSAGE_SUCESS,
                        payload: { message: message },
                    });
                }
                scrollIntoLast === null || scrollIntoLast === void 0 ? void 0 : scrollIntoLast();
            }));
            subscriber.set(pubSubTopics.UPDATE_USER_MESSAGE, pubSub.subscribe(pubSubTopics.UPDATE_USER_MESSAGE, function (props) {
                var _a = props, channel = _a.channel, message = _a.message;
                if ((currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) === (channel === null || channel === void 0 ? void 0 : channel.url)) {
                    threadDispatcher({
                        type: ThreadContextActionTypes.ON_MESSAGE_UPDATED,
                        payload: { channel: channel, message: message },
                    });
                }
            }));
            subscriber.set(pubSubTopics.DELETE_MESSAGE, pubSub.subscribe(pubSubTopics.DELETE_MESSAGE, function (props) {
                var _a = props, channel = _a.channel, messageId = _a.messageId;
                if ((currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url) === (channel === null || channel === void 0 ? void 0 : channel.url)) {
                    threadDispatcher({
                        type: ThreadContextActionTypes.ON_MESSAGE_DELETED,
                        payload: { messageId: messageId },
                    });
                }
            }));
        }
        return function () {
            subscriber === null || subscriber === void 0 ? void 0 : subscriber.forEach(function (s) {
                try {
                    s === null || s === void 0 ? void 0 : s.remove();
                }
                catch (_a) {
                    //
                }
            });
        };
    }, [sdkInit, currentChannel, parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.messageId]);
}

function useHandleChannelEvents(_a, _b) {
    var sdk = _a.sdk, currentChannel = _a.currentChannel;
    var logger = _b.logger, threadDispatcher = _b.threadDispatcher;
    useEffect(function () {
        var _a, _b, _c;
        var handlerId = uuidv4();
        // validation check
        if (((_a = sdk === null || sdk === void 0 ? void 0 : sdk.groupChannel) === null || _a === void 0 ? void 0 : _a.addGroupChannelHandler)
            && currentChannel) {
            var channelHandlerParams = {
                // message status change
                onMessageReceived: function (channel, message) {
                    logger.info('Thread | useHandleChannelEvents: onMessageReceived', { channel: channel, message: message });
                    threadDispatcher({
                        type: ThreadContextActionTypes.ON_MESSAGE_RECEIVED,
                        payload: { channel: channel, message: message },
                    });
                },
                onMessageUpdated: function (channel, message) {
                    logger.info('Thread | useHandleChannelEvents: onMessageUpdated', { channel: channel, message: message });
                    threadDispatcher({
                        type: ThreadContextActionTypes.ON_MESSAGE_UPDATED,
                        payload: { channel: channel, message: message },
                    });
                },
                onMessageDeleted: function (channel, messageId) {
                    logger.info('Thread | useHandleChannelEvents: onMessageDeleted', { channel: channel, messageId: messageId });
                    threadDispatcher({
                        type: ThreadContextActionTypes.ON_MESSAGE_DELETED,
                        payload: { channel: channel, messageId: messageId },
                    });
                },
                onReactionUpdated: function (channel, reactionEvent) {
                    logger.info('Thread | useHandleChannelEvents: onReactionUpdated', { channel: channel, reactionEvent: reactionEvent });
                    threadDispatcher({
                        type: ThreadContextActionTypes.ON_REACTION_UPDATED,
                        payload: { channel: channel, reactionEvent: reactionEvent },
                    });
                },
                // user status change
                onUserMuted: function (channel, user) {
                    logger.info('Thread | useHandleChannelEvents: onUserMuted', { channel: channel, user: user });
                    threadDispatcher({
                        type: ThreadContextActionTypes.ON_USER_MUTED,
                        payload: { channel: channel, user: user },
                    });
                },
                onUserUnmuted: function (channel, user) {
                    logger.info('Thread | useHandleChannelEvents: onUserUnmuted', { channel: channel, user: user });
                    threadDispatcher({
                        type: ThreadContextActionTypes.ON_USER_UNMUTED,
                        payload: { channel: channel, user: user },
                    });
                },
                onUserBanned: function (channel, user) {
                    logger.info('Thread | useHandleChannelEvents: onUserBanned', { channel: channel, user: user });
                    threadDispatcher({
                        type: ThreadContextActionTypes.ON_USER_BANNED,
                        payload: { channel: channel, user: user },
                    });
                },
                onUserUnbanned: function (channel, user) {
                    logger.info('Thread | useHandleChannelEvents: onUserUnbanned', { channel: channel, user: user });
                    threadDispatcher({
                        type: ThreadContextActionTypes.ON_USER_UNBANNED,
                        payload: { channel: channel, user: user },
                    });
                },
                onUserLeft: function (channel, user) {
                    logger.info('Thread | useHandleChannelEvents: onUserLeft', { channel: channel, user: user });
                    threadDispatcher({
                        type: ThreadContextActionTypes.ON_USER_LEFT,
                        payload: { channel: channel, user: user },
                    });
                },
                // channel status change
                onChannelFrozen: function (channel) {
                    logger.info('Thread | useHandleChannelEvents: onChannelFrozen', { channel: channel });
                    threadDispatcher({
                        type: ThreadContextActionTypes.ON_CHANNEL_FROZEN,
                        payload: { channel: channel },
                    });
                },
                onChannelUnfrozen: function (channel) {
                    logger.info('Thread | useHandleChannelEvents: onChannelUnfrozen', { channel: channel });
                    threadDispatcher({
                        type: ThreadContextActionTypes.ON_CHANNEL_UNFROZEN,
                        payload: { channel: channel },
                    });
                },
                onOperatorUpdated: function (channel, users) {
                    logger.info('Thread | useHandleChannelEvents: onOperatorUpdated', { channel: channel, users: users });
                    threadDispatcher({
                        type: ThreadContextActionTypes.ON_OPERATOR_UPDATED,
                        payload: { channel: channel, users: users },
                    });
                },
                onTypingStatusUpdated: function (channel) {
                    if (compareIds$1(channel === null || channel === void 0 ? void 0 : channel.url, currentChannel.url)) {
                        logger.info('Channel | onTypingStatusUpdated', { channel: channel });
                        var typingMembers = channel.getTypingUsers();
                        threadDispatcher({
                            type: ON_TYPING_STATUS_UPDATED,
                            payload: {
                                channel: channel,
                                typingMembers: typingMembers,
                            },
                        });
                    }
                },
            };
            var channelHandler = new GroupChannelHandler(channelHandlerParams);
            (_c = (_b = sdk.groupChannel).addGroupChannelHandler) === null || _c === void 0 ? void 0 : _c.call(_b, handlerId, channelHandler);
            logger.info('Thread | useHandleChannelEvents: Added channelHandler in Thread', { handlerId: handlerId, channelHandler: channelHandler });
        }
        return function () {
            var _a, _b, _c;
            // validation check
            if (handlerId && ((_a = sdk === null || sdk === void 0 ? void 0 : sdk.groupChannel) === null || _a === void 0 ? void 0 : _a.removeGroupChannelHandler)) {
                (_c = (_b = sdk.groupChannel).removeGroupChannelHandler) === null || _c === void 0 ? void 0 : _c.call(_b, handlerId);
                logger.info('Thread | useHandleChannelEvents: Removed channelHandler in Thread.', handlerId);
            }
        };
    }, [
        sdk === null || sdk === void 0 ? void 0 : sdk.groupChannel,
        currentChannel,
    ]);
}

function useSendFileMessageCallback(_a, _b) {
    var currentChannel = _a.currentChannel, onBeforeSendFileMessage = _a.onBeforeSendFileMessage;
    var logger = _b.logger, pubSub = _b.pubSub, threadDispatcher = _b.threadDispatcher;
    return useCallback(function (file, quoteMessage) {
        return new Promise(function (resolve, reject) {
            var _a;
            var createParamsDefault = function () {
                var params = {};
                params.file = file;
                if (quoteMessage) {
                    params.isReplyToChannel = true;
                    params.parentMessageId = quoteMessage.messageId;
                }
                return params;
            };
            var params = (_a = onBeforeSendFileMessage === null || onBeforeSendFileMessage === void 0 ? void 0 : onBeforeSendFileMessage(file, quoteMessage)) !== null && _a !== void 0 ? _a : createParamsDefault();
            logger.info('Thread | useSendFileMessageCallback: Sending file message start.', params);
            currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.sendFileMessage(params).onPending(function (pendingMessage) {
                threadDispatcher({
                    type: ThreadContextActionTypes.SEND_MESSAGE_START,
                    payload: {
                        /* pubSub is used instead of messagesDispatcher
                          to avoid redundantly calling `messageActionTypes.SEND_MESSAGE_START` */
                        // TODO: remove data pollution
                        message: __assign(__assign({}, pendingMessage), { url: URL.createObjectURL(file), 
                            // pending thumbnail message seems to be failed
                            requestState: 'pending', isUserMessage: pendingMessage.isUserMessage, isFileMessage: pendingMessage.isFileMessage, isAdminMessage: pendingMessage.isAdminMessage, isMultipleFilesMessage: pendingMessage.isMultipleFilesMessage }),
                    },
                });
                setTimeout(function () { return scrollIntoLast(); }, SCROLL_BOTTOM_DELAY_FOR_SEND);
            }).onFailed(function (error, message) {
                message.localUrl = URL.createObjectURL(file);
                message.file = file;
                logger.info('Thread | useSendFileMessageCallback: Sending file message failed.', { message: message, error: error });
                threadDispatcher({
                    type: ThreadContextActionTypes.SEND_MESSAGE_FAILURE,
                    payload: { message: message, error: error },
                });
                reject(error);
            }).onSucceeded(function (message) {
                logger.info('Thread | useSendFileMessageCallback: Sending file message succeeded.', message);
                pubSub.publish(pubSubTopics.SEND_FILE_MESSAGE, {
                    channel: currentChannel,
                    message: message,
                    publishingModules: [PublishingModuleType.THREAD],
                });
                resolve(message);
            });
        });
    }, [currentChannel]);
}

function useUpdateMessageCallback(_a, _b) {
    var currentChannel = _a.currentChannel, isMentionEnabled = _a.isMentionEnabled;
    var logger = _b.logger, pubSub = _b.pubSub, threadDispatcher = _b.threadDispatcher;
    // TODO: add type
    return useCallback(function (props) {
        var _a;
        var messageId = props.messageId, message = props.message, mentionedUsers = props.mentionedUsers, mentionTemplate = props.mentionTemplate;
        var createParamsDefault = function () {
            var params = {};
            params.message = message;
            if (isMentionEnabled && mentionedUsers && (mentionedUsers === null || mentionedUsers === void 0 ? void 0 : mentionedUsers.length) > 0) {
                params.mentionedUsers = mentionedUsers;
            }
            if (isMentionEnabled && mentionTemplate) {
                params.mentionedMessageTemplate = mentionTemplate;
            }
            else {
                params.mentionedMessageTemplate = message;
            }
            return params;
        };
        var params = createParamsDefault();
        logger.info('Thread | useUpdateMessageCallback: Message update start.', params);
        (_a = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.updateUserMessage) === null || _a === void 0 ? void 0 : _a.call(currentChannel, messageId, params).then(function (message) {
            logger.info('Thread | useUpdateMessageCallback: Message update succeeded.', message);
            threadDispatcher({
                type: ThreadContextActionTypes.ON_MESSAGE_UPDATED,
                payload: {
                    channel: currentChannel,
                    message: message,
                },
            });
            pubSub.publish(pubSubTopics.UPDATE_USER_MESSAGE, {
                fromSelector: true,
                channel: currentChannel,
                message: message,
                publishingModules: [PublishingModuleType.THREAD],
            });
        });
    }, [currentChannel, isMentionEnabled]);
}

function useDeleteMessageCallback(_a, _b) {
    var currentChannel = _a.currentChannel, threadDispatcher = _a.threadDispatcher;
    var logger = _b.logger;
    return useCallback(function (message) {
        logger.info('Thread | useDeleteMessageCallback: Deleting message.', message);
        var sendingStatus = message.sendingStatus;
        return new Promise(function (resolve, reject) {
            var _a;
            logger.info('Thread | useDeleteMessageCallback: Deleting message requestState:', sendingStatus);
            // Message is only on local
            if (sendingStatus === 'failed' || sendingStatus === 'pending') {
                logger.info('Thread | useDeleteMessageCallback: Deleted message from local:', message);
                threadDispatcher({
                    type: ThreadContextActionTypes.ON_MESSAGE_DELETED_BY_REQ_ID,
                    payload: message.reqId,
                });
                resolve();
            }
            logger.info('Thread | useDeleteMessageCallback: Deleting message from remote:', sendingStatus);
            (_a = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.deleteMessage) === null || _a === void 0 ? void 0 : _a.call(currentChannel, message).then(function () {
                logger.info('Thread | useDeleteMessageCallback: Deleting message success!', message);
                threadDispatcher({
                    type: ThreadContextActionTypes.ON_MESSAGE_DELETED,
                    payload: { message: message, channel: currentChannel },
                });
                resolve();
            }).catch(function (err) {
                logger.warning('Thread | useDeleteMessageCallback: Deleting message failed!', err);
                reject(err);
            });
        });
    }, [currentChannel]);
}

function useToggleReactionCallback(_a, _b) {
    var currentChannel = _a.currentChannel;
    var logger = _b.logger;
    return useCallback(function (message, key, isReacted) {
        var _a, _b;
        if (isReacted) {
            (_a = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.deleteReaction) === null || _a === void 0 ? void 0 : _a.call(currentChannel, message, key).then(function (res) {
                logger.info('Thread | useToggleReactionsCallback: Delete reaction succeeded.', res);
            }).catch(function (err) {
                logger.warning('Thread | useToggleReactionsCallback: Delete reaction failed.', err);
            });
            return;
        }
        (_b = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.addReaction) === null || _b === void 0 ? void 0 : _b.call(currentChannel, message, key).then(function (res) {
            logger.info('Thread | useToggleReactionsCallback: Add reaction succeeded.', res);
        }).catch(function (err) {
            logger.warning('Thread | useToggleReactionsCallback: Add reaction failed.', err);
        });
    }, [currentChannel]);
}

function useSendUserMessageCallback(_a, _b) {
    var isMentionEnabled = _a.isMentionEnabled, currentChannel = _a.currentChannel, onBeforeSendUserMessage = _a.onBeforeSendUserMessage;
    var logger = _b.logger, pubSub = _b.pubSub, threadDispatcher = _b.threadDispatcher;
    var sendMessage = useCallback(function (props) {
        var _a;
        var message = props.message, quoteMessage = props.quoteMessage, mentionTemplate = props.mentionTemplate, mentionedUsers = props.mentionedUsers;
        var createDefaultParams = function () {
            var params = {};
            params.message = message;
            var mentionedUsersLength = (mentionedUsers === null || mentionedUsers === void 0 ? void 0 : mentionedUsers.length) || 0;
            if (isMentionEnabled && mentionedUsersLength) {
                params.mentionedUsers = mentionedUsers;
            }
            if (isMentionEnabled && mentionTemplate && mentionedUsersLength) {
                params.mentionedMessageTemplate = mentionTemplate;
            }
            if (quoteMessage) {
                params.isReplyToChannel = true;
                params.parentMessageId = quoteMessage.messageId;
            }
            return params;
        };
        var params = (_a = onBeforeSendUserMessage === null || onBeforeSendUserMessage === void 0 ? void 0 : onBeforeSendUserMessage(message, quoteMessage)) !== null && _a !== void 0 ? _a : createDefaultParams();
        logger.info('Thread | useSendUserMessageCallback: Sending user message start.', params);
        if (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.sendUserMessage) {
            currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.sendUserMessage(params).onPending(function (pendingMessage) {
                threadDispatcher({
                    type: ThreadContextActionTypes.SEND_MESSAGE_START,
                    payload: { message: pendingMessage },
                });
            }).onFailed(function (error, message) {
                logger.info('Thread | useSendUserMessageCallback: Sending user message failed.', { message: message, error: error });
                threadDispatcher({
                    type: ThreadContextActionTypes.SEND_MESSAGE_FAILURE,
                    payload: { error: error, message: message },
                });
            }).onSucceeded(function (message) {
                logger.info('Thread | useSendUserMessageCallback: Sending user message succeeded.', message);
                // because Thread doesn't subscribe SEND_USER_MESSAGE
                pubSub.publish(pubSubTopics.SEND_USER_MESSAGE, {
                    channel: currentChannel,
                    message: message,
                    publishingModules: [PublishingModuleType.THREAD],
                });
            });
        }
    }, [isMentionEnabled, currentChannel]);
    return sendMessage;
}

function useResendMessageCallback(_a, _b) {
    var currentChannel = _a.currentChannel;
    var logger = _b.logger, pubSub = _b.pubSub, threadDispatcher = _b.threadDispatcher;
    return useCallback(function (failedMessage) {
        var _a, _b, _c, _d, _e;
        if (failedMessage === null || failedMessage === void 0 ? void 0 : failedMessage.isResendable) {
            logger.info('Thread | useResendMessageCallback: Resending failedMessage start.', failedMessage);
            if (((_a = failedMessage === null || failedMessage === void 0 ? void 0 : failedMessage.isUserMessage) === null || _a === void 0 ? void 0 : _a.call(failedMessage)) || (failedMessage === null || failedMessage === void 0 ? void 0 : failedMessage.messageType) === MessageType.USER) {
                try {
                    currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.resendMessage(failedMessage).onPending(function (message) {
                        logger.info('Thread | useResendMessageCallback: Resending user message started.', message);
                        threadDispatcher({
                            type: ThreadContextActionTypes.RESEND_MESSAGE_START,
                            payload: { message: message },
                        });
                    }).onSucceeded(function (message) {
                        logger.info('Thread | useResendMessageCallback: Resending user message succeeded.', message);
                        threadDispatcher({
                            type: ThreadContextActionTypes.SEND_MESSAGE_SUCESS,
                            payload: { message: message },
                        });
                        pubSub.publish(pubSubTopics.SEND_USER_MESSAGE, {
                            channel: currentChannel,
                            message: message,
                            publishingModules: [PublishingModuleType.THREAD],
                        });
                    }).onFailed(function (error) {
                        logger.warning('Thread | useResendMessageCallback: Resending user message failed.', error);
                        failedMessage.sendingStatus = SendingStatus.FAILED;
                        threadDispatcher({
                            type: ThreadContextActionTypes.SEND_MESSAGE_FAILURE,
                            payload: { message: failedMessage },
                        });
                    });
                }
                catch (err) {
                    logger.warning('Thread | useResendMessageCallback: Resending user message failed.', err);
                    failedMessage.sendingStatus = SendingStatus.FAILED;
                    threadDispatcher({
                        type: ThreadContextActionTypes.SEND_MESSAGE_FAILURE,
                        payload: { message: failedMessage },
                    });
                }
            }
            else if ((_b = failedMessage === null || failedMessage === void 0 ? void 0 : failedMessage.isFileMessage) === null || _b === void 0 ? void 0 : _b.call(failedMessage)) {
                try {
                    (_c = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.resendMessage) === null || _c === void 0 ? void 0 : _c.call(currentChannel, failedMessage).onPending(function (message) {
                        logger.info('Thread | useResendMessageCallback: Resending file message started.', message);
                        threadDispatcher({
                            type: ThreadContextActionTypes.RESEND_MESSAGE_START,
                            payload: { message: message },
                        });
                    }).onSucceeded(function (message) {
                        logger.info('Thread | useResendMessageCallback: Resending file message succeeded.', message);
                        threadDispatcher({
                            type: ThreadContextActionTypes.SEND_MESSAGE_SUCESS,
                            payload: { message: message },
                        });
                        pubSub.publish(pubSubTopics.SEND_FILE_MESSAGE, {
                            channel: currentChannel,
                            message: failedMessage,
                            publishingModules: [PublishingModuleType.THREAD],
                        });
                    }).onFailed(function (error) {
                        logger.warning('Thread | useResendMessageCallback: Resending file message failed.', error);
                        failedMessage.sendingStatus = SendingStatus.FAILED;
                        threadDispatcher({
                            type: ThreadContextActionTypes.SEND_MESSAGE_FAILURE,
                            payload: { message: failedMessage },
                        });
                    });
                }
                catch (err) {
                    logger.warning('Thread | useResendMessageCallback: Resending file message failed.', err);
                    failedMessage.sendingStatus = SendingStatus.FAILED;
                    threadDispatcher({
                        type: ThreadContextActionTypes.SEND_MESSAGE_FAILURE,
                        payload: { message: failedMessage },
                    });
                }
            }
            else if ((_d = failedMessage === null || failedMessage === void 0 ? void 0 : failedMessage.isMultipleFilesMessage) === null || _d === void 0 ? void 0 : _d.call(failedMessage)) {
                try {
                    (_e = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.resendMessage) === null || _e === void 0 ? void 0 : _e.call(currentChannel, failedMessage).onPending(function (message) {
                        logger.info('Thread | useResendMessageCallback: Resending multiple files message started.', message);
                        threadDispatcher({
                            type: ThreadContextActionTypes.RESEND_MESSAGE_START,
                            payload: { message: message },
                        });
                    }).onFileUploaded(function (requestId, index, uploadableFileInfo, error) {
                        logger.info('Thread | useResendMessageCallback: onFileUploaded during resending multiple files message.', {
                            requestId: requestId,
                            index: index,
                            error: error,
                            uploadableFileInfo: uploadableFileInfo,
                        });
                        pubSub.publish(pubSubTopics.ON_FILE_INFO_UPLOADED, {
                            response: {
                                channelUrl: currentChannel.url,
                                requestId: requestId,
                                index: index,
                                uploadableFileInfo: uploadableFileInfo,
                                error: error,
                            },
                            publishingModules: [PublishingModuleType.THREAD],
                        });
                    }).onSucceeded(function (message) {
                        logger.info('Thread | useResendMessageCallback: Resending MFM succeeded.', message);
                        threadDispatcher({
                            type: ThreadContextActionTypes.SEND_MESSAGE_SUCESS,
                            payload: { message: message },
                        });
                        pubSub.publish(pubSubTopics.SEND_FILE_MESSAGE, {
                            channel: currentChannel,
                            message: message,
                            publishingModules: [PublishingModuleType.THREAD],
                        });
                    }).onFailed(function (error, message) {
                        logger.warning('Thread | useResendMessageCallback: Resending MFM failed.', error);
                        threadDispatcher({
                            type: ThreadContextActionTypes.SEND_MESSAGE_FAILURE,
                            payload: { message: message },
                        });
                    });
                }
                catch (err) {
                    logger.warning('Thread | useResendMessageCallback: Resending MFM failed.', err);
                    threadDispatcher({
                        type: ThreadContextActionTypes.SEND_MESSAGE_FAILURE,
                        payload: { message: failedMessage },
                    });
                }
            }
            else {
                logger.warning('Thread | useResendMessageCallback: Message is not resendable.', failedMessage);
                failedMessage.sendingStatus = SendingStatus.FAILED;
                threadDispatcher({
                    type: ThreadContextActionTypes.SEND_MESSAGE_FAILURE,
                    payload: { message: failedMessage },
                });
            }
        }
    }, [currentChannel]);
}

var useSendVoiceMessageCallback = function (_a, _b) {
    var currentChannel = _a.currentChannel, onBeforeSendVoiceMessage = _a.onBeforeSendVoiceMessage;
    var logger = _b.logger, pubSub = _b.pubSub, threadDispatcher = _b.threadDispatcher;
    var sendMessage = useCallback(function (file, duration, quoteMessage) {
        var messageParams = (onBeforeSendVoiceMessage
            && typeof onBeforeSendVoiceMessage === 'function')
            ? onBeforeSendVoiceMessage(file, quoteMessage)
            : {
                file: file,
                fileName: VOICE_MESSAGE_FILE_NAME,
                mimeType: VOICE_MESSAGE_MIME_TYPE,
                metaArrays: [
                    new MessageMetaArray({
                        key: META_ARRAY_VOICE_DURATION_KEY,
                        value: ["".concat(duration)],
                    }),
                    new MessageMetaArray({
                        key: META_ARRAY_MESSAGE_TYPE_KEY,
                        value: [META_ARRAY_MESSAGE_TYPE_VALUE__VOICE],
                    }),
                ],
            };
        if (quoteMessage) {
            messageParams.isReplyToChannel = true;
            messageParams.parentMessageId = quoteMessage.messageId;
        }
        logger.info('Thread | useSendVoiceMessageCallback:  Start sending voice message', messageParams);
        currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.sendFileMessage(messageParams).onPending(function (pendingMessage) {
            threadDispatcher({
                type: ThreadContextActionTypes.SEND_MESSAGE_START,
                payload: {
                    /* pubSub is used instead of messagesDispatcher
                    to avoid redundantly calling `messageActionTypes.SEND_MESSAGE_START` */
                    // TODO: remove data pollution
                    message: __assign(__assign({}, pendingMessage), { url: URL.createObjectURL(file), 
                        // pending thumbnail message seems to be failed
                        requestState: 'pending', isUserMessage: pendingMessage.isUserMessage, isFileMessage: pendingMessage.isFileMessage, isAdminMessage: pendingMessage.isAdminMessage, isMultipleFilesMessage: pendingMessage.isMultipleFilesMessage }),
                },
            });
            setTimeout(function () { return scrollIntoLast(); }, SCROLL_BOTTOM_DELAY_FOR_SEND);
        }).onFailed(function (error, message) {
            message.localUrl = URL.createObjectURL(file);
            message.file = file;
            logger.info('Thread | useSendVoiceMessageCallback: Sending voice message failed.', { message: message, error: error });
            threadDispatcher({
                type: ThreadContextActionTypes.SEND_MESSAGE_FAILURE,
                payload: { message: message, error: error },
            });
        }).onSucceeded(function (message) {
            logger.info('Thread | useSendVoiceMessageCallback: Sending voice message succeeded.', message);
            pubSub.publish(pubSubTopics.SEND_FILE_MESSAGE, {
                channel: currentChannel,
                message: message,
                publishingModules: [PublishingModuleType.THREAD],
            });
        });
    }, [
        currentChannel,
        onBeforeSendVoiceMessage,
    ]);
    return sendMessage;
};

function getThreadMessageListParams(params) {
    return __assign({ prevResultSize: PREV_THREADS_FETCH_SIZE, nextResultSize: NEXT_THREADS_FETCH_SIZE, includeMetaArray: true }, params);
}
var useThreadFetchers = function (_a) {
    var isReactionEnabled = _a.isReactionEnabled, anchorMessage = _a.anchorMessage, staleParentMessage = _a.parentMessage, threadDispatcher = _a.threadDispatcher, logger = _a.logger, oldestMessageTimeStamp = _a.oldestMessageTimeStamp, latestMessageTimeStamp = _a.latestMessageTimeStamp, threadListState = _a.threadListState;
    var stores = useSendbirdStateContext().stores;
    var timestamp = (anchorMessage === null || anchorMessage === void 0 ? void 0 : anchorMessage.createdAt) || 0;
    var initialize = useCallback(function (callback) { return __awaiter(void 0, void 0, void 0, function () {
        var params, _a, threadedMessages_1, parentMessage, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!stores.sdkStore.initialized || !staleParentMessage)
                        return [2 /*return*/];
                    threadDispatcher({
                        type: ThreadContextActionTypes.INITIALIZE_THREAD_LIST_START,
                        payload: null,
                    });
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    params = getThreadMessageListParams({ includeReactions: isReactionEnabled });
                    logger.info('Thread | useGetThreadList: Initialize thread list start.', { timestamp: timestamp, params: params });
                    return [4 /*yield*/, staleParentMessage.getThreadedMessagesByTimestamp(timestamp, params)];
                case 2:
                    _a = _b.sent(), threadedMessages_1 = _a.threadedMessages, parentMessage = _a.parentMessage;
                    logger.info('Thread | useGetThreadList: Initialize thread list succeeded.', { staleParentMessage: staleParentMessage, threadedMessages: threadedMessages_1 });
                    threadDispatcher({
                        type: ThreadContextActionTypes.INITIALIZE_THREAD_LIST_SUCCESS,
                        payload: { parentMessage: parentMessage, anchorMessage: anchorMessage, threadedMessages: threadedMessages_1 },
                    });
                    setTimeout(function () { return callback === null || callback === void 0 ? void 0 : callback(threadedMessages_1); });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    logger.info('Thread | useGetThreadList: Initialize thread list failed.', error_1);
                    threadDispatcher({
                        type: ThreadContextActionTypes.INITIALIZE_THREAD_LIST_FAILURE,
                        payload: error_1,
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [stores.sdkStore.initialized, staleParentMessage, anchorMessage, isReactionEnabled]);
    var loadPrevious = useCallback(function (callback) { return __awaiter(void 0, void 0, void 0, function () {
        var params, _a, threadedMessages_2, parentMessage, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (threadListState !== ThreadListStateTypes.INITIALIZED || oldestMessageTimeStamp === 0 || !staleParentMessage)
                        return [2 /*return*/];
                    threadDispatcher({
                        type: ThreadContextActionTypes.GET_PREV_MESSAGES_START,
                        payload: null,
                    });
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    params = getThreadMessageListParams({ nextResultSize: 0, includeReactions: isReactionEnabled });
                    return [4 /*yield*/, staleParentMessage.getThreadedMessagesByTimestamp(oldestMessageTimeStamp, params)];
                case 2:
                    _a = _b.sent(), threadedMessages_2 = _a.threadedMessages, parentMessage = _a.parentMessage;
                    logger.info('Thread | useGetPrevThreadsCallback: Fetch prev threads succeeded.', { parentMessage: parentMessage, threadedMessages: threadedMessages_2 });
                    threadDispatcher({
                        type: ThreadContextActionTypes.GET_PREV_MESSAGES_SUCESS,
                        payload: { parentMessage: parentMessage, threadedMessages: threadedMessages_2 },
                    });
                    setTimeout(function () { return callback === null || callback === void 0 ? void 0 : callback(threadedMessages_2); });
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _b.sent();
                    logger.info('Thread | useGetPrevThreadsCallback: Fetch prev threads failed.', error_2);
                    threadDispatcher({
                        type: ThreadContextActionTypes.GET_PREV_MESSAGES_FAILURE,
                        payload: error_2,
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [threadListState, oldestMessageTimeStamp, isReactionEnabled, staleParentMessage]);
    var loadNext = useCallback(function (callback) { return __awaiter(void 0, void 0, void 0, function () {
        var params, _a, threadedMessages_3, parentMessage, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (threadListState !== ThreadListStateTypes.INITIALIZED || latestMessageTimeStamp === 0 || !staleParentMessage)
                        return [2 /*return*/];
                    threadDispatcher({
                        type: ThreadContextActionTypes.GET_NEXT_MESSAGES_START,
                        payload: null,
                    });
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    params = getThreadMessageListParams({ prevResultSize: 0, includeReactions: isReactionEnabled });
                    return [4 /*yield*/, staleParentMessage.getThreadedMessagesByTimestamp(latestMessageTimeStamp, params)];
                case 2:
                    _a = _b.sent(), threadedMessages_3 = _a.threadedMessages, parentMessage = _a.parentMessage;
                    logger.info('Thread | useGetNextThreadsCallback: Fetch next threads succeeded.', { parentMessage: parentMessage, threadedMessages: threadedMessages_3 });
                    threadDispatcher({
                        type: ThreadContextActionTypes.GET_NEXT_MESSAGES_SUCESS,
                        payload: { parentMessage: parentMessage, threadedMessages: threadedMessages_3 },
                    });
                    setTimeout(function () { return callback === null || callback === void 0 ? void 0 : callback(threadedMessages_3); });
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _b.sent();
                    logger.info('Thread | useGetNextThreadsCallback: Fetch next threads failed.', error_3);
                    threadDispatcher({
                        type: ThreadContextActionTypes.GET_NEXT_MESSAGES_FAILURE,
                        payload: error_3,
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [threadListState, latestMessageTimeStamp, isReactionEnabled, staleParentMessage]);
    return {
        initialize: initialize,
        loadPrevious: loadPrevious,
        loadNext: loadNext,
    };
};

var ThreadContext = React__default.createContext(null);
var ThreadProvider = function (props) {
    var _a, _b;
    var children = props.children, channelUrl = props.channelUrl, onHeaderActionClick = props.onHeaderActionClick, onMoveToParentMessage = props.onMoveToParentMessage, onBeforeSendUserMessage = props.onBeforeSendUserMessage, onBeforeSendFileMessage = props.onBeforeSendFileMessage, onBeforeSendVoiceMessage = props.onBeforeSendVoiceMessage, onBeforeSendMultipleFilesMessage = props.onBeforeSendMultipleFilesMessage, onBeforeDownloadFileMessage = props.onBeforeDownloadFileMessage, isMultipleFilesMessageEnabled = props.isMultipleFilesMessageEnabled, filterEmojiCategoryIds = props.filterEmojiCategoryIds;
    var propsMessage = props === null || props === void 0 ? void 0 : props.message;
    var propsParentMessage = getParentMessageFrom(propsMessage);
    // Context from SendbirdProvider
    var globalStore = useSendbirdStateContext();
    var stores = globalStore.stores, config = globalStore.config;
    // // stores
    var sdkStore = stores.sdkStore, userStore = stores.userStore;
    var sdk = sdkStore.sdk;
    var user = userStore.user;
    var sdkInit = sdkStore === null || sdkStore === void 0 ? void 0 : sdkStore.initialized;
    // // config
    var logger = config.logger, pubSub = config.pubSub;
    var isMentionEnabled = config.groupChannel.enableMention;
    var isReactionEnabled = config.groupChannel.enableReactions;
    // dux of Thread
    var _c = useReducer(reducer, initialState), threadStore = _c[0], threadDispatcher = _c[1];
    var currentChannel = threadStore.currentChannel, allThreadMessages = threadStore.allThreadMessages, localThreadMessages = threadStore.localThreadMessages, parentMessage = threadStore.parentMessage, channelState = threadStore.channelState, threadListState = threadStore.threadListState, parentMessageState = threadStore.parentMessageState, hasMorePrev = threadStore.hasMorePrev, hasMoreNext = threadStore.hasMoreNext, emojiContainer = threadStore.emojiContainer, isMuted = threadStore.isMuted, isChannelFrozen = threadStore.isChannelFrozen, currentUserId = threadStore.currentUserId, typingMembers = threadStore.typingMembers;
    // Initialization
    useEffect(function () {
        threadDispatcher({
            type: ThreadContextActionTypes.INIT_USER_ID,
            payload: user === null || user === void 0 ? void 0 : user.userId,
        });
    }, [user]);
    useGetChannel({
        channelUrl: channelUrl,
        sdkInit: sdkInit,
        message: propsMessage,
    }, { sdk: sdk, logger: logger, threadDispatcher: threadDispatcher });
    useGetParentMessage({
        channelUrl: channelUrl,
        sdkInit: sdkInit,
        parentMessage: propsParentMessage,
    }, { sdk: sdk, logger: logger, threadDispatcher: threadDispatcher });
    useGetAllEmoji({ sdk: sdk }, { logger: logger, threadDispatcher: threadDispatcher });
    // Handle channel events
    useHandleChannelEvents({
        sdk: sdk,
        currentChannel: currentChannel,
    }, { logger: logger, threadDispatcher: threadDispatcher });
    useHandleThreadPubsubEvents({
        sdkInit: sdkInit,
        currentChannel: currentChannel,
        parentMessage: parentMessage,
    }, { logger: logger, pubSub: pubSub, threadDispatcher: threadDispatcher });
    var _d = useThreadFetchers({
        parentMessage: parentMessage,
        // anchorMessage should be null when parentMessage doesn't exist
        anchorMessage: (propsMessage === null || propsMessage === void 0 ? void 0 : propsMessage.messageId) !== (propsParentMessage === null || propsParentMessage === void 0 ? void 0 : propsParentMessage.messageId) ? propsMessage || undefined : undefined,
        logger: logger,
        isReactionEnabled: isReactionEnabled,
        threadDispatcher: threadDispatcher,
        threadListState: threadListState,
        oldestMessageTimeStamp: ((_a = allThreadMessages[0]) === null || _a === void 0 ? void 0 : _a.createdAt) || 0,
        latestMessageTimeStamp: ((_b = allThreadMessages[allThreadMessages.length - 1]) === null || _b === void 0 ? void 0 : _b.createdAt) || 0,
    }), initialize = _d.initialize, loadPrevious = _d.loadPrevious, loadNext = _d.loadNext;
    useEffect(function () {
        if (stores.sdkStore.initialized && config.isOnline) {
            initialize();
        }
    }, [stores.sdkStore.initialized, config.isOnline, initialize]);
    var toggleReaction = useToggleReactionCallback({ currentChannel: currentChannel }, { logger: logger });
    // Send Message Hooks
    var sendMessage = useSendUserMessageCallback({
        isMentionEnabled: isMentionEnabled,
        currentChannel: currentChannel,
        onBeforeSendUserMessage: onBeforeSendUserMessage,
    }, {
        logger: logger,
        pubSub: pubSub,
        threadDispatcher: threadDispatcher,
    });
    var sendFileMessage = useSendFileMessageCallback({
        currentChannel: currentChannel,
        onBeforeSendFileMessage: onBeforeSendFileMessage,
    }, {
        logger: logger,
        pubSub: pubSub,
        threadDispatcher: threadDispatcher,
    });
    var sendVoiceMessage = useSendVoiceMessageCallback({
        currentChannel: currentChannel,
        onBeforeSendVoiceMessage: onBeforeSendVoiceMessage,
    }, {
        logger: logger,
        pubSub: pubSub,
        threadDispatcher: threadDispatcher,
    });
    var sendMultipleFilesMessage = useSendMultipleFilesMessage({
        currentChannel: currentChannel,
        onBeforeSendMultipleFilesMessage: onBeforeSendMultipleFilesMessage,
        publishingModules: [PublishingModuleType.THREAD],
    }, {
        logger: logger,
        pubSub: pubSub,
    })[0];
    var resendMessage = useResendMessageCallback({
        currentChannel: currentChannel,
    }, { logger: logger, pubSub: pubSub, threadDispatcher: threadDispatcher });
    var updateMessage = useUpdateMessageCallback({
        currentChannel: currentChannel,
        isMentionEnabled: isMentionEnabled,
    }, { logger: logger, pubSub: pubSub, threadDispatcher: threadDispatcher });
    var deleteMessage = useDeleteMessageCallback({ currentChannel: currentChannel, threadDispatcher: threadDispatcher }, { logger: logger });
    // memo
    var nicknamesMap = useMemo(function () { return ((config.groupChannel.replyType !== 'none' && currentChannel)
        ? getNicknamesMapFromMembers(currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.members)
        : new Map()); }, [currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.members]);
    return (React__default.createElement(ThreadContext.Provider, { value: {
            // ThreadProviderProps
            channelUrl: channelUrl,
            message: propsMessage,
            onHeaderActionClick: onHeaderActionClick,
            onMoveToParentMessage: onMoveToParentMessage,
            isMultipleFilesMessageEnabled: isMultipleFilesMessageEnabled,
            onBeforeDownloadFileMessage: onBeforeDownloadFileMessage,
            // ThreadContextInitialState
            currentChannel: currentChannel,
            allThreadMessages: allThreadMessages,
            localThreadMessages: localThreadMessages,
            parentMessage: parentMessage,
            channelState: channelState,
            threadListState: threadListState,
            parentMessageState: parentMessageState,
            hasMorePrev: hasMorePrev,
            hasMoreNext: hasMoreNext,
            emojiContainer: emojiContainer,
            // hooks
            fetchPrevThreads: loadPrevious,
            fetchNextThreads: loadNext,
            toggleReaction: toggleReaction,
            sendMessage: sendMessage,
            sendFileMessage: sendFileMessage,
            sendVoiceMessage: sendVoiceMessage,
            sendMultipleFilesMessage: sendMultipleFilesMessage,
            resendMessage: resendMessage,
            updateMessage: updateMessage,
            deleteMessage: deleteMessage,
            // context
            nicknamesMap: nicknamesMap,
            isMuted: isMuted,
            isChannelFrozen: isChannelFrozen,
            currentUserId: currentUserId,
            typingMembers: typingMembers,
            filterEmojiCategoryIds: filterEmojiCategoryIds,
        } },
        React__default.createElement(UserProfileProvider, __assign({}, props), children)));
};
var useThreadContext = function () {
    var context = React__default.useContext(ThreadContext);
    if (!context)
        throw new Error('ThreadContext not found. Use within the Thread module');
    return context;
};

export { ThreadProvider, useThreadContext };
//# sourceMappingURL=context.js.map
