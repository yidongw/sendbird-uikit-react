import { _ as __assign, a as __awaiter, b as __generator } from '../chunks/bundle-Ck-Lg2K3.js';
import React__default, { useRef, useState } from 'react';
import { f as format } from '../chunks/bundle-D4fsEPre.js';
import { M as MessageStatus } from '../chunks/bundle-IQ2MguAG.js';
import { M as MessageMenu } from '../chunks/bundle-MK34Xf8y.js';
import { d as MENU_ROOT_ID, E as EMOJI_MENU_ROOT_ID, g as getObservingId, e as MENU_OBSERVING_CLASS_NAME } from '../chunks/bundle-A5WEPjt6.js';
import { c as classnames, d as deleteNullish, n as noop } from '../chunks/bundle-pQHYhigr.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-Di0Zwz2X.js';
import { MessageEmojiMenu } from './MessageItemReactionMenu.js';
import EmojiReactions from './EmojiReactions.js';
import AdminMessage from './AdminMessage.js';
import QuoteMessage from './QuoteMessage.js';
import { P as uiContainerType, D as isTemplateMessage, Q as isFormMessage, R as isAdminMessage, T as isValidTemplateMessageType, y as getClassName, d as isMultipleFilesMessage, q as isThumbnailMessage, O as isOGMessage, l as isSendableMessage } from '../chunks/bundle-BL0uQSu6.js';
import { u as useLocalization } from '../chunks/bundle-CbLNLMef.js';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import { EmojiContainer } from '@sendbird/chat';
import { FeedbackRating, Feedback } from '@sendbird/chat/message';
import { u as useLongPress } from '../chunks/bundle-B6cyKQvH.js';
import { MobileMenu } from './MobileMenu.js';
import { u as useMediaQueryContext } from '../chunks/bundle-Bk1oUUzJ.js';
import ThreadReplies from './ThreadReplies.js';
import { T as ThreadReplySelectType } from '../chunks/bundle-DAH20nmQ.js';
import { M as MessageProfile, a as MessageBody, b as MessageHeader } from '../chunks/bundle-BNGFpTQ2.js';
import Icon, { IconTypes } from './Icon.js';
import FeedbackIconButton from './FeedbackIconButton.js';
import MobileFeedbackMenu from './MobileFeedbackMenu.js';
import MessageFeedbackModal from './MessageFeedbackModal.js';
import MessageFeedbackFailedModal from './MessageFeedbackFailedModal.js';
import { u as useElementObserver } from '../chunks/bundle-DgN4UDUl.js';
import { h as MESSAGE_TEMPLATE_KEY } from '../chunks/bundle-DgxVBBM3.js';
import '../chunks/bundle-CnkNoe49.js';
import './Loader.js';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-BxmZCK6X.js';
import '../chunks/bundle-B5oDG6vR.js';
import './IconButton.js';
import 'react-dom';
import '@sendbird/chat/openChannel';
import './SortByRow.js';
import '../chunks/bundle-gMJSD9hQ.js';
import '../withSendbird.js';
import '../chunks/bundle-B80WXNZi.js';
import './ImageRenderer.js';
import './ReactionButton.js';
import '@sendbird/chat/groupChannel';
import '../chunks/bundle-fwRBR_Yw.js';
import './ReactionBadge.js';
import './BottomSheet.js';
import '../chunks/bundle-ptS-tNRF.js';
import './Button.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '../chunks/bundle-CHD1aKHO.js';
import './UserListItem.js';
import '../chunks/bundle-C3toIOqd.js';
import '../chunks/bundle-BbICJE5Z.js';
import '../chunks/bundle-CjhP75at.js';
import './MutedAvatarOverlay.js';
import './Checkbox.js';
import './UserProfile.js';
import '../sendbirdSelectors.js';
import '../chunks/bundle-YOpvheAB.js';
import './Tooltip.js';
import './TooltipWrapper.js';
import '../Message/context.js';
import '../chunks/bundle-2HULaUfY.js';
import '../chunks/bundle-CxwGa1l3.js';
import './OGMessageItemBody.js';
import '../chunks/bundle-D26kTqMa.js';
import '../chunks/bundle-BS8ALexW.js';
import './MentionLabel.js';
import './LinkLabel.js';
import '../chunks/bundle-oU_AYCPg.js';
import './TextMessageItemBody.js';
import '../chunks/bundle-DjodzqAP.js';
import './FileMessageItemBody.js';
import './TextButton.js';
import '../chunks/bundle-DUTd4XYU.js';
import '../chunks/bundle-BztO2DWM.js';
import './FileViewer.js';
import '../chunks/bundle-Dhkrx18n.js';
import './VoiceMessageItemBody.js';
import './ProgressBar.js';
import '../VoicePlayer/useVoicePlayer.js';
import './PlaybackTime.js';
import './ThumbnailMessageItemBody.js';
import './UnknownMessageItemBody.js';
import './TemplateMessageItemBody.js';
import '../chunks/bundle-Mlk4FQsw.js';
import './FallbackTemplateMessageItemBody.tsx.js';
import './LoadingTemplateMessageItemBody.tsx.js';
import '../chunks/bundle-BT00z1C1.js';
import './Input.js';

var SbFeedbackStatus;
(function (SbFeedbackStatus) {
    /** Feedback is unavailable for this message. This is the default value for base message. */
    SbFeedbackStatus["NOT_APPLICABLE"] = "NOT_APPLICABLE";
    /** Feedback can be set for this message, but nothing has been submitted yet. */
    SbFeedbackStatus["NO_FEEDBACK"] = "NO_FEEDBACK";
    /** Feedback can be set for this message, and something has been submitted. */
    SbFeedbackStatus["SUBMITTED"] = "SUBMITTED";
})(SbFeedbackStatus || (SbFeedbackStatus = {}));

function MessageContentForTemplateMessage(props) {
    var _a, _b, _c;
    var channel = props.channel, message = props.message, showFileViewer = props.showFileViewer, onMessageHeightChange = props.onMessageHeightChange, onBeforeDownloadFileMessage = props.onBeforeDownloadFileMessage, renderSenderProfile = props.renderSenderProfile, renderMessageHeader = props.renderMessageHeader, renderMessageBody = props.renderMessageBody, isByMe = props.isByMe, displayThreadReplies = props.displayThreadReplies, mouseHover = props.mouseHover, isMobile = props.isMobile, isReactionEnabledInChannel = props.isReactionEnabledInChannel, hoveredMenuClassName = props.hoveredMenuClassName, templateType = props.templateType, useReplying = props.useReplying;
    var config = useSendbirdStateContext().config;
    var dateLocale = useLocalization().dateLocale;
    var uiContainerTypeClassName = (_a = uiContainerType[templateType]) !== null && _a !== void 0 ? _a : '';
    var senderProfile = renderSenderProfile(__assign(__assign({}, props), { chainBottom: false, className: '', isByMe: isByMe, displayThreadReplies: displayThreadReplies }));
    var messageHeader = renderMessageHeader(props);
    var messageBody = renderMessageBody({
        message: message,
        channel: channel,
        showFileViewer: showFileViewer,
        onMessageHeightChange: onMessageHeightChange,
        mouseHover: mouseHover,
        isMobile: isMobile,
        config: config,
        isReactionEnabledInChannel: isReactionEnabledInChannel,
        isByMe: isByMe,
        onBeforeDownloadFileMessage: onBeforeDownloadFileMessage,
    });
    var timeStamp = React__default.createElement(Label, { className: classnames('sendbird-message-content__middle__body-container__created-at', 'right', hoveredMenuClassName, uiContainerTypeClassName), type: LabelTypography.CAPTION_3, color: LabelColors.ONBACKGROUND_2 }, format((message === null || message === void 0 ? void 0 : message.createdAt) || 0, 'p', {
        locale: dateLocale,
    }));
    var templateData = (_b = message.extendedMessagePayload) === null || _b === void 0 ? void 0 : _b[MESSAGE_TEMPLATE_KEY];
    var _d = (_c = templateData === null || templateData === void 0 ? void 0 : templateData.container_options) !== null && _c !== void 0 ? _c : {}, _e = _d.profile, profile = _e === void 0 ? true : _e, _f = _d.time, time = _f === void 0 ? true : _f, _g = _d.nickname, nickname = _g === void 0 ? true : _g;
    var hasContainerHeader = profile || nickname;
    return (React__default.createElement("div", { className: "sendbird-message-content__sendbird-ui-container-type__default__root" },
        !isByMe
            && hasContainerHeader
            && !useReplying
            && (React__default.createElement("div", { className: "sendbird-message-content__sendbird-ui-container-type__default__header-container" },
                React__default.createElement("div", { className: "sendbird-message-content__sendbird-ui-container-type__default__header-container__left__profile" }, profile && senderProfile),
                nickname && messageHeader)),
        messageBody,
        (!isByMe && time)
            && React__default.createElement("div", { className: "sendbird-message-content__sendbird-ui-container-type__default__bottom" }, timeStamp)));
}

function MessageContent(props) {
    var _this = this;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var 
    // Internal props
    className = props.className, userId = props.userId, channel = props.channel, message = props.message, _p = props.disabled, disabled = _p === void 0 ? false : _p, _q = props.chainTop, chainTop = _q === void 0 ? false : _q, _r = props.chainBottom, chainBottom = _r === void 0 ? false : _r, _s = props.isReactionEnabled, isReactionEnabled = _s === void 0 ? false : _s, _t = props.disableQuoteMessage, disableQuoteMessage = _t === void 0 ? false : _t, replyType = props.replyType, threadReplySelectType = props.threadReplySelectType, nicknamesMap = props.nicknamesMap, emojiContainer = props.emojiContainer, scrollToMessage = props.scrollToMessage, showEdit = props.showEdit, showRemove = props.showRemove, showFileViewer = props.showFileViewer, resendMessage = props.resendMessage, deleteMessage = props.deleteMessage, toggleReaction = props.toggleReaction, setQuoteMessage = props.setQuoteMessage, onReplyInThread = props.onReplyInThread, onQuoteMessageClick = props.onQuoteMessageClick, onMessageHeightChange = props.onMessageHeightChange, onBeforeDownloadFileMessage = props.onBeforeDownloadFileMessage, filterEmojiCategoryIds = props.filterEmojiCategoryIds;
    // Public props for customization
    var _u = deleteNullish(props), _v = _u.renderSenderProfile, renderSenderProfile = _v === void 0 ? function (props) { return React__default.createElement(MessageProfile, __assign({}, props)); } : _v, _w = _u.renderMessageBody, renderMessageBody = _w === void 0 ? function (props) { return React__default.createElement(MessageBody, __assign({}, props)); } : _w, _x = _u.renderMessageHeader, renderMessageHeader = _x === void 0 ? function (props) { return React__default.createElement(MessageHeader, __assign({}, props)); } : _x, _y = _u.renderMessageMenu, renderMessageMenu = _y === void 0 ? function (props) { return React__default.createElement(MessageMenu, __assign({}, props)); } : _y, _z = _u.renderEmojiMenu, renderEmojiMenu = _z === void 0 ? function (props) { return React__default.createElement(MessageEmojiMenu, __assign({}, props)); } : _z, _0 = _u.renderEmojiReactions, renderEmojiReactions = _0 === void 0 ? function (props) { return React__default.createElement(EmojiReactions, __assign({}, props)); } : _0, _1 = _u.renderMobileMenuOnLongPress, renderMobileMenuOnLongPress = _1 === void 0 ? function (props) { return React__default.createElement(MobileMenu, __assign({}, props)); } : _1;
    var _2 = useLocalization(), dateLocale = _2.dateLocale, stringSet = _2.stringSet;
    var _3 = useSendbirdStateContext(), config = _3.config, eventHandlers = _3.eventHandlers;
    var logger = config.logger;
    var onPressUserProfileHandler = (_a = eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.reaction) === null || _a === void 0 ? void 0 : _a.onPressUserProfile;
    var contentRef = useRef();
    var threadRepliesRef = useRef();
    var feedbackButtonsRef = useRef();
    var isMobile = useMediaQueryContext().isMobile;
    var _4 = useState(false), showMenu = _4[0], setShowMenu = _4[1];
    var _5 = useState(false), mouseHover = _5[0], setMouseHover = _5[1];
    var isMenuMounted = useElementObserver("#".concat(getObservingId(message.messageId), ".").concat(MENU_OBSERVING_CLASS_NAME), [
        document.getElementById(MENU_ROOT_ID),
        document.getElementById(EMOJI_MENU_ROOT_ID),
    ]);
    // Feedback states
    var _6 = useState(false), showFeedbackOptionsMenu = _6[0], setShowFeedbackOptionsMenu = _6[1];
    var _7 = useState(false), showFeedbackModal = _7[0], setShowFeedbackModal = _7[1];
    var _8 = useState(''), feedbackFailedText = _8[0], setFeedbackFailedText = _8[1];
    var isByMe = (userId === ((_b = message === null || message === void 0 ? void 0 : message.sender) === null || _b === void 0 ? void 0 : _b.userId))
        || ((message === null || message === void 0 ? void 0 : message.sendingStatus) === 'pending')
        || ((message === null || message === void 0 ? void 0 : message.sendingStatus) === 'failed');
    var isByMeClassName = isByMe ? 'outgoing' : 'incoming';
    var chainTopClassName = chainTop ? 'chain-top' : '';
    var isReactionEnabledInChannel = isReactionEnabled && !(channel === null || channel === void 0 ? void 0 : channel.isEphemeral);
    var isReactionEnabledClassName = isReactionEnabledInChannel ? 'use-reactions' : '';
    var hoveredMenuClassName = isMenuMounted ? 'sendbird-mouse-hover' : '';
    var useReplying = !!((replyType === 'QUOTE_REPLY' || replyType === 'THREAD')
        && (message === null || message === void 0 ? void 0 : message.parentMessageId) && (message === null || message === void 0 ? void 0 : message.parentMessage)
        && !disableQuoteMessage);
    var useReplyingClassName = useReplying ? 'use-quote' : '';
    // Thread replies
    var displayThreadReplies = ((_c = message === null || message === void 0 ? void 0 : message.threadInfo) === null || _c === void 0 ? void 0 : _c.replyCount)
        && message.threadInfo.replyCount > 0
        && replyType === 'THREAD';
    // Feedback buttons
    var isFeedbackMessage = !isByMe
        && !!(message === null || message === void 0 ? void 0 : message.myFeedbackStatus)
        && message.myFeedbackStatus !== SbFeedbackStatus.NOT_APPLICABLE;
    var isFeedbackEnabled = !!((_d = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _d === void 0 ? void 0 : _d.enableFeedback) && isFeedbackMessage;
    var hasFeedback = (_e = message === null || message === void 0 ? void 0 : message.myFeedback) === null || _e === void 0 ? void 0 : _e.rating;
    /**
     * For TemplateMessage or FormMessage, do not display:
     *   - in web view:
     *     - message menu
     *     - reaction menu
     *     - reply in thread
     *   - in mobile view:
     *     - bottom sheet on long click
     */
    var isNotSpecialMessage = !isTemplateMessage(message) && !isFormMessage(message);
    var showLongPressMenu = isNotSpecialMessage && isMobile;
    var showOutgoingMenu = isNotSpecialMessage && isByMe && !isMobile;
    var showThreadReplies = isNotSpecialMessage && displayThreadReplies;
    var showRightContent = isNotSpecialMessage && !isByMe && !isMobile;
    var getTotalBottom = function () {
        var sum = 2;
        if (threadRepliesRef.current) {
            sum += 4 + threadRepliesRef.current.clientHeight;
        }
        if (feedbackButtonsRef.current) {
            sum += 4 + feedbackButtonsRef.current.clientHeight;
        }
        return sum > 0 ? sum + 'px' : '';
    };
    var onCloseFeedbackForm = function () {
        setShowFeedbackModal(false);
    };
    var openFeedbackFormOrMenu = function (hasFeedback) {
        if (hasFeedback === void 0) { hasFeedback = false; }
        if (isMobile && hasFeedback) {
            setShowFeedbackOptionsMenu(true);
        }
        else {
            setShowFeedbackModal(true);
        }
    };
    // onMouseDown: (e: React.MouseEvent<T>) => void;
    // onTouchStart: (e: React.TouchEvent<T>) => void;
    // onMouseUp: (e: React.MouseEvent<T>) => void;
    // onMouseLeave: (e: React.MouseEvent<T>) => void;
    // onTouchEnd: (e: React.TouchEvent<T>) => void;
    var longPress = useLongPress({
        onLongPress: function () {
            if (showLongPressMenu) {
                setShowMenu(true);
            }
        },
        onClick: noop,
    }, {
        delay: 300,
        shouldPreventDefault: false,
    });
    if (isAdminMessage(message)) {
        return (React__default.createElement(AdminMessage, { message: message }));
    }
    if (isTemplateMessage(message)) {
        var templatePayload = message.extendedMessagePayload[MESSAGE_TEMPLATE_KEY];
        if (isValidTemplateMessageType(templatePayload)) {
            return (React__default.createElement(MessageContentForTemplateMessage, __assign({}, props, { renderSenderProfile: renderSenderProfile, renderMessageHeader: renderMessageHeader, renderMessageBody: renderMessageBody, isByMe: isByMe, displayThreadReplies: displayThreadReplies, mouseHover: mouseHover, isMobile: isMobile, isReactionEnabledInChannel: isReactionEnabledInChannel, hoveredMenuClassName: hoveredMenuClassName, templateType: templatePayload['type'], useReplying: useReplying })));
        }
    }
    return (React__default.createElement("div", { className: getClassName([
            className !== null && className !== void 0 ? className : '',
            'sendbird-message-content',
            isByMeClassName,
        ]), onMouseOver: function () { return setMouseHover(true); }, onMouseLeave: function () { return setMouseHover(false); } },
        React__default.createElement("div", { className: classnames('sendbird-message-content__left', isReactionEnabledClassName, isByMeClassName, useReplyingClassName), "data-testid": "sendbird-message-content__left" },
            renderSenderProfile(__assign(__assign({}, props), { className: 'sendbird-message-content__left__avatar', isByMe: isByMe, displayThreadReplies: displayThreadReplies, bottom: getTotalBottom() })),
            showOutgoingMenu && (React__default.createElement("div", { className: classnames('sendbird-message-content-menu', isReactionEnabledClassName, hoveredMenuClassName, isByMeClassName) },
                renderMessageMenu({
                    channel: channel,
                    message: message,
                    isByMe: isByMe,
                    replyType: replyType,
                    showEdit: showEdit,
                    showRemove: showRemove,
                    resendMessage: resendMessage,
                    setQuoteMessage: setQuoteMessage,
                    onReplyInThread: function (_a) {
                        var _b, _c;
                        var message = _a.message;
                        if (threadReplySelectType === ThreadReplySelectType.THREAD) {
                            onReplyInThread === null || onReplyInThread === void 0 ? void 0 : onReplyInThread({ message: message });
                        }
                        else if (threadReplySelectType === ThreadReplySelectType.PARENT) {
                            scrollToMessage === null || scrollToMessage === void 0 ? void 0 : scrollToMessage((_c = (_b = message.parentMessage) === null || _b === void 0 ? void 0 : _b.createdAt) !== null && _c !== void 0 ? _c : 0, message.parentMessageId);
                        }
                    },
                    deleteMessage: deleteMessage,
                }),
                isReactionEnabledInChannel && (renderEmojiMenu({
                    message: message,
                    userId: userId,
                    emojiContainer: emojiContainer,
                    toggleReaction: toggleReaction,
                    filterEmojiCategoryIds: filterEmojiCategoryIds,
                }))))),
        React__default.createElement("div", __assign({ className: classnames('sendbird-message-content__middle'), "data-testid": "sendbird-message-content__middle" }, (isMobile ? __assign({}, longPress) : {}), { ref: contentRef }),
            (!isByMe && !chainTop && !useReplying) && renderMessageHeader(props),
            (useReplying) ? (React__default.createElement("div", { className: classnames('sendbird-message-content__middle__quote-message', isByMe ? 'outgoing' : 'incoming', useReplyingClassName), "data-testid": "sendbird-message-content__middle__quote-message" },
                React__default.createElement(QuoteMessage, { className: "sendbird-message-content__middle__quote-message__quote", message: message, userId: userId, isByMe: isByMe, isUnavailable: ((_f = channel === null || channel === void 0 ? void 0 : channel.messageOffsetTimestamp) !== null && _f !== void 0 ? _f : 0) > ((_h = (_g = message.parentMessage) === null || _g === void 0 ? void 0 : _g.createdAt) !== null && _h !== void 0 ? _h : 0), onClick: function () {
                        var _a;
                        if (replyType === 'THREAD' && threadReplySelectType === ThreadReplySelectType.THREAD) {
                            onQuoteMessageClick === null || onQuoteMessageClick === void 0 ? void 0 : onQuoteMessageClick({ message: message });
                        }
                        if ((replyType === 'QUOTE_REPLY' || (replyType === 'THREAD' && threadReplySelectType === ThreadReplySelectType.PARENT))
                            && ((_a = message === null || message === void 0 ? void 0 : message.parentMessage) === null || _a === void 0 ? void 0 : _a.createdAt) && (message === null || message === void 0 ? void 0 : message.parentMessageId)) {
                            scrollToMessage === null || scrollToMessage === void 0 ? void 0 : scrollToMessage(message.parentMessage.createdAt, message.parentMessageId);
                        }
                    } }))) : null,
            React__default.createElement("div", { className: classnames('sendbird-message-content__middle__body-container') },
                (isByMe && !chainBottom) && (React__default.createElement("div", { className: classnames('sendbird-message-content__middle__body-container__created-at', 'left', hoveredMenuClassName) },
                    React__default.createElement("div", { className: "sendbird-message-content__middle__body-container__created-at__component-container" },
                        React__default.createElement(MessageStatus, { message: message, channel: channel })))),
                renderMessageBody({
                    message: message,
                    channel: channel,
                    showFileViewer: showFileViewer,
                    onMessageHeightChange: onMessageHeightChange,
                    mouseHover: mouseHover,
                    isMobile: isMobile,
                    config: config,
                    isReactionEnabledInChannel: isReactionEnabledInChannel,
                    isByMe: isByMe,
                    onBeforeDownloadFileMessage: onBeforeDownloadFileMessage,
                }),
                (isReactionEnabledInChannel && ((_j = message === null || message === void 0 ? void 0 : message.reactions) === null || _j === void 0 ? void 0 : _j.length) > 0) && (React__default.createElement("div", { className: classnames('sendbird-message-content-reactions', isMultipleFilesMessage(message) ? 'image-grid'
                        : (isByMe && !isThumbnailMessage(message) && !isOGMessage(message)) && 'primary', mouseHover && 'mouse-hover') }, renderEmojiReactions({
                    userId: userId,
                    message: message,
                    channel: channel,
                    isByMe: isByMe,
                    // @ts-ignore
                    emojiContainer: emojiContainer !== null && emojiContainer !== void 0 ? emojiContainer : new EmojiContainer({}),
                    memberNicknamesMap: nicknamesMap !== null && nicknamesMap !== void 0 ? nicknamesMap : new Map(),
                    toggleReaction: toggleReaction,
                    onPressUserProfile: onPressUserProfileHandler,
                    filterEmojiCategoryIds: filterEmojiCategoryIds,
                }))),
                (!isByMe && !chainBottom) && (React__default.createElement(Label, { className: classnames('sendbird-message-content__middle__body-container__created-at', 'right', hoveredMenuClassName), type: LabelTypography.CAPTION_3, color: LabelColors.ONBACKGROUND_2 }, format((message === null || message === void 0 ? void 0 : message.createdAt) || 0, stringSet.DATE_FORMAT__MESSAGE_CREATED_AT, {
                    locale: dateLocale,
                })))),
            showThreadReplies && (message === null || message === void 0 ? void 0 : message.threadInfo) && (React__default.createElement(ThreadReplies, { className: "sendbird-message-content__middle__thread-replies", threadInfo: message === null || message === void 0 ? void 0 : message.threadInfo, onClick: function () { return onReplyInThread === null || onReplyInThread === void 0 ? void 0 : onReplyInThread({ message: message }); }, ref: threadRepliesRef })),
            isFeedbackEnabled && React__default.createElement("div", { className: "sendbird-message-content__middle__body-container__feedback-buttons-container", ref: feedbackButtonsRef },
                React__default.createElement(FeedbackIconButton, { isSelected: ((_k = message === null || message === void 0 ? void 0 : message.myFeedback) === null || _k === void 0 ? void 0 : _k.rating) === FeedbackRating.GOOD, onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                        var error_1;
                        var _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    if (!!hasFeedback) return [3 /*break*/, 5];
                                    _c.label = 1;
                                case 1:
                                    _c.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, message.submitFeedback({
                                            rating: FeedbackRating.GOOD,
                                        })];
                                case 2:
                                    _c.sent();
                                    openFeedbackFormOrMenu();
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_1 = _c.sent();
                                    (_b = (_a = config === null || config === void 0 ? void 0 : config.logger) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, 'Channel: Submit feedback failed.', error_1);
                                    setFeedbackFailedText(stringSet.FEEDBACK_FAILED_SUBMIT);
                                    return [3 /*break*/, 4];
                                case 4: return [3 /*break*/, 6];
                                case 5:
                                    openFeedbackFormOrMenu(true);
                                    _c.label = 6;
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); }, disabled: !!(message === null || message === void 0 ? void 0 : message.myFeedback) && message.myFeedback.rating !== FeedbackRating.GOOD },
                    React__default.createElement(Icon, { type: IconTypes.FEEDBACK_LIKE, width: '24px', height: '24px' })),
                React__default.createElement(FeedbackIconButton, { isSelected: ((_l = message === null || message === void 0 ? void 0 : message.myFeedback) === null || _l === void 0 ? void 0 : _l.rating) === FeedbackRating.BAD, onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                        var error_2;
                        var _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    if (!!hasFeedback) return [3 /*break*/, 5];
                                    _c.label = 1;
                                case 1:
                                    _c.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, message.submitFeedback({
                                            rating: FeedbackRating.BAD,
                                        })];
                                case 2:
                                    _c.sent();
                                    openFeedbackFormOrMenu();
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_2 = _c.sent();
                                    (_b = (_a = config === null || config === void 0 ? void 0 : config.logger) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, 'Channel: Submit feedback failed.', error_2);
                                    setFeedbackFailedText(stringSet.FEEDBACK_FAILED_SUBMIT);
                                    return [3 /*break*/, 4];
                                case 4: return [3 /*break*/, 6];
                                case 5:
                                    openFeedbackFormOrMenu(true);
                                    _c.label = 6;
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); }, disabled: !!(message === null || message === void 0 ? void 0 : message.myFeedback) && message.myFeedback.rating !== FeedbackRating.BAD },
                    React__default.createElement(Icon, { type: IconTypes.FEEDBACK_DISLIKE, width: '24px', height: '24px' })))),
        showRightContent && (React__default.createElement("div", { className: classnames('sendbird-message-content__right', chainTopClassName, isReactionEnabledClassName, useReplyingClassName), "data-testid": "sendbird-message-content__right" },
            React__default.createElement("div", { className: classnames('sendbird-message-content-menu', chainTopClassName, hoveredMenuClassName, isByMeClassName) },
                isReactionEnabledInChannel && (renderEmojiMenu({
                    className: 'sendbird-message-content-menu__reaction-menu',
                    message: message,
                    userId: userId,
                    emojiContainer: emojiContainer,
                    toggleReaction: toggleReaction,
                    filterEmojiCategoryIds: filterEmojiCategoryIds,
                })),
                renderMessageMenu({
                    className: 'sendbird-message-content-menu__normal-menu',
                    channel: channel,
                    message: message,
                    isByMe: isByMe,
                    replyType: replyType,
                    showRemove: showRemove,
                    resendMessage: resendMessage,
                    setQuoteMessage: setQuoteMessage,
                    onReplyInThread: function (_a) {
                        var _b, _c;
                        var message = _a.message;
                        if (threadReplySelectType === ThreadReplySelectType.THREAD) {
                            onReplyInThread === null || onReplyInThread === void 0 ? void 0 : onReplyInThread({ message: message });
                        }
                        else if (threadReplySelectType === ThreadReplySelectType.PARENT) {
                            scrollToMessage === null || scrollToMessage === void 0 ? void 0 : scrollToMessage((_c = (_b = message.parentMessage) === null || _b === void 0 ? void 0 : _b.createdAt) !== null && _c !== void 0 ? _c : 0, message.parentMessageId);
                        }
                    },
                    deleteMessage: deleteMessage,
                })))),
        showMenu && isSendableMessage(message) && channel && renderMobileMenuOnLongPress({
            parentRef: contentRef,
            channel: channel,
            hideMenu: function () { setShowMenu(false); },
            message: message,
            isReactionEnabled: isReactionEnabledInChannel,
            isByMe: isByMe,
            userId: userId,
            replyType: replyType,
            disabled: disabled,
            showRemove: showRemove,
            emojiContainer: emojiContainer,
            resendMessage: resendMessage,
            deleteMessage: deleteMessage,
            setQuoteMessage: setQuoteMessage,
            toggleReaction: toggleReaction,
            showEdit: showEdit,
            onReplyInThread: function (_a) {
                var _b;
                var message = _a.message;
                if (threadReplySelectType === ThreadReplySelectType.THREAD) {
                    onReplyInThread === null || onReplyInThread === void 0 ? void 0 : onReplyInThread({ message: message });
                }
                else if (threadReplySelectType === ThreadReplySelectType.PARENT) {
                    scrollToMessage === null || scrollToMessage === void 0 ? void 0 : scrollToMessage(((_b = message === null || message === void 0 ? void 0 : message.parentMessage) === null || _b === void 0 ? void 0 : _b.createdAt) || 0, (message === null || message === void 0 ? void 0 : message.parentMessageId) || 0);
                }
            },
            onDownloadClick: function (e) { return __awaiter(_this, void 0, void 0, function () {
                var allowDownload, err_1;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!onBeforeDownloadFileMessage) {
                                return [2 /*return*/];
                            }
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, onBeforeDownloadFileMessage({ message: message })];
                        case 2:
                            allowDownload = _c.sent();
                            if (!allowDownload) {
                                e.preventDefault();
                                (_a = logger === null || logger === void 0 ? void 0 : logger.info) === null || _a === void 0 ? void 0 : _a.call(logger, 'MessageContent: Not allowed to download.');
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _c.sent();
                            (_b = logger === null || logger === void 0 ? void 0 : logger.error) === null || _b === void 0 ? void 0 : _b.call(logger, 'MessageContent: Error occurred while determining download continuation:', err_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); },
        }),
        ((_m = message === null || message === void 0 ? void 0 : message.myFeedback) === null || _m === void 0 ? void 0 : _m.rating) && showFeedbackOptionsMenu && (React__default.createElement(MobileFeedbackMenu, { hideMenu: function () {
                setShowFeedbackOptionsMenu(false);
            }, onEditFeedback: function () {
                setShowFeedbackOptionsMenu(false);
                setShowFeedbackModal(true);
            }, onRemoveFeedback: function () { return __awaiter(_this, void 0, void 0, function () {
                var error_3;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 3, , 4]);
                            if (!(message.myFeedback !== null)) return [3 /*break*/, 2];
                            return [4 /*yield*/, message.deleteFeedback(message.myFeedback.id)];
                        case 1:
                            _c.sent();
                            _c.label = 2;
                        case 2: return [3 /*break*/, 4];
                        case 3:
                            error_3 = _c.sent();
                            (_b = (_a = config === null || config === void 0 ? void 0 : config.logger) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, 'Channel: Delete feedback failed.', error_3);
                            setFeedbackFailedText(stringSet.FEEDBACK_FAILED_DELETE);
                            return [3 /*break*/, 4];
                        case 4:
                            setShowFeedbackOptionsMenu(false);
                            return [2 /*return*/];
                    }
                });
            }); } })),
        ((_o = message === null || message === void 0 ? void 0 : message.myFeedback) === null || _o === void 0 ? void 0 : _o.rating) && showFeedbackModal && (React__default.createElement(MessageFeedbackModal, { selectedFeedback: message.myFeedback.rating, message: message, onUpdate: function (selectedFeedback, comment) { return __awaiter(_this, void 0, void 0, function () {
                var newFeedback, error_4;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!(message.myFeedback !== null)) return [3 /*break*/, 4];
                            newFeedback = new Feedback({
                                id: message.myFeedback.id,
                                rating: selectedFeedback,
                                comment: comment,
                            });
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, message.updateFeedback(newFeedback)];
                        case 2:
                            _c.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            error_4 = _c.sent();
                            (_b = (_a = config === null || config === void 0 ? void 0 : config.logger) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, 'Channel: Update feedback failed.', error_4);
                            setFeedbackFailedText(stringSet.FEEDBACK_FAILED_SAVE);
                            return [3 /*break*/, 4];
                        case 4:
                            onCloseFeedbackForm();
                            return [2 /*return*/];
                    }
                });
            }); }, onClose: onCloseFeedbackForm, onRemove: function () { return __awaiter(_this, void 0, void 0, function () {
                var error_5;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 3, , 4]);
                            if (!(message.myFeedback !== null)) return [3 /*break*/, 2];
                            return [4 /*yield*/, message.deleteFeedback(message.myFeedback.id)];
                        case 1:
                            _c.sent();
                            _c.label = 2;
                        case 2: return [3 /*break*/, 4];
                        case 3:
                            error_5 = _c.sent();
                            (_b = (_a = config === null || config === void 0 ? void 0 : config.logger) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, 'Channel: Delete feedback failed.', error_5);
                            setFeedbackFailedText(stringSet.FEEDBACK_FAILED_DELETE);
                            return [3 /*break*/, 4];
                        case 4:
                            onCloseFeedbackForm();
                            return [2 /*return*/];
                    }
                });
            }); } })),
        feedbackFailedText && (React__default.createElement(MessageFeedbackFailedModal, { text: feedbackFailedText, onCancel: function () {
                setFeedbackFailedText('');
            } }))));
}

export { MessageBody, MessageContent, MessageHeader, MessageProfile, MessageContent as default };
//# sourceMappingURL=MessageContent.js.map
