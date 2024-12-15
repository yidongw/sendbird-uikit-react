'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var ui_Icon = require('../../ui/Icon.js');
var utils = require('../../chunks/bundle-Ck6ikNW6.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var MenuItem = function (_a) {
    var renderLeft = _a.renderLeft, renderMiddle = _a.renderMiddle, _b = _a.renderRight, renderRight = _b === void 0 ? function (props) { return React__default.default.createElement(MenuItemAction, _tslib.__assign({}, props)); } : _b, renderAccordion = _a.renderAccordion, className = _a.className, onClick = _a.onClick, onKeyDown = _a.onKeyDown, accordionOpened = _a.accordionOpened, setAccordionOpened = _a.setAccordionOpened;
    var useAccordion = typeof renderAccordion === 'function';
    return (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement("div", { className: utils.classnames('sendbird-channel-settings__panel-item', className), onClick: function (e) {
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
        return (React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.CHEVRON_RIGHT, className: [
                'sendbird-accordion__panel-icon-right',
                'sendbird-accordion__panel-icon--chevron',
                accordionOpened ? 'sendbird-accordion__panel-icon--open' : '',
            ].join(' '), height: "24px", width: "24px" }));
    }
    return children || null;
};

exports.MenuItem = MenuItem;
exports.MenuItemAction = MenuItemAction;
exports.default = MenuItem;
//# sourceMappingURL=ChannelSettingsMenuItem.js.map
