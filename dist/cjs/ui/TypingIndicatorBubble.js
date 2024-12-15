'use strict';

var React = require('react');
var ui_Avatar = require('../chunks/bundle-Dmsb_oex.js');
require('../chunks/bundle-DRvomNLJ.js');
require('./ImageRenderer.js');
require('../chunks/bundle-BYHj6UqH.js');
require('../chunks/bundle-BvFqbvri.js');
require('./Icon.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var TypingDots = function () {
    return (React__default.default.createElement("div", { className: 'typing-dots-container' },
        React__default.default.createElement("span", null),
        React__default.default.createElement("span", null),
        React__default.default.createElement("span", null)));
};

var AVATAR_BORDER_SIZE = 2;
var AVATAR_DIAMETER_WITHOUT_BORDER = 28;
var AVATAR_DIAMETER = AVATAR_DIAMETER_WITHOUT_BORDER + (AVATAR_BORDER_SIZE * 2);
var LEFT_GAP = 24;
var MAX_PROFILES_COUNT = 3;
var LEFT_FOR_BORDER = AVATAR_BORDER_SIZE;
var AvatarStack = function (props) {
    var sources = props.sources, max = props.max;
    return (React__default.default.createElement(React__default.default.Fragment, null,
        " ",
        sources.slice(0, max).map(function (src, index) { return (React__default.default.createElement(ui_Avatar.Avatar, { className: 'sendbird-message-content__left__avatar multiple', src: src || '', key: "avatar_stack_item_".concat(src), 
            // TODO: Divide getting profileUrl logic to utils
            width: "".concat(AVATAR_DIAMETER_WITHOUT_BORDER, "px"), height: "".concat(AVATAR_DIAMETER_WITHOUT_BORDER, "px"), zIndex: index, left: "".concat(index * LEFT_GAP - LEFT_FOR_BORDER, "px") })); }),
        " "));
};
var TypingIndicatorBubbleAvatar = function (props) {
    var typingMembers = props.typingMembers;
    var membersCount = typingMembers.length;
    var displayCount = Math.min(membersCount, 4);
    var hiddenCount = membersCount - MAX_PROFILES_COUNT;
    var superImposedWidth = ((displayCount - 1) * (AVATAR_DIAMETER - LEFT_GAP));
    var rightPaddingSize = 12;
    return (React__default.default.createElement("div", { className: 'sendbird-message-content__left incoming', style: {
            minWidth: (displayCount * AVATAR_DIAMETER) - superImposedWidth + rightPaddingSize,
        } },
        React__default.default.createElement(AvatarStack, { sources: typingMembers.map(function (member) { return member.profileUrl; }), max: MAX_PROFILES_COUNT }),
        hiddenCount > 0
            ? React__default.default.createElement(ui_Avatar.Avatar, { className: 'sendbird-message-content__left__avatar multiple', 
                // TODO: Divide getting profileUrl logic to utils
                width: "".concat(AVATAR_DIAMETER_WITHOUT_BORDER, "px"), height: "".concat(AVATAR_DIAMETER_WITHOUT_BORDER, "px"), zIndex: MAX_PROFILES_COUNT, left: "".concat(MAX_PROFILES_COUNT * LEFT_GAP, "px"), customDefaultComponent: function (_a) {
                    var width = _a.width, height = _a.height;
                    return (React__default.default.createElement(ui_Avatar.AvatarDefault, { width: width, height: height, text: "+".concat(hiddenCount) }));
                } })
            : null));
};
var TypingIndicatorBubble = function (props) {
    var typingMembers = props.typingMembers, handleScroll = props.handleScroll;
    React.useLayoutEffect(function () {
        // Keep the scrollBottom value after fetching new message list
        handleScroll === null || handleScroll === void 0 ? void 0 : handleScroll(true);
    }, []);
    if (typingMembers.length === 0)
        return null;
    return React__default.default.createElement("div", { className: 'sendbird-message-content incoming', style: { marginBottom: '2px' } },
        React__default.default.createElement(TypingIndicatorBubbleAvatar, { typingMembers: typingMembers }),
        React__default.default.createElement("div", { className: 'sendbird-message-content__middle' },
            React__default.default.createElement(TypingDots, null)));
};

module.exports = TypingIndicatorBubble;
//# sourceMappingURL=TypingIndicatorBubble.js.map
