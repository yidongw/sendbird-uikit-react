'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../chunks/bundle-DRvomNLJ.js');
var React = require('react');
var index$2 = require('../chunks/bundle-C3e9xkw6.js');
var ui_MessageStatus = require('../chunks/bundle-C8j790_0.js');
var MessageMenu = require('../chunks/bundle-CDQSndVh.js');
var ui_ContextMenu = require('../chunks/bundle-BYSQ-mQr.js');
var utils = require('../chunks/bundle-BYHj6UqH.js');
var ui_Label = require('../chunks/bundle-D8-2bEdY.js');
var ui_MessageItemReactionMenu = require('./MessageItemReactionMenu.js');
var ui_EmojiReactions = require('./EmojiReactions.js');
var ui_AdminMessage = require('./AdminMessage.js');
var ui_QuoteMessage = require('./QuoteMessage.js');
var index$1 = require('../chunks/bundle-e2d_I3io.js');
var LocalizationContext = require('../chunks/bundle-CmBrGegh.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var SendbirdChat = require('@sendbird/chat');
var message = require('@sendbird/chat/message');
var useLongPress = require('../chunks/bundle-CrV-FZvi.js');
var ui_MobileMenu = require('./MobileMenu.js');
var MediaQueryContext = require('../chunks/bundle-CzcmYPsN.js');
var ui_ThreadReplies = require('./ThreadReplies.js');
var _const = require('../chunks/bundle-CxDaflMi.js');
var index = require('../chunks/bundle-DE83rtdv.js');
var ui_Icon = require('./Icon.js');
var ui_FeedbackIconButton = require('./FeedbackIconButton.js');
var ui_MobileFeedbackMenu = require('./MobileFeedbackMenu.js');
var ui_MessageFeedbackModal = require('./MessageFeedbackModal.js');
var ui_MessageFeedbackFailedModal = require('./MessageFeedbackFailedModal.js');
var useElementObserver = require('../chunks/bundle-DS66lTJo.js');
var consts = require('../chunks/bundle-C0tdWwa4.js');
require('../chunks/bundle-BCJ8mayg.js');
require('./Loader.js');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-DSQevcAL.js');
require('../chunks/bundle-BayL2H8_.js');
require('./IconButton.js');
require('react-dom');
require('@sendbird/chat/openChannel');
require('./SortByRow.js');
require('../chunks/bundle-lGoyqUWm.js');
require('../withSendbird.js');
require('../chunks/bundle-Q9YDOzjz.js');
require('./ImageRenderer.js');
require('./ReactionButton.js');
require('@sendbird/chat/groupChannel');
require('../chunks/bundle-4kwoH67w.js');
require('./ReactionBadge.js');
require('./BottomSheet.js');
require('../chunks/bundle-DfISCDoH.js');
require('./Button.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('../chunks/bundle-2M4zbjEc.js');
require('./UserListItem.js');
require('../chunks/bundle-Bn25Hepq.js');
require('../chunks/bundle-Dmsb_oex.js');
require('../chunks/bundle-BvFqbvri.js');
require('./MutedAvatarOverlay.js');
require('./Checkbox.js');
require('./UserProfile.js');
require('../sendbirdSelectors.js');
require('../chunks/bundle-Dcn1Gf-8.js');
require('./Tooltip.js');
require('./TooltipWrapper.js');
require('../Message/context.js');
require('../chunks/bundle-Dim56WjD.js');
require('../chunks/bundle-CMe3c_v7.js');
require('./OGMessageItemBody.js');
require('../chunks/bundle-C9AThBV0.js');
require('../chunks/bundle-CZ8XCEGd.js');
require('./MentionLabel.js');
require('./LinkLabel.js');
require('../chunks/bundle-tu3X3qzD.js');
require('./TextMessageItemBody.js');
require('../chunks/bundle-BHlqknCd.js');
require('./FileMessageItemBody.js');
require('./TextButton.js');
require('../chunks/bundle-LSLwWEwG.js');
require('../chunks/bundle-D5dbLMqr.js');
require('./FileViewer.js');
require('../chunks/bundle-XkouAzOQ.js');
require('./VoiceMessageItemBody.js');
require('./ProgressBar.js');
require('../VoicePlayer/useVoicePlayer.js');
require('./PlaybackTime.js');
require('./ThumbnailMessageItemBody.js');
require('./UnknownMessageItemBody.js');
require('./TemplateMessageItemBody.js');
require('../chunks/bundle-TKyDCiE_.js');
require('./FallbackTemplateMessageItemBody.tsx.js');
require('./LoadingTemplateMessageItemBody.tsx.js');
require('../chunks/bundle-CRtS_Hdn.js');
require('./Input.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

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
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    var dateLocale = LocalizationContext.useLocalization().dateLocale;
    var uiContainerTypeClassName = (_a = index$1.uiContainerType[templateType]) !== null && _a !== void 0 ? _a : '';
    var senderProfile = renderSenderProfile(_tslib.__assign(_tslib.__assign({}, props), { chainBottom: false, className: '', isByMe: isByMe, displayThreadReplies: displayThreadReplies }));
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
    var timeStamp = React__default.default.createElement(ui_Label.Label, { className: utils.classnames('sendbird-message-content__middle__body-container__created-at', 'right', hoveredMenuClassName, uiContainerTypeClassName), type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_2 }, index$2.format((message === null || message === void 0 ? void 0 : message.createdAt) || 0, 'p', {
        locale: dateLocale,
    }));
    var templateData = (_b = message.extendedMessagePayload) === null || _b === void 0 ? void 0 : _b[consts.MESSAGE_TEMPLATE_KEY];
    var _d = (_c = templateData === null || templateData === void 0 ? void 0 : templateData.container_options) !== null && _c !== void 0 ? _c : {}, _e = _d.profile, profile = _e === void 0 ? true : _e, _f = _d.time, time = _f === void 0 ? true : _f, _g = _d.nickname, nickname = _g === void 0 ? true : _g;
    var hasContainerHeader = profile || nickname;
    return (React__default.default.createElement("div", { className: "sendbird-message-content__sendbird-ui-container-type__default__root" },
        !isByMe
            && hasContainerHeader
            && !useReplying
            && (React__default.default.createElement("div", { className: "sendbird-message-content__sendbird-ui-container-type__default__header-container" },
                React__default.default.createElement("div", { className: "sendbird-message-content__sendbird-ui-container-type__default__header-container__left__profile" }, profile && senderProfile),
                nickname && messageHeader)),
        messageBody,
        (!isByMe && time)
            && React__default.default.createElement("div", { className: "sendbird-message-content__sendbird-ui-container-type__default__bottom" }, timeStamp)));
}

function MessageContent(props) {
    var _this = this;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var 
    // Internal props
    className = props.className, userId = props.userId, channel = props.channel, message$1 = props.message, _p = props.disabled, disabled = _p === void 0 ? false : _p, _q = props.chainTop, chainTop = _q === void 0 ? false : _q, _r = props.chainBottom, chainBottom = _r === void 0 ? false : _r, _s = props.isReactionEnabled, isReactionEnabled = _s === void 0 ? false : _s, _t = props.disableQuoteMessage, disableQuoteMessage = _t === void 0 ? false : _t, replyType = props.replyType, threadReplySelectType = props.threadReplySelectType, nicknamesMap = props.nicknamesMap, emojiContainer = props.emojiContainer, scrollToMessage = props.scrollToMessage, showEdit = props.showEdit, showRemove = props.showRemove, showFileViewer = props.showFileViewer, resendMessage = props.resendMessage, deleteMessage = props.deleteMessage, toggleReaction = props.toggleReaction, setQuoteMessage = props.setQuoteMessage, onReplyInThread = props.onReplyInThread, onQuoteMessageClick = props.onQuoteMessageClick, onMessageHeightChange = props.onMessageHeightChange, onBeforeDownloadFileMessage = props.onBeforeDownloadFileMessage, filterEmojiCategoryIds = props.filterEmojiCategoryIds;
    // Public props for customization
    var _u = utils.deleteNullish(props), _v = _u.renderSenderProfile, renderSenderProfile = _v === void 0 ? function (props) { return React__default.default.createElement(index.MessageProfile, _tslib.__assign({}, props)); } : _v, _w = _u.renderMessageBody, renderMessageBody = _w === void 0 ? function (props) { return React__default.default.createElement(index.MessageBody, _tslib.__assign({}, props)); } : _w, _x = _u.renderMessageHeader, renderMessageHeader = _x === void 0 ? function (props) { return React__default.default.createElement(index.MessageHeader, _tslib.__assign({}, props)); } : _x, _y = _u.renderMessageMenu, renderMessageMenu = _y === void 0 ? function (props) { return React__default.default.createElement(MessageMenu.MessageMenu, _tslib.__assign({}, props)); } : _y, _z = _u.renderEmojiMenu, renderEmojiMenu = _z === void 0 ? function (props) { return React__default.default.createElement(ui_MessageItemReactionMenu.MessageEmojiMenu, _tslib.__assign({}, props)); } : _z, _0 = _u.renderEmojiReactions, renderEmojiReactions = _0 === void 0 ? function (props) { return React__default.default.createElement(ui_EmojiReactions, _tslib.__assign({}, props)); } : _0, _1 = _u.renderMobileMenuOnLongPress, renderMobileMenuOnLongPress = _1 === void 0 ? function (props) { return React__default.default.createElement(ui_MobileMenu.MobileMenu, _tslib.__assign({}, props)); } : _1;
    var _2 = LocalizationContext.useLocalization(), dateLocale = _2.dateLocale, stringSet = _2.stringSet;
    var _3 = useSendbirdStateContext.useSendbirdStateContext(), config = _3.config, eventHandlers = _3.eventHandlers;
    var logger = config.logger;
    var onPressUserProfileHandler = (_a = eventHandlers === null || eventHandlers === void 0 ? void 0 : eventHandlers.reaction) === null || _a === void 0 ? void 0 : _a.onPressUserProfile;
    var contentRef = React.useRef();
    var threadRepliesRef = React.useRef();
    var feedbackButtonsRef = React.useRef();
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    var _4 = React.useState(false), showMenu = _4[0], setShowMenu = _4[1];
    var _5 = React.useState(false), mouseHover = _5[0], setMouseHover = _5[1];
    var isMenuMounted = useElementObserver.useElementObserver("#".concat(ui_ContextMenu.getObservingId(message$1.messageId), ".").concat(ui_ContextMenu.MENU_OBSERVING_CLASS_NAME), [
        document.getElementById(ui_ContextMenu.MENU_ROOT_ID),
        document.getElementById(ui_ContextMenu.EMOJI_MENU_ROOT_ID),
    ]);
    // Feedback states
    var _6 = React.useState(false), showFeedbackOptionsMenu = _6[0], setShowFeedbackOptionsMenu = _6[1];
    var _7 = React.useState(false), showFeedbackModal = _7[0], setShowFeedbackModal = _7[1];
    var _8 = React.useState(''), feedbackFailedText = _8[0], setFeedbackFailedText = _8[1];
    var isByMe = (userId === ((_b = message$1 === null || message$1 === void 0 ? void 0 : message$1.sender) === null || _b === void 0 ? void 0 : _b.userId))
        || ((message$1 === null || message$1 === void 0 ? void 0 : message$1.sendingStatus) === 'pending')
        || ((message$1 === null || message$1 === void 0 ? void 0 : message$1.sendingStatus) === 'failed');
    var isByMeClassName = isByMe ? 'outgoing' : 'incoming';
    var chainTopClassName = chainTop ? 'chain-top' : '';
    var isReactionEnabledInChannel = isReactionEnabled && !(channel === null || channel === void 0 ? void 0 : channel.isEphemeral);
    var isReactionEnabledClassName = isReactionEnabledInChannel ? 'use-reactions' : '';
    var hoveredMenuClassName = isMenuMounted ? 'sendbird-mouse-hover' : '';
    var useReplying = !!((replyType === 'QUOTE_REPLY' || replyType === 'THREAD')
        && (message$1 === null || message$1 === void 0 ? void 0 : message$1.parentMessageId) && (message$1 === null || message$1 === void 0 ? void 0 : message$1.parentMessage)
        && !disableQuoteMessage);
    var useReplyingClassName = useReplying ? 'use-quote' : '';
    // Thread replies
    var displayThreadReplies = ((_c = message$1 === null || message$1 === void 0 ? void 0 : message$1.threadInfo) === null || _c === void 0 ? void 0 : _c.replyCount)
        && message$1.threadInfo.replyCount > 0
        && replyType === 'THREAD';
    // Feedback buttons
    var isFeedbackMessage = !isByMe
        && !!(message$1 === null || message$1 === void 0 ? void 0 : message$1.myFeedbackStatus)
        && message$1.myFeedbackStatus !== SbFeedbackStatus.NOT_APPLICABLE;
    var isFeedbackEnabled = !!((_d = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _d === void 0 ? void 0 : _d.enableFeedback) && isFeedbackMessage;
    var hasFeedback = (_e = message$1 === null || message$1 === void 0 ? void 0 : message$1.myFeedback) === null || _e === void 0 ? void 0 : _e.rating;
    /**
     * For TemplateMessage or FormMessage, do not display:
     *   - in web view:
     *     - message menu
     *     - reaction menu
     *     - reply in thread
     *   - in mobile view:
     *     - bottom sheet on long click
     */
    var isNotSpecialMessage = !index$1.isTemplateMessage(message$1) && !index$1.isFormMessage(message$1);
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
    var longPress = useLongPress.useLongPress({
        onLongPress: function () {
            if (showLongPressMenu) {
                setShowMenu(true);
            }
        },
        onClick: utils.noop,
    }, {
        delay: 300,
        shouldPreventDefault: false,
    });
    if (index$1.isAdminMessage(message$1)) {
        return (React__default.default.createElement(ui_AdminMessage, { message: message$1 }));
    }
    if (index$1.isTemplateMessage(message$1)) {
        var templatePayload = message$1.extendedMessagePayload[consts.MESSAGE_TEMPLATE_KEY];
        if (index$1.isValidTemplateMessageType(templatePayload)) {
            return (React__default.default.createElement(MessageContentForTemplateMessage, _tslib.__assign({}, props, { renderSenderProfile: renderSenderProfile, renderMessageHeader: renderMessageHeader, renderMessageBody: renderMessageBody, isByMe: isByMe, displayThreadReplies: displayThreadReplies, mouseHover: mouseHover, isMobile: isMobile, isReactionEnabledInChannel: isReactionEnabledInChannel, hoveredMenuClassName: hoveredMenuClassName, templateType: templatePayload['type'], useReplying: useReplying })));
        }
    }
    return (React__default.default.createElement("div", { className: index$1.getClassName([
            className !== null && className !== void 0 ? className : '',
            'sendbird-message-content',
            isByMeClassName,
        ]), onMouseOver: function () { return setMouseHover(true); }, onMouseLeave: function () { return setMouseHover(false); } },
        React__default.default.createElement("div", { className: utils.classnames('sendbird-message-content__left', isReactionEnabledClassName, isByMeClassName, useReplyingClassName), "data-testid": "sendbird-message-content__left" },
            renderSenderProfile(_tslib.__assign(_tslib.__assign({}, props), { className: 'sendbird-message-content__left__avatar', isByMe: isByMe, displayThreadReplies: displayThreadReplies, bottom: getTotalBottom() })),
            showOutgoingMenu && (React__default.default.createElement("div", { className: utils.classnames('sendbird-message-content-menu', isReactionEnabledClassName, hoveredMenuClassName, isByMeClassName) },
                renderMessageMenu({
                    channel: channel,
                    message: message$1,
                    isByMe: isByMe,
                    replyType: replyType,
                    showEdit: showEdit,
                    showRemove: showRemove,
                    resendMessage: resendMessage,
                    setQuoteMessage: setQuoteMessage,
                    onReplyInThread: function (_a) {
                        var _b, _c;
                        var message = _a.message;
                        if (threadReplySelectType === _const.ThreadReplySelectType.THREAD) {
                            onReplyInThread === null || onReplyInThread === void 0 ? void 0 : onReplyInThread({ message: message });
                        }
                        else if (threadReplySelectType === _const.ThreadReplySelectType.PARENT) {
                            scrollToMessage === null || scrollToMessage === void 0 ? void 0 : scrollToMessage((_c = (_b = message.parentMessage) === null || _b === void 0 ? void 0 : _b.createdAt) !== null && _c !== void 0 ? _c : 0, message.parentMessageId);
                        }
                    },
                    deleteMessage: deleteMessage,
                }),
                isReactionEnabledInChannel && (renderEmojiMenu({
                    message: message$1,
                    userId: userId,
                    emojiContainer: emojiContainer,
                    toggleReaction: toggleReaction,
                    filterEmojiCategoryIds: filterEmojiCategoryIds,
                }))))),
        React__default.default.createElement("div", _tslib.__assign({ className: utils.classnames('sendbird-message-content__middle'), "data-testid": "sendbird-message-content__middle" }, (isMobile ? _tslib.__assign({}, longPress) : {}), { ref: contentRef }),
            (!isByMe && !chainTop && !useReplying) && renderMessageHeader(props),
            (useReplying) ? (React__default.default.createElement("div", { className: utils.classnames('sendbird-message-content__middle__quote-message', isByMe ? 'outgoing' : 'incoming', useReplyingClassName), "data-testid": "sendbird-message-content__middle__quote-message" },
                React__default.default.createElement(ui_QuoteMessage, { className: "sendbird-message-content__middle__quote-message__quote", message: message$1, userId: userId, isByMe: isByMe, isUnavailable: ((_f = channel === null || channel === void 0 ? void 0 : channel.messageOffsetTimestamp) !== null && _f !== void 0 ? _f : 0) > ((_h = (_g = message$1.parentMessage) === null || _g === void 0 ? void 0 : _g.createdAt) !== null && _h !== void 0 ? _h : 0), onClick: function () {
                        var _a;
                        if (replyType === 'THREAD' && threadReplySelectType === _const.ThreadReplySelectType.THREAD) {
                            onQuoteMessageClick === null || onQuoteMessageClick === void 0 ? void 0 : onQuoteMessageClick({ message: message$1 });
                        }
                        if ((replyType === 'QUOTE_REPLY' || (replyType === 'THREAD' && threadReplySelectType === _const.ThreadReplySelectType.PARENT))
                            && ((_a = message$1 === null || message$1 === void 0 ? void 0 : message$1.parentMessage) === null || _a === void 0 ? void 0 : _a.createdAt) && (message$1 === null || message$1 === void 0 ? void 0 : message$1.parentMessageId)) {
                            scrollToMessage === null || scrollToMessage === void 0 ? void 0 : scrollToMessage(message$1.parentMessage.createdAt, message$1.parentMessageId);
                        }
                    } }))) : null,
            React__default.default.createElement("div", { className: utils.classnames('sendbird-message-content__middle__body-container') },
                (isByMe && !chainBottom) && (React__default.default.createElement("div", { className: utils.classnames('sendbird-message-content__middle__body-container__created-at', 'left', hoveredMenuClassName) },
                    React__default.default.createElement("div", { className: "sendbird-message-content__middle__body-container__created-at__component-container" },
                        React__default.default.createElement(ui_MessageStatus.MessageStatus, { message: message$1, channel: channel })))),
                renderMessageBody({
                    message: message$1,
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
                (isReactionEnabledInChannel && ((_j = message$1 === null || message$1 === void 0 ? void 0 : message$1.reactions) === null || _j === void 0 ? void 0 : _j.length) > 0) && (React__default.default.createElement("div", { className: utils.classnames('sendbird-message-content-reactions', index$1.isMultipleFilesMessage(message$1) ? 'image-grid'
                        : (isByMe && !index$1.isThumbnailMessage(message$1) && !index$1.isOGMessage(message$1)) && 'primary', mouseHover && 'mouse-hover') }, renderEmojiReactions({
                    userId: userId,
                    message: message$1,
                    channel: channel,
                    isByMe: isByMe,
                    // @ts-ignore
                    emojiContainer: emojiContainer !== null && emojiContainer !== void 0 ? emojiContainer : new SendbirdChat.EmojiContainer({}),
                    memberNicknamesMap: nicknamesMap !== null && nicknamesMap !== void 0 ? nicknamesMap : new Map(),
                    toggleReaction: toggleReaction,
                    onPressUserProfile: onPressUserProfileHandler,
                    filterEmojiCategoryIds: filterEmojiCategoryIds,
                }))),
                (!isByMe && !chainBottom) && (React__default.default.createElement(ui_Label.Label, { className: utils.classnames('sendbird-message-content__middle__body-container__created-at', 'right', hoveredMenuClassName), type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_2 }, index$2.format((message$1 === null || message$1 === void 0 ? void 0 : message$1.createdAt) || 0, stringSet.DATE_FORMAT__MESSAGE_CREATED_AT, {
                    locale: dateLocale,
                })))),
            showThreadReplies && (message$1 === null || message$1 === void 0 ? void 0 : message$1.threadInfo) && (React__default.default.createElement(ui_ThreadReplies.default, { className: "sendbird-message-content__middle__thread-replies", threadInfo: message$1 === null || message$1 === void 0 ? void 0 : message$1.threadInfo, onClick: function () { return onReplyInThread === null || onReplyInThread === void 0 ? void 0 : onReplyInThread({ message: message$1 }); }, ref: threadRepliesRef })),
            isFeedbackEnabled && React__default.default.createElement("div", { className: "sendbird-message-content__middle__body-container__feedback-buttons-container", ref: feedbackButtonsRef },
                React__default.default.createElement(ui_FeedbackIconButton, { isSelected: ((_k = message$1 === null || message$1 === void 0 ? void 0 : message$1.myFeedback) === null || _k === void 0 ? void 0 : _k.rating) === message.FeedbackRating.GOOD, onClick: function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
                        var error_1;
                        var _a, _b;
                        return _tslib.__generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    if (!!hasFeedback) return [3 /*break*/, 5];
                                    _c.label = 1;
                                case 1:
                                    _c.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, message$1.submitFeedback({
                                            rating: message.FeedbackRating.GOOD,
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
                    }); }, disabled: !!(message$1 === null || message$1 === void 0 ? void 0 : message$1.myFeedback) && message$1.myFeedback.rating !== message.FeedbackRating.GOOD },
                    React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.FEEDBACK_LIKE, width: '24px', height: '24px' })),
                React__default.default.createElement(ui_FeedbackIconButton, { isSelected: ((_l = message$1 === null || message$1 === void 0 ? void 0 : message$1.myFeedback) === null || _l === void 0 ? void 0 : _l.rating) === message.FeedbackRating.BAD, onClick: function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
                        var error_2;
                        var _a, _b;
                        return _tslib.__generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    if (!!hasFeedback) return [3 /*break*/, 5];
                                    _c.label = 1;
                                case 1:
                                    _c.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, message$1.submitFeedback({
                                            rating: message.FeedbackRating.BAD,
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
                    }); }, disabled: !!(message$1 === null || message$1 === void 0 ? void 0 : message$1.myFeedback) && message$1.myFeedback.rating !== message.FeedbackRating.BAD },
                    React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.FEEDBACK_DISLIKE, width: '24px', height: '24px' })))),
        showRightContent && (React__default.default.createElement("div", { className: utils.classnames('sendbird-message-content__right', chainTopClassName, isReactionEnabledClassName, useReplyingClassName), "data-testid": "sendbird-message-content__right" },
            React__default.default.createElement("div", { className: utils.classnames('sendbird-message-content-menu', chainTopClassName, hoveredMenuClassName, isByMeClassName) },
                isReactionEnabledInChannel && (renderEmojiMenu({
                    className: 'sendbird-message-content-menu__reaction-menu',
                    message: message$1,
                    userId: userId,
                    emojiContainer: emojiContainer,
                    toggleReaction: toggleReaction,
                    filterEmojiCategoryIds: filterEmojiCategoryIds,
                })),
                renderMessageMenu({
                    className: 'sendbird-message-content-menu__normal-menu',
                    channel: channel,
                    message: message$1,
                    isByMe: isByMe,
                    replyType: replyType,
                    showRemove: showRemove,
                    resendMessage: resendMessage,
                    setQuoteMessage: setQuoteMessage,
                    onReplyInThread: function (_a) {
                        var _b, _c;
                        var message = _a.message;
                        if (threadReplySelectType === _const.ThreadReplySelectType.THREAD) {
                            onReplyInThread === null || onReplyInThread === void 0 ? void 0 : onReplyInThread({ message: message });
                        }
                        else if (threadReplySelectType === _const.ThreadReplySelectType.PARENT) {
                            scrollToMessage === null || scrollToMessage === void 0 ? void 0 : scrollToMessage((_c = (_b = message.parentMessage) === null || _b === void 0 ? void 0 : _b.createdAt) !== null && _c !== void 0 ? _c : 0, message.parentMessageId);
                        }
                    },
                    deleteMessage: deleteMessage,
                })))),
        showMenu && index$1.isSendableMessage(message$1) && channel && renderMobileMenuOnLongPress({
            parentRef: contentRef,
            channel: channel,
            hideMenu: function () { setShowMenu(false); },
            message: message$1,
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
                if (threadReplySelectType === _const.ThreadReplySelectType.THREAD) {
                    onReplyInThread === null || onReplyInThread === void 0 ? void 0 : onReplyInThread({ message: message });
                }
                else if (threadReplySelectType === _const.ThreadReplySelectType.PARENT) {
                    scrollToMessage === null || scrollToMessage === void 0 ? void 0 : scrollToMessage(((_b = message === null || message === void 0 ? void 0 : message.parentMessage) === null || _b === void 0 ? void 0 : _b.createdAt) || 0, (message === null || message === void 0 ? void 0 : message.parentMessageId) || 0);
                }
            },
            onDownloadClick: function (e) { return _tslib.__awaiter(_this, void 0, void 0, function () {
                var allowDownload, err_1;
                var _a, _b;
                return _tslib.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!onBeforeDownloadFileMessage) {
                                return [2 /*return*/];
                            }
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, onBeforeDownloadFileMessage({ message: message$1 })];
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
        ((_m = message$1 === null || message$1 === void 0 ? void 0 : message$1.myFeedback) === null || _m === void 0 ? void 0 : _m.rating) && showFeedbackOptionsMenu && (React__default.default.createElement(ui_MobileFeedbackMenu, { hideMenu: function () {
                setShowFeedbackOptionsMenu(false);
            }, onEditFeedback: function () {
                setShowFeedbackOptionsMenu(false);
                setShowFeedbackModal(true);
            }, onRemoveFeedback: function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
                var error_3;
                var _a, _b;
                return _tslib.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 3, , 4]);
                            if (!(message$1.myFeedback !== null)) return [3 /*break*/, 2];
                            return [4 /*yield*/, message$1.deleteFeedback(message$1.myFeedback.id)];
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
        ((_o = message$1 === null || message$1 === void 0 ? void 0 : message$1.myFeedback) === null || _o === void 0 ? void 0 : _o.rating) && showFeedbackModal && (React__default.default.createElement(ui_MessageFeedbackModal, { selectedFeedback: message$1.myFeedback.rating, message: message$1, onUpdate: function (selectedFeedback, comment) { return _tslib.__awaiter(_this, void 0, void 0, function () {
                var newFeedback, error_4;
                var _a, _b;
                return _tslib.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!(message$1.myFeedback !== null)) return [3 /*break*/, 4];
                            newFeedback = new message.Feedback({
                                id: message$1.myFeedback.id,
                                rating: selectedFeedback,
                                comment: comment,
                            });
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, message$1.updateFeedback(newFeedback)];
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
            }); }, onClose: onCloseFeedbackForm, onRemove: function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
                var error_5;
                var _a, _b;
                return _tslib.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 3, , 4]);
                            if (!(message$1.myFeedback !== null)) return [3 /*break*/, 2];
                            return [4 /*yield*/, message$1.deleteFeedback(message$1.myFeedback.id)];
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
        feedbackFailedText && (React__default.default.createElement(ui_MessageFeedbackFailedModal, { text: feedbackFailedText, onCancel: function () {
                setFeedbackFailedText('');
            } }))));
}

exports.MessageBody = index.MessageBody;
exports.MessageHeader = index.MessageHeader;
exports.MessageProfile = index.MessageProfile;
exports.MessageContent = MessageContent;
exports.default = MessageContent;
//# sourceMappingURL=MessageContent.js.map
