'use strict';

var React = require('react');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var GroupChannel_components_TypingIndicator = require('../GroupChannel/components/TypingIndicator.js');
var types = require('./bundle-lxEd4uN4.js');
var ui_ConnectionStatus = require('../ui/ConnectionStatus.js');
var ui_PlaceHolder = require('../ui/PlaceHolder.js');
var utils = require('./bundle-Ck6ikNW6.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var GroupChannelUIView = function (props) {
    var _a, _b, _c, _d;
    var isLoading = props.isLoading, isInvalid = props.isInvalid, channelUrl = props.channelUrl;
    var _e = utils.deleteNullish(props), renderChannelHeader = _e.renderChannelHeader, renderMessageList = _e.renderMessageList, renderMessageInput = _e.renderMessageInput, renderTypingIndicator = _e.renderTypingIndicator, renderPlaceholderLoader = _e.renderPlaceholderLoader, renderPlaceholderInvalid = _e.renderPlaceholderInvalid;
    var _f = useSendbirdStateContext.useSendbirdStateContext(), stores = _f.stores, config = _f.config;
    var sdkError = (_a = stores === null || stores === void 0 ? void 0 : stores.sdkStore) === null || _a === void 0 ? void 0 : _a.error;
    var logger = config.logger, isOnline = config.isOnline;
    // Note: This is not a loading status of the message list.
    //  It is just for custom props from the Channel module and is not used in the GroupChannel module. (We should remove this in v4)
    if (isLoading) {
        return React__default.default.createElement("div", { className: "sendbird-conversation" }, (renderPlaceholderLoader === null || renderPlaceholderLoader === void 0 ? void 0 : renderPlaceholderLoader()) || React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.LOADING }));
    }
    if (!channelUrl) {
        return (React__default.default.createElement("div", { className: "sendbird-conversation" }, (renderPlaceholderInvalid === null || renderPlaceholderInvalid === void 0 ? void 0 : renderPlaceholderInvalid()) || React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.NO_CHANNELS })));
    }
    if (isInvalid) {
        return React__default.default.createElement("div", { className: "sendbird-conversation" }, (renderPlaceholderInvalid === null || renderPlaceholderInvalid === void 0 ? void 0 : renderPlaceholderInvalid()) || React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.WRONG }));
    }
    if (sdkError) {
        return (React__default.default.createElement("div", { className: "sendbird-conversation" }, (renderPlaceholderInvalid === null || renderPlaceholderInvalid === void 0 ? void 0 : renderPlaceholderInvalid()) || (React__default.default.createElement(ui_PlaceHolder.default, { type: ui_PlaceHolder.PlaceHolderTypes.WRONG, retryToConnect: function () {
                logger.info('Channel: reconnecting');
                // reconnect();
            } }))));
    }
    return (React__default.default.createElement("div", { className: "sendbird-conversation" }, renderChannelHeader === null || renderChannelHeader === void 0 ? void 0 :
        renderChannelHeader({ className: 'sendbird-conversation__channel-header' }), renderMessageList === null || renderMessageList === void 0 ? void 0 :
        renderMessageList(props),
        React__default.default.createElement("div", { className: "sendbird-conversation__footer" }, renderMessageInput === null || renderMessageInput === void 0 ? void 0 :
            renderMessageInput(),
            React__default.default.createElement("div", { className: "sendbird-conversation__footer__typing-indicator" },
                (renderTypingIndicator === null || renderTypingIndicator === void 0 ? void 0 : renderTypingIndicator())
                    || (((_b = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _b === void 0 ? void 0 : _b.enableTypingIndicator) && ((_d = (_c = config === null || config === void 0 ? void 0 : config.groupChannel) === null || _c === void 0 ? void 0 : _c.typingIndicatorTypes) === null || _d === void 0 ? void 0 : _d.has(types.TypingIndicatorType.Text)) && (React__default.default.createElement(GroupChannel_components_TypingIndicator.TypingIndicator, { channelUrl: channelUrl }))),
                !isOnline && React__default.default.createElement(ui_ConnectionStatus, null)))));
};

exports.GroupChannelUIView = GroupChannelUIView;
//# sourceMappingURL=bundle-D0lm7gpy.js.map
