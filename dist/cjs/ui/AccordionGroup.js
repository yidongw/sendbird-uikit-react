'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var utils = require('../chunks/bundle-Ck6ikNW6.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var AccordionGroupContext = React.createContext({
    openedListKeys: [],
    addOpenedListKey: utils.noop,
    removeOpenedListKey: utils.noop,
    clearOpenedListKeys: utils.noop,
    allowMultipleOpen: false,
});
var AccordionGroupProvider = function (_a) {
    var className = _a.className, children = _a.children, _b = _a.allowMultipleOpen, allowMultipleOpen = _b === void 0 ? false : _b;
    var _c = React.useState([]), openedListKeys = _c[0], setOpenedListKeys = _c[1];
    var addOpenedListKey = function (key) {
        setOpenedListKeys(function (prevList) {
            if (!allowMultipleOpen) {
                return [key];
            }
            prevList.push(key);
            return prevList;
        });
    };
    var removeOpenedListKey = function (key) {
        setOpenedListKeys(function (prevList) { return prevList.filter(function (k) { return k !== key; }); });
    };
    var clearOpenedListKeys = function () {
        setOpenedListKeys([]);
    };
    return (React__default.default.createElement("div", { className: "sendbird-accordion-group-provider ".concat(className) },
        React__default.default.createElement(AccordionGroupContext.Provider, { value: {
                openedListKeys: openedListKeys,
                addOpenedListKey: addOpenedListKey,
                removeOpenedListKey: removeOpenedListKey,
                clearOpenedListKeys: clearOpenedListKeys,
                allowMultipleOpen: allowMultipleOpen,
            } }, children)));
};
var useAccordionGroupContext = function () {
    var context = React.useContext(AccordionGroupContext);
    if (!context)
        throw new Error('No accordion group context available. Make sure you are rending <AccordionGroupContext />.');
    return context;
};

exports.AccordionGroupContext = AccordionGroupContext;
exports.AccordionGroupProvider = AccordionGroupProvider;
exports.default = AccordionGroupProvider;
exports.useAccordionGroupContext = useAccordionGroupContext;
//# sourceMappingURL=AccordionGroup.js.map
