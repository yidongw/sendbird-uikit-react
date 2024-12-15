import { _ as __assign, c as __spreadArray } from '../chunks/bundle-Ck-Lg2K3.js';
import React__default from 'react';
import { u as useLongPress } from '../chunks/bundle-B6cyKQvH.js';
import { n as noop } from '../chunks/bundle-pQHYhigr.js';
import '../chunks/bundle-Bk1oUUzJ.js';

var ReactionButton = React__default.forwardRef(function (props, ref) {
    var className = props.className, width = props.width, height = props.height, selected = props.selected, _a = props.dataSbId, dataSbId = _a === void 0 ? '' : _a, testID = props.testID, onClick = props.onClick, children = props.children;
    var onClickHandler = useLongPress({
        onLongPress: noop,
        onClick: onClick,
    }, {
        shouldPreventDefault: true,
        shouldStopPropagation: true,
    });
    return (React__default.createElement("div", __assign({ className: __spreadArray(__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            "sendbird-reaction-button".concat(selected ? '--selected' : ''),
        ], false).join(' '), ref: ref, role: "button", style: { width: width, height: height } }, onClickHandler, { tabIndex: 0, "data-sb-id": testID !== null && testID !== void 0 ? testID : dataSbId, "data-testid": testID !== null && testID !== void 0 ? testID : dataSbId }),
        React__default.createElement("div", { className: "sendbird-reaction-button__inner" }, children)));
});

export { ReactionButton as default };
//# sourceMappingURL=ReactionButton.js.map
