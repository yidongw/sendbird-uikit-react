'use strict';

var React = require('react');
var LocalizationContext = require('../chunks/bundle-Cy1ruNzs.js');
var ui_Modal = require('../chunks/bundle-DZhkNDpN.js');
var ui_Button = require('./Button.js');
var ui_Label = require('../chunks/bundle-CAR4EIKs.js');
var useKeyDown = require('../chunks/bundle-DpdA7O8z.js');
require('../chunks/bundle-Bdr7xlea.js');
require('../chunks/bundle-Dio8pG-T.js');
require('../chunks/bundle-BLoixwYr.js');
require('@sendbird/chat/groupChannel');
require('../utils/message/getOutgoingMessageState.js');
require('../chunks/bundle-Dr9yFtKa.js');
require('../chunks/bundle-C2CwvM-u.js');
require('../chunks/bundle-BD0wJiNh.js');
require('../chunks/bundle-Ck6ikNW6.js');
require('react-dom');
require('../chunks/bundle-DrIKAEHN.js');
require('./IconButton.js');
require('./Icon.js');
require('@sendbird/uikit-tools');
require('../withSendbird.js');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('../chunks/bundle-C1poxl5k.js');
require('@sendbird/chat/openChannel');
require('../chunks/bundle-CJM9Pdwg.js');
require('../useSendbirdStateContext.js');
require('../chunks/bundle-BKyZTqvq.js');
require('./SortByRow.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function MessageFeedbackFailedModal(props) {
    var text = props.text, onCancel = props.onCancel;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    var modalRef = React.useRef(null);
    var onKeyDown = useKeyDown.useKeyDown(modalRef, {
        Enter: function () { return onCancel === null || onCancel === void 0 ? void 0 : onCancel(); },
        Escape: function () { return onCancel === null || onCancel === void 0 ? void 0 : onCancel(); },
    });
    return (React__default.default.createElement("div", { onKeyDown: onKeyDown },
        React__default.default.createElement(ui_Modal.Modal, { contentClassName: 'sendbird-message-feedback-modal-content__mobile', type: ui_Button.ButtonTypes.PRIMARY, onSubmit: onCancel, onClose: onCancel, submitText: stringSet.BUTTON__OK, renderHeader: function () { return (React__default.default.createElement("div", { className: 'sendbird-modal__header' },
                React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.H_1, color: ui_Label.LabelColors.ONBACKGROUND_1, className: 'sendbird-message-feedback-modal-header' }, text))); }, customFooter: React__default.default.createElement("div", { className: 'sendbird-message-feedback-modal-footer__root_failed' },
                React__default.default.createElement(ui_Button.default, { onClick: onCancel },
                    React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.BUTTON_3, color: ui_Label.LabelColors.ONCONTENT_1 }, stringSet.BUTTON__OK))) })));
}

module.exports = MessageFeedbackFailedModal;
//# sourceMappingURL=MessageFeedbackFailedModal.js.map
