'use strict';

var React = require('react');
var LocalizationContext = require('../chunks/bundle-CmBrGegh.js');
var ui_Modal = require('../chunks/bundle-DfISCDoH.js');
var ui_Button = require('./Button.js');
var ui_Input = require('./Input.js');
var ui_Label = require('../chunks/bundle-D8-2bEdY.js');
var MediaQueryContext = require('../chunks/bundle-CzcmYPsN.js');
var useKeyDown = require('../chunks/bundle-XkouAzOQ.js');
require('../chunks/bundle-DRvomNLJ.js');
require('../chunks/bundle-Q9YDOzjz.js');
require('../chunks/bundle-e2d_I3io.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-4kwoH67w.js');
require('../chunks/bundle-BCJ8mayg.js');
require('../chunks/bundle-C0tdWwa4.js');
require('../chunks/bundle-BYHj6UqH.js');
require('react-dom');
require('./IconButton.js');
require('./Icon.js');
require('@sendbird/uikit-tools');
require('../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../chunks/bundle-lGoyqUWm.js');
require('@sendbird/chat/openChannel');
require('../chunks/bundle-2M4zbjEc.js');
require('../useSendbirdStateContext.js');
require('../chunks/bundle-BYSQ-mQr.js');
require('./SortByRow.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function MessageFeedbackModal(props) {
    var _a, _b;
    var selectedFeedback = props.selectedFeedback, message = props.message, onClose = props.onClose, onSubmit = props.onSubmit, onUpdate = props.onUpdate, onRemove = props.onRemove;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
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
    var modalRef = React.useRef();
    var inputRef = React.useRef();
    var onKeyDown = useKeyDown.useKeyDown(modalRef, {
        Enter: function () { return onSubmitWrapper(); },
        Escape: function () { return onClose === null || onClose === void 0 ? void 0 : onClose(); },
    });
    return (React__default.default.createElement("div", { onKeyDown: onKeyDown },
        React__default.default.createElement(ui_Modal.Modal, { contentClassName: 'sendbird-message-feedback-modal-content__mobile', type: ui_Button.ButtonTypes.PRIMARY, onCancel: onClose, onSubmit: function () {
                onSubmitWrapper();
            }, submitText: stringSet.BUTTON__SUBMIT, renderHeader: function () { return (React__default.default.createElement("div", { className: 'sendbird-modal__header' },
                React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.H_1, color: ui_Label.LabelColors.ONBACKGROUND_1, className: 'sendbird-message-feedback-modal-header' }, stringSet.FEEDBACK_MODAL_TITLE))); }, customFooter: React__default.default.createElement("div", { className: 'sendbird-message-feedback-modal-footer__root' },
                !isMobile && (message === null || message === void 0 ? void 0 : message.myFeedback) && selectedFeedback === message.myFeedback.rating
                    ? React__default.default.createElement(ui_Button.default, { type: ui_Button.ButtonTypes.WARNING, onClick: onRemove, labelType: ui_Label.LabelTypography.BUTTON_3 }, stringSet.BUTTON__REMOVE_FEEDBACK)
                    : React__default.default.createElement("div", null),
                React__default.default.createElement("div", { className: 'sendbird-message-feedback-modal-footer__right-content' },
                    React__default.default.createElement(ui_Button.default, { type: ui_Button.ButtonTypes.SECONDARY, onClick: onClose },
                        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BUTTON_3, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.BUTTON__CANCEL)),
                    React__default.default.createElement(ui_Button.default, { onClick: function () { return onSubmitWrapper(); } },
                        React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BUTTON_3, color: ui_Label.LabelColors.ONCONTENT_1 }, hasComment ? stringSet.BUTTON__SAVE : stringSet.BUTTON__SUBMIT)))) },
            React__default.default.createElement("div", { className: 'sendbird-message-feedback-modal-body__root' },
                React__default.default.createElement(ui_Input.default, { name: 'sendbird-message-feedback-modal-body__root', ref: inputRef, value: isEdit ? (_b = message.myFeedback) === null || _b === void 0 ? void 0 : _b.comment : undefined, placeHolder: stringSet.FEEDBACK_CONTENT_PLACEHOLDER, autoFocus: true })))));
}

module.exports = MessageFeedbackModal;
//# sourceMappingURL=MessageFeedbackModal.js.map
