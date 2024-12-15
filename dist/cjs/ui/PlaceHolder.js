'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../chunks/bundle-Bdr7xlea.js');
var React = require('react');
var LocalizationContext = require('../chunks/bundle-Cy1ruNzs.js');
var ui_Icon = require('./Icon.js');
var ui_Label = require('../chunks/bundle-CAR4EIKs.js');
var ui_Loader = require('./Loader.js');
require('../chunks/bundle-Dio8pG-T.js');
require('../chunks/bundle-Ck6ikNW6.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var PlaceHolderTypes = {
    LOADING: 'LOADING',
    NO_CHANNELS: 'NO_CHANNELS',
    NO_MESSAGES: 'NO_MESSAGES',
    WRONG: 'WRONG',
    SEARCH_IN: 'SEARCH_IN',
    SEARCHING: 'SEARCHING',
    NO_RESULTS: 'NO_RESULTS',
};
function PlaceHolder(_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, type = _a.type, iconSize = _a.iconSize, _c = _a.searchInString, searchInString = _c === void 0 ? '' : _c, retryToConnect = _a.retryToConnect;
    var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
    return (React__default.default.createElement("div", { className: _tslib.__spreadArray(_tslib.__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            'sendbird-place-holder',
        ], false).join(' ') },
        type === PlaceHolderTypes.LOADING && (React__default.default.createElement(ui_Loader, { width: iconSize || '48px', height: iconSize || '48px' },
            React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.SPINNER, fillColor: ui_Icon.IconColors.PRIMARY, width: iconSize || '48px', height: iconSize || '48px' }))),
        (type === PlaceHolderTypes.NO_CHANNELS
            || type === PlaceHolderTypes.NO_MESSAGES
            || type === PlaceHolderTypes.WRONG) && (React__default.default.createElement("div", { className: "sendbird-place-holder__body" },
            type === PlaceHolderTypes.NO_CHANNELS && (React__default.default.createElement(ui_Icon.default, { className: "sendbird-place-holder__body__icon", type: ui_Icon.IconTypes.CHAT, fillColor: ui_Icon.IconColors.ON_BACKGROUND_3, width: iconSize || '64px', height: iconSize || '64px' })),
            type === PlaceHolderTypes.WRONG && (React__default.default.createElement(ui_Icon.default, { className: "sendbird-place-holder__body__icon", type: ui_Icon.IconTypes.ERROR, fillColor: ui_Icon.IconColors.ON_BACKGROUND_3, width: iconSize || '64px', height: iconSize || '64px' })),
            type === PlaceHolderTypes.NO_MESSAGES && (React__default.default.createElement(ui_Icon.default, { className: "sendbird-place-holder__body__icon", type: ui_Icon.IconTypes.MESSAGE, fillColor: ui_Icon.IconColors.ON_BACKGROUND_3, width: iconSize || '64px', height: iconSize || '64px' })),
            React__default.default.createElement(ui_Label.Label, { className: "sendbird-place-holder__body__text", type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_2 },
                type === PlaceHolderTypes.NO_CHANNELS && (stringSet.PLACE_HOLDER__NO_CHANNEL),
                type === PlaceHolderTypes.WRONG && (stringSet.PLACE_HOLDER__WRONG),
                type === PlaceHolderTypes.NO_MESSAGES && (stringSet.PLACE_HOLDER__NO_MESSAGES)),
            retryToConnect && (React__default.default.createElement("div", { className: "sendbird-place-holder__body__reconnect", role: "button", onClick: retryToConnect, onKeyPress: retryToConnect, tabIndex: 0 },
                React__default.default.createElement(ui_Icon.default, { className: "sendbird-place-holder__body__reconnect__icon", type: ui_Icon.IconTypes.REFRESH, fillColor: ui_Icon.IconColors.PRIMARY, width: "20px", height: "20px" }),
                React__default.default.createElement(ui_Label.Label, { className: "sendbird-place-holder__body__reconnect__text", type: ui_Label.LabelTypography.BUTTON_1, color: ui_Label.LabelColors.PRIMARY }, stringSet.PLACE_HOLDER__RETRY_TO_CONNECT))))),
        (type === PlaceHolderTypes.NO_RESULTS
            || type === PlaceHolderTypes.SEARCH_IN
            || type === PlaceHolderTypes.SEARCHING) && (React__default.default.createElement("div", { className: "sendbird-place-holder__body--align-top" },
            type === PlaceHolderTypes.SEARCH_IN && (React__default.default.createElement("div", { className: "sendbird-place-holder__body--align-top__text" },
                React__default.default.createElement(ui_Label.Label, { className: "sendbird-place-holder__body--align-top__text__search-in", type: ui_Label.LabelTypography.BUTTON_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, stringSet.SEARCH_IN),
                React__default.default.createElement(ui_Label.Label, { className: "sendbird-place-holder__body--align-top__text__channel-name", type: ui_Label.LabelTypography.BUTTON_2, color: ui_Label.LabelColors.PRIMARY }, "'".concat(searchInString)),
                React__default.default.createElement(ui_Label.Label, { className: "sendbird-place-holder__body--align-top__text__quote", type: ui_Label.LabelTypography.BUTTON_2, color: ui_Label.LabelColors.PRIMARY }, '\''))),
            type === PlaceHolderTypes.SEARCHING && (React__default.default.createElement(ui_Label.Label, { className: "sendbird-place-hlder__body--align-top__searching", type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_2 }, stringSet.SEARCHING)),
            type === PlaceHolderTypes.NO_RESULTS && (React__default.default.createElement(ui_Label.Label, { className: "sendbird-place-hlder__body--align-top__no-result", type: ui_Label.LabelTypography.BODY_1, color: ui_Label.LabelColors.ONBACKGROUND_2 }, stringSet.NO_SEARCHED_MESSAGE))))));
}

exports.PlaceHolderTypes = PlaceHolderTypes;
exports.default = PlaceHolder;
//# sourceMappingURL=PlaceHolder.js.map
