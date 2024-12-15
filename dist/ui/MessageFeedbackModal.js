import React__default, { useContext, useRef } from 'react';
import { L as LocalizationContext } from '../chunks/bundle-CbLNLMef.js';
import { M as Modal } from '../chunks/bundle-ptS-tNRF.js';
import Button, { ButtonTypes } from './Button.js';
import Input from './Input.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-Di0Zwz2X.js';
import { u as useMediaQueryContext } from '../chunks/bundle-Bk1oUUzJ.js';
import { u as useKeyDown } from '../chunks/bundle-Dhkrx18n.js';
import '../chunks/bundle-Ck-Lg2K3.js';
import '../chunks/bundle-B80WXNZi.js';
import '../chunks/bundle-BL0uQSu6.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-fwRBR_Yw.js';
import '../chunks/bundle-CnkNoe49.js';
import '../chunks/bundle-DgxVBBM3.js';
import '../chunks/bundle-pQHYhigr.js';
import 'react-dom';
import './IconButton.js';
import './Icon.js';
import '@sendbird/uikit-tools';
import '../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../chunks/bundle-gMJSD9hQ.js';
import '@sendbird/chat/openChannel';
import '../chunks/bundle-CHD1aKHO.js';
import '../useSendbirdStateContext.js';
import '../chunks/bundle-A5WEPjt6.js';
import './SortByRow.js';

function MessageFeedbackModal(props) {
    var _a, _b;
    var selectedFeedback = props.selectedFeedback, message = props.message, onClose = props.onClose, onSubmit = props.onSubmit, onUpdate = props.onUpdate, onRemove = props.onRemove;
    var stringSet = useContext(LocalizationContext).stringSet;
    var isMobile = useMediaQueryContext().isMobile;
    var isEdit = (message === null || message === void 0 ? void 0 : message.myFeedback) && selectedFeedback === message.myFeedback.rating;
    var hasComment = (_a = message === null || message === void 0 ? void 0 : message.myFeedback) === null || _a === void 0 ? void 0 : _a.comment;
    var onSubmitWrapper = function () {
        var _a, _b, _c;
        if (!selectedFeedback)
            return;
        var comment = (_b = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
        if (isEdit) {
            if (comment !== ((_c = message.myFeedback) === null || _c === void 0 ? void 0 : _c.comment)) {
                onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(selectedFeedback, comment);
            }
            else {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }
        }
        else if (!message.myFeedback) {
            onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(selectedFeedback, comment);
        }
    };
    var modalRef = useRef();
    var inputRef = useRef();
    var onKeyDown = useKeyDown(modalRef, {
        Enter: function () { return onSubmitWrapper(); },
        Escape: function () { return onClose === null || onClose === void 0 ? void 0 : onClose(); },
    });
    return (React__default.createElement("div", { onKeyDown: onKeyDown },
        React__default.createElement(Modal, { contentClassName: 'sendbird-message-feedback-modal-content__mobile', type: ButtonTypes.PRIMARY, onCancel: onClose, onSubmit: function () {
                onSubmitWrapper();
            }, submitText: stringSet.BUTTON__SUBMIT, renderHeader: function () { return (React__default.createElement("div", { className: 'sendbird-modal__header' },
                React__default.createElement(Label, { type: LabelTypography.H_1, color: LabelColors.ONBACKGROUND_1, className: 'sendbird-message-feedback-modal-header' }, stringSet.FEEDBACK_MODAL_TITLE))); }, customFooter: React__default.createElement("div", { className: 'sendbird-message-feedback-modal-footer__root' },
                !isMobile && (message === null || message === void 0 ? void 0 : message.myFeedback) && selectedFeedback === message.myFeedback.rating
                    ? React__default.createElement(Button, { type: ButtonTypes.WARNING, onClick: onRemove, labelType: LabelTypography.BUTTON_3 }, stringSet.BUTTON__REMOVE_FEEDBACK)
                    : React__default.createElement("div", null),
                React__default.createElement("div", { className: 'sendbird-message-feedback-modal-footer__right-content' },
                    React__default.createElement(Button, { type: ButtonTypes.SECONDARY, onClick: onClose },
                        React__default.createElement(Label, { type: LabelTypography.BUTTON_3, color: LabelColors.ONBACKGROUND_1 }, stringSet.BUTTON__CANCEL)),
                    React__default.createElement(Button, { onClick: function () { return onSubmitWrapper(); } },
                        React__default.createElement(Label, { type: LabelTypography.BUTTON_3, color: LabelColors.ONCONTENT_1 }, hasComment ? stringSet.BUTTON__SAVE : stringSet.BUTTON__SUBMIT)))) },
            React__default.createElement("div", { className: 'sendbird-message-feedback-modal-body__root' },
                React__default.createElement(Input, { name: 'sendbird-message-feedback-modal-body__root', ref: inputRef, value: isEdit ? (_b = message.myFeedback) === null || _b === void 0 ? void 0 : _b.comment : undefined, placeHolder: stringSet.FEEDBACK_CONTENT_PLACEHOLDER, autoFocus: true })))));
}

export { MessageFeedbackModal as default };
//# sourceMappingURL=MessageFeedbackModal.js.map
