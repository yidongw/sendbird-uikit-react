import { a as __awaiter, b as __generator, c as __spreadArray } from './bundle-HcNswZ5p.js';
import React__default, { useRef, useState, useEffect, useCallback } from 'react';
import { i as isDisabledBecauseFrozen, a as isDisabledBecauseMuted, b as isDisabledBecauseSuggestedReplies, c as isDisabledBecauseMessageForm } from './bundle-BB4cJn39.js';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import { u as useLocalization } from './bundle-DhMUg-L7.js';
import { SuggestedMentionList } from '../GroupChannel/components/SuggestedMentionList.js';
import { useDirtyGetMentions } from '../Message/hooks/useDirtyGetMentions.js';
import QuoteMessageInput from '../ui/QuoteMessageInput.js';
import { useVoicePlayer } from '../VoicePlayer/useVoicePlayer.js';
import { useVoiceRecorder, VoiceRecorderStatus } from '../VoiceRecorder/useVoiceRecorder.js';
import { V as VoiceMessageInputStatus, a as VoiceMessageInput } from './bundle-DzdrCQZi.js';
import { M as Modal, b as useGlobalModalContext, c as ModalFooter } from './bundle-ja8H3E0K.js';
import Button, { ButtonTypes, ButtonSizes } from '../ui/Button.js';
import { V as VOICE_PLAYER_STATUS } from './bundle-zy1mnw8U.js';
import { u as uuidv4 } from './bundle-C5iY_IvV.js';
import MessageInput from '../ui/MessageInput.js';
import { u as useMediaQueryContext } from './bundle-DnSobLtx.js';
import { M as MessageInputKeys } from './bundle-lUbYBD0x.js';
import { k as isImage } from './bundle-Bd-i99nk.js';
import './bundle-Qkp2VIaZ.js';
import { c as compressImages } from './bundle-HPKdeJ0K.js';

var VoiceMessageInputWrapper = function (_a) {
    var channel = _a.channel, onCancelClick = _a.onCancelClick, onSubmitClick = _a.onSubmitClick;
    var uuid = useRef(uuidv4()).current;
    var _b = useState(null), audioFile = _b[0], setAudioFile = _b[1];
    var _c = useState(VoiceMessageInputStatus.READY_TO_RECORD), voiceInputState = _c[0], setVoiceInputState = _c[1];
    var _d = useState(false), isSubmitted = _d[0], setSubmit = _d[1];
    var _e = useState(false), isDisabled = _e[0], setDisabled = _e[1];
    var _f = useState(false), showModal = _f[0], setShowModal = _f[1];
    var stringSet = useLocalization().stringSet;
    var config = useSendbirdStateContext().config;
    var _g = useVoiceRecorder({
        onRecordingStarted: function () {
            setVoiceInputState(VoiceMessageInputStatus.RECORDING);
        },
        onRecordingEnded: function (audioFile) {
            setAudioFile(audioFile);
        },
    }), start = _g.start, stop = _g.stop, cancel = _g.cancel, recordingTime = _g.recordingTime, recordingStatus = _g.recordingStatus, recordingLimit = _g.recordingLimit;
    var voicePlayer = useVoicePlayer({
        channelUrl: channel === null || channel === void 0 ? void 0 : channel.url,
        key: uuid,
        audioFile: audioFile !== null && audioFile !== void 0 ? audioFile : undefined,
    });
    var play = voicePlayer.play, pause = voicePlayer.pause, playbackTime = voicePlayer.playbackTime, playingStatus = voicePlayer.playingStatus;
    var stopVoicePlayer = voicePlayer.stop;
    // disabled state: muted & frozen
    useEffect(function () {
        if (isDisabledBecauseFrozen(channel) || isDisabledBecauseMuted(channel)) {
            setDisabled(true);
        }
        else {
            setDisabled(false);
        }
    }, [channel === null || channel === void 0 ? void 0 : channel.myRole, channel === null || channel === void 0 ? void 0 : channel.isFrozen, channel === null || channel === void 0 ? void 0 : channel.myMutedState]);
    // call onSubmitClick when submit button is clicked and recorded audio file is created
    useEffect(function () {
        if (isSubmitted && audioFile) {
            onSubmitClick === null || onSubmitClick === void 0 ? void 0 : onSubmitClick(audioFile, recordingTime);
            setSubmit(false);
            setAudioFile(null);
        }
    }, [isSubmitted, audioFile, recordingTime]);
    // operate which control button should be displayed
    useEffect(function () {
        if (audioFile) {
            if (recordingTime < config.voiceRecord.minRecordingTime) {
                setVoiceInputState(VoiceMessageInputStatus.READY_TO_RECORD);
                setAudioFile(null);
            }
            else if (playingStatus === VOICE_PLAYER_STATUS.PLAYING) {
                setVoiceInputState(VoiceMessageInputStatus.PLAYING);
            }
            else {
                setVoiceInputState(VoiceMessageInputStatus.READY_TO_PLAY);
            }
        }
    }, [audioFile, recordingTime, playingStatus]);
    return (React__default.createElement("div", { className: "sendbird-voice-message-input-wrapper" },
        React__default.createElement(VoiceMessageInput, { currentValue: recordingStatus === VoiceRecorderStatus.COMPLETED ? playbackTime : recordingTime, maximumValue: recordingStatus === VoiceRecorderStatus.COMPLETED ? recordingTime : recordingLimit, currentType: voiceInputState, onCancelClick: function () {
                onCancelClick === null || onCancelClick === void 0 ? void 0 : onCancelClick();
                cancel();
                stopVoicePlayer();
            }, onSubmitClick: function () {
                if (isDisabled) {
                    setShowModal(true);
                    setVoiceInputState(VoiceMessageInputStatus.READY_TO_RECORD);
                }
                else {
                    stop();
                    pause();
                    setSubmit(true);
                }
            }, onControlClick: function (type) {
                switch (type) {
                    case VoiceMessageInputStatus.READY_TO_RECORD: {
                        stopVoicePlayer();
                        start();
                        break;
                    }
                    case VoiceMessageInputStatus.RECORDING: {
                        if (recordingTime >= config.voiceRecord.minRecordingTime && !isDisabled) {
                            stop();
                        }
                        else if (isDisabled) {
                            cancel();
                            setShowModal(true);
                            setVoiceInputState(VoiceMessageInputStatus.READY_TO_RECORD);
                        }
                        else {
                            cancel();
                            setVoiceInputState(VoiceMessageInputStatus.READY_TO_RECORD);
                        }
                        break;
                    }
                    case VoiceMessageInputStatus.READY_TO_PLAY: {
                        play();
                        break;
                    }
                    case VoiceMessageInputStatus.PLAYING: {
                        pause();
                        break;
                    }
                }
            } }),
        showModal && (React__default.createElement(Modal, { className: "sendbird-voice-message-input-wrapper-alert", titleText: isDisabledBecauseMuted(channel)
                ? stringSet.MODAL__VOICE_MESSAGE_INPUT_DISABLED__TITLE_MUTED
                : stringSet.MODAL__VOICE_MESSAGE_INPUT_DISABLED__TITLE_FROZEN, hideFooter: true, isCloseOnClickOutside: true, onClose: function () {
                setShowModal(false);
                onCancelClick === null || onCancelClick === void 0 ? void 0 : onCancelClick();
            } },
            React__default.createElement("div", { className: "sendbird-voice-message-input-wrapper-alert__body" },
                React__default.createElement(Button, { className: "sendbird-voice-message-input-wrapper-alert__body__ok-button", type: ButtonTypes.PRIMARY, size: ButtonSizes.BIG, onClick: function () {
                        setShowModal(false);
                        onCancelClick === null || onCancelClick === void 0 ? void 0 : onCancelClick();
                    } }, stringSet.BUTTON__OK))))));
};

var useHandleUploadFiles = function (_a, _b) {
    var sendFileMessage = _a.sendFileMessage, sendMultipleFilesMessage = _a.sendMultipleFilesMessage, quoteMessage = _a.quoteMessage;
    var logger = _b.logger;
    var stringSet = useLocalization().stringSet;
    var config = useSendbirdStateContext().config;
    var imageCompression = config.imageCompression;
    var uikitUploadSizeLimit = config === null || config === void 0 ? void 0 : config.uikitUploadSizeLimit;
    var uikitMultipleFilesMessageLimit = config === null || config === void 0 ? void 0 : config.uikitMultipleFilesMessageLimit;
    var openModal = useGlobalModalContext().openModal;
    return useCallback(function (files) { return __awaiter(void 0, void 0, void 0, function () {
        var ONE_MiB, compressedFiles, sendingFiles, file, imageFiles_1, otherFiles_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (files.length === 0) {
                        logger.warning('Channel|useHandleUploadFiles: given file list is empty.', { files: files });
                        return [2 /*return*/];
                    }
                    if (files.length > uikitMultipleFilesMessageLimit) {
                        logger.info("Channel|useHandleUploadFiles: Cannot upload files more than ".concat(uikitMultipleFilesMessageLimit));
                        openModal({
                            modalProps: {
                                titleText: stringSet.FILE_UPLOAD_NOTIFICATION__COUNT_LIMIT.replace('%d', "".concat(uikitUploadSizeLimit)),
                                hideFooter: true,
                            },
                            childElement: function (_a) {
                                var closeModal = _a.closeModal;
                                return (React__default.createElement(ModalFooter, { type: ButtonTypes.PRIMARY, submitText: stringSet.BUTTON__OK, hideCancelButton: true, onCancel: closeModal, onSubmit: closeModal }));
                            },
                        });
                        return [2 /*return*/];
                    }
                    // Validate file sizes
                    if (files.some(function (file) { return file.size > uikitUploadSizeLimit; })) {
                        // The default value of uikitUploadSizeLimit is 26MB
                        logger.info("Channel|useHandleUploadFiles: Cannot upload file size exceeding ".concat(uikitUploadSizeLimit));
                        ONE_MiB = 1024 * 1024;
                        openModal({
                            modalProps: {
                                titleText: stringSet.FILE_UPLOAD_NOTIFICATION__SIZE_LIMIT.replace('%d', "".concat(Math.floor(uikitUploadSizeLimit / ONE_MiB))),
                                hideFooter: true,
                            },
                            childElement: function (_a) {
                                var closeModal = _a.closeModal;
                                return (React__default.createElement(ModalFooter, { type: ButtonTypes.PRIMARY, submitText: stringSet.BUTTON__OK, hideCancelButton: true, onCancel: closeModal, onSubmit: closeModal }));
                            },
                        });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, compressImages({
                            files: files,
                            imageCompression: imageCompression,
                            logger: logger,
                        })];
                case 1:
                    compressedFiles = (_a.sent()).compressedFiles;
                    sendingFiles = compressedFiles;
                    // Send File Message
                    if (sendingFiles.length === 1) {
                        logger.info('Channel|useHandleUploadFiles: sending one file.');
                        file = sendingFiles[0];
                        return [2 /*return*/, sendFileMessage({ file: file, parentMessageId: quoteMessage === null || quoteMessage === void 0 ? void 0 : quoteMessage.messageId })];
                    }
                    else if (sendingFiles.length > 1) {
                        logger.info('Channel|useHandleUploadFiles: sending multiple files.');
                        imageFiles_1 = [];
                        otherFiles_1 = [];
                        sendingFiles.forEach(function (file) {
                            if (isImage(file.type)) {
                                imageFiles_1.push(file);
                            }
                            else {
                                otherFiles_1.push(file);
                            }
                        });
                        return [2 /*return*/, otherFiles_1.reduce(function (previousPromise, item) {
                                return previousPromise.then(function () {
                                    return sendFileMessage({ file: item, parentMessageId: quoteMessage === null || quoteMessage === void 0 ? void 0 : quoteMessage.messageId });
                                });
                            }, (function () {
                                if (imageFiles_1.length === 0) {
                                    return Promise.resolve();
                                }
                                else if (imageFiles_1.length === 1) {
                                    return sendFileMessage({ file: imageFiles_1[0] });
                                }
                                else {
                                    return sendMultipleFilesMessage({
                                        fileInfoList: imageFiles_1.map(function (file) { return ({
                                            file: file,
                                            fileName: file.name,
                                            fileSize: file.size,
                                            mimeType: file.type,
                                        }); }),
                                        parentMessageId: quoteMessage === null || quoteMessage === void 0 ? void 0 : quoteMessage.messageId,
                                    });
                                }
                            })())];
                    }
                    return [2 /*return*/];
            }
        });
    }); }, [sendFileMessage, sendMultipleFilesMessage, quoteMessage]);
};

var MessageInputWrapperView = React__default.forwardRef(function (props, ref) {
    var _a;
    // Props
    var currentChannel = props.currentChannel, messages = props.messages, loading = props.loading, quoteMessage = props.quoteMessage, setQuoteMessage = props.setQuoteMessage, messageInputRef = props.messageInputRef, sendUserMessage = props.sendUserMessage, sendFileMessage = props.sendFileMessage, sendVoiceMessage = props.sendVoiceMessage, sendMultipleFilesMessage = props.sendMultipleFilesMessage, 
    // render
    renderUserMentionItem = props.renderUserMentionItem, renderFileUploadIcon = props.renderFileUploadIcon, renderVoiceMessageIcon = props.renderVoiceMessageIcon, renderSendMessageIcon = props.renderSendMessageIcon, acceptableMimeTypes = props.acceptableMimeTypes, disabled = props.disabled;
    var stringSet = useLocalization().stringSet;
    var isMobile = useMediaQueryContext().isMobile;
    var _b = useSendbirdStateContext(), stores = _b.stores, config = _b.config;
    var isOnline = config.isOnline, userMention = config.userMention, logger = config.logger, groupChannel = config.groupChannel;
    var sdk = stores.sdkStore.sdk;
    var maxMentionCount = userMention.maxMentionCount, maxSuggestionCount = userMention.maxSuggestionCount;
    var isBroadcast = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.isBroadcast;
    var isOperator = (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.myRole) === 'operator';
    var isMultipleFilesMessageEnabled = (_a = props.isMultipleFilesMessageEnabled) !== null && _a !== void 0 ? _a : config.isMultipleFilesMessageEnabled;
    var isMentionEnabled = groupChannel.enableMention;
    var isVoiceMessageEnabled = groupChannel.enableVoiceMessage;
    // States
    var _c = useState(''), mentionNickname = _c[0], setMentionNickname = _c[1];
    var _d = useState([]), mentionedUsers = _d[0], setMentionedUsers = _d[1];
    var _e = useState([]), mentionedUserIds = _e[0], setMentionedUserIds = _e[1];
    var _f = useState(null), selectedUser = _f[0], setSelectedUser = _f[1];
    var _g = useState([]), mentionSuggestedUsers = _g[0], setMentionSuggestedUsers = _g[1];
    var _h = useState(null), messageInputEvent = _h[0], setMessageInputEvent = _h[1];
    var _j = useState(false), showVoiceMessageInput = _j[0], setShowVoiceMessageInput = _j[1];
    // Conditions
    var isMessageInputDisabled = loading
        || (!currentChannel || !sdk)
        || (!sdk.isCacheEnabled && !isOnline)
        || isDisabledBecauseFrozen(currentChannel)
        || isDisabledBecauseMuted(currentChannel)
        || isDisabledBecauseSuggestedReplies(currentChannel, config.groupChannel.enableSuggestedReplies)
        || isDisabledBecauseMessageForm(messages, config.groupChannel.enableFormTypeMessage)
        || disabled;
    var showSuggestedMentionList = !isMessageInputDisabled
        && isMentionEnabled
        && mentionNickname.length > 0
        && !isBroadcast;
    var mentionNodes = useDirtyGetMentions({ ref: (ref || messageInputRef) }, { logger: logger });
    var ableMention = (mentionNodes === null || mentionNodes === void 0 ? void 0 : mentionNodes.length) < maxMentionCount;
    // Operate states
    useEffect(function () {
        setMentionNickname('');
        setMentionedUsers([]);
        setMentionedUserIds([]);
        setSelectedUser(null);
        setMentionSuggestedUsers([]);
        setMessageInputEvent(null);
        setShowVoiceMessageInput(false);
    }, [currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url]);
    useEffect(function () {
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
    // Callbacks
    var handleUploadFiles = useHandleUploadFiles({
        sendFileMessage: sendFileMessage,
        sendMultipleFilesMessage: sendMultipleFilesMessage,
        quoteMessage: quoteMessage !== null && quoteMessage !== void 0 ? quoteMessage : undefined,
    }, { logger: logger });
    if (isBroadcast && !isOperator) {
        /* Only `Operator` can send messages in the Broadcast channel */
        return null;
    }
    // other conditions
    return (React__default.createElement("div", { className: showVoiceMessageInput ? 'sendbird-message-input-wrapper--voice-message' : 'sendbird-message-input-wrapper' },
        showSuggestedMentionList && (React__default.createElement(SuggestedMentionList, { currentChannel: currentChannel, targetNickname: mentionNickname, inputEvent: messageInputEvent !== null && messageInputEvent !== void 0 ? messageInputEvent : undefined, renderUserMentionItem: renderUserMentionItem, onUserItemClick: function (user) {
                if (user) {
                    setMentionedUsers(__spreadArray(__spreadArray([], mentionedUsers, true), [user], false));
                }
                setMentionNickname('');
                setSelectedUser(user);
                setMessageInputEvent(null);
            }, onFocusItemChange: function () {
                setMessageInputEvent(null);
            }, onFetchUsers: function (users) {
                setMentionSuggestedUsers(users);
            }, ableAddMention: ableMention, maxMentionCount: maxMentionCount, maxSuggestionCount: maxSuggestionCount })),
        quoteMessage && (React__default.createElement("div", { className: "sendbird-message-input-wrapper__quote-message-input" },
            React__default.createElement(QuoteMessageInput, { replyingMessage: quoteMessage, onClose: function () { return setQuoteMessage(null); } }))),
        showVoiceMessageInput ? (React__default.createElement(VoiceMessageInputWrapper, { channel: currentChannel !== null && currentChannel !== void 0 ? currentChannel : undefined, onSubmitClick: function (recordedFile, duration) {
                sendVoiceMessage({ file: recordedFile, parentMessageId: quoteMessage === null || quoteMessage === void 0 ? void 0 : quoteMessage.messageId }, duration);
                setQuoteMessage(null);
                setShowVoiceMessageInput(false);
            }, onCancelClick: function () {
                setShowVoiceMessageInput(false);
            } })) : (React__default.createElement(MessageInput, { className: "sendbird-message-input-wrapper__message-input", channel: currentChannel, channelUrl: currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url, isMobile: isMobile, acceptableMimeTypes: acceptableMimeTypes, mentionSelectedUser: selectedUser, isMentionEnabled: isMentionEnabled, isVoiceMessageEnabled: isVoiceMessageEnabled, isSelectingMultipleFilesEnabled: isMultipleFilesMessageEnabled, onVoiceMessageIconClick: function () {
                setShowVoiceMessageInput(true);
            }, setMentionedUsers: setMentionedUsers, placeholder: (quoteMessage && stringSet.MESSAGE_INPUT__QUOTE_REPLY__PLACE_HOLDER)
                || (isDisabledBecauseFrozen(currentChannel) && stringSet.MESSAGE_INPUT__PLACE_HOLDER__FROZEN)
                || (isDisabledBecauseMuted(currentChannel)
                    && (isMobile
                        ? stringSet.MESSAGE_INPUT__PLACE_HOLDER__MUTED_SHORT
                        : stringSet.MESSAGE_INPUT__PLACE_HOLDER__MUTED))
                || (isDisabledBecauseSuggestedReplies(currentChannel, config.groupChannel.enableSuggestedReplies)
                    && stringSet.MESSAGE_INPUT__PLACE_HOLDER__SUGGESTED_REPLIES)
                || (isDisabledBecauseMessageForm(messages, config.groupChannel.enableFormTypeMessage)
                    && stringSet.MESSAGE_INPUT__PLACE_HOLDER__MESSAGE_FORM)
                || (disabled && stringSet.MESSAGE_INPUT__PLACE_HOLDER__DISABLED)
                || undefined, ref: (ref || messageInputRef), disabled: isMessageInputDisabled, renderFileUploadIcon: renderFileUploadIcon, renderSendMessageIcon: renderSendMessageIcon, renderVoiceMessageIcon: renderVoiceMessageIcon, onStartTyping: function () {
                currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.startTyping();
            }, onSendMessage: function (_a) {
                var _b;
                var message = _a.message, mentionTemplate = _a.mentionTemplate;
                sendUserMessage({
                    message: message,
                    mentionedUsers: mentionedUsers,
                    mentionedMessageTemplate: mentionTemplate,
                    parentMessageId: quoteMessage === null || quoteMessage === void 0 ? void 0 : quoteMessage.messageId,
                });
                setMentionNickname('');
                setMentionedUsers([]);
                setQuoteMessage(null);
                (_b = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.endTyping) === null || _b === void 0 ? void 0 : _b.call(currentChannel);
            }, onFileUpload: function (fileList) {
                handleUploadFiles(fileList);
                setQuoteMessage(null);
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
                if (showSuggestedMentionList
                    && (mentionSuggestedUsers === null || mentionSuggestedUsers === void 0 ? void 0 : mentionSuggestedUsers.length) > 0
                    && ((e.key === MessageInputKeys.Enter && ableMention)
                        || e.key === MessageInputKeys.ArrowUp
                        || e.key === MessageInputKeys.ArrowDown)) {
                    setMessageInputEvent(e);
                    return true;
                }
                return false;
            } }))));
});

export { MessageInputWrapperView as M, VoiceMessageInputWrapper as V };
//# sourceMappingURL=bundle-9bLgMxxd.js.map
