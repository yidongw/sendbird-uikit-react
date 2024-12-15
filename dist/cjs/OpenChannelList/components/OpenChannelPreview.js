'use strict';

var React = require('react');
var ui_Avatar = require('../../chunks/bundle-C8wv9DWs.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Label = require('../../chunks/bundle-CAR4EIKs.js');
var utils = require('../../chunks/bundle-Ck6ikNW6.js');
require('../../chunks/bundle-Bdr7xlea.js');
require('../../ui/ImageRenderer.js');
require('../../chunks/bundle-B4PTJ_bJ.js');
require('../../chunks/bundle-Dio8pG-T.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function OpenChannelPreview(_a) {
    var className = _a.className, isSelected = _a.isSelected, channel = _a.channel, onClick = _a.onClick;
    return (React__default.default.createElement("div", { className: utils.classnames('sendbird-open-channel-preview', isSelected && 'selected', className), onClick: onClick },
        React__default.default.createElement("div", { className: "sendbird-open-channel-preview__cover-image" },
            React__default.default.createElement(ui_Avatar.Avatar, { className: "sendbird-open-channel-preview__cover-image__avatar", src: channel === null || channel === void 0 ? void 0 : channel.coverUrl, alt: "cover-image", width: "42px", height: "42px", customDefaultComponent: function () { return (React__default.default.createElement("div", { className: "sendbird-open-channel-preview__cover-image__avatar--default" },
                    React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.CHANNELS, fillColor: ui_Icon.IconColors.CONTENT, width: "24px", height: "24px" }))); } })),
        React__default.default.createElement("div", { className: "sendbird-open-channel-preview__context" },
            React__default.default.createElement("div", { className: "sendbird-open-channel-preview__context__title" },
                React__default.default.createElement(ui_Label.Label, { className: utils.classnames('sendbird-open-channel-preview__context__title__channel-name', (channel === null || channel === void 0 ? void 0 : channel.isFrozen) && 'frozen'), type: ui_Label.LabelTypography.SUBTITLE_2, color: isSelected ? ui_Label.LabelColors.PRIMARY : ui_Label.LabelColors.ONBACKGROUND_1 }, channel === null || channel === void 0 ? void 0 : channel.name),
                (channel === null || channel === void 0 ? void 0 : channel.isFrozen)
                    ? (React__default.default.createElement(ui_Icon.default, { className: "sendbird-open-channel-preview__context__title__frozen", type: ui_Icon.IconTypes.FREEZE, fillColor: ui_Icon.IconColors.PRIMARY, width: "16px", height: "16px" })) : ''),
            React__default.default.createElement("div", { className: "sendbird-open-channel-preview__context__participants" },
                React__default.default.createElement(ui_Icon.default, { className: "sendbird-open-channel-preview__context__participants__icon", type: ui_Icon.IconTypes.MEMBERS, fillColor: ui_Icon.IconColors.ON_BACKGROUND_2, width: "14px", height: "14px" }),
                React__default.default.createElement(ui_Label.Label, { className: "sendbird-open-channel-preview__context__participants__count", type: ui_Label.LabelTypography.CAPTION_3, color: ui_Label.LabelColors.ONBACKGROUND_2 }, (channel === null || channel === void 0 ? void 0 : channel.participantCount) || '0')))));
}

module.exports = OpenChannelPreview;
//# sourceMappingURL=OpenChannelPreview.js.map
