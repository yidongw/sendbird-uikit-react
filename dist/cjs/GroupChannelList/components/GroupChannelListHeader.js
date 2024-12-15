'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var LocalizationContext = require('../../chunks/bundle-Cy1ruNzs.js');
var ui_Avatar = require('../../chunks/bundle-C8wv9DWs.js');
var ui_Label = require('../../chunks/bundle-CAR4EIKs.js');
var ui_Header = require('../../ui/Header.js');
var utils = require('../../chunks/bundle-Ck6ikNW6.js');
require('../../withSendbird.js');
require('../../chunks/bundle-Bdr7xlea.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-DrIKAEHN.js');
require('../../ui/TextButton.js');
require('../../chunks/bundle-CLzI6bbe.js');
require('../../ui/IconButton.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var GroupChannelListHeader = function (_a) {
    var renderTitle = _a.renderTitle, renderIconButton = _a.renderIconButton, onEdit = _a.onEdit, allowProfileEdit = _a.allowProfileEdit, 
    // Header custom props
    renderLeft = _a.renderLeft, renderMiddle = _a.renderMiddle, renderRight = _a.renderRight;
    var stores = useSendbirdStateContext.useSendbirdStateContext().stores;
    var user = stores.userStore.user;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var renderProfile = renderMiddle !== null && renderMiddle !== void 0 ? renderMiddle : renderTitle;
    return (React__default.default.createElement(ui_Header.default, { className: utils.classnames('sendbird-channel-header', allowProfileEdit && 'sendbird-channel-header--allow-edit'), renderLeft: renderLeft, renderMiddle: function () {
            var _a;
            return ((_a = renderProfile === null || renderProfile === void 0 ? void 0 : renderProfile()) !== null && _a !== void 0 ? _a : (React__default.default.createElement("div", { className: "sendbird-channel-header__title", role: "button", onClick: function () {
                    onEdit === null || onEdit === void 0 ? void 0 : onEdit();
                }, onKeyDown: function () {
                    onEdit === null || onEdit === void 0 ? void 0 : onEdit();
                }, tabIndex: 0 },
                React__default.default.createElement("div", { className: "sendbird-channel-header__title__left" },
                    React__default.default.createElement(ui_Avatar.Avatar, { width: "32px", height: "32px", src: user.profileUrl, alt: user.nickname })),
                React__default.default.createElement("div", { className: "sendbird-channel-header__title__right" },
                    React__default.default.createElement(ui_Label.Label, { className: "sendbird-channel-header__title__right__name", type: ui_Label.LabelTypography.SUBTITLE_2, color: ui_Label.LabelColors.ONBACKGROUND_1 }, user.nickname || stringSet.NO_NAME),
                    React__default.default.createElement(ui_Label.Label, { className: "sendbird-channel-header__title__right__user-id", type: ui_Label.LabelTypography.BODY_2, color: ui_Label.LabelColors.ONBACKGROUND_2 }, user.userId)))));
        }, renderRight: renderRight !== null && renderRight !== void 0 ? renderRight : renderIconButton }));
};

exports.GroupChannelListHeader = GroupChannelListHeader;
exports.default = GroupChannelListHeader;
//# sourceMappingURL=GroupChannelListHeader.js.map
