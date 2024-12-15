import React__default, { createContext, useState, useContext } from 'react';
import { n as noop } from '../chunks/bundle-0WaCg6X7.js';

var AccordionGroupContext = createContext({
    openedListKeys: [],
    addOpenedListKey: noop,
    removeOpenedListKey: noop,
    clearOpenedListKeys: noop,
    allowMultipleOpen: false,
});
var AccordionGroupProvider = function (_a) {
    var className = _a.className, children = _a.children, _b = _a.allowMultipleOpen, allowMultipleOpen = _b === void 0 ? false : _b;
    var _c = useState([]), openedListKeys = _c[0], setOpenedListKeys = _c[1];
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
    return (React__default.createElement("div", { className: "sendbird-accordion-group-provider ".concat(className) },
        React__default.createElement(AccordionGroupContext.Provider, { value: {
                openedListKeys: openedListKeys,
                addOpenedListKey: addOpenedListKey,
                removeOpenedListKey: removeOpenedListKey,
                clearOpenedListKeys: clearOpenedListKeys,
                allowMultipleOpen: allowMultipleOpen,
            } }, children)));
};
var useAccordionGroupContext = function () {
    var context = useContext(AccordionGroupContext);
    if (!context)
        throw new Error('No accordion group context available. Make sure you are rending <AccordionGroupContext />.');
    return context;
};

export { AccordionGroupContext, AccordionGroupProvider, AccordionGroupProvider as default, useAccordionGroupContext };
//# sourceMappingURL=AccordionGroup.js.map
