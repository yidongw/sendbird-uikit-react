'use strict';

var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ChannelSettings_context = require('../context.js');
var utils = require('../../chunks/bundle-Ck6ikNW6.js');
var ui_Modal = require('../../chunks/bundle-DZhkNDpN.js');
var LocalizationContext = require('../../chunks/bundle-Cy1ruNzs.js');
var MediaQueryContext = require('../../chunks/bundle-DrIKAEHN.js');
var ui_TextButton = require('../../ui/TextButton.js');
var ui_Label = require('../../chunks/bundle-CAR4EIKs.js');
var index = require('../../chunks/bundle-BLoixwYr.js');
require('../../withSendbird.js');
require('../../chunks/bundle-Bdr7xlea.js');
require('@sendbird/chat/groupChannel');
require('../../chunks/bundle-DgjptBQW.js');
require('@sendbird/uikit-tools');
require('css-vars-ponyfill');
require('@sendbird/chat');
require('@sendbird/chat/openChannel');
require('../../chunks/bundle-CJM9Pdwg.js');
require('../../chunks/bundle-BD0wJiNh.js');
require('../../chunks/bundle-Dr9yFtKa.js');
require('../../chunks/bundle-BKyZTqvq.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('../../chunks/bundle-C1poxl5k.js');
require('../../ui/IconButton.js');
require('../../chunks/bundle-Dh0NAI0D.js');
require('../../ui/Button.js');
require('../../ui/Icon.js');
require('../../chunks/bundle-Dio8pG-T.js');
require('../../chunks/bundle-CLzI6bbe.js');
require('../../utils/message/getOutgoingMessageState.js');
require('../../chunks/bundle-C2CwvM-u.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var LeaveChannel = function (props) {
    var _a, _b;
    var _c = props.onSubmit, onSubmit = _c === void 0 ? utils.noop : _c, _d = props.onCancel, onCancel = _d === void 0 ? utils.noop : _d;
    var _e = ChannelSettings_context.useChannelSettingsContext(), channel = _e.channel, onLeaveChannel = _e.onLeaveChannel;
    var stringSet = LocalizationContext.useLocalization().stringSet;
    var state = useSendbirdStateContext.useSendbirdStateContext();
    var logger = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.logger;
    var isOnline = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.isOnline;
    var isMobile = MediaQueryContext.useMediaQueryContext().isMobile;
    var getChannelName = function (channel) {
        if (!(channel === null || channel === void 0 ? void 0 : channel.name) && !(channel === null || channel === void 0 ? void 0 : channel.members))
            return stringSet.NO_TITLE;
        if (index.isDefaultChannelName(channel))
            return ((channel === null || channel === void 0 ? void 0 : channel.members) || []).map(function (member) { return member.nickname || stringSet.NO_NAME; }).join(', ');
        return channel.name;
    };
    if (isMobile) {
        return (React__default.default.createElement(ui_Modal.Modal, { className: "sendbird-channel-settings__leave--mobile", titleText: getChannelName(channel), hideFooter: true, isCloseOnClickOutside: true, onCancel: onCancel },
            React__default.default.createElement(ui_TextButton, { onClick: function () {
                    logger.info('ChannelSettings: Leaving channel', channel);
                    channel === null || channel === void 0 ? void 0 : channel.leave().then(function () {
                        logger.info('ChannelSettings: Leaving channel successful!', channel);
                        onLeaveChannel === null || onLeaveChannel === void 0 ? void 0 : onLeaveChannel();
                    });
                }, className: "sendbird-channel-settings__leave-label--mobile" },
                React__default.default.createElement(ui_Label.Label, { type: ui_Label.LabelTypography.SUBTITLE_1, color: ui_Label.LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_PREVIEW_MOBILE_LEAVE))));
    }
    return (React__default.default.createElement(ui_Modal.Modal, { isFullScreenOnMobile: true, disabled: !isOnline, onCancel: onCancel, onSubmit: function () {
            logger.info('ChannelSettings: Leaving channel', channel);
            channel === null || channel === void 0 ? void 0 : channel.leave().then(function () {
                logger.info('ChannelSettings: Leaving channel successful!', channel);
                // is for backward compactability
                if (onLeaveChannel) {
                    onLeaveChannel();
                }
                else {
                    onSubmit();
                }
            });
        }, submitText: stringSet.MODAL__LEAVE_CHANNEL__FOOTER, titleText: stringSet.MODAL__LEAVE_CHANNEL__TITLE }));
};

module.exports = LeaveChannel;
//# sourceMappingURL=LeaveChannel.js.map
