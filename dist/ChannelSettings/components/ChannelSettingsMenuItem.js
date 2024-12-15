import { _ as __assign } from '../../chunks/bundle-Ck-Lg2K3.js';
import React__default from 'react';
import Icon, { IconTypes } from '../../ui/Icon.js';
import { c as classnames } from '../../chunks/bundle-pQHYhigr.js';

var MenuItem = function (_a) {
    var renderLeft = _a.renderLeft, renderMiddle = _a.renderMiddle, _b = _a.renderRight, renderRight = _b === void 0 ? function (props) { return React__default.createElement(MenuItemAction, __assign({}, props)); } : _b, renderAccordion = _a.renderAccordion, className = _a.className, onClick = _a.onClick, onKeyDown = _a.onKeyDown, accordionOpened = _a.accordionOpened, setAccordionOpened = _a.setAccordionOpened;
    var useAccordion = typeof renderAccordion === 'function';
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", { className: classnames('sendbird-channel-settings__panel-item', className), onClick: function (e) {
                onClick === null || onClick === void 0 ? void 0 : onClick(e);
                if (useAccordion)
                    setAccordionOpened(!accordionOpened);
            }, onKeyDown: function (e) {
                onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
                if (useAccordion)
                    setAccordionOpened(!accordionOpened);
            } },
            renderLeft(),
            renderMiddle(),
            renderRight({
                useAccordion: useAccordion,
                accordionOpened: accordionOpened,
            })),
        accordionOpened && (renderAccordion === null || renderAccordion === void 0 ? void 0 : renderAccordion())));
};
var MenuItemAction = function (_a) {
    var useAccordion = _a.useAccordion, accordionOpened = _a.accordionOpened, children = _a.children;
    if (useAccordion) {
        return (React__default.createElement(Icon, { type: IconTypes.CHEVRON_RIGHT, className: [
                'sendbird-accordion__panel-icon-right',
                'sendbird-accordion__panel-icon--chevron',
                accordionOpened ? 'sendbird-accordion__panel-icon--open' : '',
            ].join(' '), height: "24px", width: "24px" }));
    }
    return children || null;
};

export { MenuItem, MenuItemAction, MenuItem as default };
//# sourceMappingURL=ChannelSettingsMenuItem.js.map
