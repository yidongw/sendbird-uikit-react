'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ui_Loader = require('./Loader.js');
var ui_Icon = require('./Icon.js');
var utils = require('../chunks/bundle-BYHj6UqH.js');
require('../chunks/bundle-DRvomNLJ.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var TEMPLATE_LOADING_SPINNER_SIZE = '40px';
function LoadingTemplateMessageItemBody(_a) {
    var className = _a.className, isByMe = _a.isByMe;
    return (React__default.default.createElement("div", { className: utils.classnames(className, isByMe ? 'outgoing' : 'incoming', 'sendbird-template-loading-message-item-body') },
        React__default.default.createElement(ui_Loader, { className: "sendbird-message-status__icon", testID: "sendbird-message-status-icon", width: TEMPLATE_LOADING_SPINNER_SIZE, height: TEMPLATE_LOADING_SPINNER_SIZE },
            React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.SPINNER, fillColor: ui_Icon.IconColors.CONTENT_INVERSE_3, width: TEMPLATE_LOADING_SPINNER_SIZE, height: TEMPLATE_LOADING_SPINNER_SIZE }))));
}

exports.LoadingTemplateMessageItemBody = LoadingTemplateMessageItemBody;
exports.default = LoadingTemplateMessageItemBody;
//# sourceMappingURL=LoadingTemplateMessageItemBody.tsx.js.map
