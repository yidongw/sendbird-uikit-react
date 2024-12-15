'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ui_Icon = require('./Icon.js');
var ui_AccordionGroup = require('./AccordionGroup.js');
var utils = require('../chunks/bundle-Ck6ikNW6.js');
require('../chunks/bundle-Bdr7xlea.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var Accordion = function (_a) {
    var className = _a.className, id = _a.id, renderTitle = _a.renderTitle, renderContent = _a.renderContent, renderFooter = _a.renderFooter;
    var _b = ui_AccordionGroup.useAccordionGroupContext(), openedListKeys = _b.openedListKeys, addOpenedListKey = _b.addOpenedListKey, removeOpenedListKey = _b.removeOpenedListKey;
    var isOpened = React.useMemo(function () { return openedListKeys.includes(id); }, [openedListKeys]);
    var handleClick = function () {
        if (isOpened) {
            removeOpenedListKey(id);
        }
        else {
            addOpenedListKey(id);
        }
    };
    return (React__default.default.createElement("div", { className: utils.classnames('sendbird-accordion', className, isOpened ? 'sendbird-accordion--opened' : 'sendbird-accordion--closed') },
        React__default.default.createElement("div", { className: "sendbird-accordion__panel-header", id: id, role: "switch", "aria-checked": false, onClick: handleClick, onKeyDown: handleClick, tabIndex: 0 },
            renderTitle(),
            React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.CHEVRON_RIGHT, className: [
                    'sendbird-accordion__panel-icon-right',
                    'sendbird-accordion__panel-icon--chevron',
                    (isOpened ? 'sendbird-accordion__panel-icon--open' : ''),
                ].join(' '), height: "24px", width: "24px" })),
        isOpened && (React__default.default.createElement("div", { className: "sendbird-accordion-opened-list" },
            React__default.default.createElement("div", { className: "sendbird-accordion__list" }, renderContent()),
            renderFooter && (React__default.default.createElement("div", { className: "sendbird-accordion__footer" }, renderFooter()))))));
};

var AccordionGroup = ui_AccordionGroup.AccordionGroupProvider;

exports.AccordionGroupContext = ui_AccordionGroup.AccordionGroupContext;
exports.AccordionGroupProvider = ui_AccordionGroup.AccordionGroupProvider;
exports.useAccordionGroupContext = ui_AccordionGroup.useAccordionGroupContext;
exports.Accordion = Accordion;
exports.AccordionGroup = AccordionGroup;
exports.default = Accordion;
//# sourceMappingURL=Accordion.js.map
