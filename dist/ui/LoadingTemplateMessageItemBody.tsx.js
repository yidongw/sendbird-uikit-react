import React__default from 'react';
import Loader from './Loader.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import { c as classnames } from '../chunks/bundle-pQHYhigr.js';
import '../chunks/bundle-Ck-Lg2K3.js';

var TEMPLATE_LOADING_SPINNER_SIZE = '40px';
function LoadingTemplateMessageItemBody(_a) {
    var className = _a.className, isByMe = _a.isByMe;
    return (React__default.createElement("div", { className: classnames(className, isByMe ? 'outgoing' : 'incoming', 'sendbird-template-loading-message-item-body') },
        React__default.createElement(Loader, { className: "sendbird-message-status__icon", testID: "sendbird-message-status-icon", width: TEMPLATE_LOADING_SPINNER_SIZE, height: TEMPLATE_LOADING_SPINNER_SIZE },
            React__default.createElement(Icon, { type: IconTypes.SPINNER, fillColor: IconColors.CONTENT_INVERSE_3, width: TEMPLATE_LOADING_SPINNER_SIZE, height: TEMPLATE_LOADING_SPINNER_SIZE }))));
}

export { LoadingTemplateMessageItemBody, LoadingTemplateMessageItemBody as default };
//# sourceMappingURL=LoadingTemplateMessageItemBody.tsx.js.map
