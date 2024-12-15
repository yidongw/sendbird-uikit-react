import React__default, { useMemo } from 'react';
import Icon, { IconTypes } from './Icon.js';
import { useAccordionGroupContext, AccordionGroupProvider } from './AccordionGroup.js';
export { AccordionGroupContext } from './AccordionGroup.js';
import { c as classnames } from '../chunks/bundle-0WaCg6X7.js';
import '../chunks/bundle-HcNswZ5p.js';

var Accordion = function (_a) {
    var className = _a.className, id = _a.id, renderTitle = _a.renderTitle, renderContent = _a.renderContent, renderFooter = _a.renderFooter;
    var _b = useAccordionGroupContext(), openedListKeys = _b.openedListKeys, addOpenedListKey = _b.addOpenedListKey, removeOpenedListKey = _b.removeOpenedListKey;
    var isOpened = useMemo(function () { return openedListKeys.includes(id); }, [openedListKeys]);
    var handleClick = function () {
        if (isOpened) {
            removeOpenedListKey(id);
        }
        else {
            addOpenedListKey(id);
        }
    };
    return (React__default.createElement("div", { className: classnames('sendbird-accordion', className, isOpened ? 'sendbird-accordion--opened' : 'sendbird-accordion--closed') },
        React__default.createElement("div", { className: "sendbird-accordion__panel-header", id: id, role: "switch", "aria-checked": false, onClick: handleClick, onKeyDown: handleClick, tabIndex: 0 },
            renderTitle(),
            React__default.createElement(Icon, { type: IconTypes.CHEVRON_RIGHT, className: [
                    'sendbird-accordion__panel-icon-right',
                    'sendbird-accordion__panel-icon--chevron',
                    (isOpened ? 'sendbird-accordion__panel-icon--open' : ''),
                ].join(' '), height: "24px", width: "24px" })),
        isOpened && (React__default.createElement("div", { className: "sendbird-accordion-opened-list" },
            React__default.createElement("div", { className: "sendbird-accordion__list" }, renderContent()),
            renderFooter && (React__default.createElement("div", { className: "sendbird-accordion__footer" }, renderFooter()))))));
};

var AccordionGroup = AccordionGroupProvider;

export { Accordion, AccordionGroup, AccordionGroupProvider, Accordion as default, useAccordionGroupContext };
//# sourceMappingURL=Accordion.js.map
