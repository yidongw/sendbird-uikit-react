'use strict';

var _tslib = require('./bundle-DRvomNLJ.js');
var React = require('react');
var SuggestedMentionListView = require('./bundle-3ucLy5RS.js');
var Thread_context = require('../Thread/context.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var SuggestedMentionList = function (props) {
    var currentChannel = Thread_context.useThreadContext().currentChannel;
    return (React__default.default.createElement(SuggestedMentionListView.SuggestedMentionListView, _tslib.__assign({}, props, { currentChannel: currentChannel })));
};

exports.SuggestedMentionList = SuggestedMentionList;
//# sourceMappingURL=bundle-BnciA98a.js.map
