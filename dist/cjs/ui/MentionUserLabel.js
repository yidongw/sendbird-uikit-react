'use strict';

var React = require('react');
var consts = require('../chunks/bundle-DhOkJsb_.js');
var utils = require('../chunks/bundle-BYHj6UqH.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

function MentionUserLabel(_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, _c = _a.isReverse, isReverse = _c === void 0 ? false : _c, color = _a.color, userId = _a.userId;
    return (React__default.default.createElement("span", { className: utils.classnames(consts.MENTION_USER_LABEL_CLASSNAME, className, isReverse && 'reverse', color), contentEditable: false, "data-userid": userId, "data-sb-mention": true }, children));
}

module.exports = MentionUserLabel;
//# sourceMappingURL=MentionUserLabel.js.map
