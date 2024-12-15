'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ui_Avatar = require('../chunks/bundle-C8wv9DWs.js');
var ui_Icon = require('./Icon.js');
var ui_Label = require('../chunks/bundle-CAR4EIKs.js');
var LocalizationContext = require('../chunks/bundle-Cy1ruNzs.js');
require('../chunks/bundle-Bdr7xlea.js');
require('./ImageRenderer.js');
require('../chunks/bundle-Ck6ikNW6.js');
require('../chunks/bundle-B4PTJ_bJ.js');
require('../chunks/bundle-Dio8pG-T.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function ThreadReplies(_a, ref) {
    var _b;
    var className = _a.className, threadInfo = _a.threadInfo, onClick = _a.onClick;
    var _c = threadInfo.mostRepliedUsers, mostRepliedUsers = _c === void 0 ? [] : _c, replyCount = threadInfo.replyCount;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    return (React__default.default.createElement("div", { className: "sendbird-ui-thread-replies ".concat(className), role: "button", onClick: function (e) {
            onClick === null || onClick === void 0 ? void 0 : onClick(e);
            e === null || e === void 0 ? void 0 : e.stopPropagation();
        }, onKeyDown: function (e) {
            onClick === null || onClick === void 0 ? void 0 : onClick(e);
            e === null || e === void 0 ? void 0 : e.stopPropagation();
        }, ref: ref },
        React__default.default.createElement("div", { className: "sendbird-ui-thread-replies__user-profiles" },
            mostRepliedUsers.slice(0, 4).map(function (user) {
                return (React__default.default.createElement(ui_Avatar.Avatar, { key: user.userId, className: "sendbird-ui-thread-replies__user-profiles__avatar", src: user === null || user === void 0 ? void 0 : user.profileUrl, alt: "user profile", width: "20px", height: "20px" }));
            }),
            (mostRepliedUsers === null || mostRepliedUsers === void 0 ? void 0 : mostRepliedUsers.length) >= 5 && (React__default.default.createElement("div", { className: "sendbird-ui-thread-replies__user-profiles__avatar" },
                React__default.default.createElement(ui_Avatar.Avatar, { className: "sendbird-ui-thread-replies__user-profiles__avatar__image", src: (_b = mostRepliedUsers === null || mostRepliedUsers === void 0 ? void 0 : mostRepliedUsers[4]) === null || _b === void 0 ? void 0 : _b.profileUrl, alt: "user profile", width: "20px", height: "20px" }),
                React__default.default.createElement("div", { className: "sendbird-ui-thread-replies__user-profiles__avatar__cover" }),
                React__default.default.createElement("div", { className: "sendbird-ui-thread-replies__user-profiles__avatar__plus" },
                    React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.PLUS, fillColor: ui_Icon.IconColors.WHITE, width: "16px", height: "16px" }))))),
        React__default.default.createElement(ui_Label.Label, { className: "sendbird-ui-thread-replies__reply-counts", type: ui_Label.LabelTypography.CAPTION_2, color: ui_Label.LabelColors.PRIMARY }, replyCount === 1
            ? "".concat(replyCount, " ").concat(stringSet.CHANNEL__THREAD_REPLY)
            : "".concat(replyCount > 99 ? stringSet.CHANNEL__THREAD_OVER_MAX : replyCount, " ").concat(stringSet.CHANNEL__THREAD_REPLIES)),
        React__default.default.createElement(ui_Icon.default, { className: "sendbird-ui-thread-replies__icon", type: ui_Icon.IconTypes.CHEVRON_RIGHT, fillColor: ui_Icon.IconColors.PRIMARY, width: "16px", height: "16px" })));
}
var ThreadReplies$1 = React__default.default.forwardRef(ThreadReplies);

exports.ThreadReplies = ThreadReplies;
exports.default = ThreadReplies$1;
//# sourceMappingURL=ThreadReplies.js.map
