'use strict';

var _tslib = require('../../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var groupChannel = require('@sendbird/chat/groupChannel');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var MediaQueryContext = require('../../chunks/bundle-DrIKAEHN.js');
var Thread_context = require('../context.js');
var LocalizationContext = require('../../chunks/bundle-Cy1ruNzs.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var _const = require('../../chunks/bundle-CfV7jROn.js');
var SuggestedMentionList = require('../../chunks/bundle-DPjtF20V.js');
var MessageInputWrapperView = require('../../chunks/bundle-CdcQAzUs.js');
require('../../GroupChannel/context.js');
var types = require('../../chunks/bundle-BA-5SFdp.js');
var Message_hooks_useDirtyGetMentions = require('../../Message/hooks/useDirtyGetMentions.js');
var Channel_hooks_useHandleUploadFiles = require('../../Channel/hooks/useHandleUploadFiles.js');
var utils = require('../../chunks/bundle-BNuA_uqY.js');
var utils$1 = require('../../chunks/bundle-Ck6ikNW6.js');
require('../../withSendbird.js');
require('../../chunks/bundle-Bs36T7L5.js');
require('../../chunks/bundle-C6Q6BfQY.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('../../chunks/bundle-DgjptBQW.js');
require('@sendbird/uikit-tools');
require('../../chunks/bundle-DZhkNDpN.js');
require('../../chunks/bundle-BLoixwYr.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-C2CwvM-u.js');
require('react-dom');
require('../../ui/IconButton.js');
require('../../ui/Button.js');
require('../../chunks/bundle-CAR4EIKs.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../ui/Icon.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../../chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('../../ui/SortByRow.js');
require('../context/types.js');
require('../../chunks/bundle-wYxshM30.js');
require('../../chunks/bundle-Dh0NAI0D.js');
require('@sendbird/chat/message');
require('../../chunks/bundle-CtHeiC70.js');
require('../../chunks/bundle-CCtdwkHe.js');
require('dompurify');
require('../../chunks/bundle-By5v4zYf.js');
require('../../chunks/bundle-DobO_BAb.js');
require('../../chunks/bundle-BaSZqehS.js');
require('../../chunks/bundle-BIkitklZ.js');
require('../../chunks/bundle-kFYCld9C.js');
require('../../chunks/bundle-C8wv9DWs.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../chunks/bundle-w0Wt2aBx.js');
require('../../GroupChannel/components/SuggestedMentionList.js');
require('../../ui/QuoteMessageInput.js');
require('../../chunks/bundle-DEjC6RIv.js');
require('../../VoicePlayer/useVoicePlayer.js');
require('../../VoiceRecorder/useVoiceRecorder.js');
require('../../chunks/bundle-BL2PtzAF.js');
require('../../ui/PlaybackTime.js');
require('../../ui/ProgressBar.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-CLzI6bbe.js');
require('../../chunks/bundle-BdRSDnh9.js');
require('../../chunks/bundle-CpJ9tVDn.js');
require('../../chunks/bundle-DvvdekCh.js');
require('../../chunks/bundle-CzBskCon.js');
require('../../chunks/bundle-CVdJh4P7.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var ThreadMessageInput = function (props, ref) {
    var _a;
    var className = props.className, renderFileUploadIcon = props.renderFileUploadIcon, renderVoiceMessageIcon = props.renderVoiceMessageIcon, renderSendMessageIcon = props.renderSendMessageIcon, acceptableMimeTypes = props.acceptableMimeTypes;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var isOnline = config.isOnline, userMention = config.userMention, logger = config.logger, groupChannel$1 = config.groupChannel;
    var threadContext = Thread_context.useThreadContext();
    var currentChannel = threadContext.currentChannel, parentMessage = threadContext.parentMessage, sendMessage = threadContext.sendMessage, sendFileMessage = threadContext.sendFileMessage, sendVoiceMessage = threadContext.sendVoiceMessage, sendMultipleFilesMessage = threadContext.sendMultipleFilesMessage, isMuted = threadContext.isMuted, isChannelFrozen = threadContext.isChannelFrozen, allThreadMessages = threadContext.allThreadMessages;
    var messageInputRef = React.useRef();
    var isMentionEnabled = groupChannel$1.enableMention;
    var isVoiceMessageEnabled = groupChannel$1.enableVoiceMessage;
    var isMultipleFilesMessageEnabled = (_a = threadContext.isMultipleFilesMessageEnabled) !== null && _a !== void 0 ? _a : config.isMultipleFilesMessageEnabled;
    var threadInputDisabled = props.disabled
        || !isOnline
        || isMuted
        || (!((currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.myRole) === types.Role.OPERATOR) && isChannelFrozen) || parentMessage === null;
    // MFM
    var handleUploadFiles = Channel_hooks_useHandleUploadFiles.useHandleUploadFiles({
        sendFileMessage: sendFileMessage,
        sendMultipleFilesMessage: sendMultipleFilesMessage,
        quoteMessage: parentMessage,
    }, {
        logger: logger,
    });
    // mention
    var _b = React.useState(''), mentionNickname = _b[0], setMentionNickname = _b[1];
    var _c = React.useState([]), mentionedUsers = _c[0], setMentionedUsers = _c[1];
    var _d = React.useState([]), mentionedUserIds = _d[0], setMentionedUserIds = _d[1];
    var _e = React.useState(null), selectedUser = _e[0], setSelectedUser = _e[1];
    var _f = React.useState([]), mentionSuggestedUsers = _f[0], setMentionSuggestedUsers = _f[1];
    var _g = React.useState(null), messageInputEvent = _g[0], setMessageInputEvent = _g[1];
    var _h = React.useState(false), showVoiceMessageInput = _h[0], setShowVoiceMessageInput = _h[1];
    var displaySuggestedMentionList = isOnline
        && isMentionEnabled
        && mentionNickname.length > 0
        && !utils.isDisabledBecauseFrozen(currentChannel)
        && !utils.isDisabledBecauseMuted(currentChannel)
        && !(currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.isBroadcast);
    // Reset when changing channel
    React.useEffect(function () {
        setShowVoiceMessageInput(false);
    }, [currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url]);
    var mentionNodes = Message_hooks_useDirtyGetMentions.useDirtyGetMentions({ ref: ref || messageInputRef }, { logger: logger });
    var ableMention = (mentionNodes === null || mentionNodes === void 0 ? void 0 : mentionNodes.length) < (userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount);
    React.useEffect(function () {
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
    if ((currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.isBroadcast) && (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.myRole) !== types.Role.OPERATOR) {
        return React__default.default.createElement(React__default.default.Fragment, null);
    }
    return (React__default.default.createElement("div", { className: utils$1.classnames(showVoiceMessageInput ? 'sendbird-thread-message-input--voice-message' : 'sendbird-thread-message-input', className) },
        displaySuggestedMentionList && (React__default.default.createElement(SuggestedMentionList.SuggestedMentionList, { targetNickname: mentionNickname, inputEvent: messageInputEvent !== null && messageInputEvent !== void 0 ? messageInputEvent : undefined, 
            // renderUserMentionItem={renderUserMentionItem}
            onUserItemClick: function (user) {
                if (user) {
                    setMentionedUsers(_tslib.__spreadArray(_tslib.__spreadArray([], mentionedUsers, true), [user], false));
                }
                setMentionNickname('');
                setSelectedUser(user);
                setMessageInputEvent(null);
            }, onFocusItemChange: function () {
                setMessageInputEvent(null);
            }, onFetchUsers: function (users) {
                setMentionSuggestedUsers(users);
            }, ableAddMention: ableMention, maxMentionCount: userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount, maxSuggestionCount: userMention === null || userMention === void 0 ? void 0 : userMention.maxSuggestionCount })),
        showVoiceMessageInput
            ? (React__default.default.createElement(MessageInputWrapperView.VoiceMessageInputWrapper, { channel: currentChannel, onSubmitClick: function (recordedFile, duration) {
                    sendVoiceMessage(recordedFile, duration, parentMessage);
                    setShowVoiceMessageInput(false);
                }, onCancelClick: function () {
                    setShowVoiceMessageInput(false);
                } }))
            : (React__default.default.createElement(ui_MessageInput, { className: "sendbird-thread-message-input__message-input", messageFieldId: "sendbird-message-input-text-field--thread", channel: currentChannel, channelUrl: currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url, isMobile: isMobile, disabled: threadInputDisabled, acceptableMimeTypes: acceptableMimeTypes, setMentionedUsers: setMentionedUsers, mentionSelectedUser: selectedUser, isMentionEnabled: isMentionEnabled, isVoiceMessageEnabled: isVoiceMessageEnabled, isSelectingMultipleFilesEnabled: isMultipleFilesMessageEnabled, onVoiceMessageIconClick: function () {
                    setShowVoiceMessageInput(true);
                }, renderFileUploadIcon: renderFileUploadIcon, renderVoiceMessageIcon: renderVoiceMessageIcon, renderSendMessageIcon: renderSendMessageIcon, ref: ref || messageInputRef, placeholder: ((currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.isFrozen) && !((currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.myRole) === types.Role.OPERATOR) && stringSet.MESSAGE_INPUT__PLACE_HOLDER__DISABLED)
                    || ((currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.myMutedState) === groupChannel.MutedState.MUTED && stringSet.MESSAGE_INPUT__PLACE_HOLDER__MUTED_SHORT)
                    || (allThreadMessages.length > 0
                        ? stringSet.THREAD__INPUT__REPLY_TO_THREAD
                        : stringSet.THREAD__INPUT__REPLY_IN_THREAD), onStartTyping: function () {
                    var _a;
                    (_a = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.startTyping) === null || _a === void 0 ? void 0 : _a.call(currentChannel);
                }, onSendMessage: function (_a) {
                    var _b;
                    var message = _a.message, mentionTemplate = _a.mentionTemplate;
                    sendMessage({
                        message: message,
                        mentionedUsers: mentionedUsers,
                        mentionTemplate: mentionTemplate,
                        quoteMessage: parentMessage,
                    });
                    setMentionNickname('');
                    setMentionedUsers([]);
                    (_b = currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.endTyping) === null || _b === void 0 ? void 0 : _b.call(currentChannel);
                }, onFileUpload: handleUploadFiles, onUserMentioned: function (user) {
                    if ((selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.userId) === (user === null || user === void 0 ? void 0 : user.userId)) {
                        setSelectedUser(null);
                        setMentionNickname('');
                    }
                }, onMentionStringChange: function (mentionText) {
                    setMentionNickname(mentionText);
                }, onMentionedUserIdsUpdated: function (userIds) {
                    setMentionedUserIds(userIds);
                }, onKeyDown: function (e) {
                    if (displaySuggestedMentionList && (mentionSuggestedUsers === null || mentionSuggestedUsers === void 0 ? void 0 : mentionSuggestedUsers.length) > 0
                        && ((e.key === _const.MessageInputKeys.Enter && ableMention) || e.key === _const.MessageInputKeys.ArrowUp || e.key === _const.MessageInputKeys.ArrowDown)) {
                        setMessageInputEvent(e);
                        return true;
                    }
                    return false;
                } }))));
};
var ThreadMessageInput$1 = React__default.default.forwardRef(ThreadMessageInput);

module.exports = ThreadMessageInput$1;
//# sourceMappingURL=ThreadMessageInput.js.map
