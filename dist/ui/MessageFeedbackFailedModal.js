import React__default, { useContext, useRef } from 'react';
import { L as LocalizationContext } from '../chunks/bundle-DhMUg-L7.js';
import { M as Modal } from '../chunks/bundle-ja8H3E0K.js';
import Button, { ButtonTypes } from './Button.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../chunks/bundle-Qkp2VIaZ.js';
import { u as useKeyDown } from '../chunks/bundle-A7zrKt0i.js';
import '../chunks/bundle-HcNswZ5p.js';
import '../chunks/bundle-dybWaw0v.js';
import '../chunks/bundle-Bd-i99nk.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-DjLJFwD7.js';
import '../chunks/bundle-DB7YSrIT.js';
import '../chunks/bundle-DQk0aENq.js';
import '../chunks/bundle-0WaCg6X7.js';
import 'react-dom';
import '../chunks/bundle-DnSobLtx.js';
import './IconButton.js';
import './Icon.js';
import '@sendbird/uikit-tools';
import '../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import '../chunks/bundle-zy1mnw8U.js';
import '../useSendbirdStateContext.js';
import '../chunks/bundle-BKzcG-aC.js';
import './SortByRow.js';

function MessageFeedbackFailedModal(props) {
    var text = props.text, onCancel = props.onCancel;
    var stringSet = useContext(LocalizationContext).stringSet;
    var modalRef = useRef(null);
    var onKeyDown = useKeyDown(modalRef, {
        Enter: function () { return onCancel === null || onCancel === void 0 ? void 0 : onCancel(); },
        Escape: function () { return onCancel === null || onCancel === void 0 ? void 0 : onCancel(); },
    });
    return (React__default.createElement("div", { onKeyDown: onKeyDown },
        React__default.createElement(Modal, { contentClassName: 'sendbird-message-feedback-modal-content__mobile', type: ButtonTypes.PRIMARY, onSubmit: onCancel, onClose: onCancel, submitText: stringSet.BUTTON__OK, renderHeader: function () { return (React__default.createElement("div", { className: 'sendbird-modal__header' },
                React__default.createElement(Label, { type: LabelTypography.H_1, color: LabelColors.ONBACKGROUND_1, className: 'sendbird-message-feedback-modal-header' }, text))); }, customFooter: React__default.createElement("div", { className: 'sendbird-message-feedback-modal-footer__root_failed' },
                React__default.createElement(Button, { onClick: onCancel },
                    React__default.createElement(Label, { type: LabelTypography.BUTTON_3, color: LabelColors.ONCONTENT_1 }, stringSet.BUTTON__OK))) })));
}

export { MessageFeedbackFailedModal as default };
//# sourceMappingURL=MessageFeedbackFailedModal.js.map
