'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ui_Label = require('../chunks/bundle-D8-2bEdY.js');
require('../chunks/bundle-DRvomNLJ.js');
require('../chunks/bundle-Q9YDOzjz.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var InputLabel = function (_a) {
    var children = _a.children;
    return (React__default.default.createElement(ui_Label.Label, { className: "sendbird-input-label", type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_1 }, children));
};
var Input = React__default.default.forwardRef(function (props, ref) {
    var name = props.name, required = props.required, disabled = props.disabled, value = props.value, placeHolder = props.placeHolder, _a = props.autoFocus, autoFocus = _a === void 0 ? false : _a;
    var _b = React.useState(value), inputValue = _b[0], setInputValue = _b[1];
    return (React__default.default.createElement("div", { className: "sendbird-input" },
        React__default.default.createElement("input", { className: "sendbird-input__input", ref: ref, name: name, required: required, disabled: disabled, value: inputValue, onChange: function (e) {
                setInputValue(e.target.value);
            }, autoFocus: autoFocus }),
        (placeHolder && !inputValue) && (React__default.default.createElement(ui_Label.Label, { className: "sendbird-input__placeholder", type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_3 }, placeHolder))));
});

exports.InputLabel = InputLabel;
exports.default = Input;
//# sourceMappingURL=Input.js.map
