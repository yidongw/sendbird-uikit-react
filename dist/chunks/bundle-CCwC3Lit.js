import React__default, { useContext } from 'react';
import { M as Modal } from './bundle-ja8H3E0K.js';
import './bundle-HcNswZ5p.js';
import './bundle-Qkp2VIaZ.js';
import { ButtonTypes } from '../ui/Button.js';
import { L as LocalizationContext } from './bundle-DhMUg-L7.js';
import { g as getModalDeleteMessageTitle } from './bundle-BzEzK7wl.js';

var RemoveMessageModalView = function (props) {
    var _a;
    var _b = props.onSubmit, onSubmit = _b === void 0 ? function () {
        /* noop */
    } : _b, onCancel = props.onCancel, message = props.message, deleteMessage = props.deleteMessage;
    var stringSet = useContext(LocalizationContext).stringSet;
    return (React__default.createElement(Modal, { type: ButtonTypes.DANGER, disabled: ((_a = message === null || message === void 0 ? void 0 : message.threadInfo) === null || _a === void 0 ? void 0 : _a.replyCount) ? message.threadInfo.replyCount > 0 : undefined, onCancel: onCancel, onSubmit: function () {
            if (message.isUserMessage() || message.isFileMessage() || message.isMultipleFilesMessage()) {
                deleteMessage(message).then(function () {
                    // For other status such as PENDING, SCHEDULED, and CANCELED,
                    // invalid parameters error is thrown so nothing happens.
                    onSubmit();
                    onCancel();
                });
            }
        }, submitText: stringSet.MESSAGE_MENU__DELETE, titleText: getModalDeleteMessageTitle(stringSet, message) }));
};

export { RemoveMessageModalView as R };
//# sourceMappingURL=bundle-CCwC3Lit.js.map
