'use strict';

var React = require('react');
var ui_Modal = require('./bundle-DfISCDoH.js');
require('./bundle-DRvomNLJ.js');
require('./bundle-D8-2bEdY.js');
var ui_Button = require('../ui/Button.js');
var LocalizationContext = require('./bundle-CmBrGegh.js');
var stringFormatterUtils = require('./bundle-M6Urrta6.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var RemoveMessageModalView = function (props) {
    var _a;
    var _b = props.onSubmit, onSubmit = _b === void 0 ? function () {
        /* noop */
    } : _b, onCancel = props.onCancel, message = props.message, deleteMessage = props.deleteMessage;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React__default.default.createElement(ui_Modal.Modal, { type: ui_Button.ButtonTypes.DANGER, disabled: ((_a = message === null || message === void 0 ? void 0 : message.threadInfo) === null || _a === void 0 ? void 0 : _a.replyCount) ? message.threadInfo.replyCount > 0 : undefined, onCancel: onCancel, onSubmit: function () {
            if (message.isUserMessage() || message.isFileMessage() || message.isMultipleFilesMessage()) {
                deleteMessage(message).then(function () {
                    // For other status such as PENDING, SCHEDULED, and CANCELED,
                    // invalid parameters error is thrown so nothing happens.
                    onSubmit();
                    onCancel();
                });
            }
        }, submitText: stringSet.MESSAGE_MENU__DELETE, titleText: stringFormatterUtils.getModalDeleteMessageTitle(stringSet, message) }));
};

exports.RemoveMessageModalView = RemoveMessageModalView;
//# sourceMappingURL=bundle-B1sxVEVf.js.map
