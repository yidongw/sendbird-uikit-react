'use strict';

var React = require('react');
var LocalizationContext = require('../chunks/bundle-CmBrGegh.js');
var ui_Modal = require('../chunks/bundle-DfISCDoH.js');
var ui_Button = require('./Button.js');
var ui_Label = require('../chunks/bundle-D8-2bEdY.js');
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
require('../chunks/bundle-CzcmYPsN.js');
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
