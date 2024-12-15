import React__default from 'react';
import { useSendbirdStateContext } from '../../useSendbirdStateContext.js';
import { useChannelSettingsContext } from '../context.js';
import { n as noop } from '../../chunks/bundle-0WaCg6X7.js';
import { M as Modal } from '../../chunks/bundle-ja8H3E0K.js';
import { u as useLocalization } from '../../chunks/bundle-DhMUg-L7.js';
import { u as useMediaQueryContext } from '../../chunks/bundle-DnSobLtx.js';
import TextButton from '../../ui/TextButton.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../chunks/bundle-Qkp2VIaZ.js';
import { a as isDefaultChannelName } from '../../chunks/bundle-Bd-i99nk.js';
import '../../withSendbird.js';
import '../../chunks/bundle-HcNswZ5p.js';
import '@sendbird/chat/groupChannel';
import '../../chunks/bundle-B91Bhfde.js';
import '@sendbird/uikit-tools';
import 'css-vars-ponyfill';
import '@sendbird/chat';
import '@sendbird/chat/openChannel';
import '../../chunks/bundle-zy1mnw8U.js';
import '../../chunks/bundle-DQk0aENq.js';
import '../../chunks/bundle-DjLJFwD7.js';
import '../../chunks/bundle-BKzcG-aC.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../chunks/bundle-C5iY_IvV.js';
import '../../ui/IconButton.js';
import '../../chunks/bundle-zVlBKrSk.js';
import '../../ui/Button.js';
import '../../ui/Icon.js';
import '../../chunks/bundle-dybWaw0v.js';
import '../../chunks/bundle-DGMsaaNU.js';
import '../../utils/message/getOutgoingMessageState.js';
import '../../chunks/bundle-DB7YSrIT.js';

var LeaveChannel = function (props) {
    var _a, _b;
    var _c = props.onSubmit, onSubmit = _c === void 0 ? noop : _c, _d = props.onCancel, onCancel = _d === void 0 ? noop : _d;
    var _e = useChannelSettingsContext(), channel = _e.channel, onLeaveChannel = _e.onLeaveChannel;
    var stringSet = useLocalization().stringSet;
    var state = useSendbirdStateContext();
    var logger = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.logger;
    var isOnline = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.isOnline;
    var isMobile = useMediaQueryContext().isMobile;
    var getChannelName = function (channel) {
        if (!(channel === null || channel === void 0 ? void 0 : channel.name) && !(channel === null || channel === void 0 ? void 0 : channel.members))
            return stringSet.NO_TITLE;
        if (isDefaultChannelName(channel))
            return ((channel === null || channel === void 0 ? void 0 : channel.members) || []).map(function (member) { return member.nickname || stringSet.NO_NAME; }).join(', ');
        return channel.name;
    };
    if (isMobile) {
        return (React__default.createElement(Modal, { className: "sendbird-channel-settings__leave--mobile", titleText: getChannelName(channel), hideFooter: true, isCloseOnClickOutside: true, onCancel: onCancel },
            React__default.createElement(TextButton, { onClick: function () {
                    logger.info('ChannelSettings: Leaving channel', channel);
                    channel === null || channel === void 0 ? void 0 : channel.leave().then(function () {
                        logger.info('ChannelSettings: Leaving channel successful!', channel);
                        onLeaveChannel === null || onLeaveChannel === void 0 ? void 0 : onLeaveChannel();
                    });
                }, className: "sendbird-channel-settings__leave-label--mobile" },
                React__default.createElement(Label, { type: LabelTypography.SUBTITLE_1, color: LabelColors.ONBACKGROUND_1 }, stringSet.CHANNEL_PREVIEW_MOBILE_LEAVE))));
    }
    return (React__default.createElement(Modal, { isFullScreenOnMobile: true, disabled: !isOnline, onCancel: onCancel, onSubmit: function () {
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

export { LeaveChannel as default };
//# sourceMappingURL=LeaveChannel.js.map
