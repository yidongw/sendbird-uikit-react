import React__default, { useRef, useContext, useState, useCallback } from 'react';
import { l as isSendableMessage, y as getClassName, o as getUIKitMessageTypes, K, Q as isFormMessage, D as isTemplateMessage, T as isValidTemplateMessageType, O as isOGMessage, $ as isTextMessage, n as getUIKitMessageType, d as isMultipleFilesMessage, i as isVoiceMessage, q as isThumbnailMessage, f as getSenderName } from './bundle-BL0uQSu6.js';
import { C as ContextMenu, b as MenuItems } from './bundle-A5WEPjt6.js';
import { A as Avatar } from './bundle-BbICJE5Z.js';
import UserProfile from '../ui/UserProfile.js';
import { u as useUserProfileContext } from './bundle-C3toIOqd.js';
import { c as classnames } from './bundle-pQHYhigr.js';
import { a as __awaiter, b as __generator, _ as __assign } from './bundle-Ck-Lg2K3.js';
import OGMessageItemBody from '../ui/OGMessageItemBody.js';
import TextMessageItemBody from '../ui/TextMessageItemBody.js';
import FileMessageItemBody from '../ui/FileMessageItemBody.js';
import { u as useThreadMessageKindKeySelector, a as useFileInfoListWithUploaded, M as MultipleFilesMessageItemBody } from './bundle-BztO2DWM.js';
import { VoiceMessageItemBody } from '../ui/VoiceMessageItemBody.js';
import ThumbnailMessageItemBody from '../ui/ThumbnailMessageItemBody.js';
import UnknownMessageItemBody from '../ui/UnknownMessageItemBody.js';
import { TemplateMessageItemBody } from '../ui/TemplateMessageItemBody.js';
import Button from '../ui/Button.js';
import { L as Label, a as LabelTypography, b as LabelColors } from './bundle-Di0Zwz2X.js';
import MessageFeedbackFailedModal from '../ui/MessageFeedbackFailedModal.js';
import { L as LocalizationContext } from './bundle-CbLNLMef.js';
import Icon, { IconTypes, IconColors } from '../ui/Icon.js';
import { T as TEXT_MESSAGE_BODY_CLASSNAME } from './bundle-DjodzqAP.js';
import { f as isFormVersionCompatible } from './bundle-BT00z1C1.js';
import { h as MESSAGE_TEMPLATE_KEY } from './bundle-DgxVBBM3.js';

function MessageProfile(_a) {
    var 
    // Internal props
    _b = _a.className, 
    // Internal props
    className = _b === void 0 ? '' : _b, isByMe = _a.isByMe, displayThreadReplies = _a.displayThreadReplies, bottom = _a.bottom, 
    // MessageContentProps
    message = _a.message, channel = _a.channel, userId = _a.userId, _c = _a.chainBottom, chainBottom = _c === void 0 ? false : _c;
    var avatarRef = useRef(null);
    var _d = useUserProfileContext(), disableUserProfile = _d.disableUserProfile, renderUserProfile = _d.renderUserProfile;
    if (isByMe || chainBottom || !isSendableMessage(message)) {
        return null;
    }
    return (React__default.createElement(ContextMenu, { menuTrigger: function (toggleDropdown) {
            var _a, _b;
            return (React__default.createElement(Avatar, { className: classnames(className, displayThreadReplies && 'use-thread-replies'), src: ((_b = (_a = channel === null || channel === void 0 ? void 0 : channel.members) === null || _a === void 0 ? void 0 : _a.find(function (member) { return (member === null || member === void 0 ? void 0 : member.userId) === message.sender.userId; })) === null || _b === void 0 ? void 0 : _b.profileUrl)
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
        })) : (React__default.createElement(MenuItems
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
            React__default.createElement(UserProfile, { user: message.sender, onSuccess: closeDropdown })))); } }));
}

var InputLabel = function (_a) {
    var children = _a.children;
    return (React__default.createElement(Label, { className: 'sendbird-form-message__input__label', type: LabelTypography.CAPTION_2, color: LabelColors.ONBACKGROUND_2 }, children));
};
var FormInput = function (props) {
    var name = props.name, required = props.required, errorMessage = props.errorMessage, isValid = props.isValid, values = props.values, isInvalidated = props.isInvalidated, isSubmitTried = props.isSubmitTried, style = props.style, onFocused = props.onFocused, onChange = props.onChange, placeHolder = props.placeHolder, isSubmitted = props.isSubmitted;
    var layout = style.layout, _a = style.options, options = _a === void 0 ? [] : _a, resultCount = style.resultCount;
    var _b = resultCount !== null && resultCount !== void 0 ? resultCount : {}, _c = _b.min, min = _c === void 0 ? 1 : _c, _d = _b.max, max = _d === void 0 ? 1 : _d;
    var chipDataList = getInitialChipDataList();
    var stringSet = useContext(LocalizationContext).stringSet;
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
    return (React__default.createElement("div", { className: 'sendbird-form-message__input__root' },
        React__default.createElement(InputLabel, null,
            React__default.createElement("div", { className: 'sendbird-form-message__input__title-container' },
                name,
                " ",
                !required && React__default.createElement("span", { className: 'sendbird-form-message__input__title-optional' }, "(optional)"))),
        React__default.createElement("div", { className: 'sendbird-input_for_form' },
            (function () {
                switch (layout) {
                    case 'chip': {
                        return (React__default.createElement("div", { className: 'sendbird-form-message__input__chip-container' }, chipDataList.map(function (chipData, index) {
                            return (React__default.createElement("div", { className: "sendbird-form-message__input__chip ".concat(chipData.state), key: index, onClick: function () { return onChipClick(index); } },
                                React__default.createElement("div", { className: 'sendbird-form-message__input__chip-text' }, chipData.option),
                                isSubmitted
                                    && chipData.state === 'submittedSelected' && (React__default.createElement(Icon, { className: 'sendbird-form-message__submitted-check-icon-chip', type: IconTypes.DONE, fillColor: IconColors.SECONDARY_2, width: '20px', height: '20px' }))));
                        })));
                    }
                    case 'textarea': {
                        var currentValue = values.length > 0 ? values[0] : '';
                        return (React__default.createElement("div", { className: 'sendbird-form-message__input__container' }, isSubmitted ? (React__default.createElement("div", { className: 'sendbird-form-message__submitted-input-box textarea' },
                            React__default.createElement("div", { className: 'sendbird-form-message__submitted-input-box-text' }, currentValue),
                            isValid && (React__default.createElement("div", { className: 'sendbird-form-message__submitted-check-icon-container' },
                                React__default.createElement(Icon, { type: IconTypes.DONE, fillColor: IconColors.SECONDARY_2, width: '20px', height: '20px' }))),
                            !currentValue && (React__default.createElement(Label, { className: 'sendbird-input__placeholder', type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_3 }, stringSet.FORM_ITEM_OPTIONAL_EMPTY)))) : (React__default.createElement(React__default.Fragment, null,
                            React__default.createElement("textarea", { className: classnames('sendbird-input__input', !!errorMessage && 'error', 'sendbird-form-message__input__textarea'), required: required, disabled: isSubmitted, value: currentValue, onFocus: handleFocus, onBlur: handleBlur, onChange: function (event) {
                                    var value = event.target.value;
                                    onChange(value ? [value] : []);
                                } }),
                            (placeHolder && !currentValue) && (React__default.createElement(Label, { className: 'sendbird-input__placeholder textarea', type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_3 }, placeHolder))))));
                    }
                    case 'text':
                    case 'number':
                    case 'phone':
                    case 'email': {
                        var currentValue = values.length > 0 ? values[0] : '';
                        return (React__default.createElement("div", { className: "sendbird-form-message__input__container" }, isSubmitted ? (React__default.createElement("div", { className: "sendbird-form-message__submitted-input-box" },
                            React__default.createElement("div", { className: "sendbird-form-message__submitted-input-box-text" }, currentValue),
                            isValid && (React__default.createElement("div", { className: "sendbird-form-message__submitted-check-icon-container" },
                                React__default.createElement(Icon, { type: IconTypes.DONE, fillColor: IconColors.SECONDARY_2, width: "20px", height: "20px" }))),
                            !currentValue && (React__default.createElement(Label, { className: 'sendbird-input__placeholder', type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_3 }, stringSet.FORM_ITEM_OPTIONAL_EMPTY)))) : (React__default.createElement(React__default.Fragment, null,
                            React__default.createElement("input", { type: layout === 'number' ? 'text' : layout, inputMode: layout === 'number' ? 'numeric' : 'text', className: "sendbird-input__input ".concat(errorMessage ? 'error' : ''), name: name, required: required, disabled: isSubmitted, value: currentValue, onFocus: handleFocus, onBlur: handleBlur, onChange: function (event) {
                                    var value = event.target.value;
                                    onChange(value ? [value] : []);
                                } }),
                            (placeHolder && !currentValue) && (React__default.createElement(Label, { className: 'sendbird-input__placeholder', type: LabelTypography.BODY_1, color: LabelColors.ONBACKGROUND_3 }, placeHolder))))));
                    }
                    default: {
                        return React__default.createElement(React__default.Fragment, null);
                    }
                }
            })(),
            errorMessage && (isSubmitTried || isInvalidated) && (React__default.createElement(Label, { className: 'sendbird-form-message__error-label', type: LabelTypography.CAPTION_3 }, errorMessage)))));
};

var FallbackUserMessage = function (_a) {
    var isByMe = _a.isByMe, text = _a.text;
    return (React__default.createElement("div", { className: getClassName([
            'sendbird-unknown-message-item-body',
            isByMe ? 'outgoing' : 'incoming',
        ]) },
        React__default.createElement(Label, { className: "sendbird-unknown-message-item-body__description", type: LabelTypography.BODY_1, color: isByMe ? LabelColors.ONCONTENT_3 : LabelColors.ONBACKGROUND_3 }, text)));
};
function FormMessageItemBody(props) {
    var _this = this;
    var message = props.message, form = props.form, isByMe = props.isByMe, logger = props.logger;
    var items = form.items, formId = form.id;
    var stringSet = useContext(LocalizationContext).stringSet;
    var _a = useState(false), submitFailed = _a[0], setSubmitFailed = _a[1];
    var _b = useState(false), isSubmitTried = _b[0], setIsSubmitTried = _b[1];
    var _c = useState(function () {
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
    var handleSubmit = useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
        var hasError_1, isMissingRequired, error_1;
        return __generator(this, function (_a) {
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
                                    return __assign(__assign({}, formValue), { errorMessage: stringSet.FORM_ITEM_REQUIRED });
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
    if (!isFormVersionCompatible(form.version)) {
        return React__default.createElement(FallbackUserMessage, { isByMe: isByMe, text: stringSet.FORM_VERSION_ERROR });
    }
    return (React__default.createElement("div", { className: getClassName([
            "".concat(TEXT_MESSAGE_BODY_CLASSNAME, " disable-hover"),
            'sendbird-form-message__root',
            'incoming',
        ]) },
        items.map(function (item, index) {
            var _a;
            var name = item.name, placeholder = item.placeholder, id = item.id, required = item.required, style = item.style;
            var _b = formValues[index], _c = _b.draftValues, draftValues = _c === void 0 ? [] : _c, errorMessage = _b.errorMessage;
            return (React__default.createElement(FormInput, { key: id, style: style, placeHolder: placeholder, values: (_a = item.submittedValues) !== null && _a !== void 0 ? _a : draftValues, isInvalidated: formValues[index].isInvalidated, isSubmitTried: isSubmitTried, errorMessage: errorMessage, isValid: isSubmitted, isSubmitted: isSubmitted, name: name, required: required, onFocused: function (isFocus) {
                    if (errorMessage && !isFocus && !formValues[index].isInvalidated) {
                        setFormValues(function (_a) {
                            var newInputs = _a.slice(0);
                            newInputs[index] = __assign(__assign({}, newInputs[index]), { isInvalidated: true });
                            return newInputs;
                        });
                    }
                    else if (!errorMessage) {
                        setFormValues(function (_a) {
                            var newInputs = _a.slice(0);
                            newInputs[index] = __assign(__assign({}, newInputs[index]), { isInvalidated: false });
                            return newInputs;
                        });
                    }
                }, onChange: function (values) {
                    setFormValues(function (_a) {
                        var newInputs = _a.slice(0);
                        newInputs[index] = __assign(__assign({}, newInputs[index]), { draftValues: values, errorMessage: (function () {
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
        React__default.createElement(Button, { className: 'sendbird-form-message__submit-button', onClick: handleSubmit, disabled: isButtonDisabled, labelType: LabelTypography.BUTTON_2, labelColor: LabelColors.ONCONTENT_1 }, isSubmitted ? 'Submitted successfully' : 'Submit'),
        submitFailed && (React__default.createElement(MessageFeedbackFailedModal, { text: 'Submit failed.', onCancel: function () {
                setSubmitFailed(false);
            } }))));
}

var MESSAGE_ITEM_BODY_CLASSNAME = 'sendbird-message-content__middle__message-item-body';
var MessageBody = function (props) {
    var _a;
    var _b = props.className, className = _b === void 0 ? MESSAGE_ITEM_BODY_CLASSNAME : _b, message = props.message, channel = props.channel, showFileViewer = props.showFileViewer, onMessageHeightChange = props.onMessageHeightChange, onBeforeDownloadFileMessage = props.onBeforeDownloadFileMessage, mouseHover = props.mouseHover, isMobile = props.isMobile, config = props.config, isReactionEnabledInChannel = props.isReactionEnabledInChannel, isByMe = props.isByMe;
    // Private props for internal customization.
    var customSubcomponentsProps = (_a = props['customSubcomponentsProps']) !== null && _a !== void 0 ? _a : {};
    var threadMessageKindKey = useThreadMessageKindKeySelector({
        isMobile: isMobile,
    });
    var statefulFileInfoList = useFileInfoListWithUploaded(message); // For MultipleFilesMessage.
    var messageTypes = getUIKitMessageTypes();
    var isOgMessageEnabledInGroupChannel = (channel === null || channel === void 0 ? void 0 : channel.isGroupChannel()) && config.groupChannel.enableOgtag;
    var isFormMessageEnabledInGroupChannel = (channel === null || channel === void 0 ? void 0 : channel.isGroupChannel()) && config.groupChannel.enableFormTypeMessage;
    var renderUnknownMessageItemBody = function () { return React__default.createElement(UnknownMessageItemBody, { className: className, message: message, isByMe: isByMe, mouseHover: mouseHover, isReactionEnabled: isReactionEnabledInChannel }); };
    return K(message)
        .when(function (message) { return isFormMessageEnabledInGroupChannel && isFormMessage(message); }, function () { return (React__default.createElement(FormMessageItemBody, { isByMe: isByMe, message: message, form: message.messageForm, logger: config.logger })); })
        .when(isTemplateMessage, function () {
        var _a, _b;
        var templatePayload = message.extendedMessagePayload[MESSAGE_TEMPLATE_KEY];
        if (!isValidTemplateMessageType(templatePayload)) {
            (_b = (_a = config.logger) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, 'TemplateMessageItemBody: invalid type value in message.extendedMessagePayload.message_template.', templatePayload);
            return renderUnknownMessageItemBody();
        }
        return React__default.createElement(TemplateMessageItemBody, { className: className, message: message, isByMe: isByMe, theme: config === null || config === void 0 ? void 0 : config.theme });
    })
        .when(function (message) { return isOgMessageEnabledInGroupChannel
        && isSendableMessage(message)
        && isOGMessage(message); }, function () {
        var _a;
        return (React__default.createElement(OGMessageItemBody, { className: className, message: message, isByMe: isByMe, mouseHover: mouseHover, isMentionEnabled: (_a = config.groupChannel.enableMention) !== null && _a !== void 0 ? _a : false, isReactionEnabled: isReactionEnabledInChannel, onMessageHeightChange: onMessageHeightChange, isMarkdownEnabled: config.groupChannel.enableMarkdownForUserMessage }));
    })
        .when(isTextMessage, function () {
        var _a;
        return (React__default.createElement(TextMessageItemBody, { className: className, message: message, isByMe: isByMe, mouseHover: mouseHover, isMentionEnabled: (_a = config.groupChannel.enableMention) !== null && _a !== void 0 ? _a : false, isReactionEnabled: isReactionEnabledInChannel, isMarkdownEnabled: config.groupChannel.enableMarkdownForUserMessage }));
    })
        .when(function (message) { return getUIKitMessageType(message) === messageTypes.FILE; }, function () { return (React__default.createElement(FileMessageItemBody, { className: className, message: message, isByMe: isByMe, mouseHover: mouseHover, isReactionEnabled: isReactionEnabledInChannel, onBeforeDownloadFileMessage: onBeforeDownloadFileMessage })); })
        .when(isMultipleFilesMessage, function () {
        var _a;
        return (React__default.createElement(MultipleFilesMessageItemBody, __assign({ className: className, message: message, isByMe: isByMe, mouseHover: mouseHover, isReactionEnabled: isReactionEnabledInChannel, threadMessageKindKey: threadMessageKindKey, statefulFileInfoList: statefulFileInfoList, onBeforeDownloadFileMessage: onBeforeDownloadFileMessage }, (_a = customSubcomponentsProps['MultipleFilesMessageItemBody']) !== null && _a !== void 0 ? _a : {})));
    })
        .when(isVoiceMessage, function () {
        var _a;
        return (React__default.createElement(VoiceMessageItemBody, { className: className, message: message, channelUrl: (_a = channel === null || channel === void 0 ? void 0 : channel.url) !== null && _a !== void 0 ? _a : '', isByMe: isByMe, isReactionEnabled: isReactionEnabledInChannel }));
    })
        .when(isThumbnailMessage, function () {
        var _a;
        return (React__default.createElement(ThumbnailMessageItemBody, __assign({ className: className, message: message, isByMe: isByMe, mouseHover: mouseHover, isReactionEnabled: isReactionEnabledInChannel, showFileViewer: showFileViewer, style: isMobile ? { width: '100%' } : {} }, (_a = customSubcomponentsProps['ThumbnailMessageItemBody']) !== null && _a !== void 0 ? _a : {})));
    })
        .otherwise(function () {
        return renderUnknownMessageItemBody();
    });
};

var MessageHeader = function (props) {
    var _a, _b;
    var channel = props.channel, message = props.message;
    return (React__default.createElement(Label, { className: "sendbird-message-content__middle__sender-name", type: LabelTypography.CAPTION_2, color: LabelColors.ONBACKGROUND_2 }, 
    /**
     * To use the latest member profile information, message.sender might be outdated
     */
    ((_b = (_a = channel === null || channel === void 0 ? void 0 : channel.members) === null || _a === void 0 ? void 0 : _a.find(function (member) {
        var _a;
        // @ts-ignore
        return (member === null || member === void 0 ? void 0 : member.userId) === ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId);
    })) === null || _b === void 0 ? void 0 : _b.nickname) || getSenderName(message)
    // TODO: Divide getting profileUrl logic to utils
    ));
};

export { MessageProfile as M, MessageBody as a, MessageHeader as b };
//# sourceMappingURL=bundle-BNGFpTQ2.js.map
