'use strict';

var React = require('react');
var ui_IconButton = require('../ui/IconButton.js');
var ui_Icon = require('../ui/Icon.js');
var CreateChannel = require('../CreateChannel.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var AddGroupChannelView = function (_a) {
    var createChannelVisible = _a.createChannelVisible, onChangeCreateChannelVisible = _a.onChangeCreateChannelVisible, onBeforeCreateChannel = _a.onBeforeCreateChannel, onCreateChannelClick = _a.onCreateChannelClick, onChannelCreated = _a.onChannelCreated;
    var config = useSendbirdStateContext.useSendbirdStateContext().config;
    return (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement(ui_IconButton, { height: '32px', width: '32px', disabled: !config.isOnline, onClick: function () { return onChangeCreateChannelVisible(true); } },
            React__default.default.createElement(ui_Icon.default, { type: ui_Icon.IconTypes.CREATE, fillColor: ui_Icon.IconColors.PRIMARY, width: '24px', height: '24px' })),
        createChannelVisible && (React__default.default.createElement(CreateChannel, { onCancel: function () { return onChangeCreateChannelVisible(false); }, onChannelCreated: function (channel) {
                onChannelCreated === null || onChannelCreated === void 0 ? void 0 : onChannelCreated(channel);
                onChangeCreateChannelVisible(false);
            }, onBeforeCreateChannel: onBeforeCreateChannel, onCreateChannelClick: onCreateChannelClick }))));
};

exports.AddGroupChannelView = AddGroupChannelView;
//# sourceMappingURL=bundle-BZQNMt45.js.map
