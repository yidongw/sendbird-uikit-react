'use strict';

var React = require('react');
var index = require('./bundle-e2d_I3io.js');
var ui_ContextMenu = require('./bundle-BYSQ-mQr.js');
var ui_Avatar = require('./bundle-Dmsb_oex.js');
var ui_UserProfile = require('../ui/UserProfile.js');
var UserProfileContext = require('./bundle-Bn25Hepq.js');
var utils = require('./bundle-BYHj6UqH.js');
var _tslib = require('./bundle-DRvomNLJ.js');
var ui_OGMessageItemBody = require('../ui/OGMessageItemBody.js');
var ui_TextMessageItemBody = require('../ui/TextMessageItemBody.js');
var ui_FileMessageItemBody = require('../ui/FileMessageItemBody.js');
var useFileInfoListWithUploaded = require('./bundle-D5dbLMqr.js');
var ui_VoiceMessageItemBody = require('../ui/VoiceMessageItemBody.js');
var ui_ThumbnailMessageItemBody = require('../ui/ThumbnailMessageItemBody.js');
var ui_UnknownMessageItemBody = require('../ui/UnknownMessageItemBody.js');
var ui_TemplateMessageItemBody = require('../ui/TemplateMessageItemBody.js');
var ui_Button = require('../ui/Button.js');
var ui_Label = require('./bundle-D8-2bEdY.js');
var ui_MessageFeedbackFailedModal = require('../ui/MessageFeedbackFailedModal.js');
var LocalizationContext = require('./bundle-CmBrGegh.js');
var ui_Icon = require('../ui/Icon.js');
var consts = require('./bundle-BHlqknCd.js');
var utils$1 = require('./bundle-CRtS_Hdn.js');
var consts$1 = require('./bundle-C0tdWwa4.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function MessageProfile(_a) {
    var 
    // Internal props
    _b = _a.className, 
    // Internal props
    className = _b === void 0 ? '' : _b, isByMe = _a.isByMe, displayThreadReplies = _a.displayThreadReplies, bottom = _a.bottom, 
    // MessageContentProps
    message = _a.message, channel = _a.channel, userId = _a.userId, _c = _a.chainBottom, chainBottom = _c === void 0 ? false : _c;
    var avatarRef = React.useRef(null);
    var _d = UserProfileContext.useUserProfileContext(), disableUserProfile = _d.disableUserProfile, renderUserProfile = _d.renderUserProfile;
    if (isByMe || chainBottom || !index.isSendableMessage(message)) {
        return null;
    }
    return (React__default.default.createElement(ui_ContextMenu.ContextMenu, { menuTrigger: function (toggleDropdown) {
            var _a, _b;
            return (React__default.default.createElement(ui_Avatar.Avatar, { className: utils.classnames(className, displayThreadReplies && 'use-thread-replies'), src: ((_b = (_a = channel === null || channel === void 0 ? void 0 : channel.members) === null || _a === void 0 ? void 0 : _a.find(function (member) { return (member === null || member === void 0 ? void 0 : member.userId) === message.sender.userId; })) === null || _b === void 0 ? void 0 : _b.profileUrl)
                    || message.sender.profileUrl
                    || '', 
                // TODO: Divide getting profileUrl logic to utils
                ref: avatarRef, width: "28px", height: "28px", bottom: bottom, onClick: function () {
                    if (!disableUserProfile)
                        toggleDropdown();
                } }));
        }, menuItems: function (closeDropdown) { return (renderUserProfile ? (renderUserProfile({
            user: message.sender,
            close: closeDropdown,
            currentUserId: userId,
            avatarRef: avatarRef,
        })) : (React__default.default.createElement(ui_ContextMenu.MenuItems
        /**
         * parentRef: For catching location(x, y) of MenuItems
         * parentContainRef: For toggling more options(menus & reactions)
        */
        , { 
            /**
             * parentRef: For catching location(x, y) of MenuItems
             * parentContainRef: For toggling more options(menus & reactions)
            */
            parentRef: avatarRef, parentContainRef: avatarRef, closeDropdown: closeDropdown, style: { paddingTop: '0px', paddingBottom: '0px' } },
            React__default.default.createElement(ui_UserProfile, { user: message.sender, onSuccess: closeDropdown })))); } }));
}

var InputLabel = function (_a) {
    var children = _a.children;
    return (React__default.default.createElement(ui_Label.Label, { className: 'sendbird-form-message__input__label', type: ui_Label.LabelTypography.CAPTION_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, children));
};
var FormInput = function (props) {
    var name = props.name, required = props.required, errorMessage = props.errorMessage, isValid = props.isValid, values = props.values, isInvalidated = props.isInvalidated, isSubmitTried = props.isSubmitTried, style = props.style, onFocused = props.onFocused, onChange = props.onChange, placeHolder = props.placeHolder, isSubmitted = props.isSubmitted;
    var layout = style.layout, _a = style.options, options = _a === void 0 ? [] : _a, resultCount = style.resultCount;
    var _b = resultCount !== null && resultCount !== void 0 ? resultCount : {}, _c = _b.min, min = _c === void 0 ? 1 : _c, _d = _b.max, max = _d === void 0 ? 1 : _d;
    var chipDataList = getInitialChipDataList();
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var handleFocus = function () {
        onFocused === null || onFocused === void 0 ? void 0 : onFocused(true);
    };
    var handleBlur = function () {
        onFocused === null || onFocused === void 0 ? void 0 : onFocused(false);
    };
    function getInitialChipDataList() {
        if (isSubmitted) {
            return options.map(function (option) { return ({
                state: values.includes(option)
                    ? 'submittedSelected'
                    : 'submittedDefault',
                option: option,
            }); });
        }
        else {
            return options.map(function (option) { return ({
                state: values.includes(option) ? 'selected' : 'default',
                option: option,
            }); });
        }
    }
    var onChipClick = function (index) {
        if (isSubmitted)
            return;
        var newDraftedValues;
        if (min === 1 && max === 1) {
            // Single select
            newDraftedValues = chipDataList[index].state === 'selected' ? [] : [chipDataList[index].option];
        }
        else {
            newDraftedValues = chipDataList.reduce(function (acc, chipData, i) {
                if (i === index) {
                    if (chipData.state === 'default' && values.length < max) {
                        acc.push(chipData.option);
                    }
                }
                else if (chipData.state === 'selected') {
                    acc.push(chipData.option);
                }
                return acc;
            }, []);
        }
        onChange(newDraftedValues);
    };
    return (React__default.default.createElement("div", { className: 'sendbird-form-message__input__root' },
        React__default.default.createElement(InputLabel, null,
            React__default.default.createElement("div", { className: 'sendbird-form-message__input__title-container' },
                name,
                " ",
                !required && React__default.default.createElement("span", { className: 'sendbird-form-message__input__title-optional' }, "(optional)"))),
        React__default.default.createElement("div", { className: 'sendbird-input_for_form' },
            (function () {
                switch (layout) {
                    case 'chip': {
                        return (React__default.default.createElement("div", { className: 'sendbird-form-message__input__chip-container' }, chipDataList.map(function (chipData, index) {
                            return (React__default.default.createElement("div", { className: "sendbird-form-message__input__chip ".concat(chipData.state), key: index, onClick: function () { return onChipClick(index); } },
                                React__default.default.createElement("div", { className: 'sendbird-form-message__input__chip-text' }, chipData.option),
                                isSubmitted
                                    && chipData.state === 'submittedSelected' && (React__default.default.createElement(ui_Icon.default, { className: 'sendbird-form-message__submitted-check-icon-chip', type: ui_Icon.IconTypes.DONE, fillColor: ui_Icon.IconColors.SECONDARY_2, width: '20px', height: '20px' }))));
                        })));
                    }
                    case 'textarea': {
                        var currentValue = values.length > 0 ? values[0] : '';
                        return (React__default.default.createElement("div", { className: 'sendbird-form-message__input__container' }, isSubmitted ? (React__default.default.createElement("div", { className: 'sendbird-form-message__submitted-input-box textarea' },
                            React__default.default.createElement("div", { className: 'sendbird-form-message__submitted-input-box-text' }, currentValue),
                            isValid && (React__default.default.createElement("div", { className: 'sendbird-form-message__submitted-check-icon-container' },
                                React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.DONE, fillColor: ui_Icon.IconColors.SECONDARY_2, width: '20px', height: '20px' }))),
                            !currentValue && (React__default.default.createElement(ui_Label.Label, { className: 'sendbird-input__placeholder', type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_3 }, stringSet.FORM_ITEM_OPTIONAL_EMPTY)))) : (React__default.default.createElement(React__default.default.Fragment, null,
                            React__default.default.createElement("textarea", { className: utils.classnames('sendbird-input__input', !!errorMessage && 'error', 'sendbird-form-message__input__textarea'), required: required, disabled: isSubmitted, value: currentValue, onFocus: handleFocus, onBlur: handleBlur, onChange: function (event) {
                                    var value = event.target.value;
                                    onChange(value ? [value] : []);
                                } }),
                            (placeHolder && !currentValue) && (React__default.default.createElement(ui_Label.Label, { className: 'sendbird-input__placeholder textarea', type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_3 }, placeHolder))))));
                    }
                    case 'text':
                    case 'number':
                    case 'phone':
                    case 'email': {
                        var currentValue = values.length > 0 ? values[0] : '';
                        return (React__default.default.createElement("div", { className: "sendbird-form-message__input__container" }, isSubmitted ? (React__default.default.createElement("div", { className: "sendbird-form-message__submitted-input-box" },
                            React__default.default.createElement("div", { className: "sendbird-form-message__submitted-input-box-text" }, currentValue),
                            isValid && (React__default.default.createElement("div", { className: "sendbird-form-message__submitted-check-icon-container" },
                                React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.DONE, fillColor: ui_Icon.IconColors.SECONDARY_2, width: "20px", height: "20px" }))),
                            !currentValue && (React__default.default.createElement(ui_Label.Label, { className: 'sendbird-input__placeholder', type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_3 }, stringSet.FORM_ITEM_OPTIONAL_EMPTY)))) : (React__default.default.createElement(React__default.default.Fragment, null,
                            React__default.default.createElement("input", { type: layout === 'number' ? 'text' : layout, inputMode: layout === 'number' ? 'numeric' : 'text', className: "sendbird-input__input ".concat(errorMessage ? 'error' : ''), name: name, required: required, disabled: isSubmitted, value: currentValue, onFocus: handleFocus, onBlur: handleBlur, onChange: function (event) {
                                    var value = event.target.value;
                                    onChange(value ? [value] : []);
                                } }),
                            (placeHolder && !currentValue) && (React__default.default.createElement(ui_Label.Label, { className: 'sendbird-input__placeholder', type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_3 }, placeHolder))))));
                    }
                    default: {
                        return React__default.default.createElement(React__default.default.Fragment, null);
                    }
                }
            })(),
            errorMessage && (isSubmitTried || isInvalidated) && (React__default.default.createElement(ui_Label.Label, { className: 'sendbird-form-message__error-label', type: ui_Label.LabelTypography.CAPTION_3 }, errorMessage)))));
};

var FallbackUserMessage = function (_a) {
    var isByMe = _a.isByMe, text = _a.text;
    return (React__default.default.createElement("div", { className: index.getClassName([
            'sendbird-unknown-message-item-body',
            isByMe ? 'outgoing' : 'incoming',
        ]) },
        React__default.default.createElement(ui_Label.Label, { className: "sendbird-unknown-message-item-body__description", type: ui_Label.LabelTypography.BODY_1, color: isByMe ? ui_Label.LabelColors.ONCONTENT_3 : ui_Label.LabelColors.ONBACKGROUND_3 }, text)));
};
function FormMessageItemBody(props) {
    var _this = this;
    var message = props.message, form = props.form, isByMe = props.isByMe, logger = props.logger;
    var items = form.items, formId = form.id;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var _a = React.useState(false), submitFailed = _a[0], setSubmitFailed = _a[1];
    var _b = React.useState(false), isSubmitTried = _b[0], setIsSubmitTried = _b[1];
    var _c = React.useState(function () {
        var initialFormValues = [];
        items.forEach(function (_a) {
            var required = _a.required, _b = _a.style, style = _b === void 0 ? {} : _b;
            var layout = style.layout, _c = style.defaultOptions, defaultOptions = _c === void 0 ? [] : _c;
            initialFormValues.push({
                draftValues: layout === 'chip' ? defaultOptions : [],
                required: required,
                errorMessage: null,
                isInvalidated: false,
            });
        });
        return initialFormValues;
    }), formValues = _c[0], setFormValues = _c[1];
    var isSubmitted = form.isSubmitted;
    var hasError = formValues.some(function (_a) {
        var errorMessage = _a.errorMessage;
        return !!errorMessage;
    });
    var hasInvalidated = formValues.some(function (_a) {
        var isInvalidated = _a.isInvalidated;
        return isInvalidated;
    });
    var isButtonDisabled = (hasError && (isSubmitTried || hasInvalidated)) || isSubmitted;
    var handleSubmit = React.useCallback(function () { return _tslib.__awaiter(_this, void 0, void 0, function () {
        var hasError_1, isMissingRequired, error_1;
        return _tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsSubmitTried(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    hasError_1 = formValues.some(function (_a) {
                        var errorMessage = _a.errorMessage;
                        return errorMessage;
                    });
                    if (hasError_1) {
                        return [2 /*return*/];
                    }
                    isMissingRequired = formValues.some(function (formValue) { return formValue.required
                        && (!formValue.draftValues || formValue.draftValues.length === 0); });
                    if (isMissingRequired) {
                        setFormValues(function (oldFormValues) {
                            return oldFormValues.map(function (formValue) {
                                if (formValue.required && formValue.draftValues.length === 0) {
                                    return _tslib.__assign(_tslib.__assign({}, formValue), { errorMessage: stringSet.FORM_ITEM_REQUIRED });
                                }
                                return formValue;
                            });
                        });
                        return [2 /*return*/];
                    }
                    formValues.forEach(function (formValue, index) {
                        items[index].draftValues = formValue.draftValues;
                    });
                    return [4 /*yield*/, message.submitMessageForm()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    setSubmitFailed(true);
                    logger === null || logger === void 0 ? void 0 : logger.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [formValues, message.messageId, message.submitMessageForm, formId]);
    if (!utils$1.isFormVersionCompatible(form.version)) {
        return React__default.default.createElement(FallbackUserMessage, { isByMe: isByMe, text: stringSet.FORM_VERSION_ERROR });
    }
    return (React__default.default.createElement("div", { className: index.getClassName([
            "".concat(consts.TEXT_MESSAGE_BODY_CLASSNAME, " disable-hover"),
            'sendbird-form-message__root',
            'incoming',
        ]) },
        items.map(function (item, index) {
            var _a;
            var name = item.name, placeholder = item.placeholder, id = item.id, required = item.required, style = item.style;
            var _b = formValues[index], _c = _b.draftValues, draftValues = _c === void 0 ? [] : _c, errorMessage = _b.errorMessage;
            return (React__default.default.createElement(FormInput, { key: id, style: style, placeHolder: placeholder, values: (_a = item.submittedValues) !== null && _a !== void 0 ? _a : draftValues, isInvalidated: formValues[index].isInvalidated, isSubmitTried: isSubmitTried, errorMessage: errorMessage, isValid: isSubmitted, isSubmitted: isSubmitted, name: name, required: required, onFocused: function (isFocus) {
                    if (errorMessage && !isFocus && !formValues[index].isInvalidated) {
                        setFormValues(function (_a) {
                            var newInputs = _a.slice(0);
                            newInputs[index] = _tslib.__assign(_tslib.__assign({}, newInputs[index]), { isInvalidated: true });
                            return newInputs;
                        });
                    }
                    else if (!errorMessage) {
                        setFormValues(function (_a) {
                            var newInputs = _a.slice(0);
                            newInputs[index] = _tslib.__assign(_tslib.__assign({}, newInputs[index]), { isInvalidated: false });
                            return newInputs;
                        });
                    }
                }, onChange: function (values) {
                    setFormValues(function (_a) {
                        var newInputs = _a.slice(0);
                        newInputs[index] = _tslib.__assign(_tslib.__assign({}, newInputs[index]), { draftValues: values, errorMessage: (function () {
                                if (!item.isValid(values)) {
                                    return stringSet.FORM_ITEM_INVALID;
                                }
                                if (required && values.length === 0) {
                                    return stringSet.FORM_ITEM_REQUIRED;
                                }
                                return null;
                            })() });
                        return newInputs; // Return the new array
                    });
                } }));
        }),
        React__default.default.createElement(ui_Button.default, { className: 'sendbird-form-message__submit-button', onClick: handleSubmit, disabled: isButtonDisabled, labelType: ui_Label.LabelTypography.BUTTON_2, labelColor: ui_Label.LabelColors.ONCONTENT_1 }, isSubmitted ? 'Submitted successfully' : 'Submit'),
        submitFailed && (React__default.default.createElement(ui_MessageFeedbackFailedModal, { text: 'Submit failed.', onCancel: function () {
                setSubmitFailed(false);
            } }))));
}

var MESSAGE_ITEM_BODY_CLASSNAME = 'sendbird-message-content__middle__message-item-body';
var MessageBody = function (props) {
    var _a;
    var _b = props.className, className = _b === void 0 ? MESSAGE_ITEM_BODY_CLASSNAME : _b, message = props.message, channel = props.channel, showFileViewer = props.showFileViewer, onMessageHeightChange = props.onMessageHeightChange, onBeforeDownloadFileMessage = props.onBeforeDownloadFileMessage, mouseHover = props.mouseHover, isMobile = props.isMobile, config = props.config, isReactionEnabledInChannel = props.isReactionEnabledInChannel, isByMe = props.isByMe;
    // Private props for internal customization.
    var customSubcomponentsProps = (_a = props['customSubcomponentsProps']) !== null && _a !== void 0 ? _a : {};
    var threadMessageKindKey = useFileInfoListWithUploaded.useThreadMessageKindKeySelector({
        isMobile: isMobile,
    });
    var statefulFileInfoList = useFileInfoListWithUploaded.useFileInfoListWithUploaded(message); // For MultipleFilesMessage.
    var messageTypes = index.getUIKitMessageTypes();
    var isOgMessageEnabledInGroupChannel = (channel === null || channel === void 0 ? void 0 : channel.isGroupChannel()) && config.groupChannel.enableOgtag;
    var isFormMessageEnabledInGroupChannel = (channel === null || channel === void 0 ? void 0 : channel.isGroupChannel()) && config.groupChannel.enableFormTypeMessage;
    var renderUnknownMessageItemBody = function () { return React__default.default.createElement(ui_UnknownMessageItemBody, { className: className, message: message, isByMe: isByMe, mouseHover: mouseHover, isReactionEnabled: isReactionEnabledInChannel }); };
    return index.K(message)
        .when(function (message) { return isFormMessageEnabledInGroupChannel && index.isFormMessage(message); }, function () { return (React__default.default.createElement(FormMessageItemBody, { isByMe: isByMe, message: message, form: message.messageForm, logger: config.logger })); })
        .when(index.isTemplateMessage, function () {
        var _a, _b;
        var templatePayload = message.extendedMessagePayload[consts$1.MESSAGE_TEMPLATE_KEY];
        if (!index.isValidTemplateMessageType(templatePayload)) {
            (_b = (_a = config.logger) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, 'TemplateMessageItemBody: invalid type value in message.extendedMessagePayload.message_template.', templatePayload);
            return renderUnknownMessageItemBody();
        }
        return React__default.default.createElement(ui_TemplateMessageItemBody.TemplateMessageItemBody, { className: className, message: message, isByMe: isByMe, theme: config === null || config === void 0 ? void 0 : config.theme });
    })
        .when(function (message) { return isOgMessageEnabledInGroupChannel
        && index.isSendableMessage(message)
        && index.isOGMessage(message); }, function () {
        var _a;
        return (React__default.default.createElement(ui_OGMessageItemBody, { className: className, message: message, isByMe: isByMe, mouseHover: mouseHover, isMentionEnabled: (_a = config.groupChannel.enableMention) !== null && _a !== void 0 ? _a : false, isReactionEnabled: isReactionEnabledInChannel, onMessageHeightChange: onMessageHeightChange, isMarkdownEnabled: config.groupChannel.enableMarkdownForUserMessage }));
    })
        .when(index.isTextMessage, function () {
        var _a;
        return (React__default.default.createElement(ui_TextMessageItemBody, { className: className, message: message, isByMe: isByMe, mouseHover: mouseHover, isMentionEnabled: (_a = config.groupChannel.enableMention) !== null && _a !== void 0 ? _a : false, isReactionEnabled: isReactionEnabledInChannel, isMarkdownEnabled: config.groupChannel.enableMarkdownForUserMessage }));
    })
        .when(function (message) { return index.getUIKitMessageType(message) === messageTypes.FILE; }, function () { return (React__default.default.createElement(ui_FileMessageItemBody, { className: className, message: message, isByMe: isByMe, mouseHover: mouseHover, isReactionEnabled: isReactionEnabledInChannel, onBeforeDownloadFileMessage: onBeforeDownloadFileMessage })); })
        .when(index.isMultipleFilesMessage, function () {
        var _a;
        return (React__default.default.createElement(useFileInfoListWithUploaded.MultipleFilesMessageItemBody, _tslib.__assign({ className: className, message: message, isByMe: isByMe, mouseHover: mouseHover, isReactionEnabled: isReactionEnabledInChannel, threadMessageKindKey: threadMessageKindKey, statefulFileInfoList: statefulFileInfoList, onBeforeDownloadFileMessage: onBeforeDownloadFileMessage }, (_a = customSubcomponentsProps['MultipleFilesMessageItemBody']) !== null && _a !== void 0 ? _a : {})));
    })
        .when(index.isVoiceMessage, function () {
        var _a;
        return (React__default.default.createElement(ui_VoiceMessageItemBody.VoiceMessageItemBody, { className: className, message: message, channelUrl: (_a = channel === null || channel === void 0 ? void 0 : channel.url) !== null && _a !== void 0 ? _a : '', isByMe: isByMe, isReactionEnabled: isReactionEnabledInChannel }));
    })
        .when(index.isThumbnailMessage, function () {
        var _a;
        return (React__default.default.createElement(ui_ThumbnailMessageItemBody, _tslib.__assign({ className: className, message: message, isByMe: isByMe, mouseHover: mouseHover, isReactionEnabled: isReactionEnabledInChannel, showFileViewer: showFileViewer, style: isMobile ? { width: '100%' } : {} }, (_a = customSubcomponentsProps['ThumbnailMessageItemBody']) !== null && _a !== void 0 ? _a : {})));
    })
        .otherwise(function () {
        return renderUnknownMessageItemBody();
    });
};

var MessageHeader = function (props) {
    var _a, _b;
    var channel = props.channel, message = props.message;
    return (React__default.default.createElement(ui_Label.Label, { className: "sendbird-message-content__middle__sender-name", type: ui_Label.LabelTypography.CAPTION_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, 
    /**
     * To use the latest member profile information, message.sender might be outdated
     */
    ((_b = (_a = channel === null || channel === void 0 ? void 0 : channel.members) === null || _a === void 0 ? void 0 : _a.find(function (member) {
        var _a;
        // @ts-ignore
        return (member === null || member === void 0 ? void 0 : member.userId) === ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId);
    })) === null || _b === void 0 ? void 0 : _b.nickname) || index.getSenderName(message)
    // TODO: Divide getting profileUrl logic to utils
    ));
};

exports.MessageBody = MessageBody;
exports.MessageHeader = MessageHeader;
exports.MessageProfile = MessageProfile;
//# sourceMappingURL=bundle-DE83rtdv.js.map
