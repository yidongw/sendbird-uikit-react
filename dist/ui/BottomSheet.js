import React__default, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { a as MODAL_ROOT } from '../chunks/bundle-ja8H3E0K.js';
import { useSendbirdStateContext } from '../useSendbirdStateContext.js';
import '../chunks/bundle-HcNswZ5p.js';
import '../chunks/bundle-Bd-i99nk.js';
import '@sendbird/chat/groupChannel';
import '../utils/message/getOutgoingMessageState.js';
import '../chunks/bundle-DjLJFwD7.js';
import '../chunks/bundle-DB7YSrIT.js';
import '../chunks/bundle-DQk0aENq.js';
import '../chunks/bundle-0WaCg6X7.js';
import '../chunks/bundle-DhMUg-L7.js';
import '../chunks/bundle-dybWaw0v.js';
import '../chunks/bundle-DnSobLtx.js';
import './IconButton.js';
import './Button.js';
import '../chunks/bundle-Qkp2VIaZ.js';
import './Icon.js';
import '@sendbird/uikit-tools';
import '../withSendbird.js';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '../chunks/bundle-C5iY_IvV.js';
import '@sendbird/chat/openChannel';
import '../chunks/bundle-zy1mnw8U.js';
import '../chunks/bundle-BKzcG-aC.js';
import './SortByRow.js';

var BottomSheet = function (props) {
    var _a, _b, _c;
    var _d = props.className, className = _d === void 0 ? '' : _d, children = props.children, onBackdropClick = props.onBackdropClick;
    var logger = (_b = (_a = useSendbirdStateContext()) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.logger;
    // https://github.com/testing-library/react-testing-library/issues/62#issuecomment-438653348
    var portalRoot = useRef();
    portalRoot.current = document.getElementById(MODAL_ROOT);
    if (!portalRoot.current) {
        portalRoot.current = document.createElement('div');
        portalRoot.current.setAttribute('id', MODAL_ROOT);
        document.body.appendChild(portalRoot.current);
        (_c = logger === null || logger === void 0 ? void 0 : logger.warning) === null || _c === void 0 ? void 0 : _c.call(logger, '@sendbird/uikit-react/ui/BottomSheet | Should put a ModalRoot to use the BottomSheet.');
    }
    return createPortal(React__default.createElement("div", { className: "".concat(className, " sendbird-bottomsheet") },
        React__default.createElement("div", { className: "sendbird-bottomsheet__content", role: 'dialog', "aria-modal": 'true', "aria-expanded": 'true' }, children),
        React__default.createElement("div", { className: "sendbird-bottomsheet__backdrop", onClick: function (e) {
                e === null || e === void 0 ? void 0 : e.stopPropagation();
                onBackdropClick === null || onBackdropClick === void 0 ? void 0 : onBackdropClick();
            } })), portalRoot.current);
};

export { BottomSheet as default };
//# sourceMappingURL=BottomSheet.js.map
